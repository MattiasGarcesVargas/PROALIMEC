import { useRef } from 'react'

import {
  CatalogHero,
  CatalogToolbar,
  EmptyCatalog,
  ProductGrid,
} from '~/sections/product-catalog/components'
import { useCatalogFilters } from '~/sections/product-catalog/hooks/use-catalog-filters'
import { useProductCatalogData } from '~/sections/product-catalog/hooks/use-product-catalog-data'
import { Container } from '~/shared/components'
import { useSectionMotion } from '~/shared/motion'

export function ProductCatalogPage() {
  const { categories, products } = useProductCatalogData()
  const filters = useCatalogFilters(products)
  const pageRef = useRef<HTMLElement>(null)
  useSectionMotion(pageRef)

  return (
    <main id="main-content" ref={pageRef}>
      <CatalogHero categories={categories} />
      <section
        className="section-space bg-white"
        aria-label="Productos del catálogo"
      >
        <Container>
          <CatalogToolbar
            categories={categories}
            search={filters.search}
            selectedCategory={filters.category}
            resultCount={filters.filteredProducts.length}
            hasActiveFilters={filters.hasActiveFilters}
            onSearchChange={filters.setSearch}
            onCategoryChange={filters.setCategory}
            onClear={filters.clearFilters}
          />

          <div className="mt-10">
            {filters.filteredProducts.length > 0 ? (
              <ProductGrid
                products={filters.filteredProducts}
                categories={categories}
              />
            ) : (
              <EmptyCatalog
                hasActiveFilters={filters.hasActiveFilters}
                onClear={filters.clearFilters}
              />
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}
