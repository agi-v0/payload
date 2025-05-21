import React from 'react'

import { HeroProps } from '@/types/hero'
import { Page } from '@/payload-types'

import { Hero01 } from '@/heros/Hero01'
import { Hero02 } from '@/heros/Hero02'
import { Hero03 } from '@/heros/Hero03'
import { Hero04 } from '@/heros/Hero04'
import { Hero05 } from '@/heros/Hero05'

const heroes = {
  hero01: Hero01,
  hero02: Hero02,
  hero03: Hero03,
  hero04: Hero04,
  hero05: Hero05,
}

export const RenderHero: React.FC<HeroProps> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type as keyof typeof heroes]

  if (!HeroToRender) return null

  // Type assertion to ensure props match the expected type
  return <HeroToRender {...(props as Page['hero'])} />
}
