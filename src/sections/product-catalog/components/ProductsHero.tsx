import Eyebrow from '@/shared/components/ui/Eyebrow'

interface ProductsHeroProps {
  eyebrow: string
  title: string
  intro: string
}

function ProductsHero({ eyebrow, title, intro }: ProductsHeroProps) {
  return (
    <div className="text-center">
      <Eyebrow centered className="mb-[clamp(1.25rem,2.5vw,2rem)] inline-flex">
        {eyebrow}
      </Eyebrow>
      <h1 className="font-display text-page font-extrabold text-navy">{title}</h1>
      <p className="mx-auto mt-[clamp(1.25rem,2.5vw,1.75rem)] max-w-152 leading-[1.7] text-pretty text-muted">
        {intro}
      </p>
    </div>
  )
}

export default ProductsHero
