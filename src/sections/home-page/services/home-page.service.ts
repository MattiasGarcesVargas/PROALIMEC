import type { HomePageContent } from '~/sections/home-page/types/home-page.types'

export interface HomePageService {
  getContent(): Promise<HomePageContent>
}
