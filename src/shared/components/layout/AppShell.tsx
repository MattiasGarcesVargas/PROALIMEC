import type { ReactNode } from 'react'

import ChainRail from './ChainRail'
import PageTransition from './PageTransition'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-100 -translate-y-24 bg-white px-4 py-3 font-semibold text-navy shadow-md transition-transform focus:translate-y-0"
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

export default AppShell
