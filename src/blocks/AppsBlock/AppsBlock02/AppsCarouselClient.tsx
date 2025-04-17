'use client'

import React from 'react'
import type { App, Media as MediaType } from '@/payload-types' // Import necessary types
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
  useCarousel,
} from '@/components/ui/carousel' // Assuming correct path
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText' // Use default import for RichText
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'
import { cn } from '@/utilities/ui'

// Props for the client component
interface AppsCarouselClientProps {
  apps: App[]
}

// AppCard component, similar to before but ensure fields exist
// Adapt this based on your actual App type fields
const AppCard: React.FC<{ app: App }> = ({ app }) => {
  const { name, icon, tagline, overview, link, gallery } = app

  return (
    // Use background variable and explicit rounding from Figma
    <div className="bg-background-light flex flex-col overflow-hidden rounded-3xl lg:flex-row">
      {/* Content Section */}
      <div className="p-space-md flex w-full flex-col justify-between text-start">
        <div className="gap-space-sm flex flex-col items-start justify-start">
          {/* App Badge (Icon + Name) */}
          <div className="gap-space-xs flex items-center justify-end">
            {icon && (
              <div className="rounded-xl">
                <Media resource={icon as MediaType} className="size-8" />
              </div>
            )}
            {name && <span className="text-body-lg text-base-secondary font-medium">{name}</span>}
          </div>
          {/* Title and Description */}
          <div className="gap-space-xs flex flex-col">
            {tagline && <h3 className="text-h4 text-base-primary font-medium">{tagline}</h3>}
            {/* Render overview using RichText component with `data` prop */}
            {overview && (
              <RichText
                data={overview}
                enableGutter={true}
                className="text-body-sm text-base-secondary font-normal"
              />
            )}
          </div>
        </div>
        {/* Link Button */}
        {link && (
          <CMSLink
            {...(link as any)}
            // Use text size, color variables, and explicit gap
            className="text-body-lg text-base-tertiary hover:text-base-primary w-fit px-0 py-0 hover:bg-transparent"
            label="المزيد"
          >
            <ArrowLeftIcon className="size-5" />
          </CMSLink>
        )}
      </div>
    </div>
  )
}

// Main Client Component for the Carousel
export const AppsCarouselClient: React.FC<AppsCarouselClientProps> = ({ apps }) => {
  if (!apps || apps.length === 0) {
    return null // Or render an empty state
  }

  return (
    <div className="relative container w-full">
      <Carousel>
        <CarouselContent className="-ml-4 items-stretch">
          {apps.map((app, index) => (
            <CarouselItem
              key={app.id || index}
              className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <AppCard app={app} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {apps.length > 1 && (
          <>
            <CarouselNavigation
              className="absolute top-auto -bottom-20 left-auto w-full justify-between gap-2"
              classNameButton=""
              alwaysShow
            />
            <CarouselIndicator className="-bottom-20 h-12" />
          </>
        )}
      </Carousel>
    </div>
  )
}
