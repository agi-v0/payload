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

export const Variant09: React.FC<FeaturesBlock> = ({ columns }) => {
  const [activeAccordionId, setActiveAccordionId] = useState<string | null>(
    columns && columns.length > 0 ? String(0) : null,
  )

  if (!columns || columns.length === 0) return null

  return (
    <div className="flex flex-col gap-12 md:p-8 lg:grid lg:grid-cols-2">
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
                'rounded-space-md border-0 p-4 transition-colors duration-200 md:p-6',
                isActive && 'bg-white dark:bg-gray-900',
              )}
            >
              <AccordionTrigger
                className={cn(
                  'text-base-tertiary flex items-center justify-start gap-2 bg-transparent p-0 hover:no-underline md:gap-4',
                  isActive && 'text-base-primary pb-0.5 md:pb-2 dark:bg-gray-900',
                )}
              >
                {column.icon && (
                  <div className={`flex-shrink-0`}>
                    <DynamicIcon
                      className={cn(
                        'h-6.5 w-6.5 md:h-8 md:w-8',
                        isActive ? 'text-base-primary' : 'text-base-tertiary',
                      )}
                      name={iconName}
                      color="currentColor"
                    />
                  </div>
                )}
                <h3 className="text-body-lg font-medium ltr:text-left rtl:text-right">
                  {column.content.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col items-start gap-4 p-0 ltr:pl-12 rtl:pr-12">
                {column.content && <p className="text-body-md">{column.content.copy}</p>}
                {column.link && <CMSLink {...column.link} />}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {activeAccordionId !== null && columns[parseInt(activeAccordionId)] && (
        <>
          {columns[parseInt(activeAccordionId)].image && (
            <div className="rounded-space-md overflow-hidden">
              <Media
                resource={columns[parseInt(activeAccordionId)].image || undefined}
                className="h-auto w-full"
                imgClassName="w-full h-auto aspect-square object-cover"
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
