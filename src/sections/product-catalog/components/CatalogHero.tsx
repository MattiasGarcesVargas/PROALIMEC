import { Link } from 'react-router'

import type { Category } from '~/sections/product-catalog/types/product-catalog.types'
import { Container } from '~/shared/components'

export function CatalogHero({ categories }: { categories: Category[] }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-16 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-40 size-[34rem] rounded-full border-[6rem] border-ice/10"
        data-parallax
      />
      <Container className="relative grid items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start gap-6 lg:col-span-7">
          <p className="eyebrow" data-reveal>
            Catálogo de productos
          </p>
          <h1 className="page-title balanced-text max-w-3xl" data-reveal>
            Explora nuestro portafolio.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-frost" data-reveal>
            Busca por nombre o recorre las categorías disponibles para encontrar
            información de producto.
          </p>
          {categories.length > 0 ? (
            <nav
              aria-label="Categorías destacadas"
              className="flex flex-wrap gap-2"
              data-reveal
            >
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/productos?categoria=${category.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-4 text-sm font-semibold no-underline transition hover:border-ice hover:bg-white hover:text-navy"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div
          className="grid grid-cols-2 gap-3 lg:col-span-5"
          aria-hidden="true"
          data-reveal
        >
          <div className="col-span-2 aspect-[2/1] rounded-[5rem_5rem_1.5rem_1.5rem] border border-ice/40 bg-white/8" />
          <div className="aspect-square rounded-3xl border border-white/20 bg-white/6" />
          <div className="aspect-square rounded-3xl border border-white/20 bg-frost/10" />
        </div>
      </Container>
    </section>
  )
}
