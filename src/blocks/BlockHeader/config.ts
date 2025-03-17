import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { badge } from '@/fields/badge'

export const blockHeader: Field = {
  label: 'Block Header',
  type: 'collapsible',
  admin: {
    initCollapsed: true,
  },
  fields: [
    {
      name: 'blockHeader',
      type: 'group',
      label: 'Block Header',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'blockheader01',
          label: 'Type',
          options: [
            {
              label: 'Varient 1',
              value: 'blockheader01',
            },
            {
              label: 'Varient 2',
              value: 'blockheader02',
            },
            {
              label: 'Varient 3',
              value: 'blockheader03',
            },
            {
              label: 'Varient 4',
              value: 'blockheader04',
            },
          ],
          required: true,
        },
        badge({}),
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
      ],
    },
  ],
}
