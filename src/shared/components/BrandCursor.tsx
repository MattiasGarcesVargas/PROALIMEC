import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useState } from 'react'

import { useReducedMotion } from '~/shared/motion'

/**
 * Desktop-only brand pointer. Elements opting in with `data-cursor="<label>"`
 * expand it into a labelled disc; everywhere else it stays a thin cold ring.
 * Hidden for coarse pointers and when reduced motion is requested.
 */
export function BrandCursor() {
  const reduceMotion = useReducedMotion()
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)

  useGSAP(
    () => {
      const ring = ringRef.current
      if (reduceMotion || !ring) return
      if (!window.matchMedia('(pointer: fine)').matches) return

      gsap.set(ring, { xPercent: -50, yPercent: -50 })
      const moveX = gsap.quickTo(ring, 'x', { duration: 0.32, ease: 'power3' })
      const moveY = gsap.quickTo(ring, 'y', { duration: 0.32, ease: 'power3' })

      let visible = false

      const handleMove = (event: PointerEvent) => {
        if (!visible) {
          visible = true
          gsap.set(ring, { x: event.clientX, y: event.clientY })
          gsap.to(ring, { autoAlpha: 1, duration: 0.2 })
        }

        moveX(event.clientX)
        moveY(event.clientY)

        const hovered = (event.target as Element | null)?.closest?.<HTMLElement>(
          '[data-cursor]',
        )
        setLabel(hovered?.dataset.cursor ?? null)
      }

      const handleLeave = () => {
        visible = false
        gsap.to(ring, { autoAlpha: 0, duration: 0.2 })
        setLabel(null)
      }

      window.addEventListener('pointermove', handleMove, { passive: true })
      document.addEventListener('pointerleave', handleLeave)

      return () => {
        window.removeEventListener('pointermove', handleMove)
        document.removeEventListener('pointerleave', handleLeave)
      }
    },
    { dependencies: [reduceMotion] },
  )

  if (reduceMotion) return null

  return (
    <div
      ref={ringRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center justify-center rounded-full border border-ice text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition-[width,height,background-color,border-color] duration-300 [@media(pointer:fine)]:flex"
      style={
        label
          ? { width: '5rem', height: '5rem', backgroundColor: 'rgb(11 31 83 / 0.82)' }
          : { width: '1.75rem', height: '1.75rem', backgroundColor: 'transparent' }
      }
    >
      {label}
    </div>
  )
}
