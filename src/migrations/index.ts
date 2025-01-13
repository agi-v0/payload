import * as migration_20250113_195842 from './20250113_195842';

export const migrations = [
  {
    up: migration_20250113_195842.up,
    down: migration_20250113_195842.down,
    name: '20250113_195842'
  },
];
