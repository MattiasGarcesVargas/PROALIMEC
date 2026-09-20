import { Link } from 'react-router'

import { cn } from '~/shared/lib/cn'

type BrandLogoProps = {
  className?: string
  priority?: boolean
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Link
      to="/"
      aria-label="PROALIMEC, ir al inicio"
      className={cn('block shrink-0', className)}
    >
      <img
        src="/assets/images/logo-horizontal.png"
        alt="PROALIMEC"
        width="2042"
        height="720"
        className="h-auto w-full"
        fetchPriority={priority ? 'high' : undefined}
      />
    </Link>
  )
}
