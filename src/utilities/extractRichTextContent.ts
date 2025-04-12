export const extractHeading = (content: any) => {
  if (!content || !content.root || !content.root.children) return ''

  const headingNode = content.root.children.find((child: any) => child.type === 'heading')

  if (headingNode && headingNode.children && headingNode.children.length > 0) {
    return headingNode.children.map((textNode: any) => textNode.text || '').join(' ')
  }

  return ''
}

export const getContentWithoutHeading = (content: any) => {
  if (!content || !content.root || !content.root.children) return content

  const contentCopy = JSON.parse(JSON.stringify(content))

  contentCopy.root.children = contentCopy.root.children.filter(
    (child: any) => child.type !== 'heading' && child.tag !== 'h3',
  )

  return contentCopy
}
