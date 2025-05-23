import type { ArrayField, Field } from 'payload'

import type { LinkVariants } from './link'
import type { LinkColors } from './link'

import deepMerge from '@/utilities/deepMerge'
import { link } from './link'

type LinkGroupType = (options?: {
  variants?: LinkVariants[] | false
  colors?: LinkColors[] | false
  icon?: boolean
  description?: boolean
  overrides?: Partial<ArrayField>
  supportingText?: boolean
}) => Field

export const linkGroup: LinkGroupType = ({
  variants,
  colors,
  description,
  icon,
  overrides = {},
  supportingText = false,
} = {}) => {
  const generatedLinkGroup: Field = {
    // name: 'links',
    label: 'Links',
    type: 'collapsible',
    admin: {
      initCollapsed: true,
    },
    fields: [
      {
        name: 'links',
        type: 'array',
        label: 'Links',
        fields: [
          link({
            variants,
            colors,
            description,
            icon,
          }),
        ],
      },
    ],
  }
  if (supportingText) {
    generatedLinkGroup.fields.push({
      name: 'supportingText',
      type: 'text',
      label: 'Supporting text',
      required: false,
      admin: {
        placeholder: 'e.g., 30-day refund',
      },
    })
  }
  return deepMerge(generatedLinkGroup, overrides)
}
