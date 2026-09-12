import { useLoaderData } from 'react-router'

import type { productCatalogLoader } from '~/sections/product-catalog/loaders/product-catalog.loader'

export function useProductCatalogData() {
  return useLoaderData<typeof productCatalogLoader>()
}
