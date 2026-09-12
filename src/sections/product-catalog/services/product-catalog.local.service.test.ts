import { describe, expect, it } from 'vitest'

import { localProductCatalogService } from '~/sections/product-catalog/services/product-catalog.local.service'

describe('localProductCatalogService', () => {
  it('returns validated empty catalog datasets', async () => {
    await expect(localProductCatalogService.getCategories()).resolves.toEqual(
      [],
    )
    await expect(localProductCatalogService.getProducts()).resolves.toEqual([])
  })

  it('returns null when a product slug is not present', async () => {
    await expect(
      localProductCatalogService.getProductBySlug('not-published'),
    ).resolves.toBeNull()
  })
})
