import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_features_columns" RENAME COLUMN "tab_tab_label" TO "tab_label";
  ALTER TABLE "_pages_v_blocks_features_columns" RENAME COLUMN "tab_tab_label" TO "tab_label";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_icon";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_icon";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "tab_tab_label" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "tab_tab_icon" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "tab_tab_label" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "tab_tab_icon" varchar;
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "tab_label";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "tab_label";`)
}
