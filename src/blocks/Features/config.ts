import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { blockHeader } from '@/blocks/BlockHeader/config'
import { badge } from '@/fields/badge'
import { iconPickerField } from '@/fields/iconPickerField'
import lucideIcons from '@/fields/iconPickerField/lucide-icons.json'

const richTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})

let sizeOptions = [
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
        condition: (_, siblingData, { blockData }) => ['06', '07'].includes(blockData?.layout),
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
              return ['01', '02', '03', '04', '05'].includes(blockData?.layout)
            },
          },
          validate: (
            value: any,
            { data, path }: { data?: Record<string, any>; path?: (string | number)[] },
          ) => {
            // --- Debugging ---
            console.log('--- Features Block: size field validation ---')
            console.log('Path:', path)
            console.log('Value:', value)
            console.log('Layout:', data?.layout)
            console.log('Columns Data:', JSON.stringify(data?.columns, null, 2))
            // --- End Debugging ---

            // Only apply this validation for specific layouts where 'size' is relevant
            if (!['01', '02', '03', '04', '05'].includes(data?.layout)) {
              console.log('Skipping validation: Layout not relevant')
              return true // Skip validation for other layouts
            }

            // Extract index from path array (e.g., ['columns', 0, 'size'] -> index is path[1])
            const currentIndex =
              Array.isArray(path) && path.length > 1 && typeof path[1] === 'number' ? path[1] : -1
            console.log('Extracted Index:', currentIndex)

            // Ensure we have valid data and index
            const columns = data?.columns
            if (
              !Array.isArray(columns) ||
              currentIndex === -1 ||
              currentIndex >= columns.length - 1
            ) {
              // Not enough data, couldn't find index, or it's the last item (no next item to check)
              console.log('Skipping validation: Invalid data, index, or last item')
              return true
            }

            // Check the condition: current item is 'half' but the next one is not 'half'
            const nextItem = columns[currentIndex + 1]
            console.log('Current Item Size:', value)
            console.log('Next Item Size:', nextItem?.size)

            if (value === 'half' && nextItem?.size !== 'half') {
              console.log('Validation FAILED: Half size mismatch')
              return 'A column with size "Half" must be followed by another column with size "Half".'
            }

            console.log('Validation PASSED')
            return true // Validation passes
          },
        },
        {
          name: 'appReference',
          type: 'relationship',
          relationTo: 'apps',
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
          label: 'Content',
          name: 'content',
          fields: [
            { name: 'title', type: 'text', label: 'Title', required: true },
            {
              name: 'copy',
              type: 'textarea',
              label: 'Copy',
            },
          ],
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
