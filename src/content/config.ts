import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  'blog': blogCollection,
};
