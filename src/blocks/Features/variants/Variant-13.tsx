'use client'

import React from 'react'
import { FeaturesBlock } from '@/payload-types'

import { cn } from '@/utilities/ui'

import { Card, CardContent } from '@/components/ui/card'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'

export const Variant13: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns || columns.length === 0) return null

  return (
    <div className="gap-md grid grid-cols-1 py-8 md:grid-cols-3 md:py-12">
      {columns.map((column, index) => {
        const iconName = column.icon as keyof typeof dynamicIconImports
        return (
          <Card key={index} className="rounded-none border-0 bg-transparent">
            <CardContent key={index} className={cn('gap-md flex flex-col justify-start p-0')}>
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
