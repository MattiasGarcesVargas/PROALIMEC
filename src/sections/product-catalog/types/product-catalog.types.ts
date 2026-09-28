import type { z } from 'zod'

import type { CatalogContentSchema } from '@/sections/product-catalog/schemas/catalog-content.schema'
import type {
  LineCountsSchema,
  MeatLineFilterSchema,
  MeatLineSchema,
  ProductGalleryItemSchema,
  ProductMediaSchema,
  ProductViewSchema,
  ProductSchema,
  ProductsDatasetSchema,
} from '@/sections/product-catalog/schemas/product.schema'

export type Product = z.infer<typeof ProductSchema>
export type ProductMedia = z.infer<typeof ProductMediaSchema>
export type ProductGalleryItem = z.infer<typeof ProductGalleryItemSchema>
export type ProductView = z.infer<typeof ProductViewSchema>
export type ProductsDataset = z.infer<typeof ProductsDatasetSchema>
export type MeatLine = z.infer<typeof MeatLineSchema>
export type MeatLineFilter = z.infer<typeof MeatLineFilterSchema>
export type LineCounts = z.infer<typeof LineCountsSchema>
export type CatalogContent = z.infer<typeof CatalogContentSchema>
