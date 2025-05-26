import * as migration_20250526_125325_init from './20250526_125325_init';

export const migrations = [
  {
    up: migration_20250526_125325_init.up,
    down: migration_20250526_125325_init.down,
    name: '20250526_125325_init'
  },
];
