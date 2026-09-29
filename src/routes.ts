import { index, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  index('./routes/home.route.tsx'),
  route('productos', './routes/products.route.tsx'),
  route('productos/:slug', './routes/product-detail.route.tsx'),
  route('contacto', './routes/contact.route.tsx'),
  route('*', './routes/not-found.route.tsx'),
] satisfies RouteConfig
