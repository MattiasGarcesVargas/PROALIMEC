import type { HomeMetric } from '~/sections/home-page/types/home-page.types'
import { Container } from '~/shared/components'

export function TrustMetricsSection({ metrics }: { metrics: HomeMetric[] }) {
  if (metrics.length === 0) return null

  return (
    <section className="band-deep pt-[clamp(4rem,9vw,8rem)]">
      <Container>
        <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8" data-stagger>
          {metrics.map((metric) => (
            <div key={metric.id} className="border-t border-white/15 pt-6">
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(2.75rem,6vw,4.5rem)] font-bold leading-none tracking-[-0.05em] text-orange">
                  {metric.value}
                </span>
                <span className="mt-4 block max-w-[16rem] leading-7 text-muted-cold">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
