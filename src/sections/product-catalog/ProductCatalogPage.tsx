import {
  CustomCutCta,
  ProductFilterBar,
  ProductGrid,
  ProductSheetModal,
  ProductsHero,
} from '~/sections/product-catalog/components'
import { useProductCatalogData } from '~/sections/product-catalog/hooks/use-product-catalog-data'
import { useProductFilter } from '~/sections/product-catalog/hooks/use-product-filter'
import { useProductSheet } from '~/sections/product-catalog/hooks/use-product-sheet'

export function ProductCatalogPage() {
  const { content, products, counts } = useProductCatalogData()
  const { line, setLine } = useProductFilter()
  const { selected, open, close } = useProductSheet()

  return (
    <main
      id="main-content"
      style={{
        background: 'var(--white)',
        padding: 'clamp(3rem,7vw,6.5rem) 0 clamp(3.5rem,8vw,8rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <ProductsHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
        />

        <ProductFilterBar value={line} counts={counts} onChange={setLine} />

        <ProductGrid products={products} onOpen={open} />

        <CustomCutCta
          body={content.customCut.body}
          ctaLabel={content.customCut.ctaLabel}
        />
      </div>

      <ProductSheetModal product={selected} onClose={close} />
    </main>
  )
}
