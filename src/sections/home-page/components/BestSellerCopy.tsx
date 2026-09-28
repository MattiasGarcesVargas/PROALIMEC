import type { CSSProperties } from 'react'

import type { BestSeller } from '@/sections/home-page/types/home-page.types'
import ButtonLink from '@/shared/components/ui/ButtonLink'
import { cn } from '@/shared/utils/cn'

interface BestSellerCopyProps {
  item: BestSeller
  side: 'left' | 'right'
  /** Opacidad y desplazamiento que calcula la escena según el scroll */
  style?: CSSProperties
}

function BestSellerCopy({ item, side, style }: BestSellerCopyProps) {
  return (
    <div
      className={cn(
        'absolute bottom-[clamp(1.5rem,7vh,4.5rem)] w-[min(34rem,44vw)]',
        side === 'right' ? 'right-[clamp(1.25rem,5vw,5rem)]' : 'left-[clamp(1.25rem,5vw,5rem)]',
      )}
      style={style}
    >
      <p className="mb-2.5 text-xs/[1.2] font-semibold tracking-eyebrow text-orange uppercase">
        {item.lineLabel} · {item.position}
      </p>

      <h3 className="font-display text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.1] font-bold tracking-[-0.03em] text-white">
        {item.title}
      </h3>

      <p className="mt-3.5 text-[15px] leading-[1.7] text-muted-cold">{item.description}</p>

      <dl className="mt-5.5 divide-y divide-white/16 border-y border-white/16">
        {item.specs.map((spec) => (
          <div key={spec.label} className="flex justify-between gap-4 py-[11px]">
            <dt className="text-[13px] text-muted-cold">{spec.label}</dt>
            <dd
              className={cn(
                'text-[13px]/[1.4] font-medium',
                spec.highlight ? 'text-ice' : 'text-white',
              )}
            >
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>

      <ButtonLink to="/contacto" variant="inverse" className="mt-5.5 min-h-12 px-5.5">
        {item.ctaLabel}
      </ButtonLink>
    </div>
  )
}

export default BestSellerCopy
