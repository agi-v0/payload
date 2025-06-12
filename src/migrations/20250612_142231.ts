import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_marketplaceBlock_initial_filters_sort" AS ENUM('name', 'newest', 'oldest');
  CREATE TYPE "public"."enum__marketplaceBlock_v_initial_filters_sort" AS ENUM('name', 'newest', 'oldest');
  CREATE TABLE IF NOT EXISTS "marketplaceBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"initial_filters_ecosystem_id" uuid,
  	"initial_filters_category_id" uuid,
  	"initial_filters_sort" "enum_marketplaceBlock_initial_filters_sort" DEFAULT 'newest',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_marketplaceBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"initial_filters_ecosystem_id" uuid,
  	"initial_filters_category_id" uuid,
  	"initial_filters_sort" "enum__marketplaceBlock_v_initial_filters_sort" DEFAULT 'newest',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "marketplaceBlock" ADD CONSTRAINT "marketplaceBlock_initial_filters_ecosystem_id_categories_id_fk" FOREIGN KEY ("initial_filters_ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "marketplaceBlock" ADD CONSTRAINT "marketplaceBlock_initial_filters_category_id_categories_id_fk" FOREIGN KEY ("initial_filters_category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "marketplaceBlock" ADD CONSTRAINT "marketplaceBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_marketplaceBlock_v" ADD CONSTRAINT "_marketplaceBlock_v_initial_filters_ecosystem_id_categories_id_fk" FOREIGN KEY ("initial_filters_ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_marketplaceBlock_v" ADD CONSTRAINT "_marketplaceBlock_v_initial_filters_category_id_categories_id_fk" FOREIGN KEY ("initial_filters_category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
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
  CREATE INDEX IF NOT EXISTS "marketplaceBlock_initial_filters_initial_filters_ecosystem_idx" ON "marketplaceBlock" USING btree ("initial_filters_ecosystem_id");
  CREATE INDEX IF NOT EXISTS "marketplaceBlock_initial_filters_initial_filters_category_idx" ON "marketplaceBlock" USING btree ("initial_filters_category_id");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_order_idx" ON "_marketplaceBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_parent_id_idx" ON "_marketplaceBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_path_idx" ON "_marketplaceBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_initial_filters_initial_filters_ecosystem_idx" ON "_marketplaceBlock_v" USING btree ("initial_filters_ecosystem_id");
  CREATE INDEX IF NOT EXISTS "_marketplaceBlock_v_initial_filters_initial_filters_category_idx" ON "_marketplaceBlock_v" USING btree ("initial_filters_category_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "marketplaceBlock" CASCADE;
  DROP TABLE "_marketplaceBlock_v" CASCADE;
  DROP TYPE "public"."enum_marketplaceBlock_initial_filters_sort";
  DROP TYPE "public"."enum__marketplaceBlock_v_initial_filters_sort";`)
}
