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
import { CaretLeft } from '@/icons/caret-left-filled'

type Features08Props = FeaturesBlock & {
  readMoreLabel?: string
}

export const Features08: React.FC<Features08Props> = ({ columns, readMoreLabel }) => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  if (!columns?.length) return null

  return (
    <div className="py-xl flex flex-col">
      <div className="container mb-8 flex justify-center overflow-x-auto [scrollbar-width:none]">
        <div className="flex min-w-max items-center gap-2">
          {columns.map((column, index) => {
            if (column.tabLabel) {
              return (
                <Button
                  key={column.id || `tab-${index}`}
                  type="button"
                  size="md"
                  variant="ghost"
                  color="neutral"
                  onClick={() => setCarouselIndex(index)}
                  className={cn(
                    'relative inline-flex items-center gap-1 rounded-full px-4 text-base font-medium transition-colors duration-200',
                    index === carouselIndex
                      ? 'bg-neutral hover:bg-neutral/90 text-inverted-primary'
                      : '',
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
            type: 'spring',
            stiffness: 800,
            damping: 100,
            mass: 4,
          }}
        >
          {columns.map((column, index) => {
            return (
              <CarouselItem key={column.id || `tab-content-${index}`} className="px-md py-px">
                {React.createElement(
                  column.enableCta && column.link?.label ? CMSLink : 'div',
                  {
                    key: index,
                    className: cn(
                      'gap-md group bg-background-neutral p-md rounded-space-sm hover:shadow-border grid grid-cols-1 hover:no-underline md:grid-cols-2',
                    ),
                    ...(column.link?.label
                      ? { ...column.link, label: null, variant: 'inline' }
                      : {}),
                  },
                  <>
                    <div className={cn('gap-md grid h-full grid-rows-[auto_1fr_auto] items-start')}>
                      {column.enableBadge && column.badge && <Badge {...column.badge} />}
                      {column.content && (
                        <div className="gap-sm flex grow auto-rows-auto flex-col">
                          {column.content.title && (
                            <h3 className="text-h3 text-base-primary font-medium">
                              {column.content.title}
                            </h3>
                          )}
                          {column.content.subtitle && (
                            <p className="text-body-md">{column.content.subtitle}</p>
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
                    {column.image && (
                      <div className={cn('overflow-hidden')}>
                        <Media
                          resource={column.image}
                          className="h-auto w-full"
                          imgClassName="w-full h-auto aspect-[4/3] object-cover rounded-xl md:rounded-2xl"
                        />
                      </div>
                    )}
                  </>,
                )}
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
