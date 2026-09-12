import type { Route } from './+types/product-detail.route'
import {
  ProductDetailPage,
  productDetailLoader,
} from '~/sections/product-catalog'
import { services } from '~/service-registry'

export function clientLoader(args: Route.ClientLoaderArgs) {
  return productDetailLoader(args, services.productCatalog)
}

export const meta: Route.MetaFunction = ({ data }) => [
  {
    title: data?.product
      ? `${data.product.name} | PROALIMEC`
      : 'Producto no disponible | PROALIMEC',
  },
  {
    name: 'description',
    content:
      data?.product?.description ?? 'Información de producto no disponible.',
  },
]

export default function ProductDetailRoute() {
  return <ProductDetailPage />
}
