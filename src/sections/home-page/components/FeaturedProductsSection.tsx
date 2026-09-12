import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import { ProductCard } from '~/sections/product-catalog/components'
import type { Product } from '~/sections/product-catalog/types/product-catalog.types'
import { Container } from '~/shared/components'

export function FeaturedProductsSection({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <section className="section-space bg-white">
      <Container>
        <header
          className="flex flex-wrap items-end justify-between gap-6"
          data-reveal
        >
          <div className="flex max-w-xl flex-col gap-5">
            <p className="eyebrow">Portafolio</p>
            <h2 className="section-title balanced-text text-navy">
              Algunos de los cortes que movemos
            </h2>
          </div>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 pb-2 font-semibold text-navy underline-offset-4 hover:underline"
          >
            Ver catálogo completo
            <ArrowRight aria-hidden="true" size={18} className="text-orange" />
          </Link>
        </header>

        <div
          className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          data-stagger
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
