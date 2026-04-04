/**
 * i18n.js — Lightweight Internationalization
 * Handles loading translations and updating the DOM
 */

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'hi'];

class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('preferred_lang') || DEFAULT_LANG;
    this.translations = {};
  }

  async init() {
    await this.loadTranslations(this.currentLang);
    this.updateDOM();
    this.updateActiveSwitcher();
    this.setHtmlLang();
  }

  async loadTranslations(lang) {
    if (this.translations[lang]) return;
    try {
      const response = await fetch(`/locales/${lang}.json`);
      this.translations[lang] = await response.json();
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  }

  async switchLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    
    this.currentLang = lang;
    localStorage.setItem('preferred_lang', lang);
    
    await this.loadTranslations(lang);
    this.updateDOM();
    this.updateActiveSwitcher();
    this.setHtmlLang();
    
    // Dispatch custom event for other scripts to react if needed
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  updateDOM() {
    const strings = this.translations[this.currentLang];
    if (!strings) return;

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (strings[key]) {
        // Use innerHTML if the string contains tags (like <em>)
        if (strings[key].includes('<') && strings[key].includes('>')) {
          el.innerHTML = strings[key];
        } else {
          el.textContent = strings[key];
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (strings[key]) {
        el.placeholder = strings[key];
      }
    });

    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      if (strings[key]) {
        el.setAttribute('aria-label', strings[key]);
      }
    });

    // Update meta tags
    const title = strings['meta_title'];
    if (title) document.title = title;

    const desc = strings['meta_desc'];
    if (desc) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', desc);
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', desc);
    }
  }

  updateActiveSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  setHtmlLang() {
    document.documentElement.lang = this.currentLang;
    // For Hindi, we might want to apply specific font styles globally
    if (this.currentLang === 'hi') {
      document.body.classList.add('lang-hi');
    } else {
      document.body.classList.remove('lang-hi');
    }
  }
}

// Initialize and export
const i18n = new I18n();
document.addEventListener('DOMContentLoaded', () => i18n.init());

// Exposed for the language switcher buttons
window.switchLanguage = (lang) => i18n.switchLanguage(lang);

export default i18n;
