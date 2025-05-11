'use client'

import React from 'react'
import type { Integration } from '@/payload-types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { ArrowLeftIcon } from 'lucide-react'

// Props for the client component
interface IntegrationsCarouselClientProps {
  apps: Integration[]
}

const AppCard: React.FC<{ app: Integration }> = ({ app }) => {
  const { name, icon, tagline, overview, link, gallery } = app

  return (
    // Use background variable and explicit rounding from Figma
    <div className="bg-background-neutral rounded-space-sm flex w-full flex-col overflow-hidden lg:flex-row">
      {/* Content Section */}
      <div className="p-md flex w-full flex-col justify-between text-start">
        <div className="gap-sm flex flex-col items-start justify-start">
          {/* Integration Badge (Icon + Name) */}
          <div className="gap-xs flex items-center justify-end">
            {icon && <Media resource={icon} className="size-16 overflow-hidden rounded-xl" />}
            {name && <span className="text-h3 text-base-secondary font-medium">{name}</span>}
          </div>
          {/* Title and Description */}
          <div className="gap-xs flex flex-col">
            {tagline && <h3 className="text-h3 text-base-primary font-medium">{tagline}</h3>}
            {/* Render overview using RichText component with `data` prop */}
            {overview && (
              <div className="text-body-lg text-base-secondary font-normal">
                <RichText
                  data={overview}
                  enableGutter={false}
                  className="text-body-lg text-base-secondary font-normal"
                />
              </div>
            )}
          </div>
        </div>
        {/* Link Button */}
        {link && (
          <CMSLink
            {...link}
            className="text-body-md text-base-tertiary hover:text-base-primary w-fit px-0 py-0 hover:bg-transparent"
            label="المزيد"
          />
        )}
      </div>

      {/* Image Section - Placeholder */}

      {gallery && gallery.length > 0 && (
        <Media
          resource={gallery[0]}
          className="bg-background-neutral p-xs aspect-[4/3] h-auto w-full flex-shrink-0 lg:w-1/2"
          imgClassName="rounded-space-sm"
        />
      )}
    </div>
  )
}

// Main Client Component for the Carousel
export const AppsCarouselClient: React.FC<IntegrationsCarouselClientProps> = ({ apps }) => {
  if (!apps || apps.length === 0) {
    return null // Or render an empty state
  }

  return (
    <div className="relative container w-full">
      <Carousel
        slidesPerView={{
          sm: 1, //   ≥640px: 1 slide
          md: 2, //   ≥768px: 2 slides
          lg: 1, //  ≥1024px: 4 slides
        }}
      >
        <CarouselContent className="">
          {apps.map((app, index) => (
            <CarouselItem key={app.id || index} className="px-2xs">
              <AppCard app={app} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {apps.length > 1 && (
          <>
            <CarouselNavigation className="mt-xs relative justify-between" />
            <CarouselIndicator className="absolute bottom-0 h-10" />
          </>
        )}
      </Carousel>
    </div>
  )
}
