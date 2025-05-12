import * as migration_20250512_201509_init from './20250512_201509_init';

export const migrations = [
  {
    up: migration_20250512_201509_init.up,
    down: migration_20250512_201509_init.down,
    name: '20250512_201509_init'
  },
];
