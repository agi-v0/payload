import React from 'react'

import { FeaturedAppsBlock as AppsBlockProps } from '@/payload-types'
import { Page } from '@/payload-types'

import { FeaturedApps01 } from './FeaturedApps01'
import { FeaturedApps02 } from './FeaturedApps02'
import { FeaturedApps03 } from './FeaturedApps03'
import { FeaturedApps04 } from './FeaturedApps04'
import { AppsBlockHero } from './AppsBlockHero'

const appsBlocks = {
  featuredApps01: FeaturedApps01,
  featuredApps02: FeaturedApps02,
  featuredApps03: FeaturedApps03,
  featuredApps04: FeaturedApps04,
  featuredAppsBlockHero: AppsBlockHero,
}

export const RenderFeaturedAppsBlock: React.FC<AppsBlockProps> = (props) => {
  const { type } = props || {}
  if (!type) return null

  const AppsBlockToRender = appsBlocks[type as keyof typeof appsBlocks]

  if (!AppsBlockToRender) return null

  return <AppsBlockToRender {...props} />
}
