import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import { CMSLink } from '@/components/Link'

export const Variant02: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null

  return (
    <div className="bg-background gap-sm grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, image, appReference, size = 'oneThird' } = column

        const lgColSpanClass =
          size === 'full' ? 'lg:col-span-12' : size === 'half' ? 'lg:col-span-6' : ''

        return (
          <div
            key={index}
            className={cn(
              'rounded-space-md bg-background-light p-space-md col-span-4',
              lgColSpanClass,
            )}
          >
            <div
              className={cn('gap-space-site flex flex-col', {
                'lg:flex-row': size === 'full', // Adjust layout for full-size columns
              })}
            >
              <div
                className={cn('gap-md flex flex-col', {
                  'pe-space-md w-full lg:basis-1/2': size === 'full',
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
                {content && (
                  <div className="gap-sm flex grow flex-col">
                    {content.title && <h3 className="text-h3 font-medium">{content.title}</h3>}
                    {content.copy && <p className="text-body-md">{content.copy}</p>}
                  </div>
                )}
                {column.enableCta && column.link?.label && (
                  <div>
                    <CMSLink {...column.link} />
                  </div>
                )}
              </div>
              {image && (
                <div
                  className={cn('rounded-space-md overflow-hidden', {
                    'lg:basis-1/2': size === 'full', // Adjust width for full-size columns
                    'w-full': size !== 'full', // Full width for non-full-size columns
                  })}
                >
                  <Media
                    resource={image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-[4/3] object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
