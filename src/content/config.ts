import { defineCollection, z } from 'astro:content';

// 1. Collection BLOG (votre configuration existante)
const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

// 2. Collection DOCS (avec le nouveau champ)
const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    category: z.string().optional(),
    sidebar_group: z.string().optional(),
    sidebar_parent: z.string().optional(),
  }),
});

export const collections = { blog, docs };
