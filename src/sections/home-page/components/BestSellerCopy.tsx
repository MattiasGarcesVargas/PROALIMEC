import type { CSSProperties } from 'react'
import { Link } from 'react-router'

import type { BestSeller } from '~/sections/home-page/types/home-page.types'

interface BestSellerCopyProps {
  item: BestSeller
  side: 'left' | 'right'
  style?: CSSProperties
}

export function BestSellerCopy({ item, side, style }: BestSellerCopyProps) {
  return (
    <div
      style={{
        position: 'absolute',
        [side]: 'clamp(1.25rem, 5vw, 5rem)',
        bottom: 'clamp(1.5rem, 7vh, 4.5rem)',
        width: 'min(34rem, 44vw)',
        ...style,
      }}
    >
      <p
        style={{
          margin: '0 0 10px',
          font: '600 11px/1.2 var(--font-body)',
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        {item.lineLabel} · {item.position}
      </p>

      <h3
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.4rem, 2.4vw, 2rem)',
          lineHeight: 1.1,
          letterSpacing: '-.03em',
          color: 'var(--white)',
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          margin: '14px 0 0',
          fontSize: '.9375rem',
          lineHeight: 1.7,
          color: 'var(--mutedcold)',
        }}
      >
        {item.description}
      </p>

      <dl style={{ margin: '22px 0 0', display: 'grid', gap: 0 }}>
        {item.specs.map((spec, index) => (
          <div
            key={spec.label}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 16,
              padding: '11px 0',
              borderTop: '1px solid rgba(255,255,255,.16)',
              borderBottom:
                index === item.specs.length - 1
                  ? '1px solid rgba(255,255,255,.16)'
                  : undefined,
            }}
          >
            <dt style={{ fontSize: '.8125rem', color: 'var(--mutedcold)' }}>
              {spec.label}
            </dt>
            <dd
              style={{
                margin: 0,
                font: '500 .8125rem/1.4 var(--font-body)',
                color: spec.highlight ? 'var(--ice)' : 'var(--white)',
              }}
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
          minHeight: 48,
          marginTop: 22,
          padding: '0 22px',
          background: 'var(--white)',
          border: '1px solid var(--white)',
          color: 'var(--navy)',
          font: '600 12px/1 var(--font-body)',
          letterSpacing: '.12em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transition: 'background .3s, color .3s',
        }}
      >
        {item.ctaLabel}
      </Link>
    </div>
  )
}
