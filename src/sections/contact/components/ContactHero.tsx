import { Link } from 'react-router'

import type { ContactContent } from '@/sections/contact/types/contact.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'
import MaskIcon from '@/shared/components/ui/MaskIcon'
import { WHATSAPP_URL } from '@/shared/config/contact'

import PendingNote from './PendingNote'

// Una sola decisión: el titular con la acción de WhatsApp y, al lado, el corte ofrecido a sangre
function ContactHero({ content }: { content: ContactContent['hero'] }) {
  return (
    <section className="relative bg-white lg:min-h-[min(calc(100svh-4rem),52rem)]">
      <div className="shell lg:grid lg:min-h-[inherit] lg:grid-cols-2">
        <div className="flex flex-col justify-center py-[clamp(3rem,8vw,6rem)] lg:pr-[clamp(2rem,5vw,5rem)]">
          <h1 className="font-display text-display font-extrabold text-balance text-navy">
            {content.title}
          </h1>
          <p className="mt-7 max-w-136 text-[17px] leading-[1.75] text-pretty text-muted">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
            {WHATSAPP_URL ? (
              <>
                <ButtonLink to={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MaskIcon src="/assets/images/logos/whatsapp.svg" />
                  Cotizar por WhatsApp
                </ButtonLink>
                <Link
                  to="/productos"
                  className="border-b border-navy/30 pb-1 text-xs/none font-semibold tracking-button text-navy uppercase transition-colors hover:border-navy"
                >
                  Ver el catálogo
                </Link>
              </>
            ) : (
              <>
                <ButtonLink to="/productos">Ver el catálogo</ButtonLink>
                <PendingNote>WhatsApp de cotizaciones por confirmar</PendingNote>
              </>
            )}
          </div>

          {/* Hechos aprobados: ember (no orange) porque es texto pequeño sobre blanco (contraste 5:1) */}
          <ul className="mt-12 grid max-w-136 grid-cols-3 divide-x divide-navy/14 border-t border-navy/14 pt-6">
            {content.facts.map((fact) => (
              <li key={fact.key} className="px-[clamp(0.75rem,2vw,1.5rem)] first:pl-0">
                <span className="block font-display text-[15px] font-extrabold tracking-[-0.01em] text-ember">
                  {fact.key}
                </span>
                <span className="mt-0.5 block text-[13px] text-muted">{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* En escritorio la foto ocupa la mitad derecha hasta el borde; en móvil va debajo */}
      <div className="relative aspect-4/3 overflow-hidden bg-black lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2">
        <img
          src={content.image.src}
          alt={content.image.alt}
          width={content.image.width}
          height={content.image.height}
          fetchPriority="high"
          className="size-full animate-settle object-cover motion-reduce:animate-none"
        />
      </div>
    </section>
  )
}

export default ContactHero
