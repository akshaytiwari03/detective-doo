import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { MysteryCase } from '../types/case';
import type { ProgressApi } from '../hooks/useProgress';
import { Cta, Icon, PersonPortrait, StageHeading } from './ui';

export interface StageProps {
  c: MysteryCase;
  p: ProgressApi;
}

/* ---------- 1. Dossier ---------- */
export function DossierStage({ c }: StageProps) {
  const d = c.dossier;
  const rows: { label: string; value: string; status?: string }[] = [
    { label: 'Victim', value: d.victim, status: 'confirmed' },
    { label: 'Date of death', value: d.incidentDate },
    { label: 'Discovery', value: d.discoveryTime, status: 'reported' },
    { label: 'Location', value: d.location },
    { label: 'Cause of death', value: d.causeOfDeath, status: 'under review' },
    { label: 'Lead investigator', value: d.leadInvestigator },
    { label: 'Assisting', value: d.assisting },
    { label: 'Status', value: d.status },
    { label: 'Case synopsis', value: d.synopsis },
    { label: 'Background — the place', value: d.backgroundLocation },
    { label: 'Background — the gathering', value: d.backgroundGathering },
    ...(d.extraRecords ?? [])
  ];
  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title={c.title} lede={c.tagline} />
      <article className="paper dossier">
        <div className="ref-line">
          {d.reference} — Case {d.caseNumber}
        </div>
        <div className="records">
          {rows.map((r) => (
            <div className="record" key={r.label}>
              <div className="label">{r.label}</div>
              <div className="value">
                {r.value}
                {r.status ? <span className="status">{r.status}</span> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/suspects`}>Meet the suspects →</Cta>
        </div>
      </article>
    </section>
  );
}

/* ---------- 2. Persons of Interest ---------- */
export function SuspectsStage({ c }: StageProps) {
  return (
    <section className="stage wide" aria-labelledby="stage-title">
      <div className="field lavender">
        <StageHeading
          title="Persons of Interest"
          lede="Six people had access, motive or opportunity. Each carries something they would rather keep hidden — but only one of them carries a murder."
        />
        <ul className="suspect-grid" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {c.suspects.map((s) => (
            <li key={s.id} className="suspect-card">
              <PersonPortrait name={s.name} hue={s.hue} size={56} />
              <div>
                <div className="name">{s.name}</div>
                <div className="role">
                  {s.role}
                  {s.age ? `, ${s.age}` : ''}
                </div>
              </div>
              <p className="bio">{s.bio}</p>
              <p className="stakes">
                <span className="kicker">At stake</span>
                {s.stakes}
              </p>
              <p className="openq">
                <span className="kicker">Worth asking</span>
                {s.openQuestion}
              </p>
            </li>
          ))}
        </ul>
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/story`}>Read the full story →</Cta>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. Story ---------- */
export function StoryStage({ c }: StageProps) {
  return (
    <section className="stage narrow" aria-labelledby="stage-title">
      <article className="story-paper">
        <StageHeading title={c.title} />
        <p className="era">{c.era}</p>
        {c.story.map((sec, i) => (
          <div key={i}>
            {i > 0 ? (
              <div className="scene-break" aria-hidden="true">
                ❖ ❖ ❖
              </div>
            ) : null}
            {sec.heading ? <h2>{sec.heading}</h2> : null}
            {sec.paragraphs.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </div>
        ))}
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/scene`}>Investigate the crime scene →</Cta>
        </div>
      </article>
    </section>
  );
}

/* ---------- 4. Crime scene ---------- */
export function SceneStage({ c }: StageProps) {
  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title="Crime Scene Findings" lede="What the scene itself can tell us, recorded before any interview coloured it. Each finding carries an ID you can cite in your accusation." />
      <div className="field ochre">
        {c.crimeSceneFindings.map((f) => (
          <article className="finding" key={f.id} id={f.id}>
            <div className="icon">
              <Icon name={f.icon} />
            </div>
            <div>
              <div className="head">
                <h3>{f.heading}</h3>
                <span className="id">{f.id}</span>
              </div>
              <p>{f.body}</p>
              <span className="kind">{f.kind}</span>
            </div>
          </article>
        ))}
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/statements`}>Read witness statements →</Cta>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Statements ---------- */
export function StatementsStage({ c, p }: StageProps) {
  const { itemId } = useParams();
  const st = itemId ? c.witnessStatements.find((s) => s.id === itemId) : undefined;
  useEffect(() => {
    if (st) p.addTo('readStatements', st.id);
  }, [st, p]);

  if (itemId && !st) {
    return (
      <section className="stage normal">
        <Link to={`/case/${c.slug}/statements`} className="back-link">
          ← Back to all statements
        </Link>
        <div className="locked-notice">There is no statement with the reference “{itemId}” in this case file.</div>
      </section>
    );
  }

  if (st) {
    const s = c.suspects.find((x) => x.id === st.suspectId)!;
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <Link to={`/case/${c.slug}/statements`} className="back-link">
          ← Back to all statements
        </Link>
        <article className="panel lavender">
          <header className="statement-head">
            <PersonPortrait name={s.name} hue={s.hue} size={56} />
            <div>
              <h1 className="name" id="stage-title" tabIndex={-1}>
                {s.name}
              </h1>
              <div className="meta">
                {s.role} · Statement {st.id} · Taken {st.interviewedAt} · {st.interviewer}
              </div>
            </div>
          </header>
          <div className="statement-body">
            {st.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <aside className="claims" aria-label="Timeline claims in this statement">
            <h3>Claims to test</h3>
            <ul>
              {st.claims.map((cl, i) => (
                <li key={i}>{cl}</li>
              ))}
            </ul>
          </aside>
        </article>
      </section>
    );
  }

  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title="Witness Statements" lede="Six accounts, taken separately. Read for what each person claims to have seen — and for what they could not have seen." />
      <div className="field lavender">
        <div className="row-list">
          {c.suspects.map((s) => {
            const st = c.witnessStatements.find((x) => x.suspectId === s.id)!;
            const read = p.progress.readStatements.includes(st.id);
            return (
              <Link key={st.id} to={`/case/${c.slug}/statements/${st.id}`} className="row-item">
                <PersonPortrait name={s.name} hue={s.hue} size={48} />
                <div>
                  <div className="name">{s.name}</div>
                  <div className="role">{s.role}</div>
                  <div className="teaser">“{st.synopsis}”</div>
                </div>
                <div>
                  {read ? <div className="read">✓ Read</div> : null}
                  <div className="arrow" aria-hidden="true">
                    →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="cta-wrap">
          <Cta to={`/case/${c.slug}/evidence`}>Open the evidence files →</Cta>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Evidence ---------- */
export function EvidenceStage({ c, p }: StageProps) {
  const { itemId } = useParams();
  const ev = itemId ? c.evidenceFiles.find((e) => e.id === itemId) : undefined;
  useEffect(() => {
    if (ev) p.addTo('readEvidence', ev.id);
  }, [ev, p]);

  if (itemId && !ev) {
    return (
      <section className="stage normal">
        <Link to={`/case/${c.slug}/evidence`} className="back-link">
          ← Back to all evidence
        </Link>
        <div className="locked-notice">There is no evidence file “{itemId}” in this case.</div>
      </section>
    );
  }

  if (ev) {
    return (
      <section className="stage normal" aria-labelledby="stage-title">
        <Link to={`/case/${c.slug}/evidence`} className="back-link">
          ← Back to all evidence
        </Link>
        <article className="panel cyan" id={ev.id}>
          <span className="stamp">{ev.stamp}</span>
          <div className="doc-title">
            {ev.id} · {ev.recordType}
          </div>
          <h1 id="stage-title" tabIndex={-1} style={{ fontSize: '1.45rem' }}>
            {ev.title}
          </h1>
          <div className="meta-grid">
            <div>
              <b>Origin</b>
              {ev.origin}
            </div>
            <div>
              <b>Custodian / analyst</b>
              {ev.custodian}
            </div>
            <div>
              <b>Date</b>
              {ev.date}
            </div>
            <div>
              <b>Status</b>
              {ev.status}
            </div>
          </div>
          {ev.sections.map((s) => (
            <div className="labelled" key={s.label}>
              <div className="l">{s.label}</div>
              <div className="v">{s.body}</div>
            </div>
          ))}
        </article>
      </section>
    );
  }

  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title="Evidence Files" lede="Reports, documents and analyses gathered by the investigation. Open each file; several of them narrow what is possible, and some contradict what you have been told." />
      <div className="row-list">
        {c.evidenceFiles.map((e) => {
          const read = p.progress.readEvidence.includes(e.id);
          return (
            <Link key={e.id} to={`/case/${c.slug}/evidence/${e.id}`} className="row-item cyan">
              <span className="ev-icon">
                <span style={{ width: 20, height: 20, display: 'block' }}>
                  <Icon name={e.icon} />
                </span>
              </span>
              <div>
                <div className="name">
                  {e.title} <span style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', color: 'var(--ink-3)', fontWeight: 400 }}>{e.id}</span>
                </div>
                <div className="role">{e.summary}</div>
              </div>
              <div>
                {read ? <div className="read">✓ Opened</div> : null}
                <div className="arrow" aria-hidden="true">
                  →
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="cta-wrap">
        <Cta to={`/case/${c.slug}/messages`}>Read the secret notes →</Cta>
      </div>
    </section>
  );
}

/* ---------- 7. Messages ---------- */
export function MessagesStage({ c }: StageProps) {
  return (
    <section className="stage normal" aria-labelledby="stage-title">
      <StageHeading title="Secret Notes & Intercepted Messages" lede="Private communications and notes recovered during the investigation. Not every secret here is a murder — but each one changes what someone had to lose." />
      {c.communications.map((m) => {
        const s = m.suspectId ? c.suspects.find((x) => x.id === m.suspectId) : undefined;
        return (
          <article className="comm-card" key={m.id} id={m.id}>
            <header className="comm-head">
              {s ? (
                <PersonPortrait name={s.name} hue={s.hue} size={44} />
              ) : (
                <span className="ev-icon" style={{ width: 44, height: 44 }}>
                  <span style={{ width: 22, height: 22, display: 'block' }}>
                    <Icon name="note" />
                  </span>
                </span>
              )}
              <div>
                <div className="name">
                  {m.title} <span style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', color: 'var(--ink-3)', fontWeight: 400 }}>{m.id}</span>
                </div>
                <div className="sub">{m.subtitle}</div>
              </div>
            </header>
            {m.format === 'chat' ? (
              <div className="phone" role="list" aria-label={`Message transcript: ${m.title}`}>
                {m.messages.map((msg, i) => (
                  <div key={i} className={`bubble ${msg.side}`} role="listitem">
                    {msg.text}
                    <span className="who">
                      {msg.from} — {msg.time}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="note-paper">
                {(m.noteText ?? []).map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            )}
          </article>
        );
      })}
      <div className="cta-wrap">
        <Cta to={`/case/${c.slug}/interrogation`}>Begin interrogation →</Cta>
      </div>
    </section>
  );
}
