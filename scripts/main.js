/* ============================================================
   VIKAS KUMAR — PERSONAL WEBSITE
   Main JavaScript — Interactions & Animations
   ============================================================ */

// ── Navbar Scroll Effect ────────────────────────────────────
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

function handleNavbarScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
  lastScrollY = scrollY;
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ── Mobile Hamburger Menu ───────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── Active Nav Link on Scroll ───────────────────────────────
const sections = document.querySelectorAll('.section');
const navLinkElements = document.querySelectorAll('.navbar__link');

function updateActiveLink() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

// ── Scroll Reveal Animation ─────────────────────────────────
function setupRevealAnimations() {
  // Mark elements for reveal
  const revealSelectors = [
    '.work-item',
    '.blog-item',
    '.thought-item',
    '.elsewhere-card',
    '.contact-email',
    '.hero__bio',
    '.hero__photo-wrapper',
    '.section-intro',
    '.impact-stat',
    '.now-block',
    '.education-item',
    '.skill-item',
    '.skills-category'
  ];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
    });
  });

  // IntersectionObserver for reveal
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger animations for sibling items
        const parent = entry.target.parentElement;
        const siblings = parent ? Array.from(parent.querySelectorAll('.reveal')) : [];
        const index = siblings.indexOf(entry.target);
        const delay = Math.min(index * 80, 400);

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

// ── Smooth scroll for logo click ────────────────────────────
document.getElementById('nav-logo').addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Initialize ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  handleNavbarScroll();
  updateActiveLink();
});
