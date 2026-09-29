import { Link, NavLink, useLocation } from 'react-router'

import ButtonLink from '@/shared/components/ui/ButtonLink'
import { NAV_ITEMS, PRIMARY_CTA } from '@/shared/config/navigation'
import { useIsScrolled } from '@/shared/hooks/use-is-scrolled'
import { cn } from '@/shared/utils/cn'

function SiteHeader() {
  const { pathname } = useLocation()
  const isScrolled = useIsScrolled()
  // En el home el header se queda arriba; en productos y contacto acompaña el scroll.
  // Solo desde md: en móvil el menú ocupa dos filas y taparía demasiada pantalla
  const isSticky = pathname !== '/'

  return (
    <header
      className={cn(
        'relative z-50 border-b border-navy/10 bg-white transition-shadow duration-300',
        isSticky && 'md:sticky md:top-0',
        isSticky && isScrolled && 'md:shadow-[0_10px_30px_-18px_rgb(11_31_83/0.35)]',
      )}
    >
      <div className="shell flex min-h-16 flex-wrap items-center justify-between gap-6 py-2.5">
        {/* -ml-2: el PNG trae ~4 % de margen transparente a la izquierda; así el escudo queda
            alineado con el borde del contenido */}
        <Link
          to="/"
          aria-label="PROALIMEC, ir al inicio"
          className="-ml-2 block w-44 flex-none md:w-52"
        >
          <img
            src="/assets/images/logo-horizontal.png"
            alt="PROALIMEC"
            width={2042}
            height={720}
            fetchPriority="high"
            className="w-full"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="flex flex-wrap items-center gap-[clamp(16px,2.4vw,34px)]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'border-b py-2.5 text-xs/none font-semibold tracking-[0.14em] uppercase transition-[color,border-color] duration-300',
                  isActive
                    ? 'border-orange text-navy'
                    : 'border-transparent text-muted hover:text-navy',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}

          <ButtonLink to={PRIMARY_CTA.to} size="compact">
            {PRIMARY_CTA.label}
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
