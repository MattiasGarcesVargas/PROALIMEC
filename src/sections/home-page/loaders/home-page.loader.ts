import type { HomePageService } from '~/sections/home-page/services/home-page.service'
import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export async function homePageLoader(
  service: HomePageService,
  catalog: ProductCatalogService,
) {
  const [content, products] = await Promise.all([
    service.getContent(),
    catalog.getProducts(),
  ])

  const featured = content.featuredProducts.flatMap((id) => {
    const product = products.find((candidate) => candidate.id === id)
    return product ? [product] : []
  })

  return { content, featured }
}
