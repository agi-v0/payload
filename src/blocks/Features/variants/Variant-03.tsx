import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'

import { CMSLink } from '@/components/Link'

export const Variant03: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null

  return (
    <div className="bg-background py-xl gap-md container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { image, appReference, size = 'oneThird', richTextContent } = column
        //assign lg:col-span-12 to full width size, and lg:col-span-6 to all other sizes
        const lgColSpanClass = size === 'full' ? 'lg:col-span-12' : 'lg:col-span-6'

        return (
          <div key={index} className={cn('col-span-full', lgColSpanClass)}>
            <div
              className={cn('gap-md flex flex-col', {
                'lg:flex-row lg:items-center lg:justify-start': size === 'full',
              })}
            >
              {image && (
                <div
                  className={cn('rounded-space-sm overflow-hidden', {
                    'lg:basis-1/2': size === 'full', // Adjust width for full-size columns
                    'w-full': size !== 'full', // Full width for non-full-size columns
                  })}
                >
                  <Media
                    resource={image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-[16/9] object-cover"
                  />
                </div>
              )}
              <div
                className={cn('gap-md flex flex-col items-start', {
                  'lg:ps-xl w-full lg:basis-1/2': size === 'full',
                })}
              >
                {column.enableBadge && column.badge && (
                  <Badge
                    variant={column.badge?.color}
                    icon={column.badge.icon}
                    icon_position={column.badge.icon_position}
                    label={column.badge?.label}
                  />
                )}
                {richTextContent && <RichText data={richTextContent} />}
                {column.enableCta && column.link?.label && (
                  <div>
                    <CMSLink {...column.link} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
