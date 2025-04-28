'use client'

import React from 'react'
import type { App } from '@/payload-types'
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

interface AppsCarouselClientProps {
  apps: App[]
}

// AppCard component, similar to before but ensure fields exist
// Adapt this based on your actual App type fields
const AppCard: React.FC<{ app: App }> = ({ app }) => {
  const { name, icon, tagline, overview, link, gallery } = app

  return (
    // Use background variable and explicit rounding from Figma
    <div className="bg-background-neutral flex flex-col overflow-hidden rounded-3xl lg:flex-row">
      {/* Content Section */}
      <div className="p-md flex w-full flex-col justify-between text-start">
        <div className="gap-sm flex flex-col items-start justify-start">
          {/* App Badge (Icon + Name) */}
          <div className="gap-xs flex items-center justify-end">
            {icon && <Media resource={icon} className="size-8 overflow-hidden rounded-md" />}
            {name && <span className="text-body-lg text-base-secondary font-medium">{name}</span>}
          </div>
          {/* Title and Description */}
          <div className="gap-xs flex flex-col">
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
            {...link}
            // Use text size, color variables, and explicit gap
            className="text-body-lg mt-space-xs text-base-tertiary hover:text-base-primary w-fit px-0 py-0 hover:bg-transparent"
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
        {apps.length > 3 && (
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
