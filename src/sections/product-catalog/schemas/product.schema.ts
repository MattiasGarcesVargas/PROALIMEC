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

// Las cuatro fotos de la ficha, en este orden: la principal, desde arriba, de lado y en su empaque.
// TODO: hoy usan fotos de referencia; reemplazar por las fotos reales de cada corte
export const ProductViewSchema = z.enum(['principal', 'arriba', 'lateral', 'empaque'])

export const ProductGalleryItemSchema = z.object({
  view: ProductViewSchema,
  src: z.string().trim().min(1),
  alt: z.string().trim().min(1),
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
  gallery: z.array(ProductGalleryItemSchema).length(4),
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
