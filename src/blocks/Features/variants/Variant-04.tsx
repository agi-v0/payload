import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { BlockHeader } from '@/components/BlockHeader'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
export const Variant04: React.FC<FeaturesBlock> = ({ columns, blockHeader, blockImage }) => {
  if (!columns?.length) return null

  return (
    <div className="pb-xl container">
      {columns.map((column, index) => {
        return (
          <div
            key={index}
            className="py-xl gap-xs grid grid-cols-1 items-start md:grid-cols-2 md:items-center"
          >
            {!column.reverseOrder ? (
              <>
                {column.richTextContent && (
                  <RichText data={column.richTextContent} className="pe-xl" />
                )}
                {column.image && (
                  <div
                    className={cn('rounded-space-sm bg-background-neutral-subtle overflow-hidden')}
                  >
                    <Media
                      resource={column.image}
                      className="h-auto w-full"
                      imgClassName="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                {column.image && (
                  <div
                    className={cn('rounded-space-sm bg-background-neutral-subtle overflow-hidden')}
                  >
                    <Media
                      resource={column.image}
                      className="h-auto w-full"
                      imgClassName="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                )}
                {column.richTextContent && (
                  <RichText data={column.richTextContent} className="ps-xl" />
                )}
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
