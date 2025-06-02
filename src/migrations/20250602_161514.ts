import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "featuredAppsBlock_cards_locales" RENAME COLUMN "description" TO "subtitle";
  ALTER TABLE "_featuredAppsBlock_v_cards_locales" RENAME COLUMN "description" TO "subtitle";
  ALTER TABLE "pricingBlock_pricing_cards" ADD COLUMN "enable_cta" boolean;
  ALTER TABLE "_pricingBlock_v_pricing_cards" ADD COLUMN "enable_cta" boolean;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "featuredAppsBlock_cards_locales" RENAME COLUMN "subtitle" TO "description";
  ALTER TABLE "_featuredAppsBlock_v_cards_locales" RENAME COLUMN "subtitle" TO "description";
  ALTER TABLE "pricingBlock_pricing_cards" DROP COLUMN IF EXISTS "enable_cta";
  ALTER TABLE "_pricingBlock_v_pricing_cards" DROP COLUMN IF EXISTS "enable_cta";`)
}
