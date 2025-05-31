import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ChecklistFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { blockHeader } from '@/components/BlockHeader/config'
import { badge } from '@/fields/badge'
import { iconPickerField } from '@/fields/iconPickerField'
import lucideIcons from '@/fields/iconPickerField/lucide-icons.json'
import { StyledList } from '@/blocks/StyledList/config'

const pricingCard: Field[] = [
  {
    name: 'type',
    label: false,
    type: 'select',
    options: [
      { value: 'basic', label: 'Basic' },
      { value: 'featured', label: 'Featured' },
    ],
    defaultValue: 'basic',
    admin: {
      description: 'Select the type of pricing card',
      condition: (_, siblingData, { blockData }) => {
        return blockData.type === '01'
      },
    },
  },
  badge({
    overrides: {
      //   localized: true,
      admin: {
        description:
          'Optional flag for the pricing card. Example: "Most Popular", "Best Value", "New", etc.',
      },
    },
  }),
  {
    name: 'title',
    type: 'text',
    localized: true,
  },
  {
    name: 'subtitle',
    type: 'text',
    localized: true,
  },
  {
    name: 'icon',
    type: 'upload',
    relationTo: 'media',
  },
  {
    name: 'price',
    type: 'group',
    label: false,
    localized: true,
    fields: [
      {
        name: 'annually',
        label: { en: 'Annual price', ar: 'السعر السنوي' },
        type: 'text',
      },
      {
        name: 'monthly',
        label: { en: 'Monthly price', ar: 'السعر الشهري' },
        type: 'text',
      },
    ],
  },
  {
    label: 'Link',
    type: 'collapsible',
    fields: [link({ overrides: { label: false } })],
  },
  {
    name: 'features',
    type: 'array',
    fields: [
      {
        name: 'enabled',
        type: 'checkbox',
      },
      {
        name: 'feature',
        type: 'text',
        localized: true,
      },
    ],
  },

  {
    name: 'featuredSolutions',
    type: 'relationship',
    relationTo: 'solutions',
    hasMany: true,
  },
  {
    name: 'featuredIntegrations',
    type: 'relationship',
    relationTo: 'integrations',
    hasMany: true,
  },
]

export const PricingBlock: Block = {
  slug: 'pricingBlock',
  labels: {
    singular: 'Pricing',
    plural: 'Pricing',
  },
  interfaceName: 'PricingBlock',
  dbName: 'pricingBlock',
  fields: [
    blockHeader,
    {
      name: 'type',
      type: 'select',
      defaultValue: '01',
      options: [
        { label: '01 - Hero', value: '01' },
        { label: '02 - Add ons', value: '02' },
      ],
      required: true,
    },
    {
      name: 'pricingCards',
      type: 'array',
      fields: [...pricingCard],
    },
  ],
}
