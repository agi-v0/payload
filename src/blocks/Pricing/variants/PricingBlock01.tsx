'use client'

import React from 'react'
import type { PricingBlock } from '@/payload-types'
import { BlockHeader } from '@/components/BlockHeader'
import { PricingCard } from '../PricingCard'
import { PricingToggle } from '@/components/PricingToggle'
import { TooltipProvider } from '@/components/motion-ui/tooltip'

interface PricingBlock01Props {
  pricingCards: NonNullable<PricingBlock['pricingCards']>
  locale: string
  translations: {
    monthly: string
    annually: string
    includedSolutions: string
    integrations: string
    features: string
  }
}

export const PricingBlock01: React.FC<PricingBlock01Props> = ({
  pricingCards,
  locale,
  translations,
}) => {
  return (
    <section className="-mt-[calc(var(--spacing-space-xl)*2)]">
      <div className="container max-w-screen-xl">
        {/* Pricing Cards Grid */}
        <TooltipProvider delayDuration={0}>
          <div className="grid items-start gap-4 md:grid-cols-2">
            {pricingCards.map((card, index) => (
              <PricingCard key={index} {...card} translations={translations} />
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
