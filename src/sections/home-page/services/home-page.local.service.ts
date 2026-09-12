import homePageMock from '~/sections/home-page/mocks/home-page.mock.json'
import { HomePageSchema } from '~/sections/home-page/schemas/home-page.schema'
import type { HomePageService } from '~/sections/home-page/services/home-page.service'

export const localHomePageService: HomePageService = {
  async getContent() {
    return HomePageSchema.parse(homePageMock)
  },
}
