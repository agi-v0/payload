'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ChevronLeft } from 'lucide-react' // Import back icon

import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { Button } from '@/components/ui/button' // Import Button for Back button
import { DynamicIcon } from 'lucide-react/dynamic'
import MarnIcon from '@/components/ui/marn-icon'
import { cva } from 'class-variance-authority'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/motion-ui/accordion'
import { CaretLeft } from '@/icons/caret-left-filled'
import { NavigationImagePreloader } from '../NavigationIconPreloader'

// Define the type for a single nav item from HeaderType
type NavItem = NonNullable<NonNullable<HeaderType['tabs']>[number]['navItems']>[number]
type Tab = NonNullable<HeaderType['tabs']>[number] // Define Tab type

// Explicitly define props for ListItem based on the NavItem structure
interface ListItemProps {
  className?: string
  style?: 'default' | 'featured' | 'list' | null
  defaultLink?: NavItem['defaultLink']
  featuredLink?: NavItem['featuredLink']
  listLinks?: NavItem['listLinks']
  id?: string | null
  [key: string]: any // Allow other props temporarily
}

interface MobileNavProps extends Omit<HeaderType, 'id' | 'updatedAt' | 'createdAt'> {
  onLinkClick?: () => void // Callback to close sheet on link click
}

const navigationMenuTriggerStyle = cva(
  'focus:text-base-primary data-[closed]:text-base-secondary inline-flex w-full items-center justify-start gap-2 bg-transparent py-4 text-(length:--text-h3) font-medium text-(color:--color-base-secondary) transition-colors group-data-[expanded]:text-(color:--color-base-primary) hover:text-(color:--color-base-primary) hover:no-underline focus:bg-transparent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-transparent data-[state=open]:focus:bg-transparent',
)

export function MobileNav({ tabs, cta, onLinkClick }: MobileNavProps) {
  const validTabs = tabs || []
  const pathname = usePathname()

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick()
    }
  }

  const handleDirectLinkClick = () => {
    handleLinkClick() // Close sheet for direct links
    // Navigation is handled by CMSLink
  }

  return (
    <div className="flex h-full w-full flex-col">
      {/* Preload all navigation images */}
      <NavigationImagePreloader tabs={tabs} />

      {/* NEW: Scrollable wrapper for menu content */}
      <div className="p-site flex-grow overflow-y-auto pb-20">
        {/* Added pb-20 for CTA spacing */}
        {/* Main Menu View using Accordion */}
        <Accordion
          className="divide-border flex w-full flex-col divide-y"
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          {validTabs.map((tab, i) => {
            // --- Dropdown Tab (renders as AccordionItem) ---
            if (tab.enableDropdown) {
              return (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className={cn(navigationMenuTriggerStyle(), '')}>
                    <span>{tab.label}</span>
                    <CaretLeft className="size-4 -rotate-90 transition-transform duration-200 group-data-[expanded]:rotate-90" />
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <nav className="space-y-4 pb-4">
                      {tab.navItems?.map((navItem) => (
                        <MobileNavItem key={navItem.id} item={navItem} onClick={handleLinkClick} />
                      ))}
                    </nav>
                  </AccordionContent>
                </AccordionItem>
              )
            }
            // --- Direct Link Tab ---
            if (tab.enableDirectLink && tab.link) {
              return (
                <CMSLink
                  key={i}
                  onClick={handleDirectLinkClick}
                  {...tab.link}
                  label={tab.label}
                  variant="inline"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'text-base-secondary text-(length:--text-h3)',
                  )}
                />
              )
            }
            return null
          })}
        </Accordion>
      </div>
      {/* End Scrollable wrapper */}
      {/* Always render CTA Button at the bottom, pushed by mt-auto */}
      {cta && (
        <div className="p-site mt-auto space-y-2">
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
                size="lg"
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

// Helper component to render individual items within the submenu
interface MobileNavItemProps {
  item: NavItem
  onClick: () => void
}

function MobileNavItem({ item, onClick }: MobileNavItemProps) {
  // Base class for all nav items in the submenu for consistent padding/hover
  const baseItemClasses =
    'text-base-secondary hover:no-underline h-fit hover:bg-background-neutral-subtle hover:text-base-primary block rounded-space-sm py-2 text-(length:--text-body-md) px-3'

  switch (item.style) {
    case 'featured':
      return (
        <div className="">
          {item.featuredLink?.tag && (
            <div className="text-base-tertiary mx-3 mb-2 text-sm font-normal">
              {item.featuredLink.tag}
            </div>
          )}
          {/* Rich text rendering? - Assuming we just show links for now */}
          {/* <div className="text-foreground mb-1 text-sm font-medium">Featured Label</div> */}
          {item.featuredLink?.links?.map((subLink, i) => (
            <div
              key={i}
              onClick={onClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onClick()}
            >
              <CMSLink {...subLink.link} variant="inline" className={baseItemClasses} />
            </div>
          ))}
        </div>
      )
    case 'list':
      return (
        <div className="space-y-2">
          {item.listLinks?.tag && (
            <div className="text-base-tertiary mx-3 mb-2 text-sm font-normal">
              {item.listLinks.tag}
            </div>
          )}
          {item.listLinks?.links?.map((subLink, i) => {
            const referenceValue = subLink.link.reference?.value
            const isReferenceObject =
              referenceValue && typeof referenceValue === 'object' && !Array.isArray(referenceValue)

            return (
              <div
                key={i}
                onClick={onClick}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onClick()}
              >
                <CMSLink
                  {...subLink.link}
                  label={undefined}
                  icon={undefined}
                  variant="inline"
                  className={cn(
                    baseItemClasses,
                    'group flex items-center justify-start gap-2', // Use flex, add gap
                    isReferenceObject &&
                      'icon' in referenceValue &&
                      typeof referenceValue.icon === 'object' && // Ensure icon itself is an object
                      referenceValue.icon &&
                      'items-start',
                  )}
                >
                  {/* Icon/Image Rendering */}
                  {(subLink.link.icon ||
                    (isReferenceObject && 'icon' in referenceValue && referenceValue.icon)) && (
                    <div className="group-hover:bg-background-neutral bg-background flex size-10 flex-none items-center justify-center rounded-full [&_svg]:size-4">
                      {subLink.link.icon ? (
                        subLink.link.icon === 'marn-icon' ? (
                          <MarnIcon className="text-base-secondary" />
                        ) : (
                          <DynamicIcon
                            name={subLink.link.icon as any}
                            className="text-base-secondary"
                          />
                        )
                      ) : // Check for reference icon only if subLink.link.icon is not present
                      isReferenceObject &&
                        'icon' in referenceValue &&
                        typeof referenceValue.icon === 'object' && // Ensure icon itself is an object
                        referenceValue.icon ? (
                        <Image
                          src={
                            referenceValue.icon.sizes?.thumbnail?.url ||
                            referenceValue.icon.url ||
                            ''
                          }
                          alt={referenceValue.icon.alt ?? ''} // Safe to access now
                          width={40}
                          height={40}
                          className="aspect-square size-10 flex-none rounded-md"
                          priority
                          sizes="40px"
                        />
                      ) : null}
                    </div>
                  )}
                  {/* Text Content (with type safety for tagline) */}
                  <div className="flex-grow space-y-1 font-medium">
                    {subLink.link.label}
                    {(subLink.link.description ||
                      (isReferenceObject &&
                        'tagline' in referenceValue &&
                        referenceValue.tagline)) && (
                      <p className="text-base-tertiary line-clamp-2 text-sm leading-snug font-normal whitespace-normal">
                        {subLink.link.description ||
                          (isReferenceObject && 'tagline' in referenceValue
                            ? referenceValue.tagline
                            : '')}
                      </p>
                    )}
                  </div>
                </CMSLink>
              </div>
            )
          })}
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
          <CMSLink {...item.defaultLink.link} className={cn(baseItemClasses, 'font-medium')} />
        </div>
      )
  }
}
