'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero01: React.FC<Page['hero']> = ({
  richText,
  media,
  links,
  supportingText,
  logos,
  logosHeadline,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="container flex flex-col gap-8 md:gap-16" data-theme="light">
      <div className="mt-14 flex flex-col items-center justify-center md:mt-16">
        <div className="md:text-center">
          <div className="mb-10 flex max-w-4xl flex-col gap-6">
            {richText && (
              <RichText
                className="text-primary text-center text-lg font-normal md:text-2xl md:leading-8"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-col gap-4 md:flex-row md:justify-center">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className="w-full" size={'lg'} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            <p className="text-secondary text-center text-sm font-normal">{supportingText}</p>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-6 md:mt-16 md:gap-8">
          <p className="text-secondary text-body-m text-center">{logosHeadline}</p>
          {Array.isArray(logos?.['logos-images']) && logos?.['logos-images'].length > 0 && (
            <ul className="flex justify-between gap-10">
              {logos?.['logos-images'].map(({ logo }, i) => {
                return (
                  <li key={i}>
                    {logo && typeof logo === 'object' && (
                      <Media imgClassName="h-10 w-36 object-contain" priority resource={logo} />
                    )}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media imgClassName="rounded-3xl  object-cover " priority resource={media} />
        )}
      </div>
    </div>
  )
}
