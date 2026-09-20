import { z } from 'zod'

export const MeatLineSchema = z.enum(['cerdo', 'res'])

export const MediaAssetSchema = z.object({
  src: z.string().trim().min(1),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
})

const SpecRowSchema = z.object({
  label: z.string().trim().min(1),
  value: z.string().trim().min(1),
  highlight: z.boolean().optional(),
})

export const HomeHeroSchema = z.object({
  eyebrow: z.string().trim().min(1),
  titleLines: z.array(z.string().trim().min(1)).min(1),
  accentLineIndex: z.number().int().nonnegative(),
  intro: z.string().trim().min(1),
  image: MediaAssetSchema,
})

export const BestSellerSchema = z.object({
  id: z.string().trim().min(1),
  position: z.string().trim().min(1),
  line: MeatLineSchema,
  lineLabel: z.string().trim().min(1),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  specs: z.array(SpecRowSchema),
  ctaLabel: z.string().trim().min(1),
  product: MediaAssetSchema,
  base: MediaAssetSchema.optional(),
})

export const HomeCategorySchema = z.object({
  id: MeatLineSchema,
  index: z.string().trim().min(1),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  banner: MediaAssetSchema,
})

export const HomePageSchema = z.object({
  hero: HomeHeroSchema,
  marquee: z.object({ items: z.array(z.string().trim().min(1)).min(1) }),
  bestSellers: z.array(BestSellerSchema).min(2),
  ourProducts: z.object({
    title: z.string().trim().min(1),
    body: z.string().trim().min(1),
    image: MediaAssetSchema,
    captionTitle: z.string().trim().min(1),
    captionMeta: z.string().trim().min(1),
  }),
  categoriesIntro: z.object({
    eyebrow: z.string().trim().min(1),
    title: z.string().trim().min(1),
    body: z.string().trim().min(1),
  }),
  categories: z.array(HomeCategorySchema).min(1),
  catalogPreview: z.object({
    title: z.string().trim().min(1),
    ctaLabel: z.string().trim().min(1),
  }),
  coldChain: z.object({
    eyebrow: z.string().trim().min(1),
    title: z.string().trim().min(1),
    intro: z.string().trim().min(1),
    steps: z.array(
      z.object({
        step: z.string().trim().min(1),
        title: z.string().trim().min(1),
        body: z.string().trim().min(1),
      }),
    ),
    stats: z.array(
      z.object({
        value: z.string().trim().min(1),
        label: z.string().trim().min(1),
      }),
    ),
  }),
  service: z.object({
    eyebrow: z.string().trim().min(1),
    title: z.string().trim().min(1),
    intro: z.string().trim().min(1),
    cards: z.array(
      z.object({
        title: z.string().trim().min(1),
        body: z.string().trim().min(1),
      }),
    ),
  }),
  contactCta: z.object({
    title: z.string().trim().min(1),
    body: z.string().trim().min(1),
    primaryLabel: z.string().trim().min(1),
    secondaryLabel: z.string().trim().min(1),
    image: MediaAssetSchema,
  }),
})
