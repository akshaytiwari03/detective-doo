import { useEffect, useState } from 'react';
import { HashRouter, Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { cases, getCase } from '../cases/index';
import { useProgress } from '../hooks/useProgress';
import type { MysteryCase } from '../types/case';
import { STAGES } from '../utils/stages';
import { ResetDialog, StageNav, StageProgress } from '../components/ui';
import { DossierStage, EvidenceStage, MessagesStage, SceneStage, StatementsStage, StoryStage, SuspectsStage } from '../components/stages';
import { AccusationStage, AnswerStage, InterrogationStage } from '../components/finale';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
}

function Library() {
  return (
    <main className="shell">
      <div className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            The Case Archive <span>— ten investigations</span>
          </Link>
        </div>
      </div>
      <section className="stage wide">
        <header className="library-hero">
          <h1>The Case Archive</h1>
          <p>
            Ten original murder investigations. Each one is a complete dossier: suspects, the full story, the scene, statements, evidence, private messages, interviews, and a
            final accusation. Every case is fair — the answer is in the file before you are asked for it.
          </p>
        </header>
        <ul className="case-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {cases.map((c, i) => (
            <CaseCover key={c.slug} c={c} index={i + 1} />
          ))}
        </ul>
      </section>
      <footer className="site">All cases, characters and events are fictional. Progress is stored only in this browser.</footer>
    </main>
  );
}

function CaseCover({ c, index }: { c: MysteryCase; index: number }) {
  const p = useProgress(c);
  const state = p.submitted ? 'Solved · answer revealed' : p.answeredCount > 0 ? `In progress · ${p.answeredCount}/${p.totalQuestions} questions` : p.progress.visitedStages.length ? 'Started' : '';
  return (
    <li className="case-cover">
      <div className="num">
        Case {String(index).padStart(2, '0')} · {c.era}
      </div>
      <h2>{c.title}</h2>
      <p className="tag">{c.tagline}</p>
      <div className="facts">
        <span>{c.difficulty}</span>
        <span>≈ {c.estimatedMinutes} min</span>
        <span>{c.suspects.length} suspects</span>
      </div>
      {state ? <div className="state">{state}</div> : null}
      <Link to={`/case/${c.slug}/dossier`} className="cta open">
        {p.submitted ? 'Reopen case' : p.progress.visitedStages.length ? 'Continue' : 'Open case'}
      </Link>
    </li>
  );
}

function CaseShell() {
  const { slug, stage } = useParams();
  const c = slug ? getCase(slug) : undefined;
  if (!c) {
    return (
      <main className="shell">
        <section className="stage normal">
          <div className="locked-notice">
            <p>No case with the reference “{slug}” exists in this archive.</p>
            <div className="cta-wrap">
              <Link to="/" className="cta">
                Back to the library
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }
  return <CaseView c={c} stage={stage ?? 'dossier'} />;
}

function CaseView({ c, stage }: { c: MysteryCase; stage: string }) {
  const p = useProgress(c);
  const [resetOpen, setResetOpen] = useState(false);
  const def = STAGES.find((s) => s.key === stage);
  useEffect(() => {
    if (def) p.addTo('visitedStages', def.key);
  }, [def, p]);

  if (!def) return <Navigate to={`/case/${c.slug}/dossier`} replace />;

  const locked: Record<string, boolean> = { accusation: !p.canAccuse && !p.submitted, answer: !p.submitted };
  const idx = STAGES.findIndex((s) => s.key === stage);

  const pages: Record<string, JSX.Element> = {
    dossier: <DossierStage c={c} p={p} />,
    suspects: <SuspectsStage c={c} p={p} />,
    story: <StoryStage c={c} p={p} />,
    scene: <SceneStage c={c} p={p} />,
    statements: <StatementsStage c={c} p={p} />,
    evidence: <EvidenceStage c={c} p={p} />,
    messages: <MessagesStage c={c} p={p} />,
    interrogation: <InterrogationStage c={c} p={p} />,
    accusation: <AccusationStage c={c} p={p} />,
    answer: <AnswerStage c={c} p={p} />
  };

  return (
    <main className="shell">
      <div className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            Archive
          </Link>
          <span className="case-title">{c.title}</span>
          <span className="stage-meta">
            Stage {idx + 1} of {STAGES.length}
          </span>
          <button className="btn-ghost" onClick={() => setResetOpen(true)}>
            Reset case
          </button>
        </div>
        <StageProgress slug={c.slug} current={stage} visited={p.progress.visitedStages} locked={locked} />
      </div>
      {pages[stage]}
      <div className="stage normal" style={{ paddingTop: 0 }}>
        <StageNav slug={c.slug} current={stage} locked={locked} />
      </div>
      <footer className="site">
        {def.label} · {c.title} · Fictional case for play only.
      </footer>
      <ResetDialog
        open={resetOpen}
        onCancel={() => setResetOpen(false)}
        onConfirm={() => {
          p.reset();
          setResetOpen(false);
          window.location.hash = `#/case/${c.slug}/dossier`;
        }}
      />
    </main>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/case/:slug" element={<CaseShell />} />
        <Route path="/case/:slug/:stage" element={<CaseShell />} />
        <Route path="/case/:slug/:stage/:itemId" element={<CaseShell />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
