import { useEffect, useState } from 'react'

// true en cuanto la página baja más que `threshold` píxeles (para la sombra del header fijo)
export function useIsScrolled(threshold = 8) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > threshold)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [threshold])

  return isScrolled
}
