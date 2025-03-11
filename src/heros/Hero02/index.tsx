'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero02: React.FC<Page['hero']> = ({
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
    <div className="container" data-theme="light">
      <div className="relative z-10 mb-16 flex flex-col">
        <div className="">
          <div className="mb-10 flex flex-col gap-6">
            {richText && (
              <RichText
                className="text-primary mx-0 max-w-4xl text-lg leading-8 font-normal md:text-2xl"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex flex-col gap-4 md:flex-row">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className="w-full md:w-auto" size={'lg'} {...(link as any)} />
                    </li>
                  )
                })}
              </ul>
            )}
            <p className="text-primary text-center text-sm font-normal ltr:md:text-left rtl:md:text-right">
              {supportingText}
            </p>
          </div>
        </div>
        <div className="mt-16 flex w-full flex-col gap-6 md:gap-8">
          <h5 className="text-primary text-base leading-5 md:text-xl">{logosHeadline}</h5>
          {Array.isArray(logos?.['logos-images']) && logos?.['logos-images'].length > 0 && (
            <ul className="flex justify-between gap-10">
              {logos?.['logos-images'].map(({ logo }, i) => {
                return (
                  <li key={i}>
                    {logo && typeof logo === 'object' && (
                      <Media imgClassName="h-10  w-36 object-contain" priority resource={logo} />
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
