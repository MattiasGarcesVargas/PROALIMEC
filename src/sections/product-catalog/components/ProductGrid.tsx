import type { CSSProperties } from 'react'

import { ProductCard } from '~/sections/product-catalog/components/ProductCard'
import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

interface ProductGridProps {
  products: Product[]
  isLoading?: boolean
  onOpen: (product: Product) => void
}

const gridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(min(17rem, 100%), 1fr))',
  gap: 'clamp(1rem, 2vw, 1.75rem)',
  marginTop: 'clamp(2rem, 4vw, 3rem)',
}

export function ProductGrid({
  products,
  isLoading = false,
  onOpen,
}: ProductGridProps) {
  if (isLoading) {
    return (
      <div style={gridStyle} aria-busy="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            style={{ aspectRatio: '4 / 5', background: 'rgba(11,31,83,.06)' }}
          />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <p
        style={{
          margin: 'clamp(2.5rem,5vw,4rem) 0',
          textAlign: 'center',
          color: 'var(--muted)',
        }}
      >
        No hay cortes en esta línea por ahora.
      </p>
    )
  }

  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onOpen={onOpen} />
      ))}
    </div>
  )
}
