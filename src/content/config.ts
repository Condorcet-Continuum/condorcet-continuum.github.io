import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Le helper 'image' permet de valider et transformer les images locales
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(), // La ligne magique pour vos images !
    }),
});

export const collections = { blog };
