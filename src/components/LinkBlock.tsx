'use client'
import React from 'react'
import { motion } from 'motion/react' // Corrected import path
import { cn } from '@/utilities/ui'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { CMSLink, CMSLinkType } from './Link'
import { CaretLeft } from '@/icons/caret-left-filled'

const linkBlockVariants = {
  initial: {
    borderRadius: 'var(--radius-space-sm)',
  },
  hover: {
    borderRadius: '999px',
    transition: {
      ease: [0.645, 0.045, 0.355, 1],
    },
  },
}

interface LinkBlockProps {
  link: CMSLinkType
  label?: string
  CTALabel?: string
  className?: string
}

export const LinkBlock: React.FC<LinkBlockProps> = ({ link, label, CTALabel, className }) => {
  return (
    <motion.div
      variants={linkBlockVariants}
      initial="initial"
      whileHover="hover"
      layout
      style={{
        borderRadius: 'var(--radius-space-sm)',
      }}
      className={cn('h-auto w-full overflow-hidden', className)}
    >
      <CMSLink
        {...link}
        label={null}
        variant="inline"
        className={cn(
          'text-h4 group p-sm bg-neutral hover:bg-neutral/90 text-inverted-primary ease-in-out-quad relative flex h-full items-center justify-center rounded-none text-center font-medium transition-all duration-300 hover:no-underline',
        )}
      >
        <span className="text-h4 ease-in-out-cubic transition-all duration-300 group-hover:-translate-x-full group-hover:opacity-0">
          {label}
        </span>

        <span className="ease-in-out-cubic absolute inset-0 flex translate-x-1/2 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          {/* <ArrowRight className="size-xl text-inverted-primary rtl:rotate-180" /> */}
          <CaretLeft className="size-xl text-inverted-primary ltr:rotate-180" />
        </span>
      </CMSLink>
    </motion.div>
  )
}
