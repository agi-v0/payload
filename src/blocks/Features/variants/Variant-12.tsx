'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'

import { cn } from '@/utilities/ui'

import { Card, CardContent } from '@/components/ui/card'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'

export const Variant12: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null

  return (
    <div className="py-xl gap-xs container grid grid-cols-1 md:grid-cols-3">
      {columns.map((column, index) => {
        const iconName = column.icon as keyof typeof dynamicIconImports
        return (
          <Card key={index} className="rounded-space-sm p-md bg-card border-0">
            <CardContent key={index} className={cn('gap-md flex flex-col justify-start p-0')}>
              {column.icon && (
                <DynamicIcon
                  className="text-base-secondary size-md"
                  name={iconName}
                  color="currentColor"
                />
              )}
              {column.content?.title && (
                <div className="flex flex-col gap-2">
                  <h3 className="text-body-lg text-base-primary font-medium">
                    {column.content?.title}
                  </h3>
                  <p className="text-body-md text-base-tertiary">{column.content?.title}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
