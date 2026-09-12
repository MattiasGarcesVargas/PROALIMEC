import { ArrowLeft, PackageSearch } from 'lucide-react'

import type { Route } from './+types/not-found.route'
import { ButtonLink, Container } from '~/shared/components'

export const meta: Route.MetaFunction = () => [
  { title: 'Página no encontrada | PROALIMEC' },
]

export default function NotFoundRoute() {
  return (
    <main id="main-content" className="bg-cold">
      <Container className="grid min-h-[70svh] place-items-center py-20 text-center">
        <div className="flex max-w-2xl flex-col items-center">
          <PackageSearch
            aria-hidden="true"
            className="text-ice"
            size={56}
            strokeWidth={1.5}
          />
          <p className="eyebrow mt-8">Error 404</p>
          <h1 className="page-title balanced-text mt-5 text-navy">
            Esta página no está disponible.
          </h1>
          <p className="mt-5 text-lg text-muted">
            Puedes volver al inicio o continuar explorando nuestro catálogo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/">
              <ArrowLeft aria-hidden="true" size={18} /> Volver al inicio
            </ButtonLink>
            <ButtonLink to="/productos" variant="secondary">
              Ver productos
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  )
}
