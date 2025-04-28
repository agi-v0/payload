import type { Block } from 'payload'

import { blockHeader } from '../../components/BlockHeader/config'

export const FaqBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FaqBlock',
  fields: [
    blockHeader,
    {
      name: 'faqs',
      label: 'Frequently Asked Questions',
      type: 'relationship',
      relationTo: 'faq',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the FAQs to display. Leave blank to display latest 6 FAQs.',
      },
    },
  ],
}
