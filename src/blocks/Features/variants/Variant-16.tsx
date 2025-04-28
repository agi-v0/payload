import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { Card, CardContent } from '@/components/ui/card'
import { CMSLink } from '@/components/Link'

export const Variant16: React.FC<FeaturesBlock> = ({ columns, link, CTALabel }) => {
  if (!columns?.length) return null
  const limitedColumns = columns.slice(0, 4)
  return (
    <div className="py-xl container grid grid-cols-1 grid-rows-3 gap-6 md:my-12 md:grid-cols-2 md:gap-4">
      {limitedColumns.map((column, index) => {
        return (
          <Card key={index} className="overflow-hidden rounded-none border-0 bg-transparent">
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
                <div className="p-sm">
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
      <CMSLink
        variant={'primary'}
        color={'brand'}
        className="rounded-space-sm col-span-2 flex h-full flex-col items-start justify-between px-0 py-4 whitespace-normal text-white md:p-8"
        {...link}
        label={null}
      >
        <h4 className="text-h4 mx-6 font-medium md:mx-0">{CTALabel}</h4>
        <p className="text-body-lg hidden self-end md:block">{link.label}</p>
      </CMSLink>
    </div>
  )
}
