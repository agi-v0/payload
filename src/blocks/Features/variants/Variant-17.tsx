import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Variant17: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <div className="space-y-10">
      <h2 className="text-center text-3xl font-bold">4 Image with Text, Small CTA - Variant 17</h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {columns.slice(0, 4).map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div
              key={`feature-image-${index}`}
              className="border-border flex flex-col gap-4 rounded-lg border p-6"
            >
              {column.image && (
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={
                      typeof column.image === 'object' && column.image.url
                        ? column.image.url
                        : '/placeholder.jpg'
                    }
                    alt={column.title}
                    width={300}
                    height={200}
                    className="h-auto w-full object-cover"
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

                {column.enableCta && column.link?.label && (
                  <Button variant="link" className="mt-2 self-start p-0">
                    {column.link.label}
                    <LucideIcons.ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
