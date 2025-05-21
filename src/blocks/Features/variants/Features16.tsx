import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { Card, CardContent } from '@/components/ui/card'
import { CMSLink } from '@/components/Link'
import { LinkBlock } from '@/components/LinkBlock'

export const Features16: React.FC<FeaturesBlock> = ({ columns, link, CTALabel }) => {
  if (!columns?.length) return null
  const limitedColumns = columns.slice(0, 4)
  return (
    <div className="py-xl container grid grid-cols-1 items-stretch gap-6 md:my-12 md:grid-cols-2 md:grid-rows-3 md:gap-4">
      {limitedColumns.map((column, index) => {
        return (
          <Card key={index} className="h-full overflow-hidden rounded-none border-0">
            <CardContent className="grid grid-cols-2 items-start p-0 md:items-center">
              {column.image && (
                <div className="h-auto w-full">
                  <Media
                    resource={column.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-square object-cover rounded-space-sm "
                  />
                </div>
              )}
              {column.content && (
                <div className="">
                  <h3 className="text-body-lg text-base-primary mb-2 font-medium">
                    {column.content?.title}
                  </h3>
                  <p className="text-body-sm text-base-secondary">{column.content?.subtitle}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
      {link?.label && (
        <LinkBlock
          link={link}
          className="md:col-span-2"
          label={link?.label}
          CTALabel={CTALabel || ''}
        />
      )}
    </div>
  )
}
