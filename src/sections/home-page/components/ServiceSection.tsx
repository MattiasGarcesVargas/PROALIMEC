import type { ServiceContent } from '@/sections/home-page/types/home-page.types'
import Eyebrow from '@/shared/components/ui/Eyebrow'
import { useRevealOnScroll } from '@/shared/motion/use-reveal-on-scroll'
import { cn } from '@/shared/utils/cn'

// Mosaico de 4 fotos: la fachada manda (alta, a la izquierda) y las oficinas la acompañan.
// En móvil la fachada va arriba a todo el ancho y las salas quedan lado a lado
const TILE_CLASS = [
  'col-span-2 aspect-4/3 lg:row-span-2 lg:aspect-auto',
  'col-span-2 aspect-16/9 lg:aspect-auto',
  'aspect-square sm:aspect-4/3 lg:aspect-auto',
  'aspect-square sm:aspect-4/3 lg:aspect-auto',
]

function ServiceSection({ content }: { content: ServiceContent }) {
  const { ref, visible } = useRevealOnScroll<HTMLDivElement>(0.15)

  return (
    <section className="bg-cold py-[clamp(3.5rem,8vw,8rem)]">
      <div className="shell">
        <div className="grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-4.5 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow className="mb-4.5">{content.eyebrow}</Eyebrow>
            <h2 className="font-display text-section font-extrabold text-pretty text-navy">
              {content.title}
            </h2>
          </div>
          <p className="max-w-120 leading-[1.75] text-pretty text-muted">{content.intro}</p>
        </div>

        <div
          ref={ref}
          className="mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-2 gap-2 sm:gap-3 lg:h-[clamp(30rem,46vw,40rem)] lg:grid-cols-4 lg:grid-rows-2"
        >
          {content.gallery.map((photo, index) => (
            <figure
              key={photo.src}
              className={cn(
                'group relative overflow-hidden bg-navy transition-[opacity,translate] duration-800 ease-out-expo',
                TILE_CLASS[index],
                !visible && 'translate-y-6 opacity-0',
              )}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-[scale] duration-900 ease-out-expo group-hover:scale-104 motion-reduce:transition-none"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t/srgb from-shade/75 to-transparent px-[clamp(0.875rem,2vw,1.5rem)] pt-12 pb-[clamp(0.75rem,1.6vw,1.25rem)] text-[11px]/none font-semibold tracking-eyebrow text-white uppercase">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-[clamp(2rem,3vw,2.5rem)] sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card) => (
            <div key={card.title} className="border-t border-navy/16 pt-5.5">
              <h3 className="font-display text-[1.25rem] font-bold tracking-[-0.025em] text-navy">
                {card.title}
              </h3>
              <p className="mt-3 max-w-96 text-[15px] leading-[1.7] text-muted">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
