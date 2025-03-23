import type { Field } from 'payload'

import lucideIcons from './iconPickerField/lucide-icons.json'
import deepMerge from '@/utilities/deepMerge'

import { iconPickerField } from './iconPickerField'

export type BadgeColors = 'blue' | 'red' | 'green' | 'yellow'

export const colorOptions: Record<BadgeColors, { label: string; value: string }> = {
  blue: {
    label: 'Blue',
    value: 'blue',
  },
  red: {
    label: 'Red',
    value: 'red',
  },
  green: {
    label: 'Green',
    value: 'green',
  },
  yellow: {
    label: 'Yellow',
    value: 'yellow',
  },
}

type BadgeType = (options?: {
  colors?: BadgeColors[]
  icon?: boolean
  lable?: string
  overrides?: Record<string, unknown>
}) => Field

export const badge: BadgeType = ({ colors, icon = true, overrides = {} } = {}) => {
  let colorOptionsToUse = [
    colorOptions.blue,
    colorOptions.red,
    colorOptions.green,
    colorOptions.yellow,
  ]

  colorOptionsToUse = colors?.map((color) => colorOptions[color]) ?? colorOptionsToUse

  const badge: Field = {
    name: 'badge',
    type: 'group',
    label: false,
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            label: 'Label',
            name: 'label',
            type: 'text',
            admin: {
              width: '50%',
            },
            localized: true,
          },
          {
            name: 'color',
            type: 'select',
            admin: {
              description: 'Choose the badge color.',
              width: '50%',
            },
            defaultValue: 'blue',
            options: colorOptionsToUse,
          },
        ],
      },
    ],
  }

  //  //   admin: {
  //     condition: (_, siblingData) => siblingData?.type === 'reference',
  // },

  if (icon) {
    badge.fields.push(
      iconPickerField({
        name: 'icon',
        label: 'Icon',
        icons: lucideIcons,
        admin: {
          description:
            'Select an icon from the Lucide icon set. You can preview all available icons at https://lucide.dev/icons/',
        },
      }),
    )
    badge.fields.push({
      name: 'icon_dir',
      label: 'Icon Direction',
      type: 'select',
      admin: {
        width: '50%',
      },
      options: [
        { label: 'Lead', value: 'flex-row' },
        { label: 'Tail', value: 'flex-row-reverse' },
      ],
    })
  }

  const badgeGroup: Field = {
    label: 'Badge',
    type: 'collapsible',
    admin: {
      initCollapsed: true,
    },
    fields: [badge],
  }

  return deepMerge(badgeGroup, overrides)
}
