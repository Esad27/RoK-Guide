import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n';

type GuideEntry = CollectionEntry<'guides'>;
type GuideSection = 'battle-guide' | 'kvk-guide';

function localeOfEntry(entry: GuideEntry): Locale {
  const parts = entry.id.split('.');
  const suffix = parts[parts.length - 1];
  return (suffix === 'vi' || suffix === 'es' ? suffix : 'en') as Locale;
}

export interface GuideCategorySummary {
  section: GuideSection;
  category: string;
  order: number;
  title: string;
}

export async function listGuideCategories(
  section: GuideSection,
  locale: Locale = 'en'
): Promise<GuideCategorySummary[]> {
  const all = await getCollection('guides', (entry) => entry.data.section === section);
  const byCategory = new Map<string, GuideEntry>();
  for (const entry of all) {
    const existing = byCategory.get(entry.data.category);
    const entryLocale = localeOfEntry(entry);
    const existingLocale = existing ? localeOfEntry(existing) : undefined;
    if (
      !existing ||
      (entryLocale === locale && existingLocale !== locale) ||
      (existingLocale !== locale && entryLocale === 'en')
    ) {
      byCategory.set(entry.data.category, entry);
    }
  }
  return [...byCategory.values()]
    .map((entry) => ({
      section,
      category: entry.data.category,
      order: entry.data.order,
      title: entry.data.title,
    }))
    .sort((a, b) => a.order - b.order);
}

export interface GuideForLocaleResult {
  entry: GuideEntry;
  isFallback: boolean;
}

export async function getGuideForLocale(
  section: GuideSection,
  category: string,
  locale: Locale
): Promise<GuideForLocaleResult | undefined> {
  const matches = await getCollection(
    'guides',
    (entry) => entry.data.section === section && entry.data.category === category
  );
  if (matches.length === 0) return undefined;

  const exact = matches.find((entry) => localeOfEntry(entry) === locale);
  if (exact) return { entry: exact, isFallback: false };

  const fallback = matches.find((entry) => localeOfEntry(entry) === 'en');
  if (fallback) return { entry: fallback, isFallback: true };

  return { entry: matches[0], isFallback: true };
}

export async function listAllGuideCategoryKeys(
  section: GuideSection
): Promise<{ category: string }[]> {
  const categories = await listGuideCategories(section);
  return categories.map((c) => ({ category: c.category }));
}
