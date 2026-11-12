/**
 * Authoring contract for a playable case.
 * All player-facing content lives in data that conforms to these types;
 * React components never contain case-specific text.
 */

export type Difficulty = 'introductory' | 'intermediate' | 'expert';

export interface Option {
  id: string;
  label: string;
}

export interface DossierRecord {
  label: string;
  value: string;
  /** Source status convention shown as a small tag. */
  status?: 'confirmed' | 'reported' | 'under review';
}

export interface Dossier {
  reference: string; // small uppercase department / reference line
  caseNumber: string;
  victim: string;
  location: string;
  incidentDate: string;
  discoveryTime: string;
  causeOfDeath: string;
  leadInvestigator: string;
  assisting: string;
  status: string;
  synopsis: string;
  backgroundLocation: string;
  backgroundGathering: string;
  extraRecords?: DossierRecord[];
}

export interface Suspect {
  id: string;
  name: string;
  age?: number;
  role: string;
  bio: string; // 70-130 words
  stakes: string; // personal stake
  openQuestion: string; // one ambiguous element worth investigating
  /** Portrait hue in degrees for the initials avatar. */
  hue: number;
}

export interface StorySection {
  heading?: string;
  paragraphs: string[];
}

export interface Finding {
  id: string; // CS-01 ...
  icon: FindingIcon;
  heading: string;
  body: string; // 40-100 words
  kind: 'found' | 'tested' | 'witness claim' | 'inference';
}

export type FindingIcon =
  | 'layout'
  | 'body'
  | 'weather'
  | 'door'
  | 'tool'
  | 'trace'
  | 'document'
  | 'log'
  | 'effects'
  | 'lab'
  | 'negative'
  | 'photo'
  | 'audio'
  | 'timeline';

export interface Statement {
  id: string; // WS-01 ...
  suspectId: string;
  synopsis: string; // one-line teaser
  interviewedAt: string;
  interviewer: string;
  paragraphs: string[]; // the statement
  claims: string[]; // explicit timeline / location claims
}

export interface EvidenceSection {
  label: string;
  body: string;
}

export interface EvidenceFile {
  id: string; // EV-01 ...
  icon: EvidenceIcon;
  title: string;
  summary: string; // one-line description on the index
  stamp: string; // small document stamp, e.g. "LABORATORY"
  recordType: string;
  origin: string;
  custodian: string;
  date: string;
  status: string;
  sections: EvidenceSection[]; // 4-7 labelled sections
}

export type EvidenceIcon = 'report' | 'drawing' | 'timeline' | 'lab' | 'ledger' | 'photo' | 'audio' | 'document' | 'log';

export interface Message {
  from: string; // display name
  side: 'left' | 'right';
  text: string;
  time: string;
}

export interface CommunicationSet {
  id: string; // MSG-01 ...
  suspectId?: string; // owner of the device / handwriting when relevant
  title: string;
  subtitle: string; // provenance, e.g. "Recovered from handset — extraction report"
  format: 'chat' | 'note';
  messages: Message[]; // for chat
  noteText?: string[]; // for a handwritten note / diary
}

export interface Question {
  id: string; // Q-<suspect>-1
  prompt: string;
  answer: string; // 90-220 words
}

export interface Interrogation {
  suspectId: string;
  questions: Question[]; // exactly three by default
}

export interface TimelineEvent {
  time: string;
  event: string;
  refs?: string[];
}

export interface Explanation {
  title: string;
  body: string;
  refs?: string[];
}

export interface MysteryCase {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  era: string;
  difficulty: Difficulty;
  estimatedMinutes: number;
  dossier: Dossier;
  suspects: Suspect[];
  story: StorySection[];
  crimeSceneFindings: Finding[];
  witnessStatements: Statement[];
  evidenceFiles: EvidenceFile[];
  communications: CommunicationSet[];
  interrogations: Interrogation[];
  accusation: {
    motiveOptions: Option[];
    methodOptions: Option[];
    selectableEvidenceIds: string[];
    requiredEvidenceCount: number;
  };
  solution: {
    culpritSuspectId: string;
    motiveOptionId: string;
    methodOptionId: string;
    decisiveEvidenceIds: string[];
    reveal: string; // one decisive sentence
    reconstruction: string[]; // narrative paragraphs
    chronology: TimelineEvent[];
    evidenceChain: Explanation[];
    alternateSuspectExplanations: Explanation[];
    redHerringResolutions: Explanation[];
    epilogue?: string;
  };
}
