import { Link } from 'react-router'

import { ProductCard, type Product } from '~/sections/product-catalog'
import type { CatalogPreviewContent } from '~/sections/home-page/types/home-page.types'

interface CatalogPreviewSectionProps {
  content: CatalogPreviewContent
  products: Product[]
  onOpen: (product: Product) => void
}

/** Carrusel horizontal con scroll-snap: muestra el catálogo y enlaza a /productos. */
export function CatalogPreviewSection({
  content,
  products,
  onOpen,
}: CatalogPreviewSectionProps) {
  return (
    <section
      style={{
        background: 'var(--white)',
        paddingBlock: 'clamp(3.5rem, 8vw, 8rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <h2
            style={{
              margin: 0,
              maxWidth: '28rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.85rem, 3.6vw, 3rem)',
              lineHeight: 1.06,
              letterSpacing: '-.04em',
              color: 'var(--navy)',
            }}
          >
            {content.title}
          </h2>
          <Link
            to="/productos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              paddingBottom: 4,
              borderBottom: '1px solid rgba(11,31,83,.3)',
              font: '600 12px/1 var(--font-body)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--navy)',
              textDecoration: 'none',
            }}
          >
            {content.ctaLabel}{' '}
            <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
              →
            </span>
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: 8,
            marginTop: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            scrollbarWidth: 'none',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                flex: 'none',
                width: 'min(21rem, 78vw)',
                scrollSnapAlign: 'start',
              }}
            >
              <ProductCard product={product} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
