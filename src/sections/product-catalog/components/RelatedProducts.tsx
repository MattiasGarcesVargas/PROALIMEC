import type {
  Category,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'
import { Container, SectionHeading } from '~/shared/components'

import { ProductGrid } from './ProductGrid'

type RelatedProductsProps = {
  products: Product[]
  categories: Category[]
}

export function RelatedProducts({
  products,
  categories,
}: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="section-space bg-cold">
      <Container>
        <SectionHeading
          eyebrow="También puede interesarte"
          title="Productos relacionados"
        />
        <div className="mt-10">
          <ProductGrid products={products} categories={categories} />
        </div>
      </Container>
    </section>
  )
}
