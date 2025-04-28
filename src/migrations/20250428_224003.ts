import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_features_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum__pages_v_blocks_features_locale" AS ENUM('en', 'ar');
  ALTER TABLE "pages_blocks_features_columns" DROP CONSTRAINT "pages_blocks_features_columns_app_reference_id_apps_id_fk";
  
  ALTER TABLE "_pages_v_blocks_features_columns" DROP CONSTRAINT "_pages_v_blocks_features_columns_app_reference_id_apps_id_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_features_columns_app_reference_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_features_columns_app_reference_idx";
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "tab_tab_label" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "tab_tab_icon" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "content_subtitle" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "rich_text_content" jsonb;
  ALTER TABLE "pages_blocks_features" ADD COLUMN "locale" "enum_pages_blocks_features_locale";
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "tab_tab_label" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "tab_tab_icon" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "content_subtitle" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "rich_text_content" jsonb;
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "locale" "enum__pages_v_blocks_features_locale";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "app_reference_id";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "tab_label";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "content_copy";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "content_features_rich_text";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "app_reference_id";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "tab_label";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "content_copy";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "content_features_rich_text";
  ALTER TABLE "app_icons" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "app_reference_id" integer;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "tab_label" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "content_copy" varchar;
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "content_features_rich_text" jsonb;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "app_reference_id" integer;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "tab_label" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "content_copy" varchar;
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "content_features_rich_text" jsonb;
  ALTER TABLE "app_icons" ADD COLUMN "prefix" varchar DEFAULT 'app-icons';
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_features_columns" ADD CONSTRAINT "pages_blocks_features_columns_app_reference_id_apps_id_fk" FOREIGN KEY ("app_reference_id") REFERENCES "public"."apps"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_features_columns" ADD CONSTRAINT "_pages_v_blocks_features_columns_app_reference_id_apps_id_fk" FOREIGN KEY ("app_reference_id") REFERENCES "public"."apps"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_features_columns_app_reference_idx" ON "pages_blocks_features_columns" USING btree ("app_reference_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_features_columns_app_reference_idx" ON "_pages_v_blocks_features_columns" USING btree ("app_reference_id");
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_label";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_icon";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "content_subtitle";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "rich_text_content";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "locale";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_label";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "tab_tab_icon";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "content_subtitle";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "rich_text_content";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "locale";
  DROP TYPE "public"."enum_pages_blocks_features_locale";
  DROP TYPE "public"."enum__pages_v_blocks_features_locale";`)
}
