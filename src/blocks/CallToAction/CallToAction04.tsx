import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import type { CMSLinkType } from '@/components/Link'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToAction04: React.FC<CTABlockProps> = ({
  badge,
  richText,
  links,
  supportingText,
  list,
  media,
}) => {
  return (
    <div className="py-xl container">
      <div className="bg-background-neutral gap-md p-xl rounded-space-sm flex flex-col md:flex-row md:items-center md:justify-between">
        {richText && (
          <RichText className="mx-0 mb-0 lg:max-w-[32rem]" data={richText} enableGutter={false} />
        )}

        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...(link as CMSLinkType)} />
          })}
        </div>
      </div>
    </div>
  )
}
