import { Link } from 'react-router'

import type {
  CategoriesIntroContent,
  HomeCategory,
} from '@/sections/home-page/types/home-page.types'
import Eyebrow from '@/shared/components/ui/Eyebrow'

interface CategoriesSectionProps {
  intro: CategoriesIntroContent
  categories: HomeCategory[]
}

// Filas de categoría (cerdo / res): al pasar el mouse aparece el banner de la línea
function CategoriesSection({ intro, categories }: CategoriesSectionProps) {
  return (
    <section className="bg-white py-[clamp(3rem,7vw,7rem)]">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-4.5">{intro.eyebrow}</Eyebrow>
            <h2 className="max-w-96 font-display text-section font-extrabold text-navy">
              {intro.title}
            </h2>
          </div>
          <p className="max-w-104 leading-[1.7] text-pretty text-muted">{intro.body}</p>
        </div>

        <ul className="mt-[clamp(2.5rem,5vw,4rem)] border-t border-navy/14">
          {categories.map((category) => (
            <li
              key={category.id}
              className="group relative overflow-hidden border-b border-navy/14"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 scale-108 bg-cover bg-right opacity-0 transition-[opacity,scale] duration-[650ms,1100ms] ease-out-expo group-hover:scale-100 group-hover:opacity-100"
                style={{ backgroundImage: `url('${category.banner.src}')` }}
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r/srgb from-shade/92 via-shade/74 via-48% to-shade/34 opacity-0 transition-opacity duration-650 ease-out-expo group-hover:opacity-100"
              />

              <Link
                to={`/productos?linea=${category.id}`}
                className="relative flex items-baseline gap-[clamp(1rem,3vw,3rem)] px-[clamp(0.75rem,1.6vw,1.5rem)] py-[clamp(1.4rem,3vw,2.6rem)] transition-[padding-left] duration-450 ease-out-expo group-hover:pl-[clamp(1.5rem,2.8vw,2.4rem)]"
              >
                <span className="flex-none text-xs/none font-medium tracking-[0.16em] text-muted transition-colors duration-500 ease-in-out group-hover:text-white/70">
                  {category.index}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.1] font-bold tracking-[-0.04em] text-navy transition-colors duration-500 ease-in-out group-hover:text-white">
                    {category.title}
                  </span>
                  <span className="mt-1.5 block max-w-120 text-[15px] leading-[1.65] text-muted transition-colors duration-500 ease-in-out group-hover:text-white/82">
                    {category.description}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="flex-none text-[1.25rem] text-orange transition-[translate] duration-500 ease-out-expo group-hover:translate-x-1.5"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoriesSection
