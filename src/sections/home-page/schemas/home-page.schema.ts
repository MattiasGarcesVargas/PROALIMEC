import { z } from 'zod'

export const MeatLineSchema = z.enum(['cerdo', 'res'])

export const MediaAssetSchema = z.object({
  src: z.string().trim().min(1),
  alt: z.string(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
})

export const HomeHeroSchema = z.object({
  eyebrow: z.string().trim().min(1),
  titleLines: z.array(z.string().trim().min(1)).min(1),
  accentLineIndex: z.number().int().nonnegative(),
  intro: z.string().trim().min(1),
  image: MediaAssetSchema,
})

// Misión y visión: cada una es una banda a ancho completo con foto de fondo bajo un velo navy
export const PurposeStatementSchema = z.object({
  id: z.enum(['mision', 'vision']),
  title: z.string().trim().min(1),
  statement: z.string().trim().min(1),
  values: z.array(z.string().trim().min(1)).min(1),
  // Foto decorativa: el texto ya dice todo, por eso el alt va vacío
  image: MediaAssetSchema,
})

export const BestSellerSchema = z.object({
  id: z.string().trim().min(1),
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
  ctaLabel: z.string().trim().min(1),
  product: MediaAssetSchema,
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
  purpose: z.tuple([PurposeStatementSchema, PurposeStatementSchema]),
  brands: z.object({
    // Dos filas: la segunda va en naranja, como el acento del hero
    titleLines: z.tuple([z.string().trim().min(1), z.string().trim().min(1)]),
    description: z.string().trim().min(1),
    logos: z.array(
      z.object({
        id: z.string().trim().min(1),
        src: z.string().trim().min(1),
        alt: z.string().trim().min(1),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
    ),
  }),
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
        // Foto que aparece detrás del texto al pasar el mouse por la tarjeta del paso
        image: MediaAssetSchema,
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
    gallery: z.array(MediaAssetSchema.extend({ caption: z.string().trim().min(1) })).length(4),
  }),
  contactCta: z.object({
    title: z.string().trim().min(1),
    body: z.string().trim().min(1),
    primaryLabel: z.string().trim().min(1),
    secondaryLabel: z.string().trim().min(1),
    image: MediaAssetSchema,
  }),
})
