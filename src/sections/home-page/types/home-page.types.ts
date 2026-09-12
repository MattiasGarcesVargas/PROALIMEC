import type { z } from 'zod'

import type { HomePageSchema } from '~/sections/home-page/schemas/home-page.schema'

export type HomePageContent = z.infer<typeof HomePageSchema>
export type HomeHeroContent = HomePageContent['hero']
export type HomeMarketingSection = HomePageContent['categories']
export type HomeStoryContent = NonNullable<HomePageContent['story']>
export type HomeMetric = HomePageContent['metrics'][number]
