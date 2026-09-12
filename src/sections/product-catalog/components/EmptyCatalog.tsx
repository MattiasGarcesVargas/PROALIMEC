import { SearchX } from 'lucide-react'

import { Button } from '~/shared/components'

type EmptyCatalogProps = {
  hasActiveFilters: boolean
  onClear: () => void
}

export function EmptyCatalog({ hasActiveFilters, onClear }: EmptyCatalogProps) {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-cold-border bg-cold px-6 py-12 text-center">
      <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-frost text-navy">
        <SearchX aria-hidden="true" size={26} />
      </span>
      <h2 className="font-display text-2xl font-semibold text-navy">
        {hasActiveFilters
          ? 'No encontramos coincidencias'
          : 'Catálogo sin productos publicados'}
      </h2>
      <p className="mt-3 max-w-lg text-muted">
        {hasActiveFilters
          ? 'Prueba otra búsqueda, cambia la categoría o limpia los filtros.'
          : 'Los productos aparecerán aquí cuando exista información aprobada para publicar.'}
      </p>
      {hasActiveFilters ? (
        <Button className="mt-6" onClick={onClear}>
          Limpiar filtros
        </Button>
      ) : null}
    </div>
  )
}
