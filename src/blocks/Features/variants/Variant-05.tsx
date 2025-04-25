import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Variant05: React.FC<FeaturesBlock> = ({ columns }) => {
  return (
    <div></div>
    // <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    //   {columns.slice(0, 2).map((column, index) => {
    //     const IconComponent = column.icon
    //       ? (LucideIcons[column.icon as keyof typeof LucideIcons] as LucideIcon)
    //       : null

    //     return (
    //       <div key={`feature-col-${index}`} className="flex flex-col gap-6">
    //         {column.image && (
    //           <div className="aspect-video overflow-hidden rounded-lg">
    //             <Image
    //               src={
    //                 typeof column.image === 'object' && column.image.url
    //                   ? column.image.url
    //                   : '/placeholder.jpg'
    //               }
    //               alt={column.title}
    //               width={600}
    //               height={350}
    //               className="h-full w-full object-cover"
    //             />
    //           </div>
    //         )}

    //         <div className="flex flex-col gap-4">
    //           {IconComponent && (
    //             <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
    //               <IconComponent className="text-primary h-6 w-6" />
    //             </div>
    //           )}

    //           <h3 className="text-2xl font-semibold">{column.title}</h3>

    //           {column.content && (
    //             <div className="rich-text text-muted-foreground">
    //               {/* Render rich text content */}
    //             </div>
    //           )}

    //           {column.enableCta && column.link?.label && (
    //             <Button
    //               variant={(column.link.variant as any) || 'default'}
    //               className="mt-2 self-start"
    //             >
    //               {column.link.label}
    //             </Button>
    //           )}
    //         </div>
    //       </div>
    //     )
    //   })}
    // </div>
  )
}
