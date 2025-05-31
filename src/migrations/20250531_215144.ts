import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pricingBlock_pricing_cards_type" AS ENUM('basic', 'featured');
  CREATE TYPE "public"."enum_pricingBlock_pricing_cards_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pricingBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_pricingBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pricingBlock_type" AS ENUM('01', '02', '03', '04');
  CREATE TYPE "public"."enum__pricingBlock_v_pricing_cards_type" AS ENUM('basic', 'featured');
  CREATE TYPE "public"."enum__pricingBlock_v_pricing_cards_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pricingBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__pricingBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pricingBlock_v_type" AS ENUM('01', '02', '03', '04');
  CREATE TABLE IF NOT EXISTS "pricingBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_pricing_cards_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enabled" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_pricing_cards_features_locales" (
  	"feature" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pricingBlock_pricing_cards_type" DEFAULT 'basic',
  	"badge_type" "enum_pricingBlock_pricing_cards_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"media_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_pricing_cards_locales" (
  	"badge_label" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"price_annually" varchar,
  	"price_monthly" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_pricingBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_pricingBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_pricingBlock_type" DEFAULT '01',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pricingBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"table" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_pricing_cards_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"enabled" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_pricing_cards_features_locales" (
  	"feature" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_pricing_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"type" "enum__pricingBlock_v_pricing_cards_type" DEFAULT 'basic',
  	"badge_type" "enum__pricingBlock_v_pricing_cards_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"media_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_pricing_cards_locales" (
  	"badge_label" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"price_annually" varchar,
  	"price_monthly" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__pricingBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__pricingBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__pricingBlock_v_type" DEFAULT '01',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pricingBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"table" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_block_header_links" ADD CONSTRAINT "pricingBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_block_header_links_locales" ADD CONSTRAINT "pricingBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_pricing_cards_features" ADD CONSTRAINT "pricingBlock_pricing_cards_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_pricing_cards_features_locales" ADD CONSTRAINT "pricingBlock_pricing_cards_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock_pricing_cards_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_pricing_cards" ADD CONSTRAINT "pricingBlock_pricing_cards_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_pricing_cards" ADD CONSTRAINT "pricingBlock_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_pricing_cards_locales" ADD CONSTRAINT "pricingBlock_pricing_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock" ADD CONSTRAINT "pricingBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pricingBlock_locales" ADD CONSTRAINT "pricingBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pricingBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_block_header_links" ADD CONSTRAINT "_pricingBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_block_header_links_locales" ADD CONSTRAINT "_pricingBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_pricing_cards_features" ADD CONSTRAINT "_pricingBlock_v_pricing_cards_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_pricing_cards_features_locales" ADD CONSTRAINT "_pricingBlock_v_pricing_cards_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v_pricing_cards_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_pricing_cards" ADD CONSTRAINT "_pricingBlock_v_pricing_cards_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_pricing_cards" ADD CONSTRAINT "_pricingBlock_v_pricing_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_pricing_cards_locales" ADD CONSTRAINT "_pricingBlock_v_pricing_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v_pricing_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v" ADD CONSTRAINT "_pricingBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pricingBlock_v_locales" ADD CONSTRAINT "_pricingBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pricingBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pricingBlock_block_header_links_order_idx" ON "pricingBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricingBlock_block_header_links_parent_id_idx" ON "pricingBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pricingBlock_block_header_links_locales_locale_parent_id_unique" ON "pricingBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_features_order_idx" ON "pricingBlock_pricing_cards_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_features_parent_id_idx" ON "pricingBlock_pricing_cards_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_features_locales_locale_parent_id_unique" ON "pricingBlock_pricing_cards_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_order_idx" ON "pricingBlock_pricing_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_parent_id_idx" ON "pricingBlock_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_media_idx" ON "pricingBlock_pricing_cards" USING btree ("media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pricingBlock_pricing_cards_locales_locale_parent_id_unique" ON "pricingBlock_pricing_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pricingBlock_order_idx" ON "pricingBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pricingBlock_parent_id_idx" ON "pricingBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pricingBlock_path_idx" ON "pricingBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "pricingBlock_locales_locale_parent_id_unique" ON "pricingBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_block_header_links_order_idx" ON "_pricingBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_block_header_links_parent_id_idx" ON "_pricingBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pricingBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_pricingBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_features_order_idx" ON "_pricingBlock_v_pricing_cards_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_features_parent_id_idx" ON "_pricingBlock_v_pricing_cards_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_features_locales_locale_parent_id_unique" ON "_pricingBlock_v_pricing_cards_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_order_idx" ON "_pricingBlock_v_pricing_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_parent_id_idx" ON "_pricingBlock_v_pricing_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_media_idx" ON "_pricingBlock_v_pricing_cards" USING btree ("media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pricingBlock_v_pricing_cards_locales_locale_parent_id_unique" ON "_pricingBlock_v_pricing_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_order_idx" ON "_pricingBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_parent_id_idx" ON "_pricingBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pricingBlock_v_path_idx" ON "_pricingBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pricingBlock_v_locales_locale_parent_id_unique" ON "_pricingBlock_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pricingBlock_block_header_links" CASCADE;
  DROP TABLE "pricingBlock_block_header_links_locales" CASCADE;
  DROP TABLE "pricingBlock_pricing_cards_features" CASCADE;
  DROP TABLE "pricingBlock_pricing_cards_features_locales" CASCADE;
  DROP TABLE "pricingBlock_pricing_cards" CASCADE;
  DROP TABLE "pricingBlock_pricing_cards_locales" CASCADE;
  DROP TABLE "pricingBlock" CASCADE;
  DROP TABLE "pricingBlock_locales" CASCADE;
  DROP TABLE "_pricingBlock_v_block_header_links" CASCADE;
  DROP TABLE "_pricingBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_pricingBlock_v_pricing_cards_features" CASCADE;
  DROP TABLE "_pricingBlock_v_pricing_cards_features_locales" CASCADE;
  DROP TABLE "_pricingBlock_v_pricing_cards" CASCADE;
  DROP TABLE "_pricingBlock_v_pricing_cards_locales" CASCADE;
  DROP TABLE "_pricingBlock_v" CASCADE;
  DROP TABLE "_pricingBlock_v_locales" CASCADE;
  DROP TYPE "public"."enum_pricingBlock_pricing_cards_type";
  DROP TYPE "public"."enum_pricingBlock_pricing_cards_badge_type";
  DROP TYPE "public"."enum_pricingBlock_block_header_type";
  DROP TYPE "public"."enum_pricingBlock_block_header_badge_type";
  DROP TYPE "public"."enum_pricingBlock_type";
  DROP TYPE "public"."enum__pricingBlock_v_pricing_cards_type";
  DROP TYPE "public"."enum__pricingBlock_v_pricing_cards_badge_type";
  DROP TYPE "public"."enum__pricingBlock_v_block_header_type";
  DROP TYPE "public"."enum__pricingBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__pricingBlock_v_type";`)
}
