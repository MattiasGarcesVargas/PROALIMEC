import type { ReactNode } from 'react'

import { cn } from '@/shared/utils/cn'

// Dato comercial aún no confirmado: se dice tal cual, sin inventar un valor
function PendingNote({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-2.5 text-[13px] text-muted', className)}>
      <span aria-hidden="true" className="size-1.5 shrink-0 bg-ice" />
      {children}
    </p>
  )
}

export default PendingNote
