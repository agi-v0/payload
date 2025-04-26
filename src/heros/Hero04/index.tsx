'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero04: React.FC<Page['hero']> = ({
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
    <div className="container flex flex-col gap-8">
      <div className="container flex px-0" data-theme="light">
        <div className="flex w-1/2 flex-col justify-between ltr:pr-12 rtl:pl-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {richText && (
                <RichText
                  className="text-primary mx-0 max-w-4xl text-2xl leading-8 font-normal"
                  data={richText}
                  enableGutter={false}
                />
              )}
            </div>
            <div className="flex flex-col gap-4">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink size={'lg'} {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
              <p className="text-primary text-sm font-normal">{supportingText}</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 select-none">
          {media && typeof media === 'object' && (
            <Media
              imgClassName="rounded-3xl  object-cover  min-h-[423px]"
              priority
              resource={media}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <h5 className="text-primary text-xl leading-5">{logosHeadline}</h5>
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
  )
}
