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
        src="/images/logo.png"
        alt="PROALIMEC"
        width="1536"
        height="924"
        className="h-auto w-full"
        fetchPriority={priority ? 'high' : undefined}
      />
    </Link>
  )
}
