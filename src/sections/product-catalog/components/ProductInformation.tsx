import type { Product } from '@/sections/product-catalog/types/product-catalog.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'

import ProductSpecs from './ProductSpecs'

function ProductInformation({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-xs/[1.2] font-semibold tracking-eyebrow text-orange uppercase">
        {product.lineLabel}
      </p>
      <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-extrabold tracking-[-0.045em] text-pretty text-navy">
        {product.name}
      </h1>
      <p className="mt-4.5 max-w-136 leading-[1.75] text-pretty text-muted">
        {product.description}
      </p>

      <ProductSpecs product={product} className="mt-7" />

      <ButtonLink to="/contacto" className="mt-7">
        Consultar este corte
      </ButtonLink>
    </div>
  )
}

export default ProductInformation
