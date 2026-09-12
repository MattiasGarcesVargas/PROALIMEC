import type { ReactNode } from 'react'

import { BrandCursor } from '~/shared/components/BrandCursor'
import { ChainRail } from '~/shared/components/ChainRail'
import { SiteFooter } from '~/shared/components/SiteFooter'
import { SiteHeader } from '~/shared/components/SiteHeader'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-white px-4 py-3 font-semibold text-navy shadow-md transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <ChainRail />
      <BrandCursor />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
