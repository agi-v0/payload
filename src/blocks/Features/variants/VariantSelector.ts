import React from 'react'
import { FeaturesBlock } from '@/payload-types'

// Import all variants
import { Variant01 } from './Variant-01'
import { Variant02 } from './Variant-02'
import { Variant03 } from './Variant-03'
import { Variant04 } from './Variant-04'
import { Variant05 } from './Variant-05'
import { Variant06 } from './Variant-06'
import { Variant07 } from './Variant-07'
import { Variant08 } from './Variant-08'
import { Variant09 } from './Variant-09'
import { Variant10 } from './Variant-10'
import { Variant11 } from './Variant-11'
import { Variant12 } from './Variant-12'
import { Variant13 } from './Variant-13'
import { Variant14 } from './Variant-14'
import { Variant15 } from './Variant-15'
import { Variant16 } from './Variant-16'
import { Variant17 } from './Variant-17'

export const getVariantComponent = (variant: string = '01'): React.FC<FeaturesBlock> => {
  const variantMap: Record<string, React.FC<FeaturesBlock>> = {
    '01': Variant01,
    '02': Variant02,
    '03': Variant03,
    '04': Variant04,
    '05': Variant05,
    '06': Variant06,
    '07': Variant07,
    '08': Variant08,
    '09': Variant09,
    '10': Variant10,
    '11': Variant11,
    '12': Variant12,
    '13': Variant13,
    '14': Variant14,
    '15': Variant15,
    '16': Variant16,
    '17': Variant17,
  }

  return variantMap[variant] || Variant01
}
