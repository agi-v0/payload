'use client'
import React, { useEffect, useState } from 'react'
import type { GalleryBlock, Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/utilities/ui'
import { InfiniteSlider } from '@/components/motion-ui/infinite-slider'
import { TransitionPanel } from '@/components/motion-ui/transition-panel'
import useMeasure from 'react-use-measure'
import { Button } from '@/components/ui/button'
import { CaretLeft } from '@/icons/caret-left-filled'
import { TypedLocale } from 'payload'

interface Gallery04Props {
  interactiveGallery: GalleryBlock['interactiveGallery']
  className?: string
  locale: TypedLocale
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 364 : -364,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 364 : -364,
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  }),
}

export const Gallery04: React.FC<Gallery04Props> = ({ interactiveGallery, className, locale }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [ref, bounds] = useMeasure()

  useEffect(() => {
    if (interactiveGallery && activeIndex >= interactiveGallery.length) {
      setActiveIndex(interactiveGallery.length - 1)
    }
  }, [interactiveGallery, activeIndex])

  const handleSetActiveIndex = (newIndex: number) => {
    if (!interactiveGallery) return
    const clampedIndex = Math.max(0, Math.min(newIndex, interactiveGallery.length - 1))
    setDirection(clampedIndex > activeIndex ? 1 : -1)
    setActiveIndex(clampedIndex)
  }

  if (!interactiveGallery || interactiveGallery.length === 0) return null

  return (
    <div className={cn('py-xl relative container w-full', className)}>
      <Carousel
        slidesPerView={1}
        className="w-full"
        index={activeIndex}
        onIndexChange={setActiveIndex}
      >
        <CarouselContent className="-ms-xs">
          {interactiveGallery.map((item, index) => (
            <CarouselItem key={item.id || index} className="ps-xs">
              {typeof item.image === 'object' && item.image !== null && (
                <Media
                  resource={item.image}
                  className="rounded-space-sm bg-background-neutral-subtle h-full w-full overflow-clip object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="max-lg:mt-sm space-y-sm rounded-space-sm p-sm z-1 h-fit w-full overflow-hidden bg-neutral-950 max-lg:relative lg:absolute lg:start-[calc(var(--spacing-site)+var(--spacing-site))] lg:bottom-[calc(var(--spacing-xl)+var(--spacing-site))] lg:max-w-[400px]">
        <TransitionPanel
          activeIndex={activeIndex}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? 364 : -364,
              opacity: 0,
              height: bounds.height > 0 ? bounds.height : 'auto',
              position: 'initial',
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
              height: bounds.height > 0 ? bounds.height : 'auto',
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? 364 : -364,
              opacity: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }),
          }}
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          custom={direction}
        >
          {interactiveGallery.map(({ panel }, index) => (
            <div key={index} className="pe-lg" ref={ref}>
              <h3 className="text-body-md font-medium text-white">{panel?.title}</h3>
              <p className="text-body-sm text-white/70">{panel?.description}</p>
            </div>
          ))}
        </TransitionPanel>
        <div className="text-body-sm end-sm top-sm absolute text-white/70">
          {activeIndex + 1} / {interactiveGallery.length}
        </div>
        <div className="flex justify-between">
          <Button
            size="sm"
            variant="tertiary"
            className="bg-white/10 text-white hover:bg-white/30 hover:text-white/90"
            disabled={activeIndex === 0}
            onClick={() => handleSetActiveIndex(activeIndex - 1)}
          >
            <CaretLeft className="size-4 rotate-180 ltr:rotate-0" />
            {locale === 'ar' ? 'السابق' : 'Previous'}{' '}
          </Button>

          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-neutral-950 hover:bg-white/90 hover:text-neutral-950/90"
            disabled={activeIndex === interactiveGallery.length - 1}
            onClick={() =>
              activeIndex === interactiveGallery.length - 1
                ? null
                : handleSetActiveIndex(activeIndex + 1)
            }
          >
            {locale === 'ar' ? 'التالي' : 'Next'} <CaretLeft className="size-4 ltr:rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  )
}
