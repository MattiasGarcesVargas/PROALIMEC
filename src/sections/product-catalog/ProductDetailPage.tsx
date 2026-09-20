import { Link } from 'react-router'

import {
  ProductInformation,
  RelatedProducts,
} from '~/sections/product-catalog/components'
import { useProductDetailData } from '~/sections/product-catalog/hooks/use-product-detail-data'

export function ProductDetailPage() {
  const { product, relatedProducts } = useProductDetailData()

  if (!product) {
    return (
      <main
        id="main-content"
        style={{
          background: 'var(--white)',
          padding: 'clamp(3rem,7vw,7rem) 0',
        }}
      >
        <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              letterSpacing: '-.045em',
              color: 'var(--navy)',
            }}
          >
            Producto no disponible
          </h1>
          <p
            style={{
              margin: '18px 0 0',
              maxWidth: '32rem',
              color: 'var(--muted)',
              lineHeight: 1.75,
            }}
          >
            No encontramos información publicada para este corte.
          </p>
          <Link
            to="/productos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 52,
              marginTop: 28,
              padding: '0 26px',
              background: 'var(--navy)',
              color: 'var(--white)',
              font: '600 12px/1 var(--font-body)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Volver al catálogo
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" style={{ background: 'var(--white)' }}>
      <div
        style={{
          width: 'var(--shell)',
          marginInline: 'auto',
          paddingBlock: 'clamp(1.5rem, 3vw, 2.5rem) clamp(3rem, 6vw, 6rem)',
        }}
      >
        <nav
          aria-label="Migas de pan"
          style={{
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            font: '600 11px/1 var(--font-body)',
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <ol
            style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 10,
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link
                to="/productos"
                style={{ color: 'var(--navy)', textDecoration: 'none' }}
              >
                Productos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(20rem, 100%), 1fr))',
            alignItems: 'start',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              background: 'var(--black)',
            }}
          >
            <img
              src={product.image.src}
              alt={product.image.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <ProductInformation product={product} />
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
    </main>
  )
}
