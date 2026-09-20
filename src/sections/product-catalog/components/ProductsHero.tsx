import type { CSSProperties } from 'react'

interface ProductsHeroProps {
  eyebrow: string
  title: string
  intro: string
}

const rule: CSSProperties = { width: 38, height: 1, background: 'currentColor' }

export function ProductsHero({ eyebrow, title, intro }: ProductsHeroProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      <p
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 14,
          margin: '0 0 clamp(1.25rem,2.5vw,2rem)',
          font: '600 11px/1.2 var(--font-body)',
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        <span style={rule} />
        {eyebrow}
        <span style={rule} />
      </p>

      <h1
        style={{
          margin: 0,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)',
          lineHeight: 1.02,
          letterSpacing: '-.05em',
          color: 'var(--navy)',
        }}
      >
        {title}
      </h1>

      <p
        style={{
          margin: 'clamp(1.25rem,2.5vw,1.75rem) auto 0',
          maxWidth: '38rem',
          fontSize: '1rem',
          lineHeight: 1.7,
          color: 'var(--muted)',
          textWrap: 'pretty',
        }}
      >
        {intro}
      </p>
    </div>
  )
}
