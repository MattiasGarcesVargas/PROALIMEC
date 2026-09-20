import { Clock3 } from 'lucide-react'

import type {
  BusinessHour,
  ContactSectionContent,
} from '~/sections/contact/types/contact.types'
import { SectionHeading } from '~/shared/components'

type BusinessHoursProps = {
  content: ContactSectionContent
  hours: BusinessHour[]
}

export function BusinessHours({ content, hours }: BusinessHoursProps) {
  return (
    <section className="bg-navy p-6 text-white md:p-10 lg:p-12" data-reveal>
      <span className="mb-8 flex size-12 items-center justify-center bg-white/10 text-ice">
        <Clock3 aria-hidden="true" size={23} strokeWidth={1.8} />
      </span>
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        tone="dark"
      />
      {hours.length > 0 ? (
        <dl className="mt-10 divide-y divide-white/15 border-y border-white/15">
          {hours.map((hour) => (
            <div
              key={hour.id}
              className="grid gap-1 py-4 sm:grid-cols-2 sm:gap-6"
            >
              <dt className="font-semibold text-white">{hour.label}</dt>
              <dd className="text-frost sm:text-right">{hour.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p
          className="mt-10 border-t border-white/15 pt-6 font-medium text-frost"
          role="status"
        >
          {content.emptyMessage}
        </p>
      )}
    </section>
  )
}
