import { useEffect, useRef, useState } from 'react'

import { cn } from '@/shared/utils/cn'

/** Tiempo sin gestos para considerar que el usuario soltó el trackpad */
const GESTURE_IDLE_MS = 80
/** Qué tan rápido la inercia vuelve a la velocidad normal (más alto = más lento) */
const RETURN_TIME_MS = 700
/** Velocidad máxima de la inercia, en px/s */
const MAX_VELOCITY = 3000

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value))

// Mantiene la posición dentro de un set de logos en ambas direcciones, para que el loop no se corte
const wrap = (value: number, width: number) => {
  let next = value
  while (next <= -width) next += width
  while (next > 0) next -= width
  return next
}

export interface CarouselLogoItem {
  id: string
  src: string
  alt: string
  width: number
  height: number
}

interface LogoCarouselProps {
  items: CarouselLogoItem[]
  /** Velocidad en px por segundo */
  speed?: number
  /** Clase `from-*` del color del fondo, para los desvanecidos de los bordes */
  fadeClassName?: string
  /** Alto de los logos: todos comparten la misma escala */
  logoClassName?: string
  className?: string
}

// Carrusel infinito de logos, igual al LogoCarousel de pulsocont_web: repite el set las veces
// necesarias para cubrir el ancho, avanza a velocidad constante y se pausa fuera de pantalla.
// Además responde al desplazamiento lateral del trackpad, con inercia al soltar.
// Aquí sin motion/react: la posición se escribe directo en el transform en cada frame
function LogoCarousel({
  items,
  speed = 40,
  fadeClassName = 'from-white',
  logoClassName = 'h-10',
  className,
}: LogoCarouselProps) {
  const [repeatCount, setRepeatCount] = useState(2)
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const singleSetRef = useRef<HTMLDivElement>(null)
  const trackWidth = useRef(0)
  const x = useRef(0)
  // Velocidad actual en px/s (negativa = hacia la izquierda) y momento del último gesto lateral
  const velocity = useRef(-speed)
  const lastWheelAt = useRef(0)
  const isInView = useRef(false)

  const moveTo = (next: number) => {
    x.current = next
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${next}px, 0, 0)`
  }

  useEffect(() => {
    const container = containerRef.current
    const singleSet = singleSetRef.current
    if (items.length === 0 || !container || !singleSet) {
      trackWidth.current = 0
      return
    }

    const updateMeasurements = () => {
      const baseWidth = singleSet.scrollWidth || 1
      trackWidth.current = baseWidth
      const nextRepeatCount = Math.max(2, Math.ceil((container.clientWidth * 2) / baseWidth))
      setRepeatCount((current) => (current === nextRepeatCount ? current : nextRepeatCount))
    }

    const resizeObserver = new ResizeObserver(updateMeasurements)
    resizeObserver.observe(container)
    resizeObserver.observe(singleSet)
    updateMeasurements()

    return () => resizeObserver.disconnect()
  }, [items])

  // Se pausa cuando sale de pantalla (basta con que se vea un 20 %)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = Boolean(entry?.isIntersecting)
      },
      { threshold: 0.2 },
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Desplazamiento lateral con el trackpad: mientras dura el gesto, el carrusel sigue al dedo
  // (velocidad y dirección las decide el usuario). El scroll vertical de la página no se toca.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY) || trackWidth.current === 0) return
      event.preventDefault()

      const now = performance.now()
      const elapsed = Math.max(now - lastWheelAt.current, 8)
      lastWheelAt.current = now

      moveTo(wrap(x.current - event.deltaX, trackWidth.current))
      // Velocidad del gesto, suavizada; con un tope para que un golpe fuerte no se dispare
      const gestureVelocity = clamp((-event.deltaX / elapsed) * 1000, MAX_VELOCITY)
      velocity.current = velocity.current * 0.4 + gestureVelocity * 0.6
    }

    // passive: false para poder evitar que el navegador use el gesto (por ejemplo, "atrás")
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let previous = performance.now()

    const tick = (now: number) => {
      const delta = now - previous
      previous = now
      frame = requestAnimationFrame(tick)

      if (trackWidth.current === 0) return
      // Durante el gesto la posición la mueve el trackpad (mismo reloj que el evento wheel)
      if (now - lastWheelAt.current < GESTURE_IDLE_MS) return

      const cruise = reduceMotion.matches ? 0 : -speed
      if (!isInView.current && velocity.current === cruise) return

      // Al soltar, la inercia del gesto se desacelera hasta volver a la velocidad normal
      const ease = 1 - Math.exp(-delta / RETURN_TIME_MS)
      velocity.current += (cruise - velocity.current) * ease
      if (Math.abs(velocity.current - cruise) < 0.5) velocity.current = cruise

      moveTo(wrap(x.current + (delta / 1000) * velocity.current, trackWidth.current))
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [speed])

  return (
    <div ref={containerRef} className={cn('relative flex w-full overflow-hidden py-4', className)}>
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r to-transparent',
          fadeClassName,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l to-transparent',
          fadeClassName,
        )}
      />
      <div
        ref={trackRef}
        className="flex w-max shrink-0 items-center whitespace-nowrap will-change-transform"
      >
        {Array.from({ length: repeatCount }, (_, setIndex) => (
          <div
            key={setIndex}
            ref={setIndex === 0 ? singleSetRef : null}
            // Las copias solo completan el loop: los lectores de pantalla leen el primer set
            aria-hidden={setIndex === 0 ? undefined : true}
            className="flex shrink-0 items-center gap-16 pr-16"
          >
            {items.map((logo) => (
              <img
                key={`${logo.id}-${setIndex}`}
                src={logo.src}
                alt={setIndex === 0 ? logo.alt : ''}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                decoding="async"
                draggable={false}
                className={cn(
                  'w-auto shrink-0 object-contain transition-transform duration-200 ease-out hover:scale-108',
                  logoClassName,
                )}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel
