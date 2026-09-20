import type { ReactNode } from 'react'

import { ChainRail } from '~/shared/components/ChainRail'
import { PageTransition } from '~/shared/components/PageTransition'
import { SiteFooter } from '~/shared/components/SiteFooter'
import { SiteHeader } from '~/shared/components/SiteHeader'

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-white px-4 py-3 font-semibold text-navy shadow-md transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <ChainRail />
      <SiteHeader />
      {children}
      <SiteFooter />
      <PageTransition />
    </>
  )
}
