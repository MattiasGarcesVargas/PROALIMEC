import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

import { useReducedMotion } from '~/shared/motion/use-reduced-motion'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
}

/**
 * Scroll progress drawn as the brand's own cold chain: the rail fills downward
 * as the reader descends, and the node rides its leading edge.
 */
export function useChainRail(scope: RefObject<HTMLElement | null>) {
  const reduceMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reduceMotion || !scope.current) return

      const fill = scope.current.querySelector<HTMLElement>('[data-chain-fill]')
      const node = scope.current.querySelector<HTMLElement>('[data-chain-node]')
      if (!fill || !node) return

      const trigger: ScrollTrigger.Vars = {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
      }

      gsap.fromTo(
        fill,
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', scrollTrigger: trigger },
      )
      gsap.fromTo(
        node,
        { top: '0%' },
        { top: '100%', ease: 'none', scrollTrigger: trigger },
      )
    },
    { dependencies: [reduceMotion], revertOnUpdate: true, scope },
  )
}
