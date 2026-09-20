import { startTransition } from 'react'
import { useSearchParams } from 'react-router'

import type { MeatLineFilter } from '~/sections/product-catalog/types/product-catalog.types'

const VALID_LINES: MeatLineFilter[] = ['todo', 'cerdo', 'res']

export function parseLineFilter(value: string | null): MeatLineFilter {
  return VALID_LINES.find((line) => line === value) ?? 'todo'
}

/** Filtro de línea persistido en la URL (?linea=cerdo) para enlaces compartibles. */
export function useProductFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const line = parseLineFilter(searchParams.get('linea'))

  function setLine(next: MeatLineFilter) {
    startTransition(() => {
      setSearchParams(
        (current) => {
          const params = new URLSearchParams(current)
          if (next === 'todo') params.delete('linea')
          else params.set('linea', next)
          return params
        },
        { replace: true },
      )
    })
  }

  return { line, setLine }
}
