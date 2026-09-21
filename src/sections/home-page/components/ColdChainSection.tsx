import type { ColdChainContent } from '~/sections/home-page/types/home-page.types'
import { useRevealOnScroll } from '~/shared/motion'

export function ColdChainSection({ content }: { content: ColdChainContent }) {
  const { ref, visible } = useRevealOnScroll<HTMLElement>()

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--black)',
        color: 'var(--white)',
        paddingBlock: 'clamp(3.5rem, 8vw, 8rem)',
        overflow: 'hidden',
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
              color: 'var(--ice)',
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
            }}
          >
            {content.title}
          </h2>
          <p
            style={{
              margin: '18px 0 0',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--mutedcold)',
              textWrap: 'pretty',
            }}
          >
            {content.intro}
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            marginTop: 'clamp(2.5rem, 6vw, 5rem)',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background:
                'linear-gradient(90deg, var(--ice), rgba(99,200,242,.25))',
              transformOrigin: 'left',
              transform: visible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 1.2s var(--ease-out-expo)',
            }}
          />
          <ol
            style={{
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(15rem,100%), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              margin: 0,
              padding: 0,
            }}
          >
            {content.steps.map((step, index) => (
              <li
                key={step.step}
                style={{
                  position: 'relative',
                  paddingTop: 44,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'none' : 'translateY(24px)',
                  transition: `opacity .7s var(--ease-out-expo) ${index * 0.06}s, transform .7s var(--ease-out-expo) ${index * 0.06}s`,
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: 0,
                    width: 11,
                    height: 11,
                    borderRadius: '50%',
                    background: 'var(--ice)',
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    font: '600 12px/1.2 var(--font-body)',
                    letterSpacing: '.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ice)',
                  }}
                >
                  {step.step}
                </p>
                <h3
                  style={{
                    margin: '14px 0 0',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.375rem',
                    letterSpacing: '-.025em',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: '12px 0 0',
                    maxWidth: '22rem',
                    fontSize: '.9375rem',
                    lineHeight: 1.7,
                    color: 'var(--mutedcold)',
                  }}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <dl
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(13rem,100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            margin: 'clamp(3rem, 7vw, 6rem) 0 0',
            padding: 0,
          }}
        >
          {content.stats.map((stat) => (
            <div
              key={stat.value}
              style={{
                borderTop: '1px solid rgba(255,255,255,.18)',
                paddingTop: 22,
              }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd style={{ margin: 0 }}>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                    lineHeight: 1,
                    letterSpacing: '-.05em',
                    color: 'var(--accent)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    marginTop: 16,
                    maxWidth: '15rem',
                    fontSize: '.9375rem',
                    lineHeight: 1.65,
                    color: 'var(--mutedcold)',
                  }}
                >
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
