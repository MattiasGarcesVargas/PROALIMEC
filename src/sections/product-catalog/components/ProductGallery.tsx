import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, type KeyboardEvent } from 'react'

import type { ProductMedia } from '~/sections/product-catalog/types/product-catalog.types'

type ProductGalleryProps = {
  productName: string
  media: ProductMedia[]
}

export function ProductGallery({ productName, media }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedMedia = media[selectedIndex] ?? media[0]

  function moveSelection(direction: -1 | 1) {
    if (media.length === 0) return
    setSelectedIndex(
      (current) => (current + direction + media.length) % media.length,
    )
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      moveSelection(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      moveSelection(1)
    }
  }

  return (
    <div
      role="group"
      aria-label={`Galería de ${productName}`}
      tabIndex={media.length > 1 ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-cold-border bg-cold">
        {selectedMedia ? (
          <img
            src={selectedMedia.src}
            alt={selectedMedia.alt}
            width={selectedMedia.width}
            height={selectedMedia.height}
            className="size-full object-contain"
          />
        ) : (
          <div
            role="img"
            aria-label={`Imagen no disponible para ${productName}`}
            className="size-full bg-gradient-to-br from-white to-frost/60"
          />
        )}

        {media.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => moveSelection(-1)}
              aria-label="Ver imagen anterior"
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cold-border bg-white text-navy shadow-xs transition hover:bg-frost"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              onClick={() => moveSelection(1)}
              aria-label="Ver imagen siguiente"
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-cold-border bg-white text-navy shadow-xs transition hover:bg-frost"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </>
        ) : null}
      </div>

      {media.length > 1 ? (
        <div
          className="mt-3 grid grid-cols-4 gap-3"
          aria-label="Seleccionar imagen"
        >
          {media.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ver imagen ${index + 1} de ${productName}`}
              aria-pressed={index === selectedIndex}
              className="aspect-[4/3] min-h-11 overflow-hidden rounded-xl border border-cold-border bg-cold transition hover:border-navy aria-pressed:border-2 aria-pressed:border-navy"
            >
              <img
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                className="size-full object-contain"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
