import React from 'react'
import type { Block, Field } from 'payload'

import { blockHeader } from '@/components/BlockHeader/config'

const imageEntry: Field[] = [
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    required: true,
    admin: {
      description: 'Select or upload an image for the gallery.',
    },
    localized: true,
  },
  {
    name: 'panel',
    label: false,
    type: 'group',
    fields: [
      {
        name: 'title',
        type: 'text',
        localized: true,
      },
      {
        name: 'description',
        type: 'textarea',
        localized: true,
      },
    ],
    admin: {
      description: 'Title and description for the transition panel.',
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
      { value: 'gallery03', label: 'Gallery 03 (Infinite Slider)' },
      { value: 'gallery04', label: 'Gallery 04 (Interactive)' },
    ],
    required: true,
    defaultValue: 'gallery01',
    admin: {
      description: 'Select the layout for the gallery.',
    },
  },
  {
    name: 'images',
    type: 'upload',
    relationTo: 'media',
    hasMany: true,
    admin: {
      description: 'Select or upload images for the gallery.',
      condition: (data, siblingData, { blockData }) => blockData?.type !== 'gallery04',
    },
    localized: true,
  },
  {
    name: 'interactiveGallery',
    label: 'Gallery Images',
    type: 'array',
    minRows: 1,
    fields: imageEntry,
    admin: {
      condition: (data, siblingData, { blockData }) => blockData?.type === 'gallery04',
    },
  },
]

export const GalleryBlock: Block = {
  slug: 'gallery',
  interfaceName: 'GalleryBlock',
  dbName: 'galleryBlock',
  fields: [blockHeader, ...fields],
}
