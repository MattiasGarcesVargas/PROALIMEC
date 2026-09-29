import { z } from 'zod'

const MediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
})

const InternalCtaSchema = z.object({
  label: z.string().min(1),
  href: z.string().regex(/^\/(?!\/)/, 'El CTA debe usar una ruta interna'),
})

// Cada línea que el comprador puede sumar al mensaje de WhatsApp
export const QuoteLineSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  hint: z.string().min(1),
  prompt: z.string().min(1),
})

// Solo textos de la página: los datos comerciales viven en src/shared/config/contact.ts
export const ContactSchema = z.object({
  hero: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    // Solo afirmaciones aprobadas en PRODUCT.md
    facts: z.array(z.object({ key: z.string().min(1), label: z.string().min(1) })).length(3),
    image: MediaSchema,
  }),
  quote: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    lines: z.array(QuoteLineSchema).min(1),
  }),
  channels: z.object({
    title: z.string().min(1),
  }),
  closing: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    cta: InternalCtaSchema,
    image: MediaSchema,
  }),
})
