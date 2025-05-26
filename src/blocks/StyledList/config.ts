import type { Block } from 'payload'

export const StyledList: Block = {
  slug: 'styledListBlock',
  interfaceName: 'StyledListBlock',
  dbName: 'styledListBlock',
  labels: {
    singular: 'Styled List',
    plural: 'Styled Lists',
  },
  fields: [
    {
      name: 'listStyle',
      type: 'select',
      defaultValue: 'bullet',
      options: [
        {
          label: 'Bullet Points',
          value: 'bullet',
        },
        {
          label: 'Checkmarks',
          value: 'check',
        },
        {
          label: 'Numbered List',
          value: 'numbered',
        },
        {
          label: 'Feature List',
          value: 'feature',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
