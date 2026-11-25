/* ============================================================
   VIKAS CHOUDHARY: PERSONAL WEBSITE
   Main JavaScript: Entry Gate, 3 Persona Interfaces & Animations
   ============================================================ */

// ── 3 Tailored Persona Interfaces ───────────────────────────
const PERSONAS = {
  recruiter: {
    label: 'Recruiter',
    heroLabel: 'Program Manager · Team Leadership, Govt. Liaison & AI EdTech',
    heroBio1:
      'I lead a 60-member cross-functional field team across four administrative divisions of Maharashtra (Nashik, Thane, Nagpur, Amravati) for Pratham’s <em>Majhi Shala, Majha Swabhimaan</em> partnership with the Tribal Development Department, overseeing 500 residential ashram schools and serving as primary liaison to 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs.',
    heroBio2:
      'Beyond operational delivery, I architect and ship the pedagogical and technical systems that make scale hold: I authored a 48-Day FLN Catch-Up Course (50,000+ students assessed) and vibecoded an offline-first AI student progress platform with interactive FLN learning games for zero-connectivity zones.',
    heroBio3:
      'Across 5+ years at Pratham, Gurushala, and American India Foundation, I have built a sub-₹2,500 Everyday Science Kit deployed across 500 schools in 6+ states, trained 3,500+ teachers, and managed multi-state facilitator cohorts, backed by a B.Sc. and an M.A. in Hindi Literature with Distinction.',
    stats: [
      { num: '60', label: 'Field Staff Led' },
      { num: '29 POs', label: '17 IAS · 12 Non-IAS' },
      { num: '50,000+', label: 'Students Assessed' },
      { num: '500', label: 'Schools Managed' },
    ],
    currentlyLabel: 'Availability & Focus',
    currentlyText:
      'Open to Program Leadership, EdTech Product, and Systems Design roles. Currently directing Year 3 scale across 500 Ashram schools, shipping offline AI child-tracking telemetry, and mentoring a 60-person field cadre.',
    workIntro:
      'Five years of progressive leadership, framed by team scope, institutional ownership, systems shipped, and measurable outcomes.',
    work: {
      1: {
        role: 'Program Manager · 60-Person Team & 500 Schools',
        desc1:
          'Own end-to-end delivery of Pratham’s statewide Tribal Development Department partnership across 500 Ashram schools in Nashik, Thane, Nagpur, and Amravati. Direct 60 field staff and serve as primary liaison to 29 Project Officers (17 IAS, 12 Non-IAS) and 29 Assistant Project Officers for policy alignment and review cadence.',
        desc2:
          'Built and deployed the 48-day FLN Catch-Up Course (50,000+ assessments), authored a CASEL-aligned Happiness Curriculum, and engineered an offline-first AI progress tracking platform with interactive FLN games using LLM vibecoding.',
      },
      2: {
        role: 'Senior Trainer, TCD · Quality Assurance & National Toolkits',
        desc:
          'Owned national training QA across teams through real-time session audits and structured post-session mentoring for 150+ educators. Authored FLN and Competency-Based Education (CBE) assessment toolkits, launched virtual student engagement camps, and partnered with MME to drive data-backed instructional improvements.',
      },
      3: {
        role: 'Master Trainer · Multi-State CSR Program Delivery (6+ States)',
        desc:
          'Designed and scaled the "Integrating Everyday Science into Classrooms" initiative across 500 schools in UP, Karnataka, Chhattisgarh, Arunachal Pradesh, and Telangana. Engineered a sub-₹2,500 kit (100+ NCERT-mapped experiments), trained 3,500+ teachers, and managed state-level reporting dashboards.',
      },
      4: {
        role: 'STEM Resource Person · North Region (10 States)',
        desc:
          'Managed capacity building for a regional cadre of 70 School Facilitators across 10 northern states on STEM and Robotics. Coordinated directly with District Primary Education Officers (DPEOs) and DIET principals, and directed state and interstate STEM Expos.',
      },
      5: {
        role: 'School Facilitator · Digital Equalizer (IBM)',
        desc:
          'Executed structured STEM, AI literacy, and Scratch coding curricula across 6 rural government schools (1,200+ students) under severe infrastructure constraints, building teacher-facing modules for independent continuation.',
      },
      6: {
        role: 'Assistant Director, Awareness Programs · District Liaison',
        desc:
          'Directed 100+ civic and public health awareness productions across 25+ villages in coordination with District Legal Services Authority (DLSA) and Election Commission officials, managing cast, logistics, and community mobilization.',
      },
      7: {
        role: 'Vice President · National Service Scheme (NSS)',
        desc:
          'Led a 200+ volunteer unit across Unnat Bharat Abhiyan field surveys and rural literacy drives, building early operational discipline in stakeholder coordination and community execution.',
      },
    },
    contactIntro:
      'Looking for a Program Manager or EdTech builder who can lead a 60-member team, navigate IAS/state governance, and ship offline-first tools? Let’s talk.',
  },

  visitor: {
    label: 'Visitor',
    heroLabel: 'Program Manager · Education, Field Practice & Writing',
    heroBio1:
      'I’m a Program Manager at Pratham Education Foundation with 5+ years in education and the social sector, working on a state-level partnership with the Tribal Development Department (Government of Maharashtra) across 500 tribal residential ashram schools. My work spans everyone from Grade 1 students learning to decode their first word to 29 Project Officers (17 IAS) deciding how learning is tracked.',
    heroBio2:
      'Most of what I do is unglamorous: reviewing telemetry data, travelling to remote ashramshalas across Nashik, Thane, Nagpur, and Amravati, troubleshooting implementation failures, and holding honest pedagogical conversations with teachers and wardens until something genuinely shifts. I find that far more interesting than the version of this work that looks good in slide decks.',
    heroBio3:
      'Before this I led hands-on STEM programs across 6+ states and directed 100+ street plays with Manthan Theatre Foundation. Educated at Kurukshetra University with a B.Sc. and an M.A. in Hindi Literature with Distinction, a combination of scientific inquiry and linguistic empathy that proves remarkably useful in the field.',
    stats: [
      { num: '500', label: 'Ashram Schools' },
      { num: '50,000+', label: 'Students Assessed' },
      { num: '60', label: 'Field Staff Managed' },
      { num: '29 POs', label: '17 IAS · 12 Non-IAS' },
    ],
    currentlyLabel: 'Currently',
    currentlyText:
      'Leading <em>Majhi Shala, Majha Swabhimaan</em> across 500 Ashram schools in Nashik, Thane, Nagpur, and Amravati. Refining the 48-Day FLN Catch-Up Course (LSRW + TaRL), a CASEL-based Happiness Curriculum, and an AI-powered offline platform to track child-wise growth.',
    workIntro:
      'Seven roles across five years: what I’ve been building, field-testing, and occasionally course-correcting.',
    work: {
      1: {
        role: 'Program Manager · Nashik, Thane, Nagpur & Amravati Divisions',
        desc1:
          'Leading the statewide partnership with the Tribal Development Department (Government of Maharashtra) for the holistic development of 500 Ashram schools, alongside a 60-member field team and 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs.',
        desc2:
          'The hardest part isn’t the scale; it’s ensuring classroom reality matches program design. Developed the 48-day FLN Catch-Up Course (TaRL & LSRW), a CASEL-aligned Happiness Curriculum, and an offline-first AI assessment platform with interactive learning games for zero-signal valleys.',
      },
      2: {
        role: 'Senior Trainer, TCD · National / Multi-State Coordination',
        desc:
          'Reviewed training delivery in real time and mentored 150+ educators. Built FLN and Competency-Based Education toolkits, piloted virtual student camps, and worked with the MME team to turn honest field data into better pedagogy.',
      },
      3: {
        role: 'Master Trainer, Teacher Development · 6+ States',
        desc:
          'Designed the "Integrating Everyday Science into Classrooms" program for 500 schools across 6+ states. Built a sub-₹2,500 science kit for 100+ experiments using everyday household items and NCERT-mapped manuals for Grades 6–8, travelling 20 days a month to support 3,500+ teachers.',
      },
      4: {
        role: 'STEM Resource Person (North Region) · 10 States',
        desc:
          'Mentored 70 School Facilitators across 10 northern states on STEM and Robotics, worked closely with DIET principals and district officers, and organized interstate STEM Expos celebrating student curiosity.',
      },
      5: {
        role: 'School Facilitator · Rural Clusters (6 Schools)',
        desc:
          'Taught Scratch coding, AI literacy, and hands-on STEM to 1,200+ rural students. The real challenge was making sessions deeply engaging in classrooms without reliable electricity and with students touching a computer for the first time.',
      },
      6: {
        role: 'Assistant Director, Awareness Programs · Theatre Artist',
        desc:
          'Directed and performed 100+ street plays (Nukkad Natak) across 25+ villages on public health and civic rights. It taught me that meaningful communication begins by meeting people exactly where they are.',
      },
      7: {
        role: 'Vice President, NSS Unit',
        desc:
          'Coordinated 200+ student volunteers for Unnat Bharat surveys and rural outreach: my first lesson in mobilizing people toward a shared goal when nothing is guaranteed.',
      },
    },
    contactIntro:
      'I’m always open to conversations with fellow educators, researchers, and students about field realities, pedagogy, and writing. Feel free to reach out.',
  },

  collaborator: {
    label: 'Collaborator',
    heroLabel: 'Program Architect · State Partnerships, FLN & Frugal EdTech',
    heroBio1:
      'I partner with state governments, CSR foundations, and education organizations to design and implement large-scale foundational learning and STEM systems. Currently leading Pratham’s <em>Majhi Shala, Majha Swabhimaan</em> partnership with Maharashtra’s Tribal Development Department across 500 Ashram schools and 50,000+ learners.',
    heroBio2:
      'My work bridges curriculum design and last-mile institutional adoption: turning frameworks like TaRL, LSRW, CASEL, and NCERT into daily classroom routines sustained by 60 field staff, 29 Project Officers (17 IAS), and offline-first AI child-tracking tools.',
    heroBio3:
      'Previously, I designed the Gurushala Everyday Science program (Vodafone Idea Foundation & Indus Towers CSR) across 500 schools in 6+ states using sub-₹2,500 science kits, and scaled STEM & Robotics across 10 states with AIF and IBM.',
    stats: [
      { num: '500', label: 'Partner Schools' },
      { num: '6+', label: 'States Reached' },
      { num: '<₹2,500', label: 'Frugal STEM Kit' },
      { num: '50,000+', label: 'Learners Impacted' },
    ],
    currentlyLabel: 'Areas of Collaboration',
    currentlyText:
      'Open to co-designing and scaling: (1) 48-Day TaRL/LSRW Catch-Up & CASEL SEL curricula for residential/govt. schools, (2) Offline-first AI child telemetry for low-connectivity regions, and (3) Sub-₹2,500 hands-on NCERT Science Labs.',
    workIntro:
      'Five years of institutional, CSR, and government partnerships, showing where and how we can build together.',
    work: {
      1: {
        role: 'State Govt. Partnership Lead · 500 Tribal Ashram Schools',
        desc1:
          'Co-executing a multi-year partnership with the Tribal Development Department (Govt. of Maharashtra) across 4 divisions, aligning 29 Project Officers (17 IAS, 12 Non-IAS), 29 APOs, and a 60-member field team around shared learning outcomes.',
        desc2:
          'Possible collaboration model: replicable 48-day FLN Catch-Up architecture for Grades 5–7, CASEL residential well-being modules, and offline-first AI assessment tools designed for modest rural hardware.',
      },
      2: {
        role: 'Curriculum & QA Architect · Multi-State Capacity Building',
        desc:
          'Designed scalable FLN and Competency-Based Education (CBE) toolkits, training QA rubrics, and virtual student engagement models, ensuring pedagogical fidelity when programs expand across regions.',
      },
      3: {
        role: 'CSR Program Designer · Gurushala (Vodafone Idea & Indus Towers)',
        desc:
          'Built and rolled out a 500-school frugal STEM model across 6+ states. Every item in the sub-₹2,500 kit (100+ NCERT experiments) is locally replenishable under ₹10, backed by teacher mentorship for 3,500+ educators.',
      },
      4: {
        role: 'Interstate STEM Lead · DIET & District Systems (10 States)',
        desc:
          'Partnered with DIET principals and District Primary Education Officers (DPEOs) across 10 northern states to embed STEM and Robotics into public teacher-training ecosystems.',
      },
      5: {
        role: 'CSR Classroom Implementation · Digital Equalizer (IBM)',
        desc:
          'Translated corporate-supported STEM and AI literacy frameworks into workable classroom routines across under-resourced rural government schools.',
      },
      6: {
        role: 'Civic & Community Outreach Partner · DLSA & Local Admin',
        desc:
          'Partnered with district administration and legal services authorities on 100+ village theatre campaigns, building deep community buy-in before program rollout.',
      },
      7: {
        role: 'University Mobilizer · Unnat Bharat Abhiyan (NSS)',
        desc:
          'Coordinated 200+ student volunteers for village-level baseline surveys and participatory rural outreach.',
      },
    },
    contactIntro:
      'Exploring a partnership on FLN catch-up programs, offline-first child tracking, CASEL well-being, or frugal STEM kits? Let’s discuss what we can build together.',
  },
};

// ── Apply Persona Copy Natively ─────────────────────────────
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el && html !== undefined) el.innerHTML = html;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function applyPersona(key) {
  const p = PERSONAS[key] || PERSONAS.visitor;

  setText('nav-perspective-label', p.label);
  setText('hero-label', p.heroLabel);
  setHTML('hero-bio-1', p.heroBio1);
  setHTML('hero-bio-2', p.heroBio2);
  setHTML('hero-bio-3', p.heroBio3);

  p.stats.forEach((s, idx) => {
    setText(`stat-${idx + 1}-num`, s.num);
    setText(`stat-${idx + 1}-label`, s.label);
  });

  setText('currently-label', p.currentlyLabel);
  setHTML('currently-text', p.currentlyText);

  const whyTeam = document.getElementById('why-team');
  if (whyTeam) {
    whyTeam.hidden = key !== 'recruiter';
  }

  setText('work-intro', p.workIntro);

  setText('work-1-role', p.work[1].role);
  setHTML('work-1-desc-1', p.work[1].desc1);
  setHTML('work-1-desc-2', p.work[1].desc2);

  for (let i = 2; i <= 7; i++) {
    setText(`work-${i}-role`, p.work[i].role);
    setHTML(`work-${i}-desc`, p.work[i].desc);
  }

  setText('contact-intro', p.contactIntro);
}

// ── Entry Gate & View Switching ─────────────────────────────
function setupEntryGate() {
  const gate = document.getElementById('entry-gate');
  const switchBtn = document.getElementById('nav-perspective');
  const cards = document.querySelectorAll('[data-choose-audience]');

  function enterSite(audience, scrollToHash = false) {
    applyPersona(audience);
    document.body.classList.remove('is-gated');
    if (gate) gate.hidden = true;

    try {
      sessionStorage.setItem('vikas_audience', audience);
    } catch {
      // storage unavailable
    }

    // Trigger reveal animations for newly visible Hero / Why-Team elements
    requestAnimationFrame(() => {
      document.querySelectorAll('#home .reveal, #why-team .reveal').forEach(el => el.classList.add('visible'));
      handleNavbarScroll();
      updateActiveLink();
      if (!scrollToHash) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }

  function openGate() {
    document.body.classList.add('is-gated');
    if (gate) gate.hidden = false;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {
      enterSite(card.getAttribute('data-choose-audience'), false);
    });
  });

  if (switchBtn) {
    switchBtn.addEventListener('click', openGate);
  }

  // Only skip the gate if returning from a blog post (hash like #writing or referrer from /blog/)
  let saved = null;
  try {
    saved = sessionStorage.getItem('vikas_audience');
  } catch {
    saved = null;
  }

  const returningFromBlog =
    document.referrer.includes('/blog/') ||
    ['#writing', '#work', '#thoughts', '#contact'].includes(window.location.hash);

  if (returningFromBlog && saved && PERSONAS[saved]) {
    enterSite(saved, true);
  }
}

// ── Navbar Scroll Effect ────────────────────────────────────
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// ── Mobile Hamburger Menu ───────────────────────────────────
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });
}

// ── Active Nav Link on Scroll ───────────────────────────────
const sections = document.querySelectorAll('main .section');
const navLinkElements = document.querySelectorAll('.navbar__link');

function updateActiveLink() {
  const scrollPos = window.scrollY + 120;

  sections.forEach(section => {
    if (section.hidden) return;
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
    '.credentials-strip',
  ];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal');
    });
  });

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
    },
    { root: null, rootMargin: '0px 0px -60px 0px', threshold: 0.1 },
  );

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
}

// ── Smooth scroll for logo click ────────────────────────────
const navLogo = document.getElementById('nav-logo');
if (navLogo) {
  navLogo.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Initialize ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  setupEntryGate();
  handleNavbarScroll();
  updateActiveLink();
});
