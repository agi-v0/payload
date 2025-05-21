'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

export const Hero02: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  supportingText,
  logos,
  headline,
  badge,
}) => {
  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('light')
  // }, [setHeaderTheme])

  return (
    <section className="container mt-(--header-height) md:mt-[calc(var(--header-height)+var(--admin-bar-height))]">
      <div className="pb-site bg-background-neutral rounded-space-sm gap-3xl container flex flex-col items-center pt-[calc(1*var(--header-height))]">
        <div className="gap-md flex max-w-[36rem] flex-col items-center">
          {(badge?.label || badge?.reference) && <Badge size="lg" {...badge} />}

          {richText && (
            <RichText
              className={cn(
                'flex w-full flex-col items-center text-center font-medium',
                '[&>h3,h4,p]:text-base-tertiary [&>h3,h4,p]:mt-space-xs [&>h3,h4,p]:leading-normal [&>p]:text-(length:--text-body-lg) [&>p]:font-medium',
              )}
              data={richText}
              enableGutter={false}
            />
          )}

          <div className="flex flex-col items-center gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-row items-center justify-center gap-1">
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

        {Array.isArray(logos?.['logos-images']) && logos['logos-images'].length > 0 && (
          <div className="gap-space-md md:gap-space-lg flex w-full flex-col items-center">
            {headline && <p className="text-body-md text-base-secondary">{headline}</p>}
            <ul className="gap-x-space-lg gap-y-space-md flex w-full flex-wrap items-center justify-center md:justify-between">
              {logos['logos-images'].map(({ logo }, i) => {
                return (
                  <li key={i} className="flex items-center justify-center">
                    {logo && typeof logo === 'object' && (
                      <Media
                        imgClassName="h-size-sm max-w-[144px] object-contain"
                        priority
                        resource={logo}
                      />
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {media && typeof media === 'object' && (
          <Media
            className="rounded-space-sm relative h-auto w-full overflow-hidden select-none"
            imgClassName="object-cover"
            priority
            light={media.light ?? undefined}
            // fill
          />
        )}
      </div>
    </section>
  )
}
