import type { LoaderFunctionArgs } from 'react-router'

import { parseLineFilter } from '~/sections/product-catalog/hooks/use-product-filter'
import type { ProductCatalogService } from '~/sections/product-catalog/services/product-catalog.service'

export async function productCatalogLoader(
  args: Pick<LoaderFunctionArgs, 'request'>,
  service: ProductCatalogService,
) {
  const line = parseLineFilter(
    new URL(args.request.url).searchParams.get('linea'),
  )

  const [content, products, counts] = await Promise.all([
    service.getContent(),
    service.getProducts(line),
    service.getLineCounts(),
  ])

  return { content, products, counts, line }
}
