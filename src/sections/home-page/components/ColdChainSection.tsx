import type { HomeMarketingSection } from '~/sections/home-page/types/home-page.types'
import { Container } from '~/shared/components'

export function ColdChainSection({
  content,
}: {
  content: HomeMarketingSection
}) {
  if (content.items.length === 0) return null

  return (
    <section className="band-deep section-space">
      <Container>
        <header className="flex max-w-2xl flex-col gap-5" data-reveal>
          {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
          <h2 className="section-title balanced-text">{content.title}</h2>
          {content.description ? (
            <p className="text-lg leading-8 text-muted-cold">
              {content.description}
            </p>
          ) : null}
        </header>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-[0.4375rem] top-2 bottom-2 w-px bg-gradient-to-b from-ice via-ice/45 to-transparent md:inset-x-0 md:bottom-auto md:top-2 md:h-px md:w-full md:bg-gradient-to-r md:from-ice md:via-ice/45 md:to-transparent"
          />

          {content.items.map((item, index) => (
            <li key={item.id} className="relative pl-9 md:pl-0 md:pt-12">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 size-3.5 rounded-full border-2 border-deep bg-ice md:left-0 md:top-0"
              />
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-ice">
                Paso {index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-muted-cold">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
