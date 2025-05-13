'use client'
import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { Badge } from '@/components/ui/badge'
import { motion } from 'motion/react'
import { containerVariants, itemVariants, itemsFling } from '@/utilities/motion'

export const Features05: React.FC<FeaturesBlock> = ({ columns }) => {
  if (!columns?.length) return null
  return (
    <motion.div
      className="py-xl gap-sm container grid grid-cols-1 md:grid-cols-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {columns.map((column, index) => {
        const { image, enableBadge, badge, richTextContent, enableCta, link } = column
        return (
          <motion.div key={index} variants={itemsFling} className="overflow-hidden border-0">
            <Card className="overflow-hidden border-0">
              <CardContent className="gap-sm flex flex-col">
                {image && (
                  <div className="h-auto w-full">
                    <Media
                      resource={image}
                      className="rounded-space-sm h-auto w-full overflow-hidden"
                      imgClassName="w-full h-auto object-cover"
                    />
                  </div>
                )}
                {enableBadge && badge && <Badge {...badge} />}
                {richTextContent && (
                  <RichText className={cn('mx-0')} data={richTextContent} enableGutter={false} />
                )}
                {enableCta && link?.label && (
                  <CMSLink {...link} variant="primary" className="mt-auto" />
                )}
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
