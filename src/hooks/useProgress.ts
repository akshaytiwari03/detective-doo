import { useCallback, useEffect, useMemo, useState } from 'react';
import type { MysteryCase } from '../types/case';

export interface AccusationState {
  culpritId: string;
  motiveId: string;
  methodId: string;
  evidenceIds: string[];
  notes: string;
  submittedAt: string;
}

export interface Progress {
  visitedStages: string[];
  readStatements: string[];
  readEvidence: string[];
  answered: string[];
  accusation?: AccusationState;
}

const EMPTY: Progress = { visitedStages: [], readStatements: [], readEvidence: [], answered: [] };

export function storageKey(slug: string) {
  return `mystery:v1:${slug}`;
}

function safeRead(key: string): Progress {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Partial<Progress>;
    const arr = (x: unknown) => (Array.isArray(x) ? x.filter((v) => typeof v === 'string') : []) as string[];
    return {
      visitedStages: arr(parsed.visitedStages),
      readStatements: arr(parsed.readStatements),
      readEvidence: arr(parsed.readEvidence),
      answered: arr(parsed.answered),
      accusation: parsed.accusation && typeof parsed.accusation === 'object' ? (parsed.accusation as AccusationState) : undefined
    };
  } catch {
    return EMPTY;
  }
}

function safeWrite(key: string, value: Progress) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: progress is kept in memory for this session */
  }
}

/** Validates stored ids against the live case so stale data never crashes the UI. */
function sanitize(c: MysteryCase, p: Progress): Progress {
  const qIds = new Set(c.interrogations.flatMap((i) => i.questions.map((q) => q.id)));
  const sIds = new Set(c.witnessStatements.map((s) => s.id));
  const eIds = new Set(c.evidenceFiles.map((e) => e.id));
  const suspectIds = new Set(c.suspects.map((s) => s.id));
  const acc = p.accusation && suspectIds.has(p.accusation.culpritId) ? p.accusation : undefined;
  return {
    visitedStages: p.visitedStages,
    readStatements: p.readStatements.filter((id) => sIds.has(id)),
    readEvidence: p.readEvidence.filter((id) => eIds.has(id)),
    answered: p.answered.filter((id) => qIds.has(id)),
    accusation: acc
  };
}

export function useProgress(c: MysteryCase) {
  const key = storageKey(c.slug);
  const [progress, setProgress] = useState<Progress>(() => sanitize(c, safeRead(key)));

  useEffect(() => {
    setProgress(sanitize(c, safeRead(key)));
  }, [key, c]);

  const update = useCallback(
    (fn: (p: Progress) => Progress) => {
      setProgress((prev) => {
        const next = fn(prev);
        safeWrite(key, next);
        return next;
      });
    },
    [key]
  );

  const addTo = useCallback(
    (field: 'visitedStages' | 'readStatements' | 'readEvidence' | 'answered', id: string) =>
      update((p) => (p[field].includes(id) ? p : { ...p, [field]: [...p[field], id] })),
    [update]
  );

  const totalQuestions = useMemo(() => c.interrogations.reduce((n, i) => n + i.questions.length, 0), [c]);
  const answeredCount = progress.answered.length;
  const canAccuse = answeredCount >= totalQuestions && totalQuestions > 0;
  const submitted = Boolean(progress.accusation);

  const submitAccusation = useCallback(
    (a: Omit<AccusationState, 'submittedAt'>) => update((p) => ({ ...p, accusation: { ...a, submittedAt: new Date().toISOString() } })),
    [update]
  );

  const reset = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch {
      /* ignore */
    }
    setProgress(EMPTY);
  }, [key]);

  return { progress, addTo, totalQuestions, answeredCount, canAccuse, submitted, submitAccusation, reset };
}

export type ProgressApi = ReturnType<typeof useProgress>;
