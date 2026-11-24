import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { fieldNotes, profile, type FieldNote } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

const block = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: EASE } },
};

export default function DispatchModal({
  note,
  onClose,
  onSwitch,
}: {
  note: FieldNote;
  onClose: () => void;
  onSwitch: (n: FieldNote) => void;
}) {
  useScrollLock(true);
  const scroller = useRef<HTMLDivElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: 0 });
  }, [note.id]);

  const more = fieldNotes.filter((n) => n.id !== note.id);

  return (
    <motion.div
      className="fixed inset-0 z-[140]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`dispatch-title-${note.id}`}
    >
      <motion.div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <div
        ref={scroller}
        data-lenis-prevent
        className="absolute inset-0 overflow-y-auto overscroll-contain"
        onClick={onClose}
      >
        <motion.div
          className="relative mx-auto min-h-full max-w-4xl bg-ink-2 shadow-2xl sm:my-10 sm:min-h-0 sm:rounded-2xl ring-1 ring-white/10"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, y: 24, transition: { duration: 0.25 } }}
        >
          {/* Header Banner */}
          <div className="relative overflow-hidden border-b border-white/10 p-6 sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: note.palette.accent }}
            />
            <button
              ref={closeBtn}
              type="button"
              onClick={onClose}
              data-cursor="close"
              aria-label="Close field note"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone backdrop-blur transition hover:bg-white/20 sm:right-6 sm:top-6"
            >
              ✕
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                style={{ background: `${note.palette.accent}20`, color: note.palette.accent }}
              >
                {note.category}
              </span>
              <span className="text-xs text-smoke">
                {note.readTime} · {note.date}
              </span>
              <span className="rounded border border-white/20 px-2 py-0.5 text-[10px] text-mist">
                DIRECTOR&apos;S NOTE
              </span>
            </div>

            <h1
              id={`dispatch-title-${note.id}`}
              className="mt-4 font-display text-3xl leading-[1.05] tracking-wide text-bone sm:text-5xl"
            >
              {note.title}
            </h1>

            <p className="mt-3 max-w-2xl font-serif text-base italic leading-relaxed text-mist sm:text-lg">
              {note.subtitle}
            </p>

            {/* Scale & Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
              {note.stats.map((s) => (
                <div key={s.label} className="bg-ink p-4">
                  <p className="font-display text-2xl leading-none text-bone sm:text-3xl" style={{ color: note.palette.accent }}>
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-xs text-mist">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Author & LinkedIn Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-black/30 px-6 py-4 sm:px-10">
            <div className="flex items-center gap-3">
              <img
                src={profile.portrait.src}
                alt={profile.displayName}
                className="h-10 w-10 rounded-full border border-white/20 object-cover object-top"
              />
              <div>
                <p className="text-xs font-semibold text-bone">{profile.displayName}</p>
                <p className="text-[11px] text-smoke">{profile.role}</p>
              </div>
            </div>

            <a
              href={note.linkedinDiscussionUrl || profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 rounded-full border border-ocean/40 bg-ocean/10 px-4 py-2 text-xs font-semibold text-ocean transition hover:border-ocean hover:bg-ocean/20"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>Discuss on LinkedIn ↗</span>
            </a>
          </div>

          {/* Article Body */}
          <motion.div
            className="space-y-10 px-6 py-8 sm:px-10 sm:py-10"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
          >
            {/* The Field Reality / Problem Statement */}
            <motion.section variants={block} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-crimson-2">
                The Field Reality &amp; Systemic Bottleneck
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-bone/90 sm:text-base">
                {note.problemStatement}
              </p>
            </motion.section>

            {/* Frameworks */}
            <motion.section variants={block}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-smoke">
                Anchor Frameworks &amp; Pedagogical Foundations
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {note.frameworks.map((f) => (
                  <span key={f} className="glass rounded-full px-3 py-1 text-xs font-medium text-bone">
                    {f}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Strategic Architecture / Solution */}
            <motion.section variants={block}>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-crimson-2">
                Architectural Strategy &amp; Solution Design
              </h2>
              <ul className="mt-4 space-y-3">
                {note.architectureSolution.map((s) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-bone/90 sm:text-[15px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: note.palette.accent }} />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Implementation Views & Ground Realities */}
            <motion.section variants={block}>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.28em] text-amber">
                  Views on Implementation &amp; Ground Realities
                </h2>
                <span className="text-[10px] uppercase tracking-wider text-smoke">Field Notes From 500 Schools</span>
              </div>
              <p className="mt-2 text-xs text-mist">
                Realities encountered across Nashik, Thane, Nagpur, and Amravati divisions, and the operational tactics deployed to navigate them.
              </p>

              <div className="mt-6 space-y-4">
                {note.implementationViews.map((view, i) => (
                  <div
                    key={view.heading}
                    className="overflow-hidden rounded-xl border border-white/10 bg-ink p-5 sm:p-6"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 font-mono text-[11px] font-bold text-bone">
                        {i + 1}
                      </span>
                      <h3 className="font-sans text-base font-semibold text-bone">{view.heading}</h3>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-mist">{view.detail}</p>

                    <div className="mt-4 rounded-lg border border-[#ffb547]/30 bg-[#ffb547]/5 p-3 sm:p-4">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#ffb547]">
                        ⚡ Deployed Field Tactic
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-bone/90 sm:text-sm">
                        {view.fieldTactic}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Key Takeaways */}
            <motion.section variants={block} className="rounded-xl border border-jade/30 bg-jade/5 p-5 sm:p-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#46e3a8]">
                Enduring Key Takeaways
              </h2>
              <ul className="mt-3 space-y-2">
                {note.keyTakeaways.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-bone/90">
                    <span className="text-[#46e3a8]">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Bottom LinkedIn Connection Callout */}
            <motion.section
              variants={block}
              className="flex flex-col items-center justify-between gap-4 rounded-xl border border-white/15 bg-gradient-to-r from-ink to-ink-2 p-6 text-center sm:flex-row sm:text-left"
            >
              <div>
                <p className="font-sans text-sm font-semibold text-bone">
                  Have thoughts or field perspectives on this note?
                </p>
                <p className="mt-1 text-xs text-mist">
                  Connect with Vikas on LinkedIn to discuss implementation, data telemetry, or FLN scaling.
                </p>
              </div>

              <a
                href={note.linkedinDiscussionUrl || profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs font-bold tracking-wider text-ink transition hover:bg-bone hover:shadow-lg"
              >
                Connect on LinkedIn ↗
              </a>
            </motion.section>

            {/* More Dispatches */}
            <motion.section variants={block} className="border-t border-white/10 pt-8">
              <h3 className="mb-4 font-sans text-base font-semibold text-bone">More Field Dispatches</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {more.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => onSwitch(m)}
                    data-cursor="view"
                    className="group rounded-xl border border-white/10 bg-ink p-4 text-left transition hover:border-white/25 hover:bg-white/[0.04]"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-wider text-smoke">{m.category}</p>
                    <p className="mt-1 font-display text-base leading-tight text-bone group-hover:text-white">
                      {m.title}
                    </p>
                    <p className="mt-2 text-[10px] text-mist">{m.readTime} →</p>
                  </button>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
