import { describe, expect, it } from 'vitest'

import { HomePageSchema } from '~/sections/home-page/schemas/home-page.schema'
import { localHomePageService } from '~/sections/home-page/services/home-page.local.service'

describe('localHomePageService', () => {
  it('returns content validated by the home schema', async () => {
    const content = await localHomePageService.getContent()

    expect(HomePageSchema.safeParse(content).success).toBe(true)
    expect(content.hero.titleLines).toEqual([
      'Frescura',
      'protegida',
      'Calidad garantizada',
    ])
  })

  it('exposes the two best sellers used by the hanging scene', async () => {
    const content = await localHomePageService.getContent()

    expect(content.bestSellers).toHaveLength(2)
    expect(content.bestSellers[0]?.product.src).toBe(
      '/assets/images/pierna-cerdo.png',
    )
  })
})
