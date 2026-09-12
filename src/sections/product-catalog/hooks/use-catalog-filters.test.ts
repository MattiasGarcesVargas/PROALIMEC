import { describe, expect, it } from 'vitest'

import {
  filterProducts,
  normalizeCatalogText,
} from '~/sections/product-catalog/hooks/use-catalog-filters'
import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

const products: Product[] = [
  {
    id: 'item-one',
    slug: 'item-one',
    name: 'Ítem técnico',
    categorySlug: 'category-one',
    description: 'Descripción para búsqueda',
    presentations: [],
    media: [],
  },
  {
    id: 'item-two',
    slug: 'item-two',
    name: 'Second item',
    categorySlug: 'category-two',
    description: 'Other content',
    presentations: [],
    media: [],
  },
]

describe('catalog filters', () => {
  it('normalizes accents, whitespace and uppercase characters', () => {
    expect(normalizeCatalogText('  DESCRIPCIÓN  ')).toBe('descripcion')
  })

  it('filters search text without accents or case sensitivity', () => {
    expect(
      filterProducts(products, { search: 'ITEM TECNICO', category: null }),
    ).toEqual([products[0]])
  })

  it('combines search and category filters', () => {
    expect(
      filterProducts(products, {
        search: 'other',
        category: 'category-two',
      }),
    ).toEqual([products[1]])
  })
})
