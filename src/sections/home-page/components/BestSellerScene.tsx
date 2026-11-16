import { useRef } from 'react'

import type { BestSeller } from '@/sections/home-page/types/home-page.types'
import { cn } from '@/shared/utils/cn'
import { MOTION_OK, ScrollTrigger, gsap, useGSAP } from '@/shared/utils/gsap'

import BestSellerCopy from './BestSellerCopy'

const CUT_CLASS = 'absolute top-0 w-[min(46vw,58vh)] object-contain md:w-[min(38vw,58vh)]'

/**
 * Escena sticky corta: los dos cortes caen a la vez (pierna a la izquierda, costillar a la derecha)
 * sobre la palabra "Best seller", ya desde que la sección empieza a entrar. Solo cuando los dos ya cayeron del todo, la palabra se desvanece y en el centro aparecen
 * sus descripciones, una sobre otra. Sin animación (movimiento reducido) se ve el estado final.
 */
function BestSellerScene({ items }: { items: BestSeller[] }) {
  const sceneRef = useRef<HTMLElement>(null)

  // El scroll conduce la línea de tiempo: es reversible al subir y `scrub` la suaviza.
  // Arranca cuando el negro ya ocupa el 30 % de la pantalla (top 70%), así los cortes van bajando
  // mientras la sección entra. Las posiciones están en "vh de scroll / 100": la sección mide 170vh,
  // así que hay 70vh de entrada + 70vh fijada = 1.4
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'top 70%',
              end: 'bottom bottom',
              scrub: 0.5,
            },
          })
          // Caen durante la entrada y terminan poco después de que la escena queda fija (0.7)
          .fromTo(
            '[data-cut]',
            { yPercent: -105 },
            { yPercent: 0, ease: 'power2.out', duration: 0.8 },
            0,
          )
          // La palabra espera un respiro con los dos cortes ya quietos y recién ahí se va,
          // para que las descripciones entren con la escena asentada
          .fromTo('[data-word]', { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.08 }, 0.88)
          .fromTo(
            '[data-copy]',
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, ease: 'power2.out', duration: 0.12, stagger: 0.04 },
            0.96,
          )
          .fromTo('[data-hint]', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 1.12)
          // Pausa final corta: las descripciones se leen antes de que la escena se vaya
          .to({}, { duration: 0.23 }, 1.17)

        // El aviso se va poco a poco mientras la escena sale de pantalla. Es otro elemento (el
        // contenedor) para que esta salida y la entrada de arriba no se pisen la misma opacidad
        gsap.fromTo(
          '[data-hint-exit]',
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sceneRef.current,
              start: 'bottom bottom',
              end: 'bottom 45%',
              scrub: true,
            },
          },
        )

        // Las fuentes y fotos de arriba cambian el alto de la página al cargar: sin recalcular,
        // la escena empezaría antes de tiempo y los cortes asomarían al llegar
        const pageSize = new ResizeObserver(() => ScrollTrigger.refresh())
        pageSize.observe(document.body)
        return () => pageSize.disconnect()
      })
    },
    { scope: sceneRef },
  )

  const [left, right] = items

  if (!left || !right) return null

  return (
    <section
      ref={sceneRef}
      aria-label="Lo más pedido del catálogo"
      className="relative h-[170vh] bg-black motion-reduce:h-auto"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div
          data-word
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center motion-reduce:opacity-0"
        >
          <p className="mb-5 text-xs/[1.2] font-semibold tracking-[0.32em] text-ice uppercase">
            Lo más pedido del catálogo
          </p>
          <h2 className="font-display text-[clamp(1.5rem,6.6vw,5.5rem)] leading-none font-extrabold tracking-[0.12em] indent-[0.12em] whitespace-nowrap text-white uppercase">
            Best seller
          </h2>
        </div>

        {/* Los PNG traen margen transparente a los lados: los bordes reales quedan más adentro */}
        <img
          data-cut
          src={left.product.src}
          alt={left.product.alt}
          width={left.product.width}
          height={left.product.height}
          loading="lazy"
          className={cn(CUT_CLASS, 'left-0')}
        />
        <img
          data-cut
          src={right.product.src}
          alt={right.product.alt}
          width={right.product.width}
          height={right.product.height}
          loading="lazy"
          className={cn(CUT_CLASS, 'right-0')}
        />

        {/* En móvil van debajo de los cortes (sobre el aviso); desde md, en el centro y entre los dos */}
        <div className="absolute inset-x-5 bottom-[clamp(6rem,13vh,7.5rem)] divide-y divide-white/16 md:inset-x-auto md:top-1/2 md:bottom-auto md:left-1/2 md:w-[min(22rem,30vw)] md:-translate-x-1/2 md:-translate-y-1/2">
          <BestSellerCopy item={left} side="left" />
          <BestSellerCopy item={right} side="right" />
        </div>

        {/* Avisa que la página sigue. Decorativo: quien usa lector de pantalla no lo necesita */}
        <div
          data-hint-exit
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-[clamp(1rem,3.5vh,2rem)] flex justify-center motion-reduce:hidden"
        >
          <img
            data-hint
            src="/assets/images/tools/sigue-descubriendo.webp"
            alt=""
            width={383}
            height={300}
            className="w-[clamp(5rem,7vw,6.5rem)] animate-nudge"
          />
        </div>
      </div>
    </section>
  )
}

export default BestSellerScene
