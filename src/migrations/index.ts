import * as migration_20250512_220525_init from './20250512_220525_init';
import * as migration_20250514_191031 from './20250514_191031';

export const migrations = [
  {
    up: migration_20250512_220525_init.up,
    down: migration_20250512_220525_init.down,
    name: '20250512_220525_init',
  },
  {
    up: migration_20250514_191031.up,
    down: migration_20250514_191031.down,
    name: '20250514_191031'
  },
];
