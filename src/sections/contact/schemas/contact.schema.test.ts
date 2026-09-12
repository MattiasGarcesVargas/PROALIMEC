import { describe, expect, it } from 'vitest'

import contactMock from '~/sections/contact/mocks/contact.mock.json'
import { ContactSchema } from '~/sections/contact/schemas/contact.schema'

describe('ContactSchema', () => {
  it('accepts the structure-only mock without unconfirmed contact data', () => {
    const content = ContactSchema.parse(contactMock)

    expect(content.status).toBe('structure-only')
    expect(content.methods).toEqual([])
    expect(content.businessHours).toEqual([])
    expect(content.location).toBeNull()
    expect(content.hero.media).toBeNull()
  })

  it('rejects contact methods with an unsafe link for their type', () => {
    const result = ContactSchema.safeParse({
      ...contactMock,
      methods: [
        {
          id: 'phone',
          type: 'phone',
          label: 'Teléfono',
          value: 'Dato sin confirmar',
          actionLabel: 'Llamar',
          href: 'https://example.com',
        },
      ],
    })

    expect(result.success).toBe(false)
  })
})
