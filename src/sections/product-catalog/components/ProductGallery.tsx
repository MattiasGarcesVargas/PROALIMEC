import { useState } from 'react'

import { PRODUCT_VIEW_LABELS } from '@/sections/product-catalog/consts/product-views'
import type { Product } from '@/sections/product-catalog/types/product-catalog.types'
import { cn } from '@/shared/utils/cn'

// Galería de la ficha completa: la foto elegida en grande y, debajo, las cuatro vistas del corte
// (principal, desde arriba, de lado y en su empaque) a todo el ancho, con la activa marcada
function ProductGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePhoto = product.gallery[activeIndex] ?? product.gallery[0]

  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden bg-black">
        <img
          key={activePhoto.view}
          src={activePhoto.src}
          alt={activePhoto.alt}
          className="size-full animate-fade-in object-cover motion-reduce:animate-none"
        />
      </div>

      {/* Una columna por foto: la fila siempre va de borde a borde de la foto grande */}
      <div className="mt-3 grid auto-cols-fr grid-flow-col gap-3">
        {product.gallery.map((photo, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={photo.view}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${product.name}, ${PRODUCT_VIEW_LABELS[photo.view]}`}
              className={cn(
                'group aspect-4/3 cursor-pointer overflow-hidden border-2 bg-black transition-colors duration-300',
                isActive ? 'border-orange' : 'border-transparent hover:border-navy/30',
              )}
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                className={cn(
                  'size-full object-cover transition-[opacity,scale] duration-300',
                  isActive
                    ? 'opacity-100'
                    : 'opacity-70 group-hover:scale-105 group-hover:opacity-100',
                )}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ProductGallery
