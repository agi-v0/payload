import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero01';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero02';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero03';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero04';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero05';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero06';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero07';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero01';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero02';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero03';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero04';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero05';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero06';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero07';
  CREATE TABLE IF NOT EXISTS "pages_hero_logos_logos_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_logos_logos_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_description" varchar;
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_description" varchar;
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_description" varchar;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_title" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_caption" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_logos_title" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_description" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_description" varchar;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_description" varchar;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_icon" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_title" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_caption" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_logos_title" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos_logos_images" ADD CONSTRAINT "pages_hero_logos_logos_images_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos_logos_images" ADD CONSTRAINT "pages_hero_logos_logos_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos_logos_images" ADD CONSTRAINT "_pages_v_version_hero_logos_logos_images_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos_logos_images" ADD CONSTRAINT "_pages_v_version_hero_logos_logos_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_logos_images_order_idx" ON "pages_hero_logos_logos_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_logos_images_parent_id_idx" ON "pages_hero_logos_logos_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_logos_images_logo_idx" ON "pages_hero_logos_logos_images" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_logos_images_order_idx" ON "_pages_v_version_hero_logos_logos_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_logos_images_parent_id_idx" ON "_pages_v_version_hero_logos_logos_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_logos_images_logo_idx" ON "_pages_v_version_hero_logos_logos_images" USING btree ("logo_id");
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_hero_links_link_appearance" USING "link_appearance"::"public"."enum_pages_hero_links_link_appearance";
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'link');
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_blocks_cta_links_link_appearance" USING "link_appearance"::"public"."enum_pages_blocks_cta_links_link_appearance";
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_blocks_content_columns_link_appearance" USING "link_appearance"::"public"."enum_pages_blocks_content_columns_link_appearance";
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_version_hero_links_link_appearance" USING "link_appearance"::"public"."enum__pages_v_version_hero_links_link_appearance";
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'link');
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" USING "link_appearance"::"public"."enum__pages_v_blocks_cta_links_link_appearance";
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" USING "link_appearance"::"public"."enum__pages_v_blocks_content_columns_link_appearance";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_logos_logos_images" CASCADE;
  DROP TABLE "_pages_v_version_hero_logos_logos_images" CASCADE;
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';
  ALTER TABLE "pages_hero_links" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "pages_hero_links" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_title";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_caption";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_logos_title";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN IF EXISTS "link_description";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN IF EXISTS "link_icon";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_title";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_caption";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_logos_title";
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_hero_links_link_appearance" USING "link_appearance"::"public"."enum_pages_hero_links_link_appearance";
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_blocks_cta_links_link_appearance" USING "link_appearance"::"public"."enum_pages_blocks_cta_links_link_appearance";
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum_pages_blocks_content_columns_link_appearance" USING "link_appearance"::"public"."enum_pages_blocks_content_columns_link_appearance";
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_version_hero_links_link_appearance" USING "link_appearance"::"public"."enum__pages_v_version_hero_links_link_appearance";
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" USING "link_appearance"::"public"."enum__pages_v_blocks_cta_links_link_appearance";
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_appearance" SET DATA TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" USING "link_appearance"::"public"."enum__pages_v_blocks_content_columns_link_appearance";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";`)
}
