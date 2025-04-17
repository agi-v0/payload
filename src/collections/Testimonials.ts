import type { CollectionConfig } from 'payload'

import { authenticated } from '../access/authenticated'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { slugField } from '@/fields/slug'
import {
  BlocksFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'company', 'role', 'updatedAt'],
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info',
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'company',
              type: 'text',
              localized: true,
            },
            {
              name: 'role',
              type: 'text',
              localized: true,
            },
            {
              name: 'avatar',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Avatar image for the testimonial. 300x300px recommended.',
              },
            },
            {
              name: 'companyLogo',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Logo of the company. Optional.',
              },
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'quote',
              type: 'richText',
              localized: true,
              required: true,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
              }),
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
              name: 'rating',
              type: 'number',
              min: 1,
              max: 5,
              admin: {
                description: 'Rating out of 5 stars (optional)',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'group',
      label: false,
      fields: [
        {
          name: 'featured',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Whether this testimonial should be featured prominently',
          },
        },
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          admin: {
            description: 'Categories to help organize testimonials',
          },
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
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
