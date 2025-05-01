import React, { Fragment } from 'react'
import type { GalleryBlock as GalleryBlockType } from '@/payload-types'
// import { RenderBlockHeader } from '@/blocks/BlockHeader/RenderBlockHeader' // BlockHeader path not found
import { Gallery01 } from './Gallery01'
import { Gallery02 } from './Gallery02'
// Gallery03 component is not yet created, so it's commented out or omitted
// import { Gallery03 } from './Gallery03'

const blockComponents = {
  gallery01: Gallery01,
  gallery02: Gallery02,
  // gallery03: Gallery03,
}

export const RenderGalleryBlock: React.FC<GalleryBlockType> = async (props) => {
  const { type, blockHeader, images } = props // blockHeader is available but not used for rendering yet

  // Ensure images exist and are an array before proceeding
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.warn('GalleryBlock: No images provided.')
    return null
  }

  const BlockComponent = blockComponents[type as keyof typeof blockComponents]

  if (!BlockComponent) {
    console.warn(`GalleryBlock: Component for type "${type}" not found.`)
    return null
  }

  return (
    <Fragment>
      {/* {blockHeader && <RenderBlockHeader blockHeader={blockHeader} />} // Commented out until BlockHeader is available */}
      {/* Pass only the images array to the specific variant component */}
      <BlockComponent images={images} />
    </Fragment>
  )
}
