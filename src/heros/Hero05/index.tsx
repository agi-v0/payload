'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero05: React.FC<Page['hero']> = ({ linksGroup, media, richText, title, logos }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="-mt-11 flex" data-theme="light">
      <div className="flex w-1/2 max-w-[720px] flex-col justify-between ltr:ml-auto ltr:pr-12 ltr:pl-8 rtl:mr-auto rtl:pr-8 rtl:pl-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-primary text-7xl leading-[93.6px] font-[600]">{title}</h1>
            {richText && (
              <RichText
                className="text-primary mx-0 max-w-4xl text-2xl leading-8 font-normal"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(linksGroup?.links) && linksGroup?.links.length > 0 && (
              <ul className="flex gap-4">
                {linksGroup?.links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink size={'lg'} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            <p className="text-primary text-sm font-normal">{linksGroup?.links_caption}</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-8">
          <h5 className="text-primary text-xl leading-5">{logos?.title}</h5>
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

      <div className="w-1/2 select-none">
        {media && typeof media === 'object' && (
          <Media imgClassName="  object-cover   min-h-[720px] " priority resource={media} />
        )}
      </div>
    </div>
  )
}
