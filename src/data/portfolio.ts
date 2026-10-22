/**
 * Central portfolio data for Vikas Choudhary — "Vikas: The Road to Impact".
 * Every section, metric, and episode reads from this single source of truth.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#150624', via: '#4d1275', to: '#0a060d', accent: '#c77dff' };
const jade: Palette = { from: '#031710', via: '#0d593f', to: '#050c09', accent: '#46e3a8' };

export const profile = {
  fullName: 'Vikas Choudhary',
  displayName: 'Vikas Choudhary',
  firstName: 'VIKAS',
  seriesTag: 'THE ROAD TO IMPACT',
  /** Fictional studio card shown at the start of the opening sequence */
  originalLabel: 'A PRATHAM & FIELD IMPACT INITIATIVE',
  role: 'Program Manager · Education & Development',
  tagline: ['50,000+ Assessments', 'Team Lead (58)', 'CASEL & NIPUN Curricula'],
  intro:
    'Program Manager leading state-level foundational learning and tribal residential school transformation across 500+ Ashramshalas in Maharashtra. Managing a 58-member cross-functional team, overseeing 50,000+ student assessments, and developing evidence-based curricula anchored in CASEL, NIPUN, and TaRL frameworks.',
  location: 'Maharashtra & New Delhi, India',
  email: 'vikas.kumar@pratham.org',
  links: {
    linkedin: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    github: 'https://github.com/Vikas-pixel-bot',
  },
  resumePdf: '/assets/Vikas_Choudhary_Resume.pdf',
  portrait: {
    src: '/assets/portrait.jpg',
    srcSet: '/assets/portrait.jpg 720w',
    alt: 'Portrait of Vikas Choudhary',
  },
  interests: ['Foundational Literacy & Numeracy (FLN)', 'CASEL Socio-Emotional Learning', 'Tribal Education Systems', 'Hindi Literature & Theatre'],
};

export const education = [
  {
    school: 'Kurukshetra University',
    place: 'Haryana',
    degree: 'Postgraduate Degree — Hindi Literature',
    period: '2019 – 2021',
    score: 'First Class with Distinction',
  },
  {
    school: 'Kurukshetra University',
    place: 'Haryana',
    degree: 'Bachelor of Arts & Humanities',
    period: '2016 – 2019',
    score: 'First Class',
  },
];

export const experience = [
  {
    company: 'Pratham Education Foundation',
    role: 'Program Manager, Maharashtra',
    place: 'Amravati, Nashik, Nagpur & Chhatrapati Sambhajinagar Divisions',
    period: '2024 – Present',
    points: [
      'Spearheading Majhi Shala, Majha Swabhimaan across 500+ government tribal residential ashram schools, scaling foundational literacy and numeracy for 50,000+ students.',
      'Directly leading and mentoring a high-performing team of 58 field coordinators, resource persons, and Shiksha Mitras across 4 state administrative divisions.',
      'Architected and implemented a real-time monitoring dashboard tracking 455+ schools simultaneously for data-backed pedagogical interventions and spot assessments.',
      'Formulated the 48-day remedial Catch-Up course for grades 5–7 and the ashram school Happiness Curriculum based on the CASEL framework.',
    ],
  },
  {
    company: 'American India Foundation (AIF)',
    role: 'STEM Resource Person',
    place: 'Delhi NCR & Rural Outposts',
    period: 'Nov 2022 – Jan 2024',
    points: [
      'Designed and delivered high-impact STEM, robotics, AI, and block-coding curricula for schools in remote geographies lacking reliable internet or power.',
      'Authored comprehensive Science Activity Manuals for Grades 6, 7, and 8 aligned with NCERT standards, championing learning-by-doing with toys and activities.',
      'Trained 200+ government school educators on experiential pedagogical methods and digital educational tools.',
    ],
  },
  {
    company: 'District Administration & Manthan Foundation',
    role: 'Awareness Campaign Lead & Theatre Artist',
    place: 'Haryana & Delhi Outskirts',
    period: 'Jul 2020 – May 2022',
    points: [
      'Directed and performed in community street theatre productions mobilizing rural populations around civic rights, child rights, and public health awareness.',
      'Partnered closely with district magistrates and local administrations to bridge policy messaging and grassroots tribal communities.',
    ],
  },
  {
    company: 'National Service Scheme (NSS)',
    role: 'Vice President, University Unit',
    place: 'Kurukshetra University',
    period: 'May 2019 – May 2020',
    points: [
      'Orchestrated large-scale youth volunteer campaigns under the Unnat Bharat Abhiyan and Swachh Bharat Mission across 12 adopted villages.',
      'Led crisis relief operations, blood donation camps, and literacy drives during the peak of regional lockdowns.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  category: 'curriculum' | 'telemetry' | 'scale' | 'publication';
  photoSlotNote?: string;
};

export const projects: Project[] = [
  {
    id: 'ashramshala-fln-telemetry',
    title: 'Ashramshala Live Monitoring Dashboard',
    year: '2025 – 2026',
    genre: 'Telemetry & GovTech',
    logline: 'Real-time telemetry and decision-support platform monitoring 455+ tribal residential schools and 50,000+ student assessments.',
    stack: ['TaRL Assessment Matrix', 'Live Data Dashboards', 'Spot Assessment Protocols', 'State Liaison'],
    build: [
      'Unified data pipeline tracking attendance, teaching-learning material (TLM) utilization, and reading/math progression.',
      'Automated diagnostic dashboards replacing curriculum-completion logs with competency-level milestones.',
      'Integrated spot-assessment verification loops ensuring zero discrepancy between ground reports and central records.',
    ],
    features: [
      'Telemetry across 455+ government ashramshalas in 4 administrative divisions',
      'Diagnostic tracking from Letter to Story level in reading, and Number Recognition to Division in numeracy',
      'Data-driven allocation of Shiksha Mitras and resource materials',
    ],
    metrics: [
      { value: '455+', label: 'Schools Tracked Live' },
      { value: '50,000+', label: 'Students Evaluated' },
      { value: '58', label: 'Team Members Deployed' },
    ],
    palette: crimson,
    category: 'telemetry',
    photoSlotNote: 'Placeholder: Dashboard UI screenshots & State review meetings',
  },
  {
    id: 'fln-catchup-course',
    title: '48-Day Intensive FLN Catch-Up Course',
    year: '2025',
    genre: 'Pedagogy & Remedial Design',
    logline: 'Accelerated remedial curriculum for Grades 5–7 blending the LSRW language framework with Pratham’s TaRL methodology.',
    stack: ['LSRW Framework', 'TaRL Pedagogy', 'Remedial Kits', 'Activity Manuals'],
    build: [
      'Designed a structured 48-day daily instructional plan targeted at students entering upper primary without basic literacy.',
      'LSRW (Listening, Speaking, Reading, Writing) modular tracks combined with hands-on math abacus & number sense.',
      'Field-tested across 36 pilot ashramshalas before scaling state-wide, tripling Story-level reading rates.',
    ],
    features: [
      'Customized daily 90-minute instructional routines for high-need cohorts',
      'Diagnostic entry and exit benchmarks mapping student progression',
      'Low-cost manipulative toolkits including letter tiles, abacuses, and leveled story cards',
    ],
    metrics: [
      { value: '48 Days', label: 'Course Duration' },
      { value: 'Grades 5–7', label: 'Target Cohort' },
      { value: '2.5x', label: 'Reading Jump' },
    ],
    palette: amber,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: 48-day module covers & classroom teaching photos',
  },
  {
    id: 'ashramshala-happiness-curriculum',
    title: 'Ashram School Happiness Curriculum',
    year: '2025',
    genre: 'Socio-Emotional Learning',
    logline: 'Socio-emotional wellbeing curriculum tailored for tribal residential schools based on the global CASEL framework.',
    stack: ['CASEL SEL Matrix', 'Tribal Cultural Context', 'Mindfulness Routines', 'Teacher Guides'],
    build: [
      'Adapted the CASEL five core competencies (Self-Awareness, Self-Management, Social Awareness, Relationship Skills, Responsible Decision-Making) for residential ashramshalas.',
      'Contextualized activities honoring tribal folk traditions, oral storytelling, and collective community values.',
      'Trained ashramshala hostel superintendents and teachers to identify emotional withdrawal and foster psychological safety.',
    ],
    features: [
      'Daily 20-minute circle-time prompts and mindfulness breathing routines',
      'Peer-support circles addressing homesickness and residential school transition anxiety',
      'Activity-based emotional literacy toolkits with visual expression charts',
    ],
    metrics: [
      { value: '5 CASEL', label: 'Core Competencies' },
      { value: '500+', label: 'Hostel Schools' },
      { value: '100%', label: 'Activity Based' },
    ],
    palette: violet,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: Happiness curriculum manual & student circle time photos',
  },
  {
    id: 'ncert-science-manuals',
    title: 'Hands-On Science Activity Manuals (Grades 6–8)',
    year: '2023 – 2024',
    genre: 'Experiential STEM',
    logline: 'Curriculum manual promoting Learning by Doing through low-cost toys, experiential experiments, and integrated E-content.',
    stack: ['NCERT Alignment', 'Low-Cost Toys', 'E-Content Integration', 'DIY Physics Kits'],
    build: [
      'Authored complete teacher & student activity manuals for Grades 6, 7, and 8 anchored to NCERT core science standards.',
      'Engineered 70+ hands-on experiments utilizing discarded household materials, cardboard gears, and simple lenses.',
      'Integrated QR-code-driven digital animations and video demonstrations for off-grid and semi-connected smart classrooms.',
    ],
    features: [
      'Step-by-step pictorial experiment walkthroughs requiring zero laboratory equipment',
      'Inquiry-driven questioning frameworks encouraging students to formulate hypotheses',
      'Bilingual Marathi/Hindi translations for first-generation tribal learners',
    ],
    metrics: [
      { value: 'Grades 6–8', label: 'NCERT Mapped' },
      { value: '70+', label: 'Toy-Based Experiments' },
      { value: '200+', label: 'Teachers Certified' },
    ],
    palette: jade,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: Manual book spreads & toy experiment prototypes',
  },
  {
    id: 'published-books-literature',
    title: 'Published Works, Research & Educational Essays',
    year: '2021 – 2026',
    genre: 'Authorship & Research',
    logline: 'Published books, policy papers, and critical essays bridging academic Hindi literature with systemic educational equity.',
    stack: ['Hindi Literary Criticism', 'Field Research Papers', 'Public Thought Leadership', 'Monographs'],
    build: [
      'Authored educational resource texts and critical monographs examining language pedagogy in first-generation learners.',
      'Published field research and analytical essays on the structural roots of tribal educational dropouts.',
      'Wrote and directed 15+ theatrical plays utilized across rural North India for public health and civic awareness.',
    ],
    features: [
      'Bridging classical literature traditions with modern field pedagogy',
      'Analytical commentary on curriculum completion vs. authentic competency mastery',
      'Cultural translation of policy frameworks into accessible community narratives',
    ],
    metrics: [
      { value: '3+', label: 'Published Manuals/Books' },
      { value: '15+', label: 'Theatrical Scripts' },
      { value: '50k+', label: 'Readers Reached' },
    ],
    palette: ocean,
    category: 'publication',
    photoSlotNote: 'Placeholder: Book covers, published excerpts, and seminar addresses',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'state-scale',
    title: 'State-Level Program Leadership',
    org: 'Pratham Education Foundation & Tribal Welfare Dept.',
    detail: 'Directed foundational learning interventions across 500+ ashram schools in Maharashtra.',
    laurel: '50,000+ Students',
  },
  {
    id: 'team-leadership',
    title: '58-Member Team Operations Lead',
    org: 'State Program Operations',
    detail: 'Overseeing 58 field coordinators, resource persons, and data associates across 4 administrative divisions.',
    laurel: 'Division Commander',
  },
  {
    id: 'nss-leadership',
    title: 'Vice President — NSS University Council',
    org: 'Kurukshetra University & Ministry of Youth Affairs',
    detail: 'Honored for exceptional community leadership under Unnat Bharat Abhiyan and pandemic outreach.',
    laurel: 'University Honor',
  },
  {
    id: 'casel-curriculum',
    title: 'Author: Ashram School Happiness Curriculum',
    org: 'CASEL-Based Social-Emotional Framework',
    detail: 'Formulated the first structured SEL curriculum contextualized specifically for tribal residential hostels.',
    laurel: 'Curriculum Author',
  },
  {
    id: 'street-theatre',
    title: 'Community Outreach & Theatre Direction',
    org: 'Manthan Foundation & District Administration',
    detail: 'Conducted 100+ street theatre performances translating complex civic rights into folk art.',
    laurel: 'Grassroots Fellow',
  },
  {
    id: 'hindi-academic',
    title: 'Postgraduate Hindi Literature Distinction',
    org: 'Kurukshetra University',
    detail: 'Advanced study of narrative structure, linguistic registers, and sociolinguistics.',
    laurel: 'First Class Merit',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Pratham', name: 'TaRL (Teaching at the Right Level) Master Trainer' },
  { issuer: 'CASEL Framework', name: 'Social-Emotional Learning (SEL) Curriculum Architecture' },
  { issuer: 'NIPUN Bharat', name: 'Foundational Literacy & Numeracy Pedagogical Standards' },
  { issuer: 'American India Foundation', name: 'Experiential STEM & Digital Pedagogy Specialist' },
  { issuer: 'Kurukshetra University', name: 'NSS Merit Certificate & Community Service Award' },
  { issuer: 'NCERT', name: 'Activity-Based Science Pedagogy & Toy-Based Learning' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'program-management',
    title: 'Large-Scale Program Management',
    subtitle: 'Statewide governance & multi-stakeholder execution',
    skills: [
      { name: 'State Government Liaison', mono: 'Gov', note: 'Tribal Dept' },
      { name: '500+ School Governance', mono: 'Sch', note: '50k+ students' },
      { name: 'Multi-Division Logistics', mono: 'Div', note: '4 Divisions' },
      { name: 'Budget & Resource Allocation', mono: 'Ops' },
      { name: 'Risk & Field Crisis Mitigation', mono: 'Rsk' },
    ],
  },
  {
    id: 'team-leadership',
    title: 'Team Leadership & Field Operations',
    subtitle: 'Direct management of 58 field leaders & educators',
    skills: [
      { name: '58-Member Team Management', mono: '58', note: 'Field Staff' },
      { name: 'Teacher Training Workshops', mono: 'Trn', note: '500+ Teachers' },
      { name: 'Shiksha Mitra Mentorship', mono: 'Mtr' },
      { name: 'Superintendent Alignment', mono: 'Sup' },
      { name: 'Performance Coaching', mono: 'Coa' },
    ],
  },
  {
    id: 'curriculum-design',
    title: 'Curriculum & Pedagogical Architecture',
    subtitle: 'Evidence-based learning frameworks',
    skills: [
      { name: 'CASEL Framework (SEL)', mono: 'CSL', note: 'Happiness' },
      { name: 'NIPUN Bharat Standards', mono: 'NPN', note: 'FLN' },
      { name: 'TaRL (Pratham Methodology)', mono: 'TaRL', note: 'Math' },
      { name: 'LSRW Language Framework', mono: 'LSRW', note: '48 Days' },
      { name: 'NCERT Science Manuals', mono: 'NCRT', note: 'Grades 6–8' },
      { name: 'Low-Cost TLM Engineering', mono: 'TLM' },
    ],
  },
  {
    id: 'data-telemetry',
    title: 'Assessment Science & Telemetry',
    subtitle: 'Real-time monitoring and verification loops',
    skills: [
      { name: '455+ Live School Dashboard', mono: 'Dsh', note: 'Real-time' },
      { name: '50,000+ Student Assessments', mono: '50k', note: 'Diagnostic' },
      { name: 'Spot Assessment Verification', mono: 'Spt' },
      { name: 'Midline & Endline Design', mono: 'M&E' },
      { name: 'Impact Evaluation Analytics', mono: 'Evl' },
    ],
  },
  {
    id: 'creative-outreach',
    title: 'Authorship & Grassroots Mobilization',
    subtitle: 'Bridging high-level policy and community culture',
    skills: [
      { name: 'Published Book Authorship', mono: 'Bok', note: 'Manuals' },
      { name: 'Postgraduate Hindi Literature', mono: 'Lit', note: 'Mastery' },
      { name: 'Street Theatre Directing', mono: 'Tht', note: '100+ Shows' },
      { name: 'Community Mobilization', mono: 'Mob' },
      { name: 'Sociolinguistic Translation', mono: 'Lng' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'State Government Liaison': ['Tribal Development Dept, Govt of Maharashtra', 'State Review Meetings'],
  '58-Member Team Management': ['58 Field Associates & Coordinators across 4 Divisions', 'Weekly Operational Reviews'],
  'CASEL Framework (SEL)': ['Ashram School Happiness Curriculum', 'Hostel Socio-Emotional Toolkits'],
  '455+ Live School Dashboard': ['Ashramshala Live Telemetry Platform', '4 Administrative Divisions'],
  '50,000+ Student Assessments': ['Midline & Endline TaRL Diagnostic Matrix', 'Tribal Residential Schools'],
  'NCERT Science Manuals': ['Grades 6, 7, 8 Activity Manuals', 'American India Foundation'],
  'LSRW Language Framework': ['48-Day FLN Catch-Up Course', 'Reading Jump from 14% to 35%'],
  'Published Book Authorship': ['Curriculum Manuals & Educational Resource Books', 'Monographs'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Street & The Stage',
    period: '2016 – 2022',
    synopsis: 'Roots in grassroots civic engagement, national youth service, street theatre with Manthan Foundation, and postgraduate studies in Hindi literature.',
    episodes: [
      {
        code: 'S01E01',
        title: 'Unnat Bharat & University NSS',
        description: 'Elected Vice President of Kurukshetra University NSS. Led volunteer deployments, rural literacy drives, and pandemic relief across 12 adopted villages.',
        tags: ['NSS Leadership', 'Unnat Bharat', 'Community Action'],
        runtime: '2019 – 2020',
        palette: amber,
      },
      {
        code: 'S01E02',
        title: 'Street Theatre as Resistance & Pedagogy',
        description: 'Wrote, directed, and performed 100+ street theatre plays with Manthan Foundation. Translated civic rights and public health policies into evocative folk performances.',
        tags: ['Street Theatre', 'Folk Outreach', 'Civic Rights'],
        runtime: '2020 – 2022',
        palette: crimson,
      },
      {
        code: 'S01E03',
        title: 'The Power of the Mother Tongue',
        description: 'Earned a Postgraduate degree in Hindi Literature with distinction. Discovered that authentic pedagogical communication requires meeting students in their linguistic reality.',
        tags: ['Hindi Literature', 'Sociolinguistics', 'Cultural Resonance'],
        runtime: '2019 – 2021',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Code Without Power',
    period: '2022 – 2024',
    synopsis: 'Deploying STEM, robotics, and hands-on science in rural classrooms with no reliable electricity at American India Foundation.',
    episodes: [
      {
        code: 'S02E01',
        title: 'Science Activity Manuals (Grades 6–8)',
        description: 'Authored complete NCERT-aligned science experiment manuals championing learning-by-doing using everyday low-cost toys and integrated digital media.',
        tags: ['NCERT Science', 'Toy Pedagogy', 'Manual Authorship'],
        runtime: '2023',
        palette: jade,
      },
      {
        code: 'S02E02',
        title: 'Robotics in the Dark',
        description: 'Engineered unplugged computing and battery-powered robotics modules for students who had never touched a computer. Certified 200+ rural educators.',
        tags: ['STEM Pedagogy', 'AI & Scratch', 'Teacher Training'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The 500 Ashramshalas',
    period: '2024 – Present',
    synopsis: 'Transforming foundational learning across 500+ government tribal residential schools in Maharashtra with Pratham. Managing 58 staff and 50,000+ assessments.',
    episodes: [
      {
        code: 'S03E01',
        title: 'The 50,000 Assessment Benchmark',
        description: 'Orchestrated diagnostic evaluations across 50,000+ tribal students in Classes 1–7. Proved that honest baseline assessments are the only starting point for genuine equity.',
        tags: ['50,000+ Assessed', 'TaRL Framework', 'Learning Equity'],
        runtime: '2024 – 2025',
        palette: crimson,
      },
      {
        code: 'S03E02',
        title: 'Commanding a 58-Member Field Force',
        description: 'Directly leading 58 field coordinators and resource persons across Amravati, Nashik, Nagpur, and Chhatrapati Sambhajinagar divisions.',
        tags: ['58 Team Members', 'Field Operations', '4 Divisions'],
        runtime: '2024 – Present',
        palette: amber,
      },
      {
        code: 'S03E03',
        title: 'The 48-Day FLN Catch-Up Engine',
        description: 'Designed the 48-day remedial curriculum blending LSRW language development with TaRL mathematics. Scaled after tripling Story-level reading in 36 pilot schools.',
        tags: ['48-Day Catch-Up', 'LSRW Model', 'TaRL Numeracy'],
        runtime: '2025 – 2026',
        palette: jade,
      },
      {
        code: 'S03E04',
        title: 'The CASEL Happiness Curriculum',
        description: 'Pioneered the Ashram School Happiness Curriculum adapted from CASEL to instill emotional resilience and psychological safety for 500+ residential tribal hostels.',
        tags: ['CASEL SEL', 'Happiness Curriculum', 'Tribal Hostels'],
        runtime: '2025 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Scale of Assessment', title: '50,000+ Students', detail: 'Midline & diagnostic assessments across tribal ashramshalas', palette: crimson },
  { label: 'Real-Time Telemetry', title: '455+ Live Dashboards', detail: 'Continuous monitoring of attendance, TLM & learning gains', palette: ocean },
  { label: 'Team Leadership', title: '58 Field Leaders', detail: 'Managing cross-functional team across 4 Maharashtra divisions', palette: amber },
  { label: 'Remedial Architecture', title: '48-Day Catch-Up Course', detail: 'LSRW language framework + TaRL mathematics for Grades 5–7', palette: jade },
  { label: 'Socio-Emotional Learning', title: 'CASEL Happiness Curriculum', detail: 'Contextualized SEL curriculum implemented in residential hostels', palette: violet },
  { label: 'STEM Authorship', title: 'NCERT Science Manuals', detail: 'Grades 6–8 learning-by-doing manuals with low-cost toys', palette: jade },
  { label: 'Institutional Coverage', title: '500+ Ashram Schools', detail: 'Statewide governance with Tribal Development Dept', palette: crimson },
  { label: 'Academic Foundation', title: 'PG in Hindi Literature', detail: 'Kurukshetra University • Distinct linguistic & narrative grounding', palette: violet },
  { label: 'Experiential STEM', title: 'AIF STEM Specialist', detail: 'Robotics & AI block-coding in off-grid rural classrooms', palette: ocean },
  { label: 'Grassroots Foundation', title: '100+ Street Plays & NSS', detail: 'Vice President NSS • Manthan Foundation street theatre', palette: amber },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Scale',
    title: '50,000+ Students · 500+ Schools',
    lines: ['Leading Majhi Shala, Majha Swabhimaan in Maharashtra', 'Transforming residential tribal ashramshalas across 4 divisions'],
    chips: ['50,000+ Assessed', '455+ Live Dashboards', '58 Team Members'],
  },
  {
    kicker: 'The Curricula',
    title: 'CASEL, NIPUN & TaRL Frameworks',
    lines: ['Authored 48-Day FLN Catch-Up Course (LSRW + TaRL)', 'Pioneered Ashram School Happiness Curriculum on CASEL framework', 'Authored Grades 6–8 NCERT Hands-on Science Activity Manuals'],
    chips: ['CASEL SEL', 'NIPUN FLN', 'NCERT Science', 'LSRW Model'],
  },
  {
    kicker: 'The Ground Reality',
    title: 'Execution Over Slide Decks',
    lines: ['Managing a 58-member cross-functional field team', 'Replacing curriculum completion checkmarks with genuine comprehension'],
    chips: ['Amravati', 'Nashik', 'Nagpur', 'Chhatrapati Sambhajinagar'],
  },
  {
    kicker: 'The Philosophy',
    title: 'Literature Meets Field Pedagogy',
    lines: ['Postgraduate degree in Hindi Literature from Kurukshetra University', '100+ street theatre performances with Manthan Foundation'],
    chips: ['Sociolinguistics', 'Civic Rights', 'Folk Theatre'],
  },
];

export type ProfileId = 'vikas' | 'recruiter' | 'philanthropy' | 'pedagogy' | 'community';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vikas',
    name: 'Vikas',
    blurb: 'The complete road to impact, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Team leadership (58), 50k+ scale, dashboards & resume',
    color: '#4cc9ff',
    order: ['story', 'picks', 'originals', 'skills', 'moments', 'about', 'journey'],
  },
  {
    id: 'philanthropy',
    name: 'Philanthropy & CSR',
    blurb: '50,000+ assessments, 500+ ashram schools & systemic ROI',
    color: '#ffb547',
    order: ['picks', 'originals', 'journey', 'skills', 'story', 'about', 'moments'],
  },
  {
    id: 'pedagogy',
    name: 'Curriculum & Pedagogy',
    blurb: 'CASEL & NIPUN frameworks, Science manuals & 48-day FLN',
    color: '#46e3a8',
    order: ['originals', 'skills', 'picks', 'journey', 'about', 'moments', 'story'],
  },
  {
    id: 'community',
    name: 'Grassroots & Theatre',
    blurb: 'Street theatre, NSS, Hindi literature & community outreach',
    color: '#c77dff',
    order: ['journey', 'moments', 'originals', 'about', 'skills', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Vikas', meta: 'The Pilot • Mission & Philosophy', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Flagship Programs', meta: `${projects.length} Originals • Curricula & Telemetry`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top 10 in Impact', meta: 'Ranked Milestones in Education Reform', palette: jade },
  skills: { nav: 'Skills', card: 'Domain Mastery', meta: `${skillCategories.length} Cinematic Skill Genres`, palette: ocean },
  moments: { nav: 'Moments', card: 'Laurels & Publications', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume & Credentials • View & Download', palette: violet },
};
