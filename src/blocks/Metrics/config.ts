import { blockHeader } from '@/components/BlockHeader/config'
import { logos } from '@/fields/logos'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BlocksFeature,
  EXPERIMENTAL_TableFeature,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const MetricsBlock: Block = {
  slug: 'metricsBlock',
  labels: {
    singular: 'Metrics',
    plural: 'Metrics',
  },
  interfaceName: 'MetricsBlock',
  dbName: 'metricsBlock',
  fields: [
    blockHeader,
    {
      name: 'type',
      type: 'select',
      defaultValue: '01',
      required: true,
      options: [
        { label: '01 - Grid', value: '01' },
        { label: '02 - Grid with Image', value: '02' },
        { label: '03 - Table', value: '03' },
      ],
    },
    // {
    //   name: 'blockImage',
    //   type: 'upload',
    //   relationTo: 'media',
    //   label: 'Image',
    //   localized: true,
    //   required: false,
    //   admin: {
    //     condition: (data, siblingData) => ['02'].includes(siblingData.type),
    //   },
    // },
    {
      name: 'blockImage',
      type: 'group',
      label: false,
      admin: {
        hideGutter: true,
        condition: (data, siblingData) => ['02'].includes(siblingData.type),
      },
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Media',
        },
      ],
      localized: true,
    },

    {
      name: 'stats',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              // required: true,
              admin: {
                width: '50%',
                description: 'Label for the stat',
              },
              localized: true,
            },
            {
              name: 'value',
              type: 'text',
              // required: true,
              admin: {
                width: '50%',
                description: 'Value for the stat. Example: 85% or 250 SAR',
              },
            },
          ],
        },
        {
          type: 'select',
          label: 'Indicator',
          name: 'indicator',
          options: [
            { label: 'Increase', value: 'increase' },
            { label: 'Decrease', value: 'decrease' },
            { label: 'None', value: 'noChange' },
          ],
          defaultValue: 'noChange',
          admin: {
            description: 'Whether the value is an increase or decrease',
          },
        },
      ],
      admin: {
        condition: (data, siblingData) => ['01', '02'].includes(siblingData.type),
      },
    },

    {
      name: 'table',
      type: 'json',
      label: 'Table',
      localized: true,
      required: true,
      admin: {
        condition: (data, siblingData) => siblingData.type === '03',
        description:
          'Use Google Sheets to generate the table data, convert that into JSON, and paste here.',
      },
    },
    {
      name: 'enableLogos',
      type: 'checkbox',
    },
    {
      type: 'collapsible',
      label: 'Logos',
      admin: {
        initCollapsed: true,
        condition: (data, siblingData) => siblingData.enableLogos,
      },
      fields: [
        {
          name: 'logos',
          label: false,
          type: 'group',
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              name: 'headline',
              type: 'text',
              label: 'Headline',
              required: false,
              localized: true,
              admin: {
                placeholder: 'e.g., As Featured In, Our Partners',
              },
            },
            logos({}),
          ],
        },
      ],
    },
  ],
}
