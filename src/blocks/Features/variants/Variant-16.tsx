import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Variant16: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <div className="space-y-10">
      <h2 className="text-center text-3xl font-bold">4 Image with Text, Big CTA - Variant 16</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {columns.slice(0, 4).map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div key={`feature-image-${index}`} className="flex flex-col gap-4">
              {column.image && (
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={
                      typeof column.image === 'object' && column.image.url
                        ? column.image.url
                        : '/placeholder.jpg'
                    }
                    alt={column.title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                {IconComponent && <IconComponent className="text-primary h-6 w-6" />}
                <h3 className="text-lg font-semibold">{column.title}</h3>
                {column.content && (
                  <div className="text-muted-foreground text-sm">
                    {/* Render rich text content */}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mx-auto max-w-md text-center">
        <Button size="lg" className="w-full">
          Call to Action
        </Button>
        <p className="text-muted-foreground mt-2 text-sm">
          No credit card required. Start your free trial today.
        </p>
      </div>
    </div>
  )
}
