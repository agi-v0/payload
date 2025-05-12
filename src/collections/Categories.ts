import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      name: 'family',
      type: 'select',
      options: [
        { label: 'Ecosystems', value: 'ecosystems' },
        { label: 'Integrations', value: 'integrations' },
        { label: 'Blog', value: 'blog' },
        { label: 'Other', value: 'other' },
      ],
    },

    ...slugField(),
  ],
}
