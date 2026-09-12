import { startTransition } from 'react'
import { useSearchParams } from 'react-router'

import type {
  CatalogFilterValues,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'

export function normalizeCatalogText(value: string) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLocaleLowerCase('es')
    .trim()
}

export function filterProducts(
  products: Product[],
  { search, category }: CatalogFilterValues,
) {
  const normalizedCategory = category ? normalizeCatalogText(category) : null
  const searchTerms = normalizeCatalogText(search).split(/\s+/).filter(Boolean)

  return products.filter((product) => {
    if (
      normalizedCategory &&
      normalizeCatalogText(product.categorySlug) !== normalizedCategory
    ) {
      return false
    }

    if (searchTerms.length === 0) return true

    const searchableContent = normalizeCatalogText(
      [product.name, product.description, ...product.presentations].join(' '),
    )

    return searchTerms.every((term) => searchableContent.includes(term))
  })
}

export function useCatalogFilters(products: Product[]) {
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('q') ?? ''
  const category = searchParams.get('categoria')

  function updateParam(name: 'q' | 'categoria', value: string | null) {
    startTransition(() => {
      setSearchParams(
        (current) => {
          const next = new URLSearchParams(current)
          const normalizedValue = value?.trim()

          if (normalizedValue) next.set(name, normalizedValue)
          else next.delete(name)

          return next
        },
        { replace: true },
      )
    })
  }

  function clearFilters() {
    startTransition(() => {
      setSearchParams(
        (current) => {
          const next = new URLSearchParams(current)
          next.delete('q')
          next.delete('categoria')
          return next
        },
        { replace: true },
      )
    })
  }

  return {
    search,
    category,
    filteredProducts: filterProducts(products, { search, category }),
    hasActiveFilters: Boolean(search.trim() || category),
    setSearch: (value: string) => updateParam('q', value),
    setCategory: (value: string | null) => updateParam('categoria', value),
    clearFilters,
  }
}
