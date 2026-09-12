import type { ContactInformation } from '~/sections/contact/types/contact.types'

export interface ContactService {
  getContactInformation(): Promise<ContactInformation>
}
