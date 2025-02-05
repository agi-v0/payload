import * as migration_20250205_085049 from './20250205_085049'

export const migrations = [
  {
    up: migration_20250205_085049.up,
    down: migration_20250205_085049.down,
    name: '20250205_085049',
  },
]
