import type { HomePageService } from '~/sections/home-page/services/home-page.service'
import type { ProductCatalogService } from '~/sections/product-catalog'

export async function homePageLoader(
  service: HomePageService,
  catalog: ProductCatalogService,
) {
  const [content, products] = await Promise.all([
    service.getContent(),
    catalog.getProducts(),
  ])

  return { content, products }
}
