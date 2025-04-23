'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { VariantProps } from './VariantTypes'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { Card, CardContent } from '@/components/ui/card'
import { BlockHeader } from '@/blocks/BlockHeader'

export const Variant06: React.FC<VariantProps> = ({ columns, blockImage, blockHeader }) => {
  if (!columns || columns.length === 0) return null
  return (
    <div className={cn('gap-space-site rounded-space-md flex flex-col lg:p-8')}>
      <div className={cn('flex flex-col lg:flex-row')}>
        <div className={cn('gap-md pe-space-md flex w-full flex-col lg:basis-1/2')}>
          {blockHeader && (
            <BlockHeader
              {...blockHeader}
              richTextClassName="auto-rows-auto"
              className="h-full grid-rows-[auto_1fr_auto]"
              type="start"
            />
          )}
        </div>
        {blockImage && (
          <div className={cn('rounded-space-md overflow-hidden lg:basis-1/2')}>
            <Media
              resource={blockImage}
              className="h-auto w-full"
              imgClassName="w-full h-auto aspect-square object-cover"
            />
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {columns.map((column, index) => {
          const { content, icon } = column
          const iconName = icon as keyof typeof dynamicIconImports
          return (
            <Card key={index} className="border-0 bg-transparent">
              <CardContent className={cn('flex flex-col items-start gap-6 p-0 md:gap-8')}>
                {icon && (
                  <div className="inline rounded-full bg-white p-4">
                    <DynamicIcon
                      className="text-base-secondary h-6 w-6 md:h-8 md:w-8"
                      name={iconName}
                      color="currentColor"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  {content?.title && (
                    <h3 className={`text-body-lg text-base-primary font-medium`}>
                      {content?.title}
                    </h3>
                  )}
                  {content?.copy && (
                    <p className={`text-body-md text-base-secondary`}>{content?.copy}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
