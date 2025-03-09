import React from 'react'

import type { Page } from '@/payload-types'

import { Hero01 } from '@/heros/Hero01'
import { Hero02 } from '@/heros/Hero02'
import { Hero03 } from '@/heros/Hero03'
import { Hero04 } from '@/heros/Hero04'
import { Hero05 } from '@/heros/Hero05'
import { Hero06 } from '@/heros/Hero06'
import { Hero07 } from '@/heros/Hero07'

const heroes = {
  hero01: Hero01,
  hero02: Hero02,
  hero03: Hero03,
  hero04: Hero04,
  hero05: Hero05,
  hero06: Hero06,
  hero07: Hero07,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
