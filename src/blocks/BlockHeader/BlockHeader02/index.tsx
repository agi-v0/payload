'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'

type BlockHeaderProps = {
  headerText?: any
  links?: any
  badge?: any
  className?: string
}

export const BlockHeader02: React.FC<BlockHeaderProps> = (props) => {
  const { headerText, links, badge } = props

  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  // const contentToRender = richTextStandard || richText

  return (
    <div className={cn('gap-site container grid grid-cols-2', className)} data-theme="light">
      {/* TODO: Hide all elements when their value is null */}
      {badge && (
        <Badge
          label={badge?.label}
          icon={badge?.icon}
          icon_dir={badge?.icon_dir}
          variant={badge?.color}
        />
      )}

      {headerText && (
        <RichText
          className="col-span-2 row-start-2 mx-0 grid grid-cols-subgrid gap-4"
          data={headerText}
          enableGutter={false}
        />
      )}
      {links && (
        <div className="col-start-2 row-start-3">
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
