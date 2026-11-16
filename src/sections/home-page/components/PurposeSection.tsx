import { useRef } from 'react'

import type { PurposeStatement } from '@/sections/home-page/types/home-page.types'
import { cn } from '@/shared/utils/cn'
import { MOTION_OK, SplitText, gsap, useGSAP } from '@/shared/utils/gsap'

/**
 * Misión y visión: dos bandas a ancho completo, cada una con una foto real de la empresa bajo
 * un velo navy. La primera pone el título a la izquierda y la segunda a la derecha, así se leen
 * como una pareja y no como dos bloques repetidos.
 *
 * Movimiento (solo si el usuario no pidió reducirlo):
 * - la foto se abre como una ventana (clip-path) mientras la banda entra y luego se desplaza
 *   un poco más lento que la página (parallax);
 * - el título aparece letra por letra saliendo de un desenfoque, la línea naranja se dibuja
 *   y el texto sube por líneas desde una máscara; al final entran los valores.
 * Sin animación se ve el estado final, con el mismo texto.
 */
function PurposeSection({ items }: { items: PurposeStatement[] }) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(MOTION_OK, () => {
        const bands = gsap.utils.toArray<HTMLElement>('[data-band]')

        bands.forEach((band) => {
          const q = gsap.utils.selector(band)
          const media = q('[data-media]')
          const photo = q('[data-photo]')
          const title = q('[data-title]')[0]
          const statement = q('[data-statement]')[0]

          // La foto se abre desde un marco interior hasta llenar la banda
          gsap.fromTo(
            media,
            { clipPath: 'inset(9% 7% 9% 7%)' },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              ease: 'none',
              scrollTrigger: { trigger: band, start: 'top bottom', end: 'top 20%', scrub: 0.6 },
            },
          )

          // Parallax: la foto recorre un poco menos que la página
          gsap.fromTo(
            photo,
            { yPercent: -9 },
            {
              yPercent: 9,
              ease: 'none',
              scrollTrigger: { trigger: band, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          )

          // El texto entra una sola vez, cuando la banda ya ocupa buena parte de la pantalla
          const reveal = () => ({ trigger: band, start: 'top 58%', once: true })

          if (title) {
            SplitText.create(title, {
              type: 'chars',
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.chars, {
                  yPercent: 70,
                  autoAlpha: 0,
                  filter: 'blur(12px)',
                  duration: 1.1,
                  ease: 'expo.out',
                  stagger: 0.045,
                  scrollTrigger: reveal(),
                }),
            })
          }

          gsap.from(q('[data-rule]'), {
            scaleX: 0,
            duration: 1.2,
            ease: 'expo.out',
            delay: 0.3,
            scrollTrigger: reveal(),
          })

          if (statement) {
            SplitText.create(statement, {
              type: 'lines',
              mask: 'lines',
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.lines, {
                  yPercent: 105,
                  duration: 1.15,
                  ease: 'expo.out',
                  stagger: 0.08,
                  delay: 0.2,
                  scrollTrigger: reveal(),
                }),
            })
          }

          gsap.from(q('[data-value]'), {
            autoAlpha: 0,
            y: 14,
            duration: 0.9,
            ease: 'expo.out',
            stagger: 0.09,
            delay: 0.65,
            scrollTrigger: reveal(),
          })
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} id="mision-vision" aria-label="Misión y visión" className="bg-white">
      {items.map((item, index) => {
        const mirrored = index % 2 === 1

        return (
          <article
            key={item.id}
            data-band
            aria-labelledby={`${item.id}-title`}
            className="relative isolate flex min-h-[clamp(36rem,92vh,54rem)] items-center overflow-hidden py-[clamp(5rem,10vw,8rem)]"
          >
            {/* Fondo: foto en blanco y negro teñida de navy, más oscura del lado del texto */}
            <div data-media aria-hidden="true" className="absolute inset-0 -z-10 bg-navy">
              <img
                data-photo
                src={item.image.src}
                alt=""
                width={item.image.width}
                height={item.image.height}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 size-full scale-[1.22] object-cover grayscale will-change-transform"
              />
              <div className="absolute inset-0 bg-navy/85 mix-blend-multiply" />
              <div
                className={cn(
                  'absolute inset-0 from-shade/60 via-shade/15 to-transparent',
                  mirrored ? 'bg-linear-to-l' : 'bg-linear-to-r',
                )}
              />
            </div>

            <div className="shell grid gap-y-[clamp(2rem,4vw,3rem)] lg:grid-cols-12 lg:items-center lg:gap-x-8">
              <div
                className={cn(
                  'lg:col-span-5',
                  mirrored && 'lg:col-start-8 lg:row-start-1 lg:text-right',
                )}
              >
                <h2
                  id={`${item.id}-title`}
                  data-title
                  className="font-display text-[clamp(3.25rem,8.4vw,6rem)] leading-[1.02] font-extrabold tracking-[-0.04em] text-white"
                >
                  {item.title}
                </h2>
                <span
                  data-rule
                  aria-hidden="true"
                  className={cn(
                    'mt-[clamp(1.25rem,2.4vw,2rem)] block h-0.5 w-16 bg-orange',
                    mirrored ? 'origin-right lg:ml-auto' : 'origin-left',
                  )}
                />
              </div>

              <div
                className={cn(
                  'lg:col-span-6 lg:col-start-7',
                  mirrored && 'lg:col-start-1 lg:row-start-1',
                )}
              >
                <p
                  data-statement
                  className="max-w-[36rem] text-[clamp(1.125rem,1.65vw,1.4rem)] leading-[1.6] text-pretty text-white"
                >
                  {item.statement}
                </p>

                <ul className="mt-[clamp(1.75rem,3vw,2.5rem)] flex max-w-[36rem] flex-wrap border-t border-white/22 pt-5">
                  {item.values.map((value, valueIndex) => (
                    <li
                      key={value}
                      data-value
                      className={cn(
                        'text-xs/none font-semibold tracking-[0.16em] text-frost uppercase',
                        valueIndex > 0 && 'ml-5 border-l border-white/30 pl-5',
                      )}
                    >
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default PurposeSection
