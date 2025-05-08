import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { getVariantComponent } from './variants/VariantSelector'

type FeaturesBlockProps = FeaturesBlock & {
  locale?: string
}

export const FeaturesBlockComponent: React.FC<FeaturesBlockProps> = (props) => {
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

  return <VariantComponent columns={columns || []} {...props} />
}
