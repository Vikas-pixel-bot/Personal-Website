---
name: Vikas Personal Website — Design System
description: Standardized design elements, look-feel, colour scheme, typography, layout rules, and component patterns for building Vikas's personal portfolio and thought-leadership website. Inspired by akhilrajgupta.com.
---

# Vikas Personal Website — Design System & Skill

> **Reference**: [akhilrajgupta.com](https://akhilrajgupta.com) — a minimal, scholarly, single-column personal site with warm tones, serif headings, and generous whitespace.

---

## 1. Design Philosophy

| Principle | Description |
|---|---|
| **Minimal & Intentional** | Every element earns its place. No clutter, no decorative noise. |
| **Content-First** | The writing, thoughts, and work are the hero — the design stays out of the way. |
| **Warm & Approachable** | Soft warm backgrounds and serif typography convey trust, authority, and empathy — fitting for the development/education sector. |
| **Scholarly, Not Corporate** | The feel should be that of a thoughtful practitioner's journal, not a corporate portfolio. |
| **Quiet Confidence** | Subtle micro-interactions and restrained colour use signal professionalism without shouting. |

---

## 2. Colour Palette

### Primary Palette (Warm Minimal)

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#F0EDE8` | Page background — warm off-white/parchment |
| `--color-bg-alt` | `#E8E4DD` | Alternate section background, card backgrounds |
| `--color-surface` | `#FFFFFF` | Navbar background, elevated cards |
| `--color-text-primary` | `#1A1A1A` | Headings and primary body text |
| `--color-text-body` | `#3D3D3D` | Body paragraphs |
| `--color-text-muted` | `#6B6B6B` | Secondary text, dates, meta info, descriptions |
| `--color-text-label` | `#7A6E5D` | Section labels (warm olive-brown) |
| `--color-accent` | `#4A6741` | Primary accent — muted forest green (ties to growth, education, development) |
| `--color-accent-hover` | `#3B5334` | Accent hover state |
| `--color-accent-light` | `#E8F0E6` | Accent backgrounds for tags/badges |
| `--color-border` | `#D4CFC7` | Subtle dividers and card borders |
| `--color-border-light` | `#E5E1DA` | Very subtle separators |
| `--color-top-bar` | `linear-gradient(90deg, #A8C4A0 0%, #7A9E6E 50%, #4A6741 100%)` | Top decorative gradient bar |
| `--color-footer-bg` | `#2C2C2C` | Footer background (dark) |
| `--color-footer-text` | `#B0B0B0` | Footer text |

### Dark Mode (Optional, Future)

| Token | Hex |
|---|---|
| `--color-bg` | `#1A1D1A` |
| `--color-surface` | `#242824` |
| `--color-text-primary` | `#E8E4DD` |
| `--color-accent` | `#7ABF6E` |

> **Note**: Dark mode is optional for Phase 1. The light warm palette is the primary design.

---

## 3. Typography

### Font Stack

| Role | Font Family | Fallback | Source |
|---|---|---|---|
| **Headings / Logo** | `'Playfair Display'` | `Georgia, 'Times New Roman', serif` | Google Fonts |
| **Body / Nav / UI** | `'Inter'` | `'Segoe UI', system-ui, sans-serif` | Google Fonts |
| **Monospace** (code blocks) | `'JetBrains Mono'` | `'Courier New', monospace` | Google Fonts |

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Colour |
|---|---|---|---|---|---|---|
| **Site Name (Logo)** | Playfair Display | `1.5rem` (24px) | 600 | 1.2 | `0` | `--color-text-primary` |
| **Nav Links** | Inter | `0.95rem` (15px) | 400 | 1 | `0` | `--color-text-muted` |
| **Nav Link Active** | Inter | `0.95rem` | 500 | 1 | `0` | `--color-text-primary` |
| **Section Label** | Inter | `0.8rem` (13px) | 500 | 1 | `0.2em` | `--color-text-label` |
| **H1 (Page Title)** | Playfair Display | `2.5rem` (40px) | 700 | 1.2 | `-0.01em` | `--color-text-primary` |
| **H2 (Section)** | Playfair Display | `1.75rem` (28px) | 600 | 1.3 | `0` | `--color-text-primary` |
| **H3 (Card Title)** | Playfair Display | `1.35rem` (22px) | 600 | 1.3 | `0` | `--color-text-primary` |
| **Body Text** | Inter | `1.125rem` (18px) | 400 | 1.7 | `0` | `--color-text-body` |
| **Small / Meta** | Inter | `0.875rem` (14px) | 400 | 1.5 | `0` | `--color-text-muted` |
| **Tag / Badge** | Inter | `0.75rem` (12px) | 500 | 1 | `0.08em` | `--color-text-label` |

### Section Labels (Critical Pattern)

Section labels (like "ABOUT", "ESSAYS", "CONTACT") use:
```css
.section-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-label);
  margin-bottom: 1.5rem;
}
```

---

## 4. Layout & Spacing

### Page Structure

```
┌─────────────────────────────────────────────────┐
│ ████████ Top Gradient Bar (4px) ████████████████ │
├─────────────────────────────────────────────────┤
│  Logo                    Home  Work  Blog  Contact │  ← Sticky Navbar
├─────────────────────────────────────────────────┤
│                                                   │
│         ┌───────────────────────┐                 │
│         │                       │                 │
│         │    Content Column     │                 │  ← max-width: 720px
│         │    (centered)         │                 │     margin: 0 auto
│         │                       │                 │
│         └───────────────────────┘                 │
│                                                   │
├─────────────────────────────────────────────────┤
│  Footer                                          │
└─────────────────────────────────────────────────┘
```

### Spacing Tokens

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `0.5rem` (8px) | Tag gaps, inline spacing |
| `--space-sm` | `1rem` (16px) | Paragraph spacing, small gaps |
| `--space-md` | `1.5rem` (24px) | Between UI elements |
| `--space-lg` | `3rem` (48px) | Section padding, major gaps |
| `--space-xl` | `5rem` (80px) | Page top/bottom padding |
| `--content-width` | `720px` | Max-width of content column |
| `--page-padding` | `1.5rem` | Horizontal padding on mobile |

### Grid Rules
- **Single column layout** — no multi-column grids for primary content.
- Content is always **centered** with `max-width: 720px` and `margin: 0 auto`.
- Generous **whitespace** on the sides — this is intentional, not a bug.
- On mobile (<768px), content goes full-width with `1.5rem` horizontal padding.

---

## 5. Component Patterns

### 5.1 Top Gradient Bar
A thin decorative bar at the very top of the page:
```css
.top-bar {
  height: 4px;
  background: var(--color-top-bar);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
}
```

### 5.2 Navbar
```
┌─────────────────────────────────────────┐
│  Vikas Kumar        Home  Work  Blog  Contact  │
└─────────────────────────────────────────┘
```
- **Sticky** at the top (below the gradient bar).
- Background: `--color-surface` with subtle `box-shadow` on scroll.
- Name on the left in **Playfair Display** (serif).
- Links on the right in **Inter** (sans-serif).
- Active link is bolded / darker.
- Hover: subtle opacity change (0.7 → 1).
- Height: ~64px.
- Padding: `0 2rem` (wider viewport) / `0 1.5rem` (mobile).

### 5.3 Hero / About Section (Home Page)
```
ABOUT ME                              ← Section label (uppercase, spaced)

┌──────────────┐
│              │
│  Profile     │                      ← Large photo, rounded corners (20px)
│  Photo       │
│              │
└──────────────┘

I work in the education and development sector...    ← Body text (18px, Inter)

Currently, I focus on program management and 
implementation at [NGO Name]...
```
- Profile photo: `max-width: 320px`, `border-radius: 20px`.
- Bio text: 2–3 paragraphs, `18px`, `line-height: 1.7`.

### 5.4 Work / Portfolio Section
```
MY WORK                               ← Section label

─────────────────────────────────────   ← Subtle divider

Program Title                    2023–Present
Description of the program, impact,        ← Muted text
and key outcomes.

EDUCATION    PROGRAM MGMT              ← Tag badges
─────────────────────────────────────
```
- Each entry separated by a subtle `1px` border (`--color-border-light`).
- Title in **Playfair Display** (bold), date right-aligned in muted text.
- Description in muted body text.
- Tags as small pill badges.

### 5.5 Blog / Essays List
```
BLOG                                   ← Section label

─────────────────────────────────────

Blog Post Title                  March 2026
A short excerpt or description of the      ← Muted text
blog post content...

FLN    EDUCATION                 5 min  ← Tags + reading time
─────────────────────────────────────
```
- Same pattern as Work section.
- Title: **Playfair Display**, bold.
- Date: right-aligned, muted.
- Excerpt: 1–2 lines, muted.
- Tags: uppercase pill badges in `--color-accent-light` background.
- Reading time: inline after tags, muted.

### 5.6 Tag / Badge
```css
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-label);
  background: var(--color-accent-light);
  border-radius: 4px;
  margin-right: 0.5rem;
}
```

### 5.7 Social / External Link Cards (Contact Page)
```
ELSEWHERE                              ← Section label

─────────────────────────────────────
LinkedIn                            →   ← Arrow icon
Professional updates and connections     ← Muted description
─────────────────────────────────────
Twitter                             →
Sector insights and education threads
─────────────────────────────────────
```
- Each link is a row with title (bold), description (muted), and a `→` arrow.
- On hover: subtle `background-color` shift.
- Separated by `1px` borders.

### 5.8 Footer
```css
.footer {
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
  text-align: center;
  padding: 3rem 1.5rem;
  font-size: 0.875rem;
}
```
- Contains: `© 2026 Vikas Kumar` and social icon links.
- Minimal, dark background.

---

## 6. Interactions & Micro-Animations

### Transitions
All interactive elements use a consistent transition:
```css
transition: all 0.25s ease;
```

### Hover Effects
| Element | Hover Behaviour |
|---|---|
| Nav links | Opacity `0.6 → 1`, subtle underline appears |
| Blog/Work entries | Very subtle background tint shift |
| Social link cards | Background shifts to `--color-bg-alt`, arrow moves `4px` right |
| Tags | Slight darkening of background |
| Profile photo | Subtle `scale(1.02)` with `box-shadow` increase |
| CTA buttons (if any) | Background darkens, slight `translateY(-1px)` |

### Scroll Behaviour
- `scroll-behavior: smooth` on `html`.
- Navbar gains a subtle `box-shadow` when user has scrolled past 50px.

### Page Load
- Content fades in gently on page load:
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.main-content {
  animation: fadeInUp 0.6s ease-out;
}
```

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Behaviour |
|---|---|---|
| **Desktop** | ≥1024px | Content at `720px` max-width, generous side whitespace |
| **Tablet** | 768px–1023px | Content at `720px`, reduced side margins |
| **Mobile** | <768px | Full-width with `1.5rem` padding, stacked nav (hamburger menu) |

### Mobile-Specific Rules
- Navbar collapses to hamburger menu icon.
- Profile photo: `max-width: 260px`.
- H1: `2rem` instead of `2.5rem`.
- Body: `1rem` instead of `1.125rem`.
- Section label: `0.75rem`.
- Blog/Work date moves below the title instead of right-aligned.

---

## 8. Image Guidelines

| Element | Spec |
|---|---|
| **Profile Photo** | High-quality, professional. Black-and-white or muted tones preferred. Rounded corners (`20px`). Max 320px wide. |
| **Blog Cover Images** (if used) | Muted, warm tones. `border-radius: 12px`. Aspect ratio `16:9`. |
| **Icons** | Use Lucide or Phosphor icon set. Stroke-based, `1.5px` stroke width. Colour: `--color-text-muted`. |

---

## 9. Pages & Sitemap

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Hero intro with photo, short bio, and a "what I'm working on" section |
| **Work** | `/work` | Portfolio of programs managed, projects implemented, impact achieved |
| **Blog** | `/blog` | List of essays/articles on education, development sector, and field insights |
| **Blog Post** | `/blog/:slug` | Individual blog post with long-form content |
| **Thoughts** | `/thoughts` | Short-form reflections and sector perspectives (optional, can merge with Blog) |
| **Contact** | `/contact` | Email, LinkedIn, social links in card format |

---

## 10. Content Tone Guidelines

| Aspect | Guideline |
|---|---|
| **Voice** | First-person, reflective, grounded. "I work in..." not "He works in..." |
| **Length** | Bio: 2–3 paragraphs. Blog posts: 800–2000 words. |
| **Emphasis** | Use *italics* for emphasis (not bold or ALL CAPS in body text). |
| **Jargon** | Accessible to a general audience. Explain sector-specific terms. |
| **Impact** | Where possible, mention scale, numbers, and outcomes. |

---

## 11. CSS Custom Properties (Full Reference)

```css
:root {
  /* Colours */
  --color-bg: #F0EDE8;
  --color-bg-alt: #E8E4DD;
  --color-surface: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-body: #3D3D3D;
  --color-text-muted: #6B6B6B;
  --color-text-label: #7A6E5D;
  --color-accent: #4A6741;
  --color-accent-hover: #3B5334;
  --color-accent-light: #E8F0E6;
  --color-border: #D4CFC7;
  --color-border-light: #E5E1DA;
  --color-top-bar: linear-gradient(90deg, #A8C4A0, #7A9E6E, #4A6741);
  --color-footer-bg: #2C2C2C;
  --color-footer-text: #B0B0B0;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 3rem;
  --space-xl: 5rem;
  --content-width: 720px;
  --page-padding: 1.5rem;

  /* Borders */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 20px;

  /* Transitions */
  --transition: all 0.25s ease;
}
```

---

## 12. Do's and Don'ts

### ✅ Do
- Use generous whitespace — let the content breathe.
- Keep the colour palette warm and muted.
- Use serif headings for authority; sans-serif body for readability.
- Use uppercase spaced-out labels for section headings.
- Keep the layout single-column and centered.
- Use subtle hover effects and fade-in animations.
- Make it feel like a thoughtful journal, not a corporate brochure.

### ❌ Don't
- Use bright/saturated accent colours (no electric blue, neon green).
- Add multi-column grid layouts for main content.
- Use heavy drop shadows or 3D effects.
- Add too many interactive widgets or dashboard-like elements.
- Use stock photography — keep images authentic or use illustrations.
- Use more than 2 font families.
- Add autoplay media or intrusive animations.
- Use dark mode as the default — the warm, papery feel is core to the identity.
