import { Button, type ButtonProps } from '@/components/ui/button'

import { cn } from '@/utilities/ui'
import { Link } from '@/i18n/routing'
import React from 'react'

import type { Page, Post } from '@/payload-types'
import { ArrowLeft } from 'lucide-react'

type CMSLinkType = {
  variant?: 'inline' | ButtonProps['variant'] | null
  color?: ButtonProps['color']
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Post | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {
  const {
    type,
    color = 'neutral',
    variant = 'ghost',
    children,
    className,
    label,
    newTab,
    reference,
    size: sizeFromProps,
    url,
  } = props

  // console.log('reference ', reference)
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ``}/${
          reference.value.slug
        }`
      : url
  // console.log(href)
  if (!href) return null

  const size = variant === 'inline' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  /* Ensure we don't break any styles set by richText */
  if (variant === 'inline') {
    return (
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    )
  }

  return (
    <Button asChild className={className} size={size} variant={variant} color={color}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
