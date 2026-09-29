import { describe, expect, it } from 'vitest'

import { cn } from '@/shared/utils/cn'

describe('cn', () => {
  it('keeps custom font sizes next to a text color', () => {
    expect(cn('text-section text-muted', 'text-navy')).toBe('text-section text-navy')
  })

  it('lets a later font size replace a custom one', () => {
    expect(cn('text-section', 'text-lg')).toBe('text-lg')
  })
})
