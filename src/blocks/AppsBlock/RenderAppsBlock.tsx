import React from 'react'

import { AppsBlock as AppsBlockProps } from '@/payload-types'
import { Page } from '@/payload-types'

import { AppsBlock01 } from './AppsBlock01'
import { AppsBlock02 } from './AppsBlock02'
import { AppsBlock03 } from './AppsBlock03'
import { AppsBlock04 } from './AppsBlock04'
import { AppsBlockHero } from './AppsBlockHero'

const appsBlocks = {
  appsBlock01: AppsBlock01,
  appsBlock02: AppsBlock02,
  appsBlock03: AppsBlock03,
  appsBlock04: AppsBlock04,
  appsBlockHero: AppsBlockHero,
}

export const RenderAppsBlock: React.FC<AppsBlockProps> = (props) => {
  const { type } = props || {}

  if (!type) return null

  const AppsBlockToRender = appsBlocks[type as keyof typeof appsBlocks]

  if (!AppsBlockToRender) return null

  return <AppsBlockToRender {...props} />
}
