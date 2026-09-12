import { z } from 'zod'

const SlugSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)

export const ProductMediaSchema = z.object({
  id: z.string().trim().min(1),
  src: z.string().trim().min(1),
  alt: z.string().trim().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

export const ProductSchema = z.object({
  id: z.string().trim().min(1),
  slug: SlugSchema,
  name: z.string().trim().min(1),
  categorySlug: SlugSchema,
  description: z.string().trim().min(1),
  presentations: z.array(z.string().trim().min(1)).default([]),
  media: z.array(ProductMediaSchema).default([]),
})

export const ProductsDatasetSchema = z.object({
  status: z.literal('structure-only'),
  products: z.array(ProductSchema),
})
