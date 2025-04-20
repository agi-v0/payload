'use client'

import * as React from 'react'

import { cn } from '@/utilities/ui'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { Button } from '@/components/ui/button'
import RichText from '@/components/RichText'
import { ChevronDown } from 'lucide-react'

interface DesktopNavProps extends Omit<HeaderType, 'id' | 'updatedAt' | 'createdAt'> {}

// Define the type for a single nav item directly based on HeaderType structure
type NavItem = NonNullable<NonNullable<HeaderType['tabs']>[number]['navItems']>[number]

// Explicitly define props for ListItem based on the NavItem structure
interface ListItemProps {
  className?: string
  style?: 'default' | 'featured' | 'list' | null
  defaultLink?: NavItem['defaultLink']
  featuredLink?: NavItem['featuredLink']
  listLinks?: NavItem['listLinks']
  id?: string | null
  // Add other props passed down if necessary, e.g., from spread
  [key: string]: any // Allow other props temporarily
}

export function DesktopNav({ tabs, cta }: DesktopNavProps) {
  const validTabs = tabs || []
  console.log(cta)
  return (
    <div id="parent" className="grid h-(--header-height) w-full grid-cols-12">
      <div className="col-span-2"></div>
      <NavigationMenu className="col-span-8" dir="rtl">
        <NavigationMenuList>
          {validTabs.map((tab, i) => {
            if (tab.enableDropdown) {
              return (
                <NavigationMenuItem key={i + 'dropdown'}>
                  {tab.enableDirectLink && tab.link ? (
                    <NavigationMenuTrigger>
                      <CMSLink {...tab.link} variant="inline" className={'group'}>
                        {tab.label}
                      </CMSLink>
                    </NavigationMenuTrigger>
                  ) : (
                    <NavigationMenuTrigger>{tab.label}</NavigationMenuTrigger>
                  )}
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[900px] lg:grid-cols-3">
                      {
                        (tab.description || tab.descriptionLinks) && null
                        // <li className="row-span-3 md:col-span-1">
                        //   {' '}
                        //   {/* Adjust span based on grid */}
                        //   <NavigationMenuLink asChild>
                        //     <a
                        //       className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                        //       href={tab.descriptionLinks?.[0]?.link?.url || '#'}
                        //     >
                        //       <div className="mt-4 mb-2 text-lg font-medium">{tab.label}</div>
                        //       <p className="text-muted-foreground text-sm leading-tight">
                        //         {tab.description}
                        //       </p>
                        //     </a>
                        //   </NavigationMenuLink>
                        // </li>
                      }
                      {tab.navItems?.map((navItem) => (
                        <li key={navItem.id}>
                          {/* Use navItem.id as key */}
                          <ListItem {...(navItem as NavItem)} />
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            }
            if (tab.enableDirectLink && tab.link) {
              return (
                <NavigationMenuItem key={i + 'directLink'}>
                  <NavigationMenuLink asChild>
                    <CMSLink
                      className={navigationMenuTriggerStyle()}
                      label={tab.label}
                      {...tab.link}
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            }
            return null
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="col-span-2 flex flex-row items-center gap-2">
        {cta &&
          cta.map((ctaItem, id) => (
            <CMSLink key={id} {...ctaItem.link} size="sm" color={ctaItem.link.color ?? undefined} />
          ))}
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<HTMLAnchorElement | HTMLDivElement, ListItemProps>(
  ({ className, style, defaultLink, featuredLink, listLinks, ...props }, ref) => {
    let itemContent: React.ReactNode | null = null

    switch (style) {
      case 'featured':
        itemContent = (
          <div ref={ref as React.Ref<HTMLDivElement>} className={cn('p-3', className)} {...props}>
            {featuredLink?.tag && (
              <div className="text-muted-foreground mb-1 text-xs font-semibold">
                {featuredLink.tag}
              </div>
            )}

            <RichText data={featuredLink?.label} />
            <div className="mt-2 flex flex-col space-y-1">
              {featuredLink?.links?.map((subLink, i) => (
                <CMSLink
                  key={i}
                  {...subLink.link}
                  className="text-muted-foreground hover:text-foreground text-sm"
                />
              ))}
            </div>
          </div>
        )
        break
      case 'list':
        itemContent = (
          <div ref={ref as React.Ref<HTMLDivElement>} className={cn('p-3', className)} {...props}>
            {listLinks?.tag && (
              <div className="text-muted-foreground mb-1 text-xs font-semibold">
                {listLinks.tag}
              </div>
            )}
            <div className="mt-1 flex flex-col space-y-1">
              {listLinks?.links?.map((subLink, i) => (
                <CMSLink
                  key={i}
                  {...subLink.link}
                  className="text-muted-foreground hover:text-foreground text-sm"
                />
              ))}
            </div>
          </div>
        )
        break
      case 'default':
      default:
        if (!defaultLink?.link) return null
        return (
          <NavigationMenuLink asChild>
            <CMSLink
              ref={ref as React.Ref<HTMLAnchorElement>}
              className={cn(
                'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
                className,
              )}
              {...defaultLink.link}
              {...props}
            >
              <div className="text-sm leading-none font-medium">{defaultLink.link.label}</div>
              {defaultLink.description && (
                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                  {defaultLink.description}
                </p>
              )}
            </CMSLink>
          </NavigationMenuLink>
        )
    }

    return itemContent
  },
)
ListItem.displayName = 'ListItem'

const ButtonVariants = ({ variant }: { variant: string }) => {
  // Simplified - In real app, import { buttonVariants } from "@/components/ui/button"
  return 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90'
}
