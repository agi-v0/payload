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
                <Media resource={icon as MediaType} className="size-16" />
              </div>
            )}
            {name && <span className="text-h3 text-base-secondary font-medium">{name}</span>}
          </div>
          {/* Title and Description */}
          <div className="gap-space-xs flex flex-col">
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
            // Use text size, color variables, and explicit gap
            className="text-body-lg text-base-tertiary hover:text-base-primary w-fit px-0 py-0 hover:bg-transparent"
            label="المزيد"
          >
            <ArrowLeftIcon className="size-5" />
          </CMSLink>
        )}
      </div>

      {/* Image Section - Placeholder */}
      <div className="bg-background-light p-space-xs w-full flex-shrink-0 lg:w-1/2">
        {gallery && gallery.length > 0 && (
          <Media
            resource={gallery[0] as MediaType}
            className="aspect-[4/3] h-auto w-full"
            imgClassName="rounded-space-sm"
          />
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
            <CarouselItem key={app.id || index} className="basis-full px-2 pl-4">
              <AppCard app={app} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {apps.length > 1 && (
          <>
            <CarouselNavigation
              className="absolute top-auto -bottom-20 left-auto w-full justify-between gap-2"
              alwaysShow
            />
            <CarouselIndicator className="-bottom-20 h-12" />
          </>
        )}
      </Carousel>
    </div>
  )
}
