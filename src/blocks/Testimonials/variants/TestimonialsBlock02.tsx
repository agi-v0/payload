'use client'

import React from 'react'
import { Link } from '@/i18n/routing'
// import { getTranslations } from 'next-intl/server' // Cannot use in client components without passing down props
import { ArrowDown, ArrowUp, ArrowRight } from 'lucide-react'
import { motion, useAnimation, useInView, Variants } from 'motion/react'

import { CaseStudy, Testimonial } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import { LinkBlock } from '@/components/LinkBlock'
import { containerVariants, itemVariants, itemsFling } from '@/utilities/motion'
import { Stat } from '../stat'

interface Props {
  testimonials: Testimonial[]
  linkLabel: string
}

export const TestimonialsBlock02: React.FC<Props> = ({ testimonials, linkLabel }) => {
  const testimonial = testimonials?.[0]
  if (!testimonial) {
    return null
  }

  const { authorInfo, quote, featuredImage, companyLogo, caseStudy } = testimonial
  const { stats, slug } = caseStudy?.linkCaseStudy ? (caseStudy.linkedCaseStudy as CaseStudy) : {}

  return (
    <section className="bg-background-neutral-subtle py-lg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="py-lg container"
      >
        <motion.div
          variants={itemVariants} // Animate the main card as one item
          className="bg-background-neutral rounded-space-sm grid grid-cols-1 md:grid-cols-2 lg:items-stretch"
        >
          <div className="gap-md p-md pb-xs md:pb-md flex flex-col justify-start">
            <div className="gap-md flex flex-grow flex-col justify-start">
              {companyLogo && (
                <Media resource={companyLogo} imgClassName="h-8 w-auto opacity-50 dark:invert" />
              )}
              {quote && (
                <RichText
                  data={quote}
                  enableProse={false}
                  className="text-base-primary text-(length:--text-h3) font-medium"
                />
              )}
            </div>
            {authorInfo && (
              <div className="gap-xs flex flex-row items-center">
                {authorInfo.avatar && (
                  <Media
                    resource={authorInfo.avatar}
                    fill
                    className="relative h-12 w-12 overflow-hidden rounded-full"
                    imgClassName="object-cover"
                  />
                )}
                <div>
                  <p className="text-base-primary text-body-sm font-medium">{authorInfo.name}</p>
                  <p className="text-body-sm text-base-secondary">{authorInfo.title}</p>
                </div>
              </div>
            )}
          </div>
          {featuredImage && ( // Updated to featuredImage
            <motion.div variants={itemVariants} className="p-xs flex items-center justify-center">
              <Media
                resource={featuredImage} // Updated to featuredImage
                fill
                className="rounded-space-sm relative aspect-[4/3] h-auto w-full overflow-hidden"
                imgClassName="object-cover"
              />
            </motion.div>
          )}
        </motion.div>
        {stats && stats.length > 0 && (
          <div className="mt-space-xs gap-xs grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.id || index} variants={itemsFling}>
                {<Stat stat={stat} index={index} />}
              </motion.div>
            ))}
            {linkLabel && (
              <motion.div
                variants={itemsFling}
                className={cn('h-full w-full overflow-hidden', {
                  'col-span-2': stats.length < 3,
                })}
              >
                <LinkBlock
                  link={{
                    type: 'custom',
                    newTab: null,
                    url: 'google.com',
                    label: linkLabel,
                    color: 'neutral',
                    variant: 'primary',
                  }}
                  label={linkLabel}
                  className="h-full w-full"
                />
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </section>
  )
}
