import React from 'react'
import { FeaturesBlock } from '@/payload-types'
import { RenderFeaturesBlock } from './RenderFeaturesBlock'

type FeaturesBlockProps = FeaturesBlock & {
  locale?: string
}

export const FeaturesBlockComponent: React.FC<FeaturesBlockProps> = (props) => {
  return <RenderFeaturesBlock {...props} />
}
