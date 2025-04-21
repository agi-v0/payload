'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion' // Use Accordion for dropdowns

// Define the type for a single nav item from HeaderType
type NavItem = NonNullable<NonNullable<HeaderType['tabs']>[number]['navItems']>[number]

interface MobileNavProps extends Omit<HeaderType, 'id' | 'updatedAt' | 'createdAt'> {
  onLinkClick?: () => void // Callback to close sheet on link click
}

export function MobileNav({ tabs, cta, onLinkClick }: MobileNavProps) {
  const validTabs = tabs || []
  const pathname = usePathname()

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick()
    }
  }

  return (
    <div className="flex flex-col">
      {/* Optional: Add Logo/Brand Link at the top */}
      {/* <Link href="/" className="mb-4" onClick={handleLinkClick}>
        <span className="font-bold">Your Logo</span>
      </Link> */}

      <nav className="flex-grow space-y-1 px-2 py-4">
        {validTabs.map((tab, i) => {
          // --- Dropdown Tab ---
          if (tab.enableDropdown) {
            return (
              <Accordion key={i} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${i}`} className="border-b-0">
                  <AccordionTrigger className="text-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-base font-medium hover:no-underline">
                    {tab.label}
                  </AccordionTrigger>
                  <AccordionContent className="ml-4 space-y-1 border-l pt-1 pb-0 pl-4">
                    {/* Render Description Links First */}
                    {tab.descriptionLinks?.map((descLink, descIdx) => (
                      <div
                        key={`desc-${descIdx}`}
                        onClick={handleLinkClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
                      >
                        <CMSLink
                          {...descLink.link}
                          className="text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md py-1 text-sm font-medium"
                        />
                      </div>
                    ))}
                    {/* Render Nav Items */}
                    {tab.navItems?.map((navItem) => (
                      <MobileNavItem key={navItem.id} item={navItem} onClick={handleLinkClick} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          }
          // --- Direct Link Tab ---
          if (tab.enableDirectLink && tab.link) {
            return (
              <div
                key={i}
                onClick={handleLinkClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
              >
                <CMSLink
                  {...tab.link}
                  label={tab.label}
                  className={cn(
                    'text-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-base font-medium',
                    pathname === tab.link.url && 'bg-accent', // Basic active state
                  )}
                />
              </div>
            )
          }
          return null
        })}
      </nav>

      {/* Optional: CTA Button at the bottom */}
      {cta && (
        <div className="mt-auto space-y-2 p-4">
          {cta.map((ctaItem, i) => (
            <div
              onClick={handleLinkClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
              key={i}
            >
              <CMSLink
                {...ctaItem.link}
                size="md"
                color={ctaItem.link.color ?? undefined}
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Helper component to render individual items within the accordion
interface MobileNavItemProps {
  item: NavItem
  onClick: () => void
}

function MobileNavItem({ item, onClick }: MobileNavItemProps) {
  switch (item.style) {
    case 'featured':
      return (
        <div className="py-1">
          {item.featuredLink?.tag && (
            <div className="text-muted-foreground mb-1 text-xs font-semibold">
              {item.featuredLink.tag}
            </div>
          )}
          {/* Rich text rendering? */}
          <div className="text-foreground mb-1 text-sm font-medium">Featured Label</div>
          {item.featuredLink?.links?.map((subLink, i) => (
            <div
              key={i}
              onClick={onClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onClick()}
            >
              <CMSLink
                {...subLink.link}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md py-1 pl-2 text-sm"
              />
            </div>
          ))}
        </div>
      )
    case 'list':
      return (
        <div className="py-1">
          {item.listLinks?.tag && (
            <div className="text-muted-foreground mb-1 text-xs font-semibold">
              {item.listLinks.tag}
            </div>
          )}
          {item.listLinks?.links?.map((subLink, i) => (
            <div
              key={i}
              onClick={onClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onClick()}
            >
              <CMSLink
                {...subLink.link}
                className="text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md py-1 pl-2 text-sm"
              />
            </div>
          ))}
        </div>
      )
    case 'default':
    default:
      if (!item.defaultLink?.link) return null
      return (
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onClick()}
        >
          <CMSLink
            {...item.defaultLink.link}
            className="text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md py-1 text-sm font-medium"
          />
        </div>
      )
  }
}
