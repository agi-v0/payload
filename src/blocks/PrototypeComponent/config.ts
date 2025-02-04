import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Archive: Block = {
  slug: 'prototype',
  interfaceName: 'Prototype Component',
  fields: [
    {
      name: 'Heading',
      type: 'text',
    },
    {
      name: 'Content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'Content',
    },
    {
      name: 'Theme Control',
      type: 'select',
      localized: true,
      defaultValue: 'dark',
      options: [
        {
          label: 'Dark Theme',
          value: 'dark',
        },
        {
          label: 'Light Theme',
          value: 'light',
        },
      ],
    },
    {
      name: 'Flex Box Order',
      type: 'select',
      localized: true,
      defaultValue: 'order-none',
      options: [
        {
          label: 'No order',
          value: 'order-none',
        },
        {
          label: 'First Order',
          value: 'order-first',
        },
        {
          label: 'Last Order',
          value: 'order-last',
        },
      ],
    },

    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'relationTo',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      defaultValue: 'posts',
      label: 'Collections To Show',
      options: [
        {
          label: 'Posts',
          value: 'posts',
        },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      hasMany: true,
      label: 'Categories To Show',
      relationTo: 'categories',
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['posts'],
    },
  ],
  labels: {
    plural: 'Archives',
    singular: 'Archive',
  },
}
