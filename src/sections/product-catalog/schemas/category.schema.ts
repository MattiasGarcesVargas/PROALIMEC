import { z } from 'zod'

const SlugSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)

export const CategorySchema = z.object({
  id: z.string().trim().min(1),
  slug: SlugSchema,
  name: z.string().trim().min(1),
  description: z.string().trim().min(1).optional(),
})

export const CategoriesDatasetSchema = z.object({
  status: z.literal('structure-only'),
  categories: z.array(CategorySchema),
})
