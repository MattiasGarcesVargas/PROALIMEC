import { useRef } from 'react'

import type { OurProductsContent } from '@/sections/home-page/types/home-page.types'
import { MOTION_OK, gsap, useGSAP } from '@/shared/utils/gsap'

/**
 * Escena sticky corta: el texto y la percha entran mientras la sección sube, así nunca se ve la
 * pantalla en blanco. Sin animación (movimiento reducido) se ve el estado final.
 */
function OurProductsScene({ content }: { content: OurProductsContent }) {
  const sceneRef = useRef<HTMLElement>(null)

  // Arranca cuando la sección apenas asoma (top 75%); el scroll conduce la línea de tiempo
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top 75%',
              end: 'bottom bottom',
              scrub: 0.5,
            },
          })
          .fromTo('[data-text]', { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.3 }, 0)
          .fromTo('[data-rule]', { scaleY: 0 }, { scaleY: 1, duration: 0.32 }, 0.04)
          .fromTo('[data-rack]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.16 }, 0.08)
          .fromTo('[data-rack]', { x: 160 }, { x: 0, duration: 0.5 }, 0.08)
          .fromTo(
            '[data-caption]',
            { autoAlpha: 0, x: 30 },
            { autoAlpha: 1, x: 0, duration: 0.16 },
            0.5,
          )
          // Pausa final: la escena completa se ve un momento antes de irse
          .to({}, { duration: 0.2 }, 0.66)
      })
    },
    { scope: sceneRef },
  )

  return (
    <section
      id="productos"
      ref={sceneRef}
      className="relative h-[180vh] bg-white motion-reduce:h-auto"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="shell absolute inset-0 flex flex-wrap items-center justify-between gap-[clamp(1rem,4vw,4rem)]">
          <div data-text className="max-w-104 flex-[1_1_16rem]">
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-navy">
              {content.title}
            </h2>

            <div className="mt-10 flex gap-5">
              <span data-rule aria-hidden="true" className="w-px flex-none origin-top bg-navy" />
              <p className="max-w-76 text-sm leading-[1.62] text-pretty text-ink">{content.body}</p>
            </div>
          </div>

          <div className="relative aspect-[1536/1024] w-[min(52vw,44rem)] flex-none">
            <img
              data-rack
              src={content.image.src}
              alt={content.image.alt}
              loading="lazy"
              className="absolute inset-0 size-full object-contain will-change-transform"
            />
            <div data-caption className="absolute right-0 -bottom-13 w-38 text-right">
              <p className="text-[13px]/[1.35] font-bold tracking-[-0.01em] text-ink">
                {content.captionTitle}
              </p>
              <p className="mt-1 text-[11px]/[1.4] font-medium tracking-widest text-muted uppercase">
                {content.captionMeta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProductsScene
