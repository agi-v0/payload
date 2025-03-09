'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero07: React.FC<Page['hero']> = ({ linksGroup, media, richText, title, logos }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="container flex flex-col gap-4" data-theme="light">
      <div className="container flex gap-4 px-0">
        <div className="bg-base-static-white-primary dark:bg-base-static-dark-primary flex w-1/2 flex-col justify-center rounded-3xl p-8 ltr:pr-12 rtl:pl-12">
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
        </div>

        <div className="w-1/2 select-none">
          {media && typeof media === 'object' && (
            <Media
              imgClassName="rounded-3xl  object-cover  min-h-[706px]"
              priority
              resource={media}
            />
          )}
        </div>
      </div>
      <div className="bg-base-static-white-primary dark:bg-base-static-dark-primary flex w-full flex-col gap-8 rounded-3xl p-8">
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
  )
}
