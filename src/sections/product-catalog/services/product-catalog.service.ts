import type {
  CatalogContent,
  LineCounts,
  MeatLineFilter,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'

export interface ProductCatalogService {
  getContent(): Promise<CatalogContent>
  getProducts(line?: MeatLineFilter): Promise<Product[]>
  getLineCounts(): Promise<LineCounts>
  getProductBySlug(slug: string): Promise<Product | null>
}
