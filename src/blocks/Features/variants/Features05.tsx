import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'

export const Features05: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null
  return (
    <div className="py-xl gap-sm container grid grid-cols-1 md:grid-cols-2">
      {columns.map((column, index) => {
        const { image, enableBadge, badge, richTextContent, enableCta, link } = column
        return (
          <Card key={index} className="overflow-hidden border-0">
            <CardContent className="gap-sm flex flex-col">
              {image && (
                <div className="h-auto w-full">
                  <Media
                    resource={image}
                    className="rounded-space-sm h-auto w-full overflow-hidden"
                    imgClassName="w-full h-auto object-cover"
                  />
                </div>
              )}
              {enableBadge && badge && (
                <Badge
                  variant={badge?.color}
                  icon={badge.icon}
                  icon_position={badge.icon_position}
                  label={badge?.label}
                />
              )}
              {richTextContent && (
                <RichText className={cn('mx-0')} data={richTextContent} enableGutter={false} />
              )}
              {enableCta && link?.label && (
                <CMSLink {...link} variant="primary" className="mt-auto" />
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
