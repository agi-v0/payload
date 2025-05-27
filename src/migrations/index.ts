import * as migration_20250527_171524_init from './20250527_171524_init';

export const migrations = [
  {
    up: migration_20250527_171524_init.up,
    down: migration_20250527_171524_init.down,
    name: '20250527_171524_init'
  },
];
