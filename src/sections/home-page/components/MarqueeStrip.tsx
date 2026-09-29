import type { HomeMarqueeContent } from '@/sections/home-page/types/home-page.types'

function MarqueeStrip({ content }: { content: HomeMarqueeContent }) {
  const items = (
    <span className="flex flex-none items-center gap-14 text-xs/none font-semibold tracking-[0.3em] whitespace-nowrap text-white uppercase">
      {content.items.map((item) => (
        <span key={item} className="flex items-center gap-14">
          {item}
          <span aria-hidden="true" className="size-[5px] bg-orange" />
        </span>
      ))}
    </span>
  )

  return (
    <div className="overflow-hidden border-y border-white/12 bg-black py-4.5">
      {/* La lista va dos veces: al desplazarse -50 % el bucle no tiene corte */}
      <div className="flex w-max animate-marquee gap-14 pr-14 motion-reduce:animate-none">
        {items}
        <span aria-hidden="true" className="contents">
          {items}
        </span>
      </div>
    </div>
  )
}

export default MarqueeStrip
