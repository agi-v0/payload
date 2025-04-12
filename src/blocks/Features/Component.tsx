import React from 'react'
import { BlockHeader } from '../BlockHeader'
import { FeaturesBlock } from './types'

import { GridVariant } from './variants/Grid'
import { CardsVariant } from './variants/Cards'

import { CarouselVariant } from './variants/Carousel'

// import { IconGridVariant } from './variants/IconGrid'

import { HorizontalVariant } from './variants/Horizontal'
import { MasonryVariant } from './variants/Masonry'
import { TabsVariant } from './variants/Tabs'
import { AccordionVariant } from './variants/Accordion'

// Component to render the appropriate variant based on layout
export const FeaturesBlockComponent: React.FC<FeaturesBlock> = (props) => {
  const { layout, blockHeader, columns, showBadge, badgeConfig } = props

  const VariantComponent = {
    grid: GridVariant,
    cards: CardsVariant,

    carousel: CarouselVariant,

    iconGrid: IconGridVariant,

    horizontal: HorizontalVariant,
    masonry: MasonryVariant,
    tabs: TabsVariant,
    accordion: AccordionVariant,
  }[layout || 'grid']

  // Fallback to grid if layout doesn't match any variant
  const Component = VariantComponent || GridVariant

  return (
    <div className="container my-16">
      {blockHeader && <BlockHeader {...blockHeader} className="pt-12 md:pt-20" />}
      {layout === 'accordion' ? (
        <Component columns={columns || []} />
      ) : (
        <Component columns={columns || []} showBadge={showBadge} badgeConfig={badgeConfig} />
      )}
    </div>
  )
}
