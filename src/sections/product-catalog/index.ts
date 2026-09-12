export { ProductCatalogPage } from './ProductCatalogPage'
export { ProductDetailPage } from './ProductDetailPage'
export {
  filterProducts,
  normalizeCatalogText,
} from './hooks/use-catalog-filters'
export { productCatalogLoader } from './loaders/product-catalog.loader'
export { productDetailLoader } from './loaders/product-detail.loader'
export { localProductCatalogService } from './services/product-catalog.local.service'
export type { ProductCatalogService } from './services/product-catalog.service'
export type {
  CatalogFilterValues,
  CategoriesDataset,
  Category,
  Product,
  ProductMedia,
  ProductsDataset,
} from './types/product-catalog.types'
