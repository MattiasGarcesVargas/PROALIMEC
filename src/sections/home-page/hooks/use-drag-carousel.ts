import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

// Distancia mínima (px) para tomar el gesto como arrastre y no como clic en la tarjeta
const DRAG_THRESHOLD = 6
// La barra de progreso nunca es más corta que esto, aunque haya muchas tarjetas
const MIN_THUMB = 12

export interface CarouselProgress {
  /** Ancho del tramo visible, en % de la barra */
  width: number
  /** Desplazamiento del tramo, en % de su propio ancho (para translateX) */
  offset: number
}

/**
 * Carrusel horizontal con scroll-snap:
 * - arrastre con el mouse (en táctil manda el scroll nativo),
 * - flechas que avanzan de a una tarjeta,
 * - progreso del recorrido para la barra inferior.
 */
export function useDragCarousel(trackRef: RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState<CarouselProgress>({ width: 100, offset: 0 })
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 })

  const measure = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const max = track.scrollWidth - track.clientWidth
    const width = Math.min(100, Math.max(MIN_THUMB, (track.clientWidth / track.scrollWidth) * 100))
    const ratio = max > 0 ? track.scrollLeft / max : 0
    setProgress({ width, offset: width < 100 ? (ratio * (100 - width) * 100) / width : 0 })
  }, [trackRef])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    track.addEventListener('scroll', measure, { passive: true })
    return () => {
      observer.disconnect()
      track.removeEventListener('scroll', measure)
    }
  }, [trackRef, measure])

  // Avanza el ancho de una tarjeta más el hueco entre ellas
  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current
      const card = track?.firstElementChild
      if (!track || !card) return

      const gap = parseFloat(getComputedStyle(track).columnGap) || 0
      // scrollLeft (no scrollBy): el scroll-smooth del CSS ya anima el desplazamiento
      track.scrollLeft += direction * (card.getBoundingClientRect().width + gap)
    },
    [trackRef],
  )

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || event.pointerType !== 'mouse') return

    drag.current = { active: true, startX: event.clientX, startScroll: track.scrollLeft, moved: 0 }
    // Sin snap ni scroll suave mientras se arrastra, para que la pista siga al puntero
    track.style.scrollSnapType = 'none'
    track.style.scrollBehavior = 'auto'
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current
    if (!track || !drag.current.active) return

    const delta = event.clientX - drag.current.startX
    drag.current.moved = Math.max(drag.current.moved, Math.abs(delta))
    track.scrollLeft = drag.current.startScroll - delta
  }

  const endDrag = () => {
    const track = trackRef.current
    if (!track || !drag.current.active) return

    drag.current.active = false
    track.style.scrollSnapType = ''
    track.style.scrollBehavior = ''
  }

  // El clic que cierra un arrastre no debe abrir la ficha de la tarjeta
  const onClickCapture = (event: React.MouseEvent) => {
    if (drag.current.moved > DRAG_THRESHOLD) {
      event.preventDefault()
      event.stopPropagation()
      drag.current.moved = 0
    }
  }

  // Vuelta al inicio sin animación: al filtrar, la pista cambia de contenido de golpe
  const scrollToStart = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    track.style.scrollBehavior = 'auto'
    track.scrollLeft = 0
    track.style.scrollBehavior = ''
  }, [trackRef])

  return {
    progress,
    measure,
    scrollToStart,
    prev: () => scrollByCard(-1),
    next: () => scrollByCard(1),
    trackHandlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel: endDrag,
      onPointerLeave: endDrag,
      onClickCapture,
    },
  }
}
