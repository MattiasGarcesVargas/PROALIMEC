import { z } from 'zod'

const CtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
})

const MediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

const MarketingItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().optional(),
})

const MarketingSectionSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  description: z.string().optional(),
  items: z.array(MarketingItemSchema).default([]),
})

export const HomePageSchema = z.object({
  status: z.literal('structure-only'),
  hero: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    primaryCta: CtaSchema,
    secondaryCta: CtaSchema.optional(),
    media: MediaSchema.optional(),
    trustLabel: z.string().optional(),
  }),
  marquee: z.array(z.string().min(1)).default([]),
  categories: MarketingSectionSchema,
  benefits: MarketingSectionSchema,
  story: z
    .object({
      eyebrow: z.string().optional(),
      title: z.string().min(1),
      description: z.string().min(1),
      media: MediaSchema.optional(),
    })
    .nullable(),
  coldChain: MarketingSectionSchema,
  featuredProducts: z.array(z.string().min(1)).default([]),
  metrics: z
    .array(
      z.object({
        id: z.string().min(1),
        value: z.string().min(1),
        label: z.string().min(1),
      }),
    )
    .default([]),
  quoteCta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: CtaSchema,
  }),
})
