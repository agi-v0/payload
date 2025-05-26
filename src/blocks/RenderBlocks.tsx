import { Fragment } from 'react'

import { Page } from '@/payload-types'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { RenderFeaturesBlock } from '@/blocks/Features/RenderFeaturesBlock'
import { BlockHeader } from '@/components/BlockHeader'
import { BlockHeaderType } from '@/types/blockHeader'
import { RenderFeaturedAppsBlock } from './FeaturedApps/RenderFeaturedAppsBlock'
import { RenderTestimonialsBlock } from './Testimonials/RenderTestimonialsBlock'
import { RenderFAQBlock } from './FAQ/RenderFAQBlock'
import { RenderGalleryBlock } from './Gallery/RenderGalleryBlock'
import { RenderCallToActionBlock } from './CallToAction/RenderCallToActionBlock'
import { RenderCustomHtmlBlock } from './CustomHTML/RenderCustomHtmlBlock'
import { RenderDividerBlock } from './Divider/RenderDividerBlock'
import { RenderLogoBlock } from './Logos/RenderLogoBlock'
import { RenderRichTextBlock } from './RichText/RenderRichTextBlock'

const blockComponents = {
  archiveBlock: ArchiveBlock,
  callToActionBlock: RenderCallToActionBlock,
  customHtmlBlock: RenderCustomHtmlBlock,
  dividerBlock: RenderDividerBlock,
  faqBlock: RenderFAQBlock,
  featuredAppsBlock: RenderFeaturedAppsBlock,
  featuresBlock: RenderFeaturesBlock,
  formBlock: FormBlock,
  galleryBlock: RenderGalleryBlock,
  logoBlock: RenderLogoBlock,
  mediaBlock: MediaBlock,
  richTextBlock: RenderRichTextBlock,
  testimonialsBlock: RenderTestimonialsBlock,
}

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
          <div id={block.blockName || undefined} className="*:first:pt-xl *:last:pb-xl" key={index}>
            {blockHeader &&
              !(block?.blockType === 'featuresBlock' && ['06', '07', '17'].includes(block.type)) &&
              !(block.blockType === 'featuredAppsBlock' && block.type === '01') &&
              !(block.blockType === 'faqBlock' && block.type === '02') && (
                <BlockHeader {...blockHeader} className="" />
              )}
            <Block {...(block as any)} locale={locale} />
          </div>
        )
      })}
    </Fragment>
  )
}
