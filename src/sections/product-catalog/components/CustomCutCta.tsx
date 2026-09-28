import ButtonLink from '@/shared/components/ui/ButtonLink'

interface CustomCutCtaProps {
  body: string
  ctaLabel: string
}

function CustomCutCta({ body, ctaLabel }: CustomCutCtaProps) {
  return (
    <div className="mt-[clamp(3rem,6vw,5rem)] flex flex-wrap items-center justify-between gap-5 border-t border-navy/12 pt-[clamp(1.5rem,3vw,2.5rem)]">
      <p className="max-w-136 text-[15px] leading-[1.7] text-pretty text-muted">{body}</p>
      <ButtonLink to="/contacto">{ctaLabel}</ButtonLink>
    </div>
  )
}

export default CustomCutCta
