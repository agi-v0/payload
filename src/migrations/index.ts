import * as migration_20250425_180952_reset from './20250425_180952_reset';
import * as migration_20250428_120910 from './20250428_120910';
import * as migration_20250428_142932_add from './20250428_142932_add';
import * as migration_20250428_224003 from './20250428_224003';
import * as migration_20250429_095546 from './20250429_095546';

export const migrations = [
  {
    up: migration_20250425_180952_reset.up,
    down: migration_20250425_180952_reset.down,
    name: '20250425_180952_reset',
  },
  {
    up: migration_20250428_120910.up,
    down: migration_20250428_120910.down,
    name: '20250428_120910',
  },
  {
    up: migration_20250428_142932_add.up,
    down: migration_20250428_142932_add.down,
    name: '20250428_142932_add',
  },
  {
    up: migration_20250428_224003.up,
    down: migration_20250428_224003.down,
    name: '20250428_224003',
  },
  {
    up: migration_20250429_095546.up,
    down: migration_20250429_095546.down,
    name: '20250429_095546'
  },
];
