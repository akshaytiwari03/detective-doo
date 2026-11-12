export interface StageDef {
  key: string;
  path: string;
  label: string;
  short: string;
}

/** Canonical ten-stage sequence. Order is fixed by design. */
export const STAGES: StageDef[] = [
  { key: 'dossier', path: 'dossier', label: 'Case Dossier', short: 'Dossier' },
  { key: 'suspects', path: 'suspects', label: 'Persons of Interest', short: 'Suspects' },
  { key: 'story', path: 'story', label: 'The Full Story', short: 'Story' },
  { key: 'scene', path: 'scene', label: 'Crime Scene Findings', short: 'Scene' },
  { key: 'statements', path: 'statements', label: 'Witness Statements', short: 'Statements' },
  { key: 'evidence', path: 'evidence', label: 'Evidence Files', short: 'Evidence' },
  { key: 'messages', path: 'messages', label: 'Secret Notes & Messages', short: 'Messages' },
  { key: 'interrogation', path: 'interrogation', label: 'Interrogation Room', short: 'Interrogation' },
  { key: 'accusation', path: 'accusation', label: 'Final Accusation', short: 'Accusation' },
  { key: 'answer', path: 'answer', label: 'The Answer', short: 'Answer' }
];

export function stageIndex(key: string) {
  return STAGES.findIndex((s) => s.key === key);
}
