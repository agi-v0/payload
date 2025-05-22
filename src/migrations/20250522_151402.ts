import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "callToActionBlock" DROP CONSTRAINT "callToActionBlock_media_id_media_id_fk";
  
  ALTER TABLE "_callToActionBlock_v" DROP CONSTRAINT "_callToActionBlock_v_media_id_media_id_fk";
  
  DROP INDEX IF EXISTS "callToActionBlock_media_idx";
  DROP INDEX IF EXISTS "_callToActionBlock_v_media_idx";
  ALTER TABLE "callToActionBlock_locales" ADD COLUMN "media_desktop_light_id" integer;
  ALTER TABLE "callToActionBlock_locales" ADD COLUMN "media_desktop_dark_id" integer;
  ALTER TABLE "callToActionBlock_locales" ADD COLUMN "media_mobile_light_id" integer;
  ALTER TABLE "callToActionBlock_locales" ADD COLUMN "media_mobile_dark_id" integer;
  ALTER TABLE "_callToActionBlock_v_locales" ADD COLUMN "media_desktop_light_id" integer;
  ALTER TABLE "_callToActionBlock_v_locales" ADD COLUMN "media_desktop_dark_id" integer;
  ALTER TABLE "_callToActionBlock_v_locales" ADD COLUMN "media_mobile_light_id" integer;
  ALTER TABLE "_callToActionBlock_v_locales" ADD COLUMN "media_mobile_dark_id" integer;
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_locales" ADD CONSTRAINT "callToActionBlock_locales_media_desktop_light_id_media_id_fk" FOREIGN KEY ("media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_locales" ADD CONSTRAINT "callToActionBlock_locales_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_locales" ADD CONSTRAINT "callToActionBlock_locales_media_mobile_light_id_media_id_fk" FOREIGN KEY ("media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_locales" ADD CONSTRAINT "callToActionBlock_locales_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_locales" ADD CONSTRAINT "_callToActionBlock_v_locales_media_desktop_light_id_media_id_fk" FOREIGN KEY ("media_desktop_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_locales" ADD CONSTRAINT "_callToActionBlock_v_locales_media_desktop_dark_id_media_id_fk" FOREIGN KEY ("media_desktop_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_locales" ADD CONSTRAINT "_callToActionBlock_v_locales_media_mobile_light_id_media_id_fk" FOREIGN KEY ("media_mobile_light_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_locales" ADD CONSTRAINT "_callToActionBlock_v_locales_media_mobile_dark_id_media_id_fk" FOREIGN KEY ("media_mobile_dark_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_desktop_media_desktop_light_idx" ON "callToActionBlock_locales" USING btree ("media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_desktop_media_desktop_dark_idx" ON "callToActionBlock_locales" USING btree ("media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_mobile_media_mobile_light_idx" ON "callToActionBlock_locales" USING btree ("media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_mobile_media_mobile_dark_idx" ON "callToActionBlock_locales" USING btree ("media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_desktop_media_desktop_light_idx" ON "_callToActionBlock_v_locales" USING btree ("media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_desktop_media_desktop_dark_idx" ON "_callToActionBlock_v_locales" USING btree ("media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_mobile_media_mobile_light_idx" ON "_callToActionBlock_v_locales" USING btree ("media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_mobile_media_mobile_dark_idx" ON "_callToActionBlock_v_locales" USING btree ("media_mobile_dark_id","_locale");
  ALTER TABLE "callToActionBlock" DROP COLUMN IF EXISTS "media_id";
  ALTER TABLE "_callToActionBlock_v" DROP COLUMN IF EXISTS "media_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "callToActionBlock_locales" DROP CONSTRAINT "callToActionBlock_locales_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "callToActionBlock_locales" DROP CONSTRAINT "callToActionBlock_locales_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "callToActionBlock_locales" DROP CONSTRAINT "callToActionBlock_locales_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "callToActionBlock_locales" DROP CONSTRAINT "callToActionBlock_locales_media_mobile_dark_id_media_id_fk";
  
  ALTER TABLE "_callToActionBlock_v_locales" DROP CONSTRAINT "_callToActionBlock_v_locales_media_desktop_light_id_media_id_fk";
  
  ALTER TABLE "_callToActionBlock_v_locales" DROP CONSTRAINT "_callToActionBlock_v_locales_media_desktop_dark_id_media_id_fk";
  
  ALTER TABLE "_callToActionBlock_v_locales" DROP CONSTRAINT "_callToActionBlock_v_locales_media_mobile_light_id_media_id_fk";
  
  ALTER TABLE "_callToActionBlock_v_locales" DROP CONSTRAINT "_callToActionBlock_v_locales_media_mobile_dark_id_media_id_fk";
  
  DROP INDEX IF EXISTS "callToActionBlock_media_desktop_media_desktop_light_idx";
  DROP INDEX IF EXISTS "callToActionBlock_media_desktop_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "callToActionBlock_media_mobile_media_mobile_light_idx";
  DROP INDEX IF EXISTS "callToActionBlock_media_mobile_media_mobile_dark_idx";
  DROP INDEX IF EXISTS "_callToActionBlock_v_media_desktop_media_desktop_light_idx";
  DROP INDEX IF EXISTS "_callToActionBlock_v_media_desktop_media_desktop_dark_idx";
  DROP INDEX IF EXISTS "_callToActionBlock_v_media_mobile_media_mobile_light_idx";
  DROP INDEX IF EXISTS "_callToActionBlock_v_media_mobile_media_mobile_dark_idx";
  ALTER TABLE "callToActionBlock" ADD COLUMN "media_id" integer;
  ALTER TABLE "_callToActionBlock_v" ADD COLUMN "media_id" integer;
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock" ADD CONSTRAINT "callToActionBlock_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v" ADD CONSTRAINT "_callToActionBlock_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_idx" ON "callToActionBlock" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_idx" ON "_callToActionBlock_v" USING btree ("media_id");
  ALTER TABLE "callToActionBlock_locales" DROP COLUMN IF EXISTS "media_desktop_light_id";
  ALTER TABLE "callToActionBlock_locales" DROP COLUMN IF EXISTS "media_desktop_dark_id";
  ALTER TABLE "callToActionBlock_locales" DROP COLUMN IF EXISTS "media_mobile_light_id";
  ALTER TABLE "callToActionBlock_locales" DROP COLUMN IF EXISTS "media_mobile_dark_id";
  ALTER TABLE "_callToActionBlock_v_locales" DROP COLUMN IF EXISTS "media_desktop_light_id";
  ALTER TABLE "_callToActionBlock_v_locales" DROP COLUMN IF EXISTS "media_desktop_dark_id";
  ALTER TABLE "_callToActionBlock_v_locales" DROP COLUMN IF EXISTS "media_mobile_light_id";
  ALTER TABLE "_callToActionBlock_v_locales" DROP COLUMN IF EXISTS "media_mobile_dark_id";`)
}
