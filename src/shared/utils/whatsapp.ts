// Enlace wa.me con el mensaje ya escrito; acepta el número con o sin +, espacios o guiones
export function buildWhatsAppUrl(phone: string, message: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}
