import { ArrowUpRight } from 'lucide-react'

import type { ContactInformation } from '~/sections/contact/types/contact.types'
import { ButtonLink, Container } from '~/shared/components'

type WholesaleAttentionSectionProps = {
  content: ContactInformation['wholesaleAttention']
}

export function WholesaleAttentionSection({
  content,
}: WholesaleAttentionSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-18 text-white">
      <Container className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title balanced-text mt-5">{content.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-frost">
            {content.description}
          </p>
        </div>
        <ButtonLink to={content.cta.href} variant="inverse" data-reveal>
          {content.cta.label}
          <ArrowUpRight aria-hidden="true" size={18} />
        </ButtonLink>
      </Container>
    </section>
  )
}
