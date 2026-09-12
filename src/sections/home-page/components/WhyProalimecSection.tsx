import type { HomeMarketingSection } from '~/sections/home-page/types/home-page.types'
import { Container } from '~/shared/components'

export function WhyProalimecSection({
  content,
}: {
  content: HomeMarketingSection
}) {
  if (content.items.length === 0) return null

  return (
    <section className="band-cold section-space">
      <Container>
        <header className="flex max-w-2xl flex-col gap-5" data-reveal>
          {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
          <h2 className="section-title balanced-text text-navy">
            {content.title}
          </h2>
          {content.description ? (
            <p className="text-lg leading-8 text-muted">
              {content.description}
            </p>
          ) : null}
        </header>

        <div
          className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2"
          data-stagger
        >
          {content.items.map((item) => (
            <div key={item.id} className="border-t border-navy/15 pt-6">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-navy">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm leading-7 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
