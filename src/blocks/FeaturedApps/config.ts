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
      { value: 'appsGridHero', label: 'Apps Grid Hero' },
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
  },
  {
    name: 'reference',
    type: 'relationship',
    label: 'Apps to link to',
    relationTo: 'integrations',
    hasMany: true,
    admin: {
      description: 'Select the apps to link to. Leave blank to show 10 last updated apps.',
    },
    defaultValue: async ({ user, locale, req }) => {
      const { docs } = await req.payload.find({
        collection: 'integrations',
        limit: 10,
        sort: 'updatedAt',
        depth: 0,
        locale,
      })
      console.log(docs)
      return docs.map((app) => app.id)
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
