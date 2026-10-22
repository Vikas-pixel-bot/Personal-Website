# Vikas: The Road to Impact Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Vikas Choudhary's personal website into a cinematic, streaming-inspired portfolio titled *"Vikas: The Road to Impact"*, showcasing his leadership across 50,000+ student assessments, 455+ live school monitoring dashboards, multi-tier team management, CASEL & NIPUN-based curriculum development, and published books.

**Architecture:** Built on React 18, TypeScript, Vite, Tailwind CSS v4, Framer Motion 11, and Lenis smooth scrolling. All content and persona metadata are centralized in a type-safe `src/data/portfolio.ts` data model that drives dynamic section reordering for specific viewer profiles (Recruiter, Philanthropy/CSR, Pedagogy/Curriculum, and Grassroots/Community).

**Tech Stack:** React 18, TypeScript, Vite 6, Tailwind CSS v4, Framer Motion 11, Lenis (smooth scroll), Sharp (image pipeline).

---

## File Structure & Component Map

```
src/
├── data/
│   └── portfolio.ts              # Single source of truth: 50k+ stats, CASEL/NIPUN curricula, seasons, originals, top 10
├── hooks/
│   ├── smoothScroll.tsx          # Lenis smooth scroll provider + lock/unlock hooks
│   └── useMediaQuery.ts          # Responsive breakpoint hooks
├── components/
│   ├── fx.tsx                    # Shared spring physics, transitions, and motion tokens
│   ├── CustomCursor.tsx          # Subtle cinematic cursor with magnetic hover states
│   ├── OpeningSequence.tsx       # Studio card -> "VIKAS: THE ROAD TO IMPACT" -> "▶ PLAY"
│   ├── ProfileSelector.tsx       # "Who's watching?" (Recruiter, Philanthropy, Pedagogy, Community)
│   ├── Navbar.tsx                # Dynamic navbar with profile switcher & progress indicator
│   ├── Hero.tsx                  # Billboard hero: portrait backdrop, floating stat badges, "Play Intro"
│   ├── PlayIntro.tsx             # Interactive full-screen highlight reel (pause, step, key controls)
│   ├── ContinueWatching.tsx      # Progress row: "Majhi Shala Year 3", "36 Catch-Up Pilots"
│   ├── About.tsx                 # "The Pilot": mission, Hindi literature background, ground reality
│   ├── Seasons.tsx               # "My Journey": 3 Seasons (NSS/Theatre, AIF STEM, Pratham Ashramshalas)
│   ├── EpisodeCard.tsx           # Individual career episode card with metrics & loglines
│   ├── Originals.tsx             # Pinned horizontal scroll rail of flagship programs & curricula
│   ├── ProjectCard.tsx           # Original program card with genre tag, logline & photo slot
│   ├── ProjectModal.tsx          # Full-screen case study modal with photo galleries (trainings, books)
│   ├── TopPicks.tsx              # "Top 10 in Impact Today" ranked row (#1 to #10)
│   ├── Skills.tsx                # Skills categorized by cinematic genres
│   ├── Achievements.tsx          # Laurels, awards, publications, and book showcases
│   ├── ResumeViewer.tsx          # Designed resume sheet on page
│   ├── ResumeModal.tsx           # Full-screen interactive PDF viewer & download modal
│   ├── Scene.tsx                 # Section wrapper with scroll tracking
│   └── FinalCTA.tsx              # "TO BE CONTINUED..." end-credits & contact channels
├── App.tsx                       # Master controller: stage state (opening -> profiles -> home) & modals
├── index.css                     # Tailwind v4 directives, film grain, custom scrollbars, typography
└── main.tsx                      # Vite React entry point
public/
├── assets/                       # Portraits, cutouts, book covers, and photo placeholders
└── resumes/                      # Vikas_Choudhary_Resume.pdf
scripts/
└── build-images.mjs              # Automated WebP optimization & responsive image generator
```

---

## Task Decomposition

### Task 1: Environment & Dependency Setup

**Files:**
- Modify: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `src/main.tsx`
- Create: `index.html` (root update for React mount)

- [ ] **Step 1: Update `package.json` with React, Tailwind v4, Framer Motion, and Lenis**
  - Add `react`, `react-dom`, `framer-motion`, `lenis`.
  - Add devDependencies: `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`, `typescript`, `@types/react`, `@types/react-dom`, `sharp`.
- [ ] **Step 2: Run `npm install`**
  - Verify clean dependency resolution.
- [ ] **Step 3: Configure `vite.config.ts`**
  - Attach `@vitejs/plugin-react` and `@tailwindcss/vite`.
- [ ] **Step 4: Configure TypeScript configs (`tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`)**
  - Enable JSX, strict type checking, and ES module resolution.
- [ ] **Step 5: Verify build pipeline**
  - Run `npm run build` or `vite build` test to ensure clean baseline build.
- [ ] **Step 6: Commit**
  - `git commit -m "chore: setup React 18, Tailwind v4, Framer Motion, and TypeScript baseline"`

---

### Task 2: Core Data Architecture (`src/data/portfolio.ts`)

**Files:**
- Create: `src/data/portfolio.ts`

- [ ] **Step 1: Define TypeScript Types**
  - `ViewerProfile`, `Season`, `Episode`, `Project`, `TopPick`, `SkillCategory`, `Achievement`, `Metric`, `Palette`.
- [ ] **Step 2: Construct Profile & Hero Metadata**
  - Name: Vikas Choudhary
  - Title: `VIKAS: THE ROAD TO IMPACT`
  - Studio Label: `A PRATHAM & FIELD IMPACT INITIATIVE`
  - Core Metrics: `50,000+ Students Assessed`, `500+ Ashram Schools`, `455+ Live Dashboards`, `4 Divisions`, `3+ Years`.
- [ ] **Step 3: Define "Who's Watching?" Viewer Profiles**
  - `recruiter`: **Recruiter / Talent Partner** (Prioritizes team management, live monitoring dashboards, scale, and credentials).
  - `philanthropy`: **Philanthropy & CSR Leader** (Prioritizes 50k+ student impact, government liaison, and systemic ROI).
  - `pedagogy`: **Curriculum & Pedagogy Specialist** (Prioritizes CASEL & NIPUN frameworks, remedial Catch-Up courses, and published books).
  - `community`: **Grassroots & Culture Collaborator** (Prioritizes street theatre, NSS, and community engagement).
- [ ] **Step 4: Construct "My Journey" (Seasons & Episodes)**
  - *Season 1: The Street & The Stage* (NSS leadership, Unnat Bharat, street theatre with Manthan Foundation).
  - *Season 2: Code Without Power* (American India Foundation STEM education in unpowered classrooms).
  - *Season 3: The 500 Ashramshalas* (Pratham Education Foundation: FLN scaling, 50k+ assessments, monitoring dashboards, team leadership).
- [ ] **Step 5: Construct "Originals" (Flagship Programs & Curricula)**
  - *Majhi Shala, Majha Swabhimaan* (500+ schools, 4 divisions).
  - *Ashramshala Live Monitoring Dashboard* (Real-time telemetry across 455+ schools).
  - *CASEL & NIPUN-Aligned Remedial Curriculum* (Intense Catch-Up Course & TLM kits).
  - *50,000+ Assessment Diagnostic Engine* (TaRL rapid assessment framework).
  - *Authored Books & Educational Literature* (Published books, field essays, teaching guides).
- [ ] **Step 6: Construct "Top 10 in Impact Today"**
  - 10 ordered cards highlighting the biggest career achievements.
- [ ] **Step 7: Construct "Skill Genres" & "Laurels / Achievements"**
  - Skills categorized by cinematic genres (Program Management, Data Science, Pedagogy, Team Leadership, Authorship).
- [ ] **Step 8: Verify data file compilation**
  - Run `npx tsc --noEmit` to verify type safety.
- [ ] **Step 9: Commit**
  - `git commit -m "feat(data): centralize Vikas portfolio data model with 50k+ metrics and CASEL/NIPUN curricula"`

---

### Task 3: Visual Design Tokens, Styling & Motion FX

**Files:**
- Create: `src/components/fx.tsx`
- Create: `src/components/CustomCursor.tsx`
- Create: `src/hooks/smoothScroll.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Set up `src/index.css` with Tailwind v4 & Film Grain**
  - Configure dark streaming palette (`#08080a`, `#121217`, `#e50914` streaming crimson, `#e6e6ec` bone text, gold/amber accents).
  - Add SVG film grain overlay and cinematic scrollbar styling.
- [ ] **Step 2: Create `fx.tsx` for Spring Physics & Easing**
  - Define standard `EASE` curves, stagger delays, 3D tilt calculations, and hover glow effects.
- [ ] **Step 3: Create `CustomCursor.tsx`**
  - Subtle streaming cursor with hover state expansion on interactive elements, auto-disabled on touch devices.
- [ ] **Step 4: Create `smoothScroll.tsx`**
  - Integrate Lenis smooth scrolling with programmatically controlled scroll lock for modals and the opening sequence.
- [ ] **Step 5: Commit**
  - `git commit -m "feat(ui): implement cinematic streaming design tokens, grain, and smooth scrolling"`

---

### Task 4: Opening Sequence & "Who's Watching?" Profile Selector

**Files:**
- Create: `src/components/OpeningSequence.tsx`
- Create: `src/components/ProfileSelector.tsx`
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Implement `OpeningSequence.tsx`**
  - Blackout opening -> Studio card text (*"A PRATHAM & FIELD IMPACT INITIATIVE"* / *"CHOUDHARY PRESENTS"*) -> Grand reveal of *"VIKAS: THE ROAD TO IMPACT"* with audio/visual pulse -> *"▶ PLAY"* trigger.
  - Add keyboard shortcuts (`Enter` / `Esc` to skip).
- [ ] **Step 2: Implement `ProfileSelector.tsx`**
  - "Who's watching?" avatar grid featuring **Recruiter**, **Philanthropy & CSR**, **Curriculum & Pedagogy**, and **Grassroots / Community**.
  - Selecting a profile sets the active persona in `sessionStorage` and re-orders page sections dynamically.
- [ ] **Step 3: Implement `Navbar.tsx`**
  - Streaming navbar: logo on left, section links in center, profile switcher avatar on right, and mobile drawer.
- [ ] **Step 4: Commit**
  - `git commit -m "feat(ui): add cinematic opening sequence, profile selector, and dynamic navbar"`

---

### Task 5: Billboard Hero & "Play Intro" Highlight Reel

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/PlayIntro.tsx`

- [ ] **Step 1: Implement `Hero.tsx`**
  - Billboard hero layout with portrait backdrop, dramatic gradient fade, logline, and floating stat chips (`50,000+ Assessed`, `500+ Ashramshalas`, `455+ Live Dashboards`, `CASEL & NIPUN Frameworks`).
  - Action buttons: *"▶ Play Intro"* and *"View Resume"*.
- [ ] **Step 2: Implement `PlayIntro.tsx`**
  - Full-screen trailer/teaser overlay.
  - Multi-slide interactive highlight reel cycling through career highlights with progress bar, pause/resume, and arrow key controls.
- [ ] **Step 3: Test interaction and overlays**
  - Verify that opening/closing the trailer locks/unlocks body scroll smoothly.
- [ ] **Step 4: Commit**
  - `git commit -m "feat(hero): build billboard hero with stat badges and interactive Play Intro reel"`

---

### Task 6: "Continue Watching", "The Pilot" (About) & "My Journey" (Seasons)

**Files:**
- Create: `src/components/ContinueWatching.tsx`
- Create: `src/components/About.tsx`
- Create: `src/components/Seasons.tsx`
- Create: `src/components/EpisodeCard.tsx`

- [ ] **Step 1: Implement `ContinueWatching.tsx`**
  - Netflix-style resume-watching cards with realistic progress bars:
    - *Season 3: Majhi Shala, Majha Swabhimaan* (Year 3 of 3 • 80% through)
    - *Active Pilot: 36 Intense Catch-Up Schools* (Midline to Endline)
    - *Monitoring Dashboard: 455+ Schools Live* (Ongoing)
- [ ] **Step 2: Implement `About.tsx` ("The Pilot")**
  - Deep-dive narrative into Vikas's ethos: unglamorous field execution over polished slides, postgraduate Hindi literature roots, bridging grassroots realities with high-level policy.
- [ ] **Step 3: Implement `Seasons.tsx` & `EpisodeCard.tsx`**
  - Interactive season selector tabs (Season 1, Season 2, Season 3).
  - Episodes featuring dates, role titles, key metrics, and photo placeholder cards.
- [ ] **Step 4: Commit**
  - `git commit -m "feat(journey): implement Continue Watching, The Pilot narrative, and Seasons/Episodes timeline"`

---

### Task 7: "Originals" (Flagship Programs) & Full-Screen Case Study Modals

**Files:**
- Create: `src/components/Originals.tsx`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/components/ProjectModal.tsx`

- [ ] **Step 1: Implement `Originals.tsx`**
  - Pinned horizontal scroll rail on desktop and native swipe rail on mobile.
- [ ] **Step 2: Implement `ProjectCard.tsx`**
  - Cards for:
    - *Majhi Shala, Majha Swabhimaan*
    - *Ashramshala Live Monitoring Dashboard*
    - *CASEL & NIPUN Remedial Curriculum*
    - *50,000+ Rapid Assessment Engine*
    - *Authored Books & Educational Publications*
  - Display logline, tags, metrics, and cover art.
- [ ] **Step 3: Implement `ProjectModal.tsx`**
  - Shared-element transition expanding a card into a comprehensive case study overlay.
  - Sections for Problem, Architecture, Methodology, Systemic Impact, and structured photo gallery slots (for meetings, trainings, developed materials, published books).
- [ ] **Step 4: Commit**
  - `git commit -m "feat(originals): implement horizontal Originals rail with comprehensive modal views and photo slots"`

---

### Task 8: "Top 10 in Impact Today", "Skill Genres" & "Laurels / Book Laurels"

**Files:**
- Create: `src/components/TopPicks.tsx`
- Create: `src/components/Skills.tsx`
- Create: `src/components/Achievements.tsx`

- [ ] **Step 1: Implement `TopPicks.tsx`**
  - Large-number styled ranked row (#1 to #10) mimicking streaming Top 10 lists, spotlighting Vikas's top milestones.
- [ ] **Step 2: Implement `Skills.tsx`**
  - Skills presented as "Film Genres" with clickable chips showing where each skill was deployed in real field operations.
- [ ] **Step 3: Implement `Achievements.tsx`**
  - Festival laurels and award-poster presentation for awards, published books, and certifications.
- [ ] **Step 4: Commit**
  - `git commit -m "feat(highlights): add Top 10 in Impact rail, Skill Genres, and Achievement laurels"`

---

### Task 9: Resume Viewer & "TO BE CONTINUED..." Final CTA

**Files:**
- Create: `src/components/ResumeViewer.tsx`
- Create: `src/components/ResumeModal.tsx`
- Create: `src/components/FinalCTA.tsx`
- Create: `src/components/Scene.tsx`
- Assemble: `src/App.tsx`

- [ ] **Step 1: Implement `ResumeViewer.tsx` & `ResumeModal.tsx`**
  - Designed resume sheet on the page with an expandable full-screen viewer and one-click PDF download.
- [ ] **Step 2: Implement `FinalCTA.tsx`**
  - End-credits sequence: *"TO BE CONTINUED..."*, direct email, LinkedIn, and replay opening sequence trigger.
- [ ] **Step 3: Connect all pieces in `src/App.tsx`**
  - Wire stage management, dynamic section reordering by profile ID, toasts, and keyboard shortcuts.
- [ ] **Step 4: Commit**
  - `git commit -m "feat(core): connect full App workflow with resume viewer, final CTA, and scene orchestration"`

---

### Task 10: Media Assets & Photo Placeholders

**Files:**
- Create: `scripts/build-images.mjs`
- Create: `public/assets/` structure
- Configure: Placeholders for:
  - Hero portrait + background cutout
  - Meeting & government liaison photos
  - Teacher & Shiksha Mitra training sessions
  - Developed curriculum & TLM kits (CASEL/NIPUN)
  - Published books & literary articles

- [ ] **Step 1: Add image generation / optimization script**
  - Use `sharp` to build responsive WebP images.
- [ ] **Step 2: Populate fallback visual artwork**
  - Provide high-quality SVG/CSS fallback posters for all projects and books until Vikas supplies his personal photos.
- [ ] **Step 3: Commit**
  - `git commit -m "feat(assets): configure responsive image pipeline and structured photo slots"`

---

### Task 11: End-to-End Verification & Production Build

- [ ] **Step 1: Run TypeScript Typecheck**
  - Command: `npx tsc --noEmit`
- [ ] **Step 2: Run Production Build**
  - Command: `npm run build`
- [ ] **Step 3: Verify in browser**
  - Test all stages: Opening sequence -> "Who's Watching?" profile selection -> Home view -> Play Intro modal -> Project modals -> Resume modal -> Responsive mobile layout.
- [ ] **Step 4: Commit and finalize**
  - `git commit -m "chore: verify build and finalize Vikas: The Road to Impact streaming portfolio"`
