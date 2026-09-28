import { Fragment } from 'react'

import type { HomeHeroContent } from '@/sections/home-page/types/home-page.types'
import Eyebrow from '@/shared/components/ui/Eyebrow'
import { useRevealOnScroll } from '@/shared/motion/use-reveal-on-scroll'
import { cn } from '@/shared/utils/cn'

function HeroSection({ content }: { content: HomeHeroContent }) {
  const { ref, visible } = useRevealOnScroll<HTMLElement>(0.1)

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden bg-white">
      <div className="shell grid grid-fit-80 items-center gap-[clamp(2rem,5vw,5rem)] pt-[clamp(2.5rem,6vw,6rem)] pb-[clamp(3.5rem,7vw,7rem)]">
        <div>
          <Eyebrow
            className={cn(
              'mb-[clamp(1.5rem,3vw,2.5rem)] transition-[opacity,translate] duration-700 ease-out-expo',
              !visible && 'translate-y-4.5 opacity-0',
            )}
          >
            {content.eyebrow}
          </Eyebrow>

          <h1 className="font-display text-display font-extrabold text-navy [word-spacing:-0.1em]">
            {content.titleLines.map((lineText, index) => (
              // Cada línea sube desde detrás de su propio borde (máscara).
              // El espacio entre líneas no se ve, pero separa las palabras al leer o copiar el título
              <Fragment key={lineText}>
                {index > 0 && ' '}
                <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <span
                    className={cn(
                      'block transition-[translate] duration-950 ease-out-expo',
                      index === content.accentLineIndex && 'text-orange',
                      !visible && 'translate-y-full',
                    )}
                    style={{ transitionDelay: `${index * 0.08}s` }}
                  >
                    {lineText}
                  </span>
                </span>
              </Fragment>
            ))}
          </h1>

          <p
            className={cn(
              'mt-[clamp(1.75rem,3.5vw,2.5rem)] max-w-136 text-[17px] leading-[1.75] text-pretty text-muted transition-[opacity,translate] delay-160 duration-800 ease-out-expo',
              !visible && 'translate-y-5.5 opacity-0',
            )}
          >
            {content.intro}
          </p>
        </div>

        <div className="relative h-[clamp(22rem,60vh,38rem)] overflow-hidden">
          <img
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            fetchPriority="high"
            className="absolute inset-0 size-full object-contain p-[clamp(1rem,3vw,2.5rem)]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
