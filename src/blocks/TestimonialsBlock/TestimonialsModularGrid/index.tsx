'use client'

import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import type { Testimonial, Media as MediaType } from '@/payload-types'
import { CircleUserRound, Blocks, BarChartBig, Quote } from 'lucide-react'
import { Media } from '@/components/Media'

interface TestimonialsModularGridProps {
  testimonials: Testimonial[]
  linkLabel?: string // Optional link label from parent
}

// Define predictable cell size patterns WITH associated types
const cellPatterns = [
  { classes: 'col-span-2', type: 'quote' }, // Wide Quote
  { classes: 'col-span-1', type: 'image' }, // Standard Image
  { classes: 'col-span-1', type: 'stat' }, // Standard Stat
  { classes: 'col-span-1', type: 'logo' }, // Standard Logo
  { classes: 'col-span-2', type: 'quote' }, // Standard Quote
  { classes: 'col-span-1', type: 'image' }, // Standard Image
  // Add more patterns as needed, combining size and intended type
]

export const TestimonialsModularGrid: React.FC<TestimonialsModularGridProps> = ({
  testimonials,
}) => {
  const gridItems = testimonials.map((testimonial, index) => {
    // Get the pattern for the current index
    const pattern = cellPatterns[index % cellPatterns.length]
    let assignedType = pattern.type as 'quote' | 'image' | 'stat' | 'logo'
    const sizeClasses = pattern.classes

    return {
      ...testimonial,
      cellType: assignedType, // The type used for rendering content (might be fallback)
      sizeClasses, // The size classes from the pattern
    }
  })
  return (
    <section className="py-space-xl md:py-space-2xl lg:py-space-3xl container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {gridItems.map(
          ({ id, authorInfo, companyLogo, company, stats, quote, cellType, sizeClasses }) => {
            const avatar = authorInfo?.avatar as MediaType | undefined
            const logo = companyLogo as MediaType | undefined // Renamed for clarity
            const firstStat = stats && stats.length > 0 ? stats[0] : null

            // Theme V: Background, Radius (Padding removed)
            const baseClasses =
              'bg-background-light flex flex-col justify-between overflow-hidden rounded-space-sm'
            // Apply size classes and conditionally add padding
            const itemClasses = cn(
              baseClasses,
              sizeClasses,
              // Add p-space-md unless it's an image or logo cell
              cellType !== 'image' ? 'p-space-md' : 'p-0',
              cellType === 'quote' ? '' : 'aspect-square h-auto w-full',
            )

            return (
              <div key={id} className={itemClasses}>
                {cellType === 'quote' && quote && (
                  <>
                    <div className="mb-4 w-full">
                      <RichText
                        data={quote}
                        enableProse={false}
                        className="text-base-primary text-h4 font-medium"
                      />
                    </div>
                    <div className="border-base pt-space-sm text-body-sm mt-auto border-t font-medium">
                      {authorInfo?.name}
                      {authorInfo?.title && (
                        <span className="text-muted-foreground text-caption block">
                          {authorInfo.title}
                        </span>
                      )}
                    </div>
                  </>
                )}

                {cellType === 'image' && avatar && (
                  <Media
                    resource={avatar}
                    fill
                    className="relative h-full w-full rounded-lg"
                    imgClassName="rounded-lg h-full w-full object-cover"
                  />
                )}

                {cellType === 'stat' && firstStat && (
                  <>
                    <div className="text-h3 text-base-primary flex flex-grow flex-col items-start text-start font-medium">
                      <p className="">
                        {firstStat.value}
                        {firstStat.isPercentage ? '%' : ''}
                      </p>
                      <p className="">{firstStat.label}</p>
                    </div>
                  </>
                )}

                {cellType === 'logo' && logo && (
                  <div className="p-space-md flex h-full w-full flex-col items-center justify-center">
                    <Media
                      resource={logo}
                      className="w-full"
                      imgClassName="w-full h-auto mx-auto opacity-70"
                    />
                  </div>
                )}
              </div>
            )
          },
        )}
      </div>
    </section>
  )
}
