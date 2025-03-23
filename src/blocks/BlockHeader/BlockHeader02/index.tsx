'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'

type BlockHeaderProps = {
  richText?: any
  richTextStandard?: any
  links?: any
  badge?: any
}

export const BlockHeader02: React.FC<BlockHeaderProps> = (props) => {
  const { richTextStandard, richText, links, badge } = props
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  const contentToRender = richTextStandard || richText

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

      {contentToRender && (
        <RichText
          className="flex gap-4 [&>*]:basis-1/2"
          data={contentToRender}
          enableGutter={false}
        />
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
