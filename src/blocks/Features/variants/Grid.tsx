import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import { extractHeading, getContentWithoutHeading } from '@/utilities/extractRichTextContent'

export const GridVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  // Return null if columns are not provided or empty
  if (!columns?.length) return null

  return (
    // Main grid container with responsive column layout
    <div className="bg-background grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, image, size = 'oneThird' } = column

        // Determine column span classes based on size
        const lgColSpanClass =
          size === 'full' ? 'lg:col-span-12' : size === 'half' ? 'lg:col-span-6' : ''

        return (
          // Individual column container with styling and dynamic column span
          <div
            key={index}
            className={cn('bg-background-neutral rounded-space-sm p-md col-span-4', lgColSpanClass)}
          >
            <div
              className={cn('flex flex-col gap-4', {
                'lg:flex-row': size === 'full', // Adjust layout for full-size columns
              })}
            >
              <div
                className={cn('flex flex-col gap-6', {
                  'pe-md w-full lg:basis-1/2': size === 'full', // Adjust width for full-size columns
                })}
              >
                {/* Render content if available */}
                {/* {content && (
                  <RichText enableGutter={false} data={content} className="prose-h3:text-h3" />
                )} */}
              </div>
              {/* Render image if available */}
              {image && (
                <div
                  className={cn('rounded-space-sm overflow-hidden', {
                    'lg:basis-1/2': size === 'full', // Adjust width for full-size columns
                    'w-full': size !== 'full', // Full width for non-full-size columns
                  })}
                >
                  <Media resource={image} className="aspect-[4/3] h-auto w-full" />
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
