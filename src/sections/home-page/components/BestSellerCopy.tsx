import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

import type { BestSeller } from '@/sections/home-page/types/home-page.types'
import { cutInquiryLink } from '@/shared/config/contact'
import { cn } from '@/shared/utils/cn'

interface BestSellerCopyProps {
  item: BestSeller
  /** Lado de la escena donde cuelga el corte: el texto se alinea y la flecha apunta hacia él */
  side: 'left' | 'right'
}

// En móvil los cortes quedan arriba del texto: la flecha se inclina 45° para apuntar hacia ellos
function BestSellerCopy({ item, side }: BestSellerCopyProps) {
  const isLeft = side === 'left'
  const Arrow = isLeft ? ArrowLeft : ArrowRight

  return (
    <div data-copy className={cn('py-4 md:py-6', !isLeft && 'text-right')}>
      <h3
        className={cn(
          'flex items-center gap-2.5 font-display text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.15] font-bold tracking-[-0.03em] text-white',
          !isLeft && 'flex-row-reverse',
        )}
      >
        <Arrow
          aria-hidden="true"
          className={cn(
            'size-5 shrink-0 text-orange',
            isLeft ? 'max-md:rotate-45' : 'max-md:-rotate-45',
          )}
        />
        {item.title}
      </h3>

      <p className="mt-2.5 text-[15px]/[1.65] text-pretty text-muted-cold">{item.description}</p>

      <Link
        {...cutInquiryLink(item.title)}
        className="mt-3.5 inline-flex border-b border-white/30 pb-1 text-xs/none font-semibold tracking-button text-white uppercase transition-colors hover:border-white"
      >
        {item.ctaLabel}
      </Link>
    </div>
  )
}

export default BestSellerCopy
