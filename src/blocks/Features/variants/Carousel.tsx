'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from 'next-intl'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Media } from '@/components/Media'

export const CarouselVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  const locale = useLocale()
  if (!columns || columns.length === 0) return null

  return (
    <Carousel
      opts={{
        align: 'start',
        direction: locale === 'ar' ? 'rtl' : 'ltr',
      }}
      className="w-full"
    >
      <div className="relative hidden gap-2 md:mb-8 md:flex">
        <CarouselPrevious className="static translate-0 border border-gray-400" />
        <CarouselNext className="static translate-0 border border-gray-400" />
      </div>
      <CarouselContent>
        {columns.map((column, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <Card className="border border-[#F9FAFB] shadow-none transition-colors hover:bg-gray-50 dark:hover:bg-gray-800">
              <CardContent className="flex flex-col gap-4 p-4">
                {column.image && (
                  <div className="relative aspect-[16/9] h-[300px] w-[300px] overflow-hidden rounded-lg">
                    <Media resource={column.image} className="object-cover" fill />
                  </div>
                )}
                {column.content && (
                  <div className="text-gray-600 dark:text-gray-400">
                    <RichText data={column.content} enableProse={false} enableGutter={false} />
                  </div>
                )}
                {column.link && (
                  <CMSLink
                    className="justify-start"
                    {...column.link}
                    color={column.link.color || 'brand'}
                  />
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
