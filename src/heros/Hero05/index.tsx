'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/MediaResponsive'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import { InfiniteSlider } from '@/components/motion-ui/infinite-slider'

export const Hero05: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  caption,
  logos,
  badge,
}) => {
  const { logos: logosGroup, headline } = logos || {}

  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('light')
  // }, [setHeaderTheme])

  return (
    <section
      className={cn(
        'pb-xl gap-xs container flex flex-col items-stretch pt-(--header-plus-admin-bar-height)',
        media?.desktop?.light && 'min-h-screen',
      )}
    >
      <div className="gap-xs flex w-full grow flex-col items-center justify-stretch lg:flex-row lg:items-stretch">
        <div className="p-xl bg-background-neutral rounded-space-sm w-full">
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

            <div className="flex flex-col items-start gap-4">
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
              {caption && <p className="text-base-tertiary text-sm">{caption}</p>}
            </div>
          </div>
        </div>

        {media && typeof media?.desktop?.light === 'object' && (
          <Media
            className="rounded-space-sm relative h-auto w-full overflow-hidden select-none"
            imgClassName="object-cover"
            priority
            media={media}
            fill
          />
        )}
      </div>
      {logos && logosGroup && logosGroup.length > 0 && (
        <div className="gap-space-md p-md pb-lg bg-background-neutral rounded-space-sm flex w-full flex-col items-start">
          {headline && <p className="text-body-sm text-base-quaternary font-medium">{headline}</p>}
          <ul
            dir="ltr"
            className="-mask-x-to-10% flex w-full flex-wrap items-center justify-center mask-x-from-90% mask-x-to-100% md:justify-between"
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
    </section>
  )
}
