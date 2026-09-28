import type { ContactContent } from '@/sections/contact/types/contact.types'

export interface ContactService {
  getContactContent(): Promise<ContactContent>
}
