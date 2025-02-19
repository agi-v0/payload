'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({
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
    <div className="container" data-theme="light">
      <div className="relative z-10 my-16 flex flex-col items-center justify-center">
        <div className="md:text-center">
          <div className="mb-10 flex max-w-4xl flex-col gap-6">
            <h1 className="text-primary text-7xl leading-[93.6px] font-[600]">{title}</h1>
            {richText && (
              <RichText
                className="text-primary text-2xl leading-8 font-normal"
                data={richText}
                enableGutter={false}
              />
            )}
          </div>
          <div className="flex flex-col gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4 md:justify-center">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink size={'lg'} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
            <p className="text-primary text-sm font-normal">{caption}</p>
          </div>
        </div>
        <div className="mt-16 flex w-full flex-col gap-8">
          <h5 className="text-primary text-center text-xl leading-5">{logos.title}</h5>
          {Array.isArray(logos['logos-images']) && logos['logos-images'].length > 0 && (
            <ul className="flex justify-between gap-10">
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
