import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_color" AS ENUM('brand', 'neutral');
  ALTER TYPE "public"."enum_pages_hero_links_link_appearance" RENAME TO "enum_pages_hero_links_link_variant";
  ALTER TYPE "public"."enum_pages_blocks_cta_links_link_appearance" RENAME TO "enum_pages_blocks_cta_links_link_variant";
  ALTER TYPE "public"."enum_pages_blocks_content_columns_link_appearance" RENAME TO "enum_pages_blocks_content_columns_link_variant";
  ALTER TYPE "public"."enum__pages_v_version_hero_links_link_appearance" RENAME TO "enum__pages_v_version_hero_links_link_variant";
  ALTER TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" RENAME TO "enum__pages_v_blocks_cta_links_link_variant";
  ALTER TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" RENAME TO "enum__pages_v_blocks_content_columns_link_variant";
  CREATE TABLE IF NOT EXISTS "pages_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_hero_links" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "pages_blocks_cta_links" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "pages_blocks_content_columns" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "_pages_v_version_hero_links" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "_pages_v_blocks_cta_links" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "_pages_v_blocks_content_columns" RENAME COLUMN "link_appearance" TO "link_variant";
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'hero01';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'hero01';
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_color" "enum_pages_hero_links_link_color" DEFAULT 'brand';
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_color" "enum_pages_blocks_cta_links_link_color" DEFAULT 'brand';
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "supporting_text" varchar;
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_color" "enum_pages_blocks_content_columns_link_color" DEFAULT 'brand';
  ALTER TABLE "pages" ADD COLUMN "hero_supporting_text" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_logos_headline" varchar;
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_color" "enum__pages_v_version_hero_links_link_color" DEFAULT 'brand';
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_color" "enum__pages_v_blocks_cta_links_link_color" DEFAULT 'brand';
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "supporting_text" varchar;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_color" "enum__pages_v_blocks_content_columns_link_color" DEFAULT 'brand';
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_supporting_text" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_logos_headline" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos" ADD CONSTRAINT "_pages_v_version_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_logos" ADD CONSTRAINT "_pages_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_order_idx" ON "pages_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_parent_id_idx" ON "pages_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_logo_idx" ON "pages_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_order_idx" ON "_pages_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_parent_id_idx" ON "_pages_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_logo_idx" ON "_pages_v_version_hero_logos" USING btree ("logo_id");
  ALTER TABLE "media" DROP COLUMN IF EXISTS "prefix";
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."posts_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."posts_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."_posts_v_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_posts_v_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."categories_breadcrumbs" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."categories_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_checkbox_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_country_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_email_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_message_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_number_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_select_options_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_select_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_state_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_text_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_textarea_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_emails_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."search_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."header_nav_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."header_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."footer_nav_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."footer_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('en', 'ar');
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."posts_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."posts_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."_posts_v_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_posts_v_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."categories_breadcrumbs" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."categories_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_checkbox_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_country_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_email_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_message_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_number_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_select_options_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_select_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_state_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_text_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_textarea_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_emails_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."search_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."header_nav_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."header_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."footer_nav_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."footer_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_links_link_variant";
  CREATE TYPE "public"."enum_pages_hero_links_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum_pages_hero_links_link_variant" USING "link_variant"::"public"."enum_pages_hero_links_link_variant";
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_variant";
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum_pages_blocks_cta_links_link_variant" USING "link_variant"::"public"."enum_pages_blocks_cta_links_link_variant";
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_variant";
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum_pages_blocks_content_columns_link_variant" USING "link_variant"::"public"."enum_pages_blocks_content_columns_link_variant";
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'hero06', 'hero07');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_variant";
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum__pages_v_version_hero_links_link_variant" USING "link_variant"::"public"."enum__pages_v_version_hero_links_link_variant";
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum__pages_v_blocks_cta_links_link_variant" USING "link_variant"::"public"."enum__pages_v_blocks_cta_links_link_variant";
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_variant" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_variant";
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "link_variant" SET DATA TYPE "public"."enum__pages_v_blocks_content_columns_link_variant" USING "link_variant"::"public"."enum__pages_v_blocks_content_columns_link_variant";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'hero06', 'hero07');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "published_locale" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_published_locale";
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'ar');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "published_locale" SET DATA TYPE "public"."enum__pages_v_published_locale" USING "published_locale"::"public"."enum__pages_v_published_locale";
  ALTER TABLE "public"."_posts_v" ALTER COLUMN "published_locale" SET DATA TYPE text;
  DROP TYPE "public"."enum__posts_v_published_locale";
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'ar');
  ALTER TABLE "public"."_posts_v" ALTER COLUMN "published_locale" SET DATA TYPE "public"."enum__posts_v_published_locale" USING "published_locale"::"public"."enum__posts_v_published_locale";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default', 'outline');
  ALTER TABLE "pages_hero_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_logos" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_hero_logos" CASCADE;
  DROP TABLE "_pages_v_version_hero_logos" CASCADE;
  ALTER TABLE "pages" ALTER COLUMN "hero_type" SET DEFAULT 'lowImpact';
  ALTER TABLE "_pages_v" ALTER COLUMN "version_hero_type" SET DEFAULT 'lowImpact';
  ALTER TABLE "pages_hero_links" ADD COLUMN "link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default';
  ALTER TABLE "pages_blocks_cta_links" ADD COLUMN "link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'default';
  ALTER TABLE "pages_blocks_content_columns" ADD COLUMN "link_appearance" "enum_pages_blocks_content_columns_link_appearance" DEFAULT 'default';
  ALTER TABLE "_pages_v_version_hero_links" ADD COLUMN "link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_cta_links" ADD COLUMN "link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'default';
  ALTER TABLE "_pages_v_blocks_content_columns" ADD COLUMN "link_appearance" "enum__pages_v_blocks_content_columns_link_appearance" DEFAULT 'default';
  ALTER TABLE "media" ADD COLUMN "prefix" varchar DEFAULT 'media';
  ALTER TABLE "pages_hero_links" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "pages_hero_links" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "pages_blocks_cta_links" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "supporting_text";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "pages_blocks_content_columns" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_supporting_text";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_logos_headline";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "_pages_v_version_hero_links" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "_pages_v_blocks_cta_links" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "supporting_text";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN IF EXISTS "link_color";
  ALTER TABLE "_pages_v_blocks_content_columns" DROP COLUMN IF EXISTS "link_variant";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_supporting_text";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_logos_headline";
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."pages_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."posts_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."posts_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."_posts_v_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."_posts_v_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."categories_breadcrumbs" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."categories_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_checkbox_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_country_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_email_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_message_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_number_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_select_options_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_select_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_state_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_text_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_blocks_textarea_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_emails_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."forms_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."search_locales" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."header_nav_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."header_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  ALTER TABLE "public"."footer_nav_items" ALTER COLUMN "_locale" SET DATA TYPE text;
  ALTER TABLE "public"."footer_rels" ALTER COLUMN "locale" SET DATA TYPE text;
  DROP TYPE "public"."_locales";
  CREATE TYPE "public"."_locales" AS ENUM('EN', 'AR');
  ALTER TABLE "public"."pages_hero_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."pages_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_version_hero_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_cta_links" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_cta" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_content_columns" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_content" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_media_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_archive" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_blocks_form_block" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_pages_v_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."posts_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."posts_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."_posts_v_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."_posts_v_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."categories_breadcrumbs" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."categories_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_checkbox_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_country_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_email_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_message_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_number_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_select_options_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_select_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_state_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_text_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_blocks_textarea_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_emails_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."forms_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."search_locales" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."header_nav_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."header_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."footer_nav_items" ALTER COLUMN "_locale" SET DATA TYPE "public"."_locales" USING "_locale"::"public"."_locales";
  ALTER TABLE "public"."footer_rels" ALTER COLUMN "locale" SET DATA TYPE "public"."_locales" USING "locale"::"public"."_locales";
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "published_locale" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_published_locale";
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('EN', 'AR');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "published_locale" SET DATA TYPE "public"."enum__pages_v_published_locale" USING "published_locale"::"public"."enum__pages_v_published_locale";
  ALTER TABLE "public"."_posts_v" ALTER COLUMN "published_locale" SET DATA TYPE text;
  DROP TYPE "public"."enum__posts_v_published_locale";
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('EN', 'AR');
  ALTER TABLE "public"."_posts_v" ALTER COLUMN "published_locale" SET DATA TYPE "public"."enum__posts_v_published_locale" USING "published_locale"::"public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_pages_hero_links_link_color";
  DROP TYPE "public"."enum_pages_hero_links_link_variant";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_color";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_variant";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_color";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_variant";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_color";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_variant";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_variant";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_color";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_variant";`)
}
