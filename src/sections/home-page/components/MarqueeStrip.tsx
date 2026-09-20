import type { CSSProperties } from 'react'

import type { HomeMarqueeContent } from '~/sections/home-page/types/home-page.types'

const row: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 56,
  flex: 'none',
  font: '600 12px/1 var(--font-body)',
  letterSpacing: '.3em',
  textTransform: 'uppercase',
  color: 'var(--white)',
  whiteSpace: 'nowrap',
}

export function MarqueeStrip({ content }: { content: HomeMarqueeContent }) {
  const items = (
    <span style={row}>
      {content.items.map((item) => (
        <span
          key={item}
          style={{ display: 'flex', alignItems: 'center', gap: 56 }}
        >
          {item}
          <span
            style={{ width: 5, height: 5, background: 'var(--accent)' }}
            aria-hidden="true"
          />
        </span>
      ))}
    </span>
  )

  return (
    <div
      style={{
        overflow: 'hidden',
        background: 'var(--black)',
        borderBlock: '1px solid rgba(255,255,255,.12)',
        padding: '18px 0',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 56,
          paddingRight: 56,
        }}
      >
        {items}
        <span aria-hidden="true" style={{ display: 'contents' }}>
          {items}
        </span>
      </div>
    </div>
  )
}
