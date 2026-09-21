import type { CSSProperties } from 'react'
import { Link } from 'react-router'

import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

interface ProductSheetModalProps {
  product: Product | null
  onClose: () => void
}

const row: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 16,
  padding: '12px 0',
  borderTop: '1px solid rgba(11,31,83,.14)',
}
const term: CSSProperties = { fontSize: '.8125rem', color: 'var(--muted)' }
const definition: CSSProperties = {
  margin: 0,
  fontSize: '.8125rem',
  fontWeight: 600,
  color: 'var(--navy)',
  textAlign: 'right',
}

export function ProductSheetModal({
  product,
  onClose,
}: ProductSheetModalProps) {
  if (!product) return null

  const specs = [
    { label: 'Presentación', value: product.presentation },
    { label: 'Peso aprox.', value: product.approxWeight },
    { label: 'Uso sugerido', value: product.suggestedUse },
    { label: 'Conservación', value: product.storageTemperature, cold: true },
  ]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ficha de ${product.name}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2.5rem)',
        background: 'rgba(4,10,24,.72)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(18rem, 100%), 1fr))',
          width: 'min(64rem, 100%)',
          maxHeight: '88vh',
          overflow: 'auto',
          background: 'var(--white)',
        }}
      >
        <div
          style={{
            position: 'relative',
            background: 'var(--black)',
            minHeight: '18rem',
          }}
        >
          <img
            src={product.image.src}
            alt={product.image.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        <div style={{ padding: 'clamp(1.5rem, 3vw, 2.75rem)' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <p
              style={{
                margin: 0,
                font: '600 12px/1.2 var(--font-body)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              {product.lineLabel}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ficha"
              autoFocus
              style={{
                flex: 'none',
                width: 44,
                height: 44,
                margin: '-10px -10px 0 0',
                background: 'transparent',
                border: 0,
                color: 'var(--navy)',
                fontSize: '1.25rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          <h2
            style={{
              margin: '12px 0 0',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              lineHeight: 1.08,
              letterSpacing: '-.035em',
              color: 'var(--navy)',
            }}
          >
            {product.name}
          </h2>

          <p
            style={{
              margin: '16px 0 0',
              fontSize: '.9375rem',
              lineHeight: 1.7,
              color: 'var(--muted)',
              textWrap: 'pretty',
            }}
          >
            {product.description}
          </p>

          <dl style={{ margin: '26px 0 0', display: 'grid', gap: 0 }}>
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                style={
                  index === specs.length - 1
                    ? { ...row, borderBottom: '1px solid rgba(11,31,83,.14)' }
                    : row
                }
              >
                <dt style={term}>{spec.label}</dt>
                <dd
                  style={
                    spec.cold
                      ? { ...definition, color: 'var(--ice)' }
                      : definition
                  }
                >
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 26,
            }}
          >
            <Link
              to="/contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 52,
                padding: '0 26px',
                background: 'var(--navy)',
                border: '1px solid var(--navy)',
                color: 'var(--white)',
                font: '600 12px/1 var(--font-body)',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background .3s',
              }}
            >
              Consultar este corte
            </Link>
            <Link
              to={`/productos/${product.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 52,
                padding: '0 26px',
                border: '1px solid rgba(11,31,83,.25)',
                color: 'var(--navy)',
                font: '600 12px/1 var(--font-body)',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color .3s, background .3s',
              }}
            >
              Ver ficha completa
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
