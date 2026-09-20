import { describe, expect, it } from 'vitest'

import { localProductCatalogService } from '~/sections/product-catalog/services/product-catalog.local.service'

describe('localProductCatalogService', () => {
  it('returns every product when no line is requested', async () => {
    const products = await localProductCatalogService.getProducts()

    expect(products).toHaveLength(12)
  })

  it('filters products by meat line', async () => {
    const cerdo = await localProductCatalogService.getProducts('cerdo')
    const res = await localProductCatalogService.getProducts('res')

    expect(cerdo).toHaveLength(8)
    expect(res).toHaveLength(4)
    expect(cerdo.every((product) => product.line === 'cerdo')).toBe(true)
    expect(res.every((product) => product.line === 'res')).toBe(true)
  })

  it('counts products per line for the filter bar', async () => {
    await expect(localProductCatalogService.getLineCounts()).resolves.toEqual({
      todo: 12,
      cerdo: 8,
      res: 4,
    })
  })

  it('resolves a product by slug and returns null when missing', async () => {
    await expect(
      localProductCatalogService.getProductBySlug('chuleta-entera'),
    ).resolves.toMatchObject({ name: 'Chuleta entera', line: 'cerdo' })

    await expect(
      localProductCatalogService.getProductBySlug('not-published'),
    ).resolves.toBeNull()
  })
})
