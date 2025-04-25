'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const Hero06: React.FC<Page['hero']> = ({
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
    <div className="container flex flex-col items-center gap-4 px-0" data-theme="light">
      <div className="flex w-full flex-col gap-4">
        <div className="bg-base-static-white-primary dark:bg-base-static-dark-primary rounded-3xl p-8">
          <div className="mb-10 flex flex-col gap-6">
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
        <div className="bg-base-static-white-primary dark:bg-base-static-dark-primary flex w-full flex-col gap-8 rounded-3xl p-8">
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

      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media imgClassName="rounded-3xl  object-cover " priority resource={media} />
        )}
      </div>
    </div>
  )
}
