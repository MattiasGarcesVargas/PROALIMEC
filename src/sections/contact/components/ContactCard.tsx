import { Mail, MessageCircle, Phone } from 'lucide-react'

import type { ContactMethod } from '~/sections/contact/types/contact.types'

const methodIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
} as const

export function ContactCard({ method }: { method: ContactMethod }) {
  const Icon = methodIcons[method.type]
  const isExternal = method.type === 'whatsapp'

  return (
    <article className="flex min-h-64 flex-col border border-cold-border bg-white p-7 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-navy hover:shadow-sm">
      <span className="flex size-12 items-center justify-center bg-frost text-navy">
        <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
      </span>
      <h3 className="mt-8 font-display text-xl font-semibold text-navy">
        {method.label}
      </h3>
      <p className="mt-2 break-words text-muted">{method.value}</p>
      <a
        href={method.href}
        className="mt-auto inline-flex min-h-11 items-center pt-6 font-semibold text-navy underline decoration-ice decoration-2 underline-offset-4 hover:decoration-orange"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {method.actionLabel}
      </a>
    </article>
  )
}
