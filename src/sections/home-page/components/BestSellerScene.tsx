import { BestSellerCopy } from '~/sections/home-page/components/BestSellerCopy'
import { useHangingSceneMotion } from '~/sections/home-page/hooks/use-hanging-scene-motion'
import type { BestSeller } from '~/sections/home-page/types/home-page.types'
import { useScrollScene } from '~/shared/motion'

/**
 * Escena sticky de 1.9 × --scene: dos best sellers que caen desde el gancho.
 * El corte 01 aparece sobre la losa de piedra; el 02 entra con el gancho al ras
 * del borde superior, sin dejar hueco negro.
 */
export function BestSellerScene({ items }: { items: BestSeller[] }) {
  const { ref, progress } = useScrollScene<HTMLElement>()
  const motion = useHangingSceneMotion(progress)
  const [first, second] = items

  if (!first || !second) return null

  return (
    <section
      ref={ref}
      aria-label="Lo más pedido del catálogo"
      style={{
        position: 'relative',
        background: 'var(--black)',
        height: 'calc(var(--scene) * 1.9)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--black)',
        }}
      >
        <p
          style={{
            position: 'absolute',
            top: 'clamp(1.5rem, 5vh, 4rem)',
            left: 0,
            right: 0,
            margin: 0,
            textAlign: 'center',
            font: '600 11px/1.2 var(--font-body)',
            letterSpacing: '.32em',
            textTransform: 'uppercase',
            color: 'var(--ice)',
            ...motion.label,
          }}
        >
          Lo más pedido del catálogo
        </p>

        <h2
          style={{
            position: 'absolute',
            top: '34%',
            left: 0,
            right: 0,
            margin: 0,
            translate: '0 -50%',
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 6.6vw, 5.5rem)',
            lineHeight: 1,
            letterSpacing: '.24em',
            textIndent: '.24em',
            textTransform: 'uppercase',
            color: 'var(--white)',
            whiteSpace: 'nowrap',
            ...motion.word,
          }}
        >
          Best seller
        </h2>

        {/* Slot A — pierna de cerdo sobre losa de piedra */}
        <div style={{ position: 'absolute', inset: 0, ...motion.slotA }}>
          {first.base ? (
            <img
              src={first.base.src}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '7vh',
                left: 'clamp(1vw, 4vw, 7vw)',
                width: 'min(48vw, 64vh)',
                height: 'auto',
                objectFit: 'contain',
                ...motion.baseA,
              }}
            />
          ) : null}
          <img
            src={first.product.src}
            alt={first.product.alt}
            style={{
              position: 'absolute',
              top: '-1.5vh',
              left: 'clamp(0px, 3vw, 6vw)',
              width: 'min(42vw, 58vh)',
              height: 'auto',
              objectFit: 'contain',
              ...motion.hookA,
            }}
          />
          <BestSellerCopy item={first} side="right" style={motion.copyA} />
        </div>

        {/* Slot B — costillar suspendido, gancho al ras del borde superior */}
        <div style={{ position: 'absolute', inset: 0, ...motion.slotB }}>
          <img
            src={second.product.src}
            alt={second.product.alt}
            style={{
              position: 'absolute',
              top: 0,
              right: 'clamp(3vw, 9vw, 14vw)',
              width: 'min(46vw, 64vh)',
              height: 'auto',
              objectFit: 'contain',
              ...motion.hookB,
            }}
          />
          <BestSellerCopy item={second} side="left" style={motion.copyB} />
        </div>
      </div>
    </section>
  )
}
