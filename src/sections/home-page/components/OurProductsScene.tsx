import type { OurProductsContent } from '@/sections/home-page/types/home-page.types'
import { easeOutCubic, range, useScrollScene } from '@/shared/motion/use-scroll-scene'

/**
 * Escena sticky de 340vh: primero entra el texto (4–30 %), luego la línea
 * vertical (10–38 %) y la percha se desliza de derecha a izquierda a partir
 * del 36 %, en un único desplazamiento lateral con easing.
 */
function OurProductsScene({ content }: { content: OurProductsContent }) {
  const { ref, progress } = useScrollScene<HTMLElement>()

  const text = easeOutCubic(range(progress, 0.04, 0.3))
  const rule = easeOutCubic(range(progress, 0.1, 0.38))
  const imageIn = easeOutCubic(range(progress, 0.36, 0.5))
  const slide = easeOutCubic(range(progress, 0.36, 0.86))
  const caption = easeOutCubic(range(progress, 0.82, 0.98))

  return (
    <section id="productos" ref={ref} className="relative h-[340vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="shell absolute inset-0 flex flex-wrap items-center justify-between gap-[clamp(1rem,4vw,4rem)]">
          <div
            className="max-w-104 flex-[1_1_16rem]"
            style={{ opacity: text, transform: `translateX(${-40 * (1 - text)}px)` }}
          >
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] font-extrabold tracking-[-0.045em] text-navy">
              {content.title}
            </h2>

            <div className="mt-10 flex gap-5">
              <span
                aria-hidden="true"
                className="w-px flex-none origin-top bg-navy"
                style={{ transform: `scaleY(${rule})` }}
              />
              <p className="max-w-76 text-sm leading-[1.62] text-pretty text-ink">{content.body}</p>
            </div>
          </div>

          <div className="relative aspect-[1536/1024] w-[min(52vw,44rem)] flex-none">
            <img
              src={content.image.src}
              alt={content.image.alt}
              loading="lazy"
              className="absolute inset-0 size-full object-contain will-change-transform"
              style={{ opacity: imageIn, transform: `translateX(${160 * (1 - slide)}px)` }}
            />
            <div
              className="absolute right-0 -bottom-13 w-38 text-right"
              style={{ opacity: caption, transform: `translateX(${30 * (1 - caption)}px)` }}
            >
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
