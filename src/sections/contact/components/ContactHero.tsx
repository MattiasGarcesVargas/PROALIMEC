import { ArrowDownRight } from 'lucide-react'

import type { ContactInformation } from '~/sections/contact/types/contact.types'
import { ButtonLink, Container } from '~/shared/components'

type ContactHeroProps = {
  content: ContactInformation['hero']
}

export function ContactHero({ content }: ContactHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-cold">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[36%] bg-navy lg:block"
      />
      <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:min-h-[39rem] lg:grid-cols-12 lg:py-24">
        <div className="relative z-10 flex flex-col items-start gap-7 lg:col-span-7 lg:pr-8">
          <p className="eyebrow" data-reveal>
            {content.eyebrow}
          </p>
          <h1
            className="page-title balanced-text max-w-4xl text-navy"
            data-reveal
          >
            {content.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted" data-reveal>
            {content.description}
          </p>
          <ButtonLink to={content.cta.href} data-reveal>
            {content.cta.label}
            <ArrowDownRight aria-hidden="true" size={18} />
          </ButtonLink>
        </div>

        {content.media ? (
          <div className="relative lg:col-span-5" data-reveal>
            <div className="relative aspect-4/5 overflow-hidden bg-black">
              <img
                src={content.media.src}
                alt={content.media.alt}
                width={content.media.width}
                height={content.media.height}
                className="absolute inset-0 size-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
