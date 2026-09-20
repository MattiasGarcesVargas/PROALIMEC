import {
  BestSellerScene,
  CatalogPreviewSection,
  CategoriesSection,
  ColdChainSection,
  ContactCtaSection,
  HeroSection,
  MarqueeStrip,
  OurProductsScene,
  ServiceSection,
} from '~/sections/home-page/components'
import { useHomePageData } from '~/sections/home-page/hooks/use-home-page-data'
import { ProductSheetModal, useProductSheet } from '~/sections/product-catalog'

export function HomePage() {
  const { content, products } = useHomePageData()
  const { selected, open, close } = useProductSheet()

  return (
    <main id="main-content">
      <HeroSection content={content.hero} />
      <MarqueeStrip content={content.marquee} />
      <BestSellerScene items={content.bestSellers} />
      <OurProductsScene content={content.ourProducts} />
      <CategoriesSection
        intro={content.categoriesIntro}
        categories={content.categories}
      />
      <ColdChainSection content={content.coldChain} />
      <CatalogPreviewSection
        content={content.catalogPreview}
        products={products}
        onOpen={open}
      />
      <ServiceSection content={content.service} />
      <ContactCtaSection content={content.contactCta} />

      <ProductSheetModal product={selected} onClose={close} />
    </main>
  )
}
