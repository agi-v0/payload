import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['company', 'companyLogo', 'updatedAt', 'linkCaseStudy'],
    useAsTitle: 'company',
  },
  defaultPopulate: {
    companyLogo: true,
    featuredImage: true,
    name: true,
    title: true,
  },
  fields: [
    {
      name: 'quote',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            // FixedToolbarFeature(),
            // InlineToolbarFeature(),
            // HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          ]
        },
      }),
      localized: true,
      required: true,
      admin: {
        description: '',
      },
    },
    {
      name: 'company',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      localized: true,
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Logo of the company.',
      },
    },
    {
      type: 'group',
      label: 'Author Info',
      name: 'authorInfo',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'name',
              label: 'Author Name',

              type: 'text',
              required: true,
              localized: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'title',
              label: 'Author Title',
              type: 'text',
              localized: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },

        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Avatar image for the testimonial author. Minimum 300x300px recommended.',
          },
        },
      ],
    },
    {
      type: 'group',
      name: 'caseStudy',
      label: false,
      fields: [
        {
          name: 'linkCaseStudy',
          label: 'Link Case Study',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'linkedCaseStudy',
          type: 'relationship',
          relationTo: 'case-studies',
          admin: {
            position: 'sidebar',
            condition: (data, siblingData) => siblingData?.linkCaseStudy,
          },
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        description: 'Categories to help organize testimonials',
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
