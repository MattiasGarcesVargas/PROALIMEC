import { describe, expect, it } from 'vitest'

import catalogContentMock from '~/sections/product-catalog/mocks/catalog-content.mock.json'
import productsMock from '~/sections/product-catalog/mocks/products.mock.json'
import { CatalogContentSchema } from '~/sections/product-catalog/schemas/catalog-content.schema'
import {
  ProductSchema,
  ProductsDatasetSchema,
} from '~/sections/product-catalog/schemas/product.schema'

describe('product catalog schemas', () => {
  it('accepts the published catalog datasets', () => {
    expect(ProductsDatasetSchema.parse(productsMock)).toEqual(productsMock)
    expect(CatalogContentSchema.parse(catalogContentMock)).toEqual(
      catalogContentMock,
    )
  })

  it('rejects product slugs that are not URL-safe', () => {
    const product = ProductsDatasetSchema.parse(productsMock).products[0]

    expect(
      ProductSchema.safeParse({ ...product, slug: 'Chuleta Entera' }).success,
    ).toBe(false)
  })

  it('rejects a product line outside cerdo and res', () => {
    const product = ProductsDatasetSchema.parse(productsMock).products[0]

    expect(ProductSchema.safeParse({ ...product, line: 'pollo' }).success).toBe(
      false,
    )
  })
})
