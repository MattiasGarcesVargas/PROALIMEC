import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// Cortina blanca entre rutas: aparece de golpe y se desvanece en 260 ms
function PageTransition() {
  const { pathname } = useLocation()
  const curtainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const curtain = curtainRef.current
    if (!curtain) return

    curtain.style.opacity = '1'
    const frame = requestAnimationFrame(() => {
      curtain.style.opacity = '0'
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-200 bg-white opacity-0 transition-opacity duration-260 ease-standard"
    />
  )
}

export default PageTransition
