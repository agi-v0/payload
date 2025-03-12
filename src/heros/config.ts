import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { badge } from '@/fields/badge'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: false,
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'hero01',
      label: 'Type',
      options: [
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
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
      localized: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      type: 'collapsible',
      label: 'Logos',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'logosHeadline',
          type: 'text',
          label: 'Logos headline',
          required: false,
          localized: true,
          admin: {
            placeholder: 'e.g., As Featured In, Our Partners',
          },
        },
        {
          name: 'logos',
          type: 'array',
          label: 'Logos',
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
    },
    badge({}),
  ],
}
