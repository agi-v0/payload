import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPickerField } from '@/fields/iconPickerField'
import lucideIcons from '@/fields/iconPickerField/lucide-icons.json'

import { badge } from '@/fields/badge'
import { linkGroup } from '@/fields/linkGroup'
export const CallToAction: Block = {
  slug: 'callToAction',
  interfaceName: 'CallToActionBlock',
  dbName: 'callToActionBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: '01',
      options: [
        { label: '01 - Card (Split)', value: '01' },
        { label: '02 - Card (Centered)', value: '02' },
        { label: '03 - Brief (Centered)', value: '03' },
        { label: '04 - Banner', value: '04' },
        { label: '05 - Brief (Inverted Colors)', value: '05' },
        { label: '06 - Form (Centered)', value: '06' },
        { label: '07 - Form (Card - Split)', value: '07' },
      ],
      required: true,
    },
    badge({}),

    {
      name: 'richText',
      type: 'richText',
      localized: true,
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
    },
    {
      name: 'media',
      type: 'upload',
      localized: true,
      relationTo: 'media',
      required: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
      supportingText: true,
    }),

    {
      name: 'list',
      type: 'array',
      fields: [
        iconPickerField({
          name: 'icon',
          label: 'Icon',
          icons: lucideIcons,
          admin: {
            description:
              'Select an icon from the Lucide icon set. You can preview all available icons at https://lucide.dev/icons/',
          },
        }),
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'textarea',
        },
      ],
      admin: {
        condition: (_, { type }) => ['02'].includes(type),
      },
    },
    // {
    //   name: 'enableForm',
    //   type: 'checkbox',
    //   label: 'Include Form',
    //   defaultValue: false,
    // },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: false,
      admin: {
        condition: (_, { type }) => ['06', '07'].includes(type),
      },
    },
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
