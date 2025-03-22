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
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      BlocksFeature({ blocks: [StyledList] }),
    ]
  },
})

export const blockHeader: Field = {
  label: 'Block Header',
  type: 'collapsible',
  admin: {
    initCollapsed: true,
  },
  fields: [
    {
      name: 'blockHeader',
      type: 'group',
      label: 'Block Header',
      fields: [
        {
          name: 'type',
          type: 'select',
          defaultValue: 'blockheader01',
          label: 'Type',
          options: [
            {
              label: 'Varient 1',
              value: 'blockheader01',
            },
            {
              label: 'Varient 2',
              value: 'blockheader02',
            },
            {
              label: 'Varient 3',
              value: 'blockheader03',
            },
            {
              label: 'Varient 4',
              value: 'blockheader04',
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
          name: 'richTextWithStyledList',
          type: 'richText',
          editor: editorWithStyledList,
          label: 'Content',
          localized: true,
          // admin: {
          //   condition: (_, siblingData) => {
          //     return siblingData?.type === 'blockheader04'
          //   },
          // },
        },
        linkGroup({
          overrides: {
            maxRows: 2,
          },
        }),
      ],
    },
  ],
}
