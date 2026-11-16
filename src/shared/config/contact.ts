import { buildWhatsAppUrl } from '@/shared/utils/whatsapp'

export interface BusinessHour {
  label: string
  value: string
}

interface ContactConfig {
  /** Solo dígitos, con código de país y sin el +: 5939XXXXXXXX */
  whatsappPhone: string | null
  /** Tel. en formato tel: con código de país: +5933XXXXXXX */
  phone: string | null
  /** Cómo se lee el teléfono en pantalla: (03) 2XX XXXX */
  phoneDisplay: string | null
  email: string | null
  address: string | null
  mapsUrl: string | null
  facebookUrl: string | null
  instagramUrl: string | null
  hours: BusinessHour[]
}

// Datos comerciales de PROALIMEC: una sola fuente para el footer y la página de contacto.
// TODO: completar con los datos confirmados por el cliente; mientras sean null la interfaz
// muestra "por confirmar" y los íconos no redirigen, nunca un dato inventado
export const CONTACT: ContactConfig = {
  // Número provisional de cotizaciones (0969060843) mientras se confirma el definitivo
  whatsappPhone: '593969060843',
  phone: '+9999999999',
  phoneDisplay: '+(593) 275 4163',
  email: null,
  address: null,
  mapsUrl: 'https://maps.app.goo.gl/QQokT6YszTWAtn4P7',
  facebookUrl: null,
  instagramUrl: null,
  hours: [],
}

export const CITY = 'Ambato, Ecuador'

// Mensaje general acordado con PROALIMEC para las consultas desde la web
export const WHATSAPP_GREETING =
  'Hola, vengo desde la página web de PROALIMEC y deseo información para una compra al por mayor.'

export const WHATSAPP_URL = CONTACT.whatsappPhone
  ? buildWhatsAppUrl(CONTACT.whatsappPhone, WHATSAPP_GREETING)
  : null

// Botones "Consultar este corte": abren WhatsApp con el corte ya escrito en el mensaje.
// Sin número confirmado, llevan a la página de contacto
export function cutInquiryLink(cutName: string) {
  if (!CONTACT.whatsappPhone) return { to: '/contacto' }

  const message = `${WHATSAPP_GREETING} Quiero consultar por el corte: ${cutName}.`
  return {
    to: buildWhatsAppUrl(CONTACT.whatsappPhone, message),
    target: '_blank',
    rel: 'noopener noreferrer',
  }
}

export interface SocialLink {
  label: string
  /** null mientras el enlace no esté confirmado: el ícono se muestra, pero no redirige */
  href: string | null
  /** SVG de public/assets/images/logos */
  icon: string
}

// Íconos del footer, en el mismo orden en que se muestran
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'WhatsApp', href: WHATSAPP_URL, icon: '/assets/images/logos/whatsapp.svg' },
  { label: 'Instagram', href: CONTACT.instagramUrl, icon: '/assets/images/logos/instagram.svg' },
  { label: 'Facebook', href: CONTACT.facebookUrl, icon: '/assets/images/logos/facebook.svg' },
  { label: 'Google Maps', href: CONTACT.mapsUrl, icon: '/assets/images/logos/google-maps.svg' },
]
