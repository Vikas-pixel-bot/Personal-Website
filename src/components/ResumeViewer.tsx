import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications, education, experience, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — designed resume sheet preview with credentials and achievements. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="Credentials & Track Record" title="The Full Record" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every milestone, verified.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            5+ years in education and the social sector: 50,000+ student evaluations, leadership of a 60-member field force, strategic liaison with 29 Project Officers (17 IAS), and AI-driven EdTech tools.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Full Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Vikas_Choudhary_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume PDF
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: '50k+', k: 'Assessed' },
              { v: '60', k: 'Team Lead' },
              { v: '500', k: 'Schools' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4500px]' : 'max-h-[580px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read complete record ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">CURRICULUM VITAE</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
          <p className="mt-1 text-xs text-crimson-2 font-semibold tracking-wider">{profile.role}</p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right space-y-0.5">
          <p className="text-bone">{profile.phone}</p>
          <a href={`mailto:${profile.email}`} className="block text-bone hover:underline">
            {profile.email}
          </a>
          <p>{profile.location}</p>
          <div className="flex gap-3 sm:justify-end pt-1">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-crimson-2 hover:underline">
              LinkedIn ↗
            </a>
            <span className="text-smoke">·</span>
            <a href={profile.links.website} target="_blank" rel="noreferrer" className="text-crimson-2 hover:underline">
              vikaschoudhary.vercel.app ↗
            </a>
          </div>
        </div>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <H>Experience</H>
          {experience.map((x) => (
            <div key={x.company + x.role} className="mb-6">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {x.role} <span className="text-mist font-normal">| {x.company}</span>
                </p>
                <p className="text-xs font-semibold text-crimson-2">{x.period}</p>
              </div>
              <p className="text-[11px] text-smoke mt-0.5">{x.place}</p>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Education</H>
          {education.map((e) => (
            <div key={e.degree} className="mb-4">
              <p className="text-sm font-semibold text-bone">{e.degree}</p>
              <p className="text-xs text-mist">{e.school}, {e.place}</p>
              <div className="mt-1 flex items-center justify-between text-xs text-smoke">
                <span>{e.period}</span>
                <span className="font-semibold text-bone">{e.score}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <H>Flagship Curricula & Platforms</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{p.title}</p>
                <p className="text-xs text-smoke">{p.year}</p>
              </div>
              <p className="text-xs text-mist mt-0.5">{p.logline}</p>
            </div>
          ))}

          <H>Competencies & Skill Domains</H>
          <div className="space-y-3">
            {skillCategories.map((c) => (
              <div key={c.id}>
                <p className="text-xs font-semibold text-bone">{c.title}:</p>
                <p className="text-xs leading-relaxed text-mist mt-0.5">
                  {c.skills.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>

          <H>Technical & AI Toolset</H>
          <div className="space-y-2 text-xs text-mist">
            <p><span className="font-semibold text-bone">AI & Vibecoding:</span> Claude, Claude Code, Antigravity, offline-first development, gamified learning engines.</p>
            <p><span className="font-semibold text-bone">Multimodal AI:</span> ChatGPT, Perplexity, ElevenLabs (TTS), Sora, AI summarizers.</p>
            <p><span className="font-semibold text-bone">EdTech & STEM:</span> Techno-pedagogy, robotics kits, Scratch block-coding, DIET training, Canva, Visme, video editing.</p>
          </div>

          <H>Languages</H>
          <div className="text-xs text-mist space-y-1">
            <p><span className="font-semibold text-bone">English:</span> Professional (read, write, speak)</p>
            <p><span className="font-semibold text-bone">Hindi:</span> Native (read, write, speak)</p>
            <p><span className="font-semibold text-bone">Punjabi, Marathi, Gujarati:</span> Beginner</p>
          </div>

          <H>Key Achievements & Governance</H>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">
                  {a.title} — {a.org}:
                </span>{' '}
                {a.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
