'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { Badge } from '@/components/ui/badge'
import { CMSLink } from '@/components/Link'
import { DynamicIcon } from 'lucide-react/dynamic'
export const Variant08: React.FC<FeaturesBlock> = ({ columns, locale }) => {
  if (!columns?.length) return null
  return (
    <div className="py-xl container flex flex-col">
      <Tabs
        defaultValue={columns[0]?.id || 'tab-0'}
        className="gap-md"
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <TabsList className="flex gap-2 bg-transparent p-0">
          {columns.map((column, index) => (
            <TabsTrigger
              key={`tab-${index}`}
              value={column.id || `tab-${index}`}
              className="data-[state=active]:bg-base-primary data-[state=active]:text-inverted-primary h-fit rounded-full px-3 py-2 text-(length:--text-body-l) font-medium"
            >
              {column.tab?.tabIcon && (
                <DynamicIcon name={column.tab.tabIcon as any} className="size-4" />
              )}
              {column.tab?.tabLabel}
            </TabsTrigger>
          ))}
        </TabsList>

        {columns.map((column, index) => (
          <TabsContent
            key={`tab-content-${index}`}
            value={column.id || `tab-${index}`}
            className="gap-md bg-inverted-primary p-site rounded-space-sm grid grid-cols-1 md:grid-cols-2"
          >
            <div className={cn('gap-md grid h-full grid-rows-[auto_1fr_auto] items-start')}>
              {column.enableBadge && column.badge && (
                <Badge
                  variant={column.badge?.color}
                  icon={column.badge.icon}
                  icon_position={column.badge.icon_position}
                  label={column.badge?.label}
                />
              )}
              {column.content && (
                <div className="gap-sm flex grow auto-rows-auto flex-col">
                  {column.content.title && (
                    <h3 className="text-h3 font-medium">{column.content.title}</h3>
                  )}
                  {column.content.subtitle && (
                    <p className="text-body-md">{column.content.subtitle}</p>
                  )}
                </div>
              )}
              {column.enableCta && column.link?.label && (
                <div>
                  <CMSLink {...column.link} />
                </div>
              )}
            </div>
            {column.image && (
              <div className={cn('overflow-hidden')}>
                <Media
                  resource={column.image}
                  className="h-auto w-full"
                  imgClassName="w-full h-auto aspect-[4/3] object-cover rounded-xl md:rounded-2xl"
                />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
