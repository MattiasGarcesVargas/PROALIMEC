import type {
  LineCounts,
  MeatLineFilter,
} from '~/sections/product-catalog/types/product-catalog.types'

interface ProductFilterBarProps {
  value: MeatLineFilter
  counts: LineCounts
  onChange: (line: MeatLineFilter) => void
}

const OPTIONS: Array<{ value: MeatLineFilter; label: string }> = [
  { value: 'todo', label: 'Todos' },
  { value: 'cerdo', label: 'Cerdo' },
  { value: 'res', label: 'Res' },
]

export function ProductFilterBar({
  value,
  counts,
  onChange,
}: ProductFilterBarProps) {
  return (
    <div
      role="group"
      aria-label="Filtrar cortes por línea"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(18px, 3vw, 36px)',
        marginTop: 'clamp(2.5rem, 5vw, 4rem)',
        paddingBlock: 'clamp(1rem, 2vw, 1.5rem)',
        borderBlock: '1px solid rgba(11,31,83,.12)',
      }}
    >
      {OPTIONS.map((option) => {
        const active = option.value === value

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            style={{
              minHeight: 44,
              padding: '0 6px',
              background: 'transparent',
              border: 0,
              borderBottom: `2px solid ${active ? 'var(--navy)' : 'transparent'}`,
              color: active ? 'var(--navy)' : 'var(--muted)',
              font: '600 11px/1 var(--font-body)',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color .35s, border-color .35s',
            }}
          >
            {option.label}{' '}
            <span style={{ color: 'var(--accent)' }}>
              {counts[option.value]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
