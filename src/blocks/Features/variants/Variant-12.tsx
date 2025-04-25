'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'

import { cn } from '@/utilities/ui'

import { Card, CardContent } from '@/components/ui/card'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'

export const Variant12: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      {columns.map((column, index) => {
        const iconName = column.icon as keyof typeof dynamicIconImports
        return (
          <Card key={index} className="rounded-space-sm border-0 p-6 md:p-8">
            <CardContent
              key={index}
              className={cn('flex flex-col justify-start gap-6 bg-transparent p-0 md:gap-8')}
            >
              {column.icon && (
                <DynamicIcon
                  className="text-base-secondary h-6 w-6 md:h-8 md:w-8"
                  name={iconName}
                  color="currentColor"
                />
              )}
              {column.content && (
                <div className="flex flex-col gap-2">
                  <h3 className={`text-body-lg text-base-primary font-medium`}>
                    {column.content?.title}
                  </h3>
                  <p className={`text-body-md text-base-secondary`}>{column.content?.title}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
