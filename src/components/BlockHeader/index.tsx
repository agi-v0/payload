'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import { BlockHeaderType } from '@/types/blockHeader'

export const BlockHeader: React.FC<BlockHeaderType> = (props) => {
  const {
    headerText,
    links,
    badge,
    className,
    badgeClassName,
    richTextClassName,
    linksClassName,
    type,
  } = props

  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div
      className={cn(
        'gap-md container grid grid-cols-2',
        type === 'center' ? 'justify-items-center' : '',
        className,
      )}
      data-theme="light"
    >
      {/* TODO: Hide all elements when their value is null */}
      {badge?.label && (
        <Badge
          className={cn('col-span-2', badgeClassName)}
          label={badge?.label}
          icon={badge?.icon}
          icon_position={badge?.icon_position}
          variant={badge?.color}
        />
      )}
      {headerText && (
        <RichText
          className={cn(
            'col-span-2 mx-0 md:row-start-2',
            type === 'split' ? 'md:grid md:grid-cols-subgrid' : '',
            type === 'center' ? 'mx-auto text-center' : '',
            richTextClassName,
          )}
          data={headerText}
          enableGutter={false}
        />
      )}
      {links && (
        <div
          className={cn(
            'col-span-2 row-start-3 justify-self-stretch md:col-span-1 md:justify-self-auto',
            type === 'split' ? 'md:col-start-2' : '',
            type === 'center' ? 'md:col-span-2' : '',
            linksClassName,
          )}
        >
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-col gap-1 md:flex-row md:gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink className="w-full" size={'lg'} {...link} />
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
