import type { Category } from '~/sections/product-catalog/types/product-catalog.types'
import { Button } from '~/shared/components'

import { CategoryFilters } from './CategoryFilters'
import { SearchField } from './SearchField'

type CatalogToolbarProps = {
  categories: Category[]
  search: string
  selectedCategory: string | null
  resultCount: number
  hasActiveFilters: boolean
  onSearchChange: (value: string) => void
  onCategoryChange: (category: string | null) => void
  onClear: () => void
}

export function CatalogToolbar({
  categories,
  search,
  selectedCategory,
  resultCount,
  hasActiveFilters,
  onSearchChange,
  onCategoryChange,
  onClear,
}: CatalogToolbarProps) {
  return (
    <div className="rounded-3xl border border-cold-border bg-cold p-5 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[minmax(17rem,0.8fr)_minmax(0,1.5fr)] lg:items-end">
        <SearchField value={search} onChange={onSearchChange} />
        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={onCategoryChange}
        />
      </div>
      <div className="mt-5 flex min-h-11 flex-wrap items-center justify-between gap-3 border-t border-cold-border pt-4">
        <p
          className="font-semibold text-navy"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultCount} {resultCount === 1 ? 'producto' : 'productos'}
        </p>
        {hasActiveFilters ? (
          <Button variant="ghost" size="compact" onClick={onClear}>
            Limpiar filtros
          </Button>
        ) : null}
      </div>
    </div>
  )
}
