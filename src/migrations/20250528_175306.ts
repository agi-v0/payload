import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "callToActionBlock" RENAME COLUMN "supporting_text" TO "caption";
  ALTER TABLE "pages" RENAME COLUMN "hero_supporting_text" TO "hero_caption";
  ALTER TABLE "_callToActionBlock_v" RENAME COLUMN "supporting_text" TO "caption";
  ALTER TABLE "_pages_v" RENAME COLUMN "version_hero_supporting_text" TO "version_hero_caption";
  ALTER TABLE "integrations" RENAME COLUMN "supporting_text" TO "caption";
  ALTER TABLE "_integrations_v" RENAME COLUMN "version_supporting_text" TO "version_caption";
  ALTER TABLE "_solutions_v" ADD COLUMN "autosave" boolean;
  CREATE INDEX IF NOT EXISTS "_solutions_v_autosave_idx" ON "_solutions_v" USING btree ("autosave");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "callToActionBlock" RENAME COLUMN "caption" TO "supporting_text";
  ALTER TABLE "pages" RENAME COLUMN "hero_caption" TO "hero_supporting_text";
  ALTER TABLE "_callToActionBlock_v" RENAME COLUMN "caption" TO "supporting_text";
  ALTER TABLE "_pages_v" RENAME COLUMN "version_hero_caption" TO "version_hero_supporting_text";
  ALTER TABLE "integrations" RENAME COLUMN "caption" TO "supporting_text";
  ALTER TABLE "_integrations_v" RENAME COLUMN "version_caption" TO "version_supporting_text";
  DROP INDEX IF EXISTS "_solutions_v_autosave_idx";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "autosave";`)
}
