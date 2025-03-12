import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'hero06', 'hero07');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
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
  `)
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
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_hero_type";
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'highImpact', 'mediumImpact', 'lowImpact');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
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
