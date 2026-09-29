import { Truck } from 'lucide-react'
import { useRef } from 'react'

import type { ColdChainContent } from '@/sections/home-page/types/home-page.types'
import Eyebrow from '@/shared/components/ui/Eyebrow'
import { useRevealOnScroll } from '@/shared/motion/use-reveal-on-scroll'
import { cn } from '@/shared/utils/cn'
import { MOTION_OK, gsap, useGSAP } from '@/shared/utils/gsap'

function ColdChainSection({ content }: { content: ColdChainContent }) {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()
  const chainRef = useRef<HTMLDivElement>(null)

  // El camión recorre la línea con el scroll: parte del paso 1, llega al 2 a mitad de la
  // sección y al 3 hacia el final, con una pausa breve en cada punto
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(`${MOTION_OK} and (min-width: 768px)`, () => {
        const chain = chainRef.current
        const dots = gsap.utils.toArray<HTMLElement>('[data-step-dot]')
        if (!chain || dots.length < 3) return

        // Distancia de cada punto al primero, medida en vivo (se recalcula al cambiar el tamaño)
        const offsetTo = (index: number) => () =>
          dots[index].getBoundingClientRect().left - dots[0].getBoundingClientRect().left

        gsap
          .timeline({
            defaults: { ease: 'power2.inOut' },
            scrollTrigger: {
              trigger: chain,
              start: 'top 85%',
              end: 'bottom 40%',
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          })
          .set('[data-truck]', { x: 0 })
          .to({}, { duration: 0.25 })
          .to('[data-truck]', { x: offsetTo(1), duration: 1 })
          .to({}, { duration: 0.25 })
          .to('[data-truck]', { x: offsetTo(2), duration: 1 })
          .to({}, { duration: 0.25 })
      })
    },
    { scope: chainRef },
  )

  return (
    <section ref={ref} className="overflow-hidden bg-black py-[clamp(3.5rem,8vw,8rem)] text-white">
      <div className="shell">
        <div className="max-w-160">
          <Eyebrow className="mb-4.5 text-ice">{content.eyebrow}</Eyebrow>
          <h2 className="font-display text-section font-extrabold">{content.title}</h2>
          <p className="mt-4.5 leading-[1.75] text-pretty text-muted-cold">{content.intro}</p>
        </div>

        <div ref={chainRef} className="relative mt-[clamp(2.5rem,6vw,5rem)]">
          {/* Camión: apoyado sobre la línea y centrado en el punto del paso 1 */}
          <span
            data-truck
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-0 z-10 hidden -translate-x-1/2 text-ice drop-shadow-[0_0_10px_rgb(99_200_242/0.45)] md:block"
          >
            <Truck className="size-7" strokeWidth={1.5} />
          </span>
          {/* La línea de la cadena se dibuja de izquierda a derecha al entrar */}
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-x-0 top-0 h-px origin-left bg-linear-to-r/srgb from-ice to-ice/25 transition-transform duration-1200 ease-out-expo',
              !visible && 'scale-x-0',
            )}
          />
          {/* Sin tarjetas: los pasos se separan con una línea divisoria (vertical desde md) */}
          <ol className="grid divide-y divide-white/12 md:grid-cols-3 md:divide-x md:divide-y-0">
            {content.steps.map((step, index) => (
              <li
                key={step.step}
                className={cn(
                  'group relative pt-8 transition-[opacity,translate] duration-700 ease-out-expo',
                  !visible && 'translate-y-6 opacity-0',
                )}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                {/* Punto centrado donde nace la línea divisoria del paso */}
                <span
                  data-step-dot
                  aria-hidden="true"
                  className="absolute -top-[5px] -left-[5.5px] size-[11px] rounded-full bg-ice"
                />

                {/* Solo con el mouse encima: la foto aparece detrás del texto y su propio borde marca el paso.
                    No es clicable ni enfocable, así que al salir el mouse siempre se desvanece */}
                <div className="relative isolate overflow-hidden p-[clamp(1.25rem,2.5vw,2rem)] md:min-h-52">
                  <img
                    src={step.image.src}
                    alt=""
                    width={step.image.width}
                    height={step.image.height}
                    loading="lazy"
                    className="absolute inset-0 -z-10 size-full scale-105 object-cover opacity-0 transition-[opacity,scale] duration-700 ease-out-expo group-hover:scale-100 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-b/srgb from-shade/90 via-shade/60 to-shade/20 opacity-0 transition-opacity duration-700 ease-out-expo group-hover:opacity-100"
                  />

                  <p className="text-xs/[1.2] font-semibold tracking-[0.22em] text-ice uppercase">
                    {step.step}
                  </p>
                  <h3 className="mt-3.5 font-display text-[1.375rem] font-bold tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-88 text-[15px] leading-[1.7] text-muted-cold transition-colors duration-500 group-hover:text-white/85">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Cada dato centrado; la descripción justificada con su última línea centrada bajo el título */}
        <dl className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-fit-52 gap-[clamp(1.5rem,3vw,3rem)]">
          {content.stats.map((stat) => (
            <div key={stat.value} className="border-t border-white/18 pt-5.5 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-none font-extrabold tracking-[-0.05em] text-orange">
                  {stat.value}
                </span>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-4 block text-justify text-[15px] leading-[1.65] text-muted-cold [text-align-last:center]"
                  // Ancho según el largo del texto: parte en dos líneas parejas y el justificado no abre huecos
                  style={{ maxWidth: `${Math.ceil(stat.label.length * 0.45)}ch` }}
                >
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default ColdChainSection
