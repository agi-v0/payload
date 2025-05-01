import type { CollectionConfig, Field } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { MediaBlock } from '../blocks/MediaBlock/config'
import { StyledList } from '../blocks/StyledList/config'
import { hero } from '@/heros/config'
import { Banner } from '../blocks/Banner/config'
import { Code } from '../blocks/Code/config'

import { FormBlock } from '../blocks/Form/config'
import { Archive } from '../blocks/ArchiveBlock/config'
import { CallToAction } from '../blocks/CallToAction/config'
import { Content } from '../blocks/Content/config'

import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../hooks/populatePublishedAt'
import { generatePreviewPath } from '../utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { link } from '@/fields/link'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { iconPickerField } from '@/fields/iconPickerField'
import lucideIcons from '@/fields/iconPickerField/lucide-icons.json'

export const Apps: CollectionConfig<'apps'> = {
  slug: 'apps',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    icon: true,
    tagline: true,
    link: true,
    name: true,
  },
  admin: {
    defaultColumns: ['icon', 'name', 'tagline', 'updatedAt'],
    // livePreview: {
    //   url: ({ data, req, locale }) => {
    //     const path = generatePreviewPath({
    //       slug: typeof data?.slug === 'string' ? data.slug : '',
    //       collection: 'apps',
    //       req,
    //       locale,
    //     })

    //     return path
    //   },
    // },
    // preview: (data, { req, locale }) =>
    //   generatePreviewPath({
    //     slug: typeof data?.slug === 'string' ? data.slug : '',
    //     collection: 'apps',
    //     req,
    //     locale,
    //   }),
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: false,
      admin: {
        rtl: false,
        description: 'Title of the app in English for display purposes.',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'App Info',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Upload an icon for the app. 500x500px recommended.',
              },
              filterOptions: {
                'category.slug': { equals: 'app-icon' },
              },
            },
            {
              name: 'name',
              label: 'Name',
              type: 'text',
              localized: true,
            },
            {
              name: 'tagline',
              label: 'Tagline',
              type: 'text',
              localized: true,
            },
            {
              name: 'overview',
              label: 'Overview',
              type: 'richText',
              localized: true,
            },
            {
              type: 'collapsible',
              label: 'Link',
              fields: [
                link({
                  variants: false,
                  colors: false,
                  description: false,
                  icon: false,
                }),
              ],
              admin: {
                description: 'Link to page on Marn.com or alternative site',
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            hero,
            {
              name: 'gallery',
              type: 'upload',
              relationTo: 'media',
              hasMany: true,
            },
            {
              name: 'content',
              type: 'richText',
              localized: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock, StyledList] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: 'About',
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                },
                {
                  name: 'description',
                  type: 'text',
                  localized: true,
                },
                iconPickerField({
                  name: 'icon',
                  label: 'Icon',
                  icons: lucideIcons,
                  admin: {
                    description:
                      'Select an icon from the Lucide icon set. You can preview all available icons at https://lucide.dev/icons/',
                  },
                }),
              ],
            },
          ],
        },
        // {
        //   name: 'meta',
        //   label: 'SEO',
        //   localized: true,
        //   fields: [
        //     OverviewField({
        //       titlePath: 'meta.title',
        //       descriptionPath: 'meta.description',
        //       imagePath: 'meta.image',
        //     }),
        //     MetaTitleField({
        //       hasGenerateFn: true,
        //     }),
        //     MetaImageField({
        //       relationTo: 'media',
        //     }),

        //     MetaDescriptionField({}),
        //     PreviewField({
        //       // if the `generateUrl` function is configured
        //       hasGenerateFn: true,

        //       // field paths to match the target field for data
        //       titlePath: 'meta.title',
        //       descriptionPath: 'meta.description',
        //     }),
        //   ],
        // },
      ],
    },
    {
      name: 'appPreview',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: '@/components/AppPreview#AppPreview',
          },
        },
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    // {
    //   name: 'ecosystem',
    //   type: 'select',
    //   options: [
    //     { value: 'sell', label: { en: 'Sell', ar: 'بيع' } },
    //     { value: 'operate', label: { en: 'Operate', ar: 'تشغيل' } },
    //     { value: 'manage', label: { en: 'Manage', ar: 'إدارة' } },
    //   ],
    //   admin: {
    //     position: 'sidebar',
    //   },
    // },
    ...slugField(),
  ],

  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
