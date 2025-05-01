import { Fragment } from 'react'

import { Page } from '@/payload-types'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { FeaturesBlockComponent } from '@/blocks/Features/Component'
import { BlockHeader } from '@/components/BlockHeader'
import { BlockHeaderType } from '@/types/blockHeader'
import { RenderAppsBlock } from './AppsBlock/RenderAppsBlock'
import { RenderTestimonialsBlock } from './TestimonialsBlock/RenderTestimonialsBlock'
import { FaqBlock } from './FaqBlock/Component'
import { RenderGalleryBlock } from './Gallery/RenderGalleryBlock'

const blockComponents = {
  archive: ArchiveBlock,
  apps: RenderAppsBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  faqBlock: FaqBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  testimonials: RenderTestimonialsBlock,
  features: FeaturesBlockComponent,
  gallery: RenderGalleryBlock,
}

// Define a type for our blocks that includes the blockHeader property
type BlockWithHeader = {
  blockHeader?: BlockHeaderType
} & Page['layout'][0]

export const RenderBlocks: React.FC<{
  locale: string
  blocks: BlockWithHeader[]
}> = (props) => {
  const { blocks, locale } = props

  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null
  }

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType, blockHeader } = block
        const Block = blockComponents[blockType as keyof typeof blockComponents]

        if (!Block) {
          return null
        }

        return (
          <div id={block.blockName || undefined} className="pt-xl" key={index}>
            {blockHeader && <BlockHeader {...blockHeader} className="" />}
            <Block {...(block as any)} locale={locale} />
          </div>
        )
      })}
    </Fragment>
  )
}
