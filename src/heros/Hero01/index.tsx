'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero01: React.FC<Page['hero']> = ({
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
    <div className="container flex flex-col gap-8 md:gap-16" data-theme="light">
      <div className=" md:mt-16 mt-14 flex items-center justify-center flex-col ">
        <div className=" md:text-center">
          <div className="flex gap-6 flex-col mb-10 max-w-4xl ">
            <h1 className="md:text-7xl text-5xl font-[600] text-primary md:leading-[93.6px] leading-[62.4px] text-center">
              {title}
            </h1>
            {richText && (
              <RichText
                className=" md:text-2xl text-lg  md:leading-8 font-normal text-primary text-center"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex md:justify-center gap-4 md:flex-row flex-col">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink className="w-full" size={'lg'} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            <p className="text-sm font-normal text-primary text-center">{caption}</p>
          </div>
        </div>
        <div className="md:mt-16 mt-8 flex flex-col md:gap-8 gap-6 w-full">
          <h5 className="md:text-xl text-base text-primary leading-5 text-center">{logos.title}</h5>
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

      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media imgClassName="rounded-3xl  object-cover " priority resource={media} />
        )}
      </div>
    </div>
  )
}
