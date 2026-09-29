import { Link } from 'react-router'

import MaskIcon from '@/shared/components/ui/MaskIcon'
import { SOCIAL_LINKS } from '@/shared/config/contact'
import { NAV_ITEMS, PRIMARY_CTA, PRODUCT_LINE_LINKS } from '@/shared/config/navigation'

// Misma estructura que el footer de pulsocont_web: marca a la izquierda,
// separada por una línea vertical de tres columnas del mismo ancho
const LINK_CLASS =
  'transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ice'

const COLUMN_TITLE_CLASS = 'text-xs font-medium text-white lg:text-[13px]'

function SiteFooter() {
  return (
    <footer className="bg-ink text-frost">
      <div className="shell pt-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="border-b border-frost/15 pb-8 md:col-span-4 md:border-r md:border-b-0 md:pr-10 md:pb-0 lg:col-span-5">
            <Link to="/" aria-label="PROALIMEC, ir al inicio" className="inline-block">
              <img
                src="/assets/images/logo-blanco.webp"
                alt="PROALIMEC"
                width={2000}
                height={705}
                loading="lazy"
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-xl font-light text-white md:text-2xl lg:text-[22px]">
              Frescura protegida, calidad garantizada.
            </p>

            {/* -ml: el ícono (18px) queda alineado con el texto aunque su área de clic mida 40px */}
            <ul className="mt-5 -ml-[11px] flex flex-wrap gap-2" aria-label="Redes y ubicación">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  {/* Sin href mientras el enlace esté pendiente: se ve igual pero no redirige */}
                  <a
                    href={social.href ?? undefined}
                    target={social.href ? '_blank' : undefined}
                    rel={social.href ? 'noopener noreferrer' : undefined}
                    aria-label={social.label}
                    className="grid size-10 place-items-center text-frost transition-colors hover:bg-frost/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ice"
                  >
                    <MaskIcon src={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 text-xs sm:grid-cols-3 md:col-span-8 lg:col-span-7 lg:text-[13px]">
            <nav aria-label="Secciones del sitio">
              <h2 className={COLUMN_TITLE_CLASS}>Secciones</h2>
              <ul className="mt-3 space-y-3 font-extralight">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={LINK_CLASS}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Líneas de producto">
              <h2 className={COLUMN_TITLE_CLASS}>Productos</h2>
              <ul className="mt-3 space-y-3 font-extralight">
                {PRODUCT_LINE_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={LINK_CLASS}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className={COLUMN_TITLE_CLASS}>Atención</h2>
              <ul className="mt-3 space-y-3 font-extralight">
                <li>Venta mayorista</li>
                <li>Cortes nacionales e importados</li>
                <li>
                  <Link to={PRIMARY_CTA.to} className={LINK_CLASS}>
                    {PRIMARY_CTA.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-8 py-2 text-center text-xs font-light text-ice lg:text-[13px]">
          © {new Date().getFullYear()} PROALIMEC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
