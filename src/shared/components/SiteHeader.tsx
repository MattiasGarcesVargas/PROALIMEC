import type { CSSProperties } from 'react'
import { Link, NavLink } from 'react-router'

const navigationItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Contáctanos', to: '/contacto' },
] as const

const linkBase: CSSProperties = {
  font: '600 12px/1 var(--font-body)',
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  padding: '10px 0',
  borderBottom: '1px solid transparent',
  textDecoration: 'none',
  transition: 'color .3s, border-color .3s',
}

function navStyle(isActive: boolean): CSSProperties {
  return {
    ...linkBase,
    color: isActive ? 'var(--navy)' : 'var(--muted)',
    borderBottomColor: isActive ? 'var(--accent)' : 'transparent',
  }
}

export function SiteHeader() {
  return (
    <header
      style={{
        position: 'relative',
        zIndex: 50,
        background: 'var(--white)',
        borderBottom: '1px solid rgba(11,31,83,.1)',
      }}
    >
      <div
        style={{
          width: 'var(--shell)',
          marginInline: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          minHeight: 64,
          flexWrap: 'wrap',
          paddingBlock: 10,
        }}
      >
        <Link
          to="/"
          aria-label="PROALIMEC, ir al inicio"
          style={{ display: 'block', flex: 'none', width: 168 }}
        >
          <img
            src="/assets/logo-horizontal.png"
            alt="PROALIMEC"
            width={2042}
            height={720}
            fetchPriority="high"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'clamp(16px, 2.4vw, 34px)',
          }}
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => navStyle(isActive)}
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: 44,
              padding: '0 20px',
              background: 'var(--navy)',
              color: 'var(--white)',
              font: '600 12px/1 var(--font-body)',
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background .3s',
            }}
          >
            Solicitar cotización
          </Link>
        </nav>
      </div>
    </header>
  )
}
