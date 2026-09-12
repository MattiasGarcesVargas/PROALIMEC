import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router'

import type { Route } from './+types/root'
import { AppShell } from '~/shared/components'
import './index.css'

export const meta: Route.MetaFunction = () => [
  { title: 'PROALIMEC | Alimentos cárnicos congelados' },
  {
    name: 'description',
    content:
      'Conoce el portafolio y los canales de atención comercial de PROALIMEC.',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'No pudimos cargar esta pagina.'

  return (
    <main>
      <h1>{message}</h1>
      <a href="/">Volver al inicio</a>
    </main>
  )
}
