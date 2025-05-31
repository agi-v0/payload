'use client'

import React from 'react'
import { usePricing } from '@/providers/Pricing'
import { cn } from '@/utilities/ui'
import { Tabs, TabsList, TabsTrigger } from '@/components/motion-ui/tabs'
import { itemsFling } from '@/utilities/motion'

export const PricingToggle = ({ className }: { className?: string }) => {
  const { isMonthly, setIsMonthly } = usePricing()

  const handleValueChange = (value: string) => {
    setIsMonthly(value === 'monthly')
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Tabs
        value={isMonthly ? 'monthly' : 'annual'}
        onValueChange={handleValueChange}
        className="w-full"
      >
        <TabsList
          className="w-full"
          transition={{
            type: 'spring',
            stiffness: 800,
            damping: 100,
            mass: 4,
          }}
        >
          <TabsTrigger value="annual">Annual</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
