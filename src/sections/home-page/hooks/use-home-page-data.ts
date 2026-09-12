import { useLoaderData } from 'react-router'

import type { homePageLoader } from '~/sections/home-page/loaders/home-page.loader'

export function useHomePageData() {
  return useLoaderData<typeof homePageLoader>()
}
