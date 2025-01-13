import * as migration_20250113_200624 from './20250113_200624';
import * as migration_20250113_212056 from './20250113_212056';

export const migrations = [
  {
    up: migration_20250113_200624.up,
    down: migration_20250113_200624.down,
    name: '20250113_200624',
  },
  {
    up: migration_20250113_212056.up,
    down: migration_20250113_212056.down,
    name: '20250113_212056'
  },
];
