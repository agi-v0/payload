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
      { value: 'appsBlock01', label: 'Apps Block 01' },
      { value: 'appsBlock02', label: 'Apps Block 02' },
      { value: 'appsBlock03', label: 'Apps Block 03' },
      { value: 'appsBlock04', label: 'Apps Block 04' },
      { value: 'appsBlockHero', label: 'Apps Block Hero' },
    ],
    required: true,
    defaultValue: 'appsBlock01',
  },
  {
    name: 'body',
    type: 'group',
    fields: [
      badge({}),
      // {
      //   name: 'richTextStandard',
      //   type: 'richText',
      //   editor: standardEditor,
      //   label: 'Content',
      //   localized: true,
      //   admin: {
      //     condition: (_, siblingData) => {
      //       return siblingData?.type !== 'blockheader04'
      //     },
      //   },
      // },
      {
        name: 'headerText',
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
    relationTo: ['apps'],
    hasMany: true,
    admin: {
      description: 'Select the apps to link to. Leave blank to show 10 last updated apps.',
    },
  },
]

export const AppsBlock: Block = {
  slug: 'apps',
  interfaceName: 'AppsBlock',
  fields: [blockHeader, ...fields],
}
