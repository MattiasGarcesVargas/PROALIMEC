import type {
  Category,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'

import { ProductCard } from './ProductCard'

type ProductGridProps = {
  products: Product[]
  categories: Category[]
}

export function ProductGrid({ products, categories }: ProductGridProps) {
  const categoryBySlug = new Map(
    categories.map((category) => [category.slug, category]),
  )

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-stagger>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          category={categoryBySlug.get(product.categorySlug)}
        />
      ))}
    </div>
  )
}
