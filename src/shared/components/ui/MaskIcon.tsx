import { cn } from '@/shared/utils/cn'

interface MaskIconProps {
  /** SVG de public/assets/images/logos */
  src: string
  className?: string
}

// El SVG se usa como máscara: toma el color del texto (currentColor) y cambia con el hover
function MaskIcon({ src, className }: MaskIconProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-block size-[18px] shrink-0 bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]',
        className,
      )}
      style={{ maskImage: `url("${src}")` }}
    />
  )
}

export default MaskIcon
