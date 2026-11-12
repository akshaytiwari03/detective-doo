import type { MysteryCase } from '../types/case';
import { hollinCourt } from './hollin-court';
import { deadAir } from './dead-air';
import { cerroAlto } from './cerro-alto';
import { cardewLight } from './cardew-light';
import { understudy } from './understudy';
import { lastReel } from './last-reel';
import { reykjavik } from './reykjavik';
import { drownedVine } from './drowned-vine';

export const cases: MysteryCase[] = [
  hollinCourt,
  deadAir,
  cerroAlto,
  cardewLight,
  understudy,
  lastReel,
  reykjavik,
  drownedVine
];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}
