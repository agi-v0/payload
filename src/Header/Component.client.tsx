'use client'
import React, { useEffect, useState } from 'react'
import type { Header as HeaderType } from '@/payload-types'
import type { Theme } from '@/providers/Theme/types' // Import Theme type if needed
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'
import { useScrollInfo } from '@faceless-ui/scroll-info'
import { useHeaderObserver } from '@/providers/HeaderIntersectionObserver'
import { cn } from '@/utilities/ui'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/ui/logo'

// Assuming DesktopNav and MobileNav will be refactored similarly
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export const HeaderClient: React.FC<HeaderType> = ({ cta, tabs }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [hideBackground, setHideBackground] = React.useState(true)

  const pathname = usePathname()
  const { y } = useScrollInfo()
  const { headerTheme } = useHeaderObserver()

  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (isMobileNavOpen) {
      setHideBackground(false)
    } else {
      setHideBackground(y < 30)
    }
  }, [y, isMobileNavOpen])

  return (
    <header
      data-theme={headerTheme}
      className={cn(
        'bg-background fixed left-0 z-50 w-full max-w-screen transition-colors duration-300',
        'top-0 md:top-[var(--admin-bar-height,0px)]',
        hideBackground && 'before:opacity-0 after:opacity-0',
        isMobileNavOpen && 'border-b border-b-neutral-200 before:opacity-100 after:opacity-100',
        headerTheme && '',
      )}
    >
      {/* Main container with flex layout */}
      <div className="container grid h-[var(--header-height)] grid-cols-4 items-center justify-between lg:grid-cols-10">
        <Link href="/" className="col-span-2 flex-shrink-0">
          <Logo className="text-base-primary" />
        </Link>

        <DesktopNav
          cta={cta}
          tabs={tabs}
          className="col-span-8 hidden lg:grid lg:w-full lg:grid-cols-subgrid"
        />

        <div className="col-span-2 flex flex-shrink-0 justify-end lg:hidden">
          <Button
            variant="secondary"
            size="icon"
            color="neutral"
            onClick={() => setIsMobileNavOpen((prev) => !prev)} // Toggle state on click
            aria-expanded={isMobileNavOpen} // Accessibility
            aria-controls="mobile-nav-content" // Accessibility
          >
            {isMobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isMobileNavOpen ? 'Close Menu' : 'Open Menu'}</span>
          </Button>
        </div>
      </div>

      {/* Conditionally rendered Mobile Nav Dropdown */}
      {/* Animate presence will be added later with framer-motion */}
      {isMobileNavOpen && (
        <div
          id="mobile-nav-content" // For aria-controls
          className={cn(
            'bg-background absolute inset-x-4 top-full z-40 my-4 rounded-2xl border md:hidden',
            'animate-in slide-in-from-top-4 duration-300 ease-out',
          )}
        >
          <MobileNav cta={cta} tabs={tabs} onLinkClick={() => setIsMobileNavOpen(false)} />
        </div>
      )}
    </header>
  )
}
