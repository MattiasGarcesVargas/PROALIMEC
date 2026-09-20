import { Link } from 'react-router'

import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null

  return (
    <section
      aria-label="Cortes relacionados"
      style={{
        background: 'var(--surface-cold)',
        paddingBlock: 'clamp(3rem, 6vw, 6rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            lineHeight: 1.08,
            letterSpacing: '-.04em',
            color: 'var(--navy)',
          }}
        >
          De la misma línea
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fill, minmax(min(17rem, 100%), 1fr))',
            gap: 'clamp(1rem, 2vw, 1.75rem)',
            marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          }}
        >
          {products.map((product) => (
            <article key={product.id}>
              <Link
                to={`/productos/${product.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                <span
                  style={{
                    position: 'relative',
                    display: 'block',
                    aspectRatio: '4 / 5',
                    overflow: 'hidden',
                    background: 'var(--black)',
                  }}
                >
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(4,10,24,0) 40%, rgba(4,10,24,.86) 100%)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'block',
                      padding: 'clamp(1rem, 2vw, 1.35rem)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      letterSpacing: '-.025em',
                      color: 'var(--white)',
                    }}
                  >
                    {product.name}
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
