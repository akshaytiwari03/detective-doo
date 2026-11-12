import { useEffect, useRef, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { EvidenceIcon, FindingIcon } from '../types/case';
import { STAGES } from '../utils/stages';
import { initials } from '../utils/text';

/* ---------- Portrait (initials fallback, deterministic hue) ---------- */
export function PersonPortrait({ name, hue, size = 48 }: { name: string; hue: number; size?: number }) {
  const bg = `hsl(${hue} 38% 44%)`;
  return (
    <span
      className="portrait"
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
      style={{ width: size, height: size, background: `linear-gradient(145deg, hsl(${hue} 45% 58%), ${bg})`, fontSize: size * 0.36 }}
    >
      {initials(name)}
    </span>
  );
}

/* ---------- Line icons ---------- */
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

export function Icon({ name, label }: { name: FindingIcon | EvidenceIcon | 'arrow' | 'back' | 'check' | 'note'; label?: string }) {
  const common = { width: '100%', height: '100%', viewBox: '0 0 24 24', 'aria-hidden': label ? undefined : true, role: label ? 'img' : undefined };
  const paths: Record<string, ReactNode> = {
    layout: <g {...stroke}><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 10h18M10 10v10" /></g>,
    body: <g {...stroke}><circle cx="12" cy="6" r="2.5" /><path d="M8 21v-6l-2-3 3-3h6l3 3-2 3v6" /></g>,
    weather: <g {...stroke}><path d="M7 17a4 4 0 1 1 1-7.9A5 5 0 0 1 17.6 11 3 3 0 1 1 17 17H7z" /></g>,
    door: <g {...stroke}><rect x="6" y="3" width="12" height="18" rx="1" /><circle cx="15" cy="12" r="1" /></g>,
    tool: <g {...stroke}><path d="M14 6l4 4-8 8-4-4z" /><path d="M16 4l4 4M6 18l-2 2" /></g>,
    trace: <g {...stroke}><circle cx="11" cy="11" r="6" /><path d="M15.5 15.5L21 21" /></g>,
    document: <g {...stroke}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M9 12h6M9 16h6" /></g>,
    log: <g {...stroke}><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></g>,
    effects: <g {...stroke}><path d="M4 8h16v10H4z" /><path d="M9 8V6h6v2M4 12h16" /></g>,
    lab: <g {...stroke}><path d="M10 3v6l-5 9a1 1 0 0 0 1 2h12a1 1 0 0 0 1-2l-5-9V3" /><path d="M8 3h8M7 15h10" /></g>,
    negative: <g {...stroke}><circle cx="12" cy="12" r="8" /><path d="M8 8l8 8" /></g>,
    report: <g {...stroke}><path d="M6 3h12v18H6z" /><path d="M9 8h6M9 12h6M9 16h4" /></g>,
    drawing: <g {...stroke}><path d="M3 20l4-1 11-11-3-3L4 16z" /><path d="M13 7l3 3" /></g>,
    timeline: <g {...stroke}><path d="M4 12h16" /><circle cx="7" cy="12" r="2" /><circle cx="14" cy="12" r="2" /><circle cx="20" cy="12" r="1.5" /></g>,
    ledger: <g {...stroke}><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 9h16M4 14h16M10 4v16" /></g>,
    photo: <g {...stroke}><rect x="3" y="6" width="18" height="13" rx="1" /><circle cx="12" cy="12.5" r="3.5" /><path d="M8 6l1.5-2h5L16 6" /></g>,
    audio: <g {...stroke}><path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" /></g>,
    arrow: <g {...stroke}><path d="M5 12h14M13 6l6 6-6 6" /></g>,
    back: <g {...stroke}><path d="M19 12H5M11 18l-6-6 6-6" /></g>,
    check: <g {...stroke}><path d="M5 13l4 4L19 7" /></g>,
    note: <g {...stroke}><path d="M5 3h11l3 3v15H5z" /><path d="M8 9h8M8 13h8M8 17h5" /></g>
  };
  return (
    <svg {...common}>
      {label ? <title>{label}</title> : null}
      {paths[name]}
    </svg>
  );
}

/* ---------- Stage progress strip ---------- */
export function StageProgress({ slug, current, visited, locked }: { slug: string; current: string; visited: string[]; locked: Record<string, boolean> }) {
  return (
    <nav className="stage-progress" aria-label="Investigation stages">
      {STAGES.map((s, i) => {
        const isCurrent = s.key === current;
        const isDone = visited.includes(s.key) && !isCurrent;
        const isLocked = locked[s.key];
        const cls = [isCurrent ? 'current' : '', isDone ? 'done' : '', isLocked ? 'locked' : ''].join(' ').trim();
        const content = (
          <>
            <span className="num">{i + 1}</span>
            <span className="label">
              {i + 1}. {s.short}
            </span>
          </>
        );
        if (isLocked) {
          return (
            <span key={s.key} className={cls} aria-label={`${s.label} (locked)`} title="Locked until requirements are met">
              {content}
            </span>
          );
        }
        return (
          <Link key={s.key} to={`/case/${slug}/${s.path}`} className={cls} aria-current={isCurrent ? 'step' : undefined} title={s.label}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}

/* ---------- Previous / Next ---------- */
export function StageNav({ slug, current, locked }: { slug: string; current: string; locked: Record<string, boolean> }) {
  const i = STAGES.findIndex((s) => s.key === current);
  const prev = i > 0 ? STAGES[i - 1] : undefined;
  const next = i < STAGES.length - 1 ? STAGES[i + 1] : undefined;
  return (
    <nav className="stage-nav" aria-label="Previous and next stage">
      {prev ? (
        <Link to={`/case/${slug}/${prev.path}`} className="prev">
          <span className="dir">← Previous</span>
          <span className="name">{prev.label}</span>
        </Link>
      ) : (
        <Link to="/" className="prev">
          <span className="dir">← Library</span>
          <span className="name">All cases</span>
        </Link>
      )}
      {next && !locked[next.key] ? (
        <Link to={`/case/${slug}/${next.path}`} className="next">
          <span className="dir">Next →</span>
          <span className="name">{next.label}</span>
        </Link>
      ) : next ? (
        <span className="next" aria-disabled="true">
          <span className="dir">Next</span>
          <span className="name">{next.label} (locked)</span>
        </span>
      ) : (
        <Link to="/" className="next">
          <span className="dir">Finish →</span>
          <span className="name">Back to the library</span>
        </Link>
      )}
    </nav>
  );
}

export function Cta({ to, children, disabled, title }: { to: string; children: ReactNode; disabled?: boolean; title?: string }) {
  if (disabled) {
    return (
      <span className="cta" aria-disabled="true" title={title}>
        {children}
      </span>
    );
  }
  return (
    <Link to={to} className="cta">
      {children}
    </Link>
  );
}

export function StageHeading({ title, lede, id = 'stage-title' }: { title: string; lede?: string; id?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, [title]);
  return (
    <header className="stage-heading">
      <h1 id={id} ref={ref} tabIndex={-1}>
        {title}
      </h1>
      {lede ? <p className="lede">{lede}</p> : null}
    </header>
  );
}

export function ResetDialog({ open, onCancel, onConfirm }: { open: boolean; onCancel: () => void; onConfirm: () => void }) {
  const btn = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) btn.current?.focus();
  }, [open]);
  if (!open) return null;
  return (
    <div className="dialog-backdrop" role="presentation" onClick={onCancel}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="reset-title" onClick={(e) => e.stopPropagation()}>
        <h2 id="reset-title">Reset this case?</h2>
        <p>Your read statements, opened files, answered questions and any accusation for this case will be cleared. Other cases are not affected.</p>
        <div className="btn-row">
          <button ref={btn} className="cta secondary" onClick={onCancel}>
            Keep progress
          </button>
          <button className="cta" onClick={onConfirm}>
            Reset case
          </button>
        </div>
      </div>
    </div>
  );
}
