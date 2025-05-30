import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'

import type { Header } from '@/payload-types'

export async function Header() {
  const headerData = (await getCachedGlobal('header', 2)()) as Header
  return <HeaderClient {...headerData} />
}
