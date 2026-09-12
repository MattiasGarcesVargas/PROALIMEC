import type { ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router'

import { cn } from '~/shared/lib/cn'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'inverse'
  | 'outlineDark'
type ButtonSize = 'default' | 'compact'

const baseClassName =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border font-semibold no-underline transition-[background-color,color,border-color,transform,box-shadow] duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const variantClassNames: Record<ButtonVariant, string> = {
  primary: 'border-navy bg-navy text-white hover:bg-ink hover:shadow-sm',
  secondary:
    'border-navy bg-transparent text-navy hover:bg-navy hover:text-white',
  accent: 'border-orange bg-orange text-navy hover:bg-frost hover:border-frost',
  ghost: 'border-transparent bg-transparent text-navy hover:bg-frost',
  inverse:
    'border-white bg-white text-navy hover:border-frost hover:bg-frost focus-visible:outline-ice',
  outlineDark:
    'border-white/35 bg-transparent text-white hover:border-white hover:bg-white hover:text-navy focus-visible:outline-ice',
}

const sizeClassNames: Record<ButtonSize, string> = {
  default: 'min-h-12 px-6 text-sm',
  compact: 'min-h-11 px-4 text-sm',
}

function getButtonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    baseClassName,
    variantClassNames[variant],
    sizeClassNames[size],
    className,
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function Button({
  className,
  variant = 'primary',
  size = 'default',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName(variant, size, className)}
      {...props}
    />
  )
}

type ButtonLinkProps = LinkProps & {
  variant?: ButtonVariant
  size?: ButtonSize
}

export function ButtonLink({
  className,
  variant = 'primary',
  size = 'default',
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={getButtonClassName(variant, size, className)} {...props} />
  )
}
