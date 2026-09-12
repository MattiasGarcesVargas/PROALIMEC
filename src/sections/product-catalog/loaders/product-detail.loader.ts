import type { LoaderFunctionArgs } from 'react-router'

import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export async function productDetailLoader(
  args: Pick<LoaderFunctionArgs, 'params'>,
  service: ProductCatalogService,
) {
  const slug = args.params.slug
  const [categories, products, product] = await Promise.all([
    service.getCategories(),
    service.getProducts(),
    slug ? service.getProductBySlug(slug) : Promise.resolve(null),
  ])

  const relatedProducts = product
    ? products
        .filter(
          (candidate) =>
            candidate.categorySlug === product.categorySlug &&
            candidate.id !== product.id,
        )
        .slice(0, 3)
    : []

  return { categories, product, relatedProducts }
}
