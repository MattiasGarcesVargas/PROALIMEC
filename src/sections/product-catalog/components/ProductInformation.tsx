import { MessageCircle } from 'lucide-react'

import type {
  Category,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'
import { ButtonLink } from '~/shared/components'

type ProductInformationProps = {
  product: Product
  category?: Category
}

export function ProductInformation({
  product,
  category,
}: ProductInformationProps) {
  return (
    <section aria-labelledby="product-name" className="lg:sticky lg:top-28">
      <p className="eyebrow">{category?.name ?? product.categorySlug}</p>
      <h1 id="product-name" className="page-title balanced-text mt-4 text-navy">
        {product.name}
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted">{product.description}</p>

      {product.presentations.length > 0 ? (
        <div className="mt-8 border-y border-cold-border py-6">
          <h2 className="font-display text-lg font-semibold text-navy">
            Presentaciones
          </h2>
          <ul className="mt-3 grid gap-2 text-ink">
            {product.presentations.map((presentation) => (
              <li key={presentation} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-orange"
                />
                {presentation}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ButtonLink
        to={`/contacto?producto=${encodeURIComponent(product.name)}`}
        className="mt-8 w-full sm:w-auto"
      >
        Consultar este producto
        <MessageCircle aria-hidden="true" size={19} />
      </ButtonLink>
    </section>
  )
}
