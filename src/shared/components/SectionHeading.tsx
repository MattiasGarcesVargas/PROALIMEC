import { cn } from '~/shared/lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'start' | 'center'
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'light',
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        'flex max-w-3xl flex-col gap-5',
        align === 'center' && 'mx-auto items-center text-center',
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={cn(
          'section-title balanced-text',
          tone === 'dark' ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-lg leading-8',
            tone === 'dark' ? 'text-frost' : 'text-muted',
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  )
}
