import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const Variant04: React.FC<FeaturesBlock> = ({ columns }) => {
  // TODO: ASK OMAR FOR This Structure

  return (
    <div></div>
    // <div className="flex flex-col items-center gap-12 py-8 md:flex-row">
    //   {/* Content Side */}
    //   <div className="flex w-full flex-col gap-6 md:w-1/2">
    //     {showBadge && column.showBadge && column.badgeConfig?.badge?.label && (
    //       <Badge
    //         className={`inline-flex items-center ${
    //           column.badgeConfig.badge.icon_position || 'flex-row'
    //         } gap-1.5`}
    //       >
    //         {column.badgeConfig.badge.icon && (
    //           <span className="text-base">{column.badgeConfig.badge.icon}</span>
    //         )}
    //         {column.badgeConfig.badge.label}
    //       </Badge>
    //     )}

    //     <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{column.title}</h2>

    //     {column.content && (
    //       <div className="rich-text text-muted-foreground text-lg">
    //         {/* Render rich text content */}
    //       </div>
    //     )}

    //     {column.showFeatureList && column.features && column.features.length > 0 && (
    //       <ul className="mt-2 space-y-4">
    //         {column.features.map((feature, idx) => {
    //           const FeatureIcon = feature.icon
    //             ? (LucideIcons[feature.icon as keyof typeof LucideIcons] as LucideIcon)
    //             : LucideIcons.CheckCircle

    //           return (
    //             <li key={`feature-item-${idx}`} className="flex items-center gap-3">
    //               <FeatureIcon className="text-primary h-5 w-5" />
    //               <div className="text-base">{/* Render feature content */}</div>
    //             </li>
    //           )
    //         })}
    //       </ul>
    //     )}

    //     {column.enableCta && column.link?.label && (
    //       <div className="mt-4">
    //         <Button size="lg" variant={(column.link.variant as any) || 'default'}>
    //           {column.link.label}
    //         </Button>
    //       </div>
    //     )}
    //   </div>

    //   {/* Image Side */}
    //   {column.image && (
    //     <div className="w-full md:w-1/2">
    //       <div className="overflow-hidden rounded-2xl shadow-lg">
    //         <Image
    //           src={
    //             typeof column.image === 'object' && column.image.url
    //               ? column.image.url
    //               : '/placeholder.jpg'
    //           }
    //           alt={column.title}
    //           width={800}
    //           height={600}
    //           className="h-auto w-full object-cover"
    //         />
    //       </div>
    //     </div>
    //   )}
    // </div>
  )
}
