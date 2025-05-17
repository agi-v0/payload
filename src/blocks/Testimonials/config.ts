import type { Block, Field } from 'payload'

import { blockHeader } from '@/components/BlockHeader/config'

const fields: Field[] = [
  {
    name: 'type',
    type: 'select',
    options: [
      { value: '01', label: 'Testimonials Modular Grid (Hero)' },
      { value: '02', label: 'Testimonials Block 01 (Featured)' },
      { value: '03', label: 'Testimonials Block 02 (Carousel)' },
      // Add other layout options here later (e.g., Slider)
    ],
    required: true,
    defaultValue: 'TestimonialsBlock01',
  },
  {
    name: 'selectedTestimonials',
    type: 'relationship',
    label: 'Select Testimonials',
    relationTo: ['testimonials'], // Assuming 'testimonials' is the slug of your Testimonials collection
    hasMany: true,
    admin: {
      description:
        'Select specific testimonials to display. Leave blank to show the 5 most recently updated testimonials.',
    },
    defaultValue: async ({ user, locale, req }) => {
      const { docs } = await req.payload.find({
        collection: 'testimonials',
        limit: 10,
        sort: 'updatedAt',
      })

      return docs.map((testimonial) => ({ relationTo: 'testimonials', value: testimonial.id }))
    },
  },
]

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [blockHeader, ...fields],
  dbName: 'testimonialsBlock',
}
