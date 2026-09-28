import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

import { useDragCarousel } from '@/sections/home-page/hooks/use-drag-carousel'
import type { CatalogPreviewContent } from '@/sections/home-page/types/home-page.types'
import { ProductCard, type MeatLineFilter, type Product } from '@/sections/product-catalog'
import { cn } from '@/shared/utils/cn'

interface CatalogPreviewSectionProps {
  content: CatalogPreviewContent
  products: Product[]
  onOpen: (product: Product) => void
}

const FILTERS: { value: MeatLineFilter; label: string; summary: string }[] = [
  { value: 'todo', label: 'Todo', summary: 'cerdo y res' },
  { value: 'cerdo', label: 'Cerdo', summary: 'cerdo' },
  { value: 'res', label: 'Res', summary: 'res' },
]

const LABEL_CLASS = 'text-xs/[1.4] font-medium tracking-[0.16em] text-muted uppercase'

const ARROW_CLASS =
  'grid size-11 cursor-pointer place-items-center text-navy/55 transition-[color,translate] duration-300 ease-out-expo hover:text-navy'

// Carrusel del catálogo: filtros por línea, arrastre, flechas y barra de recorrido
function CatalogPreviewSection({ content, products, onOpen }: CatalogPreviewSectionProps) {
  const [filter, setFilter] = useState<MeatLineFilter>('todo')
  const trackRef = useRef<HTMLDivElement>(null)
  const { progress, measure, scrollToStart, prev, next, trackHandlers } = useDragCarousel(trackRef)

  const visible =
    filter === 'todo' ? products : products.filter((product) => product.line === filter)
  const summary = FILTERS.find((option) => option.value === filter)?.summary

  // Al cambiar de línea la pista vuelve al inicio (antes de pintar) y la barra se recalcula
  useLayoutEffect(() => {
    scrollToStart()
    measure()
  }, [filter, scrollToStart, measure])

  return (
    <section className="bg-white py-[clamp(3.5rem,8vw,8rem)]">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="max-w-4xl font-display text-section font-extrabold text-balance text-navy">
            {content.title}
          </h2>
          <Link
            to="/productos"
            className="inline-flex items-center gap-2.5 border-b border-navy/30 pb-1 text-xs/none font-semibold tracking-button text-navy uppercase transition-colors hover:border-navy"
          >
            {content.ctaLabel}
            <ArrowRight aria-hidden="true" className="size-4 text-orange" />
          </Link>
        </div>

        <div className="mt-[clamp(1.75rem,3.5vw,2.75rem)] flex flex-wrap items-center justify-between gap-4">
          <div
            role="group"
            aria-label="Filtrar cortes por línea"
            className="flex flex-wrap gap-[clamp(18px,3vw,32px)]"
          >
            {FILTERS.map((option) => {
              const isActive = option.value === filter

              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(option.value)}
                  className={cn(
                    'min-h-11 cursor-pointer border-b-2 px-1 text-xs/none font-semibold tracking-[0.16em] uppercase transition-[color,border-color] duration-350',
                    isActive
                      ? 'border-navy text-navy'
                      : 'border-transparent text-muted hover:text-navy',
                  )}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
          <p className={cn(LABEL_CLASS, 'hidden sm:block')}>
            Arrastra para ver más · clic para la ficha
          </p>
        </div>

        <div
          ref={trackRef}
          {...trackHandlers}
          className="mt-[clamp(1.75rem,3.5vw,2.5rem)] flex cursor-grab snap-x snap-mandatory gap-[clamp(1rem,2vw,1.5rem)] overflow-x-auto scroll-smooth pb-2 select-none [scrollbar-width:none] active:cursor-grabbing"
        >
          {visible.map((product) => (
            <div key={product.id} className="w-[min(21rem,78vw)] flex-none snap-start">
              <ProductCard product={product} onOpen={onOpen} />
            </div>
          ))}
        </div>

        {/* Recorrido: cantidad de cortes, tramo visible de la pista y flechas */}
        <div className="mt-5.5 flex items-center gap-5">
          <p aria-live="polite" className={cn(LABEL_CLASS, 'flex-none')}>
            {visible.length} {visible.length === 1 ? 'corte' : 'cortes'} · {summary}
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-navy/14">
            <div
              className="h-full bg-navy transition-[width,transform] duration-300"
              style={{ width: `${progress.width}%`, transform: `translateX(${progress.offset}%)` }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Ver cortes anteriores"
              className={cn(ARROW_CLASS, 'hover:-translate-x-0.75')}
            >
              <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Ver más cortes"
              className={cn(ARROW_CLASS, 'hover:translate-x-0.75')}
            >
              <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogPreviewSection
