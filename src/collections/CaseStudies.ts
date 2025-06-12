import type { CollectionConfig } from 'payload'

import { revalidatePath } from 'next/cache'

import { slugField } from '../fields/slug'
// import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { authenticated } from '@/access/authenticated'
import { authenticatedOrPublished } from '@/access/authenticatedOrPublished'

import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
  HeadingFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical'

import { MediaBlock } from '@/blocks/MediaBlock/config'
import { generatePreviewPath } from '@/utilities/generatePreviewPath'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    livePreview: {
      url: ({ data, req, locale }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          locale: locale as any,
          collection: 'customers',
          req,
        })
        return path
      },
    },
    preview: (data, { req, locale }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        locale,
        collection: 'customers',
        req,
      }),
    useAsTitle: 'title',
  },
  defaultPopulate: {
    slug: true,
    featuredImage: true,
    title: true,
    url: true,
    stats: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description:
          'Internal page title used to identify this entry in the CMS and generate the URL slug. English only.',
        rtl: false,
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
            BlocksFeature({ blocks: [MediaBlock] }),
          ]
        },
      }),
      localized: true,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'industry',
          type: 'text',
          localized: true,
        },
        {
          name: 'useCase',
          type: 'text',
          localized: true,
        },
      ],
    },
    // {
    //   name: 'partner',
    //   type: 'relationship',
    //   relationTo: 'partners',
    // },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
              required: true,
              admin: {
                width: '50%',
                description: 'Label for the stat',
              },
              localized: true,
            },
            {
              name: 'value',
              type: 'number',
              required: true,
              admin: {
                width: '50%',
                description: 'Value for the stat',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              type: 'checkbox',
              name: 'isPercentage',
              defaultValue: false,
              admin: {
                description: 'Whether the value is a percentage',
                width: '50%',
              },
            },
            {
              type: 'checkbox',
              name: 'isIncrease',
              defaultValue: true,
              admin: {
                description: 'Whether the value is an increase or decrease',
                width: '50%',
              },
            },
          ],
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
    {
      name: 'layout',
      type: 'blocks',
      blocks: [],
      blockReferences: [
        'archiveBlock',
        'callToActionBlock',
        'customHtmlBlock',
        'dividerBlock',
        'faqBlock',
        'featuredAppsBlock',
        'featuresBlock',
        'formBlock',
        'galleryBlock',
        'logosBlock',
        'richTextBlock',
        'testimonialsBlock',
      ],

      admin: {
        initCollapsed: true,
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath(`/case-studies/${doc.slug}`)
        revalidatePath(`/case-studies`, 'page')
        console.log(`Revalidated: /case-studies/${doc.slug}`)
      },
    ],
  },
  versions: {
    drafts: true,
  },
}
