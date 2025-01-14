import * as migration_20250113_200624 from './20250113_200624';
import * as migration_20250114_124656 from './20250114_124656';

export const migrations = [
  {
    up: migration_20250113_200624.up,
    down: migration_20250113_200624.down,
    name: '20250113_200624',
  },
  {
    up: migration_20250114_124656.up,
    down: migration_20250114_124656.down,
    name: '20250114_124656'
  },
];
