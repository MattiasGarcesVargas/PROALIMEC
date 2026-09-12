import { Check } from 'lucide-react'

import type { Category } from '~/sections/product-catalog/types/product-catalog.types'

type CategoryFiltersProps = {
  categories: Category[]
  selectedCategory: string | null
  onChange: (category: string | null) => void
}

export function CategoryFilters({
  categories,
  selectedCategory,
  onChange,
}: CategoryFiltersProps) {
  if (categories.length === 0) return null

  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm font-semibold text-navy">
        Categorías
      </legend>
      <div
        className="flex snap-x gap-2 overflow-x-auto pb-2"
        aria-label="Filtrar por categoría"
      >
        <button
          type="button"
          onClick={() => onChange(null)}
          aria-pressed={selectedCategory === null}
          className="inline-flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full border border-cold-border bg-white px-5 font-semibold text-navy transition hover:border-navy aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
        >
          {selectedCategory === null ? (
            <Check aria-hidden="true" size={16} />
          ) : null}
          Todas
        </button>
        {categories.map((category) => {
          const selected = selectedCategory === category.slug

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.slug)}
              aria-pressed={selected}
              className="inline-flex min-h-11 shrink-0 snap-start items-center gap-2 rounded-full border border-cold-border bg-white px-5 font-semibold text-navy transition hover:border-navy aria-pressed:border-navy aria-pressed:bg-navy aria-pressed:text-white"
            >
              {selected ? <Check aria-hidden="true" size={16} /> : null}
              {category.name}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
