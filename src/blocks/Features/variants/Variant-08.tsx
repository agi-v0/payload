'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { Badge } from '@/components/ui/badge'
import { CMSLink } from '@/components/Link'
import { useLocale } from 'next-intl'

export const Variant08: React.FC<FeaturesBlock> = ({ columns }) => {
  const locale = useLocale()
  if (!columns?.length) return null
  return (
    <Tabs
      defaultValue={columns[0]?.id || 'tab-0'}
      className="gap-space-site my-8 md:my-12"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <TabsList className="flex gap-2 bg-transparent p-0">
        {columns.map((column, index) => (
          <TabsTrigger
            key={`tab-${index}`}
            value={column.id || `tab-${index}`}
            className="data-[state=active]:bg-base-primary data-[state=active]:text-inverted-primary text-body-lg rounded-full px-3 py-2 font-medium"
          >
            {column.tabLabel}
          </TabsTrigger>
        ))}
      </TabsList>

      {columns.map((column, index) => (
        <TabsContent
          key={`tab-content-${index}`}
          value={column.id || `tab-${index}`}
          className="gap-space-md bg-inverted-primary p-space-site rounded-space-sm grid grid-cols-1 md:grid-cols-2"
        >
          <div className={cn('gap-space-md grid h-full grid-rows-[auto_1fr_auto] items-start')}>
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
                {column.content.copy && <p className="text-body-md">{column.content.copy}</p>}
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
  )
}
