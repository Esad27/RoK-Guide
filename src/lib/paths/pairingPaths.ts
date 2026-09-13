import { getPairings } from '../../data/loaders';

export function pairingIds(): string[] {
  return getPairings().map((p) => p.id);
}
