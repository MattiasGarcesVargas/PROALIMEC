import type { z } from 'zod'

import type { ContactSchema, QuoteLineSchema } from '@/sections/contact/schemas/contact.schema'

export type ContactContent = z.infer<typeof ContactSchema>
export type QuoteLine = z.infer<typeof QuoteLineSchema>
