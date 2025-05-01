import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { AppReference } from '@/components/AppReference'
import RichText from '@/components/RichText'

export const Variant01: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null

  return (
    <div className="bg-background gap-sm py-xl container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, richTextContent, image, appReference, size = 'oneThird' } = column

        const lgColSpanClass =
          size === 'full' ? 'lg:col-span-12' : size === 'half' ? 'lg:col-span-6' : ''

        return (
          <div
            key={index}
            className={cn('rounded-space-sm bg-background-neutral p-md col-span-4', lgColSpanClass)}
          >
            {appReference && (
              <AppReference
                appReference={appReference}
                className={cn(
                  {
                    'lg:basis-1/2': size === 'full',
                    'w-full': size !== 'full',
                  },
                  'mb-lg',
                )}
              />
            )}
            <div
              className={cn('lg:gap-sm gap-lg flex flex-col-reverse lg:flex-col', {
                'lg:flex-row': size === 'full', // Adjust layout for full-size columns
              })}
            >
              {richTextContent && (
                <div
                  className={cn('gap-sm flex flex-col', {
                    'pe-md w-full lg:basis-1/2': size === 'full',
                  })}
                >
                  <RichText data={richTextContent} />
                </div>
              )}
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
