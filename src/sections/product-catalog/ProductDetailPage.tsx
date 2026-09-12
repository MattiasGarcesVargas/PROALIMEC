import { ArrowLeft } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router'

import {
  ProductGallery,
  ProductInformation,
  RelatedProducts,
} from '~/sections/product-catalog/components'
import { useProductDetailData } from '~/sections/product-catalog/hooks/use-product-detail-data'
import { ButtonLink, Container } from '~/shared/components'
import { useSectionMotion } from '~/shared/motion'

export function ProductDetailPage() {
  const { categories, product, relatedProducts } = useProductDetailData()
  const pageRef = useRef<HTMLElement>(null)
  useSectionMotion(pageRef)

  if (!product) {
    return (
      <main id="main-content" ref={pageRef} className="bg-cold">
        <Container className="flex min-h-[65svh] flex-col items-start justify-center py-16">
          <p className="eyebrow">Catálogo</p>
          <h1 className="page-title balanced-text mt-4 max-w-3xl text-navy">
            Producto no disponible
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            No encontramos información publicada para este producto.
          </p>
          <ButtonLink to="/productos" className="mt-8">
            <ArrowLeft aria-hidden="true" size={18} />
            Volver al catálogo
          </ButtonLink>
        </Container>
      </main>
    )
  }

  const category = categories.find(
    (candidate) => candidate.slug === product.categorySlug,
  )

  return (
    <main id="main-content" ref={pageRef}>
      <Container className="py-8 lg:py-12">
        <nav aria-label="Migas de pan" className="mb-8 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                to="/productos"
                className="min-h-11 py-3 font-semibold text-navy"
              >
                Productos
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-10 pb-16 lg:grid-cols-12 lg:gap-14 lg:pb-24">
          <div className="lg:col-span-7" data-reveal>
            <ProductGallery
              key={product.id}
              productName={product.name}
              media={product.media}
            />
          </div>
          <div className="lg:col-span-5" data-reveal>
            <ProductInformation product={product} category={category} />
          </div>
        </div>
      </Container>

      <RelatedProducts products={relatedProducts} categories={categories} />
    </main>
  )
}
