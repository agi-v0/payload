import type { Block, Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'
import { blockHeader } from '@/components/BlockHeader/config'
import { linkGroup } from '@/fields/linkGroup'
import { badge } from '@/fields/badge'

const fields: Field[] = [
  {
    name: 'type',
    type: 'select',
    options: [
      { value: 'appsBlockHero', label: 'Apps Block Hero' },
      { value: 'featuredApps01', label: 'Apps Block 01' },
      { value: 'featuredApps02', label: 'Apps Block 02' },
      { value: 'featuredApps03', label: 'Apps Block 03' },
      { value: 'featuredApps04', label: 'Apps Block 04' },
    ],
    required: true,
    defaultValue: 'featuredApps01',
  },
  {
    name: 'media',
    type: 'upload',
    localized: true,
    relationTo: 'media',
    required: false,
  },
  {
    name: 'reference',
    type: 'relationship',
    label: 'Apps to link to',
    relationTo: ['integrations'],
    hasMany: true,
    admin: {
      description: 'Select the apps to link to. Leave blank to show 10 last updated apps.',
    },
  },
]

export const FeaturedAppsBlock: Block = {
  slug: 'featuredApps',
  interfaceName: 'FeaturedAppsBlock',
  labels: {
    singular: 'Featured Apps',
    plural: 'Featured Apps',
  },
  fields: [blockHeader, ...fields],
  dbName: 'featuredAppsBlock',
}
