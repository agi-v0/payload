import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import type { CMSLinkType } from '@/components/Link'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'

export const CallToAction02: React.FC<CTABlockProps> = ({ links, richText, list }) => {
  return (
    <div className="py-xl container">
      <div className="bg-background-neutral gap-xl px-xl rounded-space-sm flex flex-col items-center py-[calc(var(--spacing-xl)*2)]">
        <div className="gap-lg flex flex-col items-center">
          {richText && (
            <RichText className="mb-0 text-center" data={richText} enableGutter={false} />
          )}
          <div className="flex flex-col gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...(link as CMSLinkType)} />
            })}
          </div>
        </div>
        <hr className="border-border w-full" />
        {list && (
          <div
            className="gap-sm grid w-full grid-cols-2 md:grid-cols-(--columns)"
            style={
              { '--columns': `repeat(${list?.length}, minmax(0, 1fr))` } as React.CSSProperties
            }
          >
            {list.map((column, index) => {
              const { title, subtitle, icon } = column
              return (
                <div key={index} className="gap-sm flex flex-col items-start">
                  {icon && (
                    <div className="bg-background-neutral-subtle p-xs inline rounded-full">
                      <DynamicIcon
                        className="text-base-secondary size-sm"
                        name={icon as keyof typeof dynamicIconImports}
                        color="currentColor"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    {title && (
                      <h3 className="text-body-md text-base-primary font-medium">{title}</h3>
                    )}
                    {subtitle && <p className="text-body-sm text-base-secondary">{subtitle}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
