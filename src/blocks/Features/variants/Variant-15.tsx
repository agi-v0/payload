import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { Card, CardContent } from '@/components/ui/card'
import { CMSLink } from '@/components/Link'

export const Variant15: React.FC<FeaturesBlock> = ({ columns, link, CTALabel }) => {
  if (!columns?.length) return null
  const limitedColumns = columns.slice(0, 3)
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:my-12 md:grid-cols-2 md:gap-4">
      {limitedColumns.map((column, index) => {
        return (
          <Card
            key={index}
            className="rounded-space-sm overflow-hidden border-0 bg-transparent md:bg-white"
          >
            <CardContent className="grid grid-cols-2 items-start p-0 md:items-center">
              {column.image && (
                <div className="h-auto w-full">
                  <Media
                    resource={column.image}
                    className="h-auto w-full"
                    imgClassName="w-full h-auto aspect-square object-cover rounded-2xl md:rounded-none"
                  />
                </div>
              )}
              {column.content && (
                <div className="p-space-sm">
                  <h3 className="text-body-lg text-base-primary mb-2 font-medium">
                    {column.content?.title}
                  </h3>
                  <p className="text-body-sm text-base-secondary">{column.content?.copy}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )
      })}
      {/* TODO: MAKE IT THE SAME HEIGHT AS THE IMAGES */}
      <CMSLink
        variant={'primary'}
        color={'brand'}
        className="rounded-space-md flex h-full flex-col items-start justify-between px-0 py-4 whitespace-normal text-white md:p-8"
        {...link}
        label={null}
      >
        <h4 className="text-h4 mx-6 font-medium md:mx-0">{CTALabel}</h4>
        <p className="text-body-lg hidden self-end md:block">{link.label}</p>
      </CMSLink>
    </div>
  )
}
