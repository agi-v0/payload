'use client'

import React, { useState } from 'react'
import { FeaturesBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { ChevronDown } from 'lucide-react'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { extractHeading, getContentWithoutHeading } from '@/utilities/extractRichTextContent'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export const AccordionVariant: React.FC<FeaturesBlock> = ({ columns }) => {
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
          const headingText = extractHeading(column.content)
          const contentWithoutHeading = getContentWithoutHeading(column.content)

          return (
            <AccordionItem key={index} value={String(index)} className="border-0 p-4 md:p-6">
              <AccordionTrigger
                className={cn(
                  'text-base-tertiary flex items-center justify-start gap-2 bg-transparent p-0 transition-colors duration-200 md:gap-4',
                  isActive && 'text-base-primary bg-white pb-0.5 md:pb-2 dark:bg-gray-900',
                )}
              >
                {column.icon && (
                  <div className={`flex-shrink-0`}>
                    <DynamicIcon
                      className="h-6.5 w-6.5 md:h-8 md:w-8"
                      name={iconName}
                      color="currentColor"
                    />
                  </div>
                )}
                <h3 className={`text-xl font-medium no-underline`}>{headingText || 'Untitled'}</h3>
              </AccordionTrigger>
              <AccordionContent className="ltr:pl-pr-9 flex flex-col gap-4 p-0 rtl:pr-9">
                {column.content && <RichText enableGutter={false} data={contentWithoutHeading} />}
                {column.link && (
                  <CMSLink
                    className="justify-start px-0"
                    type={column.link.type || undefined}
                    newTab={column.link.newTab || undefined}
                    reference={column.link.reference}
                    url={column.link.url || undefined}
                    label={column.link.label}
                  />
                )}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>

      {activeAccordionId !== null && columns[parseInt(activeAccordionId)] && (
        <>
          {columns[parseInt(activeAccordionId)].image && (
            <div className="relative overflow-hidden rounded-xl lg:h-[516px]">
              <Media
                resource={columns[parseInt(activeAccordionId)].image || undefined}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
