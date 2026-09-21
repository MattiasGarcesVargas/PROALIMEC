import type { CSSProperties } from 'react'

import { easeOutCubic, range } from '~/shared/motion'

export interface HangingSceneStyles {
  label: CSSProperties
  word: CSSProperties
  slotA: CSSProperties
  slotB: CSSProperties
  hookA: CSSProperties
  copyA: CSSProperties
  hookB: CSSProperties
  copyB: CSSProperties
}

const lerp = (from: number, to: number, t: number) => from + (to - from) * t

/**
 * Traduce el progreso 0..1 de la escena "Best seller" en estilos. El orden es
 * estrictamente secuencial: primero entra el rótulo, luego la palabra termina
 * de montarse (0.20) y solo entonces empieza a caer el corte 01 (0.24). La
 * palabra se atenúa mientras baja ese primer corte y ya se queda atenuada de
 * fondo durante el segundo. El corte 02 releva al 01 una vez leída su ficha.
 */
export function useHangingSceneMotion(progress: number): HangingSceneStyles {
  const label = easeOutCubic(range(progress, 0, 0.06))
  const wordIn = easeOutCubic(range(progress, 0.02, 0.2))
  const wordDim = easeOutCubic(range(progress, 0.26, 0.46))
  const word = wordIn - 0.88 * wordDim

  const aIn = easeOutCubic(range(progress, 0.24, 0.5))
  const aOut = range(progress, 0.62, 0.7)
  const bIn = easeOutCubic(range(progress, 0.7, 0.92))

  const copyAIn = easeOutCubic(range(progress, 0.4, 0.56))
  const copyBIn = easeOutCubic(range(progress, 0.82, 0.96))

  const drop = (t: number) => `translateY(${lerp(-64, 0, t)}%)`

  return {
    label: { opacity: label },
    word: { opacity: word, transform: `translateY(${36 * (1 - wordIn)}px)` },
    slotA: { opacity: 1 - aOut, pointerEvents: aOut > 0.5 ? 'none' : 'auto' },
    slotB: { opacity: easeOutCubic(range(progress, 0.68, 0.78)) },
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
