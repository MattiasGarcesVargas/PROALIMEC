import type { LoaderFunctionArgs } from 'react-router'

import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export async function productDetailLoader(
  args: Pick<LoaderFunctionArgs, 'params'>,
  service: ProductCatalogService,
) {
  const slug = args.params.slug
  const product = slug ? await service.getProductBySlug(slug) : null

  const relatedProducts = product
    ? (await service.getProducts(product.line))
        .filter((candidate) => candidate.id !== product.id)
        .slice(0, 3)
    : []

  return { product, relatedProducts }
}
