import * as migration_20250517_121943_init from './20250517_121943_init';

export const migrations = [
  {
    up: migration_20250517_121943_init.up,
    down: migration_20250517_121943_init.down,
    name: '20250517_121943_init'
  },
];
