import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

import { motionTokens } from '~/shared/motion/motion.tokens'
import { useReducedMotion } from '~/shared/motion/use-reduced-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

export function useSectionMotion(scope: RefObject<HTMLElement | null>) {
  const reduceMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reduceMotion || !scope.current) return

      const { duration, ease, waterfall } = motionTokens

      // One reveal treatment across the page: content rises from behind a hard
      // edge, the same way the hero headline arrives.
      const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]')
      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          { clipPath: 'inset(105% 0% 0% 0%)', y: motionTokens.distance.sm },
          {
            clipPath: 'inset(0% 0% -5% 0%)',
            y: 0,
            duration: duration.slow,
            ease: ease.emphasize,
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })

      // Grids cascade with shrinking gaps so the group accelerates into place
      // instead of queueing item by item.
      const staggerGroups = gsap.utils.toArray<HTMLElement>('[data-stagger]')
      staggerGroups.forEach((group) => {
        const items = Array.from(group.children) as HTMLElement[]
        let cursor = 0
        let gap = waterfall.gap * 1.6

        gsap.set(items, { autoAlpha: 0, y: waterfall.normal.y })

        const timeline = gsap.timeline({
          scrollTrigger: { trigger: group, start: 'top 84%', once: true },
        })

        items.forEach((item) => {
          timeline.set(item, { autoAlpha: 1 }, cursor)
          timeline.to(
            item,
            { y: 0, duration: duration.base, ease: ease.cutOut },
            cursor,
          )
          cursor += gap
          gap *= waterfall.gapDecay
        })
      })

      const parallaxLayers = gsap.utils.toArray<HTMLElement>('[data-parallax]')
      parallaxLayers.forEach((layer) => {
        gsap.to(layer, {
          ease: 'none',
          scrollTrigger: {
            trigger: layer.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.7,
          },
          yPercent: -8,
        })
      })
    },
    { dependencies: [reduceMotion], revertOnUpdate: true, scope },
  )
}
