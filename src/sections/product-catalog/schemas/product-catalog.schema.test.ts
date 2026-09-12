import { describe, expect, it } from 'vitest'

import categoriesMock from '~/sections/product-catalog/mocks/categories.mock.json'
import productsMock from '~/sections/product-catalog/mocks/products.mock.json'
import {
  CategoriesDatasetSchema,
  CategorySchema,
} from '~/sections/product-catalog/schemas/category.schema'
import {
  ProductSchema,
  ProductsDatasetSchema,
} from '~/sections/product-catalog/schemas/product.schema'

describe('product catalog schemas', () => {
  it('accepts the empty structure-only datasets', () => {
    expect(CategoriesDatasetSchema.parse(categoriesMock)).toEqual(
      categoriesMock,
    )
    expect(ProductsDatasetSchema.parse(productsMock)).toEqual(productsMock)
  })

  it('rejects category and product slugs that are not URL-safe', () => {
    expect(
      CategorySchema.safeParse({
        id: 'category-id',
        slug: 'Categoría A',
        name: 'A',
      }).success,
    ).toBe(false)
    expect(
      ProductSchema.safeParse({
        id: 'product-id',
        slug: 'Product A',
        name: 'A',
        categorySlug: 'category-a',
        description: 'Description',
      }).success,
    ).toBe(false)
  })
})
