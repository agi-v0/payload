import { Fragment } from 'react'

import { Page } from '@/payload-types'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { StyledListBlock } from '@/blocks/StyledList/Component'
import { RenderBlockHeader } from '@/blocks/BlockHeader/RenderBlockHeader'
import { BlockHeaderType } from '@/types/blockHeader'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

// Define a type for our blocks that includes the blockHeader property
type BlockWithHeader = Page['layout'][0] & BlockHeaderType

export const RenderBlocks: React.FC<{
  blocks: BlockWithHeader[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div className="my-20" key={index}>
                  {block.blockHeader && (
                    <RenderBlockHeader
                      type={block.blockHeader.type}
                      blockHeader={block.blockHeader}
                    />
                  )}

                  <Block {...(block as any)} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }
  return null
}
