import * as migration_20250512_220525_init from './20250512_220525_init';

export const migrations = [
  {
    up: migration_20250512_220525_init.up,
    down: migration_20250512_220525_init.down,
    name: '20250512_220525_init'
  },
];
