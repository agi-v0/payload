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

// Rich text editor configuration
const richTextEditor = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})

const featureItem: Field = {
  type: 'group',
  name: 'featureItem',
  fields: [
    iconPickerField({
      name: 'icon',
      label: 'Icon',
      icons: lucideIcons,
    }),
    {
      name: 'content',
      type: 'richText',
      editor: richTextEditor,
      label: 'Content',
      required: true,
    },
  ],
}

export const Features: Block = {
  slug: 'features',
  interfaceName: 'FeaturesBlock',
  fields: [
    blockHeader,
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Cards', value: 'cards' },

        { label: 'Carousel', value: 'carousel' },

        // { label: 'Icon Grid', value: 'iconGrid' },

        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Masonry', value: 'masonry' },
        { label: 'Tabs', value: 'tabs' },
        { label: 'Accordion', value: 'accordion' },
      ],
      required: true,
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image',
      admin: {
        condition: (_, siblingData, { blockData }) =>
          ['grid', 'mansory', 'tabs', 'carousel', 'horizontal'].includes(blockData?.layout),
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
          defaultValue: 'oneThird',
          options: [
            {
              label: 'One Third',
              value: 'oneThird',
            },
            {
              label: 'Half',
              value: 'half',
            },
            {
              label: 'Two Thirds',
              value: 'twoThirds',
            },
            {
              label: 'Full',
              value: 'full',
            },
          ],
          admin: {
            condition: (_, siblingData, { blockData }) =>
              ['grid', 'masonry'].includes(blockData?.layout),
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'content',
          type: 'richText',
          editor: richTextEditor,
          label: 'Content',
        },
        {
          type: 'collapsible',
          label: 'link',
          fields: [
            link({
              // overrides: {
              //   admin: {
              //     condition: (_, siblingData) => Boolean(siblingData?.enableCta),
              //   },
              // },
            }),
          ],
        },
        iconPickerField({
          name: 'icon',
          label: 'Icon',
          icons: lucideIcons,
          // admin: {
          //   condition: (_, siblingData, { blockData }) =>
          //     ['accordion', 'cards', 'iconGrid'].includes(blockData?.layout),
          // },
        }),
        {
          name: 'appReference',
          type: 'relationship',
          relationTo: 'media',
          label: 'App Reference',
          hasMany: false,
          admin: {
            condition: (_, siblingData, { blockData }) => ['grid'].includes(blockData?.layout),
          },
        },
        {
          name: 'tabLabel',
          type: 'text',
          label: 'Tab Label',
          admin: {
            condition: (_, siblingData, { blockData }) => ['tabs'].includes(blockData?.layout),
          },
        },
        {
          name: 'showBadge',
          label: 'Show Badge',
          type: 'checkbox',
          admin: {
            condition: (_, siblingData, { blockData }) =>
              ['grid', 'masonry', 'tabs'].includes(blockData?.layout),
          },
        },
        // {
        //   type: 'collapsible',
        //   label: 'Badge',
        //   admin: {
        //     condition: (_, siblingData) => Boolean(siblingData?.showBadge),
        //   },
        //   fields: [badge({})],
        // },
        badge({
          overrides: {
            admin: {
              condition: (_, siblingData) => Boolean(siblingData?.showBadge),
            },
          },
        }),
        {
          name: 'showFeatureList',
          label: 'Show Feature List',
          type: 'checkbox',
          admin: {
            condition: (_, siblingData, { blockData }) =>
              ['horizontal'].includes(blockData?.layout),
          },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData?.showFeatureList),
          },
          fields: [featureItem],
        },
        // {
        //   name: 'enableCta',
        //   label: 'Enable Call to Action',
        //   type: 'checkbox',
        // },
      ],
    },
  ],
}
