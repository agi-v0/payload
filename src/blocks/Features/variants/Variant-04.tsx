import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { BlockHeader } from '@/blocks/BlockHeader'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

export const Variant04: React.FC<FeaturesBlock> = ({ blockHeader, blockImage }) => {
  return (
    <div className="my-8 grid grid-cols-1 items-start gap-8 md:my-12 md:grid-cols-2 md:items-center md:gap-12">
      {blockImage && (
        <div className={cn('rounded-space-md overflow-hidden')}>
          <Media
            resource={blockImage}
            className="h-auto w-full"
            imgClassName="w-full h-auto aspect-[4/3] object-cover"
          />
        </div>
      )}
      {blockHeader && <BlockHeader {...blockHeader} type="start" />}
    </div>
  )
}
