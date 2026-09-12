import type { Route } from './+types/home.route'
import { HomePage, homePageLoader } from '~/sections/home-page'
import { services } from '~/service-registry'

export function loader() {
  return homePageLoader(services.homePage, services.productCatalog)
}

export const meta: Route.MetaFunction = () => [
  { title: 'PROALIMEC | Frescura protegida' },
  {
    name: 'description',
    content:
      'Explora el portafolio de alimentos cárnicos congelados de PROALIMEC y solicita información comercial.',
  },
]

export default function HomeRoute() {
  return <HomePage />
}
