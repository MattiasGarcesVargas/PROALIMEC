import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import { Button, ButtonLink } from '~/shared/components/Button'

describe('Button', () => {
  it('keeps local actions as buttons', () => {
    render(<Button>Filtrar</Button>)

    expect(screen.getByRole('button', { name: 'Filtrar' })).toHaveAttribute(
      'type',
      'button',
    )
  })

  it('keeps navigation actions as links', () => {
    render(
      <MemoryRouter>
        <ButtonLink to="/productos">Ver productos</ButtonLink>
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Ver productos' })).toHaveAttribute(
      'href',
      '/productos',
    )
  })
})
