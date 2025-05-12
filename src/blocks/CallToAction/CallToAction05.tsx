import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import type { CMSLinkType } from '@/components/Link'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const CallToAction05: React.FC<CTABlockProps> = ({
  badge,
  richText,
  links,
  supportingText,
  list,
  media,
}) => {
  return (
    <div data-theme="dark" className="py-xl bg-background-neutral">
      <div className="px-md py-xl gap-md rounded-space-sm container flex flex-col items-center md:flex-row md:items-center md:justify-between">
        <div className="gap-sm mx-auto flex flex-col items-start max-md:w-full">
          {richText && (
            <RichText
              className="mb-0 text-start max-md:mx-0"
              data={richText}
              enableGutter={false}
            />
          )}
          <div className="flex w-full flex-row justify-start gap-8">
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} size="lg" {...(link as CMSLinkType)} />
            })}
          </div>
        </div>
        {media && (
          <Media
            resource={media}
            className="rounded-space-md overflow-hidden md:max-w-[32rem] md:basis-1/2"
          />
        )}
      </div>
    </div>
  )
}
