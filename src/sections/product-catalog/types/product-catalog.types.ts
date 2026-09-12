import type { z } from 'zod'

import type {
  CategoriesDatasetSchema,
  CategorySchema,
} from '~/sections/product-catalog/schemas/category.schema'
import type {
  ProductMediaSchema,
  ProductSchema,
  ProductsDatasetSchema,
} from '~/sections/product-catalog/schemas/product.schema'

export type Category = z.infer<typeof CategorySchema>
export type CategoriesDataset = z.infer<typeof CategoriesDatasetSchema>
export type Product = z.infer<typeof ProductSchema>
export type ProductMedia = z.infer<typeof ProductMediaSchema>
export type ProductsDataset = z.infer<typeof ProductsDatasetSchema>

export type CatalogFilterValues = {
  search: string
  category: string | null
}
