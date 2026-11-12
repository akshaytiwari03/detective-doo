import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import type { StageProps } from './stages';
import { Cta, PersonPortrait, StageHeading } from './ui';
import { optionLabel } from '../utils/text';

/* ---------- 8. Interrogation ---------- */
export function InterrogationStage({ c, p }: StageProps) {
  const { itemId } = useParams();
  const suspect = itemId ? c.suspects.find((s) => s.id === itemId) : undefined;
  const interro = suspect ? c.interrogations.find((i) => i.suspectId === suspect.id) : undefined;
  const [active, setActive] = useState<string | null>(null);
  const liveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(null);
  }, [itemId]);

  const footer = (
    <div className="interro-footer">
      <div className="count">
        Questions answered: <b>{p.answeredCount}</b> of <b>{p.totalQuestions}</b>
      </div>
      {p.canAccuse ? (
        <Cta to={`/case/${c.slug}/accusation`}>Make your accusation →</Cta>
      ) : (
        <>
          <span className="cta" aria-disabled="true" title="Answer every question first">
            Make your accusation
          </span>
          <span className="hint" style={{ flexBasis: '100%' }}>
            The accusation form opens once every suspect has answered all of their questions. Nothing is lost if you leave and return.
          </span>
        </>
      )}
    </div>
  );

  if (itemId && (!suspect || !interro)) {
    return (
      <section className="stage normal">
        <Link to={`/case/${c.slug}/interrogation`} className="back-link">
          ← Back to suspects
        </Link>
        <div className="locked-notice">No interview subject matches “{itemId}”.</div>
      </section>
    );
  }

  if (suspect && interro) {
    const activeQ = interro.questions.find((q) => q.id === active);
    const answeredHere = interro.questions.filter((q) => p.progress.answered.includes(q.id)).length;
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <Link to={`/case/${c.slug}/interrogation`} className="back-link">
          ← Back to suspects
        </Link>
        <article className="field peach">
          <header className="interro-head">
            <PersonPortrait name={suspect.name} hue={suspect.hue} size={56} />
            <div>
              <h1 className="name" id="stage-title" tabIndex={-1}>
                {suspect.name}
              </h1>
              <div className="role">{suspect.role}</div>
            </div>
            <span className="live">LIVE</span>
          </header>
          <div className="conversation" ref={liveRef} aria-live="polite" aria-atomic="false">
            {activeQ ? (
              <>
                <div className="speech detective">
                  <span className="who">Detective</span>
                  {activeQ.prompt}
                </div>
                <div className="speech suspect">
                  <span className="who">{suspect.name}</span>
                  {activeQ.answer}
                </div>
              </>
            ) : (
              <p className="empty">Select a question below to begin the interview. {answeredHere}/{interro.questions.length} answered so far.</p>
            )}
          </div>
          <div className="questions">
            <h2>Select a question</h2>
            {interro.questions.map((q) => {
              const done = p.progress.answered.includes(q.id);
              return (
                <button
                  key={q.id}
                  className={`question-btn ${done ? 'done' : ''} ${active === q.id ? 'active' : ''}`}
                  aria-pressed={active === q.id}
                  onClick={() => {
                    setActive(q.id);
                    p.addTo('answered', q.id);
                  }}
                >
                  {q.prompt}
                  {done ? <span className="sr-only"> (answered)</span> : null}
                </button>
              );
            })}
          </div>
        </article>
        {footer}
      </section>
    );
  }

  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading
        title="Interrogation Room"
        lede="You may question each person in turn. Examine every response before you present your final theory — the strongest answer is often the one that can be checked against a file."
      />
      <div className="field peach">
        <div className="row-list">
          {c.suspects.map((s) => {
            const it = c.interrogations.find((i) => i.suspectId === s.id)!;
            const n = it.questions.filter((q) => p.progress.answered.includes(q.id)).length;
            return (
              <Link key={s.id} to={`/case/${c.slug}/interrogation/${s.id}`} className="row-item peach">
                <PersonPortrait name={s.name} hue={s.hue} size={48} />
                <div>
                  <div className="name">{s.name}</div>
                  <div className="role">{s.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {n > 0 ? (
                    <div className="read" style={{ color: n === it.questions.length ? 'var(--ok)' : 'var(--peach-deep)' }}>
                      {n}/{it.questions.length} answered
                    </div>
                  ) : null}
                  <div className="arrow" aria-hidden="true">
                    →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {footer}
    </section>
  );
}

/* ---------- 9. Accusation ---------- */
export function AccusationStage({ c, p }: StageProps) {
  const navigate = useNavigate();
  const [culprit, setCulprit] = useState('');
  const [motive, setMotive] = useState('');
  const [method, setMethod] = useState('');
  const [evidence, setEvidence] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [confirming, setConfirming] = useState(false);

  const evidenceItems = useMemo(() => {
    const lookup = new Map<string, string>();
    c.crimeSceneFindings.forEach((f) => lookup.set(f.id, `Scene: ${f.heading}`));
    c.evidenceFiles.forEach((e) => lookup.set(e.id, `File: ${e.title}`));
    c.communications.forEach((m) => lookup.set(m.id, `Messages: ${m.title}`));
    c.witnessStatements.forEach((s) => lookup.set(s.id, `Statement: ${c.suspects.find((x) => x.id === s.suspectId)?.name}`));
    c.interrogations.forEach((i) =>
      i.questions.forEach((q, n) => lookup.set(q.id, `Interview: ${c.suspects.find((x) => x.id === i.suspectId)?.name}, question ${n + 1}`))
    );
    return c.accusation.selectableEvidenceIds.map((id) => ({ id, label: lookup.get(id) ?? id }));
  }, [c]);

  if (p.submitted) {
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <StageHeading title="Accusation submitted" lede="Your theory has been placed on the record. The case findings are ready." />
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/answer`}>Open the answer →</Cta>
        </div>
      </section>
    );
  }

  if (!p.canAccuse) {
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <StageHeading title="Final Accusation" />
        <div className="locked-notice">
          <p>
            The accusation form opens after every interview question has been asked ({p.answeredCount} of {p.totalQuestions} so far). A theory built on half the
            testimony is a guess.
          </p>
          <div className="cta-wrap">
            <Cta to={`/case/${c.slug}/interrogation`}>Return to the interrogation room</Cta>
          </div>
        </div>
      </section>
    );
  }

  const need = c.accusation.requiredEvidenceCount;
  const ready = culprit && motive && method && evidence.length >= need;

  const toggleEvidence = (id: string) =>
    setEvidence((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= 3 ? cur : [...cur, id]));

  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title="Final Accusation" lede="Name the person responsible, cite the proof that convinced you, and state how and why. There is no feedback until you submit." />
      <form
        className="paper form-paper"
        onSubmit={(e) => {
          e.preventDefault();
          if (ready) setConfirming(true);
        }}
      >
        <fieldset>
          <legend>Who is responsible for the death of {c.dossier.victim.split(',')[0]}?</legend>
          {c.suspects.map((s) => (
            <label className="choice" key={s.id}>
              <input type="radio" name="culprit" value={s.id} checked={culprit === s.id} onChange={() => setCulprit(s.id)} />
              <span>
                {s.name}
                <small>{s.role}</small>
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Decisive evidence</legend>
          <p className="help">
            Select {need} to 3 items that, together, separate your suspect from everyone else. ({evidence.length} selected)
          </p>
          {evidenceItems.map((e) => (
            <label className="choice" key={e.id}>
              <input type="checkbox" checked={evidence.includes(e.id)} onChange={() => toggleEvidence(e.id)} disabled={!evidence.includes(e.id) && evidence.length >= 3} />
              <span>
                {e.label}
                <small>{e.id}</small>
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>How was it done?</legend>
          {c.accusation.methodOptions.map((o) => (
            <label className="choice" key={o.id}>
              <input type="radio" name="method" value={o.id} checked={method === o.id} onChange={() => setMethod(o.id)} />
              <span>{o.label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Why?</legend>
          {c.accusation.motiveOptions.map((o) => (
            <label className="choice" key={o.id}>
              <input type="radio" name="motive" value={o.id} checked={motive === o.id} onChange={() => setMotive(o.id)} />
              <span>{o.label}</span>
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Investigator’s notes (optional)</legend>
          <p className="help">Record your reasoning. This is kept with your accusation and does not affect the result.</p>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} aria-label="Investigator's notes" />
        </fieldset>

        {!confirming ? (
          <div className="cta-wrap">
            <button type="submit" className="cta" disabled={!ready} aria-disabled={!ready} title={ready ? undefined : 'Complete every section first'}>
              Review my accusation
            </button>
          </div>
        ) : (
          <div className="confirm-box" role="region" aria-live="polite">
            <h3>Finalize this theory?</h3>
            <p>
              You are accusing <b>{c.suspects.find((s) => s.id === culprit)?.name}</b>, citing {evidence.join(', ')}. Submitting is final for this case: the complete
              findings are revealed and this form closes. You can restart the case later to try again.
            </p>
            <div className="btn-row">
              <button type="button" className="cta secondary" onClick={() => setConfirming(false)}>
                Go back
              </button>
              <button
                type="button"
                className="cta"
                onClick={() => {
                  p.submitAccusation({ culpritId: culprit, motiveId: motive, methodId: method, evidenceIds: evidence, notes });
                  navigate(`/case/${c.slug}/answer`);
                }}
              >
                Submit and reveal the answer
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

/* ---------- 10. Answer ---------- */
export function AnswerStage({ c, p }: StageProps) {
  const a = p.progress.accusation;
  if (!a) {
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <StageHeading title="The Answer" />
        <div className="locked-notice">
          <p>The case findings are sealed until you have submitted an accusation. No clue on this page is new; everything in it is already in the file.</p>
          <div className="cta-wrap">
            <Cta to={`/case/${c.slug}/accusation`}>Go to the accusation</Cta>
          </div>
        </div>
      </section>
    );
  }
  const s = c.solution;
  const culprit = c.suspects.find((x) => x.id === s.culpritSuspectId)!;
  const accused = c.suspects.find((x) => x.id === a.culpritId);
  const culpritRight = a.culpritId === s.culpritSuspectId;
  const motiveRight = a.motiveId === s.motiveOptionId;
  const methodRight = a.methodId === s.methodOptionId;
  const evidenceHits = a.evidenceIds.filter((id) => s.decisiveEvidenceIds.includes(id)).length;
  const score = [culpritRight, motiveRight, methodRight].filter(Boolean).length + (evidenceHits >= 2 ? 1 : 0);

  const refLink = (id: string) => {
    if (c.evidenceFiles.some((e) => e.id === id)) return `/case/${c.slug}/evidence/${id}`;
    if (c.witnessStatements.some((e) => e.id === id)) return `/case/${c.slug}/statements/${id}`;
    if (c.crimeSceneFindings.some((e) => e.id === id)) return `/case/${c.slug}/scene#${id}`;
    if (c.communications.some((e) => e.id === id)) return `/case/${c.slug}/messages#${id}`;
    const it = c.interrogations.find((i) => i.questions.some((q) => q.id === id));
    return it ? `/case/${c.slug}/interrogation/${it.suspectId}` : `/case/${c.slug}/dossier`;
  };
  const Refs = ({ refs }: { refs?: string[] }) =>
    refs && refs.length ? (
      <div className="refs">
        {refs.map((r) => (
          <Link key={r} to={refLink(r)}>
            {r}
          </Link>
        ))}
      </div>
    ) : null;

  return (
    <section className="stage normal answer-paper" aria-labelledby="stage-title">
      <StageHeading title="Case Closed" lede={c.title} />
      <article className="paper">
        <p className="reveal">{s.reveal}</p>

        <h2>Your accusation against the case findings</h2>
        <div className="verdict-grid">
          <div className="verdict">
            <b>Culprit</b>
            You named {accused?.name ?? '—'}. <span className={`mark ${culpritRight ? 'yes' : 'no'}`}>{culpritRight ? 'Correct.' : `The findings name ${culprit.name}.`}</span>
          </div>
          <div className="verdict">
            <b>Evidence</b>
            You cited {a.evidenceIds.join(', ')}. <span className={`mark ${evidenceHits >= 2 ? 'yes' : 'no'}`}>{evidenceHits} of your items are decisive.</span> Decisive set:{' '}
            {s.decisiveEvidenceIds.join(', ')}.
          </div>
          <div className="verdict">
            <b>Method</b>
            You said: {optionLabel(c.accusation.methodOptions, a.methodId)}.{' '}
            <span className={`mark ${methodRight ? 'yes' : 'no'}`}>{methodRight ? 'Correct.' : `Findings: ${optionLabel(c.accusation.methodOptions, s.methodOptionId)}.`}</span>
          </div>
          <div className="verdict">
            <b>Motive</b>
            You said: {optionLabel(c.accusation.motiveOptions, a.motiveId)}.{' '}
            <span className={`mark ${motiveRight ? 'yes' : 'no'}`}>{motiveRight ? 'Correct.' : `Findings: ${optionLabel(c.accusation.motiveOptions, s.motiveOptionId)}.`}</span>
          </div>
        </div>
        <p className="hint" style={{ marginTop: '0.75rem' }}>
          Score {score} of 4: one point each for culprit, method and motive, and one for citing at least two decisive items. It is a summary, not a judgment of your reasoning.
        </p>
        {a.notes ? (
          <div className="explain" style={{ marginTop: '1rem' }}>
            <h3>Your notes</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{a.notes}</p>
          </div>
        ) : null}

        <h2>What happened</h2>
        <div className="prose">
          {s.reconstruction.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h2>Chronology</h2>
        <ol className="timeline">
          {s.chronology.map((t, i) => (
            <li key={i}>
              <span className="t">{t.time}</span>
              {t.event}
              <Refs refs={t.refs} />
            </li>
          ))}
        </ol>

        <h2>The decisive evidence chain</h2>
        {s.evidenceChain.map((e) => (
          <div className="explain" key={e.title}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
            <Refs refs={e.refs} />
          </div>
        ))}

        <h2>Why the others are innocent</h2>
        {s.alternateSuspectExplanations.map((e) => (
          <div className="explain" key={e.title}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
            <Refs refs={e.refs} />
          </div>
        ))}

        <h2>What the misleading clues actually meant</h2>
        {s.redHerringResolutions.map((e) => (
          <div className="explain" key={e.title}>
            <h3>{e.title}</h3>
            <p>{e.body}</p>
            <Refs refs={e.refs} />
          </div>
        ))}

        {s.epilogue ? (
          <>
            <h2>Afterwards</h2>
            <div className="prose">
              <p>{s.epilogue}</p>
            </div>
          </>
        ) : null}

        <div className="btn-row" style={{ justifyContent: 'center', marginTop: '2rem' }}>
          <Link to={`/case/${c.slug}/evidence`} className="cta secondary">
            Revisit the evidence
          </Link>
          <Link to="/" className="cta secondary">
            Investigate another case
          </Link>
        </div>
        <p className="hint" style={{ textAlign: 'center', marginTop: '1rem' }}>
          To play this case again from the beginning, use “Reset case” in the top bar. Revisiting the evidence keeps your result.
        </p>
      </article>
    </section>
  );
}
