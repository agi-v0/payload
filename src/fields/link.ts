import type { Field } from 'payload'

import lucideIcons from './iconPickerField/lucide-icons.json'
import deepMerge from '@/utilities/deepMerge'

import { iconPickerField } from './iconPickerField'

export type LinkAppearances = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link'
export type LinkStyles = 'brand' | 'neutral'

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
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

  link: {
    label: 'Link',
    value: 'link',
  },
}
export const linkStylesOptions: Record<LinkStyles, { label: string; value: string }> = {
  brand: {
    label: 'Brand',
    value: 'brand',
  },
  neutral: {
    label: 'Neutral',
    value: 'neutral',
  },
}

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  linkStyles?: LinkStyles[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
}) => Field

export const link: LinkType = ({
  appearances,
  linkStyles,
  disableLabel = false,
  overrides = {},
} = {}) => {
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

  if (linkStyles !== false) {
    let linkStylesOptionsToUse = [linkStylesOptions.brand, linkStylesOptions.neutral]

    if (linkStyles) {
      linkStylesOptionsToUse = linkStyles.map((linkStyle) => linkStylesOptions[linkStyle])
    }

    linkResult.fields.push({
      name: 'linkStyle',
      type: 'select',
      admin: {
        description: 'Choose the button style.',
      },
      defaultValue: 'brand',
      options: linkStylesOptionsToUse,
    })
  }
  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.primary,
      appearanceOptions.secondary,
      appearanceOptions.tertiary,
      appearanceOptions.ghost,
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
        defaultValue: 'primary',
        options: appearanceOptionsToUse,
      },
    )
    // linkResult.fields.push({
    //   name: 'icon',
    //   type: 'group',
    //   fields: [
    //     iconPickerField({
    //       name: 'icon',
    //       label: 'React Icons',
    //       reactIconPack: lucideIcons,
    //     }),
    //     {
    //       name: 'iconDir',
    //       label: 'Icon Direction',
    //       type: 'select',
    //       options: [
    //         { label: 'Left', value: 'row' },
    //         { label: 'Right', value: 'row-reverse' },
    //       ],
    //     },
    //   ],
    // })
  }

  return deepMerge(linkResult, overrides)
}
