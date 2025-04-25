import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { getVariantComponent } from './variants/VariantSelector'

export const FeaturesBlockComponent: React.FC<FeaturesBlock> = (props) => {
  const { layout = '01', columns, blockImage, blockHeader, link, CTALabel, blockType } = props

  const VariantComponent = getVariantComponent(layout)

  return (
    <div className="container">
      <VariantComponent
        columns={columns || []}
        blockImage={blockImage}
        blockHeader={blockHeader}
        link={link}
        CTALabel={CTALabel}
        layout={layout}
        blockType={blockType}
      />
    </div>
  )
}
