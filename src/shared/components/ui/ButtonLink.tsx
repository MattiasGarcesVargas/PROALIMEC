import type { ComponentProps } from 'react'
import { Link } from 'react-router'

import { cn } from '@/shared/utils/cn'

import {
  BUTTON_BASE,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  type ButtonSize,
  type ButtonVariant,
} from './buttonStyles'

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: ButtonVariant
  size?: ButtonSize
}

function ButtonLink({
  variant = 'primary',
  size = 'default',
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)}
      {...props}
    />
  )
}

export default ButtonLink
