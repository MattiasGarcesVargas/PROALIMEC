import { useRef } from 'react'

import {
  BrandMarquee,
  BrandStorySection,
  CategoryShowcase,
  ColdChainSection,
  FeaturedProductsSection,
  HeroSection,
  QuoteCtaSection,
  TrustMetricsSection,
  WhyProalimecSection,
} from '~/sections/home-page/components'
import { useHomePageData } from '~/sections/home-page/hooks/use-home-page-data'
import { useHeroMotion, useSectionMotion } from '~/shared/motion'

export function HomePage() {
  const { content, featured } = useHomePageData()
  const pageRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useHeroMotion(heroRef)
  useSectionMotion(pageRef)

  return (
    <main id="main-content" ref={pageRef}>
      <div ref={heroRef}>
        <HeroSection content={content.hero} />
      </div>
      <BrandMarquee messages={content.marquee} />
      <CategoryShowcase content={content.categories} />
      <ColdChainSection content={content.coldChain} />
      <FeaturedProductsSection products={featured} />
      <BrandStorySection content={content.story} />
      <WhyProalimecSection content={content.benefits} />
      <TrustMetricsSection metrics={content.metrics} />
      <QuoteCtaSection content={content.quoteCta} />
    </main>
  )
}
