import type { Block } from 'payload'

export const DividerBlock: Block = {
  slug: 'divider',
  labels: {
    singular: 'Divider',
    plural: 'Dividers',
  },
  interfaceName: 'DividerBlock',
  dbName: 'dividerBlock',
  fields: [], // No fields, it's just a visual <hr />
}
