import type { HomeHeroContent } from '~/sections/home-page/types/home-page.types'
import { useRevealOnScroll } from '~/shared/motion'

export function HeroSection({ content }: { content: HomeHeroContent }) {
  const { ref, visible } = useRevealOnScroll<HTMLElement>(0.1)

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--white)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: 'var(--shell)',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(20rem, 100%), 1fr))',
          alignItems: 'center',
          gap: 'clamp(2rem, 5vw, 5rem)',
          padding: 'clamp(2.5rem,6vw,6rem) 0 clamp(3.5rem,7vw,7rem)',
        }}
      >
        <div>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              margin: '0 0 clamp(1.5rem,3vw,2.5rem)',
              font: '600 12px/1.2 var(--font-body)',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(18px)',
              transition:
                'opacity .7s var(--ease-out-expo), transform .7s var(--ease-out-expo)',
            }}
          >
            <span
              style={{ width: 38, height: 1, background: 'currentColor' }}
            />
            {content.eyebrow}
          </p>

          <h1
            style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.6rem, 7.6vw, 6.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-.055em',
              wordSpacing: '-.1em',
              color: 'var(--navy)',
            }}
          >
            {content.titleLines.map((lineText, index) => (
              <span
                key={lineText}
                style={{
                  display: 'block',
                  overflow: 'hidden',
                  paddingBottom: '.14em',
                  marginBottom: '-.14em',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    color:
                      index === content.accentLineIndex
                        ? 'var(--accent)'
                        : 'inherit',
                    transform: visible ? 'translateY(0)' : 'translateY(100%)',
                    transition: `transform .95s var(--ease-out-expo) ${index * 0.08}s`,
                  }}
                >
                  {lineText}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={{
              maxWidth: '34rem',
              margin: 'clamp(1.75rem,3.5vw,2.5rem) 0 0',
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--muted)',
              textWrap: 'pretty',
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(22px)',
              transition:
                'opacity .8s var(--ease-out-expo) .16s, transform .8s var(--ease-out-expo) .16s',
            }}
          >
            {content.intro}
          </p>
        </div>

        <div
          style={{
            position: 'relative',
            height: 'clamp(22rem, 60vh, 38rem)',
            overflow: 'hidden',
          }}
        >
          <img
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width}
            height={content.image.height}
            fetchPriority="high"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              padding: 'clamp(1rem, 3vw, 2.5rem)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
