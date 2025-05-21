import React from 'react'
import { cn } from '@/utilities/ui'

export type StyledListBlockProps = {
  items: Array<{
    text: string
    id?: string
  }>
  listStyle?: 'bullet' | 'check' | 'numbered' | 'feature'
  blockType: 'styledList'
}

type Props = StyledListBlockProps & {
  className?: string
}

export const StyledListBlock: React.FC<Props> = ({ className, items, listStyle = 'bullet' }) => {
  const listClassMap = {
    bullet: 'list-disc pl-5',
    check: 'pl-5 space-y-2',
    numbered: 'list-decimal pl-5',
    feature: 'flex flex-col gap-4',
  }

  if (listStyle === 'feature') {
    return (
      <div className={cn('my-6', className)}>
        <ul className={listClassMap[listStyle]}>
          {items.map((item, index) => (
            <li key={item.id || index} className="m-0 flex w-full items-center gap-4">
              <div className="flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m-7-6A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </div>
              <p className="m-0">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className={cn('my-4', className)}>
      {listStyle === 'check' ? (
        <ul className={listClassMap[listStyle]}>
          {items.map((item, index) => (
            <li key={item.id || index} className="flex items-start">
              <span className="mr-2 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className={listClassMap[listStyle]}>
          {items.map((item, index) => (
            <li key={item.id || index}>{item.text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
