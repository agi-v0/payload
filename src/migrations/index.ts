import * as migration_20250527_185443_init from './20250527_185443_init';
import * as migration_20250528_175306 from './20250528_175306';
import * as migration_20250531_213347 from './20250531_213347';
import * as migration_20250601_090818 from './20250601_090818';
import * as migration_20250602_161514 from './20250602_161514';
import * as migration_20250611_205249 from './20250611_205249';

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
    up: migration_20250601_090818.up,
    down: migration_20250601_090818.down,
    name: '20250601_090818',
  },
  {
    up: migration_20250602_161514.up,
    down: migration_20250602_161514.down,
    name: '20250602_161514',
  },
  {
    up: migration_20250611_205249.up,
    down: migration_20250611_205249.down,
    name: '20250611_205249'
  },
];
