'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'

export const BlockHeader04: React.FC<Page['hero']> = ({ richText, links, badge }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div className="container flex flex-col gap-6" data-theme="light">
      {badge && (
        <Badge
          label={badge?.label}
          icon={badge?.icon}
          icon_dir={badge?.icon_dir}
          variant={badge?.color}
        />
      )}

      {richText && <RichText className="m-0" data={richText} enableGutter={false} />}
      {links && (
        <div className="flex flex-col gap-4 md:pt-6">
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
