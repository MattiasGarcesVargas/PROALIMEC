export interface NavItem {
  label: string
  to: string
}

// Header y footer hacen .map() sobre esto
export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Contáctanos', to: '/contacto' },
]

export const PRIMARY_CTA: NavItem = { label: 'Solicitar cotización', to: '/contacto' }

// Columna "Productos" del footer: abren el catálogo ya filtrado
export const PRODUCT_LINE_LINKS: NavItem[] = [
  { label: 'Línea de cerdo', to: '/productos?linea=cerdo' },
  { label: 'Línea de res', to: '/productos?linea=res' },
  { label: 'Catálogo completo', to: '/productos' },
]
