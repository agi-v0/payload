'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

export const Hero01: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  supportingText,
  logos,
  logosHeadline,
  badge,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  }, [setHeaderTheme])

  return (
    <section className="pb-xl gap-lg container flex flex-col pt-[20vh]">
      <div className="gap-md flex flex-col items-center justify-center text-center">
        <div className="gap-sm flex max-w-3xl flex-col items-center">
          {badge?.label && (
            <Badge
              label={badge?.label}
              icon={badge?.icon}
              icon_position={badge?.icon_position}
              variant={badge?.color}
            />
          )}

          {richText && (
            <RichText
              className={cn(
                'prose flex w-full flex-col items-center text-center',
                '[&>p]:text-body-lg',
              )}
              data={richText}
              enableGutter={false}
            />
          )}

          <div className="flex flex-col items-center gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-col gap-1 md:flex-row md:items-center md:justify-center">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className="w-full md:w-auto" size={'lg'} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            {supportingText && <p className="text-body-sm text-base-tertiary">{supportingText}</p>}
          </div>
        </div>
      </div>
      {Array.isArray(logos?.['logos-images']) && logos['logos-images'].length > 0 && (
        <div className="gap-space-md md:gap-space-lg flex w-full flex-col items-center">
          {logosHeadline && <p className="text-body-md text-base-secondary">{logosHeadline}</p>}
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
          className="relative aspect-[16/9] h-auto w-full overflow-hidden rounded-3xl select-none"
          imgClassName="object-cover"
          priority
          resource={media}
          fill
        />
      )}
    </section>
  )
}
