import type { ComponentProps } from 'react'

import { cn } from '@/shared/utils/cn'

interface EyebrowProps extends ComponentProps<'p'> {
  /** Repite la línea a la derecha, para títulos centrados */
  centered?: boolean
}

// Etiqueta sobre los títulos: línea corta + texto naranja en mayúsculas
function Eyebrow({ centered = false, className, children, ...props }: EyebrowProps) {
  const line = <span aria-hidden="true" className="h-px w-9.5 bg-current" />

  return (
    <p
      className={cn(
        'flex items-center gap-3.5 text-xs/[1.2] font-semibold tracking-eyebrow text-orange uppercase',
        className,
      )}
      {...props}
    >
      {line}
      {children}
      {centered && line}
    </p>
  )
}

export default Eyebrow
