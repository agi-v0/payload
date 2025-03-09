import type { ArrayField, Field } from 'payload'

import type { LinkAppearances } from './link'
import type { LinkStyles } from './link'

import deepMerge from '@/utilities/deepMerge'
import { link } from './link'

type LinkGroupType = (options?: {
  appearances?: LinkAppearances[] | false
  linkStyles?: LinkStyles[] | false
  overrides?: Partial<ArrayField>
}) => Field

export const linkGroup: LinkGroupType = ({ appearances, linkStyles, overrides = {} } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'linksGroup',
    type: 'group',
    fields: [
      {
        name: 'links',
        type: 'array',
        localized: true,
        fields: [
          link({
            appearances,
            linkStyles,
          }),
        ],
        admin: {
          initCollapsed: true,
        },
      },
      {
        name: 'links_caption',
        type: 'text',
        label: 'Links Caption',
        required: false,
      },
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}
