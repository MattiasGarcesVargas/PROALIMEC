import type { HomeStoryContent } from '~/sections/home-page/types/home-page.types'
import { Container } from '~/shared/components'

export function BrandStorySection({
  content,
}: {
  content: HomeStoryContent | null
}) {
  if (!content) return null

  return (
    <section className="band-deep section-space">
      <Container className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {content.media ? (
          <figure className="lg:col-span-5" data-reveal>
            <div className="shield-frame aspect-[3/4] w-full">
              <img
                src={content.media.src}
                alt={content.media.alt}
                width={content.media.width}
                height={content.media.height}
                loading="lazy"
              />
            </div>
          </figure>
        ) : null}

        <div className="flex flex-col gap-6 lg:col-span-7 lg:pl-4">
          {content.eyebrow ? (
            <p className="eyebrow" data-reveal>
              {content.eyebrow}
            </p>
          ) : null}
          <h2
            className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.04em] text-balance"
            data-reveal
          >
            {content.title}
          </h2>
          <p className="max-w-xl text-lg leading-8 text-muted-cold" data-reveal>
            {content.description}
          </p>
        </div>
      </Container>
    </section>
  )
}
