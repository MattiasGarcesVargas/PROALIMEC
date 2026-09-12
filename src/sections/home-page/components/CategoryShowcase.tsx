import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import type { HomeMarketingSection } from '~/sections/home-page/types/home-page.types'
import { Container } from '~/shared/components'

export function CategoryShowcase({
  content,
}: {
  content: HomeMarketingSection
}) {
  if (content.items.length === 0) return null

  return (
    <section className="section-space bg-white">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <figure
            className="frame-square aspect-[4/5] lg:sticky lg:top-32"
            data-reveal
          >
            <img
              src="/images/fotos/res-despiece.jpg"
              alt="Piezas de res dispuestas formando la silueta de una vaca"
              width={564}
              height={743}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="lg:col-span-7">
          <header className="flex flex-col gap-5" data-reveal>
            {content.eyebrow ? (
              <p className="eyebrow">{content.eyebrow}</p>
            ) : null}
            <h2 className="section-title balanced-text text-navy">
              {content.title}
            </h2>
            {content.description ? (
              <p className="max-w-xl text-lg leading-8 text-muted">
                {content.description}
              </p>
            ) : null}
          </header>

          <ul className="mt-12 border-t border-cold-border" data-stagger>
            {content.items.map((item) => (
              <li key={item.id} className="border-b border-cold-border">
                <Link
                  to={`/productos?categoria=${item.id}`}
                  data-cursor="Ver"
                  className="group flex items-baseline gap-6 py-7 no-underline transition-[padding] duration-300 hover:pl-3"
                >
                  <span className="flex-1">
                    <span className="block font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-tight tracking-[-0.04em] text-navy">
                      {item.title}
                    </span>
                    <span className="mt-1 block max-w-md text-muted">
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    size={22}
                    className="shrink-0 translate-y-1 text-orange transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
