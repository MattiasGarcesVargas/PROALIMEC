import type { CSSProperties } from 'react'

import { easeOutCubic, range } from '~/shared/motion'

export interface HangingSceneStyles {
  label: CSSProperties
  word: CSSProperties
  slotA: CSSProperties
  slotB: CSSProperties
  baseA: CSSProperties
  hookA: CSSProperties
  copyA: CSSProperties
  hookB: CSSProperties
  copyB: CSSProperties
}

const lerp = (from: number, to: number, t: number) => from + (to - from) * t

/**
 * Traduce el progreso 0..1 de la escena "Best seller" en estilos: el rótulo
 * entra, la palabra sube y sale, y cada corte cae desde el gancho por turnos.
 */
export function useHangingSceneMotion(progress: number): HangingSceneStyles {
  const label = easeOutCubic(range(progress, 0, 0.08))
  const wordIn = easeOutCubic(range(progress, 0.01, 0.26))
  const word = progress < 0.74 ? wordIn : 1 - 0.88 * range(progress, 0.74, 1)

  const aIn = easeOutCubic(range(progress, 0.03, 0.42))
  const aOut = range(progress, 0.44, 0.52)
  const bIn = easeOutCubic(range(progress, 0.55, 0.92))

  const copyAIn = easeOutCubic(range(progress, 0.22, 0.4))
  const copyBIn = easeOutCubic(range(progress, 0.74, 0.92))

  const drop = (t: number) => `translateY(${lerp(-64, 0, t)}%)`

  return {
    label: { opacity: label },
    word: { opacity: word, transform: `translateY(${36 * (1 - wordIn)}px)` },
    slotA: { opacity: 1 - aOut, pointerEvents: aOut > 0.5 ? 'none' : 'auto' },
    slotB: { opacity: easeOutCubic(range(progress, 0.5, 0.6)) },
    baseA: { opacity: easeOutCubic(range(progress, 0.08, 0.36)) },
    hookA: { opacity: Math.min(1, aIn * 5), transform: drop(aIn) },
    copyA: {
      opacity: copyAIn,
      transform: `translateY(${26 * (1 - copyAIn)}px)`,
    },
    hookB: { opacity: Math.min(1, bIn * 5), transform: drop(bIn) },
    copyB: {
      opacity: copyBIn,
      transform: `translateY(${26 * (1 - copyBIn)}px)`,
    },
  }
}
