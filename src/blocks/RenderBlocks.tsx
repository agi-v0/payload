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
import { RenderCustomHtmlBlock } from './CustomHtmlBlock/RenderCustomHtmlBlock'
import { RenderDividerBlock } from './DividerBlock/RenderDividerBlock'
import { RenderLogoBlock } from './Logos/RenderLogoBlock'
import { RenderRichTextBlock } from './RichText/RenderRichTextBlock'

const blockComponents = {
  archive: ArchiveBlock,
  callToAction: RenderCallToActionBlock,
  customHtml: RenderCustomHtmlBlock,
  divider: RenderDividerBlock,
  faqBlock: RenderFAQBlock,
  featuredApps: RenderFeaturedAppsBlock,
  features: RenderFeaturesBlock,
  formBlock: FormBlock,
  gallery: RenderGalleryBlock,
  logoBlock: RenderLogoBlock,
  mediaBlock: MediaBlock,
  richText: RenderRichTextBlock,
  testimonials: RenderTestimonialsBlock,
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
              !(block?.blockType === 'features' && ['06', '07', '17'].includes(block.type)) &&
              !(block.blockType === 'featuredApps' && block.type === '01') &&
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
