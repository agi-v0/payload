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
    defaultColumns: ['company', 'authorInfo.name', 'authorInfo.title', 'updatedAt'],
    useAsTitle: 'company',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Basic Info',
          fields: [
            {
              name: 'company',
              type: 'text',
              localized: true,
              required: true,
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Hero image for the testimonial. 4:3 aspect ratio recommended.',
              },
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
                    description: 'Avatar image for the testimonial author. 300x300px recommended.',
                  },
                },
              ],
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
        // link({
        //   variants: false,
        //   colors: false,
        //   description: false,
        //   icon: false,
        //   overrides: {
        //     admin: {
        //       position: 'sidebar',
        //       description: 'Link to the customer story page. ',
        //     },
        //   },
        // }),
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
