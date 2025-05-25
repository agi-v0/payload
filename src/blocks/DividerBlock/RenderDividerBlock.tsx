import React from 'react'
// No specific props from Payload needed if fields is empty
// import { DividerBlock as DividerBlockType } from '@/payload-types'

// We don't strictly need props if there are no fields in the block,
// but keeping it for consistency or if a blockName is passed through RenderBlocks.
interface RenderDividerBlockProps {
  blockName?: string // Optional: if RenderBlocks passes it
  // Add other props if they are ever passed, like id from block settings
  size: string
  enableDivider: boolean
}

export const RenderDividerBlock: React.FC<RenderDividerBlockProps> = (props) => {
  const { size, enableDivider } = props
  return (
    <div
      data-size={size}
      className="data-[size=small]:py-space-xl container data-[size=large]:py-[calc(var(--spacing-space-xl)*3)] data-[size=medium]:py-[calc(var(--spacing-space-xl)*2)]"
    >
      {enableDivider && <hr className="border-border w-full" />}
    </div>
  )
}
