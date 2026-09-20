import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

/** Cortina blanca entre rutas: 260 ms de entrada/salida con ease estándar. */
export function PageTransition() {
  const { pathname } = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.style.opacity = '1'
    const frame = requestAnimationFrame(() => {
      node.style.opacity = '0'
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'var(--white)',
        opacity: 0,
        pointerEvents: 'none',
        transition: 'opacity .26s var(--ease-standard)',
      }}
    />
  )
}
