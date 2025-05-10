import React, { Fragment, lazy } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'
import { getPayload } from 'payload'
import config from '@payload-config'

import type { Page, TestimonialsBlock as TestimonialsBlockType, Testimonial } from '@/payload-types'
import { TestimonialsBlock01 } from './TestimonialsBlock01'
import { TestimonialsBlock02 } from './TestimonialsBlock02'
import { TestimonialsModularGrid } from './TestimonialsModularGrid'

// Map block types to components
const blockComponents = {
  TestimonialsBlock01: TestimonialsBlock01,
  TestimonialsBlock02: TestimonialsBlock02,
  testimonialsModularGrid: TestimonialsModularGrid,
}

export const RenderTestimonialsBlock: React.FC<TestimonialsBlockType> = async (props) => {
  const { type, selectedTestimonials } = props
  const locale = await getLocale()
  const t = await getTranslations('TestimonialsBlock')

  const payload = await getPayload({ config })
  let testimonialsToRender: Testimonial[] = []
  try {
    if (selectedTestimonials && selectedTestimonials.length > 0) {
      testimonialsToRender = selectedTestimonials
        .map((t) => (typeof t === 'object' && t !== null ? t.value : t))
        .filter(Boolean) as Testimonial[] // Assuming IDs are strings
    } else {
      // Fetch recent testimonials if none selected
      const { docs } = await payload.find({
        collection: 'testimonials',
        limit: 5, // Adjust limit as needed
        sort: '-updatedAt',
        locale: locale as 'en' | 'ar',
        fallbackLocale: 'ar',
        depth: 1, // Adjust depth if needed
      })
      testimonialsToRender = docs as Testimonial[]
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    // Optionally render an error message or return null
    return null
  }

  if (!testimonialsToRender || testimonialsToRender.length === 0) {
    return null
  }

  const BlockComponent = blockComponents[type]

  if (!BlockComponent) {
    console.warn(`TestimonialsBlock: Variant "${type}" not found.`)
    return null
  }

  return (
    <Fragment>
      {/* 
        React Server Components currently don't directly support Suspense for lazy loading.
        We might need a Client Component wrapper if suspense/loading states are critical here.
        For now, we'll render directly, assuming the component loads quickly enough server-side.
      */}
      <BlockComponent testimonials={testimonialsToRender} linkLabel={t('readMore')} />
    </Fragment>
  )
}
