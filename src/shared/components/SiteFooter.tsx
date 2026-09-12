import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import { BrandLogo } from '~/shared/components/BrandLogo'
import { Container } from '~/shared/components/Container'

export function SiteFooter() {
  return (
    <footer className="bg-ink py-12 text-white">
      <Container>
        <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="w-fit rounded-2xl bg-white p-3">
            <BrandLogo className="w-35" />
          </div>
          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold">
              <li>
                <Link to="/" className="no-underline hover:text-ice">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="no-underline hover:text-ice">
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 no-underline hover:text-ice"
                >
                  Contáctanos <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-6 text-sm text-frost sm:flex-row sm:justify-between">
          <p>Frescura protegida, calidad garantizada.</p>
          <p>PROALIMEC</p>
        </div>
      </Container>
    </footer>
  )
}
