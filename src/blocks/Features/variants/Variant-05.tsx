import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'

export const Variant05: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:my-12 md:grid-cols-2 md:gap-4">
      {columns.map((column, index) => {
        return (
          <Card
            key={index}
            className="md:bg-inverted-primary overflow-hidden border-0 bg-transparent"
          >
            <CardContent className="flex flex-col gap-6 p-0 md:p-8">
              {column.image && (
                <div className="h-auto w-full">
                  <Media
                    resource={column.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-[16/9] object-cover rounded-space-md"
                  />
                </div>
              )}
              {column.enableBadge && column.badge && (
                <Badge
                  variant={column.badge?.color}
                  icon={column.badge.icon}
                  icon_position={column.badge.icon_position}
                  label={column.badge?.label}
                />
              )}
              {column.content && (
                <div>
                  <h2 className="text-h2 text-base-primary mb-space-sm font-medium">
                    {column.content?.title}
                  </h2>
                  {column.content?.featuresRichText && (
                    <RichText
                      className={cn('mx-0')}
                      data={column.content?.featuresRichText}
                      enableGutter={false}
                    />
                  )}
                </div>
              )}
              {column.enableCta && column.link?.label && (
                <div>
                  <CMSLink {...column.link} />
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
