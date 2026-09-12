export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.18,
    base: 0.42,
    slow: 0.72,
  },
  ease: {
    enter: 'power3.out',
    exit: 'power2.in',
    emphasize: 'expo.out',
    // Mirrored halves of one power4.inOut: velocity matches across a cut.
    cutIn: 'power4.in',
    cutOut: 'power4.out',
  },
  distance: {
    sm: 12,
    md: 28,
    lg: 48,
  },
  stagger: {
    tight: 0.05,
    base: 0.09,
  },
  /**
   * Waterfall entry (cut-the-curve §6): arrivals cascade from below with binary
   * opacity. Heavier elements travel further and longer; gaps shrink so the
   * cascade accelerates instead of queueing.
   */
  waterfall: {
    anchor: { y: 72, duration: 0.2 },
    normal: { y: 46, duration: 0.15 },
    light: { y: 34, duration: 0.12 },
    gap: 0.062,
    gapDecay: 0.84,
  },
} as const

export type WaterfallWeight = 'anchor' | 'normal' | 'light'
