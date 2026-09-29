import contactMock from '@/sections/contact/mocks/contact.mock.json'
import { ContactSchema } from '@/sections/contact/schemas/contact.schema'
import type { ContactService } from '@/sections/contact/services/contact.service'

export const localContactService: ContactService = {
  async getContactContent() {
    return ContactSchema.parse(contactMock)
  },
}
