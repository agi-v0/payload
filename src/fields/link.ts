import type { Field } from 'payload'

import lucideIcons from './iconPickerField/lucide-icons.json'
import deepMerge from '@/utilities/deepMerge'

import { iconPickerField } from './iconPickerField'

export type LinkAppearances =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  // | 'destructive'
  | 'link'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  primary: {
    label: 'Primary',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary',
    value: 'secondary',
  },
  tertiary: {
    label: 'Tertiary',
    value: 'tertiary',
  },
  ghost: {
    label: 'Ghost',
    value: 'ghost',
  },
  // destructive: {
  //   label: 'Destructive',
  //   value: 'destructive',
  // },
  link: {
    label: 'Link',
    value: 'link',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
}) => Field

export const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      relationTo: ['pages', 'posts'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.default,
      appearanceOptions.primary,
      appearanceOptions.secondary,
      appearanceOptions.tertiary,
      appearanceOptions.ghost,
      // appearanceOptions.destructive,
      appearanceOptions.link,
    ]

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance])
    }

    linkResult.fields.push(
      {
        name: 'description',
        label: 'Description',
        type: 'text',
      },
      iconPickerField({
        name: 'icon',
        label: 'Icon',
        icons: lucideIcons,
        admin: {
          description:
            'Select an icon from the Lucide icon set. You can preview all available icons at https://lucide.dev/icons/',
        },
      }),
      {
        name: 'appearance',
        type: 'select',
        admin: {
          description: 'Choose how the link should be rendered.',
        },
        defaultValue: 'default',
        options: appearanceOptionsToUse,
      },
    )
  }

  return deepMerge(linkResult, overrides)
}
