import { Button, type ButtonProps } from '@/components/ui/button'

import { cn } from '@/utilities/ui'
import { Link } from '@/i18n/routing'
import React from 'react'

import type { Page, Post, Solution } from '@/payload-types'
import { DynamicIcon } from 'lucide-react/dynamic'

export type CMSLinkType = {
  variant?: 'inline' | ButtonProps['variant'] | null
  color?: ButtonProps['color'] | null
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts' | 'solutions'
    value: Page | Post | Solution | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
  icon?: string | null
  onClick?: () => void
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
    icon,
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
    <Button asChild className={className} size={size} variant={variant} color={color || 'neutral'}>
      <Link className={cn(className)} href={href || url || ''} {...newTabProps}>
        {icon && <DynamicIcon name={icon as any} className="size-3" />}
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
