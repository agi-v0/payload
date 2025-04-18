import type { Block, Field } from 'payload'

import { blockHeader } from '@/blocks/BlockHeader/config'

const fields: Field[] = [
  {
    name: 'type',
    type: 'select',
    options: [
      { value: 'TestimonialsBlock01', label: 'TestimonialsBlock01' },
      { value: 'TestimonialsBlock02', label: 'TestimonialsBlock02' },
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
  },
]

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  fields: [blockHeader, ...fields],
}
