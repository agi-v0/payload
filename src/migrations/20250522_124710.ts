import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."badge_color" ADD VALUE 'gray';
  ALTER TYPE "public"."badge_color" ADD VALUE 'inverted';
  ALTER TABLE "pages_hero_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_hero_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "integrations_hero_logos" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_integrations_v_version_hero_logos" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_hero_logos" CASCADE;
  DROP TABLE "_pages_v_version_hero_logos" CASCADE;
  DROP TABLE "integrations_hero_logos" CASCADE;
  DROP TABLE "_integrations_v_version_hero_logos" CASCADE;
  ALTER TABLE "pages_locales" RENAME COLUMN "hero_media_id" TO "hero_media_desktop_light_id";
  ALTER TABLE "_pages_v_locales" RENAME COLUMN "version_hero_media_id" TO "version_hero_media_desktop_light_id";
  ALTER TABLE "integrations_locales" RENAME COLUMN "hero_media_id" TO "hero_media_desktop_light_id";
  ALTER TABLE "_integrations_v_locales" RENAME COLUMN "version_hero_media_id" TO "version_hero_media_desktop_light_id";
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_hero_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_hero_media_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "integrations_locales_hero_media_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pages_hero_hero_media_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_version_hero_media_idx";
  DROP INDEX IF EXISTS "integrations_hero_hero_media_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_version_hero_media_idx";
  ALTER TABLE "pages_locales" ADD COLUMN "hero_media_desktop_dark_id" integer;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_media_mobile_light_id" integer;
  ALTER TABLE "pages_locales" ADD COLUMN "hero_media_mobile_dark_id" integer;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_media_desktop_dark_id" integer;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_media_mobile_light_id" integer;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_hero_media_mobile_dark_id" integer;
  ALTER TABLE "integrations_locales" ADD COLUMN "hero_media_desktop_dark_id" integer;
  ALTER TABLE "integrations_locales" ADD COLUMN "hero_media_mobile_light_id" integer;
  ALTER TABLE "integrations_locales" ADD COLUMN "hero_media_mobile_dark_id" integer;
  ALTER TABLE "_integrations_v_locales" ADD COLUMN "version_hero_media_desktop_dark_id" integer;
  ALTER TABLE "_integrations_v_locales" ADD COLUMN "version_hero_media_mobile_light_id" integer;
  ALTER TABLE "_integrations_v_locales" ADD COLUMN "version_hero_media_mobile_dark_id" integer;
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_hero_media_desktop_light_id_media_id_fk" FOREIGN KEY ("hero_media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_hero_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("hero_media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_hero_media_mobile_light_id_media_id_fk" FOREIGN KEY ("hero_media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_hero_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("hero_media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_hero_media_desktop_light_id_media_id_fk" FOREIGN KEY ("version_hero_media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_hero_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("version_hero_media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_hero_media_mobile_light_id_media_id_fk" FOREIGN KEY ("version_hero_media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_hero_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("version_hero_media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_desktop_light_id_media_id_fk" FOREIGN KEY ("hero_media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("hero_media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_mobile_light_id_media_id_fk" FOREIGN KEY ("hero_media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("hero_media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_desktop_light_id_media_id_fk" FOREIGN KEY ("version_hero_media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("version_hero_media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_mobile_light_id_media_id_fk" FOREIGN KEY ("version_hero_media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("version_hero_media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_media_desktop_hero_media_desktop_light_idx" ON "pages_locales" USING btree ("hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_desktop_hero_media_desktop_dark_idx" ON "pages_locales" USING btree ("hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_mobile_hero_media_mobile_light_idx" ON "pages_locales" USING btree ("hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_mobile_hero_media_mobile_dark_idx" ON "pages_locales" USING btree ("hero_media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_light_idx" ON "_pages_v_locales" USING btree ("version_hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_dark_idx" ON "_pages_v_locales" USING btree ("version_hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_light_idx" ON "_pages_v_locales" USING btree ("version_hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_dark_idx" ON "_pages_v_locales" USING btree ("version_hero_media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_media_desktop_hero_media_desktop_light_idx" ON "integrations_locales" USING btree ("hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_media_desktop_hero_media_desktop_dark_idx" ON "integrations_locales" USING btree ("hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_media_mobile_hero_media_mobile_light_idx" ON "integrations_locales" USING btree ("hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_media_mobile_hero_media_mobile_dark_idx" ON "integrations_locales" USING btree ("hero_media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_media_desktop_version_hero_media_desktop_light_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_media_desktop_version_hero_media_desktop_dark_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_media_mobile_version_hero_media_mobile_light_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_media_mobile_version_hero_media_mobile_dark_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_mobile_dark_id","_locale");
  
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;
  ALTER TABLE "public"."integrations" ALTER COLUMN "hero_type" SET DATA TYPE text;
  ALTER TABLE "public"."_integrations_v" ALTER COLUMN "version_hero_type" SET DATA TYPE text;

  UPDATE "public"."pages" SET "hero_type" = 'none' WHERE "hero_type" IN ('hero06', 'hero07');
  UPDATE "public"."_pages_v" SET "version_hero_type" = 'none' WHERE "version_hero_type" IN ('hero06', 'hero07');
  UPDATE "public"."integrations" SET "hero_type" = 'none' WHERE "hero_type" IN ('hero06', 'hero07');
  UPDATE "public"."_integrations_v" SET "version_hero_type" = 'none' WHERE "version_hero_type" IN ('hero06', 'hero07');

  DROP TYPE "public"."enum_pages_hero_type" CASCADE;
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_pages_hero_type" USING "hero_type"::"public"."enum_pages_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_type" CASCADE;
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__pages_v_version_hero_type" USING "version_hero_type"::"public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum_integrations_hero_type" CASCADE;
  CREATE TYPE "public"."enum_integrations_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  ALTER TABLE "public"."integrations" ALTER COLUMN "hero_type" SET DATA TYPE "public"."enum_integrations_hero_type" USING "hero_type"::"public"."enum_integrations_hero_type";
  DROP TYPE "public"."enum__integrations_v_version_hero_type" CASCADE;
  CREATE TYPE "public"."enum__integrations_v_version_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  ALTER TABLE "public"."_integrations_v" ALTER COLUMN "version_hero_type" SET DATA TYPE "public"."enum__integrations_v_version_hero_type" USING "version_hero_type"::"public"."enum__integrations_v_version_hero_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero06' BEFORE 'none';
  ALTER TYPE "public"."enum_pages_hero_type" ADD VALUE 'hero07' BEFORE 'none';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero06' BEFORE 'none';
  ALTER TYPE "public"."enum__pages_v_version_hero_type" ADD VALUE 'hero07' BEFORE 'none';
  ALTER TYPE "public"."enum_integrations_hero_type" ADD VALUE 'hero06' BEFORE 'none';
  ALTER TYPE "public"."enum_integrations_hero_type" ADD VALUE 'hero07' BEFORE 'none';
  ALTER TYPE "public"."enum__integrations_v_version_hero_type" ADD VALUE 'hero06' BEFORE 'none';
  ALTER TYPE "public"."enum__integrations_v_version_hero_type" ADD VALUE 'hero07' BEFORE 'none';
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
  
  CREATE TABLE IF NOT EXISTS "integrations_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"logo_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v_version_hero_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_locales" RENAME COLUMN "hero_media_desktop_light_id" TO "hero_media_id";
  ALTER TABLE "_pages_v_locales" RENAME COLUMN "version_hero_media_desktop_dark_id" TO "version_hero_media_id";
  ALTER TABLE "integrations_locales" RENAME COLUMN "hero_media_desktop_light_id" TO "hero_media_id";
  ALTER TABLE "_integrations_v_locales" RENAME COLUMN "version_hero_media_desktop_light_id" TO "version_hero_media_id";
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_hero_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_hero_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_hero_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "pages_locales" DROP CONSTRAINT "pages_locales_hero_media_mobile_dark_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_hero_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_hero_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_hero_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "_pages_v_locales" DROP CONSTRAINT "_pages_v_locales_version_hero_media_mobile_dark_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "integrations_locales_hero_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "integrations_locales_hero_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "integrations_locales_hero_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "integrations_locales_hero_media_mobile_dark_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_mobile_dark_id_media_id_fk";
  
  DROP INDEX IF EXISTS "pages_hero_media_desktop_hero_media_desktop_light_idx";
  DROP INDEX IF EXISTS "pages_hero_media_desktop_hero_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "pages_hero_media_mobile_hero_media_mobile_light_idx";
  DROP INDEX IF EXISTS "pages_hero_media_mobile_hero_media_mobile_dark_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_light_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_light_idx";
  DROP INDEX IF EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_dark_idx";
  DROP INDEX IF EXISTS "integrations_hero_media_desktop_hero_media_desktop_light_idx";
  DROP INDEX IF EXISTS "integrations_hero_media_desktop_hero_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "integrations_hero_media_mobile_hero_media_mobile_light_idx";
  DROP INDEX IF EXISTS "integrations_hero_media_mobile_hero_media_mobile_dark_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_media_desktop_version_hero_media_desktop_light_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_media_desktop_version_hero_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_media_mobile_version_hero_media_mobile_light_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_media_mobile_version_hero_media_mobile_dark_idx";
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
  
  DO $$ BEGIN
   ALTER TABLE "integrations_hero_logos" ADD CONSTRAINT "integrations_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_hero_logos" ADD CONSTRAINT "integrations_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_hero_logos" ADD CONSTRAINT "_integrations_v_version_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_hero_logos" ADD CONSTRAINT "_integrations_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_order_idx" ON "pages_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_parent_id_idx" ON "pages_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_logos_logo_idx" ON "pages_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_order_idx" ON "_pages_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_parent_id_idx" ON "_pages_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_logos_logo_idx" ON "_pages_v_version_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_order_idx" ON "integrations_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_parent_id_idx" ON "integrations_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_logo_idx" ON "integrations_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_order_idx" ON "_integrations_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_parent_id_idx" ON "_integrations_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_logo_idx" ON "_integrations_v_version_hero_logos" USING btree ("logo_id");
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_hero_media_idx" ON "pages_locales" USING btree ("hero_media_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_version_hero_media_idx" ON "_pages_v_locales" USING btree ("version_hero_media_id","_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_hero_media_idx" ON "integrations_locales" USING btree ("hero_media_id","_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_version_hero_media_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_id","_locale");
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_media_desktop_dark_id";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_media_mobile_light_id";
  ALTER TABLE "pages_locales" DROP COLUMN IF EXISTS "hero_media_mobile_dark_id";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_media_desktop_light_id";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_media_mobile_light_id";
  ALTER TABLE "_pages_v_locales" DROP COLUMN IF EXISTS "version_hero_media_mobile_dark_id";
  ALTER TABLE "integrations_locales" DROP COLUMN IF EXISTS "hero_media_desktop_dark_id";
  ALTER TABLE "integrations_locales" DROP COLUMN IF EXISTS "hero_media_mobile_light_id";
  ALTER TABLE "integrations_locales" DROP COLUMN IF EXISTS "hero_media_mobile_dark_id";
  ALTER TABLE "_integrations_v_locales" DROP COLUMN IF EXISTS "version_hero_media_desktop_dark_id";
  ALTER TABLE "_integrations_v_locales" DROP COLUMN IF EXISTS "version_hero_media_mobile_light_id";
  ALTER TABLE "_integrations_v_locales" DROP COLUMN IF EXISTS "version_hero_media_mobile_dark_id";
  ALTER TABLE "public"."callToActionBlock" ALTER COLUMN "badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."customHtmlBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."pages_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."featuredAppsBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."featuresBlock_columns" ALTER COLUMN "badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."featuresBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."galleryBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."testimonialsBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_callToActionBlock_v" ALTER COLUMN "badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_customHtmlBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_featuredAppsBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_featuresBlock_v_columns" ALTER COLUMN "badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_featuresBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_galleryBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_testimonialsBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."integrations_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."integrations" ALTER COLUMN "hero_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_integrations_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_integrations_v" ALTER COLUMN "version_hero_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."case_studies_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  ALTER TABLE "public"."_case_studies_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE text;
  DROP TYPE "public"."badge_color";
  CREATE TYPE "public"."badge_color" AS ENUM('blue', 'red', 'green', 'yellow');
  ALTER TABLE "public"."callToActionBlock" ALTER COLUMN "badge_color" SET DATA TYPE "public"."badge_color" USING "badge_color"::"public"."badge_color";
  ALTER TABLE "public"."customHtmlBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."pages_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."featuredAppsBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."featuresBlock_columns" ALTER COLUMN "badge_color" SET DATA TYPE "public"."badge_color" USING "badge_color"::"public"."badge_color";
  ALTER TABLE "public"."featuresBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."galleryBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."testimonialsBlock" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."pages" ALTER COLUMN "hero_badge_color" SET DATA TYPE "public"."badge_color" USING "hero_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_callToActionBlock_v" ALTER COLUMN "badge_color" SET DATA TYPE "public"."badge_color" USING "badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_customHtmlBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_pages_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_featuredAppsBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_featuresBlock_v_columns" ALTER COLUMN "badge_color" SET DATA TYPE "public"."badge_color" USING "badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_featuresBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_galleryBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_testimonialsBlock_v" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_pages_v" ALTER COLUMN "version_hero_badge_color" SET DATA TYPE "public"."badge_color" USING "version_hero_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."integrations_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."integrations" ALTER COLUMN "hero_badge_color" SET DATA TYPE "public"."badge_color" USING "hero_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_integrations_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_integrations_v" ALTER COLUMN "version_hero_badge_color" SET DATA TYPE "public"."badge_color" USING "version_hero_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."case_studies_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";
  ALTER TABLE "public"."_case_studies_v_blocks_faq_block" ALTER COLUMN "block_header_badge_color" SET DATA TYPE "public"."badge_color" USING "block_header_badge_color"::"public"."badge_color";`)
}
