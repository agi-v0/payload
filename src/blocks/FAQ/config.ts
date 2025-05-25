import type { Block } from 'payload'

import { blockHeader } from '../../components/BlockHeader/config'

export const FaqBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FaqBlock',
  dbName: 'faqBlock',
  fields: [
    blockHeader,
    {
      name: 'type',
      type: 'select',
      options: [
        { value: '01', label: '01 - Full Width' },
        { value: '02', label: '02 - Split' },
      ],
      defaultValue: '01',
      required: true,
    },

    {
      name: 'faqs',
      label: 'Frequently Asked Questions',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      required: true,
      defaultValue: async ({ user, locale, req }) => {
        const { docs } = await req.payload.find({
          collection: 'faq',
          limit: 4,
          sort: 'updatedAt',
        })

        return docs.map((faq) => faq.id)
      },
      admin: {
        appearance: 'drawer',
      },
    },
  ],
}
