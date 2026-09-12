import { describe, expect, it } from 'vitest'

import { ContactSchema } from '~/sections/contact/schemas/contact.schema'
import { localContactService } from '~/sections/contact/services/contact.local.service'

describe('localContactService', () => {
  it('returns contact information validated by the contact schema', async () => {
    const content = await localContactService.getContactInformation()

    expect(ContactSchema.safeParse(content).success).toBe(true)
    expect(content.status).toBe('structure-only')
    expect(content.methods).toHaveLength(0)
    expect(content.businessHours).toHaveLength(0)
    expect(content.location).toBeNull()
  })
})
