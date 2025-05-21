'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import type { CMSLinkType } from '@/components/Link'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

export const CallToAction01: React.FC<CTABlockProps> = ({
  badge,
  richText,
  links,
  supportingText,
  list,
  media,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  // Parallax: as the container scrolls into view, move the image up slightly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  // Parallax: image moves up to -40px as you scroll through the block
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <div className="py-xl container" ref={containerRef}>
      <div className="rounded-space-md relative overflow-hidden border border-red-500">
        <div
          data-theme="dark"
          className="rounded-space-md p-md gap-sm relative z-1 flex aspect-[9/16] h-auto w-full flex-col items-start justify-end bg-transparent md:aspect-video md:flex-row md:items-end md:justify-between"
        >
          {richText && (
            <RichText className="mx-0 lg:max-w-[32rem]" data={richText} enableGutter={false} />
          )}
          <div className="flex flex-col gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...(link as CMSLinkType)} />
            })}
          </div>
        </div>
        {media && (
          <motion.div
            style={{ y }}
            className={cn('absolute -top-24 right-0 z-0 h-full w-full scale-105 overflow-hidden')}
          >
            <Media
              resource={media}
              fill
              className="relative h-full w-full object-cover"
              imgClassName="object-cover rounded-space-md overflow-hidden"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}
