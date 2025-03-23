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

export const BlockHeader03: React.FC<BlockHeaderProps> = (props) => {
  const { richTextStandard, richText, links, badge } = props
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  const contentToRender = richTextStandard || richText

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

      {contentToRender && <RichText className="m-0" data={contentToRender} enableGutter={false} />}
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
