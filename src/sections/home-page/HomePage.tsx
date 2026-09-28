import { ProductSheetModal, useProductSheet } from '@/sections/product-catalog'

import BestSellerScene from './components/BestSellerScene'
import CatalogPreviewSection from './components/CatalogPreviewSection'
import CategoriesSection from './components/CategoriesSection'
import ColdChainSection from './components/ColdChainSection'
import ContactCtaSection from './components/ContactCtaSection'
import HeroSection from './components/HeroSection'
import MarqueeStrip from './components/MarqueeStrip'
import OurProductsScene from './components/OurProductsScene'
import ServiceSection from './components/ServiceSection'
import { useHomePageData } from './hooks/use-home-page-data'

function HomePage() {
  const { content, products } = useHomePageData()
  const { selected, open, close } = useProductSheet()

  return (
    <main id="main-content">
      <HeroSection content={content.hero} />
      <MarqueeStrip content={content.marquee} />
      <BestSellerScene items={content.bestSellers} />
      <OurProductsScene content={content.ourProducts} />
      <CategoriesSection intro={content.categoriesIntro} categories={content.categories} />
      <ColdChainSection content={content.coldChain} />
      <CatalogPreviewSection content={content.catalogPreview} products={products} onOpen={open} />
      <ServiceSection content={content.service} />
      <ContactCtaSection content={content.contactCta} />

      <ProductSheetModal product={selected} onClose={close} />
    </main>
  )
}

export default HomePage
