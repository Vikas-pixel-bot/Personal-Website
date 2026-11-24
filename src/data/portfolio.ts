/**
 * Central portfolio data for Vikas Choudhary — "Vikas: The Road to Impact".
 * Every section, metric, and episode reads from this single source of truth.
 * Updated directly from latest CV (November 2026).
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
  role: 'Program Manager · FLN Program Development & EdTech',
  phone: '+91 8199078013',
  email: 'vikaschoudhary699@gmail.com',
  website: 'https://vikaschoudhary.vercel.app',
  tagline: ['50,000+ Assessments', 'Team Lead (60)', 'AI & EdTech Builder', 'CASEL & NIPUN'],
  intro:
    'Program Manager with 5+ years in education and the social sector, specializing in foundational literacy and numeracy (FLN) program design, teacher capacity building, and education technology. Developed an FLN Catch-up course implemented across 500 schools and built an AI-powered offline progress tracking platform. Currently leading a field team of 60 across four divisions in partnership with the Tribal Development Department, Government of Maharashtra.',
  location: 'New Delhi, India (Operations in Maharashtra)',
  links: {
    linkedin: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    github: 'https://github.com/Vikas-pixel-bot',
    website: 'https://vikaschoudhary.vercel.app',
  },
  resumePdf: '/assets/Vikas_Choudhary_Resume.pdf',
  portrait: {
    src: '/assets/portrait.jpg',
    srcSet: '/assets/portrait.jpg 720w',
    alt: 'Portrait of Vikas Choudhary',
  },
  interests: ['Foundational Literacy & Numeracy (FLN)', 'AI & Vibecoding in EdTech', 'CASEL Socio-Emotional Learning', 'Science Kits (<₹2500)', 'Hindi Literature & Theatre'],
};

export const education = [
  {
    school: 'Kurukshetra University',
    place: 'Haryana',
    degree: 'Master of Arts in Hindi Language and Literature',
    period: '2020 – 2022',
    score: 'First Class with Distinction',
  },
  {
    school: 'Kurukshetra University',
    place: 'Haryana',
    degree: 'Bachelor of Science (B.Sc.)',
    period: '2017 – 2020',
    score: 'First Class',
  },
];

export const experience = [
  {
    company: 'Pratham Education Foundation (Majhi Shala, Majha Swabhimaan)',
    role: 'Program Manager',
    place: 'Maharashtra (Nashik, Thane, Nagpur & Amravati Divisions)',
    period: 'Apr 2025 – Present',
    points: [
      'Leading the implementation of a large-scale strategic partnership with the Tribal Development Department (Government of Maharashtra) for the holistic development of 500 Ashram schools.',
      'Developed the 48-day FLN Catch-up course, currently being implemented across 500 schools to accelerate literacy and numeracy.',
      'Developed an AI-powered platform for student-level FLN progress tracking with an offline-capable assessment tool and built-in interactive learning games using AI and vibecoding.',
      'Managing a cross-functional field team of 60 across four administrative divisions (Nashik, Thane, Nagpur, Amravati), leading through influence and shared goals.',
      'Primary liaison for the Tribal Development Department, collaborating directly with 29 Project Officers (17 IAS, 12 Non-IAS) and 29 Assistant Project Officers to streamline reporting and drive policy alignment.',
      'Designing and facilitating capacity-building initiatives for teachers, wardens, and internal teams on SEL, NEP, and CASEL frameworks.',
    ],
  },
  {
    company: 'Pratham Education Foundation',
    role: 'Senior Trainer, Training & Capacity Development (TCD)',
    place: 'National / Multi-State Coordination',
    period: 'Apr 2024 – Mar 2025',
    points: [
      'Training oversight and quality assurance: reviewed training delivery across teams, observed sessions in real time, and provided on-the-spot feedback and post-session mentoring.',
      'Content review and development: coordinated training toolkits, session modules, assessment formats, and contextual handbooks aligned with FLN and Competency-Based Education (CBE).',
      'Led content creation, expert onboarding, and delivery of a pilot of student-centric virtual engagement camps focused on skilling and CBE.',
      'Built compendiums of effective classroom practices, FLN strategies, and teacher innovations for internal leadership and donor showcases.',
      'Collaborated with the MME team to collect, clean, and analyze program data to systematically improve pedagogical training quality.',
    ],
  },
  {
    company: 'Pratham Education Foundation (Gurushala — Vodafone Idea Foundation & Indus Towers)',
    role: 'Master Trainer – Teacher Development',
    place: 'UP, Karnataka, Chhattisgarh, Arunachal, Telangana & Multi-State',
    period: 'Jul 2023 – Mar 2024',
    points: [
      'Designed and developed the "Integrating Everyday Science into Classrooms" program for 500 schools across multiple states.',
      'Created a cost-effective science kit (under ₹2500) enabling students to conduct over 100 hands-on experiments with low-cost toys and everyday materials.',
      'Authored a comprehensive science manual for grades 6–8 with NCERT-mapped learning outcomes, chapter-specific activities, project ideas, and digital simulations.',
      'Supported hundreds of teachers daily in using Gurushala digital resources, travelling up to 20 days a month across urban and rural clusters.',
      'Managed training records, attendance logs, and reporting dashboards, liaising with block and state nodal officials.',
    ],
  },
  {
    company: 'American India Foundation (AIF)',
    role: 'STEM Resource Person (North Region)',
    place: '10 States (North Region)',
    period: 'Apr 2023 – Jul 2023',
    points: [
      'Led capacity building for a team of 70 School Facilitators across 10 states on STEM and Robotics content and delivery.',
      'Liaised with state and district functionaries, including District Primary Education Officers (DPEOs) and DIET principals, for effective program rollout.',
      'Trained master trainers and pre-service/in-service teachers in District Institutes of Education and Training (DIETs) on techno-pedagogy.',
      'Organized and directed state and interstate STEM Expos showcasing student project-based learning.',
    ],
  },
  {
    company: 'American India Foundation (AIF)',
    role: 'School Facilitator (DE Program, SFGI by IBM)',
    place: 'Rural Clusters (6 Schools)',
    period: 'Nov 2022 – Mar 2023',
    points: [
      'Implemented the Digital Equalizer curriculum with students: structured lesson plans, classroom sessions, and STEM projects including Scratch block coding.',
      'Built collaborative relationships with teachers, head teachers, School Management Committees (SMCs), and local Panchayats to foster institutional ownership.',
      'Maintained program databases and prepared weekly, monthly, and quarterly reports and analytical case studies.',
    ],
  },
  {
    company: 'Manthan Theatre Foundation',
    role: 'Assistant Director, Awareness Program',
    place: 'Delhi NCR & Haryana',
    period: 'May 2019 – May 2020',
    points: [
      'Designed and executed community awareness campaigns on civic rights, education, and social issues in partnership with district administrations.',
      'Partnered directly with government stakeholders, including the District Legal Services Authority (DLSA) and the Election Commission of India.',
      'Managed end-to-end logistics and creative coordination for large-scale public outreach events.',
    ],
  },
  {
    company: 'National Service Scheme (NSS)',
    role: 'Vice President, University Unit',
    place: 'Kurukshetra University, Haryana',
    period: 'May 2018 – May 2019',
    points: [
      'Led the Unnat Bharat Survey and Swachh Bharat Summer Internship, mobilizing hundreds of youth volunteers and community members.',
      'Oversaw comprehensive data collection, analysis, and grassroots survey management across multiple adopted villages.',
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
    id: 'ai-fln-platform',
    title: 'AI-Powered FLN Progress Platform & Offline Assessment Tool',
    year: '2025 – 2026',
    genre: 'AI, EdTech & Vibecoding',
    logline: 'An AI-powered student-level FLN progress tracking platform featuring an offline-first assessment tool for low-connectivity ashram schools and built-in learning games.',
    stack: ['AI & Vibecoding', 'Offline Assessment Tool', 'Student Telemetry', 'FLN Learning Games', 'Claude Code'],
    build: [
      'Built specifically for low-connectivity tribal ashram schools, enabling teachers and Shiksha Mitras to capture diagnostic assessment data completely offline.',
      'Leveraged modern AI and vibecoding to rapidly iterate and deploy telemetry dashboards for student progress tracking.',
      'Engineered interactive FLN practice games integrated into the platform to drive gamified student engagement in foundational literacy and numeracy.',
    ],
    features: [
      'Offline-capable diagnostic assessment tool functioning with zero internet connectivity',
      'Student-level competency tracking from Letter to Story level and Number Recognition to Division',
      'Built-in interactive FLN mini-games for classroom and hostel practice',
    ],
    metrics: [
      { value: '500', label: 'Ashram Schools' },
      { value: '100%', label: 'Offline Capable' },
      { value: '50,000+', label: 'Students Tracked' },
    ],
    palette: crimson,
    category: 'telemetry',
    photoSlotNote: 'Placeholder: AI Platform interface, Offline App screens & Student game sessions',
  },
  {
    id: 'fln-catchup-course',
    title: '48-Day Intensive FLN Catch-Up Course',
    year: '2024 – 2026',
    genre: 'Pedagogy & Remedial Design',
    logline: 'Accelerated remedial curriculum implemented across 500 ashram schools, blending the LSRW language framework with Pratham’s TaRL methodology.',
    stack: ['LSRW Framework', 'TaRL Pedagogy', 'Remedial Toolkits', '500 Schools Scaling'],
    build: [
      'Conceptualized and authored a structured 48-day daily instructional course for Grades 5–7 students to rapidly boost foundational competencies.',
      'LSRW (Listening, Speaking, Reading, Writing) modular tracks combined with hands-on mathematics manipulative routines.',
      'Scaled across 500 government tribal residential schools in Maharashtra with the Tribal Development Department.',
    ],
    features: [
      'Customized daily 90-minute instructional routines for high-need cohorts',
      'Diagnostic entry and exit benchmarks mapping student progression',
      'Low-cost manipulative toolkits including letter tiles, abacuses, and leveled story cards',
    ],
    metrics: [
      { value: '48 Days', label: 'Course Duration' },
      { value: '500', label: 'Schools Implemented' },
      { value: '2.5x', label: 'Reading Jump' },
    ],
    palette: amber,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: 48-day module covers, worksheets & classroom teaching photos',
  },
  {
    id: 'everyday-science-kit',
    title: 'Integrating Everyday Science & Cost-Effective Kit (<₹2500)',
    year: '2023 – 2024',
    genre: 'Hands-On STEM & NCERT Curriculum',
    logline: 'Cost-effective science kit enabling 100+ experiments for under ₹2500, with Grades 6–8 NCERT-mapped manuals across 500 schools in 6+ states.',
    stack: ['NCERT Alignment', 'Low-Cost Toys (<₹2500)', '100+ Experiments', 'E-Content Integration', 'Gurushala'],
    build: [
      'Designed and rolled out the "Integrating Everyday Science into Classrooms" program for 500 schools across UP, Karnataka, Chhattisgarh, Arunachal, Telangana, and other states.',
      'Engineered a complete hands-on science kit under ₹2500 enabling children to conduct over 100 experiments using everyday low-cost toys and recycled materials.',
      'Authored teacher & student activity manuals for Grades 6–8 with chapter-specific activities, project ideas, and QR-linked simulations.',
    ],
    features: [
      'Over 100 toy-based experiments requiring zero expensive laboratory infrastructure',
      'Mapped directly to NCERT grade-level learning outcomes with bilingual Hindi/English manuals',
      'Adopted across 500 schools in partnership with Vodafone Idea Foundation and Indus Towers',
    ],
    metrics: [
      { value: '<₹2500', label: 'Kit Cost per School' },
      { value: '100+', label: 'Experiments Possible' },
      { value: '500', label: 'Schools in 6+ States' },
    ],
    palette: jade,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: Science kit prototypes, manual book spreads & student experiment photos',
  },
  {
    id: 'ashramshala-happiness-curriculum',
    title: 'Ashram School Happiness & SEL Curriculum',
    year: '2024 – 2026',
    genre: 'Socio-Emotional Learning (CASEL)',
    logline: 'Socio-emotional wellbeing curriculum contextualized for tribal residential schools based on the global CASEL framework and NEP guidelines.',
    stack: ['CASEL SEL Matrix', 'NEP 2020 Guidelines', 'Hostel Well-Being', 'Warden & Teacher Guides'],
    build: [
      'Adapted the CASEL five core competencies (Self-Awareness, Self-Management, Social Awareness, Relationship Skills, Responsible Decision-Making) for tribal residential schools.',
      'Contextualized routines and reflection circles honoring tribal traditions, oral storytelling, and communal support systems.',
      'Facilitated capacity building for teachers and residential hostel wardens to foster psychological safety and address homesickness.',
    ],
    features: [
      'Daily 20-minute circle-time prompts and mindfulness breathing routines',
      'Peer-support circles addressing residential school transition anxiety',
      'Activity-based emotional literacy toolkits with visual expression charts',
    ],
    metrics: [
      { value: '5 CASEL', label: 'Competencies' },
      { value: '500', label: 'Ashram Schools' },
      { value: '100%', label: 'Activity Based' },
    ],
    palette: violet,
    category: 'curriculum',
    photoSlotNote: 'Placeholder: Happiness curriculum manual & student circle time photos',
  },
  {
    id: 'tribal-dept-partnership',
    title: 'Statewide Tribal Development Dept Strategic Partnership',
    year: '2024 – Present',
    genre: 'Large-Scale Governance & Liaison',
    logline: 'Multi-division governance and government liaison coordinating with 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs across Maharashtra.',
    stack: ['29 IAS/State POs', '29 APOs Liaison', '60-Member Field Force', '4 Divisions (Nashik, Thane, Nagpur, Amravati)'],
    build: [
      'Serves as the primary operational point of contact for the Tribal Development Department (Govt of Maharashtra) for 500 Ashram schools.',
      'Coordinates with 29 Project Officers (17 IAS officers, 12 State officers) and 29 Assistant Project Officers for policy alignment and administrative compliance.',
      'Established tracking mechanisms, recognition models, and KPI dashboards connecting on-ground field reality with state leadership.',
    ],
    features: [
      'Direct governance across Nashik, Thane, Nagpur, and Amravati administrative divisions',
      'Collaborative operational troubleshooting with senior IAS administrators',
      'Documentation of best practices and transformation stories for policy scaling',
    ],
    metrics: [
      { value: '29', label: 'Project Officers (17 IAS)' },
      { value: '29', label: 'Assistant Project Officers' },
      { value: '60', label: 'Field Staff Managed' },
    ],
    palette: ocean,
    category: 'scale',
    photoSlotNote: 'Placeholder: High-level government review meetings & Project Officer interactions',
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
    id: 'ias-liaison',
    title: 'Liaison with 29 Project Officers (17 IAS)',
    org: 'Tribal Development Dept, Govt of Maharashtra',
    detail: 'Collaborating directly with 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs across 4 divisions for state program alignment.',
    laurel: 'State Liaison',
  },
  {
    id: 'team-leadership-60',
    title: 'Commanding a 60-Member Field Force',
    org: 'Pratham Maharashtra Operations',
    detail: 'Leading 60 field coordinators, trainers, and program associates across Nashik, Thane, Nagpur, and Amravati divisions.',
    laurel: 'Field Leadership',
  },
  {
    id: 'ai-edtech-builder',
    title: 'AI-Powered Offline FLN Platform',
    org: 'EdTech Innovation & Vibecoding',
    detail: 'Built an AI-powered student tracking platform with offline assessment capabilities and interactive learning games for remote schools.',
    laurel: 'EdTech Builder',
  },
  {
    id: 'everyday-science-rollout',
    title: 'Cost-Effective Science Kit (<₹2500)',
    org: 'Gurushala (Vodafone Idea & Indus Towers)',
    detail: 'Developed and rolled out a science kit enabling 100+ experiments for under ₹2500 across 500 schools in 6+ states.',
    laurel: 'Curriculum Author',
  },
  {
    id: 'stem-regional-lead',
    title: 'Regional STEM Lead across 10 States',
    org: 'American India Foundation (AIF)',
    detail: 'Trained a team of 70 School Facilitators across 10 states on robotics, coding, and techno-pedagogy in DIETs.',
    laurel: 'Regional Trainer',
  },
  {
    id: 'nss-leadership',
    title: 'Vice President — NSS University Council',
    org: 'Kurukshetra University & Ministry of Youth Affairs',
    detail: 'Led Unnat Bharat Survey and Swachh Bharat Summer Internship, coordinating large volunteer cohorts across rural villages.',
    laurel: 'University Honor',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Pratham', name: 'TaRL (Teaching at the Right Level) Master Trainer & FLN Specialist' },
  { issuer: 'CASEL Framework', name: 'Social-Emotional Learning (SEL) Curriculum Architecture' },
  { issuer: 'NIPUN Bharat', name: 'Foundational Literacy & Numeracy Pedagogical Standards' },
  { issuer: 'Vodafone Idea Foundation & Gurushala', name: 'Master Trainer — Integrating Everyday Science' },
  { issuer: 'American India Foundation', name: 'Regional STEM & Techno-Pedagogy Specialist (10 States)' },
  { issuer: 'NCERT Mapping', name: 'Hands-on Activity Manuals & Toy Pedagogy (Grades 6–8)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'fln-curriculum',
    title: 'FLN Program Design & Learning Content',
    subtitle: 'End-to-end curriculum frameworks & instructional tools',
    skills: [
      { name: '48-Day FLN Catch-Up Course', mono: 'FLN', note: '500 Schools' },
      { name: 'LSRW Language Framework', mono: 'LSRW', note: 'Language' },
      { name: 'TaRL Pedagogy', mono: 'TaRL', note: 'Math' },
      { name: 'CASEL & SEL Frameworks', mono: 'SEL', note: 'Happiness' },
      { name: 'NCERT Science Manuals', mono: 'NCRT', note: 'Grades 6–8' },
      { name: 'Bilingual Content (Hindi/English)', mono: 'BiL' },
    ],
  },
  {
    id: 'ai-edtech',
    title: 'AI, Platform Development & Vibecoding',
    subtitle: 'Building modern offline-ready platforms using AI',
    skills: [
      { name: 'AI Platform Development', mono: 'AI', note: 'Vibecoding' },
      { name: 'Offline Assessment Tool', mono: 'Off', note: 'Low-Connectivity' },
      { name: 'FLN Practice Games', mono: 'Gam', note: 'Student UX' },
      { name: 'Claude & Claude Code', mono: 'CC', note: 'Core Stack' },
      { name: 'Antigravity & AI Tools', mono: 'AGY' },
      { name: 'ElevenLabs & Multimodal AI', mono: 'TTS' },
    ],
  },
  {
    id: 'monitoring-evaluation',
    title: 'Monitoring, Evaluation & Telemetry',
    subtitle: 'Student progress tracking and data-driven decisions',
    skills: [
      { name: 'Student-Level Progress Tracking', mono: 'Trk', note: '50k+ Kids' },
      { name: '455+ Live School Dashboard', mono: 'Dsh', note: 'Real-Time' },
      { name: 'Spot Assessment Protocols', mono: 'Spt' },
      { name: 'MME Data Cleaning & Analysis', mono: 'MME' },
      { name: 'Impact Story Documentation', mono: 'Doc' },
    ],
  },
  {
    id: 'leadership-governance',
    title: 'Team Leadership & Government Liaison',
    subtitle: 'Managing scale, senior IAS officers, and diverse field forces',
    skills: [
      { name: 'Leading Team of 60', mono: '60', note: '4 Divisions' },
      { name: '29 Project Officers Liaison (17 IAS)', mono: 'IAS', note: 'State POs' },
      { name: '29 Assistant Project Officers Liaison', mono: 'APO' },
      { name: 'Leading Through Influence', mono: 'Inf' },
      { name: 'Capacity Building & Training', mono: 'Trn', note: 'Teachers & Wardens' },
    ],
  },
  {
    id: 'stem-creative',
    title: 'STEM Innovation & Grassroots Mobilization',
    subtitle: 'Cost-effective kits, community theatre, and bilingual outreach',
    skills: [
      { name: 'Science Kit (<₹2500)', mono: 'Kit', note: '100+ Exp' },
      { name: 'Robotics & Scratch Coding', mono: 'Scr' },
      { name: 'DIETs & Facilitator Training', mono: 'DIET', note: '10 States' },
      { name: 'Theatre & Public Awareness', mono: 'Tht', note: 'DLSA/ECI' },
      { name: 'M.A. Hindi Literature', mono: 'Lit', note: 'Native' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  '48-Day FLN Catch-Up Course': ['Implemented across 500 Ashram Schools in Maharashtra', 'LSRW + TaRL Pedagogy'],
  'AI Platform Development': ['AI-powered progress tracking platform built via vibecoding', 'Student-level telemetry'],
  'Offline Assessment Tool': ['Engineered for zero-internet ashram schools', 'Real-time diagnostic capture'],
  'Leading Team of 60': ['60 field coordinators, trainers & associates across Nashik, Thane, Nagpur & Amravati'],
  '29 Project Officers Liaison (17 IAS)': ['Tribal Development Department, Govt of Maharashtra', 'State-level policy alignment'],
  'Science Kit (<₹2500)': ['Gurushala Everyday Science program', '500 schools across UP, Karnataka, Chhattisgarh, etc.'],
  'CASEL & SEL Frameworks': ['Ashram School Happiness Curriculum', 'Teacher and warden training guides'],
  'Student-Level Progress Tracking': ['Over 50,000 assessments conducted', 'Pre-post competency gains'],
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
    title: 'Grassroots Mobilization & Youth Action',
    period: '2017 – 2022',
    synopsis: 'Laying the foundations through university youth leadership in NSS, civic street theatre with Manthan Foundation, and dual academic training in science and literature.',
    episodes: [
      {
        code: 'S01E01',
        title: 'Unnat Bharat & NSS University Council',
        description: 'Elected Vice President of Kurukshetra University NSS. Directed the Unnat Bharat Survey and Swachh Bharat Summer Internship, coordinating large volunteer teams across adopted villages.',
        tags: ['NSS Leadership', 'Unnat Bharat Survey', 'Swachh Bharat'],
        runtime: '2018 – 2019',
        palette: amber,
      },
      {
        code: 'S01E02',
        title: 'Assistant Director at Manthan Foundation',
        description: 'Designed and executed large-scale community awareness campaigns on civic and child rights in partnership with district administrations, the DLSA, and the Election Commission.',
        tags: ['Street Theatre', 'DLSA Partnership', 'Election Commission'],
        runtime: '2019 – 2020',
        palette: crimson,
      },
      {
        code: 'S01E03',
        title: 'Dual Disciplines: B.Sc. & M.A. in Hindi Literature',
        description: 'Completed a Bachelor of Science (B.Sc.) in 2020 followed by a Master of Arts in Hindi Language and Literature with distinction in 2022, uniting rigorous scientific thinking with deep sociolinguistic empathy.',
        tags: ['B.Sc. Degree', 'M.A. Hindi Lit', 'Linguistic Empathy'],
        runtime: '2017 – 2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Techno-Pedagogy & Hands-On STEM',
    period: '2022 – 2024',
    synopsis: 'Deploying digital education with IBM, training regional STEM facilitator cohorts across 10 states, and authoring the Gurushala ₹2500 science kit for 500 schools.',
    episodes: [
      {
        code: 'S02E01',
        title: 'Digital Equalizer & Scratch Coding with IBM',
        description: 'Implemented STEM lesson plans and Scratch block-coding across 6 schools at American India Foundation, building sustainable ownership with School Management Committees and Panchayats.',
        tags: ['AIF & IBM', 'Scratch Coding', 'SMC Ownership'],
        runtime: 'Nov 2022 – Mar 2023',
        palette: ocean,
      },
      {
        code: 'S02E02',
        title: 'Regional STEM Lead Across 10 States',
        description: 'Trained a cohort of 70 School Facilitators across 10 northern states on robotics and techno-pedagogy. Partnered with DIET principals and spearheaded state and interstate STEM Expos.',
        tags: ['70 Facilitators', '10 States', 'DIET Training', 'STEM Expos'],
        runtime: 'Apr 2023 – Jul 2023',
        palette: jade,
      },
      {
        code: 'S02E03',
        title: 'The ₹2500 Everyday Science Kit & 500 Schools',
        description: 'Master Trainer at Pratham Gurushala. Designed the "Integrating Everyday Science" program for 500 schools across 6+ states, creating an affordable kit (<₹2500) enabling 100+ experiments.',
        tags: ['Gurushala Science Kit', '100+ Experiments', '500 Schools in 6 States'],
        runtime: 'Jul 2023 – Mar 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Statewide FLN Scale & AI EdTech',
    period: '2024 – Present',
    synopsis: 'Scaling foundational literacy and numeracy across 500 tribal ashram schools in Maharashtra, building an AI-powered offline platform, and managing a 60-member field force.',
    episodes: [
      {
        code: 'S03E01',
        title: 'Senior Trainer: Quality, CBE & Virtual Camps',
        description: 'Oversaw training quality and mentored field teams at Pratham TCD. Authored CBE-aligned handbooks, led virtual skilling camps, and analyzed MME program data for high-fidelity delivery.',
        tags: ['Training Quality', 'CBE Pedagogy', 'MME Analysis'],
        runtime: 'Apr 2024 – Mar 2025',
        palette: ocean,
      },
      {
        code: 'S03E02',
        title: 'The 48-Day FLN Catch-Up Course across 500 Schools',
        description: 'Architected the 48-day remedial curriculum blending LSRW language pedagogy with TaRL math. Currently rolled out across 500 government tribal residential schools in Maharashtra.',
        tags: ['48-Day Catch-Up', '500 Ashram Schools', 'LSRW + TaRL'],
        runtime: '2025 – Present',
        palette: crimson,
      },
      {
        code: 'S03E03',
        title: 'Vibecoding the AI-Powered Offline FLN Platform',
        description: 'Engineered an AI-powered student progress tracking platform with an offline assessment tool and interactive FLN learning games, overcoming low connectivity in remote tribal hostels.',
        tags: ['AI Platform', 'Offline Assessment Tool', 'Vibecoding', 'FLN Games'],
        runtime: '2025 – 2026',
        palette: jade,
      },
      {
        code: 'S03E04',
        title: 'Leading 60 Staff & 29 Project Officers (17 IAS)',
        description: 'Directly leading 60 field staff across Nashik, Thane, Nagpur, and Amravati divisions, and coordinating with 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs for state policy alignment.',
        tags: ['Team of 60', '29 Project Officers', '17 IAS Officers', '4 Divisions'],
        runtime: 'Apr 2025 – Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Scale of Assessment', title: '50,000+ Students', detail: 'Diagnostic FLN assessments across 500 tribal ashram schools', palette: crimson },
  { label: 'EdTech Innovation', title: 'AI Offline FLN Platform', detail: 'Student tracking & interactive games vibecoded for remote schools', palette: ocean },
  { label: 'High-Level Governance', title: '29 Project Officers (17 IAS)', detail: 'Direct liaison with 29 POs and 29 APOs across Maharashtra', palette: amber },
  { label: 'Field Leadership', title: 'Managing Team of 60', detail: 'Overseeing field staff across Nashik, Thane, Nagpur & Amravati', palette: violet },
  { label: 'Remedial Architecture', title: '48-Day FLN Course', detail: 'LSRW + TaRL remedial model implemented across 500 schools', palette: jade },
  { label: 'Affordable STEM', title: 'Science Kit under ₹2500', detail: '100+ experiments for 500 schools across 6+ states (Gurushala)', palette: amber },
  { label: 'Socio-Emotional Well-Being', title: 'CASEL Happiness Curriculum', detail: 'Contextualized SEL curriculum implemented in residential hostels', palette: violet },
  { label: 'Multi-State Capacity', title: '70 Facilitators (10 States)', detail: 'Regional STEM Lead at AIF training DIETs and educators', palette: ocean },
  { label: 'Dual Academic Roots', title: 'B.Sc. & M.A. Hindi Lit', detail: 'Kurukshetra University • Scientific rigor + narrative empathy', palette: crimson },
  { label: 'Grassroots Foundation', title: 'NSS VP & Manthan Theatre', detail: 'Unnat Bharat Survey & civic street plays with DLSA & Election Comm.', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Scale & Leadership',
    title: '500 Ashram Schools · Team of 60',
    lines: ['Leading Majhi Shala, Majha Swabhimaan in Maharashtra with the Tribal Development Dept', 'Directly coordinating with 29 Project Officers (17 IAS, 12 Non-IAS) and 29 APOs across 4 divisions'],
    chips: ['50,000+ Students', 'Team of 60', '29 IAS/State POs', '4 Divisions'],
  },
  {
    kicker: 'AI & EdTech Innovation',
    title: 'AI-Powered Offline FLN Platform',
    lines: ['Developed student-level progress tracking with offline-first assessment capabilities for low-connectivity schools', 'Integrated engaging FLN practice games built using AI and vibecoding'],
    chips: ['Offline Assessment Tool', 'Vibecoding', 'FLN Games', 'Claude Code'],
  },
  {
    kicker: 'Curriculum & Pedagogy',
    title: 'CASEL, NIPUN, TaRL & NCERT',
    lines: ['Authored 48-Day FLN Catch-Up Course across 500 schools (LSRW + TaRL)', 'Created ₹2500 Everyday Science Kit enabling 100+ experiments across 6+ states', 'Formulated Ashram School Happiness Curriculum based on CASEL framework'],
    chips: ['48-Day FLN', 'Science Kit (<₹2500)', 'CASEL SEL', 'LSRW Model'],
  },
  {
    kicker: 'Background & Mission',
    title: 'Science Meets Sociolinguistics',
    lines: ['Bachelor of Science (B.Sc.) + Master of Arts in Hindi Language & Literature with distinction', 'NSS Vice President & Assistant Director at Manthan Theatre Foundation'],
    chips: ['B.Sc. Degree', 'M.A. Hindi Lit', 'Civic Rights', 'Folk Theatre'],
  },
];

export type ImplementationView = {
  heading: string;
  detail: string;
  fieldTactic: string;
};

export type FieldNote = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  readTime: string;
  date: string;
  category: string;
  palette: Palette;
  logline: string;
  tags: string[];
  linkedinDiscussionUrl: string;
  stats: { value: string; label: string }[];
  frameworks: string[];
  problemStatement: string;
  architectureSolution: string[];
  implementationViews: ImplementationView[];
  keyTakeaways: string[];
};

export const fieldNotes: FieldNote[] = [
  {
    id: 'fln-catchup-course',
    slug: 'fln-catchup-course-grades-5-7',
    title: 'Bridging the Upper-Primary Learning Cliff: The 48-Day FLN Catch-Up Architecture',
    subtitle: 'How structured diagnostic grouping, TaRL numeracy, and LSRW language micro-progressions accelerated foundational competencies across 500 Ashram schools.',
    category: 'Curriculum & Pedagogy',
    readTime: '6 min read',
    date: '2025 – 2026',
    palette: jade,
    logline: 'A field report on why Grade 5–7 students in tribal residential schools face compounding foundational gaps, and how a 48-day targeted sprint delivered measurable learning shifts across 50,000+ students.',
    tags: ['FLN Pedagogy', 'TaRL Framework', 'LSRW', 'Grades 5–7', 'Remedial Architecture', '500 Ashram Schools'],
    linkedinDiscussionUrl: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    stats: [
      { value: '48 Days', label: 'Structured Remedial Cadence' },
      { value: '500', label: 'Ashram Schools Reached' },
      { value: '50,000+', label: 'Students Assessed & Tracked' },
      { value: '90 Min', label: 'Protected Daily Classroom Slot' },
    ],
    frameworks: ['TaRL (Teaching at the Right Level)', 'LSRW (Listen, Speak, Read, Write)', 'NIPUN Bharat', 'Diagnostic Micro-Progression'],
    problemStatement:
      'Foundational Literacy and Numeracy (FLN) is conventionally treated as an early-primary milestone (Grades 1–3). However, in rural and tribal residential ashram schools, over 60% of students entering Grades 5, 6, and 7 face acute learning deficits—often unable to decode simple connected sentences or solve two-digit subtraction with borrowing. In Grade 6, textbooks abruptly jump to abstract science and history concepts, triggering widespread disengagement. Furthermore, older students cannot be remediated using infant primers without feeling infantilized or stigmatized.',
    architectureSolution: [
      'Dignity-Centric Contextual Materials: Math framed through rural weekly markets, sports scores, and agricultural trade; language anchored in tribal oral traditions and folk narratives.',
      'TaRL Math Engine: Grouping strictly by demonstrated competence (1-digit identification -> 2-digit operations -> subtraction with regrouping -> multi-digit word problems) rather than biological age.',
      'LSRW Language Flow: Oral language immersion (Listening & Speaking) precedes decodable text reading, culminating in expressive sentence and paragraph composition.',
      'Formative Diagnostic Checkpoints: Continuous formative checks every 12 days to dynamically regroup children as they master competencies.',
    ],
    implementationViews: [
      {
        heading: 'The 90-Minute Timetable Negotiation',
        detail: 'Ashram schools follow rigorous hostel routines from dawn prayers to evening study hours. Rather than positioning the remedial course as an "extra syllabus" that creates teacher resistance, we worked with Headmasters and Superintendents to formalize a dedicated 90-minute daily remedial block during regular hours.',
        fieldTactic: 'Gained administrative buy-in by presenting baseline learning deficits to school leadership, demonstrating that covering advanced curriculum without foundational mastery yielded zero exam retention.',
      },
      {
        heading: 'Navigating Indigenous Dialects to Standard Text',
        detail: 'Most ashram school students grow up speaking indigenous languages (Pawari, Bhili, Korku, Gondi) while textbooks and exams are in standard Marathi or Hindi. If an instructor bans their mother tongue, classroom participation drops to zero.',
        fieldTactic: 'Instituted a bilingual transition policy in the first 16 days: facilitators encourage students to explain mathematical logic and story narratives in their home dialect, before writing standard Marathi/Hindi keywords.',
      },
      {
        heading: 'Classroom Co-Teaching Over Theoretical Workshops',
        detail: 'Traditional one-day training workshops rarely translate into classroom changes. Our 60 field coordinators spent 80% of their time inside classrooms running live co-teaching sessions with teachers.',
        fieldTactic: 'Facilitators personally demonstrated multi-level group management with real students, demystifying how one teacher can simultaneously instruct three distinct ability groups without classroom disorder.',
      },
    ],
    keyTakeaways: [
      'Remediation in upper primary must protect adolescent dignity—content must match their social maturity while addressing foundational skill gaps.',
      'Rigid grade-level seating must be replaced with dynamic, competence-based ability grouping.',
      'Systemic adoption requires winning over school headmasters by proving that 90 minutes of remedial FLN directly boosts upper-grade pass rates.',
    ],
  },
  {
    id: 'ai-offline-fln-platform',
    slug: 'ai-offline-fln-platform-telemetry',
    title: 'Beyond Averages: Architecting an Offline-First AI Platform for Holistic Child Growth',
    subtitle: 'How we built local-first child telemetry, offline diagnostic assessments, and AI-vibecoded learning games in low-connectivity tribal schools.',
    category: 'EdTech & AI Systems',
    readTime: '7 min read',
    date: '2025 – 2026',
    palette: ocean,
    logline: 'Why cloud-first EdTech fails in rural reality, and how we engineered an offline-first assessment tool with longitudinal child-level growth tracking and interactive learning games using AI vibecoding.',
    tags: ['AI Vibecoding', 'Offline-First Architecture', 'Child Telemetry', 'Holistic Assessment', 'Local-First', 'IndexedDB'],
    linkedinDiscussionUrl: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    stats: [
      { value: 'Offline-1st', label: 'Zero-Connectivity Architecture' },
      { value: '455+', label: 'Live School Dashboards' },
      { value: '<2 Min', label: 'Per-Child Assessment Flow' },
      { value: '48 Hr', label: 'Vibecoding Feature Sprints' },
    ],
    frameworks: ['Local-First / PWA', 'IndexedDB Local Storage', 'AI Vibecoding (Claude Code & Antigravity)', 'Longitudinal Telemetry', 'CASEL Holistic Indicators'],
    problemStatement:
      'Most EdTech platforms are designed by urban developers who assume high-speed 4G/5G connections and modern smartphones. In Maharashtra’s hilly and forested tribal belts, ashram schools frequently have zero cellular reception and unpredictable electricity. An assessment tool that spins an infinite loading spinner is completely abandoned by field workers. Moreover, standard government reporting relies on school-wide averages (e.g., "72% pass rate"), which mathematically conceals the bottom 25% of students who are completely illiterate.',
    architectureSolution: [
      'Local-First Storage Architecture: All school rosters, diagnostic rubrics, student profiles, and game scores are cached locally on low-cost Android tablets using IndexedDB and Service Workers.',
      'Opportunistic Background Sync: When field coordinators travel back to block headquarters or encounter cellular coverage, the system automatically dispatches batched, compressed change vectors with automatic conflict resolution.',
      'Granular Child-Level Telemetry: The platform shifts from school averages to individual student trajectories, capturing exact micro-blockers (e.g., struggles with carrying tens, vowel-consonant conjuncts, or word problem translation).',
      'Gamified AI-Vibecoded Practice: Built-in, low-latency interactive FLN practice games that children play directly on the tablet to reinforce concepts without exam anxiety.',
    ],
    implementationViews: [
      {
        heading: 'Designing for Zero Network & Device Constraints',
        detail: 'Field tablets are often low-spec Android devices with limited RAM and fluctuating battery life. Heavy JavaScript frameworks and massive web assets cause browser crashes.',
        fieldTactic: 'Built ultra-lightweight, bundle-optimized PWA interfaces that run at 60fps on modest hardware without requiring an active server connection during the school day.',
      },
      {
        heading: 'Replacing Bureaucratic Forms with 2-Minute Tap Rubrics',
        detail: 'Teachers and field staff suffer from severe data entry fatigue. If an assessment takes 10 minutes per child, assessing 100 students takes weeks and compromises instruction time.',
        fieldTactic: 'Designed a tactile, one-thumb assessment rubric where facilitators evaluate a child’s reading fluency and arithmetic logic in under 120 seconds through structured audio prompts and tap selectors.',
      },
      {
        heading: 'Tracking the Holistic Child (FLN + CASEL Well-Being)',
        detail: 'A student who is chronically homesick, malnourished, or bullied in a hostel will not learn subtraction. Tracking purely cognitive metrics provides an incomplete picture of child stagnation.',
        fieldTactic: 'Integrated CASEL-aligned social-emotional markers (attendance regularity, classroom engagement, hostel peer comfort) alongside FLN levels, helping wardens and teachers identify at-risk students before they drop out.',
      },
    ],
    keyTakeaways: [
      'Offline-first is not a technical feature; it is an equity prerequisite for rural EdTech.',
      'School-level averages are vanity metrics—real pedagogical impact requires longitudinal, student-level learning trajectories.',
      'AI vibecoding transforms program managers into rapid software creators who can solve field bottlenecks in days rather than waiting quarters for enterprise procurement.',
    ],
  },
  {
    id: 'everyday-science-kit',
    slug: 'everyday-science-kit-500-schools',
    title: 'The ₹2,500 Laboratory: Frugal STEM & Hands-On Science Across 6 States',
    subtitle: 'Overcoming the "locked lab" syndrome by designing low-cost experiential kits and NCERT-aligned manuals for 100+ experiments.',
    category: 'STEM & Frugal Innovation',
    readTime: '5 min read',
    date: '2023 – 2024',
    palette: amber,
    logline: 'How we shattered the barrier to experimental science for 500 schools by engineering a kit under ₹2,500 using everyday materials, backed by rigorous NCERT chapter-wise teacher manuals.',
    tags: ['Frugal Innovation', 'Everyday Science', 'Gurushala', 'NCERT Science', '3,500+ Teachers', 'STEM Equity'],
    linkedinDiscussionUrl: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    stats: [
      { value: '<₹2,500', label: 'Total Kit Cost' },
      { value: '100+', label: 'Hands-On Experiments' },
      { value: '500', label: 'Schools Across 6+ States' },
      { value: '3,500+', label: 'Teachers Mentored' },
    ],
    frameworks: ['Experiential Learning (Kolb)', 'NCERT Curriculum Mapping', 'Frugal Engineering', 'Inquiry-Based Pedagogy'],
    problemStatement:
      'Science in government schools is overwhelmingly taught as theoretical memorization from textbooks. While many schools receive expensive lab equipment from government or donor schemes, these kits typically remain locked inside steel cupboards because teachers fear breakage and lack replacement funds. As a result, students reach Grade 9 without ever measuring air pressure, seeing magnetic flux lines, or observing light refraction with their own hands.',
    architectureSolution: [
      'The ₹2,500 Cost Ceiling: Designed a complete science kit under ₹2,500 containing reusable, durable, everyday materials (syringes, mirrors, balloons, lenses, copper wire, LED bulbs, magnets, straws, and household test reagents) that can conduct over 100 distinct experiments.',
      'NCERT-Aligned Activity Manuals: Authored comprehensive manuals for Grades 6, 7, and 8 that map every single textbook chapter to at least two tactile experiments, complete with safety guidelines and thought-provoking inquiry prompts.',
      'Digital Video Integration: Paired the physical manual with QR-coded bite-sized demonstration videos on the Gurushala platform, providing teachers with instant visual lesson plans.',
    ],
    implementationViews: [
      {
        heading: 'The 100% Local Replenishability Test',
        detail: 'Any kit that requires ordering proprietary parts from an e-commerce vendor or specialized supplier dies the moment a part breaks.',
        fieldTactic: 'Mandated that every consumable item in the kit must be purchasable from a standard village grocer (kirana shop) or local stationery store for under ₹10, ensuring teachers can sustain the kit indefinitely.',
      },
      {
        heading: 'Shifting Teacher Mindsets from Theory to Inquiry',
        detail: 'Teachers frequently viewed hands-on activities as a chaotic distraction that prevented them from finishing the textbook before board exams.',
        fieldTactic: 'Demonstrated that teaching challenging concepts (e.g., atmospheric pressure or electric circuits) via a 5-minute hands-on experiment halved textbook lecture time and boosted student test retention.',
      },
      {
        heading: 'Multi-State Adaptation Across Diverse Dialects & Geographies',
        detail: 'Rolling out across Uttar Pradesh, Karnataka, Chhattisgarh, Arunachal Pradesh, and Telangana required adapting experiments to regional climatic conditions and localized materials.',
        fieldTactic: 'Created state-specific teacher cohorts who shared localized adaptations and substitute materials through peer-learning WhatsApp circles and Gurushala webinars.',
      },
    ],
    keyTakeaways: [
      'Experiential science does not require expensive glass beakers or microprocessor kits; science is embedded in everyday physics and biology.',
      'Overcoming the "locked lab" mindset requires removing the fear of breakage by using low-cost, easily replaceable materials.',
      'A kit without a structured, chapter-mapped curriculum manual is merely a box of toys; pedagogical alignment is what unlocks sustained classroom impact.',
    ],
  },
  {
    id: 'governance-and-field-leadership',
    slug: 'governance-ias-liaison-60-field-team',
    title: 'Translating Policy to Pedagogy: Coordinating with 29 Project Officers (17 IAS) & 60 Field Staff',
    subtitle: 'Strategic execution at the intersection of high-level state governance mandates and remote classroom implementation across 4 divisions.',
    category: 'Leadership & Governance',
    readTime: '6 min read',
    date: '2025 – Present',
    palette: violet,
    logline: 'How to bridge the gap between high-level administrative mandates in Mantralaya/Project Offices and ground reality across 500 tribal ashram schools, leading a 60-member field team.',
    tags: ['State Governance', 'IAS Liaison', 'Tribal Development Department', 'Team Management (60)', 'Field Operations', 'Large-Scale Implementation'],
    linkedinDiscussionUrl: 'https://www.linkedin.com/in/vikas-choudhary-3a7a85149/',
    stats: [
      { value: '29 POs', label: '17 IAS & 12 Non-IAS Officers' },
      { value: '29 APOs', label: 'Assistant Project Officers' },
      { value: '60 Staff', label: 'Field Coordinators & Trainers' },
      { value: '4 Divisions', label: 'Nashik, Thane, Nagpur, Amravati' },
    ],
    frameworks: ['Collaborative Governance', 'Data-Driven Decision Making', 'Supportive Supervision', 'Adaptive Field Leadership'],
    problemStatement:
      'Large-scale public education partnerships frequently suffer from a catastrophic communication gap. State administrative officers (IAS Project Officers and Directors) operate under high-level macro priorities and tight political timelines, while teachers and field workers in remote schools deal with everyday logistical emergencies (water shortages, staff vacancies, regional floods, and language gaps). Without an agile translator at the helm, well-intentioned state policies degrade into compliance paperwork.',
    architectureSolution: [
      'High-Signal One-Page Telemetry: Replaced dense, multi-page bureaucratic reporting binders with crisp, 1-page visual executive summaries highlighting critical clusters, learning deltas, and actionable operational bottlenecks.',
      'Tiered Field Cadre Architecture: Structured 60 field coordinators across Nashik, Thane, Nagpur, and Amravati into autonomous divisional pods led by senior trainers, ensuring daily support reach to all 500 schools.',
      'Bi-Weekly Governance Feedback Cadence: Regular structured check-ins with 29 Project Officers and 29 Assistant Project Officers (APOs) to resolve administrative hurdles (hostel scheduling, teacher permissions) in days rather than months.',
    ],
    implementationViews: [
      {
        heading: 'Designing High-Signal Reporting for Administrative Bandwidth',
        detail: 'Senior bureaucrats and IAS officers manage vast portfolios beyond education (health, infrastructure, tribal land rights). Sending them raw spreadsheets leads to inaction.',
        fieldTactic: 'Standardized monthly review decks to 3 key charts: Learning Gain Trajectory, Outlier Schools Needing Intervention, and Concrete Administrative Action Items.',
      },
      {
        heading: 'Creating Psychological Safety in a Distributed 60-Member Cadre',
        detail: 'When field teams fear punitive reviews, they inevitably inflate student assessment scores and hide real classroom struggles.',
        fieldTactic: 'Shifted the review culture from inspection to coaching. Celebrated coordinators who highlighted severe learning bottlenecks early, treating honest negative data as an engineering problem rather than a personal failure.',
      },
      {
        heading: 'Harmonizing Education with Hostel & Residential Realities',
        detail: 'In an ashram school, teaching hours are inextricably linked to residential health, nutrition, and hostel superintendents. If the warden and the headmaster are misaligned, student attendance evaporates.',
        fieldTactic: 'Included hostel wardens and residential staff in program orientation sessions, recognizing them as key educational partners rather than auxiliary workers.',
      },
    ],
    keyTakeaways: [
      'Impact at scale requires speaking two fluencies: the strategic, high-signal language of IAS leadership, and the grounded, empathetic language of rural classroom teachers.',
      'Transparent, trustworthy data is the currency of governance partnerships; never sugarcoat field challenges.',
      'Empowering a large field team requires decentralization with clear pedagogical guardrails and unrelenting psychological safety.',
    ],
  },
];

export type ProfileId = 'vikas' | 'recruiter' | 'philanthropy' | 'pedagogy' | 'community';
export type SectionId = 'about' | 'journey' | 'originals' | 'dispatches' | 'picks' | 'skills' | 'moments' | 'story';

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
    order: ['about', 'journey', 'originals', 'dispatches', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Team leadership (60), 29 IAS POs, AI platform & resume',
    color: '#4cc9ff',
    order: ['story', 'dispatches', 'picks', 'originals', 'skills', 'moments', 'about', 'journey'],
  },
  {
    id: 'philanthropy',
    name: 'Philanthropy & CSR',
    blurb: '500 ashram schools, 50,000+ students & systemic scale',
    color: '#ffb547',
    order: ['picks', 'dispatches', 'originals', 'journey', 'skills', 'story', 'about', 'moments'],
  },
  {
    id: 'pedagogy',
    name: 'Curriculum & Pedagogy',
    blurb: '48-day FLN, Science Kit (<₹2500), CASEL SEL & NIPUN',
    color: '#46e3a8',
    order: ['dispatches', 'originals', 'skills', 'picks', 'journey', 'about', 'moments', 'story'],
  },
  {
    id: 'community',
    name: 'Grassroots & Theatre',
    blurb: 'NSS VP, Manthan Theatre, Hindi literature & civic outreach',
    color: '#c77dff',
    order: ['dispatches', 'journey', 'moments', 'originals', 'about', 'skills', 'picks', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Vikas', meta: 'The Pilot • 5+ Years in Impact', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'Flagship Productions', meta: `${projects.length} Originals • Curricula, AI & Telemetry`, palette: crimson },
  dispatches: { nav: 'Dispatches', card: 'Field Notes & Architecture', meta: `${fieldNotes.length} Dispatches • Ground Realities & Systems`, palette: ocean },
  picks: { nav: 'Top Picks', card: 'Top 10 in Impact', meta: 'Ranked Milestones in Education Reform', palette: jade },
  skills: { nav: 'Skills', card: 'Domain Mastery', meta: `${skillCategories.length} Cinematic Skill Genres`, palette: ocean },
  moments: { nav: 'Moments', card: 'Laurels & Credentials', meta: `${achievements.length} Moments • ${certifications.length} Frameworks`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume & Credentials • View & Download', palette: violet },
};
