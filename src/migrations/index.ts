import * as migration_20250511_013839_init from './20250511_013839_init';

export const migrations = [
  {
    up: migration_20250511_013839_init.up,
    down: migration_20250511_013839_init.down,
    name: '20250511_013839_init'
  },
];
