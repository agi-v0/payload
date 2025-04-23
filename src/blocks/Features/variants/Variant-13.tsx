import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Variant13: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-semibold">
        Simple Text with Icon (Cards) - Variant 13
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {columns.map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div
              key={`icon-card-${index}`}
              className="border-border flex items-start gap-4 rounded-lg border p-6"
            >
              {IconComponent && (
                <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                  <IconComponent className="text-primary h-6 w-6" />
                </div>
              )}
              <div>
                <h3 className="text-lg font-medium">{column.title}</h3>
                {column.content && (
                  <div className="text-muted-foreground mt-2 text-sm">
                    {/* Render rich text content */}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
