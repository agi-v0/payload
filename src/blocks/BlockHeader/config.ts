import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { badge } from '@/fields/badge'
import { StyledList } from '@/blocks/StyledList/config'

// TODO: FIX Starndard Editor
// const standardEditor = lexicalEditor({
//   features: ({ rootFeatures }) => {
//     return [
//       ...rootFeatures,
//       HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
//       FixedToolbarFeature(),
//       InlineToolbarFeature(),
//     ]
//   },
// })

const editorWithStyledList = lexicalEditor({
  features: ({ rootFeatures }) => {
    return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      BlocksFeature({ blocks: [StyledList] }),
    ]
  },
})

export const blockHeader: Field = {
  name: 'blockHeader',
  type: 'group',
  label: 'Block Header',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'start',
      label: 'Type',
      options: [
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Split',
          value: 'split',
        },
        {
          label: 'Start',
          value: 'start',
        },
      ],
      required: true,
    },
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
      editor: editorWithStyledList,
      label: false,
      localized: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}
