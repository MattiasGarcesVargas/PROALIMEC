import { useState } from 'react'
import { Link } from 'react-router'

import type {
  CategoriesIntroContent,
  HomeCategory,
} from '~/sections/home-page/types/home-page.types'

interface CategoriesSectionProps {
  intro: CategoriesIntroContent
  categories: HomeCategory[]
}

/** Filas de categoría con banner que aparece en hover (cerdo / res). */
export function CategoriesSection({
  intro,
  categories,
}: CategoriesSectionProps) {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section
      style={{
        background: 'var(--white)',
        paddingBlock: 'clamp(3rem, 7vw, 7rem)',
      }}
    >
      <div style={{ width: 'var(--shell)', marginInline: 'auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                margin: '0 0 18px',
                font: '600 11px/1.2 var(--font-body)',
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
              }}
            >
              <span
                style={{ width: 38, height: 1, background: 'currentColor' }}
              />
              {intro.eyebrow}
            </p>
            <h2
              style={{
                margin: 0,
                maxWidth: '24rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.85rem, 3.6vw, 3rem)',
                lineHeight: 1.06,
                letterSpacing: '-.04em',
                color: 'var(--navy)',
              }}
            >
              {intro.title}
            </h2>
          </div>
          <p
            style={{
              margin: 0,
              maxWidth: '26rem',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--muted)',
              textWrap: 'pretty',
            }}
          >
            {intro.body}
          </p>
        </div>

        <ul
          style={{
            listStyle: 'none',
            margin: 'clamp(2.5rem, 5vw, 4rem) 0 0',
            padding: 0,
            borderTop: '1px solid rgba(11,31,83,.14)',
          }}
        >
          {categories.map((category) => {
            const active = hovered === category.id

            return (
              <li
                key={category.id}
                onMouseEnter={() => setHovered(category.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid rgba(11,31,83,.14)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url('${category.banner.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center right',
                    opacity: active ? 1 : 0,
                    transform: active ? 'scale(1)' : 'scale(1.08)',
                    transition:
                      'opacity .65s var(--ease-out-expo), transform 1.1s var(--ease-out-expo)',
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(90deg, rgba(4,10,24,.92) 0%, rgba(4,10,24,.74) 48%, rgba(4,10,24,.34) 100%)',
                    opacity: active ? 1 : 0,
                    transition: 'opacity .65s var(--ease-out-expo)',
                  }}
                />
                <Link
                  to={`/productos?linea=${category.id}`}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 'clamp(1rem, 3vw, 3rem)',
                    padding:
                      'clamp(1.4rem,3vw,2.6rem) clamp(.75rem,1.6vw,1.5rem)',
                    paddingLeft: active
                      ? 'clamp(1.5rem, 2.8vw, 2.4rem)'
                      : undefined,
                    textDecoration: 'none',
                    transition: 'padding-left .45s var(--ease-out-expo)',
                  }}
                >
                  <span
                    style={{
                      flex: 'none',
                      font: '500 .6875rem/1 var(--font-body)',
                      letterSpacing: '.16em',
                      color: active ? 'rgba(255,255,255,.7)' : 'var(--muted)',
                      transition: 'color .5s ease',
                    }}
                  >
                    {category.index}
                  </span>

                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
                        lineHeight: 1.1,
                        letterSpacing: '-.04em',
                        color: active ? 'var(--white)' : 'var(--navy)',
                        transition: 'color .5s ease',
                      }}
                    >
                      {category.title}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 6,
                        maxWidth: '30rem',
                        fontSize: '.9375rem',
                        lineHeight: 1.65,
                        color: active
                          ? 'rgba(255,255,255,.82)'
                          : 'var(--muted)',
                        transition: 'color .5s ease',
                      }}
                    >
                      {category.description}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    style={{
                      flex: 'none',
                      fontSize: '1.25rem',
                      color: 'var(--accent)',
                      transform: active ? 'translateX(6px)' : 'none',
                      transition:
                        'color .5s ease, transform .5s var(--ease-out-expo)',
                    }}
                  >
                    →
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
