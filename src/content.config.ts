import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guides',
    // Astro's default id slugification strips internal dots (e.g.
    // "kvk-guide-preparation.en.md" -> "kvk-guide-preparationen"), which
    // destroys the locale suffix these filenames rely on. Keep it verbatim.
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['battle-guide', 'kvk-guide']),
    category: z.string(),
    order: z.number().default(0),
    videoId: z.string().optional(),
    lastVerified: z.string().optional(),
    sources: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          type: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { guides };
