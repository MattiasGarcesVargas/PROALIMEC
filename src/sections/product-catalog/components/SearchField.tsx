import { Search, X } from 'lucide-react'

type SearchFieldProps = {
  value: string
  onChange: (value: string) => void
}

export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <div className="w-full">
      <label
        htmlFor="catalog-search"
        className="mb-2 block text-sm font-semibold text-navy"
      >
        Buscar en el catálogo
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          size={20}
        />
        <input
          id="catalog-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar productos"
          className="min-h-12 w-full rounded-2xl border border-cold-border bg-white py-3 pl-12 pr-12 text-ink outline-none transition focus:border-navy focus:shadow-[var(--shadow-focus)]"
        />
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Limpiar búsqueda"
            className="absolute right-1 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-xl text-navy transition hover:bg-frost"
          >
            <X aria-hidden="true" size={19} />
          </button>
        ) : null}
      </div>
    </div>
  )
}
