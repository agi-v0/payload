'use client'
import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { AppReference } from '@/components/AppReference'
import RichText from '@/components/RichText'
import { motion } from 'motion/react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2, // 0.2s delay between each
    },
  }),
}

const itemVariants2 = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const Variant01: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null

  return (
    <div className="bg-background gap-sm py-xl container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12">
      {columns.map((column, index) => {
        const { content, richTextContent, image, appReference, size = 'oneThird' } = column

        const lgColSpanClass =
          size === 'full' ? 'lg:col-span-12' : size === 'half' ? 'lg:col-span-6' : ''

        return (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className={cn('rounded-space-sm bg-background-neutral p-md col-span-4', lgColSpanClass)}
          >
            {appReference && (
              <AppReference
                appReference={appReference}
                className={cn(
                  {
                    'lg:basis-1/2': size === 'full',
                    'w-full': size !== 'full',
                  },
                  'mb-lg',
                )}
              />
            )}
            <div
              className={cn('lg:gap-sm gap-lg flex flex-col-reverse lg:flex-col', {
                'lg:flex-row': size === 'full', // Adjust layout for full-size columns
              })}
            >
              {richTextContent && (
                <div
                  className={cn('gap-sm flex flex-col', {
                    'pe-md w-full lg:basis-1/2': size === 'full',
                  })}
                >
                  <RichText data={richTextContent} />
                </div>
              )}
              {image && (
                <div
                  className={cn('rounded-space-sm bg-background-neutral-subtle overflow-hidden', {
                    'lg:basis-1/2': size === 'full', // Adjust width for full-size columns
                    'w-full': size !== 'full', // Full width for non-full-size columns
                  })}
                >
                  <Media
                    resource={image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-[4/3] object-cover"
                  />
                </div>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
