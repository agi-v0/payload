import * as migration_20250512_214432_init from './20250512_214432_init';

export const migrations = [
  {
    up: migration_20250512_214432_init.up,
    down: migration_20250512_214432_init.down,
    name: '20250512_214432_init'
  },
];
