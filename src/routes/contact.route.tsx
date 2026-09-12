import type { Route } from './+types/contact.route'
import { ContactPage, contactLoader } from '~/sections/contact'
import { services } from '~/service-registry'

export function loader() {
  return contactLoader(services.contact)
}

export const meta: Route.MetaFunction = () => [
  { title: 'Contacto | PROALIMEC' },
  {
    name: 'description',
    content: 'Consulta los canales de atención comercial de PROALIMEC.',
  },
]

export default function ContactRoute() {
  return <ContactPage />
}
