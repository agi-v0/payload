import React from 'react'
import { VariantProps } from './VariantTypes'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Variant08: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <Tabs defaultValue={columns[0]?.id || 'tab-0'} className="w-full">
      <TabsList className="mb-8 grid w-full grid-cols-2 md:grid-cols-4">
        {columns.map((column, index) => (
          <TabsTrigger
            key={`tab-${index}`}
            value={column.id || `tab-${index}`}
            className="flex items-center gap-2"
          >
            {column.icon && (
              <span className="text-current">
                {LucideIcons[column.icon as keyof typeof LucideIcons] &&
                  React.createElement(LucideIcons[column.icon as keyof typeof LucideIcons], {
                    className: 'h-4 w-4',
                  })}
              </span>
            )}
            {column.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {columns.map((column, index) => (
        <TabsContent
          key={`tab-content-${index}`}
          value={column.id || `tab-${index}`}
          className="pt-4"
        >
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:w-1/2">
              <h3 className="text-2xl font-semibold">{column.title}</h3>

              {column.content && (
                <div className="rich-text text-muted-foreground">
                  {/* Render rich text content */}
                </div>
              )}

              {column.showFeatureList && column.features && column.features.length > 0 && (
                <ul className="mt-4 space-y-3">
                  {column.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon
                      ? (LucideIcons[feature.icon as keyof typeof LucideIcons] as LucideIcon)
                      : LucideIcons.Check

                    return (
                      <li key={`feature-item-${idx}`} className="flex items-start gap-3">
                        <div className="flex-shrink-0 pt-1">
                          <FeatureIcon className="text-primary h-5 w-5" />
                        </div>
                        <div>{/* Render feature content */}</div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            {column.image && (
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={
                      typeof column.image === 'object' && column.image.url
                        ? column.image.url
                        : '/placeholder.jpg'
                    }
                    alt={column.title}
                    width={600}
                    height={400}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
