import React from 'react'
import { FeaturesBlock } from './types'
import { getVariantComponent } from './variants/VariantSelector'

export const FeaturesBlockComponent: React.FC<FeaturesBlock> = (props) => {
  const { layout = '01', columns, blockImage, blockHeader } = props

  const VariantComponent = getVariantComponent(layout)

  return (
    <div className="container">
      <VariantComponent columns={columns || []} blockImage={blockImage} blockHeader={blockHeader} />
    </div>
  )
}
