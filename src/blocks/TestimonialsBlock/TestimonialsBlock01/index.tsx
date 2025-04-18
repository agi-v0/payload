'use client'

import React, { useEffect, useRef } from 'react'
import { Link } from '@/i18n/routing'
// import { getTranslations } from 'next-intl/server' // Cannot use in client components without passing down props
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react'
import { motion, useAnimation, useInView, Variants } from 'motion/react'

import { Testimonial } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

interface Props {
  testimonials: Testimonial[]
  linkLabel: string
}

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 1 }, // Start with container visible
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children by 0.2s
      duration: 0.5,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const TestimonialsBlock01: React.FC<Props> = ({ testimonials, linkLabel }) => {
  const testimonial = testimonials?.[0]

  const { authorInfo, quote, media, companyLogo, stats, rating } = testimonial

  if (!testimonial) {
    return null
  }

  const renderStat = (stat: NonNullable<Testimonial['stats']>[number], index: number) => (
    <motion.div
      key={stat.id || index}
      variants={itemVariants} // Apply item animation
      className="p-space-lg bg-background-light rounded-space-sm flex flex-col justify-center border border-neutral-200 dark:border-neutral-700"
    >
      <span className="text-h3 text-base-primary font-medium">
        {stat.value}
        {stat.isPercentage ? '%' : ''}
      </span>
      <div className="mt-space-xs flex items-center gap-1">
        {stat.isIncrease ? (
          <ArrowUp className="text-base-tertiary size-4" />
        ) : (
          <ArrowDown className="text-base-tertiary size-4" />
        )}
        <span className="text-base-tertiary text-sm font-normal">{stat.label}</span>
      </div>
    </motion.div>
  )

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '50%' }}
      variants={containerVariants}
      className="bg-background-medium py-space-lg"
    >
      <div className="container">
        <motion.div
          variants={itemVariants} // Animate the main card as one item
          className="bg-background-light rounded-space-sm grid grid-cols-1 md:grid-cols-2 lg:items-stretch"
        >
          <div className="gap-space-md p-space-md pb-space-xs md:pb-space-md flex flex-col justify-start md:justify-between">
            {companyLogo && (
              <Media resource={companyLogo} className="h-12 w-auto" imgClassName="object-contain" />
            )}
            {quote && (
              <RichText
                data={quote}
                enableProse={false}
                className="text-base-primary text-(length:--text-h3) font-medium"
              />
            )}
            {authorInfo && (
              <div className="mt-space-sm gap-space-xs flex flex-row items-center">
                {authorInfo.avatar && (
                  <Media resource={authorInfo.avatar} className="h-12 w-12 rounded-full" />
                )}
                <div>
                  <p className="text-base-primary text-body-sm font-medium">{authorInfo.name}</p>
                  <p className="text-body-sm text-base-secondary">{authorInfo.title}</p>
                </div>
              </div>
            )}
          </div>
          {media && (
            <motion.div
              variants={itemVariants}
              className="p-space-xs flex items-center justify-center"
            >
              <Media
                resource={media}
                className="rounded-space-sm aspect-[4/3] h-auto w-full overflow-hidden"
              />
            </motion.div>
          )}
        </motion.div>
        {stats && stats.length > 0 && (
          <motion.div
            variants={containerVariants} // Use container variants to stagger stats + link
            className="mt-space-xs gap-space-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map(renderStat)}
            <motion.div
              variants={itemVariants}
              initial="initial"
              whileHover="hover"
              className="overflow-hidden"
            >
              <Link
                href="/testimonials"
                className="text-h4 p-space-sm rounded-space-sm bg-neutral/90 hover:bg-neutral text-inverted-primary relative flex h-full items-center justify-center text-center font-medium transition-colors duration-300"
              >
                <motion.span
                  variants={{
                    initial: { opacity: 1, x: 0 },
                    hover: { opacity: 0, x: '-50%' },
                  }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  {linkLabel}
                </motion.span>
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  variants={{
                    initial: { opacity: 0, x: '50%' },
                    hover: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <ArrowRight className="size-8 rtl:rotate-180" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}
