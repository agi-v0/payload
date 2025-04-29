'use client'
import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { Card, CardContent } from '@/components/ui/card'
import { CMSLink } from '@/components/Link'
import { LinkBlock } from '@/components/LinkBlock'
import { cn } from '@/utilities/ui'

export const Variant14: React.FC<FeaturesBlock> = ({ columns, link, CTALabel }) => {
  if (!columns?.length) return null
  const limitedColumns = columns.slice(0, 3)
  return (
    <div className="py-xl container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {limitedColumns.map((column, index) => {
        return (
          <Card key={index} className="overflow-hidden rounded-none bg-transparent !p-0">
            <CardContent className="gap-sm grid grid-cols-2 items-start rounded-none bg-transparent p-0 md:grid-cols-1 md:flex-col">
              {column.image && (
                <div className="h-auto w-full">
                  <Media
                    resource={column.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-square object-cover rounded-space-sm"
                  />
                </div>
              )}
              {column.content?.title && (
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-lg text-base-primary font-medium">
                    {column.content?.title}
                  </h3>
                  <p className="text-body-md text-base-tertiary">{column.content?.title}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
      <div
        className={cn({
          'col-span-2': columns.length < 3,
        })}
      >
        <LinkBlock className="md:aspect-square" link={link} label={link?.label} />
      </div>
    </div>
  )
}
