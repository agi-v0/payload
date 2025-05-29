import React from 'react'
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

  if (!headerText && !links) return null

  return (
    <div
      className={cn(
        'gap-sm container grid grid-cols-2',
        type === 'center' ? 'justify-items-center' : '',
        className,
      )}
      data-theme="light"
    >
      {(badge?.label || badge?.reference) && (
        <Badge size="lg" {...badge} className={cn('col-span-2', badgeClassName)} />
      )}

      {headerText && (
        <RichText
          className={cn(
            'col-span-2 mx-0',
            type === 'split' &&
              'md:grid md:grid-cols-subgrid [&>*:is(h1,h2,h3,h4,h5,h6)]:pe-(length:--spacing-xl)',
            type === 'center' && 'mx-auto text-center',
            '[&_p]:text-body-lg',
            richTextClassName,
          )}
          data={headerText}
          enableGutter={false}
        />
      )}
      {Array.isArray(links) && links.length > 0 && (
        <ul
          className={cn(
            'col-span-2 row-start-3 justify-self-stretch md:col-span-1 md:justify-self-auto',
            'flex flex-row gap-1',
            type === 'split' ? 'md:col-start-2' : '',
            type === 'center' ? 'justify-center md:col-span-2' : '',
            linksClassName,
          )}
        >
          {links.map(({ link }, i) => {
            return (
              <li key={i} className="">
                <CMSLink className="w-full" size={'lg'} {...link} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
