import * as LucideIcons from 'lucide-react'
import LucideIconSelectClient from './LucideIconSelectClient'

// Get all icon names from LucideIcons and create a mapping
export const Icons = Object.entries(LucideIcons).reduce(
  (acc, [key, value]) => {
    if (
      typeof value === 'object' &&
      value !== null &&
      '$$typeof' in value &&
      key === (value as { displayName?: string }).displayName
    ) {
      acc[key] = key
    }
    return acc
  },
  {} as Record<string, string>,
)

// Uncomment to debug the number of icons
console.log('***** DEBUG: Final Icons count:', Object.keys(Icons).length)

export type IconType = (typeof Icons)[keyof typeof Icons]

type LucideIconSelectProps = {
  path: string
}

const LucideIconSelect = ({ path }: LucideIconSelectProps) => {
  const options = Object.entries(Icons).map(([label, value]) => ({
    label,
    value,
  }))

  return <LucideIconSelectClient path={path} options={options} />
}

export default LucideIconSelect
