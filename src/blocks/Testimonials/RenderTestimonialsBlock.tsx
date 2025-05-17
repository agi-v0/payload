import React, { Fragment, lazy } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Page, TestimonialsBlock as TestimonialsBlockType, Testimonial } from '@/payload-types'
import { TestimonialsBlock02 } from './variants/TestimonialsBlock02'
import { TestimonialsBlock03 } from './variants/TestimonialsBlock03'
import { TestimonialsModularGrid } from './variants/TestimonialsModularGrid'

// Map block types to components
const blockComponents = {
  '01': TestimonialsModularGrid,
  '02': TestimonialsBlock02,
  '03': TestimonialsBlock03,
}

export const RenderTestimonialsBlock: React.FC<TestimonialsBlockType> = async (props) => {
  const { type, selectedTestimonials } = props
  const locale = await getLocale()
  const t = await getTranslations('TestimonialsBlock')
  const payload = await getPayload({ config })

  let testimonialsToRender: Testimonial[] = []

  const { docs } = await payload.find({
    collection: 'testimonials',
    limit: 5, // Adjust limit as needed
    sort: '-updatedAt',
    locale: locale as 'en' | 'ar',
    fallbackLocale: 'ar',
    depth: 1, // Adjust depth if needed
    where: {
      id: {
        in: selectedTestimonials?.map((t) => t.value as Number),
      },
    },
  })
  testimonialsToRender = docs as Testimonial[]
  const BlockComponent = blockComponents[type]

  if (!BlockComponent) {
    console.warn(`TestimonialsBlock: Variant "${type}" not found.`)
    return null
  }

  return (
    <Fragment>
      <BlockComponent testimonials={testimonialsToRender} linkLabel={t('readMore')} />
    </Fragment>
  )
}
