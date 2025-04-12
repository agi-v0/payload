'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import { extractHeading, getContentWithoutHeading } from '@/utilities/extractRichTextContent'

export const MasonryVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const {
          content,
          image,
          appReference,

          link,
          size = 'oneThird',
        } = column

        const headingText = extractHeading(content)
        const contentWithoutHeading = getContentWithoutHeading(content)

        // Define column span classes
        const lgColSpanClass = {
          'lg:col-span-12': size === 'full',
          'lg:col-span-6': size === 'half',
          'lg:col-span-4': size === 'oneThird',
          'lg:col-span-8': size === 'twoThirds',
        }

        return (
          <div key={index} className={cn('col-span-4 lg:p-8', lgColSpanClass)}>
            {/* {appReference && (
              <div className="mb-6 overflow-hidden rounded-lg">
                <Media resource={appReference} className="h-auto w-full" />
              </div>
            )} */}
            <div
              className={cn('flex flex-col gap-4', {
                'lg:flex-row lg:gap-8': size === 'full',
              })}
            >
              <div
                className={cn('flex flex-col gap-4', {
                  'lg:basis-1/2': size === 'full',
                  'w-full': size !== 'full',
                })}
              >
                {headingText && <h3 className="text-3xl font-medium">{headingText}</h3>}
                {contentWithoutHeading && (
                  <RichText enableGutter={false} data={contentWithoutHeading} />
                )}
              </div>
              {column.image && (
                <div
                  className={cn('mb-6 overflow-hidden rounded-lg', {
                    'lg:basis-1/2': size === 'full',
                    'w-full': size !== 'full',
                  })}
                >
                  <Media resource={column.image} className="h-[232.5px] w-full lg:h-[486px]" />
                </div>
              )}
            </div>
            {/* {image && (
              <div className="aspect-video overflow-hidden rounded-lg">
                <Media resource={image} className="h-full w-full object-cover" />
              </div>
            )} */}
          </div>
        )
      })}
    </div>
  )
}
