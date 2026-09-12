import type {
  ContactMethod,
  ContactSectionContent,
} from '~/sections/contact/types/contact.types'
import { Container, SectionHeading } from '~/shared/components'

import { ContactCard } from './ContactCard'

type ContactMethodsProps = {
  content: ContactSectionContent
  methods: ContactMethod[]
}

export function ContactMethods({ content, methods }: ContactMethodsProps) {
  return (
    <section id="canales-de-contacto" className="section-space bg-white">
      <Container>
        <SectionHeading {...content} />
        {methods.length > 0 ? (
          <div
            className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            data-stagger
          >
            {methods.map((method) => (
              <ContactCard key={method.id} method={method} />
            ))}
          </div>
        ) : (
          <div
            className="mt-12 flex min-h-40 items-center rounded-3xl border border-cold-border bg-cold px-6 py-8 md:px-10"
            role="status"
            data-reveal
          >
            <span
              aria-hidden="true"
              className="mr-5 h-12 w-1 shrink-0 rounded-full bg-orange"
            />
            <p className="max-w-2xl text-lg font-medium text-navy">
              {content.emptyMessage}
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}
