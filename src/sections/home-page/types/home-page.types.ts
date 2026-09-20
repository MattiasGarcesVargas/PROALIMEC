import type { z } from 'zod'

import type {
  BestSellerSchema,
  HomeCategorySchema,
  HomeHeroSchema,
  HomePageSchema,
  MediaAssetSchema,
  MeatLineSchema,
} from '~/sections/home-page/schemas/home-page.schema'

export type HomePageContent = z.infer<typeof HomePageSchema>
export type HomeHeroContent = z.infer<typeof HomeHeroSchema>
export type HomeMarqueeContent = HomePageContent['marquee']
export type BestSeller = z.infer<typeof BestSellerSchema>
export type HomeCategory = z.infer<typeof HomeCategorySchema>
export type CategoriesIntroContent = HomePageContent['categoriesIntro']
export type OurProductsContent = HomePageContent['ourProducts']
export type CatalogPreviewContent = HomePageContent['catalogPreview']
export type ColdChainContent = HomePageContent['coldChain']
export type ServiceContent = HomePageContent['service']
export type ContactCtaContent = HomePageContent['contactCta']
export type MediaAsset = z.infer<typeof MediaAssetSchema>
export type MeatLine = z.infer<typeof MeatLineSchema>
