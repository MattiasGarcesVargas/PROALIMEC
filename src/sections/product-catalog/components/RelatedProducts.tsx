import { Link } from 'react-router'

import type { Product } from '@/sections/product-catalog/types/product-catalog.types'

function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <section aria-label="Cortes relacionados" className="bg-cold py-[clamp(3rem,6vw,6rem)]">
      <div className="shell">
        <h2 className="font-display text-subsection font-extrabold text-navy">De la misma línea</h2>
        <p className="mt-2 text-[15px] leading-[1.7] text-muted">
          Algunos cortes que podrían interesarte.
        </p>

        <div className="mt-[clamp(1.75rem,3.5vw,2.5rem)] grid grid-fill-68 gap-[clamp(1rem,2vw,1.75rem)]">
          {products.map((product) => (
            <article key={product.id}>
              <Link
                to={`/productos/${product.slug}`}
                className="relative block aspect-4/5 overflow-hidden bg-black"
              >
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  loading="lazy"
                  className="size-full object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-b/srgb from-shade/0 from-40% to-shade/86"
                />
                <span className="absolute inset-x-0 bottom-0 p-[clamp(1rem,2vw,1.35rem)] font-display text-[1.125rem] font-bold tracking-[-0.025em] text-white">
                  {product.name}
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProducts
