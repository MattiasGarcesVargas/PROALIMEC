import type { CSSProperties } from 'react'
import { Link } from 'react-router'

import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

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

export function ProductInformation({ product }: { product: Product }) {
  const specs = [
    { label: 'Presentación', value: product.presentation },
    { label: 'Peso aprox.', value: product.approxWeight },
    { label: 'Uso sugerido', value: product.suggestedUse },
    { label: 'Conservación', value: product.storageTemperature, cold: true },
  ]

  return (
    <div>
      <p
        style={{
          margin: 0,
          font: '600 11px/1.2 var(--font-body)',
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        {product.lineLabel}
      </p>

      <h1
        style={{
          margin: '12px 0 0',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          lineHeight: 1.04,
          letterSpacing: '-.045em',
          color: 'var(--navy)',
          textWrap: 'pretty',
        }}
      >
        {product.name}
      </h1>

      <p
        style={{
          margin: '18px 0 0',
          maxWidth: '34rem',
          fontSize: '1rem',
          lineHeight: 1.75,
          color: 'var(--muted)',
          textWrap: 'pretty',
        }}
      >
        {product.description}
      </p>

      <dl style={{ margin: '28px 0 0', display: 'grid', gap: 0 }}>
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
                spec.cold ? { ...definition, color: 'var(--ice)' } : definition
              }
            >
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <Link
        to="/contacto"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: 52,
          marginTop: 28,
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
    </div>
  )
}
