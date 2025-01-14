import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "logos" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "logos_id" integer;
  CREATE INDEX IF NOT EXISTS "logos_updated_at_idx" ON "logos" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "logos_created_at_idx" ON "logos" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "logos_filename_idx" ON "logos" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "logos" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_square_sizes_square_filename_idx" ON "logos" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_small_sizes_small_filename_idx" ON "logos" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_medium_sizes_medium_filename_idx" ON "logos" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_large_sizes_large_filename_idx" ON "logos" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_xlarge_sizes_xlarge_filename_idx" ON "logos" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "logos_sizes_og_sizes_og_filename_idx" ON "logos" USING btree ("sizes_og_filename");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_logos_fk" FOREIGN KEY ("logos_id") REFERENCES "public"."logos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_logos_id_idx" ON "payload_locked_documents_rels" USING btree ("logos_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "logos" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "logos" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_logos_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_logos_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "logos_id";`)
}
