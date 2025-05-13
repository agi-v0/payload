'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { FeaturesBlock } from '@/payload-types'
import { DynamicIcon, dynamicIconImports } from 'lucide-react/dynamic'
import { Card, CardContent } from '@/components/ui/card'
import { BlockHeader } from '@/components/BlockHeader'
import { motion } from 'motion/react'
import { containerVariants, itemsFling } from '@/utilities/motion'

export const Features07: React.FC<FeaturesBlock> = ({ columns, blockImage, blockHeader }) => {
  if (!columns || columns.length === 0) return null
  return (
    <div className="gap-md rounded-space-sm py-xl container flex flex-col">
      <div className={cn('gap-sm flex flex-col')}>
        {blockHeader && <BlockHeader {...blockHeader} type="center" />}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {blockImage && (
            <Media
              resource={blockImage}
              className="rounded-space-sm h-auto w-full overflow-hidden lg:basis-1/2"
              imgClassName="w-full h-auto aspect-[16/9] object-cover"
            />
          )}
        </motion.div>
      </div>
      <hr className="border-border" />
      <motion.div
        className="gap-xs grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
        style={{ '--columns': `repeat(${columns.length}, minmax(0, 1fr))` } as React.CSSProperties}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {columns.map((column, index) => {
          const { content, icon } = column
          return (
            <motion.div
              key={index}
              className="gap-sm bg-background-neutral rounded-space-sm p-sm flex flex-col items-start"
              variants={itemsFling}
            >
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
                  <h3 className="text-body-md text-base-primary font-medium">{content.title}</h3>
                )}
                {content?.subtitle && (
                  <p className="text-body-sm text-base-secondary">{content.subtitle}</p>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
