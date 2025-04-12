'use client'

import React from 'react'
import { VariantProps } from './VariantTypes'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

import { cn } from '@/utilities/ui'

import { Card, CardContent } from '@/components/ui/card'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { extractHeading, getContentWithoutHeading } from '@/utilities/extractRichTextContent'

export const CardsVariant: React.FC<VariantProps> = ({ columns }) => {
  if (!columns || columns.length === 0) return null

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
      {columns.map((column, index) => {
        const iconName = column.icon as keyof typeof dynamicIconImports
        const headingText = extractHeading(column.content)
        const contentWithoutHeading = getContentWithoutHeading(column.content)
        return (
          <Card key={index} className="border-0 p-6 md:p-8">
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
              <div className="flex flex-col gap-2">
                <h3 className={`text-primary text-xl font-medium no-underline`}>
                  {headingText || 'Untitled'}
                </h3>
                {column.content && (
                  <RichText
                    className="text-base-secondary"
                    enableGutter={false}
                    data={contentWithoutHeading}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
