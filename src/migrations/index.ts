import * as migration_20250527_185443_init from './20250527_185443_init';

export const migrations = [
  {
    up: migration_20250527_185443_init.up,
    down: migration_20250527_185443_init.down,
    name: '20250527_185443_init'
  },
];
