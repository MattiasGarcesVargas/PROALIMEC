import type { Product } from '@/sections/product-catalog/types/product-catalog.types'
import { cn } from '@/shared/utils/cn'

interface ProductSpecsProps {
  product: Product
  className?: string
}

// Ficha técnica del corte: se usa en el modal y en la página de detalle
function ProductSpecs({ product, className }: ProductSpecsProps) {
  const specs = [
    { label: 'Presentación', value: product.presentation },
    { label: 'Peso aprox.', value: product.approxWeight },
    { label: 'Uso sugerido', value: product.suggestedUse },
    { label: 'Conservación', value: product.storageTemperature, isCold: true },
  ]

  return (
    <dl className={cn('border-b border-navy/14', className)}>
      {specs.map((spec) => (
        <div key={spec.label} className="flex justify-between gap-4 border-t border-navy/14 py-3">
          <dt className="text-[13px] text-muted">{spec.label}</dt>
          <dd
            className={cn(
              'text-right text-[13px] font-semibold',
              spec.isCold ? 'text-ice' : 'text-navy',
            )}
          >
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export default ProductSpecs
