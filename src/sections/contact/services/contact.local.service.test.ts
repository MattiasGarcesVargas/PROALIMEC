import { describe, expect, it } from 'vitest'

import { ContactSchema } from '@/sections/contact/schemas/contact.schema'
import { localContactService } from '@/sections/contact/services/contact.local.service'

describe('localContactService', () => {
  it('returns page copy validated by the contact schema', async () => {
    const content = await localContactService.getContactContent()

    expect(ContactSchema.safeParse(content).success).toBe(true)
    expect(content.quote.lines.length).toBeGreaterThan(0)
  })
})
