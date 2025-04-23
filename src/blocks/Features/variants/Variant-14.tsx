import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Variant14: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-center text-2xl font-semibold">
        3 Image with Text, Big CTA (Variant 14)
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {columns.slice(0, 3).map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div key={`feature-image-${index}`} className="flex flex-col gap-4">
              {column.image && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={
                      typeof column.image === 'object' && column.image.url
                        ? column.image.url
                        : '/placeholder.jpg'
                    }
                    alt={column.title}
                    width={400}
                    height={225}
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

      <div className="flex justify-center pt-8">
        <Button size="lg" variant="default">
          Call to Action
        </Button>
      </div>
    </div>
  )
}
