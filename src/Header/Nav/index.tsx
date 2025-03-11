'use client'

import React from 'react'
import { useLocale } from 'next-intl'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const locale = useLocale()

  return (
    <nav className="flex items-center gap-3">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} color="brand" variant="link" />
      })}
      <Link href={`/${locale}/search`}>
        <span className="sr-only">Search</span>
        <SearchIcon className="text-primary w-5" />
      </Link>
    </nav>
  )
}
