import { describe, expect, it } from 'vitest'

import { buildWhatsAppUrl } from '@/shared/utils/whatsapp'

describe('buildWhatsAppUrl', () => {
  it('keeps only the digits of the phone number', () => {
    expect(buildWhatsAppUrl('+593 98-765-4321', 'Hola')).toBe(
      'https://wa.me/593987654321?text=Hola',
    )
  })

  it('encodes accents and line breaks of the message', () => {
    const url = new URL(buildWhatsAppUrl('593987654321', 'Línea: Cerdo\nCortes: chuleta'))

    expect(url.searchParams.get('text')).toBe('Línea: Cerdo\nCortes: chuleta')
  })
})
