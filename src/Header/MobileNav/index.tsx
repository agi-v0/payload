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

export function MobileNav({ tabs, cta, onLinkClick }: MobileNavProps) {
  const validTabs = tabs || []
  const pathname = usePathname()
  const [activeSubmenuIndex, setActiveSubmenuIndex] = React.useState<number | null>(null)

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick()
    }
  }

  const handleBackClick = () => {
    setActiveSubmenuIndex(null)
  }

  const handleTabClick = (index: number, tab: Tab) => {
    if (tab.enableDropdown) {
      setActiveSubmenuIndex(index)
    } else if (tab.enableDirectLink && tab.link) {
      handleLinkClick() // Close sheet for direct links
      // Navigation is handled by CMSLink
    }
  }

  const activeTab = activeSubmenuIndex !== null ? validTabs[activeSubmenuIndex] : null

  return (
    <div className="flex h-full flex-col">
      {/* NEW: Scrollable wrapper for menu content */}
      <div className="flex-grow overflow-y-auto pb-20">
        {' '}
        {/* Added pb-20 for CTA spacing */}
        {/* Conditional Rendering for Main Menu or Submenu */}
        {activeTab && activeTab.enableDropdown ? (
          /* Submenu View */
          <div className="flex flex-col">
            <div className="flex items-center border-b px-4 py-2">
              <Button
                variant="ghost"
                size="sm"
                color="neutral"
                className="-ms-2 px-2"
                onClick={handleBackClick}
                aria-label="Go back to main menu"
              >
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </Button>
              <h3 className="ml-4 text-base font-semibold">{activeTab.label}</h3>
            </div>
            <nav className="space-y-1 px-4 py-4">
              {/* Render Description Links First */}
              {activeTab.descriptionLinks?.map((descLink, descIdx) => (
                <div
                  key={`desc-${descIdx}`}
                  onClick={handleLinkClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleLinkClick()}
                >
                  <CMSLink
                    {...descLink.link}
                    className="text-foreground hover:bg-accent hover:text-accent-foreground -mx-2 block rounded-md px-2 py-1.5 text-sm font-medium"
                  />
                </div>
              ))}
              {/* Render Nav Items */}
              {activeTab.navItems?.map((navItem) => (
                <MobileNavItem key={navItem.id} item={navItem} onClick={handleLinkClick} />
              ))}
            </nav>
          </div>
        ) : (
          /* Main Menu View */
          <nav className="space-y-1 px-2 py-4">
            {validTabs.map((tab, i) => {
              // --- Dropdown Tab (renders as a clickable item) ---
              if (tab.enableDropdown) {
                return (
                  <button
                    key={i}
                    onClick={() => handleTabClick(i, tab)}
                    className={cn(
                      'text-foreground hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    <span>{tab.label}</span>
                  </button>
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
                        pathname === tab.link.url && 'bg-accent',
                      )}
                    />
                  </div>
                )
              }
              return null
            })}
          </nav>
        )}
      </div>{' '}
      {/* End Scrollable wrapper */}
      {/* Always render CTA Button at the bottom, pushed by mt-auto */}
      {cta && (
        <div className="mt-auto space-y-2 border-t p-4">
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
    'text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md py-1 text-sm -mx-2 px-2' // Added negative margin and padding

  switch (item.style) {
    case 'featured':
      return (
        <div className="py-1">
          {item.featuredLink?.tag && (
            <div className="text-muted-foreground mb-1 px-2 text-xs font-semibold">
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
              <CMSLink {...subLink.link} className={cn(baseItemClasses)} />
            </div>
          ))}
        </div>
      )
    case 'list':
      return (
        <div className="py-1">
          {item.listLinks?.tag && (
            <div className="text-muted-foreground mb-1 px-3 text-xs font-semibold">
              {item.listLinks.tag}
            </div>
          )}
          {item.listLinks?.links?.map((subLink, i) => {
            // --- Type Guard Setup --- START
            const referenceValue = subLink.link.reference?.value
            const isReferenceObject =
              referenceValue && typeof referenceValue === 'object' && !Array.isArray(referenceValue)
            // --- Type Guard Setup --- END

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
                  className={cn(
                    baseItemClasses,
                    'group flex items-center justify-start gap-3', // Use flex, add gap
                  )}
                >
                  {/* Icon/Image Rendering */}
                  {(subLink.link.icon ||
                    (isReferenceObject && 'icon' in referenceValue && referenceValue.icon)) && (
                    <div className="group-hover:bg-background-neutral bg-background flex size-10 flex-none items-center justify-center rounded-full">
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
                        referenceValue.icon?.url ? (
                        <Image
                          src={referenceValue.icon.url} // Safe to access now
                          alt={referenceValue.icon.alt ?? ''} // Safe to access now
                          width={300} // Keep original desktop size for now
                          height={300}
                          className="aspect-square size-10 flex-none rounded-md"
                        />
                      ) : null}
                    </div>
                  )}
                  {/* Text Content (with type safety for tagline) */}
                  <div className="flex-grow space-y-1">
                    <div className="text-foreground text-sm leading-none font-medium">
                      {subLink.link.label}
                    </div>
                    {(subLink.link.description ||
                      (isReferenceObject &&
                        'tagline' in referenceValue &&
                        referenceValue.tagline)) && (
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug font-normal">
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
