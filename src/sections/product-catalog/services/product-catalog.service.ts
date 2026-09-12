import type {
  Category,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'

export interface ProductCatalogService {
  getCategories(): Promise<Category[]>
  getProducts(): Promise<Product[]>
  getProductBySlug(slug: string): Promise<Product | null>
}
