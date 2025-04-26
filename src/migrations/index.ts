import * as migration_20250425_180952_reset from './20250425_180952_reset';

export const migrations = [
  {
    up: migration_20250425_180952_reset.up,
    down: migration_20250425_180952_reset.down,
    name: '20250425_180952_reset'
  },
];
