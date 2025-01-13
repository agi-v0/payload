import * as migration_20250113_065100 from './20250113_065100';

export const migrations = [
  {
    up: migration_20250113_065100.up,
    down: migration_20250113_065100.down,
    name: '20250113_065100'
  },
];
