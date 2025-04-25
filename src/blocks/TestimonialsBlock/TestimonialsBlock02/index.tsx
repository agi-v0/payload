'use client'

import React from 'react'
import { Link } from '@/i18n/routing'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
  CarouselIndicator,
} from '@/components/ui/carousel'

import { ArrowDown, ArrowUp } from 'lucide-react'

import { Testimonial } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

interface Props {
  testimonials: Testimonial[]
  linkLabel: string
}

const renderStat = (stat: NonNullable<Testimonial['stats']>[number], index: number) => (
  <div key={stat.id || index} className="flex w-full flex-col justify-start">
    <span className="text-h3 text-base-primary font-medium">
      {stat.value}
      {stat.isPercentage ? '%' : ''}
    </span>
    <div className="flex items-center gap-1">
      {stat.isIncrease ? (
        <ArrowUp className="text-base-tertiary size-4" />
      ) : (
        <ArrowDown className="text-base-tertiary size-4" />
      )}
      <span className="text-base-tertiary text-sm font-normal">{stat.label}</span>
    </div>
  </div>
)

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const { authorInfo, quote, media, companyLogo, stats } = testimonial

  return (
    <div className="bg-background-light rounded-space-sm grid w-full max-w-[90rem] grid-cols-1 md:grid-cols-2 lg:items-stretch">
      <div className="gap-space-md p-space-md pb-space-xs md:pb-space-md flex w-full flex-col justify-start md:justify-between">
        {companyLogo && (
          <Media resource={companyLogo} className="h-12 w-auto" imgClassName="object-contain" />
        )}
        {quote && (
          <RichText
            data={quote}
            enableProse={false}
            className="text-base-primary text-(length:--text-h3) font-medium"
          />
        )}

        {stats && stats.length > 0 && (
          <div
            className="mt-space-xs border-neutral/10 gap-space-xs pt-space-xs grid w-full grid-cols-2 border-t lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
            style={
              {
                '--cols': stats?.length || 0,
              } as React.CSSProperties
            }
          >
            {stats.map(renderStat)}
          </div>
        )}
        <div className="flex flex-row items-center justify-between">
          {authorInfo && (
            <div className="gap-space-xs flex flex-row items-center">
              {authorInfo.avatar && (
                <Media resource={authorInfo.avatar} className="h-12 w-12 rounded-full" />
              )}
              <div>
                <p className="text-base-primary text-body-sm font-medium">{authorInfo.name}</p>
                <p className="text-body-sm text-base-secondary">{authorInfo.title}</p>
              </div>
            </div>
          )}
          <Link
            href="/testimonials"
            className="text-body-md text-base-secondary relative font-medium"
          >
            <span>Read more</span>
          </Link>
        </div>
      </div>
      {media && (
        <div className="p-space-xs flex items-center justify-center">
          <Media
            resource={media}
            className="rounded-space-sm aspect-[4/3] h-auto w-full overflow-hidden"
            imgClassName="rounded-space-sm"
          />
        </div>
      )}
    </div>
  )
}

export const TestimonialsBlock02: React.FC<Props> = ({ testimonials }) => {
  return (
    <section className="bg-background py-space-xl relative container">
      <Carousel>
        <CarouselContent className="items-stretch">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id || index} className="basis-full">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {testimonials.length > 1 && (
          <>
            <CarouselNavigation
              className="absolute top-auto -bottom-20 left-auto w-full justify-between gap-2"
              alwaysShow
            />
            <CarouselIndicator className="-bottom-20 h-12" />
          </>
        )}
      </Carousel>
    </section>
  )
}
