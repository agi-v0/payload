import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "app_icons" ADD COLUMN "prefix" varchar DEFAULT 'app-icons';
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "app_icons" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";`)
}
