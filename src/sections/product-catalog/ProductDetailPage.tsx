import { Link } from 'react-router'

import ButtonLink from '@/shared/components/ui/ButtonLink'

import ProductGallery from './components/ProductGallery'
import ProductInformation from './components/ProductInformation'
import RelatedProducts from './components/RelatedProducts'
import { useProductDetailData } from './hooks/use-product-detail-data'

function ProductDetailPage() {
  const { product, relatedProducts } = useProductDetailData()

  if (!product) {
    return (
      <main id="main-content" className="bg-white py-[clamp(3rem,7vw,7rem)]">
        <div className="shell">
          <h1 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.045em] text-navy">
            Producto no disponible
          </h1>
          <p className="mt-4.5 max-w-128 leading-[1.75] text-muted">
            No encontramos información publicada para este corte.
          </p>
          <ButtonLink to="/productos" className="mt-7">
            Volver al catálogo
          </ButtonLink>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="bg-white">
      <div className="shell pt-[clamp(1.5rem,3vw,2.5rem)] pb-[clamp(3rem,6vw,6rem)]">
        <nav
          aria-label="Migas de pan"
          className="mb-[clamp(1.5rem,3vw,2.5rem)] text-xs/none font-semibold tracking-[0.16em] text-muted uppercase"
        >
          <ol className="flex flex-wrap items-center gap-2.5">
            <li>
              <Link to="/productos" className="text-navy">
                Productos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-fit-80 items-start gap-[clamp(2rem,5vw,4.5rem)]">
          {/* key: al pasar a otro corte (relacionados) la galería vuelve a su primera foto */}
          <ProductGallery key={product.id} product={product} />
          <ProductInformation product={product} />
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
    </main>
  )
}

export default ProductDetailPage
