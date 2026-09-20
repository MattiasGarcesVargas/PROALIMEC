import { Link } from 'react-router'

import type { ContactCtaContent } from '~/sections/home-page/types/home-page.types'

export function ContactCtaSection({ content }: { content: ContactCtaContent }) {
  return (
    <section
      id="contacto"
      style={{
        background: 'var(--white)',
        paddingBlock: 'clamp(3.5rem, 8vw, 8rem)',
      }}
    >
      <div
        style={{
          width: 'var(--shell)',
          marginInline: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(18rem,100%), 1fr))',
          alignItems: 'end',
          gap: 'clamp(2rem, 5vw, 5rem)',
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              maxWidth: '30rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4.4vw, 3.75rem)',
              lineHeight: 1.02,
              letterSpacing: '-.05em',
              color: 'var(--navy)',
              textWrap: 'pretty',
            }}
          >
            {content.title}
          </h2>
          <p
            style={{
              margin: '22px 0 0',
              maxWidth: '32rem',
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'var(--muted)',
              textWrap: 'pretty',
            }}
          >
            {content.body}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginTop: 32,
            }}
          >
            <Link
              to="/contacto"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 52,
                padding: '0 26px',
                background: 'var(--navy)',
                border: '1px solid var(--navy)',
                color: 'var(--white)',
                font: '600 12px/1 var(--font-body)',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background .3s, border-color .3s',
              }}
            >
              {content.primaryLabel}
            </Link>
            <Link
              to="/productos"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: 52,
                padding: '0 26px',
                border: '1px solid rgba(11,31,83,.25)',
                color: 'var(--navy)',
                font: '600 12px/1 var(--font-body)',
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color .3s, background .3s',
              }}
            >
              {content.secondaryLabel}
            </Link>
          </div>
        </div>

        <div
          style={{
            position: 'relative',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            background: 'var(--black)',
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
              objectFit: 'cover',
              transform: 'scale(1.12)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
