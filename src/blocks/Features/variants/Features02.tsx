import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Badge } from '@/components/ui/badge'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import { CMSLink } from '@/components/Link'
import { CaretLeft } from '@/icons/caret-left-filled'

const colSpanClass = {
  full: 'md:col-span-4 lg:col-span-12',
  half: 'md:col-span-2 lg:col-span-6',
  oneThird: 'md:col-span-2 lg:col-span-4',
  twoThirds: 'md:col-span-2 lg:col-span-8',
}

type Features02Props = FeaturesBlock & {
  readMoreLabel?: string
}

export const Features02: React.FC<Features02Props> = ({ columns, readMoreLabel }) => {
  if (!columns?.length) return null

  return (
    <div className="gap-sm py-xl container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, image, size } = column

        const lgColSpanClass = colSpanClass[size || 'full']

        return React.createElement(
          column.enableCta && column.link?.label ? CMSLink : 'div',
          {
            key: index,
            className: cn(
              'gap-md group rounded-space-sm bg-background-neutral p-md col-span-4 flex flex-col transition-all duration-300 hover:no-underline hover:shadow-lg',
              lgColSpanClass,
              {
                'lg:flex-row': size === 'full', // Adjust layout for full-size columns
              },
            ),
            ...(column.link?.label ? { ...column.link, label: null, variant: 'inline' } : {}),
          },
          <>
            <div
              className={cn('gap-sm flex w-full flex-col', {
                'lg:pe-md lg:basis-1/2': size === 'full',
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
                <div className="gap-xs flex flex-col">
                  {content.title && (
                    <h3 className="text-h3 text-base-primary font-medium">{content.title}</h3>
                  )}
                  {content.subtitle && (
                    <p className="text-body-md text-base-tertiary">{content.subtitle}</p>
                  )}
                </div>
              )}
              {column.enableCta && column.link?.label && (
                <span className="mt-auto flex w-fit flex-row items-center gap-2">
                  {readMoreLabel}
                  <CaretLeft className="size-3 translate-x-1 transition-all duration-300 group-hover:translate-x-0 ltr:-translate-x-1 ltr:rotate-180" />
                </span>
              )}
            </div>
            {image && (
              <Media
                resource={image}
                className={cn(
                  'group rounded-space-sm bg-background-neutral-subtle w-full flex-1 overflow-hidden',
                  {
                    'flex-auto lg:basis-1/2': size === 'full',
                  },
                )}
                imgClassName="w-full group-hover:scale-102 transition-all duration-300 h-full object-cover"
              />
            )}
          </>,
        )
      })}
    </div>
  )
}
