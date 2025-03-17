import React from 'react'

import type { Page } from '@/payload-types'

import { BlockHeader01 } from '@/blocks/BlockHeader/BlockHeader01'
import { BlockHeader02 } from '@/blocks/BlockHeader/BlockHeader02'
import { BlockHeader03 } from '@/blocks/BlockHeader/BlockHeader03'
import { BlockHeader04 } from '@/blocks/BlockHeader/BlockHeader04'

const blockHeaders = {
  blockheader01: BlockHeader01,
  blockheader02: BlockHeader02,
  blockheader03: BlockHeader03,
  blockheader04: BlockHeader04,
}

export const RenderBlockHeader: React.FC<Page['layout'][0]> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const BlockHeaderToRender = blockHeaders[type as keyof typeof blockHeaders]

  if (!BlockHeaderToRender) return null

  return <BlockHeaderToRender {...props} />
}
