import { blockHeader } from '@/components/BlockHeader/config'
import { logos } from '@/fields/logos'
import { Block } from 'payload'

export const MetricsBlock: Block = {
  slug: 'metrics',
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
        { label: '01 - Bento', value: '01' },
        { label: '02 - Bento (2)', value: '02' },
        { label: '03 - Two Column', value: '03' },
        { label: '04 - Basic Image with Text', value: '04' },
      ],
    },
    {
      name: 'blockImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      localized: true,
    },
    {
      name: 'metrics',
      type: 'array',
      fields: [
        {
          name: 'metric',
          type: 'text',
          label: 'Metric',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
        },
        {
          name: 'enableLogos',
          type: 'checkbox',
        },
        logos({
          overrides: {
            admin: { condition: (data, siblingData) => siblingData.enableLogos },
          },
        }),
      ],
    },
  ],
}
