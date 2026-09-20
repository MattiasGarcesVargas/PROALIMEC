import type { CSSProperties } from 'react'
import { Link } from 'react-router'

const navLink: CSSProperties = {
  font: '600 12px/1 var(--font-body)',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--white)',
  textDecoration: 'none',
  transition: 'color .3s',
}

const navigationItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Contáctanos', to: '/contacto' },
] as const

export function SiteFooter() {
  return (
    <footer
      style={{
        background: 'var(--black)',
        color: 'var(--white)',
        padding: 'clamp(2.5rem,5vw,4rem) 0 clamp(1.75rem,3vw,2.5rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 28,
            paddingBottom: 28,
            borderBottom: '1px solid rgba(255,255,255,.16)',
          }}
        >
          <Link
            to="/"
            aria-label="PROALIMEC, ir al inicio"
            style={{ display: 'block', width: 160 }}
          >
            <img
              src="/assets/logo-slogan.png"
              alt="PROALIMEC"
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </Link>

          <nav
            aria-label="Navegación del pie de página"
            style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}
          >
            {navigationItems.map((item) => (
              <Link key={item.to} to={item.to} style={navLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 12,
            paddingTop: 22,
            fontSize: '.8125rem',
            color: 'var(--mutedcold)',
          }}
        >
          <p style={{ margin: 0 }}>Frescura protegida, calidad garantizada.</p>
          <p style={{ margin: 0 }}>PROALIMEC · Venta mayorista</p>
        </div>
      </div>
    </footer>
  )
}
