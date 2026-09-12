import type { Route } from './+types/products.route'
import {
  ProductCatalogPage,
  productCatalogLoader,
} from '~/sections/product-catalog'
import { services } from '~/service-registry'

export function loader() {
  return productCatalogLoader(services.productCatalog)
}

export const meta: Route.MetaFunction = () => [
  { title: 'Productos | PROALIMEC' },
  {
    name: 'description',
    content: 'Explora el catálogo de productos de PROALIMEC.',
  },
]

export default function ProductsRoute() {
  return <ProductCatalogPage />
}
