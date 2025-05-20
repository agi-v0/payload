import * as migration_20250517_121943_init from './20250517_121943_init';
import * as migration_20250520_173204 from './20250520_173204';

export const migrations = [
  {
    up: migration_20250517_121943_init.up,
    down: migration_20250517_121943_init.down,
    name: '20250517_121943_init',
  },
  {
    up: migration_20250520_173204.up,
    down: migration_20250520_173204.down,
    name: '20250520_173204'
  },
];
