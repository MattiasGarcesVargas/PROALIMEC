import { ArrowRight } from 'lucide-react'

import type { HomeHeroContent } from '~/sections/home-page/types/home-page.types'
import { ButtonLink, Container, WaterfallTitle } from '~/shared/components'

const titleLines = ['Frescura protegida,', 'calidad garantizada.']

export function HeroSection({ content }: { content: HomeHeroContent }) {
  return (
    <section className="band-deep relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-1/4 top-0 h-[70%] w-[70%] rounded-full bg-navy/45 blur-[120px]"
      />
      <Container className="relative grid items-center gap-12 py-16 lg:min-h-[calc(100svh-var(--header-height))] lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="flex flex-col items-start gap-8 lg:col-span-7">
          <p className="eyebrow" data-hero-follow>
            {content.eyebrow}
          </p>

          <WaterfallTitle
            lines={titleLines}
            accentLastLine
            className="font-display text-[clamp(2.9rem,8.5vw,6.5rem)] font-bold leading-[0.94] tracking-[-0.055em]"
          />

          <p
            className="max-w-lg text-lg leading-8 text-muted-cold"
            data-hero-follow
          >
            {content.description}
          </p>

          <div
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            data-hero-follow
          >
            <ButtonLink to={content.primaryCta.href} variant="inverse">
              {content.primaryCta.label}
              <ArrowRight aria-hidden="true" size={18} />
            </ButtonLink>
            {content.secondaryCta ? (
              <ButtonLink to={content.secondaryCta.href} variant="outlineDark">
                {content.secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </div>

        {content.media ? (
          <div className="lg:col-span-5">
            <figure
              className="shield-frame mx-auto aspect-[3/4] w-full max-w-sm lg:max-w-none"
              data-hero-media
              data-cursor="Portafolio"
            >
              <img
                src={content.media.src}
                alt={content.media.alt}
                width={content.media.width}
                height={content.media.height}
                fetchPriority="high"
              />
            </figure>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
