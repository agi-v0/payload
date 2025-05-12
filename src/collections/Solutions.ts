import type { CollectionConfig, Field } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { MediaBlock } from '../blocks/MediaBlock/config'
import { StyledList } from '../blocks/StyledList/config'
import { hero } from '@/heros/config'
import { Banner } from '../blocks/Banner/config'
import { Code } from '../blocks/Code/config'

import { slugField } from '@/fields/slug'

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

export const Solutions: CollectionConfig<'solutions'> = {
  slug: 'solutions',
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
    tagline: true,
    link: true,
    slug: true,
    icon: true,
    name: true,
    ecosystem: true,
  },
  admin: {
    defaultColumns: ['icon', 'name', 'tagline', 'ecosystem', 'updatedAt'],
    // livePreview: {
    //   url: ({ data, req, locale }) => {
    //     const path = generatePreviewPath({
    //       slug: typeof data?.slug === 'string' ? data.slug : '',
    //       collection: 'solutions',
    //       req,
    //       locale,
    //     })

    //     return path
    //   },
    // },
    // preview: (data, { req, locale }) =>
    //   generatePreviewPath({
    //     slug: typeof data?.slug === 'string' ? data.slug : '',
    //     collection: 'solutions',
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
      admin: {
        description:
          'Internal page title used to identify this entry in the CMS and generate the URL slug. English only.',
        rtl: false,
      },
    },
    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       label: 'Solution Info',
    //       fields: [

    //       ],
    //     },
    //   ],
    // },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an icon for the solution. 500x500px recommended.',
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
        description: 'Link to page on Marn.com/solutions/[slug] if available.',
      },
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
    {
      name: 'ecosystem',
      type: 'relationship',
      relationTo: 'categories',
      filterOptions: (data) => {
        return {
          'parent.slug': {
            equals: 'ecosystems',
          },
        }
      },
      admin: {
        position: 'sidebar',
        description:
          'Link this item to an ecosystem category. The list is filtered to show only categories from the "ecosystems" family.',
      },
    },

    ...slugField(),
  ],

  versions: {
    drafts: {
      // autosave: {
      //   interval: 100, // We set this interval for optimal live preview
      // },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
