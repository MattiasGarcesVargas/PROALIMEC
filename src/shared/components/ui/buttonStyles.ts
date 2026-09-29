export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'inverse'
export type ButtonSize = 'default' | 'compact'

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'border-navy bg-navy text-white hover:bg-ink',
  secondary: 'border-navy text-navy hover:bg-navy hover:text-white',
  outline: 'border-navy/25 text-navy hover:border-navy',
  // Sobre fondos oscuros (navy o negro)
  inverse:
    'border-white bg-white text-navy hover:border-frost hover:bg-frost focus-visible:outline-ice',
}

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  default: 'min-h-13 px-6.5',
  compact: 'min-h-11 px-5',
}

export const BUTTON_BASE =
  'inline-flex items-center justify-center gap-2 border text-xs/none font-semibold tracking-button uppercase no-underline transition-[background-color,color,border-color] duration-300 disabled:pointer-events-none disabled:opacity-50'
