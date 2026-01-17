import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // On permet de trier les pages de doc par ordre logique (1, 2, 3...)
    order: z.number().default(0),
  }),
});

export const collections = { blog, docs };
