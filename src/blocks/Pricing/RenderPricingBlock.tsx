import React, { Fragment } from 'react'
import { getLocale, getTranslations } from 'next-intl/server'

import type { PricingBlock as PricingBlockType } from '@/payload-types'
import { PricingBlock01 } from './variants/PricingBlock01'
import { PricingBlock02 } from './variants/PricingBlock02'

// Map block types to components
const blockComponents = {
  '01': PricingBlock01,
  '02': PricingBlock02,
}

export const RenderPricingBlock: React.FC<PricingBlockType> = async (props) => {
  const { type, pricingCards } = props
  const locale = await getLocale()
  const t = await getTranslations('PricingBlock')

  const translations = {
    monthly: t('monthly'),
    annually: t('annually'),
    features: t('features'),
    includedSolutions: t('includedSolutions'),
    integrations: t('integrations'),
  }

  const BlockComponent = blockComponents[type]

  if (!BlockComponent) {
    console.warn(`No component found for pricing block type: ${type}`)
    return null
  }
  console.log(locale)
  return (
    <Fragment>
      <BlockComponent
        pricingCards={pricingCards || []}
        locale={locale}
        translations={translations}
      />
    </Fragment>
  )
}
