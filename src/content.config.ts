import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts with a `url` link out (e.g. Apart reports, LessWrong). Posts without one are rendered at /writing/<id>/.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    venue: z.string(),
    url: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
