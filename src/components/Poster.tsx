import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original built from Vikas's initiatives. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        
        {project.category === 'telemetry' && (
          <g fill="none" stroke={a} transform="translate(180 50)">
            <rect x="20" y="20" width="180" height="120" rx="8" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="20" y1="50" x2="200" y2="50" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="40" cy="35" r="4" fill={a} />
            <circle cx="56" cy="35" r="4" fill={a} fillOpacity="0.5" />
            <path d="M40 120 L75 80 L110 100 L150 65 L180 75" strokeWidth="2.5" strokeLinecap="round" />
            <rect x="40" y="65" width="24" height="16" rx="3" strokeWidth="1" strokeOpacity="0.5" />
            <rect x="80" y="65" width="24" height="16" rx="3" strokeWidth="1" strokeOpacity="0.5" />
          </g>
        )}

        {project.category === 'curriculum' && (
          <g fill="none" stroke={a} transform="translate(200 60)">
            <path d="M10 30 Q 80 15, 150 30 L 150 140 Q 80 125, 10 140 Z" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M10 30 Q -60 15, -130 30 L -130 140 Q -60 125, 10 140 Z" strokeWidth="2" strokeOpacity="0.8" />
            <line x1="10" y1="30" x2="10" y2="140" strokeWidth="2" />
            <line x1="-110" y1="55" x2="-20" y2="55" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
            <line x1="-110" y1="75" x2="-35" y2="75" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
            <line x1="30" y1="55" x2="120" y2="55" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
            <line x1="30" y1="75" x2="105" y2="75" strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
            <circle cx="10" cy="15" r="8" fill={a} fillOpacity="0.6" />
          </g>
        )}

        {project.category === 'publication' && (
          <g fill="none" stroke={a} transform="translate(210 50)">
            <rect x="30" y="10" width="110" height="150" rx="6" strokeWidth="2" strokeOpacity="0.85" />
            <line x1="50" y1="40" x2="120" y2="40" strokeWidth="3" strokeOpacity="0.7" strokeLinecap="round" />
            <line x1="50" y1="60" x2="105" y2="60" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
            <line x1="50" y1="80" x2="120" y2="80" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
            <line x1="50" y1="95" x2="115" y2="95" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
            <circle cx="85" cy="130" r="10" strokeWidth="1.5" fill={a} fillOpacity="0.2" />
          </g>
        )}

        {project.category === 'scale' && (
          <g fill="none" stroke={a} transform="translate(190 60)">
            <path d="M20 120 L50 85 L85 105 L130 50 L170 30" strokeWidth="3" strokeLinecap="round" />
            <circle cx="170" cy="30" r="6" fill={a} />
            <line x1="10" y1="130" x2="180" y2="130" strokeWidth="1" strokeOpacity="0.4" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Platform mark used in navbar and badges */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="font-display text-xl text-crimson font-black tracking-wider">V</span>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">ROAD TO IMPACT</span>
    </span>
  );
}
