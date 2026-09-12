import { useLoaderData } from 'react-router'

import type { productDetailLoader } from '~/sections/product-catalog/loaders/product-detail.loader'

export function useProductDetailData() {
  return useLoaderData<typeof productDetailLoader>()
}
