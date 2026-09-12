import { ArrowRight } from 'lucide-react'

import type { HomePageContent } from '~/sections/home-page/types/home-page.types'
import { ButtonLink, Container } from '~/shared/components'

export function QuoteCtaSection({
  content,
}: {
  content: HomePageContent['quoteCta']
}) {
  return (
    <section className="band-deep section-space">
      <Container className="grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <h2
            className="font-display text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-0.045em] text-balance"
            data-reveal
          >
            {content.title}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-muted-cold" data-reveal>
            {content.description}
          </p>
          <div data-reveal>
            <ButtonLink to={content.cta.href} variant="inverse">
              {content.cta.label}
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
          </div>
        </div>

        <figure className="lg:col-span-5" data-reveal>
          <div className="frame-square aspect-[4/5] w-full">
            <img
              src="/images/fotos/portafolio-mesa.jpg"
              alt="Mesa con cortes de carne y productos del mar sobre superficie oscura"
              width={736}
              height={1313}
              loading="lazy"
            />
          </div>
        </figure>
      </Container>
    </section>
  )
}
