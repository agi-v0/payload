'use client'

import React, { useState } from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { Badge } from '@/components/ui/badge'
import { CMSLink } from '@/components/Link'
import { DynamicIcon } from 'lucide-react/dynamic'
import { Button } from '@/components/ui/button'

export const Variant08: React.FC<FeaturesBlock> = ({ columns }) => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  if (!columns?.length) return null

  return (
    <div className="py-xl flex flex-col overflow-hidden">
      <div className="container mb-8 flex justify-center overflow-x-auto [scrollbar-width:none]">
        <div className="flex min-w-max items-center gap-2">
          {columns.map((column, index) => {
            if (column.tabLabel) {
              return (
                <Button
                  key={column.id || `tab-${index}`}
                  type="button"
                  size="sm"
                  variant="primary"
                  color="neutral"
                  onClick={() => setCarouselIndex(index)}
                  className={cn(
                    'relative inline-flex items-center gap-1 rounded-full font-medium transition-colors duration-200',
                    index === carouselIndex
                      ? ''
                      : 'bg-button-neutral/10 text-base-secondary hover:text-inverted-primary',
                  )}
                >
                  {column.icon && <DynamicIcon name={column.icon as any} className="size-4" />}
                  {column?.tabLabel}
                </Button>
              )
            }
            return null
          })}
        </div>
      </div>

      <Carousel
        index={carouselIndex}
        onIndexChange={setCarouselIndex}
        disableDrag
        className="w-full"
      >
        <CarouselContent
          className="w-full"
          transition={{
            ease: [0.77, 0, 0.175, 1],
            duration: 1,
          }}
        >
          {columns.map((column, index) => (
            <CarouselItem key={column.id || `tab-content-${index}`} className="px-md">
              <div className="gap-md bg-background-neutral p-md rounded-space-sm grid grid-cols-1 md:grid-cols-2">
                <div className={cn('gap-md grid h-full grid-rows-[auto_1fr_auto] items-start')}>
                  {column.enableBadge && column.badge && (
                    <Badge
                      variant={column.badge?.color}
                      icon={column.badge.icon}
                      icon_position={column.badge.icon_position}
                      label={column.badge?.label}
                    />
                  )}
                  {column.content && (
                    <div className="gap-sm flex grow auto-rows-auto flex-col">
                      {column.content.title && (
                        <h3 className="text-h3 font-medium">{column.content.title}</h3>
                      )}
                      {column.content.subtitle && (
                        <p className="text-body-md">{column.content.subtitle}</p>
                      )}
                    </div>
                  )}
                  {column.enableCta && column.link?.label && (
                    <div>
                      <CMSLink {...column.link} />
                    </div>
                  )}
                </div>
                {column.image && (
                  <div className={cn('overflow-hidden')}>
                    <Media
                      resource={column.image}
                      className="h-auto w-full"
                      imgClassName="w-full h-auto aspect-[4/3] object-cover rounded-xl md:rounded-2xl"
                    />
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
