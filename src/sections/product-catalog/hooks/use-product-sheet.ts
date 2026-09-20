import { useCallback, useEffect, useState } from 'react'

import type { Product } from '~/sections/product-catalog/types/product-catalog.types'

/** Estado de la ficha en modal: abre, cierra y responde a Escape. */
export function useProductSheet() {
  const [selected, setSelected] = useState<Product | null>(null)

  const open = useCallback((product: Product) => setSelected(product), [])
  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (!selected) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected, close])

  return { selected, open, close }
}
