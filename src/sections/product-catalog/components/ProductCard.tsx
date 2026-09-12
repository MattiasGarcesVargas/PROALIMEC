import { MessageCircle } from 'lucide-react'
import { Link } from 'react-router'

import type {
  Category,
  Product,
} from '~/sections/product-catalog/types/product-catalog.types'

type ProductCardProps = {
  product: Product
  category?: Category
}

export function ProductCard({ product, category }: ProductCardProps) {
  const primaryMedia = product.media[0]

  return (
    <article className="group flex h-full flex-col">
      <Link
        to={`/productos/${product.slug}`}
        data-cursor="Ver detalle"
        className="frame-square block aspect-[4/5] w-full no-underline"
      >
        {primaryMedia ? (
          <img
            src={primaryMedia.src}
            alt={primaryMedia.alt}
            width={primaryMedia.width}
            height={primaryMedia.height}
            loading="lazy"
            className="transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            role="img"
            aria-label={`Imagen no disponible para ${product.name}`}
            className="size-full bg-gradient-to-br from-deep-raised to-navy"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-transparent"
        />
        <span className="absolute left-5 top-5 text-xs font-semibold uppercase tracking-[0.14em] text-ice">
          {category?.name ?? product.categorySlug}
        </span>
        <h3 className="absolute inset-x-5 bottom-4 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-white">
          {product.name}
        </h3>
      </Link>

      <p className="mt-4 line-clamp-3 text-muted">{product.description}</p>

      {product.presentations[0] ? (
        <p className="mt-3 text-sm text-ink">
          Presentación: {product.presentations[0]}
        </p>
      ) : null}

      <Link
        to={`/contacto?producto=${encodeURIComponent(product.name)}`}
        className="mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
      >
        Consultar este producto
        <MessageCircle aria-hidden="true" size={16} className="text-orange" />
      </Link>
    </article>
  )
}
