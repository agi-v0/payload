import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "media_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "media" ALTER COLUMN "alt" SET NOT NULL;
  ALTER TABLE "media" ADD COLUMN "category_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "media_categories_id" integer;
  CREATE INDEX IF NOT EXISTS "media_categories_slug_idx" ON "media_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "media_categories_updated_at_idx" ON "media_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_categories_created_at_idx" ON "media_categories" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "media" ADD CONSTRAINT "media_category_id_media_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."media_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_categories_fk" FOREIGN KEY ("media_categories_id") REFERENCES "public"."media_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "media_category_idx" ON "media" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("media_categories_id");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media_categories" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "media_categories" CASCADE;
  ALTER TABLE "media" DROP CONSTRAINT "media_category_id_media_categories_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_media_categories_fk";
  
  DROP INDEX IF EXISTS "media_category_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_media_categories_id_idx";
  ALTER TABLE "media" ALTER COLUMN "alt" DROP NOT NULL;
  ALTER TABLE "media" DROP COLUMN IF EXISTS "category_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "media_categories_id";`)
}
