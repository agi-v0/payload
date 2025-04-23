import React from 'react'
import { VariantProps } from './VariantTypes'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const Variant15: React.FC<VariantProps> = ({ columns, showBadge, badgeConfig }) => {
  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">3 Image with Text, Big CTA (2) - Variant 15</h2>
        <p className="text-muted-foreground mt-4">
          Alternative layout with central heading and description
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {columns.slice(0, 3).map((column, index) => {
          const IconComponent = column.icon
            ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
            : null

          return (
            <div key={`feature-image-${index}`} className="group flex flex-col gap-4">
              {column.image && (
                <div className="aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={
                      typeof column.image === 'object' && column.image.url
                        ? column.image.url
                        : '/placeholder.jpg'
                    }
                    alt={column.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                {IconComponent && <IconComponent className="text-primary h-6 w-6" />}
                <h3 className="text-xl font-semibold">{column.title}</h3>
                {column.content && (
                  <div className="text-muted-foreground">{/* Render rich text content */}</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center pt-6">
        <Button size="lg" className="px-8 py-6 text-lg">
          Get Started
          <LucideIcons.ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
