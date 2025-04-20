'use client'

import type { Header as HeaderType } from '@/payload-types'
import type { Theme } from '@/providers/Theme/types' // Import Theme type if needed

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollInfo } from '@faceless-ui/scroll-info'
import { useHeaderObserver } from '@/providers/HeaderIntersectionObserver'
import { cn } from '@/utilities/ui'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

// Assuming DesktopNav and MobileNav will be refactored similarly
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

export const HeaderClient: React.FC<HeaderType> = ({ cta, tabs }) => {
  // Keep mobile nav state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const pathname = usePathname()

  // Use original hooks
  const { y } = useScrollInfo()
  const { headerTheme } = useHeaderObserver()

  // Effect to close mobile nav on pathname change
  useEffect(() => {
    setIsMobileNavOpen(false)
  }, [pathname])

  // Determine background visibility based on scroll and mobile nav state
  const hideBackground = y < 30 && !isMobileNavOpen
  // Determine if background/blur should be shown (derived from hideBackground)
  const showBgAndBlur = !hideBackground

  return (
    <header
      // Optionally use headerTheme for data-theme attribute if needed for deeper CSS targeting
      data-theme={headerTheme || 'light'}
      className={cn(
        'fixed top-0 z-50 flex w-full max-w-screen items-center transition-colors duration-300',
        // Apply bg and blur when background should be shown
        showBgAndBlur ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent',
        // Apply border *only* when mobile nav is open
        isMobileNavOpen && 'border-b',
      )}
    >
      <div className="container flex items-center">
        {/* Pass necessary props to Nav components */}
        <div className="hidden md:flex md:w-full">
          {/* Pass hideBackground or theme if needed by DesktopNav */}
          <DesktopNav cta={cta} tabs={tabs} />
        </div>
        <div className="flex md:hidden">
          <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full sm:max-w-xs">
              <MobileNav cta={cta} tabs={tabs} onLinkClick={() => setIsMobileNavOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
