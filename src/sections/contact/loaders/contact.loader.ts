import type { ContactService } from '~/sections/contact/services/contact.service'

export async function contactLoader(service: ContactService) {
  return service.getContactInformation()
}
