import type { CustomComponent } from 'payload'
import React from 'react'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const categories = [
  {
    name: 'Hero Images',
    description:
      'Large banner-style visuals used at the top of pages (homepage, product landing, etc.).',
  },
  {
    name: 'Feature Images',
    description: 'Supporting visuals for product features, benefit sections, etc.',
  },
  {
    name: 'Blog Images',
    description: 'Thumbnails, headers, or inline visuals for blog posts.',
  },
  {
    name: 'OG Images',
    description: 'Open Graph images for social sharing previews (usually auto-picked per page).',
  },
  {
    name: 'Customer Logos',
    description: 'Logos of customers/clients used in trust or testimonial sections.',
  },
  {
    name: 'App Icons',
    description: 'Icons for 3rd-party services shown in integrations, partners, or use cases.',
  },
  {
    name: 'Team Photos',
    description: 'Profile images or portraits of team members for About or Leadership pages.',
  },
  {
    name: 'Background Textures',
    description: 'Subtle patterns, gradients, or decorative backgrounds used behind content.',
  },
]

const ImageCategoryGuide: React.FC = (props) => {
  return (
    <>
      <div className="field-description field-description-Category">
        Select the most appropriate category for the uploaded media. Refer to the guide below for
        default media categories and their typical usage.
      </div>
      <div style={{ marginTop: 'calc(var(--base)/4)' }}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[240px] text-[13px] font-medium">Category Name</TableHead>
              <TableHead className="text-[13px] font-medium">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.name}>
                <TableCell className="text-[13px] font-medium text-[var(--theme-elevation-400)]">
                  {category.name}
                </TableCell>
                <TableCell className="text-[13px] text-[var(--theme-elevation-400)]">
                  {category.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default ImageCategoryGuide
