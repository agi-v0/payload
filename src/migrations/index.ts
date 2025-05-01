import * as migration_20250430_175706_initial from './20250430_175706_initial';
import * as migration_20250501_121019 from './20250501_121019';

export const migrations = [
  {
    up: migration_20250430_175706_initial.up,
    down: migration_20250430_175706_initial.down,
    name: '20250430_175706_initial',
  },
  {
    up: migration_20250501_121019.up,
    down: migration_20250501_121019.down,
    name: '20250501_121019'
  },
];
