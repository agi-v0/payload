'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'

export const BlockHeader02: React.FC<Page['hero']> = ({ richText, links, badge }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="container flex flex-col md:gap-6" data-theme="light">
      {/* TODO: Hide all elements when their value is null */}
      {badge && (
        <Badge
          label={badge?.label}
          icon={badge?.icon}
          icon_dir={badge?.icon_dir}
          variant={badge?.color}
        />
      )}

      {richText && (
        <RichText className="flex gap-4 [&>*]:basis-1/2" data={richText} enableGutter={false} />
      )}
      {links && (
        <div className="mr-auto w-1/2 pr-2">
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-col gap-2 md:flex-row">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink className="w-full" size={'lg'} {...(link as any)} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
