import { blockHeader } from '@/components/BlockHeader/config'
import { logos } from '@/fields/logos'

import type { Block } from 'payload'

export const LogoBlock: Block = {
  slug: 'logoBlock',
  interfaceName: 'LogoBlock',
  fields: [
    blockHeader,
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { value: '01', label: '01' },
        { value: '02', label: '01' },
      ],
    },
    logos(),
  ],
}
