'use client'
import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { AppReference } from '@/components/AppReference'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'
import { itemVariants } from '@/utilities/motion'

export const Features01: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null

  const rows: FeaturesBlock['columns'][] = []

  let i = 0
  while (i < columns.length) {
    if (columns[i]?.size === 'full') {
      // If column is full-width, add it as a single-item row
      rows.push([columns[i]])
      i += 1
    } else {
      // Otherwise add up to two columns per row
      const row = columns.slice(i, i + 2)
      rows.push(row)
      i += 2
    }
  }

  return (
    <div className="bg-background gap-sm py-xl container grid grid-cols-1">
      {rows.map((row, index) => (
        <div
          key={index}
          className={cn('gap-sm grid w-full grid-cols-1', {
            'md:grid-cols-2': row?.length === 2,
          })}
        >
          {row?.map((column, index) => {
            const { richTextContent, image, appReference, size = 'half' } = column // Removed 'content' as it's unused
            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className={cn('rounded-space-sm bg-background-neutral p-md w-full')}
              >
                {appReference && <AppReference appReference={appReference} className="mb-md" />}
                <div
                  className={cn('gap-md flex flex-col', {
                    'md:flex-row': size === 'full' || row?.length === 1,
                  })}
                >
                  {richTextContent && (
                    <RichText data={richTextContent} className={cn('pe-md w-full')} />
                  )}
                  {image && (
                    <div className="rounded-space-sm bg-background-neutral-subtle h-auto w-full overflow-hidden">
                      <Media
                        resource={image}
                        className="group h-auto w-full"
                        imgClassName="w-full group-hover:scale-102 transition-all duration-300 h-auto aspect-[4/3] object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
