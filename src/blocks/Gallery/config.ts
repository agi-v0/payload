import React from 'react'
import type { Block, Field } from 'payload'

import { blockHeader } from '@/blocks/BlockHeader/config'

const imageEntry: Field[] = [
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
    admin: {
      description: 'Select an image for the gallery.',
    },
  },
  {
    name: 'panel',
    label: false,
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
      },
      {
        name: 'description',
        type: 'textarea',
      },
    ],
    admin: {
      description: 'Title and description for the transition panel.',
      condition: (data, siblingData, { blockData }) => blockData?.type === 'gallery03',
    },
  },
]

const fields: Field[] = [
  {
    name: 'type',
    type: 'select',
    options: [
      { value: 'gallery01', label: 'Gallery 01 (Card)' },
      { value: 'gallery02', label: 'Gallery 02 (Full-width)' },
      { value: 'gallery03', label: 'Gallery 03 (Transition Panel)' },
    ],
    required: true,
    defaultValue: 'gallery01',
    admin: {
      description: 'Select the layout for the gallery.',
    },
  },
  {
    name: 'images',
    label: 'Gallery Images',
    type: 'array',
    minRows: 1,
    fields: imageEntry,
  },
]

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  fields: [blockHeader, ...fields],
}
