import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'

import { slugField } from '@/fields/slug'

import { link } from '@/fields/link'

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
        description:
          'Upload an icon for the solution. 500x500px recommended. Only media with category "app-icons" will be shown.',
      },
      filterOptions: {
        'category.slug': { equals: 'app-icons' },
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
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },

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
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 25,
  },
}
