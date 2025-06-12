import React from 'react'
import { TypedLocale } from 'payload'

import { Faq, FaqBlock, FeaturedAppsBlock } from '@/payload-types'

import { FAQBlock01 } from './FAQBlock01'
import { FAQBlock02 } from './FAQBlock02'

const FAQBlocks = {
  '01': FAQBlock01,
  '02': FAQBlock02,
}

type FeaturedAppsBlockWithLocale = FeaturedAppsBlock & {
  locale: TypedLocale
}

export const RenderFAQBlock: React.FC<FaqBlock> = async (props) => {
  const { type, blockHeader, faqs } = props || {}

  if (!type) return null

  const FAQBlockToRender = FAQBlocks[type as keyof typeof FAQBlocks]

  return <FAQBlockToRender {...props} />
}
