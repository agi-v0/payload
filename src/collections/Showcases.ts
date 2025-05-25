import type { CollectionConfig } from 'payload'
import { revalidatePath } from 'next/cache'

import { slugField } from '@/fields/slug'
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
import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { FaqBlock } from '@/blocks/FAQ/config'
import { FeaturesBlock } from '@/blocks/Features/config'
import { FormBlock } from '@/blocks/Form/config'
import { FeaturedAppsBlock } from '@/blocks/FeaturedApps/config'
import { GalleryBlock } from '@/blocks/Gallery/config'
import { TestimonialsBlock } from '@/blocks/Testimonials/config' // This will need to be updated if Testimonials collection is removed/changed

export const Customers: CollectionConfig = {
  slug: 'customers',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    readVersions: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'publishedAt', 'updatedAt'],
    livePreview: {
      url: ({ data, req, locale }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          locale: locale as any,
          collection: 'customers' as any,
          req,
        })
        return path
      },
    },
    preview: (data, { req, locale }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        locale,
        collection: 'customers' as any,
        req,
      }),
  },
  defaultPopulate: {
    slug: true,
    featuredImage: true,
    title: true,
    type: true,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Testimonial', value: 'testimonial' },
        { label: 'Case Study', value: 'caseStudy' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'title', // Common title for both
      type: 'text',
      required: true,
      localized: true, // Assuming title can be localized for both
      admin: {
        description:
          'Main title for this showcase. For testimonials, this could be a summary like "Testimonial from X". For case studies, the case study title.',
      },
    },
    // Testimonial Specific Fields
    {
      name: 'quote',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h4', 'h5', 'h6'] }), // Simple headings for quotes
        ],
      }),
      localized: true,
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'testimonial',
        description: 'The testimonial quote.',
      },
    },
    {
      name: 'companyName',
      type: 'text',
      localized: true,
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'testimonial',
      },
    },
    {
      name: 'companyLogo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'testimonial',
        description: 'Logo of the company giving the testimonial.',
      },
    },
    {
      type: 'group',
      name: 'authorInfo',
      label: 'Author Information',
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
      admin: {
        condition: (_, siblingData) => siblingData.type === 'testimonial',
      },
    },

    // Case Study Specific Fields
    {
      name: 'content', // Main content for Case Study
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          BlocksFeature({ blocks: [MediaBlock] }), // Add other blocks as needed
        ],
      }),
      localized: true,
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'industry',
          type: 'text',
          localized: true,
          admin: {
            width: '50%',
            condition: (_, siblingData) => siblingData.type === 'caseStudy',
          },
        },
        {
          name: 'useCase',
          type: 'text',
          localized: true,
          admin: {
            width: '50%',
            condition: (_, siblingData) => siblingData.type === 'caseStudy',
          },
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
      },
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
              admin: { width: '50%', description: 'Label for the stat' },
              localized: true,
            },
            {
              name: 'value',
              type: 'number',
              required: true,
              admin: { width: '50%', description: 'Value for the stat' },
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
              admin: { description: 'Whether the value is a percentage', width: '50%' },
            },
            {
              type: 'checkbox',
              name: 'isIncrease',
              defaultValue: true,
              admin: { description: 'Whether the value is an increase or decrease', width: '50%' },
            },
          ],
        },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
      },
    },
    {
      name: 'featuredSolutions',
      type: 'relationship',
      relationTo: 'solutions', // Assuming 'solutions' collection exists
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
      },
    },
    {
      name: 'featuredIntegrations',
      type: 'relationship',
      relationTo: 'integrations', // Assuming 'integrations' collection exists
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout (for Case Studies)',
      type: 'blocks',
      blocks: [], // To be populated with available block configs
      blockReferences: [
        'archive',
        'callToAction',
        'faqBlock',
        'features',
        'featuredApps',
        'gallery',
        'formBlock',
        'testimonials', // This 'testimonials' block should ideally fetch 'Showcases' of type 'testimonial'
      ],
      admin: {
        condition: (_, siblingData) => siblingData.type === 'caseStudy',
        initCollapsed: true,
      },
    },

    // Common Fields
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      localized: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories', // Assuming 'categories' collection exists
      hasMany: true,
      admin: {
        position: 'sidebar',
        description: 'Categorize this showcase item.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      defaultValue: () => new Date(),
    },
    ...slugField('title'), // Generate slug from 'title' field
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Revalidate the specific showcase item path
        revalidatePath(`/customers/${doc.slug}`)
        // Revalidate the showcases listing page (if you have one)
        revalidatePath(`/customers`, 'page')

        // Potentially revalidate other related pages if necessary
        // e.g., if showcases are featured on the homepage or category pages

        if (req.payload.logger) {
          req.payload.logger.info(`Revalidated customer: /customers/${doc.slug}`)
        }
      },
    ],
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
