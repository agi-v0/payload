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
import { motion } from 'motion/react'
import { AnimatePresence } from 'motion/react'

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

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileNavOpen])

  return (
    <header
      data-theme={headerTheme}
      className={cn(
        'bg-background fixed left-0 z-10 w-full max-w-screen transition-colors duration-300',
        'top-0 md:top-[var(--admin-bar-height,0px)]',
        hideBackground && 'before:opacity-0 after:opacity-0',
        isMobileNavOpen && 'bg-background-neutral',
        headerTheme && '',
      )}
    >
      {/* Main container with flex layout */}
      <div
        className={cn(
          'relative container flex h-[var(--header-height)] flex-row items-center justify-between transition-colors',
        )}
      >
        <div className="z-50 w-full max-w-54">
          <Link href="/" className="flex-shrink-0">
            <Logo className="text-base-primary h-5 w-auto" />
          </Link>
        </div>

        <DesktopNav cta={cta} tabs={tabs} className="hidden lg:flex lg:w-full lg:justify-end" />

        <div className="flex flex-shrink-0 justify-end lg:hidden">
          <Button
            variant="secondary"
            size="icon"
            color="neutral"
            onClick={() => setIsMobileNavOpen((prev) => !prev)} // Toggle state on click
            aria-expanded={isMobileNavOpen} // Accessibility
            aria-controls="mobile-nav-content" // Accessibility
          >
            {isMobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{isMobileNavOpen ? 'Close Menu' : 'Open Menu'}</span>
          </Button>
        </div>
      </div>

      {/* Conditionally rendered Mobile Nav Dropdown */}
      {/* Animate presence will be added later with framer-motion */}
      {isMobileNavOpen && (
        <AnimatePresence>
          <motion.div
            key="mobile-nav-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
            }}
            className={cn(
              // Remove island styles: absolute inset-x-4 top-full my-4 rounded-2xl border
              'bg-background-neutral fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 overflow-y-auto lg:hidden',
              // Remove animation for now, can be added back later
              // 'animate-in slide-in-from-top-4 duration-300 ease-out',
            )}
          >
            <MobileNav cta={cta} tabs={tabs} onLinkClick={() => setIsMobileNavOpen(false)} />
          </motion.div>
        </AnimatePresence>
      )}
    </header>
  )
}
