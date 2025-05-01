import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "reverse_order" boolean;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "reverse_order" boolean;
  ALTER TABLE "app_icons" DROP COLUMN IF EXISTS "prefix";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "app_icons" ADD COLUMN "prefix" varchar DEFAULT 'app-icons';
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "reverse_order";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "reverse_order";`)
}
