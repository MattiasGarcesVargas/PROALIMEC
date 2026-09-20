import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it } from 'vitest'

import { ContactPage } from '~/sections/contact'
import { contactLoader } from '~/sections/contact/loaders/contact.loader'
import { localContactService } from '~/sections/contact/services/contact.local.service'
import { HomePage } from '~/sections/home-page'
import { homePageLoader } from '~/sections/home-page/loaders/home-page.loader'
import { localHomePageService } from '~/sections/home-page/services/home-page.local.service'
import { ProductCatalogPage } from '~/sections/product-catalog'
import { productCatalogLoader } from '~/sections/product-catalog/loaders/product-catalog.loader'
import { localProductCatalogService } from '~/sections/product-catalog/services/product-catalog.local.service'

function renderRoute(options: {
  path: string
  component: React.ComponentType
  loader: () => Promise<unknown>
}) {
  const router = createMemoryRouter(
    [
      {
        path: options.path,
        Component: options.component,
        loader: options.loader,
      },
    ],
    { initialEntries: [options.path] },
  )

  return render(<RouterProvider router={router} />)
}

describe('main pages', () => {
  it('renders the approved home heading', async () => {
    renderRoute({
      path: '/',
      component: HomePage,
      loader: () =>
        homePageLoader(localHomePageService, localProductCatalogService),
    })

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'Frescura protegida. Calidad garantizada.',
      }),
    ).toBeVisible()
  })

  it('renders the catalog with its line filters', async () => {
    renderRoute({
      path: '/productos',
      component: ProductCatalogPage,
      loader: () =>
        productCatalogLoader(
          { request: new Request('http://localhost/productos') },
          localProductCatalogService,
        ),
    })

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'Nuestros productos',
      }),
    ).toBeVisible()
    expect(screen.getByRole('button', { name: /todos 12/i })).toBeVisible()
    expect(screen.getByRole('button', { name: /cerdo 8/i })).toBeVisible()
    expect(screen.getByRole('button', { name: /res 4/i })).toBeVisible()
  })

  it('renders contact without invented business information', async () => {
    renderRoute({
      path: '/contacto',
      component: ContactPage,
      loader: () => contactLoader(localContactService),
    })

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'Hablemos de lo que necesita tu negocio.',
      }),
    ).toBeVisible()
    expect(
      screen.queryByRole('link', { name: /whatsapp/i }),
    ).not.toBeInTheDocument()
  })
})
