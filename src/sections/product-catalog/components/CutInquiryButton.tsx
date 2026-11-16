import { Link } from 'react-router'

import MaskIcon from '@/shared/components/ui/MaskIcon'
import { cutInquiryLink } from '@/shared/config/contact'
import { cn } from '@/shared/utils/cn'

interface CutInquiryButtonProps {
  cutName: string
  className?: string
}

// Acción principal de la ficha: abre WhatsApp con el corte ya escrito.
// Es el único botón redondeado del catálogo (como "Enviar por WhatsApp" en contacto): la forma
// suave lo separa de los botones rectos de navegación. El ícono va en su propia pastilla, que
// se enciende en naranja al pasar el mouse
function CutInquiryButton({ cutName, className }: CutInquiryButtonProps) {
  return (
    <Link
      {...cutInquiryLink(cutName)}
      className={cn(
        'group inline-flex min-h-12 items-center gap-3 rounded-lg bg-navy py-2 pr-5.5 pl-2 text-xs/none font-semibold tracking-button text-white uppercase',
        'transition-[background-color,translate,box-shadow] duration-300 ease-out-expo',
        'hover:-translate-y-px hover:bg-ink hover:shadow-[0_12px_24px_-14px_rgb(11_31_83/0.7)]',
        'active:translate-y-0 active:shadow-none motion-reduce:transform-none',
        // La base redondea poco el foco: aquí el contorno sigue la forma del botón
        'focus-visible:rounded-lg',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-md bg-white/12 transition-colors duration-300 group-hover:bg-orange"
      >
        <MaskIcon src="/assets/images/logos/whatsapp.svg" className="size-4" />
      </span>
      Consultar este corte
    </Link>
  )
}

export default CutInquiryButton
