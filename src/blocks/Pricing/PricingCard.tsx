'use client'

import React, { useState } from 'react'
import { cn } from '@/utilities/ui'
import type {
  PricingBlock,
  Media as MediaType,
  Integration,
  Solution,
  Post,
  Page,
} from '@/payload-types'
import { Media } from '@/components/Media'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, CircleCheck, X } from 'lucide-react'
import { CMSLink } from '@/components/Link'
import { SaudiRiyal } from '@/icons/saudi-riyal'
import { usePricing } from '@/providers/Pricing'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/motion-ui/tooltip'
import { useTheme } from '@/providers/Theme'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'

interface PricingCardProps {
  type?: ('basic' | 'featured') | null
  badge?: {
    type?: ('label' | 'reference') | null
    label?: string | null
    color?: ('blue' | 'red' | 'green' | 'yellow' | 'gray' | 'inverted') | null
    reference?:
      | ({
          relationTo: 'solutions'
          value: string | Solution
        } | null)
      | ({
          relationTo: 'integrations'
          value: string | Integration
        } | null)
    /**
     * Select an icon from the Lucide icon set. You can preview all available icons at https://lucide.dev/icons/
     */
    icon?: string | null
    icon_position?: ('flex-row' | 'flex-row-reverse') | null
  }
  title?: string | null
  subtitle?: string | null
  icon?: (string | null) | MediaType
  price?: {
    annually?: string | null
    monthly?: string | null
  }
  link?: {
    type?: ('reference' | 'custom') | null
    newTab?: boolean | null
    reference?:
      | ({
          relationTo: 'pages'
          value: string | Page
        } | null)
      | ({
          relationTo: 'posts'
          value: string | Post
        } | null)
      | ({
          relationTo: 'solutions'
          value: string | Solution
        } | null)
    url?: string | null
    label: string
    /**
     * Choose the button style.
     */
    color?: ('brand' | 'neutral') | null
    /**
     * Choose how the link should be rendered.
     */
    variant?: ('primary' | 'secondary' | 'tertiary' | 'ghost' | 'link') | null
  }
  features?:
    | {
        enabled?: boolean | null
        feature?: string | null
        id?: string | null
      }[]
    | null
  featuredSolutions?: (string | Solution)[] | null
  featuredIntegrations?: (string | Integration)[] | null
  id?: string | null

  translations: {
    monthly: string
    annually: string
    includedSolutions: string
    integrations: string
    features: string
  }
}

const parentVariants = {
  collapsed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
  expanded: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  collapsed: { opacity: 1, x: 0 },
  expanded: { opacity: 1, x: 0 },
}

export const PricingCard: React.FC<PricingCardProps> = (props) => {
  const {
    type,
    badge,
    title,
    subtitle,
    icon,
    price,
    link,
    features,
    featuredSolutions,
    featuredIntegrations,
    translations,
  } = props
  const { isMonthly } = usePricing()
  const { theme } = useTheme()
  const breakpoint = useBreakpoint()

  const [isExpanded, setIsExpanded] = useState(false)
  const iconMedia = icon as MediaType | undefined
  console.log(theme)
  return (
    <div
      data-theme={
        type === 'featured'
          ? theme === 'dark'
            ? 'light'
            : 'dark'
          : theme === 'dark'
            ? 'dark'
            : 'light'
      }
      className={cn(
        'bg-background-neutral rounded-space-sm relative space-y-4',
        type === 'featured' && 'bg-background-neutral p-card-xl',
        type === 'basic' && 'bg-background-neutral-subtle p-card-xl',
        type === null && 'p-space-md',
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="relative flex flex-row gap-4">
          {badge?.label && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <Badge {...badge} className="px-space-sm py-space-xs" />
            </div>
          )}

          {iconMedia && <Media resource={iconMedia} imgClassName="size-space-3xl object-contain" />}

          <div className="text-start">
            {title && (
              <h3
                className={cn(
                  'text-base-primary text-(length:--text-h3) font-medium',
                  type === null && 'text-(length:--text-h4)',
                )}
              >
                {title}
              </h3>
            )}
            {subtitle && <p className="text-base-tertiary text-body-sm">{subtitle}</p>}
          </div>
        </div>

        {price && (
          <p
            className={cn(
              'text-base-primary text-start text-(length:--text-h2) font-medium',
              type === null && 'text-(length:--text-h4)',
            )}
          >
            {isMonthly ? price.monthly : price.annually}{' '}
            <SaudiRiyal className={cn('inline-block size-6', type === null && 'size-5')} />{' '}
            <span className="text-base-tertiary text-body-sm font-normal">
              /{isMonthly ? translations.monthly : translations.annually}
            </span>
          </p>
        )}
      </div>

      {link && (
        <CMSLink
          {...link}
          className="w-full"
          size="lg"
          variant={type === 'featured' ? 'primary' : 'secondary'}
        />
      )}
      <hr className="border-input" />

      {/* Featured Solutions */}
      {featuredSolutions && featuredSolutions.length > 0 && (
        <motion.button
          layout
          style={{ borderRadius: 12 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="hover:bg-neutral/5 mb-0 w-full space-y-4 rounded-xl px-4 py-3 pt-2 transition-colors duration-200 max-md:px-0"
        >
          <motion.div layout className="flex w-full flex-row items-center justify-between">
            <p className="text-body-sm text-base-tertiary font-normal">
              {translations.includedSolutions}
            </p>
            <ChevronDown
              data-state={isExpanded ? 'expanded' : 'collapsed'}
              className="text-base-tertiary size-5 transition-transform duration-200 data-[state=expanded]:rotate-180"
            />
          </motion.div>
          <LayoutGroup>
            <motion.ul
              className={cn(
                'flex w-full items-start justify-start gap-1',
                isExpanded ? 'flex-col flex-nowrap gap-2' : 'flex-row flex-wrap',
              )}
              initial={false}
              animate={isExpanded ? 'expanded' : 'collapsed'}
              variants={parentVariants}
            >
              {featuredSolutions.map((solution, idx) => {
                const { name, icon, tagline } = (solution as Solution) ?? {}
                const solutionItem = (
                  <motion.li
                    key={`solution-${type}-${name}`}
                    className="flex flex-row items-center gap-4"
                    layout="position"
                  >
                    <motion.div
                      layout="position"
                      layoutId={`solution-icon-${type}-${name}`}
                      className="flex-shrink-0"
                    >
                      <Media
                        resource={icon as MediaType}
                        imgClassName={cn('size-12 object-contain', isExpanded && 'size-12')}
                      />
                    </motion.div>
                    <AnimatePresence mode="popLayout">
                      {isExpanded && (
                        <motion.div
                          // key={`solution-text-${type}-${isExpanded}-${name}`}
                          initial={{ opacity: 0, x: 16 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: { ease: [0, 0, 0.2, 1], delay: idx * 0.1 },
                          }}
                          exit={{
                            opacity: 0,
                            x: 16,
                            transition: { ease: [0, 0, 0.2, 1], duration: 0.2 },
                          }}
                          className="flex flex-col items-start justify-start text-start"
                        >
                          <p className="text-base-secondary text-base font-medium">{name}</p>
                          <p className="text-base-tertiary text-sm">{tagline}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                )

                if (!isExpanded) {
                  return (
                    <Tooltip key={`tooltip-${type}-${idx}`}>
                      <TooltipTrigger asChild>{solutionItem}</TooltipTrigger>
                      <TooltipContent
                        transition={{
                          ease: [0.68, -0.23, 0.35, 0.95],
                        }}
                      >
                        <div className="text-center">
                          <p className="text-base-secondary text-sm font-medium">{name}</p>
                          <p className="text-base-tertiary text-sm">{tagline}</p>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  )
                }

                return solutionItem
              })}
            </motion.ul>
          </LayoutGroup>
        </motion.button>
      )}

      {/* Featured Integrations */}
      {featuredIntegrations && featuredIntegrations.length > 0 && (
        <div className="">
          <p className="text-body-sm mb-space-xs text-base-tertiary font-normal">
            {translations.integrations}
          </p>
          <div className="flex flex-wrap gap-1">
            {featuredIntegrations.map((integration, idx) => {
              const integrationTitle =
                typeof integration === 'object' && integration.title ? integration.title : ''
              const integrationIcon =
                typeof integration === 'object' && integration.icon ? integration.icon : ''

              return (
                <Media key={idx} resource={integrationIcon} imgClassName="size-12 object-contain" />
              )
            })}
          </div>
        </div>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <div className="space-y-space-xs pt-4">
          {/* <p className="text-body-sm mb-space-xs text-base-tertiary font-normal">
            {translations.features}
          </p> */}
          <ul className="space-y-2.5">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center justify-start gap-2">
                {feature.enabled ? (
                  <CircleCheck className="text-base-secondary size-5 flex-shrink-0" />
                ) : (
                  <X className="text-base-tertiary size-5 flex-shrink-0" />
                )}
                <span
                  className={cn(
                    'text-caption',
                    feature.enabled ? 'text-base-secondary' : 'text-base-tertiary',
                  )}
                >
                  {feature.feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
