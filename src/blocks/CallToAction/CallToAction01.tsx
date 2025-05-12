import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import type { CMSLinkType } from '@/components/Link'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const CallToAction01: React.FC<CTABlockProps> = ({
  badge,
  richText,
  links,
  supportingText,
  list,
  media,
}) => {
  return (
    <div className="py-xl container">
      <div className="relative">
        <div
          data-theme="dark"
          className="rounded-space-md p-md gap-sm relative z-1 flex aspect-[9/16] h-auto w-full flex-col items-start justify-end bg-transparent md:aspect-video md:flex-row md:items-end md:justify-between"
        >
          {richText && (
            <RichText className="mx-0 lg:max-w-[32rem]" data={richText} enableGutter={false} />
          )}
          <div className="flex flex-col gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...(link as CMSLinkType)} />
            })}
          </div>
        </div>
        {media && (
          <Media
            resource={media}
            fill
            className="rounded-space-md absolute top-0 right-0 z-0 h-full w-full overflow-hidden"
            imgClassName="object-cover"
          />
        )}
      </div>
    </div>
  )
}
