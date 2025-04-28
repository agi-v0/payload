import * as migration_20250425_180952_reset from './20250425_180952_reset';
import * as migration_20250428_120910 from './20250428_120910';

export const migrations = [
  {
    up: migration_20250425_180952_reset.up,
    down: migration_20250425_180952_reset.down,
    name: '20250425_180952_reset',
  },
  {
    up: migration_20250428_120910.up,
    down: migration_20250428_120910.down,
    name: '20250428_120910'
  },
];
