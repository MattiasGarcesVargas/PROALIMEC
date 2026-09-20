import { describe, expect, it } from 'vitest'

import { parseLineFilter } from '~/sections/product-catalog/hooks/use-product-filter'

describe('parseLineFilter', () => {
  it('keeps the supported lines coming from the URL', () => {
    expect(parseLineFilter('cerdo')).toBe('cerdo')
    expect(parseLineFilter('res')).toBe('res')
    expect(parseLineFilter('todo')).toBe('todo')
  })

  it('falls back to "todo" for missing or unknown values', () => {
    expect(parseLineFilter(null)).toBe('todo')
    expect(parseLineFilter('')).toBe('todo')
    expect(parseLineFilter('pollo')).toBe('todo')
  })
})
