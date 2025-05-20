import deepMerge from '@/utilities/deepMerge'
import type { Field } from 'payload'

type LogosType = (options?: { overrides?: Partial<Field> }) => Field

export const logos: LogosType = ({ overrides } = {}) => {
  const generatedLogosField: Field = {
    name: 'logos',
    type: 'upload',
    relationTo: 'media',
    defaultValue: async ({ user, locale, req }) => {
      const { docs } = await req.payload.find({
        collection: 'media',
        limit: 10,
        sort: 'updatedAt',
        where: {
          'category.slug': {
            equals: 'company-logo',
          },
        },
      })
      return docs.map((med) => ({ relationTo: 'media', value: med.id }))
    },
    hasMany: true,
  }
  return deepMerge(generatedLogosField, overrides)
}
