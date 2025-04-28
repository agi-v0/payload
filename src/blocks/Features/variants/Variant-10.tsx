'use client'

import React from 'react'
import { CMSLink } from '@/components/Link'
import { Card, CardContent } from '@/components/ui/card'
import { FeaturesBlock } from '@/payload-types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel'
import { Media } from '@/components/Media'

export const Variant10: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null

  return (
    <div className="py-xl container">
      <Carousel className="w-full">
        <CarouselNavigation alwaysShow />
        <CarouselContent className="gap-xs">
          {columns.map((column, index) => (
            <CarouselItem key={index} className="h-[540px] md:basis-1/2 lg:basis-1/4">
              <Card className="h-full border border-[#F9FAFB] shadow-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
                <CardContent className="rounded-space-sm flex h-full flex-col items-start gap-4 p-4">
                  {column.image && (
                    <div className="rounded-space-xs overflow-hidden">
                      <Media
                        resource={column.image}
                        className="h-auto w-full"
                        imgClassName="w-full h-auto aspect-square object-cover"
                      />
                    </div>
                  )}
                  {column.content && (
                    <div>
                      <h3 className="text-body-lg text-base-primary font-medium">
                        {column.content.title}
                      </h3>
                      <p className="text-body-md text-base-secondary">{column.content.title}</p>
                    </div>
                  )}
                  {column.link && <CMSLink {...column.link} />}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
