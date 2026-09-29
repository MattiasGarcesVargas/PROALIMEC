import type {
  LineCounts,
  MeatLineFilter,
} from '@/sections/product-catalog/types/product-catalog.types'
import { cn } from '@/shared/utils/cn'

interface ProductFilterBarProps {
  value: MeatLineFilter
  counts: LineCounts
  onChange: (line: MeatLineFilter) => void
}

const OPTIONS: { value: MeatLineFilter; label: string }[] = [
  { value: 'todo', label: 'Todos' },
  { value: 'cerdo', label: 'Cerdo' },
  { value: 'res', label: 'Res' },
]

function ProductFilterBar({ value, counts, onChange }: ProductFilterBarProps) {
  return (
    <div
      role="group"
      aria-label="Filtrar cortes por línea"
      className="mt-[clamp(2.5rem,5vw,4rem)] flex flex-wrap items-center justify-center gap-[clamp(18px,3vw,36px)] border-y border-navy/12 py-[clamp(1rem,2vw,1.5rem)]"
    >
      {OPTIONS.map((option) => {
        const isActive = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'min-h-11 cursor-pointer border-b-2 px-1.5 text-xs/none font-semibold tracking-[0.16em] uppercase transition-[color,border-color] duration-350',
              isActive ? 'border-navy text-navy' : 'border-transparent text-muted hover:text-navy',
            )}
          >
            {option.label} <span className="text-orange">{counts[option.value]}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ProductFilterBar
