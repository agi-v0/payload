import * as migration_20250430_175706_initial from './20250430_175706_initial';

export const migrations = [
  {
    up: migration_20250430_175706_initial.up,
    down: migration_20250430_175706_initial.down,
    name: '20250430_175706_initial'
  },
];
