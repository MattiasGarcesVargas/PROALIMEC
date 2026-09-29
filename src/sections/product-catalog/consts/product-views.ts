import type { ProductView } from '@/sections/product-catalog/types/product-catalog.types'

// Cómo se nombra cada vista de la galería en los textos accesibles ("Ver Chuleta entera desde arriba")
export const PRODUCT_VIEW_LABELS: Record<ProductView, string> = {
  principal: 'foto principal',
  arriba: 'desde arriba',
  lateral: 'de lado',
  empaque: 'en su empaque',
}
