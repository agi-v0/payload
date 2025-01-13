import * as migration_20250113_065100 from './20250113_065100';
import * as migration_20250113_084312 from './20250113_084312';
import * as migration_20250113_103908 from './20250113_103908';

export const migrations = [
  {
    up: migration_20250113_065100.up,
    down: migration_20250113_065100.down,
    name: '20250113_065100',
  },
  {
    up: migration_20250113_084312.up,
    down: migration_20250113_084312.down,
    name: '20250113_084312',
  },
  {
    up: migration_20250113_103908.up,
    down: migration_20250113_103908.down,
    name: '20250113_103908'
  },
];
