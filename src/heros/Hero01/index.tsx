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
  headline,
  badge,
}) => {
  // const { setHeaderTheme } = useHeaderTheme()

  // useEffect(() => {
  //   setHeaderTheme('light')
  // }, [setHeaderTheme])

  return (
    <section className="pb-site container h-screen pt-(--header-plus-admin-bar-height)">
      <div className="relative z-0 h-full w-full">
        <div
          data-theme="dark"
          className="p-xl absolute bottom-0 z-1 flex w-full flex-row items-center justify-between"
        >
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
            {supportingText && <p className="text-base-tertiary text-sm">{supportingText}</p>}
          </div>
        </div>

        {media && typeof media === 'object' && (
          <Media
            fill
            imgClassName="rounded-space-sm object-cover"
            className="relative h-full w-full select-none"
            priority
            light={media.light ?? undefined}
          />
        )}
      </div>
    </section>
  )
}
