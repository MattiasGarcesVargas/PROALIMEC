import { useHangingSceneMotion } from '@/sections/home-page/hooks/use-hanging-scene-motion'
import type { BestSeller } from '@/sections/home-page/types/home-page.types'
import { useScrollScene } from '@/shared/motion/use-scroll-scene'

import BestSellerCopy from './BestSellerCopy'

/**
 * Escena sticky de 646vh (1.9 × la escena base de 340vh): dos best sellers que
 * caen desde el gancho. El rótulo "Best seller" termina de entrar antes de que
 * baje el corte 01; el 02 entra con el gancho al ras del borde superior.
 */
function BestSellerScene({ items }: { items: BestSeller[] }) {
  const { ref, progress } = useScrollScene<HTMLElement>()
  const motion = useHangingSceneMotion(progress)
  const [first, second] = items

  if (!first || !second) return null

  return (
    <section
      ref={ref}
      aria-label="Lo más pedido del catálogo"
      className="relative h-[646vh] bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <p
          className="absolute inset-x-0 top-[clamp(1.5rem,5vh,4rem)] text-center text-xs/[1.2] font-semibold tracking-[0.32em] text-ice uppercase"
          style={motion.label}
        >
          Lo más pedido del catálogo
        </p>

        <h2
          className="absolute inset-x-0 top-[34%] -translate-y-1/2 text-center font-display text-[clamp(1.5rem,6.6vw,5.5rem)] leading-none font-extrabold tracking-[0.12em] indent-[0.12em] whitespace-nowrap text-white uppercase"
          style={motion.word}
        >
          Best seller
        </h2>

        {/* Slot A: pierna de cerdo suspendida */}
        <div className="absolute inset-0" style={motion.slotA}>
          <img
            src={first.product.src}
            alt={first.product.alt}
            className="absolute top-[-1.5vh] left-[clamp(0px,3vw,6vw)] w-[min(42vw,58vh)] object-contain"
            style={motion.hookA}
          />
          <BestSellerCopy item={first} side="right" style={motion.copyA} />
        </div>

        {/* Slot B: costillar suspendido, gancho al ras del borde superior */}
        <div className="absolute inset-0" style={motion.slotB}>
          <img
            src={second.product.src}
            alt={second.product.alt}
            className="absolute top-0 right-[clamp(3vw,9vw,14vw)] w-[min(46vw,64vh)] object-contain"
            style={motion.hookB}
          />
          <BestSellerCopy item={second} side="left" style={motion.copyB} />
        </div>
      </div>
    </section>
  )
}

export default BestSellerScene
