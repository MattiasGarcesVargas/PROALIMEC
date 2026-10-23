import type { BrandsContent } from '@/sections/home-page/types/home-page.types'
import LogoCarousel from '@/shared/components/ui/LogoCarousel'

// Marcas importadas, debajo de "Nuestros productos" y con su mismo fondo blanco: el carrusel es discreto
// (logos bajos y a una misma altura). Sin padding propio: el aire de arriba lo deja el final de
// "Nuestros productos" y el de abajo, la sección de categorías
function BrandsSection({ content }: { content: BrandsContent }) {
  const [firstLine, accentLine] = content.titleLines

  return (
    <section aria-labelledby="brands-title" className="bg-white">
      <div className="shell">
        <h2 id="brands-title" className="font-display text-subsection font-extrabold text-navy">
          <span className="block">{firstLine}</span>{' '}
          <span className="block text-orange">{accentLine}</span>
        </h2>
        <LogoCarousel
          items={content.logos}
          speed={40}
          logoClassName="h-9 md:h-10"
          className="mt-[clamp(1.25rem,2.5vw,2rem)]"
        />
        <p className="mt-[clamp(1.25rem,2.5vw,2rem)] leading-[1.75] text-pretty text-muted md:text-right">
          {content.description}
        </p>
      </div>
    </section>
  )
}

export default BrandsSection
