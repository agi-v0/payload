import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_faq_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faq_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__faq_v_published_locale" AS ENUM('en', 'ar');
  CREATE TABLE IF NOT EXISTS "_faq_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_category_id" uuid,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__faq_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__faq_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_faq_v_locales" (
  	"version_question" varchar,
  	"version_answer" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  ALTER TABLE "forms_emails_locales" ALTER COLUMN "subject" SET DEFAULT 'You''ve received a new message.';
  ALTER TABLE "faq" ADD COLUMN "_status" "enum_faq_status" DEFAULT 'draft';
  DO $$ BEGIN
   ALTER TABLE "_faq_v" ADD CONSTRAINT "_faq_v_parent_id_faq_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."faq"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faq_v" ADD CONSTRAINT "_faq_v_version_category_id_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faq_v_locales" ADD CONSTRAINT "_faq_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faq_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "_faq_v_parent_idx" ON "_faq_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version_category_idx" ON "_faq_v" USING btree ("version_category_id");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version_updated_at_idx" ON "_faq_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version_created_at_idx" ON "_faq_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_version_version__status_idx" ON "_faq_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_faq_v_created_at_idx" ON "_faq_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_updated_at_idx" ON "_faq_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_faq_v_snapshot_idx" ON "_faq_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_faq_v_published_locale_idx" ON "_faq_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_faq_v_latest_idx" ON "_faq_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_faq_v_autosave_idx" ON "_faq_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_faq_v_locales_locale_parent_id_unique" ON "_faq_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "faq__status_idx" ON "faq" USING btree ("_status");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "_faq_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_faq_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "_faq_v" CASCADE;
  DROP TABLE "_faq_v_locales" CASCADE;
  DROP INDEX IF EXISTS "faq__status_idx";
  ALTER TABLE "forms_emails_locales" ALTER COLUMN "subject" SET DEFAULT 'You''''ve received a new message.';
  ALTER TABLE "faq" DROP COLUMN IF EXISTS "_status";
  DROP TYPE "public"."enum_faq_status";
  DROP TYPE "public"."enum__faq_v_version_status";
  DROP TYPE "public"."enum__faq_v_published_locale";`)
}
