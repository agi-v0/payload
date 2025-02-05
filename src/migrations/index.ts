import * as migration_20250205_172222_initial from './20250205_172222_initial'

export const migrations = [
  {
    up: migration_20250205_172222_initial.up,
    down: migration_20250205_172222_initial.down,
    name: '20250205_172222_initial',
  },
]
