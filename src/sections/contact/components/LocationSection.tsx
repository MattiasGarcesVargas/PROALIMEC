import { ArrowUpRight, MapPin } from 'lucide-react'

import type {
  ContactLocation,
  ContactSectionContent,
} from '~/sections/contact/types/contact.types'
import { ButtonLink, SectionHeading } from '~/shared/components'

type LocationSectionProps = {
  content: ContactSectionContent
  location: ContactLocation | null
}

export function LocationSection({ content, location }: LocationSectionProps) {
  return (
    <section
      className="overflow-hidden rounded-4xl border border-cold-border bg-white"
      data-reveal
    >
      <div
        className="relative min-h-64 border-b border-cold-border bg-cold"
        aria-hidden={!location?.media}
      >
        {location?.media ? (
          <img
            src={location.media.src}
            alt={location.media.alt}
            width={location.media.width}
            height={location.media.height}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        ) : null}
        <span
          aria-hidden="true"
          className="absolute bottom-6 right-6 flex size-12 items-center justify-center rounded-2xl border border-cold-border bg-white text-navy"
        >
          <MapPin size={22} strokeWidth={1.8} />
        </span>
      </div>
      <div className="p-6 md:p-10 lg:p-12">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        {location ? (
          <div className="mt-8">
            <p className="font-display text-lg font-semibold text-navy">
              {location.name}
            </p>
            <address className="mt-2 max-w-xl not-italic text-muted">
              {location.address}
            </address>
            {location.mapUrl ? (
              <ButtonLink
                to={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-6"
              >
                Abrir ubicación
                <ArrowUpRight aria-hidden="true" size={18} />
              </ButtonLink>
            ) : null}
          </div>
        ) : (
          <p className="mt-8 font-medium text-muted" role="status">
            {content.emptyMessage}
          </p>
        )}
      </div>
    </section>
  )
}
