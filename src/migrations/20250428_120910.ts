import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_apps_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_apps_body_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_cta_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_content_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_testimonials_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_features_columns_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_features_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_block_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_pages_blocks_faq_block_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_gallery_block_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_gallery_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_pages_blocks_gallery_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_blocks_gallery_type" AS ENUM('gallery01', 'gallery02', 'gallery03');
  CREATE TYPE "public"."enum_pages_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_apps_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_apps_body_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_content_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_testimonials_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_features_columns_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_features_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_block_header_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_blocks_gallery_type" AS ENUM('gallery01', 'gallery02', 'gallery03');
  CREATE TYPE "public"."enum__pages_v_version_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_apps_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__apps_v_version_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_solutions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_solutions_ecosystem" AS ENUM('sell', 'operate', 'manage');
  CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__solutions_v_version_ecosystem" AS ENUM('sell', 'operate', 'manage');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_published_locale" AS ENUM('en', 'ar');
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_faq_block_block_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_color" "link_color" DEFAULT 'brand',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_pages_blocks_faq_block_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_pages_blocks_faq_block_block_header_badge_type",
  	"block_header_badge_label" varchar,
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"block_header_header_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_gallery_block_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_color" "link_color" DEFAULT 'brand',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"panel_title" varchar,
  	"panel_description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_pages_blocks_gallery_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_pages_blocks_gallery_block_header_badge_type",
  	"block_header_badge_label" varchar,
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"block_header_header_text" jsonb,
  	"type" "enum_pages_blocks_gallery_type" DEFAULT 'gallery01',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_faq_block_block_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_color" "link_color" DEFAULT 'brand',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_header_type" "enum__pages_v_blocks_faq_block_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__pages_v_blocks_faq_block_block_header_badge_type",
  	"block_header_badge_label" varchar,
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"block_header_header_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_gallery_block_header_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_color" "link_color" DEFAULT 'brand',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"panel_title" varchar,
  	"panel_description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"block_header_type" "enum__pages_v_blocks_gallery_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__pages_v_blocks_gallery_block_header_badge_type",
  	"block_header_badge_label" varchar,
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"block_header_header_text" jsonb,
  	"type" "enum__pages_v_blocks_gallery_type" DEFAULT 'gallery01',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "solutions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"link_type" "enum_solutions_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"published_at" timestamp(3) with time zone,
  	"ecosystem" "enum_solutions_ecosystem",
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_solutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_locales" (
  	"name" varchar,
  	"tagline" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"solutions_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_icon_id" integer,
  	"version_link_type" "enum__solutions_v_version_link_type" DEFAULT 'reference',
  	"version_link_new_tab" boolean,
  	"version_link_url" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_ecosystem" "enum__solutions_v_version_ecosystem",
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__solutions_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v_locales" (
  	"version_name" varchar,
  	"version_tagline" varchar,
  	"version_link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"solutions_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "faq" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faq_locales" (
  	"question" varchar,
  	"answer" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "site_config" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_config_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_config_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "site_config" CASCADE;
  DROP TABLE "site_config_locales" CASCADE;
  DROP TABLE "site_config_rels" CASCADE;
  ALTER TABLE "pages_blocks_apps" ADD COLUMN "block_header_badge_type" "enum_pages_blocks_apps_block_header_badge_type";
  ALTER TABLE "pages_blocks_apps" ADD COLUMN "body_badge_type" "enum_pages_blocks_apps_body_badge_type";
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "block_header_badge_type" "enum_pages_blocks_cta_block_header_badge_type";
  ALTER TABLE "pages_blocks_content" ADD COLUMN "block_header_badge_type" "enum_pages_blocks_content_block_header_badge_type";
  ALTER TABLE "pages_blocks_testimonials" ADD COLUMN "block_header_badge_type" "enum_pages_blocks_testimonials_block_header_badge_type";
  ALTER TABLE "pages_blocks_features_columns" ADD COLUMN "badge_type" "enum_pages_blocks_features_columns_badge_type";
  ALTER TABLE "pages_blocks_features" ADD COLUMN "block_header_badge_type" "enum_pages_blocks_features_block_header_badge_type";
  ALTER TABLE "pages" ADD COLUMN "hero_badge_type" "enum_pages_hero_badge_type";
  ALTER TABLE "pages_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "pages_rels" ADD COLUMN "faq_id" integer;
  ALTER TABLE "_pages_v_blocks_apps" ADD COLUMN "block_header_badge_type" "enum__pages_v_blocks_apps_block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_apps" ADD COLUMN "body_badge_type" "enum__pages_v_blocks_apps_body_badge_type";
  ALTER TABLE "_pages_v_blocks_cta" ADD COLUMN "block_header_badge_type" "enum__pages_v_blocks_cta_block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_content" ADD COLUMN "block_header_badge_type" "enum__pages_v_blocks_content_block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_testimonials" ADD COLUMN "block_header_badge_type" "enum__pages_v_blocks_testimonials_block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_features_columns" ADD COLUMN "badge_type" "enum__pages_v_blocks_features_columns_badge_type";
  ALTER TABLE "_pages_v_blocks_features" ADD COLUMN "block_header_badge_type" "enum__pages_v_blocks_features_block_header_badge_type";
  ALTER TABLE "_pages_v" ADD COLUMN "version_hero_badge_type" "enum__pages_v_version_hero_badge_type";
  ALTER TABLE "_pages_v_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "_pages_v_rels" ADD COLUMN "faq_id" integer;
  ALTER TABLE "apps" ADD COLUMN "hero_badge_type" "enum_apps_hero_badge_type";
  ALTER TABLE "apps_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "apps_rels" ADD COLUMN "apps_id" integer;
  ALTER TABLE "_apps_v" ADD COLUMN "version_hero_badge_type" "enum__apps_v_version_hero_badge_type";
  ALTER TABLE "_apps_v_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "_apps_v_rels" ADD COLUMN "apps_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "faq_id" integer;
  ALTER TABLE "header_rels" ADD COLUMN "solutions_id" integer;
  ALTER TABLE "footer_rels" ADD COLUMN "solutions_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block_block_header_links" ADD CONSTRAINT "pages_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_block" ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_block_header_links" ADD CONSTRAINT "pages_blocks_gallery_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block_block_header_links" ADD CONSTRAINT "_pages_v_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_block" ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_block_header_links" ADD CONSTRAINT "_pages_v_blocks_gallery_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_images" ADD CONSTRAINT "_pages_v_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery" ADD CONSTRAINT "_pages_v_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions" ADD CONSTRAINT "solutions_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_locales" ADD CONSTRAINT "_solutions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faq_locales" ADD CONSTRAINT "faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_block_header_links_order_idx" ON "pages_blocks_faq_block_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_block_header_links_parent_id_idx" ON "pages_blocks_faq_block_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_block_header_links_locale_idx" ON "pages_blocks_faq_block_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_order_idx" ON "pages_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_parent_id_idx" ON "pages_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_path_idx" ON "pages_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_block_locale_idx" ON "pages_blocks_faq_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_block_header_links_order_idx" ON "pages_blocks_gallery_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_block_header_links_parent_id_idx" ON "pages_blocks_gallery_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_block_header_links_locale_idx" ON "pages_blocks_gallery_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_locale_idx" ON "pages_blocks_gallery_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_locale_idx" ON "pages_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_block_header_links_order_idx" ON "_pages_v_blocks_faq_block_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_block_header_links_parent_id_idx" ON "_pages_v_blocks_faq_block_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_block_header_links_locale_idx" ON "_pages_v_blocks_faq_block_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_order_idx" ON "_pages_v_blocks_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_parent_id_idx" ON "_pages_v_blocks_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_path_idx" ON "_pages_v_blocks_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_block_locale_idx" ON "_pages_v_blocks_faq_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_block_header_links_order_idx" ON "_pages_v_blocks_gallery_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_block_header_links_parent_id_idx" ON "_pages_v_blocks_gallery_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_block_header_links_locale_idx" ON "_pages_v_blocks_gallery_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_images_order_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_images_parent_id_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_images_locale_idx" ON "_pages_v_blocks_gallery_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_images_image_idx" ON "_pages_v_blocks_gallery_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_order_idx" ON "_pages_v_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_parent_id_idx" ON "_pages_v_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_path_idx" ON "_pages_v_blocks_gallery" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_locale_idx" ON "_pages_v_blocks_gallery" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "solutions_icon_idx" ON "solutions" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "solutions_locales_locale_parent_id_unique" ON "solutions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_order_idx" ON "solutions_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "solutions_rels_parent_idx" ON "solutions_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_path_idx" ON "solutions_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "solutions_rels_pages_id_idx" ON "solutions_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_posts_id_idx" ON "solutions_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_solutions_id_idx" ON "solutions_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_parent_idx" ON "_solutions_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_icon_idx" ON "_solutions_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_slug_idx" ON "_solutions_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_updated_at_idx" ON "_solutions_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_created_at_idx" ON "_solutions_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_snapshot_idx" ON "_solutions_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_solutions_v_published_locale_idx" ON "_solutions_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_solutions_v_autosave_idx" ON "_solutions_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_solutions_v_locales_locale_parent_id_unique" ON "_solutions_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_order_idx" ON "_solutions_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_parent_idx" ON "_solutions_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_path_idx" ON "_solutions_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_pages_id_idx" ON "_solutions_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_posts_id_idx" ON "_solutions_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_solutions_id_idx" ON "_solutions_v_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "faq_updated_at_idx" ON "faq" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "faq_created_at_idx" ON "faq" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "faq_locales_locale_parent_id_unique" ON "faq_locales" USING btree ("_locale","_parent_id");
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_rels_solutions_id_idx" ON "pages_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_faq_id_idx" ON "pages_rels" USING btree ("faq_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_solutions_id_idx" ON "_pages_v_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_faq_id_idx" ON "_pages_v_rels" USING btree ("faq_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_solutions_id_idx" ON "apps_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_apps_id_idx" ON "apps_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_solutions_id_idx" ON "_apps_v_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_apps_id_idx" ON "_apps_v_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_faq_id_idx" ON "payload_locked_documents_rels" USING btree ("faq_id");
  CREATE INDEX IF NOT EXISTS "header_rels_solutions_id_idx" ON "header_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_solutions_id_idx" ON "footer_rels" USING btree ("solutions_id");
  DROP TYPE "public"."enum_site_config_announcement_bar_link_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_site_config_announcement_bar_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE IF NOT EXISTS "site_config" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"announcement_bar_link_type" "enum_site_config_announcement_bar_link_type" DEFAULT 'reference',
  	"announcement_bar_link_new_tab" boolean,
  	"announcement_bar_link_url" varchar,
  	"custom_head_html" varchar,
  	"custom_body_html" varchar,
  	"tag_manager_id" varchar,
  	"analytics_scripts" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "site_config_locales" (
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"announcement_bar_text" varchar,
  	"announcement_bar_link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "site_config_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  ALTER TABLE "pages_blocks_faq_block_block_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_faq_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_gallery_block_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_gallery_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_block_block_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_faq_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_gallery_block_header_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_gallery_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "solutions_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_solutions_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_solutions_v_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_solutions_v_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faq_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_faq_block_block_header_links" CASCADE;
  DROP TABLE "pages_blocks_faq_block" CASCADE;
  DROP TABLE "pages_blocks_gallery_block_header_links" CASCADE;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_blocks_gallery" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block_block_header_links" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_block" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_block_header_links" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_images" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_locales" CASCADE;
  DROP TABLE "solutions_rels" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "_solutions_v_locales" CASCADE;
  DROP TABLE "_solutions_v_rels" CASCADE;
  DROP TABLE "faq" CASCADE;
  DROP TABLE "faq_locales" CASCADE;
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_solutions_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_faq_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_solutions_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_faq_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "apps_rels_solutions_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "apps_rels_apps_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_apps_v_rels_solutions_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_apps_v_rels_apps_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_solutions_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_faq_fk";
  
  ALTER TABLE "header_rels" DROP CONSTRAINT "header_rels_solutions_fk";
  
  ALTER TABLE "footer_rels" DROP CONSTRAINT "footer_rels_solutions_fk";
  
  DROP INDEX IF EXISTS "pages_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "pages_rels_faq_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_faq_id_idx";
  DROP INDEX IF EXISTS "apps_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "apps_rels_apps_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_apps_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_faq_id_idx";
  DROP INDEX IF EXISTS "header_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "footer_rels_solutions_id_idx";
  DO $$ BEGIN
   ALTER TABLE "site_config_locales" ADD CONSTRAINT "site_config_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_config_locales" ADD CONSTRAINT "site_config_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_config"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_config_rels" ADD CONSTRAINT "site_config_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."site_config"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_config_rels" ADD CONSTRAINT "site_config_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "site_config_rels" ADD CONSTRAINT "site_config_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "site_config_meta_meta_image_idx" ON "site_config_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "site_config_locales_locale_parent_id_unique" ON "site_config_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "site_config_rels_order_idx" ON "site_config_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "site_config_rels_parent_idx" ON "site_config_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "site_config_rels_path_idx" ON "site_config_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "site_config_rels_pages_id_idx" ON "site_config_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "site_config_rels_posts_id_idx" ON "site_config_rels" USING btree ("posts_id");
  ALTER TABLE "pages_blocks_apps" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "pages_blocks_apps" DROP COLUMN IF EXISTS "body_badge_type";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "pages_blocks_content" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "pages_blocks_testimonials" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "pages_blocks_features_columns" DROP COLUMN IF EXISTS "badge_type";
  ALTER TABLE "pages_blocks_features" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_badge_type";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "pages_rels" DROP COLUMN IF EXISTS "faq_id";
  ALTER TABLE "_pages_v_blocks_apps" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_apps" DROP COLUMN IF EXISTS "body_badge_type";
  ALTER TABLE "_pages_v_blocks_cta" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_content" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_testimonials" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "_pages_v_blocks_features_columns" DROP COLUMN IF EXISTS "badge_type";
  ALTER TABLE "_pages_v_blocks_features" DROP COLUMN IF EXISTS "block_header_badge_type";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_hero_badge_type";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "_pages_v_rels" DROP COLUMN IF EXISTS "faq_id";
  ALTER TABLE "apps" DROP COLUMN IF EXISTS "hero_badge_type";
  ALTER TABLE "apps_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "apps_rels" DROP COLUMN IF EXISTS "apps_id";
  ALTER TABLE "_apps_v" DROP COLUMN IF EXISTS "version_hero_badge_type";
  ALTER TABLE "_apps_v_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "_apps_v_rels" DROP COLUMN IF EXISTS "apps_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "faq_id";
  ALTER TABLE "header_rels" DROP COLUMN IF EXISTS "solutions_id";
  ALTER TABLE "footer_rels" DROP COLUMN IF EXISTS "solutions_id";
  DROP TYPE "public"."enum_pages_blocks_apps_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_apps_body_badge_type";
  DROP TYPE "public"."enum_pages_blocks_cta_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_content_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_testimonials_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_features_columns_badge_type";
  DROP TYPE "public"."enum_pages_blocks_features_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_faq_block_block_header_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_faq_block_block_header_type";
  DROP TYPE "public"."enum_pages_blocks_faq_block_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_block_header_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_block_header_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_block_header_badge_type";
  DROP TYPE "public"."enum_pages_blocks_gallery_type";
  DROP TYPE "public"."enum_pages_hero_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_apps_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_apps_body_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_testimonials_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_features_columns_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_features_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_block_header_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_block_header_type";
  DROP TYPE "public"."enum__pages_v_blocks_faq_block_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_block_header_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_block_header_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_block_header_badge_type";
  DROP TYPE "public"."enum__pages_v_blocks_gallery_type";
  DROP TYPE "public"."enum__pages_v_version_hero_badge_type";
  DROP TYPE "public"."enum_apps_hero_badge_type";
  DROP TYPE "public"."enum__apps_v_version_hero_badge_type";
  DROP TYPE "public"."enum_solutions_link_type";
  DROP TYPE "public"."enum_solutions_ecosystem";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_link_type";
  DROP TYPE "public"."enum__solutions_v_version_ecosystem";
  DROP TYPE "public"."enum__solutions_v_version_status";
  DROP TYPE "public"."enum__solutions_v_published_locale";`)
}
