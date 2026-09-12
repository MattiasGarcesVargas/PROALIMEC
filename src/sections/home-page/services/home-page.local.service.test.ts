import { describe, expect, it } from 'vitest'

import { HomePageSchema } from '~/sections/home-page/schemas/home-page.schema'
import { localHomePageService } from '~/sections/home-page/services/home-page.local.service'

describe('localHomePageService', () => {
  it('returns content validated by the home schema', async () => {
    const content = await localHomePageService.getContent()

    expect(HomePageSchema.safeParse(content).success).toBe(true)
    expect(content.hero.title).toBe('Frescura protegida, calidad garantizada.')
  })
})
