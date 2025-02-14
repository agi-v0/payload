import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Hero 01',
          value: 'hero01',
        },
        {
          label: 'Hero 02',
          value: 'hero02',
        },
        {
          label: 'Hero 03',
          value: 'hero03',
        },
        {
          label: 'Hero 04',
          value: 'hero04',
        },
        {
          label: 'Hero 05',
          value: 'hero05',
        },
        {
          label: 'Hero 06',
          value: 'hero06',
        },
        {
          label: 'Hero 07',
          value: 'hero07',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'title',
      localized: true,
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: 'paragraph',
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'caption',
      type: 'text',
      label: 'caption',
      localized: true,
      required: false,
    },
    {
      name: 'logos',
      type: 'group',

      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'title',
          localized: true,
          required: true,
        },
        {
          name: 'logos-images',
          required: true,
          type: 'array',
          label: 'logos images',
          maxRows: 6,
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'logo',
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      localized: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: false,
      label: 'hero image',
    },
  ],
  label: false,
}
