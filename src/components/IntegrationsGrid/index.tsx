'use client'
import React from 'react'
import { IntegrationCard, type IntegrationsCardData } from '@/components/IntegrationCard'
import { AnimatePresence, motion } from 'motion/react'
import { itemVariants } from '@/utilities/motion'

export type IntegrationWithId = IntegrationsCardData & { id: string }

interface IntegrationsGridProps {
  integrations: IntegrationWithId[]
  locale: 'ar' | 'en'
}

export const IntegrationsGrid: React.FC<IntegrationsGridProps> = ({ integrations, locale }) => {
  return (
    <div className="">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {integrations?.map((integration, index) => (
            <motion.div
              key={integration.id}
              layout
              custom={index}
              initial="hidden"
              variants={itemVariants}
              animate="visible"
              exit={{
                opacity: 0,
                y: -20,
                transition: {
                  duration: 0.3,
                  ease: 'easeIn',
                },
              }}
            >
              <IntegrationCard integration={integration} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
