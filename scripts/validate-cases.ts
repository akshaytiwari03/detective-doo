/**
 * Mystery integrity validator. Run with `npm run validate`.
 * The build fails if any case violates the authoring contract.
 */
import { cases } from '../src/cases/index';
import type { MysteryCase } from '../src/types/case';

const errors: string[] = [];
const warnings: string[] = [];

function err(c: MysteryCase, msg: string) {
  errors.push(`[${c.slug}] ${msg}`);
}
function warn(c: MysteryCase, msg: string) {
  warnings.push(`[${c.slug}] ${msg}`);
}
function words(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
function unique<T>(c: MysteryCase, label: string, ids: T[]) {
  const seen = new Set<T>();
  for (const id of ids) {
    if (seen.has(id)) err(c, `duplicate ${label} id "${String(id)}"`);
    seen.add(id);
  }
}

const slugs = new Set<string>();
for (const c of cases) {
  if (slugs.has(c.slug)) errors.push(`duplicate case slug ${c.slug}`);
  slugs.add(c.slug);

  const suspectIds = c.suspects.map((s) => s.id);
  unique(c, 'suspect', suspectIds);
  if (c.suspects.length !== 6) err(c, `expected 6 suspects, found ${c.suspects.length}`);
  for (const s of c.suspects) {
    const w = words(s.bio);
    if (w < 45) warn(c, `suspect ${s.id} bio is short (${w} words)`);
  }

  // Story length
  const storyWords = c.story.reduce((n, sec) => n + sec.paragraphs.reduce((m, p) => m + words(p), 0), 0);
  if (storyWords < 600) warn(c, `story is ${storyWords} words (target 700+)`);

  // Findings
  unique(c, 'finding', c.crimeSceneFindings.map((f) => f.id));
  if (c.crimeSceneFindings.length < 7) err(c, `need 7+ crime scene findings, found ${c.crimeSceneFindings.length}`);

  // Statements: one per suspect
  unique(c, 'statement', c.witnessStatements.map((s) => s.id));
  for (const id of suspectIds) {
    if (!c.witnessStatements.some((s) => s.suspectId === id)) err(c, `suspect ${id} has no witness statement`);
  }
  for (const s of c.witnessStatements) {
    if (!suspectIds.includes(s.suspectId)) err(c, `statement ${s.id} references unknown suspect ${s.suspectId}`);
    const w = s.paragraphs.reduce((n, p) => n + words(p), 0);
    if (w < 120) warn(c, `statement ${s.id} is short (${w} words)`);
  }

  // Evidence
  unique(c, 'evidence', c.evidenceFiles.map((e) => e.id));
  if (c.evidenceFiles.length < 5) err(c, `need 5+ evidence files, found ${c.evidenceFiles.length}`);
  for (const e of c.evidenceFiles) {
    if (e.sections.length < 4) err(c, `evidence ${e.id} has fewer than 4 sections`);
  }

  // Communications
  unique(c, 'communication', c.communications.map((m) => m.id));
  if (c.communications.length < 4) err(c, `need 4+ communication sets, found ${c.communications.length}`);
  for (const m of c.communications) {
    if (m.suspectId && !suspectIds.includes(m.suspectId)) err(c, `communication ${m.id} references unknown suspect`);
    if (m.format === 'chat' && m.messages.length < 2) err(c, `communication ${m.id} has too few messages`);
    if (m.format === 'note' && !(m.noteText && m.noteText.length)) err(c, `note ${m.id} has no text`);
  }

  // Interrogations: 3 questions per suspect, unique question ids
  const qIds: string[] = [];
  for (const id of suspectIds) {
    const it = c.interrogations.find((i) => i.suspectId === id);
    if (!it) {
      err(c, `suspect ${id} has no interrogation`);
      continue;
    }
    if (it.questions.length !== 3) err(c, `suspect ${id} must have 3 questions, has ${it.questions.length}`);
    for (const q of it.questions) {
      qIds.push(q.id);
      const w = words(q.answer);
      if (w < 60) warn(c, `answer ${q.id} is short (${w} words)`);
    }
  }
  unique(c, 'question', qIds);
  for (const i of c.interrogations) {
    if (!suspectIds.includes(i.suspectId)) err(c, `interrogation for unknown suspect ${i.suspectId}`);
  }

  // All referenceable ids
  const allIds = new Set<string>([
    ...c.crimeSceneFindings.map((f) => f.id),
    ...c.witnessStatements.map((s) => s.id),
    ...c.evidenceFiles.map((e) => e.id),
    ...c.communications.map((m) => m.id),
    ...qIds
  ]);

  // Accusation
  const { accusation: a, solution: s } = c;
  unique(c, 'motive option', a.motiveOptions.map((o) => o.id));
  unique(c, 'method option', a.methodOptions.map((o) => o.id));
  if (a.motiveOptions.length < 3) err(c, 'need 3+ motive options');
  if (a.methodOptions.length < 3) err(c, 'need 3+ method options');
  for (const id of a.selectableEvidenceIds) {
    if (!allIds.has(id)) err(c, `selectable evidence ${id} does not exist`);
  }
  if (a.requiredEvidenceCount > a.selectableEvidenceIds.length) err(c, 'requiredEvidenceCount exceeds selectable ids');

  // Solution
  if (!suspectIds.includes(s.culpritSuspectId)) err(c, `culprit ${s.culpritSuspectId} is not a suspect`);
  if (!a.motiveOptions.some((o) => o.id === s.motiveOptionId)) err(c, 'solution motive option missing');
  if (!a.methodOptions.some((o) => o.id === s.methodOptionId)) err(c, 'solution method option missing');
  if (s.decisiveEvidenceIds.length < 3) err(c, 'need 3+ decisive evidence ids');
  for (const id of s.decisiveEvidenceIds) {
    if (!allIds.has(id)) err(c, `decisive evidence ${id} does not exist`);
    if (!a.selectableEvidenceIds.includes(id)) err(c, `decisive evidence ${id} is not selectable in the accusation form`);
  }
  const checkRefs = (list: { refs?: string[] }[], label: string) => {
    for (const x of list) for (const r of x.refs ?? []) if (!allIds.has(r)) err(c, `${label} references unknown id ${r}`);
  };
  checkRefs(s.chronology, 'chronology');
  checkRefs(s.evidenceChain, 'evidence chain');
  checkRefs(s.alternateSuspectExplanations, 'alternate explanation');
  checkRefs(s.redHerringResolutions, 'red herring');
  if (s.alternateSuspectExplanations.length < 5) err(c, 'every innocent suspect needs an alternate explanation (5)');

  // Non-spoiler: culprit should not be first in suspects list for every case (checked globally below)
}

const culpritPositions = cases.map((c) => c.suspects.findIndex((s) => s.id === c.solution.culpritSuspectId));
if (new Set(culpritPositions).size === 1 && cases.length > 1) warnings.push('culprit sits at the same list position in every case');

console.log(`Validated ${cases.length} case(s).`);
for (const w of warnings) console.log('  warn:', w);
if (errors.length) {
  for (const e of errors) console.error('  ERROR:', e);
  console.error(`\n${errors.length} error(s). Build aborted.`);
  process.exit(1);
}
console.log('No errors.');
