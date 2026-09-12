import type { z } from 'zod'

import type {
  BusinessHourSchema,
  ContactLocationSchema,
  ContactMethodSchema,
  ContactSchema,
} from '~/sections/contact/schemas/contact.schema'

export type ContactInformation = z.infer<typeof ContactSchema>
export type ContactMethod = z.infer<typeof ContactMethodSchema>
export type BusinessHour = z.infer<typeof BusinessHourSchema>
export type ContactLocation = z.infer<typeof ContactLocationSchema>
export type ContactSectionContent = ContactInformation['methodsSection']
