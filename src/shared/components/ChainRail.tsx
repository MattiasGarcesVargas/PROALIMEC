import { useRef } from 'react'

import { useChainRail } from '~/shared/motion'

export function ChainRail() {
  const railRef = useRef<HTMLDivElement>(null)
  useChainRail(railRef)

  return (
    <div
      ref={railRef}
      aria-hidden="true"
      className="chain-rail hidden md:block"
    >
      <span className="chain-rail__fill" data-chain-fill />
      <span className="chain-rail__node" data-chain-node />
    </div>
  )
}
