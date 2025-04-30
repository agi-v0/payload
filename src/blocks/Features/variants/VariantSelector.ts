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

type FeaturesBlockWithLocale = FeaturesBlock & {
  locale?: string
}

export const getVariantComponent = (variant: string = '01'): React.FC<FeaturesBlockWithLocale> => {
  const variantMap: Record<string, React.FC<FeaturesBlockWithLocale>> = {
    '01': Variant01 as React.FC<FeaturesBlockWithLocale>,
    '02': Variant02 as React.FC<FeaturesBlockWithLocale>,
    '03': Variant03 as React.FC<FeaturesBlockWithLocale>,
    '04': Variant04 as React.FC<FeaturesBlockWithLocale>,
    '05': Variant05 as React.FC<FeaturesBlockWithLocale>,
    '06': Variant06 as React.FC<FeaturesBlockWithLocale>,
    '07': Variant07 as React.FC<FeaturesBlockWithLocale>,
    '08': Variant08 as React.FC<FeaturesBlockWithLocale>,
    '09': Variant09 as React.FC<FeaturesBlockWithLocale>,
    '10': Variant10 as React.FC<FeaturesBlockWithLocale>,
    '11': Variant11 as React.FC<FeaturesBlockWithLocale>,
    '12': Variant12 as React.FC<FeaturesBlockWithLocale>,
    '13': Variant13 as React.FC<FeaturesBlockWithLocale>,
    '14': Variant14 as React.FC<FeaturesBlockWithLocale>,
    '15': Variant15 as React.FC<FeaturesBlockWithLocale>,
    '16': Variant16 as React.FC<FeaturesBlockWithLocale>,
    '17': Variant17 as React.FC<FeaturesBlockWithLocale>,
  }

  return variantMap[variant] || (Variant01 as React.FC<FeaturesBlockWithLocale>)
}
