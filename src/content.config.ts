import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    client: z.string().optional(),
    medium: z.string().optional(),
    year: z.string().optional(),
    thumbnail: z.string(),
    images: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(99),
  }),
});

export const collections = { works };
