import { z } from 'zod'

const SlugSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)

export const MeatLineSchema = z.enum(['cerdo', 'res'])
export const MeatLineFilterSchema = z.enum(['todo', 'cerdo', 'res'])

export const ProductMediaSchema = z.object({
  src: z.string().trim().min(1),
  alt: z.string().trim().min(1),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
})

export const ProductSchema = z.object({
  id: z.string().trim().min(1),
  slug: SlugSchema,
  name: z.string().trim().min(1),
  line: MeatLineSchema,
  lineLabel: z.string().trim().min(1),
  shortDescription: z.string().trim().min(1),
  description: z.string().trim().min(1),
  presentation: z.string().trim().min(1),
  approxWeight: z.string().trim().min(1),
  suggestedUse: z.string().trim().min(1),
  storageTemperature: z.string().trim().min(1).default('−18 °C'),
  image: ProductMediaSchema,
})

export const ProductsDatasetSchema = z.object({
  status: z.literal('structure-only'),
  products: z.array(ProductSchema),
})

export const LineCountsSchema = z.object({
  todo: z.number().int().nonnegative(),
  cerdo: z.number().int().nonnegative(),
  res: z.number().int().nonnegative(),
})
