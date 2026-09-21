import { useState } from 'react'

import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

interface ProductCardProps {
  product: Product
  onOpen: (product: Product) => void
}

export function ProductCard({ product, onOpen }: ProductCardProps) {
  const [hover, setHover] = useState(false)

  return (
    <article>
      <button
        type="button"
        onClick={() => onOpen(product)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label={`Ver ficha de ${product.name}`}
        style={{
          display: 'block',
          width: '100%',
          padding: 0,
          border: 0,
          background: 'transparent',
          textAlign: 'left',
          cursor: 'pointer',
        }}
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
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform .8s var(--ease-out-expo)',
            }}
          />
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(4,10,24,0) 34%, rgba(4,10,24,.58) 66%, rgba(4,10,24,.9) 100%)',
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
            }}
          >
            <span
              style={{
                display: 'block',
                font: '600 11px/1 var(--font-body)',
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {product.lineLabel}
            </span>
            <span
              style={{
                display: 'block',
                marginTop: 10,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.25rem',
                lineHeight: 1.15,
                letterSpacing: '-.025em',
                color: 'var(--white)',
              }}
            >
              {product.name}
            </span>
            <span
              style={{
                display: 'block',
                marginTop: 6,
                fontSize: '.8125rem',
                lineHeight: 1.55,
                color: 'rgba(255,255,255,.84)',
              }}
            >
              {product.shortDescription}
            </span>
          </span>
        </span>
      </button>
    </article>
  )
}
