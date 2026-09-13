import { listAllGuideCategoryKeys } from '../guides';

export async function kvkGuideCategories(): Promise<string[]> {
  return (await listAllGuideCategoryKeys('kvk-guide')).map((c) => c.category);
}

export async function battleGuideCategories(): Promise<string[]> {
  return (await listAllGuideCategoryKeys('battle-guide')).map((c) => c.category);
}
