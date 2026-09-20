import { Link } from 'react-router'

interface CustomCutCtaProps {
  body: string
  ctaLabel: string
}

export function CustomCutCta({ body, ctaLabel }: CustomCutCtaProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 'clamp(3rem, 6vw, 5rem)',
        paddingTop: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderTop: '1px solid rgba(11,31,83,.12)',
      }}
    >
      <p
        style={{
          margin: 0,
          maxWidth: '34rem',
          fontSize: '.9375rem',
          lineHeight: 1.7,
          color: 'var(--muted)',
          textWrap: 'pretty',
        }}
      >
        {body}
      </p>
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
        {ctaLabel}
      </Link>
    </div>
  )
}
