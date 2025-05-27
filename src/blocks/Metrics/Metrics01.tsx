'use client'
import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import type { MetricsBlock as MetricsBlockProps } from '@/payload-types'

import { cn } from '@/utilities/ui'

export const Metrics01: React.FC<MetricsBlockProps> = ({ stats, enableLogos, logos }) => {
  const renderIndicator = (indicator?: 'increase' | 'decrease' | 'noChange' | null) => {
    switch (indicator) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-green-500" />
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="py-xl container">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats?.map((stat, index) => (
          <div
            key={stat.id || index}
            className="border-border bg-card rounded-lg border p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
              {renderIndicator(stat.indicator)}
            </div>
          </div>
        ))}
      </div>

      {enableLogos && logos && logos.length > 0 && (
        <div className="mt-xl">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, index) => {
              if (typeof logo === 'string') return null
              return (
                <div key={logo.id || index} className="h-8">
                  <img
                    src={logo.url || ''}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
