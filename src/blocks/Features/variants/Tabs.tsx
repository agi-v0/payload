'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

import React, { useState } from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink, CMSLinkType } from '@/components/Link'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

export const TabsVariant: React.FC<FeaturesBlock> = ({ columns }) => {
  const [carouselIndex, setCarouselIndex] = useState(0)

  if (!columns || columns.length === 0) return null

  const activeColumn = columns[carouselIndex]

  return (
    <div className="py-12">
      <div className="mb-8 overflow-x-auto [scrollbar-width:none]">
        <div className="flex min-w-max items-center justify-center space-x-4">
          {columns.map(({ tabLabel }, index) => {
            return (
              <Button
                key={index}
                type="button"
                onClick={() => setCarouselIndex(index)}
                className={cn(
                  'relative inline-flex rounded-sm bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 transition-colors duration-200 sm:px-4 sm:text-base dark:bg-zinc-800 dark:text-zinc-50',
                  index === carouselIndex
                    ? 'bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900'
                    : '',
                )}
              >
                {tabLabel}
              </Button>
            )
          })}
        </div>
      </div>

      <Carousel index={carouselIndex} onIndexChange={setCarouselIndex} disableDrag>
        <CarouselContent
          className="w-full md:-me-5"
          transition={{
            ease: [0.77, 0, 0.175, 1],
            duration: 1,
          }}
        >
          {columns.map(({ image, content, badge, link }, index) => (
            <CarouselItem
              key={index}
              className="bg-background-neutral p-space-md rounded-space-md flex w-full flex-col items-center justify-center gap-4 lg:flex-row"
            >
              <div className="lg:pe-space-md w-full">
                {badge?.label && <Badge className="mb-4">{badge.label}</Badge>}
                {/* {content && (
                  <RichText data={content} enableGutter={false} className="mx-0 text-start" />
                )} */}
                {link && <CMSLink {...link} className="mt-4" />}
              </div>
              {image && (
                <div className={cn('rounded-space-md overflow-hidden', {})}>
                  <Media resource={image} className="aspect-[4/3] h-auto w-full" />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
