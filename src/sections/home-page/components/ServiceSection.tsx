import type { ServiceContent } from '@/sections/home-page/types/home-page.types'
import Eyebrow from '@/shared/components/ui/Eyebrow'

function ServiceSection({ content }: { content: ServiceContent }) {
  return (
    <section className="bg-cold py-[clamp(3.5rem,8vw,8rem)]">
      <div className="shell">
        <div className="max-w-160">
          <Eyebrow className="mb-4.5">{content.eyebrow}</Eyebrow>
          <h2 className="font-display text-section font-extrabold text-pretty text-navy">
            {content.title}
          </h2>
          <p className="mt-4.5 leading-[1.75] text-pretty text-muted">{content.intro}</p>
        </div>

        {/* Con 3 columnas, si la última tarjeta queda sola en su fila va a la columna del centro */}
        <div className="mt-[clamp(2.5rem,5vw,4.5rem)] grid gap-[clamp(2rem,4vw,3.5rem)] sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card) => (
            <div
              key={card.title}
              className="border-t border-navy/16 pt-5.5 lg:[&:last-child:nth-child(3n+1)]:col-start-2"
            >
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
