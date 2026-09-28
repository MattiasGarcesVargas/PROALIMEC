import { describe, expect, it } from 'vitest'

import contactMock from '@/sections/contact/mocks/contact.mock.json'
import { ContactSchema } from '@/sections/contact/schemas/contact.schema'

describe('ContactSchema', () => {
  it('accepts the contact page copy', () => {
    expect(ContactSchema.safeParse(contactMock).success).toBe(true)
  })

  it('rejects a closing CTA that leaves the site', () => {
    const result = ContactSchema.safeParse({
      ...contactMock,
      closing: { ...contactMock.closing, cta: { label: 'Salir', href: 'https://example.com' } },
    })

    expect(result.success).toBe(false)
  })
})
