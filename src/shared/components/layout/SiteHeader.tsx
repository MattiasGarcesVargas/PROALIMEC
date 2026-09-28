import { Link, NavLink } from 'react-router'

import ButtonLink from '@/shared/components/ui/ButtonLink'
import { NAV_ITEMS, PRIMARY_CTA } from '@/shared/config/navigation'
import { cn } from '@/shared/utils/cn'

function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-navy/10 bg-white">
      <div className="shell flex min-h-16 flex-wrap items-center justify-between gap-6 py-2.5">
        <Link to="/" aria-label="PROALIMEC, ir al inicio" className="block w-42 flex-none">
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
