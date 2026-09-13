import { getCommanders } from '../../data/loaders';

export function commanderSlugs(): string[] {
  return getCommanders().map((c) => c.slug);
}
