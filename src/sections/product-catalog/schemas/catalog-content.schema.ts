import { z } from 'zod'

export const CatalogContentSchema = z.object({
  hero: z.object({
    eyebrow: z.string().trim().min(1),
    title: z.string().trim().min(1),
    intro: z.string().trim().min(1),
  }),
  customCut: z.object({
    body: z.string().trim().min(1),
    ctaLabel: z.string().trim().min(1),
  }),
})
