import * as migration_20250113_200624 from './20250113_200624'

export const migrations = [
  {
    up: migration_20250113_200624.up,
    down: migration_20250113_200624.down,
    name: '20250113_200624',
  },
]
