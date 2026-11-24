import { motion } from 'framer-motion';
import { fieldNotes, profile, type FieldNote } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function Dispatches({ onOpen }: { onOpen: (note: FieldNote) => void }) {
  return (
    <>
      <SectionHeading
        kicker="Director's Commentary"
        title="Dispatches from the Field"
        aside={
          <p className="max-w-xs text-sm text-mist">
            Pedagogical frameworks, low-connectivity engineering, and the unvarnished realities of executing reform across 500 tribal ashram schools.
          </p>
        }
      />

      <div className="gutter grid gap-6 md:grid-cols-2 [perspective:1400px]">
        {fieldNotes.map((note, i) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 35, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-6% 0px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={6} className="group h-full rounded-2xl">
              <article
                className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-ink-2/95 to-ink/95 p-6 ring-1 ring-white/10 transition duration-500 hover:ring-white/25 sm:p-8"
                style={{
                  boxShadow: `0 20px 40px -20px ${note.palette.accent}25`,
                }}
              >
                {/* top glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition duration-700 group-hover:opacity-40"
                  style={{ background: note.palette.accent }}
                />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                      style={{ background: `${note.palette.accent}20`, color: note.palette.accent }}
                    >
                      {note.category}
                    </span>
                    <span className="text-xs text-smoke">
                      {note.readTime} · {note.date}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl leading-snug text-bone transition group-hover:text-white sm:text-3xl">
                    {note.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-mist line-clamp-2 sm:text-sm">
                    {note.subtitle}
                  </p>

                  {/* stats row */}
                  <div className="mt-6 grid grid-cols-2 gap-2 border-y border-white/10 py-3 sm:grid-cols-4">
                    {note.stats.map((s) => (
                      <div key={s.label}>
                        <p className="font-display text-lg leading-none text-bone sm:text-xl" style={{ color: note.palette.accent }}>
                          {s.value}
                        </p>
                        <p className="mt-1 text-[10px] leading-tight text-smoke">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {note.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-md bg-white/[0.04] px-2 py-0.5 text-[11px] text-mist">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* footer action bar */}
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpen(note)}
                    data-cursor="play"
                    className="group/btn inline-flex items-center gap-1.5 font-sans text-xs font-semibold tracking-wider text-bone transition hover:text-white"
                  >
                    <span>READ FIELD NOTE</span>
                    <span className="transition-transform group-hover/btn:translate-x-1 text-crimson-2">→</span>
                  </button>

                  <a
                    href={note.linkedinDiscussionUrl || profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-smoke transition hover:text-ocean"
                    title="Discuss on LinkedIn"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>Discuss ↗</span>
                  </a>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
}
