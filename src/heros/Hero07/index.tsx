'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero07: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  title,
  caption,
  logos,
}) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="container flex flex-col gap-4" data-theme="light">
      <div className="container px-0 flex gap-4">
        <div className="flex  flex-col justify-center w-1/2 ltr:pr-12 rtl:pl-12  rounded-3xl p-8 bg-base-static-white-primary dark:bg-base-static-dark-primary ">
          <div className="flex flex-col gap-10">
            <div className="flex  flex-col gap-6">
              <h1 className="text-7xl font-[600] text-primary leading-[93.6px]">{title}</h1>
              {richText && (
                <RichText
                  className=" text-2xl leading-8 font-normal text-primary max-w-4xl mx-0"
                  data={richText}
                  enableGutter={false}
                />
              )}
            </div>
            <div className="flex flex-col gap-4">
              {Array.isArray(links) && links.length > 0 && (
                <ul className="flex  gap-4">
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink size={'lg'} {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
              <p className="text-sm font-normal text-primary">{caption}</p>
            </div>
          </div>
        </div>

        <div className=" select-none w-1/2 ">
          {media && typeof media === 'object' && (
            <Media
              imgClassName="rounded-3xl  object-cover  min-h-[706px]"
              priority
              resource={media}
            />
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-8 w-full bg-base-static-white-primary rounded-3xl p-8 dark:bg-base-static-dark-primary ">
        <h5 className="text-xl text-primary leading-5 ">{logos.title}</h5>
        {Array.isArray(logos['logos-images']) && logos['logos-images'].length > 0 && (
          <ul className="flex justify-between gap-10 ">
            {logos['logos-images'].map(({ logo }, i) => {
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
