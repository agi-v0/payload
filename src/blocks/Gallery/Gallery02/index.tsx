'use client'

import React from 'react'
import type { GalleryBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel'
import { cn } from '@/utilities/ui'

interface Gallery02Props {
  images: GalleryBlock['images']
  className?: string
}

export const Gallery02: React.FC<Gallery02Props> = ({ images, className }) => {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={cn('w-full', className)}>
      <Carousel
        slidesPerView={1} // Show one image at a time for full-width
        className="w-full"
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={item.id || index}>
              <div className="aspect-video w-full">
                {' '}
                {/* Maintain aspect ratio */}
                {typeof item.image === 'object' && item.image !== null && (
                  <Media
                    resource={item.image}
                    className="h-full w-full object-cover"
                    priority={index < 2} // Prioritize loading first couple images
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselNavigation className="mt-xs relative justify-between" />
            <CarouselIndicator className="absolute bottom-0 h-10" />
          </>
        )}
      </Carousel>
    </div>
  )
}
