import type { ServiceContent } from '~/sections/home-page/types/home-page.types'

export function ServiceSection({ content }: { content: ServiceContent }) {
  return (
    <section
      style={{
        background: 'var(--surface-cold)',
        paddingBlock: 'clamp(3.5rem, 8vw, 8rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <div style={{ maxWidth: '40rem' }}>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              margin: '0 0 18px',
              font: '600 12px/1.2 var(--font-body)',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            <span
              style={{ width: 38, height: 1, background: 'currentColor' }}
            />
            {content.eyebrow}
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.85rem, 3.6vw, 3rem)',
              lineHeight: 1.06,
              letterSpacing: '-.04em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {content.title}
          </h2>
          <p
            style={{
              margin: '18px 0 0',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--muted)',
              textWrap: 'pretty',
            }}
          >
            {content.intro}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(18rem,100%), 1fr))',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            marginTop: 'clamp(2.5rem, 5vw, 4.5rem)',
          }}
        >
          {content.cards.map((card) => (
            <div
              key={card.title}
              style={{
                borderTop: '1px solid rgba(11,31,83,.16)',
                paddingTop: 22,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '-.025em',
                  color: 'var(--navy)',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: '12px 0 0',
                  maxWidth: '24rem',
                  fontSize: '.9375rem',
                  lineHeight: 1.7,
                  color: 'var(--muted)',
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
