import type { OurProductsContent } from '~/sections/home-page/types/home-page.types'
import { easeOutCubic, range, useScrollScene } from '~/shared/motion'

/**
 * Escena sticky: primero entra el texto (4–30 %), luego la línea vertical
 * (10–38 %) y la percha se desliza de derecha a izquierda a partir del 36 %,
 * sin balanceo: un único desplazamiento lateral con easing.
 */
export function OurProductsScene({ content }: { content: OurProductsContent }) {
  const { ref, progress } = useScrollScene<HTMLElement>()

  const text = easeOutCubic(range(progress, 0.04, 0.3))
  const rule = easeOutCubic(range(progress, 0.1, 0.38))
  const slide = easeOutCubic(range(progress, 0.36, 0.86))
  const caption = easeOutCubic(range(progress, 0.82, 0.98))

  return (
    <section
      id="productos"
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--white)',
        height: 'var(--scene)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--white)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'clamp(1rem, 4vw, 4rem)',
            width: 'var(--shell)',
            marginInline: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: '26rem',
              flex: '1 1 16rem',
              opacity: text,
              transform: `translateX(${-40 * (1 - text)}px)`,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 4.4rem)',
                lineHeight: 1.02,
                letterSpacing: '-.045em',
                color: 'var(--navy)',
              }}
            >
              {content.title}
            </h2>

            <div style={{ display: 'flex', gap: 20, marginTop: 40 }}>
              <span
                aria-hidden="true"
                style={{
                  flex: 'none',
                  width: 1,
                  background: 'var(--navy)',
                  transformOrigin: 'top',
                  transform: `scaleY(${rule})`,
                }}
              />
              <p
                style={{
                  margin: 0,
                  maxWidth: '19rem',
                  fontSize: '.875rem',
                  lineHeight: 1.62,
                  color: 'var(--ink)',
                  textWrap: 'pretty',
                }}
              >
                {content.body}
              </p>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              flex: 'none',
              width: 'min(52vw, 44rem)',
              aspectRatio: '1536 / 1024',
            }}
          >
            <img
              src={content.image.src}
              alt={content.image.alt}
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                opacity: easeOutCubic(range(progress, 0.36, 0.5)),
                transform: `translateX(${160 * (1 - slide)}px)`,
                willChange: 'transform',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: 0,
                bottom: '-3.25rem',
                width: '9.5rem',
                textAlign: 'right',
                opacity: caption,
                transform: `translateX(${30 * (1 - caption)}px)`,
              }}
            >
              <p
                style={{
                  margin: 0,
                  font: '700 .8125rem/1.35 var(--font-body)',
                  letterSpacing: '-.01em',
                  color: 'var(--ink)',
                }}
              >
                {content.captionTitle}
              </p>
              <p
                style={{
                  margin: '4px 0 0',
                  font: '500 .6875rem/1.4 var(--font-body)',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {content.captionMeta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
