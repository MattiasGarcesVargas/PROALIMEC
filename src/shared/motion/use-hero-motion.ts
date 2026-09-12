import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import type { RefObject } from 'react'

import { motionTokens, type WaterfallWeight } from '~/shared/motion/motion.tokens'
import { useReducedMotion } from '~/shared/motion/use-reduced-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

function weightOf(element: HTMLElement): WaterfallWeight {
  const declared = element.dataset.weight
  if (declared === 'anchor' || declared === 'light') return declared
  return 'normal'
}

/**
 * The page's single orchestrated moment: the hero headline arrives as a
 * waterfall cascade from below, then the supporting content follows.
 * Opacity is binary (set, never tweened) — fading fights the snap.
 */
export function useHeroMotion(scope: RefObject<HTMLElement | null>) {
  const reduceMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reduceMotion || !scope.current) return

      const { waterfall, duration, ease } = motionTokens
      const words = gsap.utils.toArray<HTMLElement>('[data-word]')
      const followers = gsap.utils.toArray<HTMLElement>('[data-hero-follow]')
      const media = scope.current.querySelector<HTMLElement>('[data-hero-media]')

      gsap.set(words, { autoAlpha: 0 })
      gsap.set(followers, { autoAlpha: 0, y: motionTokens.distance.md })

      const timeline = gsap.timeline({ delay: 0.15 })
      let cursor = 0
      let gap = waterfall.gap

      words.forEach((word) => {
        const spec = waterfall[weightOf(word)]
        timeline.set(word, { autoAlpha: 1 }, cursor)
        timeline.fromTo(
          word,
          { y: spec.y },
          { y: 0, duration: spec.duration, ease: ease.cutOut },
          cursor,
        )
        cursor += gap
        gap *= waterfall.gapDecay
      })

      // Stillness before the supporting content lands — the dramatic comma.
      const settled = cursor + 0.34

      if (media) {
        timeline.fromTo(
          media,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: duration.slow,
            ease: ease.emphasize,
          },
          settled - 0.42,
        )
      }

      timeline.to(
        followers,
        {
          autoAlpha: 1,
          y: 0,
          duration: duration.base,
          ease: ease.enter,
          stagger: motionTokens.stagger.tight,
        },
        settled,
      )
    },
    { dependencies: [reduceMotion], revertOnUpdate: true, scope },
  )
}
