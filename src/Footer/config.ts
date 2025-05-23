import type { GlobalConfig } from 'payload'

import { revalidatePath } from 'next/cache'

import { authenticated } from '../access/authenticated'
import { link } from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: authenticated,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [
            link({
              variants: false,
              colors: false,
              icon: false,
              description: false,
            }),
          ],
        },
      ],
      maxRows: 4,
      minRows: 1,
    },
  ],
  hooks: {
    afterChange: [() => revalidatePath('/', 'layout')],
  },
}
