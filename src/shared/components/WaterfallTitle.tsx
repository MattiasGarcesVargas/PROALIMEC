import { Fragment, type ElementType } from 'react'

import { cn } from '~/shared/lib/cn'

type WaterfallTitleProps = {
  lines: string[]
  as?: ElementType
  className?: string
  accentLastLine?: boolean
}

/**
 * Headline split into per-word spans so it can arrive as a cascade from behind
 * each line's edge. Renders as plain text when motion never runs.
 */
export function WaterfallTitle({
  lines,
  as: Component = 'h1',
  className,
  accentLastLine = false,
}: WaterfallTitleProps) {
  return (
    <Component className={className}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ').filter(Boolean)
        const isLastLine = lineIndex === lines.length - 1

        return (
          <span className="mask-line" key={line}>
            <span
              className={cn(
                'pb-[0.12em]',
                accentLastLine && isLastLine && 'text-ice',
              )}
            >
              {words.map((word, wordIndex) => (
                <Fragment key={`${word}-${wordIndex}`}>
                  <span
                    data-word
                    data-weight={
                      wordIndex === 0 || wordIndex === words.length - 1
                        ? 'anchor'
                        : 'normal'
                    }
                    className="inline-block will-change-transform"
                  >
                    {word}
                  </span>
                  {wordIndex < words.length - 1 ? ' ' : null}
                </Fragment>
              ))}
            </span>
          </span>
        )
      })}
    </Component>
  )
}
