import { useEffect, useRef, useState } from 'react'

export const clamp01 = (value: number) =>
  value < 0 ? 0 : value > 1 ? 1 : value

export const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3)

/** Normaliza el progreso global de una escena dentro del sub-tramo [start, end]. */
export function range(progress: number, start: number, end: number) {
  return clamp01((progress - start) / (end - start))
}

/**
 * Progreso 0..1 de una sección sticky mientras cruza el viewport, leído por rAF.
 * Es reversible al subir y queda en estado final con `prefers-reduced-motion`.
 */
export function useScrollScene<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let frame = 0

    // Con movimiento reducido la escena queda en su estado final.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frame = requestAnimationFrame(() => setProgress(1))
      return () => cancelAnimationFrame(frame)
    }

    const read = () => {
      const rect = node.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const raw = total > 0 ? -rect.top / total : 0
      setProgress(clamp01(raw))
      frame = requestAnimationFrame(read)
    }

    frame = requestAnimationFrame(read)
    return () => cancelAnimationFrame(frame)
  }, [])

  return { ref, progress }
}
