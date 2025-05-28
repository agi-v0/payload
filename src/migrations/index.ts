import * as migration_20250527_185443_init from './20250527_185443_init';
import * as migration_20250528_175306 from './20250528_175306';

export const migrations = [
  {
    up: migration_20250527_185443_init.up,
    down: migration_20250527_185443_init.down,
    name: '20250527_185443_init',
  },
  {
    up: migration_20250528_175306.up,
    down: migration_20250528_175306.down,
    name: '20250528_175306'
  },
];
