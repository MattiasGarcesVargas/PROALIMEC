import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router'

import { ButtonLink } from '~/shared/components/Button'
import { BrandLogo } from '~/shared/components/BrandLogo'
import { Container } from '~/shared/components/Container'
import { cn } from '~/shared/lib/cn'

const navigationItems = [
  { label: 'Inicio', to: '/' },
  { label: 'Productos', to: '/productos' },
  { label: 'Contáctanos', to: '/contacto' },
] as const

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setIsOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300',
        isScrolled
          ? 'border-cold-border bg-white/95 shadow-xs backdrop-blur-md'
          : 'border-transparent bg-white',
      )}
    >
      <Container className="flex h-25 items-center justify-between gap-5">
        <BrandLogo className="w-35" priority />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'relative py-3 text-sm font-semibold text-navy no-underline after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:bg-orange after:transition-transform',
                      isActive
                        ? 'after:scale-x-100'
                        : 'after:scale-x-0 hover:after:scale-x-100',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            to="/contacto"
            size="compact"
            className="hidden sm:inline-flex"
          >
            Solicitar cotización
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex size-11 items-center justify-center rounded-full border border-cold-border bg-white text-navy lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          'fixed inset-x-0 bottom-0 top-25 z-40 bg-navy px-5 py-10 text-white transition-[opacity,visibility] lg:hidden',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <nav aria-label="Navegación móvil">
          <ul className="flex flex-col">
            {navigationItems.map((item, index) => (
              <li key={item.to} className="border-b border-white/15">
                <NavLink
                  ref={index === 0 ? firstLinkRef : undefined}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-18 items-center font-display text-2xl font-semibold no-underline"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <ButtonLink
            to="/contacto"
            variant="inverse"
            className="mt-10 w-full"
            onClick={() => setIsOpen(false)}
          >
            Solicitar cotización
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
