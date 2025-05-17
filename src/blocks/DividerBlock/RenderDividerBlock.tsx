import React from 'react'
// No specific props from Payload needed if fields is empty
// import { DividerBlock as DividerBlockType } from '@/payload-types'

// We don't strictly need props if there are no fields in the block,
// but keeping it for consistency or if a blockName is passed through RenderBlocks.
interface RenderDividerBlockProps {
  blockName?: string // Optional: if RenderBlocks passes it
  // Add other props if they are ever passed, like id from block settings
}

export const RenderDividerBlock: React.FC<RenderDividerBlockProps> = (props) => {
  return (
    <div className="container">
      <hr className="border-border w-full" />
    </div>
  )
}
