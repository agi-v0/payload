'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero03: React.FC<Page['hero']> = ({
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
    <div className="container flex flex-col md:flex-row md:px-0" data-theme="light">
      <div className="flex w-full flex-col justify-between md:w-1/2 ltr:md:pr-12 rtl:md:pl-12">
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-primary text-5xl leading-[1.6] font-[600] md:text-7xl md:leading-[93.6px]">
              {title}
            </h1>
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
              <ul className="flex flex-col gap-1 md:flex-row md:gap-4">
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

      <div className="w-full select-none md:w-1/2">
        {media && typeof media === 'object' && (
          <Media
            imgClassName="rounded-3xl  object-cover  min-h-[680px]"
            priority
            resource={media}
          />
        )}
      </div>
    </div>
  )
}
