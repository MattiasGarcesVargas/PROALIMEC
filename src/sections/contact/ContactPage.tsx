import { useRef } from 'react'

import {
  BusinessHours,
  ContactHero,
  ContactMethods,
  LocationSection,
  WholesaleAttentionSection,
} from '~/sections/contact/components'
import { useContactData } from '~/sections/contact/hooks/use-contact-data'
import { Container } from '~/shared/components'
import { useSectionMotion } from '~/shared/motion'

export function ContactPage() {
  const content = useContactData()
  const pageRef = useRef<HTMLElement>(null)
  useSectionMotion(pageRef)

  return (
    <main id="main-content" ref={pageRef}>
      <ContactHero content={content.hero} />
      <ContactMethods
        content={content.methodsSection}
        methods={content.methods}
      />
      <div className="section-space bg-cold">
        <Container className="grid gap-6 lg:grid-cols-2">
          <BusinessHours
            content={content.hoursSection}
            hours={content.businessHours}
          />
          <LocationSection
            content={content.locationSection}
            location={content.location}
          />
        </Container>
      </div>
      <WholesaleAttentionSection content={content.wholesaleAttention} />
    </main>
  )
}
