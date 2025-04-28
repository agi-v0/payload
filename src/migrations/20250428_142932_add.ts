import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_features_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_features_link_type" AS ENUM('reference', 'custom');
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "content_features_rich_text" jsonb;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "c_t_a_label" varchar;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "link_type" "enum_pages_blocks_features_link_type" DEFAULT 'reference';
  ALTER TABLE "pages_blocks_features" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "link_url" varchar;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "link_label" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "content_features_rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "c_t_a_label" varchar;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "link_type" "enum__pages_v_blocks_features_link_type" DEFAULT 'reference';
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "link_new_tab" boolean;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "link_url" varchar;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "link_label" varchar;
  ALTER TABLE "app_icons" ADD COLUMN "prefix" varchar DEFAULT 'app-icons';
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "content_features_rich_text";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "c_t_a_label";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "link_type";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "link_new_tab";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "link_label";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "content_features_rich_text";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "c_t_a_label";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "link_type";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "link_new_tab";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "link_label";
  ALTER TABLE "app_icons" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";
  DROP TYPE "public"."enum_pages_blocks_features_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_features_link_type";`)
}
