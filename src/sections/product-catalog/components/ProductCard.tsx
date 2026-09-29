import type { Product } from '@/sections/product-catalog/types/product-catalog.types'

interface ProductCardProps {
  product: Product
  onOpen: (product: Product) => void
}

function ProductCard({ product, onOpen }: ProductCardProps) {
  return (
    <article>
      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`Ver ficha de ${product.name}`}
        className="group block w-full cursor-pointer text-left"
      >
        <span className="relative block aspect-4/5 overflow-hidden bg-black">
          <img
            src={product.image.src}
            alt={product.image.alt}
            loading="lazy"
            draggable={false}
            className="size-full object-cover transition-transform duration-800 ease-out-expo group-hover:scale-105 group-focus:scale-105"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b/srgb from-shade/0 from-34% via-shade/58 via-66% to-shade/90"
          />
          <span className="absolute inset-x-0 bottom-0 block p-[clamp(1rem,2vw,1.35rem)]">
            <span className="block text-[11px]/none font-semibold tracking-[0.18em] text-orange uppercase">
              {product.lineLabel}
            </span>
            <span className="mt-2.5 block font-display text-[1.25rem] leading-[1.15] font-bold tracking-[-0.025em] text-white">
              {product.name}
            </span>
            <span className="mt-1.5 block text-[13px] leading-[1.55] text-white/84">
              {product.shortDescription}
            </span>
          </span>
        </span>
      </button>
    </article>
  )
}

export default ProductCard
