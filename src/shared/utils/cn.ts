import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Los tamaños propios del @theme (text-section, text-page…) se registran como tamaños de
// fuente; si no, tailwind-merge los toma por colores y los borra al ver text-navy
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['display', 'page', 'section', 'subsection'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
