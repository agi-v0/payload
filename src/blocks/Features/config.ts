import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { blockHeader } from '@/components/BlockHeader/config'
import { badge } from '@/fields/badge'
import { iconPickerField } from '@/fields/iconPickerField'
import lucideIcons from '@/fields/iconPickerField/lucide-icons.json'
import { StyledList } from '@/blocks/StyledList/config'

const richTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BlocksFeature({ blocks: [StyledList] }),
    ]
  },
})

const sizeOptions = [
  { label: 'Half', value: 'half' },
  { label: 'Full', value: 'full' },
  { label: 'One Third', value: 'oneThird' },
  { label: 'Two Thirds', value: 'twoThirds' },
]

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    blockHeader,
    {
      name: 'layout',
      type: 'select',
      defaultValue: '01',
      options: [
        { label: '01 - Bento', value: '01' },
        { label: '02 - Bento (2)', value: '02' },
        { label: '03 - Two Column', value: '03' },
        { label: '04 - Basic Image with Text', value: '04' },
        { label: '05 - Basic Image with Text (2-Column)', value: '05' },
        { label: '06 - Brief (Card)', value: '06' },
        { label: '07 - Brief (Centered)', value: '07' },
        { label: '08 - Carousel (Tabs)', value: '08' },
        { label: '09 - Carousel (Accordion)', value: '09' },
        { label: '10 - Carousel (Row)', value: '10' },
        { label: '11 - Cards with Modals', value: '11' },
        { label: '12 - Simple Text with Icon', value: '12' },
        { label: '13 - Simple Text with Icon (Cards)', value: '13' },
        { label: '14 - 3 Image with Text, Big CTA', value: '14' },
        { label: '15 - 3 Image with Text, Big CTA (2)', value: '15' },
        { label: '16 - 4 Image with Text, Big CTA ', value: '16' },
        { label: '17 - 4 Image with Text, Small CTA', value: '17' },
      ],
      required: true,
    },
    {
      name: 'blockImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      admin: {
        condition: (_, siblingData, { blockData }) =>
          ['04', '06', '07'].includes(blockData?.layout),
      },
    },
    {
      type: 'collapsible',
      label: 'CTA Link',
      fields: [
        {
          name: 'CTALabel',
          type: 'text',
          label: 'CTA Label Text',
          admin: {
            description: 'Extra text to display alongside the link',
          },
        },
        link({
          variants: false,
          colors: false,
        }),
      ],
      admin: {
        condition: (_, siblingData, { blockData }) =>
          ['14', '15', '16', '17'].includes(blockData?.layout),
      },
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Feature Columns',
      fields: [
        {
          name: 'size',
          type: 'select',
          defaultValue: 'half',
          options: sizeOptions,
          admin: {
            condition: (_, siblingData, { blockData }) => {
              return ['01', '02', '03', '05'].includes(blockData?.layout)
            },
          },
        },
        {
          name: 'appReference',
          type: 'relationship',
          relationTo: ['solutions', 'apps'],
          label: 'App Reference',
          admin: {
            condition: (_, siblingData, { blockData }) => {
              return ['01'].includes(blockData?.layout)
            },
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            condition: (_, siblingData, { blockData }) =>
              [
                '01',
                '02',
                '03',
                '04',
                '05',
                '08',
                '09',
                '10',
                '11',
                '14',
                '15',
                '16',
                '17',
              ].includes(blockData?.layout),
          },
        },

        {
          name: 'tabLabel',
          type: 'text',
          label: 'Tab Label',
          admin: {
            condition: (_, siblingData, { blockData }) => ['08'].includes(blockData?.layout),
          },
        },

        iconPickerField({
          name: 'icon',
          label: 'Icon',
          icons: lucideIcons,
          admin: {
            condition: (_, siblingData, { blockData }) =>
              ['06', '07', '09', '12', '13'].includes(blockData?.layout),
          },
        }),

        {
          type: 'group',
          label: false,
          name: 'content',
          fields: [
            { name: 'title', type: 'text', label: 'Title', required: true },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Subtitle',
            },
          ],
          admin: {
            condition: (_, siblingData, { blockData }) =>
              !['01', '03', '04', '05'].includes(blockData?.layout),
          },
        },
        {
          name: 'richTextContent',
          label: 'Content',
          type: 'richText',
          editor: richTextEditor,
          admin: {
            condition: (_, siblingData, { blockData }) =>
              ['01', '03', '04', '05'].includes(blockData?.layout),
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'enableBadge',
              label: 'Enable Badge',
              type: 'checkbox',
              admin: {
                condition: (_, siblingData, { blockData }) =>
                  ['02', '03', '04', '05', '08'].includes(blockData?.layout),
                width: '50%',
              },
            },
            {
              name: 'enableCta',
              label: 'Enable Link',
              type: 'checkbox',
              admin: {
                condition: (_, siblingData, { blockData }) =>
                  ['02', '03', '04', '05', '08'].includes(blockData?.layout),
                width: '50%',
              },
            },
          ],
        },
        badge({
          overrides: {
            admin: {
              condition: (_, siblingData) => Boolean(siblingData?.enableBadge),
            },
          },
        }),
        {
          type: 'collapsible',
          label: 'Link',
          fields: [
            link({
              variants: false,
              colors: false,
            }),
          ],
          admin: {
            condition: (_, siblingData, { blockData }) => Boolean(siblingData?.enableCta),
          },
        },
      ],
    },
  ],
}
