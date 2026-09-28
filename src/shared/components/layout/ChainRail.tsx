import { useRef } from 'react'

import { MOTION_OK, gsap, useGSAP } from '@/shared/utils/gsap'

// Progreso de scroll dibujado como la cadena de frío de la marca: el riel se
// llena hacia abajo mientras el nodo recorre su borde
function ChainRail() {
  const railRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        const scrollTrigger = {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.4,
        }
        gsap.fromTo('[data-chain-fill]', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger })
        gsap.fromTo(
          '[data-chain-node]',
          { top: '0%' },
          { top: '100%', ease: 'none', scrollTrigger },
        )
      })
    },
    { scope: railRef },
  )

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-[clamp(0.5rem,1.6vw,1.5rem)] z-40 hidden w-px bg-ice/22 md:block"
    >
      {/* transform (no scale-y-0): GSAP anima transform y la utilidad usaría la propiedad scale */}
      <span
        data-chain-fill
        className="absolute inset-x-0 top-0 h-full origin-top bg-linear-to-b/srgb from-navy via-ice via-55% to-frost [transform:scaleY(0)]"
      />
      <span
        data-chain-node
        className="absolute top-0 left-1/2 -ml-1 size-2 bg-ice shadow-[0_0_0.75rem_rgb(99_200_242/0.9)]"
      />
    </div>
  )
}

export default ChainRail
