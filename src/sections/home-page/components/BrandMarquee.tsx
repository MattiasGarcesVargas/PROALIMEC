import { Droplet } from 'lucide-react'

export function BrandMarquee({ messages }: { messages: string[] }) {
  if (messages.length === 0) return null

  const track = [...messages, ...messages]

  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy py-4">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {track.map((message, index) => (
          <span
            key={`${message}-${index}`}
            className="flex shrink-0 items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.22em] text-frost"
          >
            {message}
            <Droplet
              aria-hidden="true"
              size={14}
              className="shrink-0 text-ice"
            />
          </span>
        ))}
      </div>
    </div>
  )
}
