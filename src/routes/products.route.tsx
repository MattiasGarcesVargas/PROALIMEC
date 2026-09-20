import type { Route } from './+types/products.route'
import {
  ProductCatalogPage,
  productCatalogLoader,
} from '~/sections/product-catalog'
import { services } from '~/service-registry'

// SPA mode: el filtro por línea vive en la URL, así que los datos se resuelven
// en cliente para que cada cambio de ?linea= vuelva a pasar por el loader.
export function clientLoader(args: Route.ClientLoaderArgs) {
  return productCatalogLoader(args, services.productCatalog)
}

export const meta: Route.MetaFunction = () => [
  { title: 'Productos | PROALIMEC' },
  {
    name: 'description',
    content:
      'Catálogo de cortes de cerdo y res congelados a −18 °C para compra mayorista.',
  },
]

export default function ProductsRoute() {
  return <ProductCatalogPage />
}
