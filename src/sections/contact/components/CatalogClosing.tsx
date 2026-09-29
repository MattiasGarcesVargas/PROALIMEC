import type { ContactContent } from '@/sections/contact/types/contact.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'

// Cierre para quien aún no eligió: vuelve al catálogo sobre la mesa de cortes
function CatalogClosing({ content }: { content: ContactContent['closing'] }) {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <img
        src={content.image.src}
        alt=""
        width={content.image.width}
        height={content.image.height}
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover object-right"
      />
      {/* En móvil el texto cruza la foto entera: velo parejo; desde md, degradado hacia la derecha */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-shade/80 md:bg-transparent md:bg-linear-to-r/srgb md:from-shade/95 md:via-shade/70 md:via-45% md:to-shade/10"
      />

      <div className="shell py-[clamp(4.5rem,10vw,8rem)]">
        <h2 className="max-w-md font-display text-section font-extrabold text-balance text-white">
          {content.title}
        </h2>
        <p className="mt-5 max-w-sm text-[17px] leading-[1.7] text-pretty text-white/80">
          {content.description}
        </p>
        <ButtonLink to={content.cta.href} variant="inverse" className="mt-9">
          {content.cta.label}
        </ButtonLink>
      </div>
    </section>
  )
}

export default CatalogClosing
