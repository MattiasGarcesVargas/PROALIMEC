import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { cn } from '~/shared/lib/cn'

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export function Container<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? 'div'

  return <Component className={cn('site-container', className)} {...props} />
}
