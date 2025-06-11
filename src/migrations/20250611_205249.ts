import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "marketplaceBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_marketplaceBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "marketplaceBlock" ADD CONSTRAINT "marketplaceBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_marketplaceBlock_v" ADD CONSTRAINT "_marketplaceBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "marketplaceBlock_order_idx" ON "marketplaceBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "marketplaceBlock_parent_id_idx" ON "marketplaceBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "marketplaceBlock_path_idx" ON "marketplaceBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_order_idx" ON "_marketplaceBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_parent_id_idx" ON "_marketplaceBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_path_idx" ON "_marketplaceBlock_v" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "marketplaceBlock" CASCADE;
  DROP TABLE "_marketplaceBlock_v" CASCADE;`)
}
