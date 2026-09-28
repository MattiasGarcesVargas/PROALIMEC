import CustomCutCta from './components/CustomCutCta'
import ProductFilterBar from './components/ProductFilterBar'
import ProductGrid from './components/ProductGrid'
import ProductSheetModal from './components/ProductSheetModal'
import ProductsHero from './components/ProductsHero'
import { useProductCatalogData } from './hooks/use-product-catalog-data'
import { useProductFilter } from './hooks/use-product-filter'
import { useProductSheet } from './hooks/use-product-sheet'

function ProductCatalogPage() {
  const { content, products, counts } = useProductCatalogData()
  const { line, setLine } = useProductFilter()
  const { selected, open, close } = useProductSheet()

  return (
    <main
      id="main-content"
      className="bg-white pt-[clamp(3rem,7vw,6.5rem)] pb-[clamp(3.5rem,8vw,8rem)]"
    >
      <div className="shell">
        <ProductsHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
        />
        <ProductFilterBar value={line} counts={counts} onChange={setLine} />
        <ProductGrid products={products} onOpen={open} />
        <CustomCutCta body={content.customCut.body} ctaLabel={content.customCut.ctaLabel} />
      </div>

      <ProductSheetModal product={selected} onClose={close} />
    </main>
  )
}

export default ProductCatalogPage
