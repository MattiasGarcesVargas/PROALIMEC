import { X } from 'lucide-react'
import { useState } from 'react'

import { PRODUCT_VIEW_LABELS } from '@/sections/product-catalog/consts/product-views'
import type { Product } from '@/sections/product-catalog/types/product-catalog.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'
import { cn } from '@/shared/utils/cn'

import ProductSpecs from './ProductSpecs'

interface ProductSheetModalProps {
  product: Product | null
  onClose: () => void
}

// Ficha rápida del corte; se cierra con la X, con Escape o al hacer clic fuera
function ProductSheetModal({ product, onClose }: ProductSheetModalProps) {
  if (!product) return null

  // key: al abrir otro corte la galería vuelve a su primera foto
  return <ProductSheet key={product.id} product={product} onClose={onClose} />
}

function ProductSheet({ product, onClose }: { product: Product; onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePhoto = product.gallery[activeIndex] ?? product.gallery[0]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Ficha de ${product.name}`}
      onClick={onClose}
      className="fixed inset-0 z-90 flex items-center justify-center bg-shade/72 p-[clamp(1rem,3vw,2.5rem)] backdrop-blur-[6px]"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="grid max-h-[88vh] w-[min(64rem,100%)] grid-fit-72 overflow-auto bg-white"
      >
        {/* Galería: la foto principal crece hasta el alto del texto; debajo, las tres vistas */}
        <div className="flex flex-col bg-black">
          <div className="relative min-h-72 flex-1 overflow-hidden">
            <img
              key={activePhoto.src + activeIndex}
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="absolute inset-0 size-full animate-fade-in object-cover motion-reduce:animate-none"
            />
          </div>
          <div className="flex gap-2 p-3">
            {product.gallery.map((photo, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={photo.view}
                  type="button"
                  aria-pressed={isActive}
                  aria-label={`Ver ${product.name}, ${PRODUCT_VIEW_LABELS[photo.view]}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'aspect-4/3 flex-1 cursor-pointer overflow-hidden border bg-black transition-colors duration-300 focus-visible:outline-ice',
                    isActive ? 'border-orange' : 'border-white/24 hover:border-white/60',
                  )}
                >
                  <img src={photo.src} alt="" className="size-full object-cover" />
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-[clamp(1.5rem,3vw,2.75rem)]">
          <div className="flex items-start justify-between gap-4">
            <p className="text-xs/[1.2] font-semibold tracking-eyebrow text-orange uppercase">
              {product.lineLabel}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar ficha"
              autoFocus
              className="-mt-2.5 -mr-2.5 grid size-11 flex-none cursor-pointer place-items-center text-navy/60 transition-colors hover:text-navy"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </button>
          </div>

          <h2 className="mt-3 font-display text-subsection font-extrabold tracking-[-0.035em] text-navy">
            {product.name}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-pretty text-muted">
            {product.description}
          </p>

          <ProductSpecs product={product} className="mt-6.5" />

          {/* Las dos acciones van lado a lado: tamaño compacto para que quepan en una fila */}
          <div className="mt-6.5 grid grid-cols-2 gap-2">
            <ButtonLink to="/contacto" size="compact" className="px-3">
              Consultar este corte
            </ButtonLink>
            <ButtonLink
              to={`/productos/${product.slug}`}
              variant="outline"
              size="compact"
              className="px-3"
            >
              Ver ficha completa
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSheetModal
