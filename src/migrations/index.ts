import * as migration_20250527_185443_init from './20250527_185443_init';
import * as migration_20250528_175306 from './20250528_175306';
import * as migration_20250531_213347 from './20250531_213347';
import * as migration_20250531_215144 from './20250531_215144';

export const migrations = [
  {
    up: migration_20250527_185443_init.up,
    down: migration_20250527_185443_init.down,
    name: '20250527_185443_init',
  },
  {
    up: migration_20250528_175306.up,
    down: migration_20250528_175306.down,
    name: '20250528_175306',
  },
  {
    up: migration_20250531_213347.up,
    down: migration_20250531_213347.down,
    name: '20250531_213347',
  },
  {
    up: migration_20250531_215144.up,
    down: migration_20250531_215144.down,
    name: '20250531_215144'
  },
];
