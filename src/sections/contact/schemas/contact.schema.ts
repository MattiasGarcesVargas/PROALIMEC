import { z } from 'zod'

const InternalCtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().regex(/^\/(?!\/)/, 'El CTA debe usar una ruta interna'),
})

const MediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

const SectionContentSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  emptyMessage: z.string().min(1),
})

const ContactMethodBaseSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  value: z.string().min(1),
  actionLabel: z.string().min(1),
})

export const ContactMethodSchema = z.discriminatedUnion('type', [
  ContactMethodBaseSchema.extend({
    type: z.literal('whatsapp'),
    href: z.string().regex(/^https:\/\/wa\.me\/\d+(?:\?.*)?$/),
  }),
  ContactMethodBaseSchema.extend({
    type: z.literal('phone'),
    href: z.string().regex(/^tel:\+?\d+$/),
  }),
  ContactMethodBaseSchema.extend({
    type: z.literal('email'),
    href: z.string().regex(/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/),
  }),
])

export const BusinessHourSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  value: z.string().min(1),
})

export const ContactLocationSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  mapUrl: z
    .string()
    .regex(/^https:\/\//)
    .nullable(),
  media: MediaSchema.nullable(),
})

export const ContactSchema = z.object({
  status: z.literal('structure-only'),
  hero: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    cta: InternalCtaSchema,
    media: MediaSchema.nullable(),
  }),
  methodsSection: SectionContentSchema,
  methods: z.array(ContactMethodSchema),
  hoursSection: SectionContentSchema,
  businessHours: z.array(BusinessHourSchema),
  locationSection: SectionContentSchema,
  location: ContactLocationSchema.nullable(),
  wholesaleAttention: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    cta: InternalCtaSchema,
  }),
})
