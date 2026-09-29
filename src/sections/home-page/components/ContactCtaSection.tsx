import type { ContactCtaContent } from '@/sections/home-page/types/home-page.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'

// La foto es horizontal (4:3): en escritorio toma más ancho que el texto y se ve completa, sin recorte
function ContactCtaSection({ content }: { content: ContactCtaContent }) {
  return (
    <section id="contacto" className="bg-white py-[clamp(3.5rem,8vw,8rem)]">
      <div className="shell grid items-center gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h2 className="max-w-120 font-display text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.02] font-extrabold tracking-[-0.05em] text-pretty text-navy">
            {content.title}
          </h2>
          <p className="mt-5.5 max-w-128 text-[17px] leading-[1.8] text-pretty text-muted">
            {content.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contacto">{content.primaryLabel}</ButtonLink>
            <ButtonLink to="/productos" variant="outline">
              {content.secondaryLabel}
            </ButtonLink>
          </div>
        </div>

        <div className="aspect-4/3 overflow-hidden bg-black">
          <img
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default ContactCtaSection
