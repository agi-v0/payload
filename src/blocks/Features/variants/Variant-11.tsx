import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Variant11: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  // Placeholder for Cards with Modals variant
  return (
    <div className="space-y-6">
      <h2 className="text-center text-2xl font-semibold">Cards with Modals (Variant 11)</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div
              key={`modal-card-${index}`}
              className="border-border flex flex-col gap-4 rounded-lg border p-6 shadow-sm"
            >
              {IconComponent && <IconComponent className="text-primary h-8 w-8" />}
              <h3 className="text-xl font-semibold">{column.title}</h3>
              {column.content && (
                <div className="text-muted-foreground text-sm">
                  {/* Render rich text content */}
                </div>
              )}
              <Button variant="outline" className="mt-auto">
                Learn More
                <LucideIcons.ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
