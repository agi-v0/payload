import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { getVariantComponent } from './variants/VariantSelector'

export const FeaturesBlockComponent: React.FC<FeaturesBlock> = (props) => {
  const {
    layout = '01',
    columns,
    blockImage,
    blockHeader,
    link,
    CTALabel,
    blockType,
    locale = 'ar',
  } = props

  const VariantComponent = getVariantComponent(layout)

  return (
    <VariantComponent
      columns={columns || []}
      blockImage={blockImage}
      blockHeader={blockHeader}
      link={link}
      CTALabel={CTALabel}
      layout={layout}
      blockType={blockType}
      locale={locale}
    />
  )
}
