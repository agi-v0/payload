import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { console } from 'inspector'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'hero01',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
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
      name: 'logos',
      type: 'group',
      label: 'Logos',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'title',
          localized: true,
        },
        {
          name: 'logos-images',
          type: 'array',
          label: 'logos images',
          maxRows: 6,
          fields: [
            {
              name: 'logo',
              type: 'relationship',
              label: 'Logo',
              relationTo: 'media',
              filterOptions: () => {
                return {
                  'Category.slug': { equals: 'logo' },
                }
              },
            },
          ],
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      localized: true,
      relationTo: 'media',
      required: false,
      label: 'hero image',
    },
  ],
  label: false,
}
