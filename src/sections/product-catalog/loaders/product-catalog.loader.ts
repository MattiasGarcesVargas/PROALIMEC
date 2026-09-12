import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export async function productCatalogLoader(service: ProductCatalogService) {
  const [categories, products] = await Promise.all([
    service.getCategories(),
    service.getProducts(),
  ])

  return { categories, products }
}
