'use client'

import React, { useState } from 'react'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { FeaturesBlock } from '@/payload-types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const Features09: React.FC<FeaturesBlock> = ({ columns }) => {
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(
    columns && columns.length > 0 ? String(0) : null,
  )

  if (!columns || columns.length === 0) return null

  return (
    <div className="py-xl gap-md container flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
      <Accordion
        type="single"
        collapsible={false}
        value={activeAccordionId || undefined}
        onValueChange={(value) => setActiveAccordionId(value)}
        className="flex flex-col"
      >
        {columns.map((column, index) => {
          const iconName = column.icon as keyof typeof dynamicIconImports
          const isActive = activeAccordionId === String(index)

          return (
            <AccordionItem
              key={index}
              value={String(index)}
              className={cn(
                'rounded-space-sm md:p-sm border-0 transition-colors duration-200',
                isActive && 'bg-background-neutral',
              )}
            >
              <AccordionTrigger
                className={cn(
                  'text-base-tertiary flex items-center justify-start gap-2 bg-transparent p-0 hover:no-underline md:gap-4',
                  isActive && 'pb-0.5 text-(color:--color-base-primary) md:pb-2',
                )}
              >
                {column.icon && (
                  <div className={`flex-shrink-0`}>
                    <DynamicIcon
                      className={cn(
                        'size-sm',
                        isActive ? 'text-base-primary' : 'text-base-tertiary',
                      )}
                      name={iconName}
                      color="currentColor"
                    />
                  </div>
                )}
                {column.content?.title && (
                  <h3 className="text-body-lg text-start font-medium">{column.content.title}</h3>
                )}
              </AccordionTrigger>
              <AccordionContent className="ps-lg flex flex-col items-start gap-4 p-0">
                {column.content && (
                  <p className="text-base-secondary text-(length:--text-body-md)">
                    {column.content.subtitle}
                  </p>
                )}
                {column.link && <CMSLink variant="inline" {...column.link} />}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
      {activeAccordionId !== null && columns[parseInt(activeAccordionId)] && (
        <>
          {columns[parseInt(activeAccordionId)].image && (
            <Media
              resource={columns[parseInt(activeAccordionId)].image || undefined}
              className="rounded-space-sm h-auto w-full overflow-hidden"
              imgClassName="w-full h-auto object-cover"
            />
          )}
        </>
      )}
    </div>
  )
}
