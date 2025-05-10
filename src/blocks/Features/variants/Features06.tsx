import React from 'react'
import { Media } from '@/components/Media'
import { FeaturesBlock } from '@/payload-types'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { BlockHeader } from '@/components/BlockHeader'

export const Features06: React.FC<FeaturesBlock> = ({ columns, blockImage, blockHeader }) => {
  if (!columns || columns.length === 0) return null
  return (
    <div className="bg-background-neutral-subtle py-xl w-full">
      <div className="py-xl container">
        <div className="gap-md rounded-space-sm p-md bg-background-neutral flex flex-col">
          <div className="gap-sm flex flex-col md:flex-row">
            <div className="gap-md md:pe-md md:pt-md flex w-full flex-col lg:basis-1/2">
              {blockHeader && (
                <BlockHeader
                  {...blockHeader}
                  richTextClassName="auto-rows-auto"
                  className="h-full grid-cols-1 grid-rows-[auto_1fr_auto] px-0"
                  type="start"
                />
              )}
            </div>
            {blockImage && (
              <div className="rounded-space-sm overflow-hidden lg:basis-1/2">
                <Media
                  resource={blockImage}
                  className="h-auto w-full"
                  imgClassName="w-full h-auto aspect-square object-cover"
                />
              </div>
            )}
          </div>
          <div
            className="gap-xs grid grid-cols-2 md:grid-cols-(--columns)"
            style={
              { '--columns': `repeat(${columns.length}, minmax(0, 1fr))` } as React.CSSProperties
            }
          >
            {columns.map((column, index) => {
              const { content, icon } = column
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
                    {content?.title && (
                      <h3 className="text-body-md text-base-primary font-medium">
                        {content.title}
                      </h3>
                    )}
                    {content?.subtitle && (
                      <p className="text-body-sm text-base-secondary">{content.subtitle}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
