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
import Image from 'next/image'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import RichText from '@/components/RichText'
import { DynamicIcon } from 'lucide-react/dynamic'
import MarnIcon from '@/components/ui/marn-icon'
import { CaretLeft } from '@/icons/caret-left-filled'

interface DesktopNavProps extends Omit<HeaderType, 'id' | 'updatedAt' | 'createdAt'> {
  className?: string
}

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
  [key: string]: any // Allow other props temporarily
}

export function DesktopNav({ tabs, cta, className }: DesktopNavProps) {
  const validTabs = tabs || []
  return (
    <div id="parent" className={cn('', className)}>
      <div className="px-site absolute start-0 end-0 w-full">
        <NavigationMenu className="" dir="rtl">
          <NavigationMenuList className="space-x-0">
            {validTabs.map((tab, i) => {
              if (tab.enableDropdown) {
                return (
                  <NavigationMenuItem key={i + 'dropdown'}>
                    {tab.enableDirectLink && tab.link ? (
                      <NavigationMenuTrigger className="rounded-full">
                        <CMSLink
                          {...tab.link}
                          variant="inline"
                          className="group hover:text-base-primary hover:no-underline"
                        >
                          {tab.label}
                        </CMSLink>
                      </NavigationMenuTrigger>
                    ) : (
                      <NavigationMenuTrigger className="rounded-full">
                        {tab.label}
                      </NavigationMenuTrigger>
                    )}
                    <NavigationMenuContent>
                      <ul
                        className="olg:grid-cols-[repeat(var(--lgColumns),minmax(332px,1fr))] grid w-[400px] gap-4 p-4 md:w-full md:grid-cols-2 lg:w-(--content-width) lg:grid-cols-[var(--lgColumns)]"
                        style={
                          {
                            '--lgColumns': `repeat(${tab.navItems?.length || 1}, minmax(0, 1fr))`,
                            '--content-width': `${(tab.navItems?.length || 1) * 332 + ((tab.navItems?.length || 1) - 1) * 16 + 32}px`,
                          } as React.CSSProperties
                        }
                      >
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
                          //       <p className="text-base-tertiary text-sm leading-tight">
                          //         {tab.description}
                          //       </p>
                          //     </a>
                          //   </NavigationMenuLink>
                          // </li>
                        }
                        {tab.navItems?.map((navItem) => (
                          <li key={navItem.id}>
                            {/* Use navItem.id as key */}
                            <ListItem {...navItem} />
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
                        className={cn(navigationMenuTriggerStyle(), 'rounded-full')}
                        label={tab.label}
                        {...tab.link}
                        variant="inline"
                      />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              }
              return null
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="pointer-events-none flex w-full max-w-54 flex-row items-center justify-end gap-2">
        {cta &&
          cta.map((ctaItem, id) => (
            <CMSLink
              key={id}
              {...ctaItem.link}
              size="sm"
              color={ctaItem.link.color ?? undefined}
              className="pointer-events-auto z-10"
            />
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
              <div className="text-base-tertiary mb-1 text-xs font-semibold">
                {featuredLink.tag}
              </div>
            )}

            <RichText data={featuredLink?.label} />
            <div className="mt-2 flex flex-col space-y-1">
              {featuredLink?.links?.map((subLink, i) => (
                <CMSLink
                  key={i}
                  {...subLink.link}
                  className="text-base-tertiary hover:text-base-secondary text-sm"
                />
              ))}
            </div>
          </div>
        )
        break
      case 'list':
        itemContent = (
          <div ref={ref as React.Ref<HTMLDivElement>} className={cn('', className)} {...props}>
            {listLinks?.tag && (
              <div className="text-base-tertiary mb-1 px-4 text-xs font-normal">
                {listLinks.tag}
              </div>
            )}
            <div className="mt-1 flex flex-col gap-0">
              {listLinks?.links?.map((subLink, i) => {
                return (
                  <CMSLink
                    key={i}
                    {...subLink.link}
                    icon={null}
                    label={null}
                    variant="inline"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      'ease-in-out-quad relative h-fit w-full gap-4 rounded-2xl px-3 text-base transition-all duration-300 hover:px-4 [&_svg]:size-5',
                    )}
                  >
                    {subLink.link.icon && (
                      <div className="group-hover:bg-background-neutral bg-background flex size-10 flex-none items-center justify-center rounded-full">
                        {subLink.link.icon === 'marn-icon' ? (
                          <MarnIcon className="text-base-secondary" />
                        ) : (
                          <DynamicIcon
                            name={subLink.link.icon as any}
                            className="text-base-secondary"
                          />
                        )}
                      </div>
                    )}
                    {subLink.link.type === 'reference' &&
                      subLink.link.reference?.value?.icon.url && (
                        <Image
                          src={subLink.link.reference.value.icon.url}
                          alt={subLink.link.reference.value.icon.alt}
                          width={300}
                          height={300}
                          className="aspect-square size-10 flex-none rounded-md"
                          priority
                          loading="eager"
                          unoptimized
                        />
                      )}
                    <div className="me-10 flex w-full flex-col justify-start gap-1">
                      {subLink.link.label}
                      {(subLink.link.description || subLink.link.reference?.value?.tagline) && (
                        <p className="text-base-tertiary line-clamp-2 text-sm leading-snug font-normal whitespace-normal">
                          {subLink.link.description || subLink.link.reference?.value?.tagline}
                        </p>
                      )}
                    </div>
                    <CaretLeft className="text-base-tertiary group-hover:text-base-tertiary absolute end-4 -translate-x-[4px] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </CMSLink>
                )
              })}
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
                <p className="text-base-tertiary line-clamp-2 text-sm leading-snug">
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
