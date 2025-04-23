import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Variant12: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  // Simple Text with Icon variant
  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-semibold">Simple Text with Icon (Variant 12)</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {columns.map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div key={`simple-text-${index}`} className="flex items-start gap-3">
              {IconComponent && (
                <div className="bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                  <IconComponent className="text-primary h-5 w-5" />
                </div>
              )}
              <div>
                <h3 className="text-base font-medium">{column.title}</h3>
                {column.content && (
                  <div className="text-muted-foreground mt-1 text-sm">
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
