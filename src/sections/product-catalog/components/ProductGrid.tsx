import type { Product } from '@/sections/product-catalog/types/product-catalog.types'

import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onOpen: (product: Product) => void
}

function ProductGrid({ products, onOpen }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="my-[clamp(2.5rem,5vw,4rem)] text-center text-muted">
        No hay cortes en esta línea por ahora.
      </p>
    )
  }

  return (
    <div className="mt-[clamp(2rem,4vw,3rem)] grid grid-fill-68 gap-[clamp(1rem,2vw,1.75rem)]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onOpen={onOpen} />
      ))}
    </div>
  )
}

export default ProductGrid
