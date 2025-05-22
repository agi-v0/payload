'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect, useRef } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/MediaResponsive'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import { InfiniteSlider } from '@/components/motion-ui/infinite-slider'
import { motion, useScroll, useTransform } from 'motion/react'

export const Hero01: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  supportingText,
  logos,
  badge,
}) => {
  const { logos: logosGroup, headline } = logos || {}
  const { desktop, mobile } = media || {}
  const containerRef = useRef<HTMLDivElement>(null)
  // Parallax: as the container scrolls into view, move the image up slightly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  // Parallax: image moves up to -200px as you scroll through the block
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200])

  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('light')
  // }, [setHeaderTheme])

  return (
    <section
      ref={containerRef}
      className="pb-site container h-screen pt-(--header-plus-admin-bar-height)"
    >
      <div className="rounded-space-sm relative z-0 h-full w-full overflow-hidden">
        <div
          data-theme="dark"
          className="p-xl absolute bottom-0 z-1 flex w-full flex-col justify-between gap-4"
        >
          <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div className="gap-md flex h-full max-w-[36rem] flex-col items-start justify-center">
              {(badge?.label || badge?.reference) && <Badge size="lg" {...badge} />}

              {richText && (
                <RichText
                  className={cn(
                    'flex w-full flex-col items-start text-start font-medium',
                    '[&>h3,h4,p]:text-base-tertiary [&>h3,h4,p]:mt-space-xs [&>h3,h4,p]:leading-normal [&>p]:text-(length:--text-body-lg) [&>p]:font-medium',
                  )}
                  data={richText}
                  enableGutter={false}
                />
              )}
            </div>
            <div className="flex w-full flex-col items-start gap-4 lg:w-fit">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex flex-row items-center justify-start gap-1">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink className="w-full md:w-auto" size={'lg'} {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
              {supportingText && <p className="text-base-tertiary text-sm">{supportingText}</p>}
            </div>
          </div>
          {logos && logosGroup && logosGroup.length > 0 && (
            <div className="gap-space-md md:gap-space-lg flex w-full flex-col items-center">
              {headline && (
                <p className="text-body-sm text-base-quaternary font-medium">{headline}</p>
              )}
              <ul
                dir="ltr"
                className="flex w-full flex-wrap items-center justify-center mask-x-from-90% mask-x-to-100% md:justify-between"
              >
                <InfiniteSlider gap={48} className="dark:invert">
                  {logosGroup.map((logo, i) => {
                    return (
                      <li key={i} className="flex items-center justify-center">
                        {logo && typeof logo === 'object' && (
                          <Media
                            imgClassName="h-space-md w-auto object-contain"
                            priority
                            resource={logo}
                          />
                        )}
                      </li>
                    )
                  })}
                </InfiniteSlider>
              </ul>
            </div>
          )}
        </div>

        {media && typeof media === 'object' && (
          <motion.div
            style={{ y }}
            className={cn('absolute inset-0 z-0 h-full w-full overflow-hidden')}
          >
            <Media
              fill
              imgClassName="object-cover"
              className="relative h-full w-full select-none"
              desktop={{ light: desktop?.light ?? undefined, dark: desktop?.dark ?? undefined }}
              mobile={{ light: mobile?.light ?? undefined, dark: mobile?.dark ?? undefined }}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
