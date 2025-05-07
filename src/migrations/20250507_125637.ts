import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_apps_block_header_links_link_type" RENAME TO "enum_pages_blocks_apps_block_block_header_links_link_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_body_links_link_type" RENAME TO "enum_pages_blocks_apps_block_body_links_link_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_header_type" RENAME TO "enum_pages_blocks_apps_block_block_header_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_header_badge_type" RENAME TO "enum_pages_blocks_apps_block_block_header_badge_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_type" RENAME TO "enum_pages_blocks_apps_block_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_body_badge_type" RENAME TO "enum_pages_blocks_apps_block_body_badge_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_header_links_link_type" RENAME TO "enum__pages_v_blocks_apps_block_block_header_links_link_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_body_links_link_type" RENAME TO "enum__pages_v_blocks_apps_block_body_links_link_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_header_type" RENAME TO "enum__pages_v_blocks_apps_block_block_header_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_header_badge_type" RENAME TO "enum__pages_v_blocks_apps_block_block_header_badge_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_type" RENAME TO "enum__pages_v_blocks_apps_block_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_body_badge_type" RENAME TO "enum__pages_v_blocks_apps_block_body_badge_type";
  ALTER TYPE "public"."enum_apps_hero_links_link_type" RENAME TO "enum_integrations_hero_links_link_type";
  ALTER TYPE "public"."enum_apps_link_type" RENAME TO "enum_integrations_link_type";
  ALTER TYPE "public"."enum_apps_hero_type" RENAME TO "enum_integrations_hero_type";
  ALTER TYPE "public"."enum_apps_hero_badge_type" RENAME TO "enum_integrations_hero_badge_type";
  ALTER TYPE "public"."enum_apps_status" RENAME TO "enum_integrations_status";
  ALTER TYPE "public"."enum__apps_v_version_hero_links_link_type" RENAME TO "enum__integrations_v_version_hero_links_link_type";
  ALTER TYPE "public"."enum__apps_v_version_link_type" RENAME TO "enum__integrations_v_version_link_type";
  ALTER TYPE "public"."enum__apps_v_version_hero_type" RENAME TO "enum__integrations_v_version_hero_type";
  ALTER TYPE "public"."enum__apps_v_version_hero_badge_type" RENAME TO "enum__integrations_v_version_hero_badge_type";
  ALTER TYPE "public"."enum__apps_v_version_status" RENAME TO "enum__integrations_v_version_status";
  ALTER TYPE "public"."enum__apps_v_published_locale" RENAME TO "enum__integrations_v_published_locale";
  ALTER TABLE "pages_blocks_apps_block_header_links" RENAME TO "pages_blocks_apps_block_block_header_links";
  ALTER TABLE "pages_blocks_apps_body_links" RENAME TO "pages_blocks_apps_block_body_links";
  ALTER TABLE "pages_blocks_apps" RENAME TO "pages_blocks_apps_block";
  ALTER TABLE "_pages_v_blocks_apps_block_header_links" RENAME TO "_pages_v_blocks_apps_block_block_header_links";
  ALTER TABLE "_pages_v_blocks_apps_body_links" RENAME TO "_pages_v_blocks_apps_block_body_links";
  ALTER TABLE "_pages_v_blocks_apps" RENAME TO "_pages_v_blocks_apps_block";
  ALTER TABLE "apps_hero_links" RENAME TO "integrations_hero_links";
  ALTER TABLE "apps_hero_logos" RENAME TO "integrations_hero_logos";
  ALTER TABLE "apps_features" RENAME TO "integrations_features";
  ALTER TABLE "apps_features_locales" RENAME TO "integrations_features_locales";
  ALTER TABLE "apps" RENAME TO "integrations";
  ALTER TABLE "apps_locales" RENAME TO "integrations_locales";
  ALTER TABLE "apps_rels" RENAME TO "integrations_rels";
  ALTER TABLE "_apps_v_version_hero_links" RENAME TO "_integrations_v_version_hero_links";
  ALTER TABLE "_apps_v_version_hero_logos" RENAME TO "_integrations_v_version_hero_logos";
  ALTER TABLE "_apps_v_version_features" RENAME TO "_integrations_v_version_features";
  ALTER TABLE "_apps_v_version_features_locales" RENAME TO "_integrations_v_version_features_locales";
  ALTER TABLE "_apps_v" RENAME TO "_integrations_v";
  ALTER TABLE "_apps_v_locales" RENAME TO "_integrations_v_locales";
  ALTER TABLE "_apps_v_rels" RENAME TO "_integrations_v_rels";
  ALTER TABLE "pages_rels" RENAME COLUMN "apps_id" TO "integrations_id";
  ALTER TABLE "_pages_v_rels" RENAME COLUMN "apps_id" TO "integrations_id";
  ALTER TABLE "integrations_rels" RENAME COLUMN "apps_id" TO "integrations_id";
  ALTER TABLE "_integrations_v_rels" RENAME COLUMN "apps_id" TO "integrations_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "apps_id" TO "integrations_id";
  ALTER TABLE "pages_blocks_apps_block_block_header_links" DROP CONSTRAINT "pages_blocks_apps_block_header_links_parent_id_fk";
  
  ALTER TABLE "pages_blocks_apps_block_body_links" DROP CONSTRAINT "pages_blocks_apps_body_links_parent_id_fk";
  
  ALTER TABLE "pages_blocks_apps_block" DROP CONSTRAINT "pages_blocks_apps_media_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_apps_block" DROP CONSTRAINT "pages_blocks_apps_parent_id_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_apps_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_block_block_header_links" DROP CONSTRAINT "_pages_v_blocks_apps_block_header_links_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_block_body_links" DROP CONSTRAINT "_pages_v_blocks_apps_body_links_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_block" DROP CONSTRAINT "_pages_v_blocks_apps_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_block" DROP CONSTRAINT "_pages_v_blocks_apps_parent_id_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_apps_fk";
  
  ALTER TABLE "integrations_hero_links" DROP CONSTRAINT "apps_hero_links_parent_id_fk";
  
  ALTER TABLE "integrations_hero_logos" DROP CONSTRAINT "apps_hero_logos_logo_id_media_id_fk";
  
  ALTER TABLE "integrations_hero_logos" DROP CONSTRAINT "apps_hero_logos_parent_id_fk";
  
  ALTER TABLE "integrations_features" DROP CONSTRAINT "apps_features_parent_id_fk";
  
  ALTER TABLE "integrations_features_locales" DROP CONSTRAINT "apps_features_locales_parent_id_fk";
  
  ALTER TABLE "integrations" DROP CONSTRAINT "apps_icon_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "apps_locales_hero_media_id_media_id_fk";
  
  ALTER TABLE "integrations_locales" DROP CONSTRAINT "apps_locales_parent_id_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_parent_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_pages_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_posts_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_solutions_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_apps_fk";
  
  ALTER TABLE "integrations_rels" DROP CONSTRAINT "apps_rels_media_fk";
  
  ALTER TABLE "_integrations_v_version_hero_links" DROP CONSTRAINT "_apps_v_version_hero_links_parent_id_fk";
  
  ALTER TABLE "_integrations_v_version_hero_logos" DROP CONSTRAINT "_apps_v_version_hero_logos_logo_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_version_hero_logos" DROP CONSTRAINT "_apps_v_version_hero_logos_parent_id_fk";
  
  ALTER TABLE "_integrations_v_version_features" DROP CONSTRAINT "_apps_v_version_features_parent_id_fk";
  
  ALTER TABLE "_integrations_v_version_features_locales" DROP CONSTRAINT "_apps_v_version_features_locales_parent_id_fk";
  
  ALTER TABLE "_integrations_v" DROP CONSTRAINT "_apps_v_parent_id_apps_id_fk";
  
  ALTER TABLE "_integrations_v" DROP CONSTRAINT "_apps_v_version_icon_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_apps_v_locales_version_hero_media_id_media_id_fk";
  
  ALTER TABLE "_integrations_v_locales" DROP CONSTRAINT "_apps_v_locales_parent_id_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_parent_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_pages_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_posts_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_solutions_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_apps_fk";
  
  ALTER TABLE "_integrations_v_rels" DROP CONSTRAINT "_apps_v_rels_media_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_apps_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_apps_block_header_links_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_header_links_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_header_links_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_body_links_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_body_links_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_body_links_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_path_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_media_idx";
  DROP INDEX IF EXISTS "pages_rels_apps_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_header_links_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_header_links_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_header_links_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_body_links_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_body_links_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_body_links_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_path_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_media_idx";
  DROP INDEX IF EXISTS "_pages_v_autosave_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_apps_id_idx";
  DROP INDEX IF EXISTS "_posts_v_autosave_idx";
  DROP INDEX IF EXISTS "apps_hero_links_order_idx";
  DROP INDEX IF EXISTS "apps_hero_links_parent_id_idx";
  DROP INDEX IF EXISTS "apps_hero_links_locale_idx";
  DROP INDEX IF EXISTS "apps_hero_logos_order_idx";
  DROP INDEX IF EXISTS "apps_hero_logos_parent_id_idx";
  DROP INDEX IF EXISTS "apps_hero_logos_logo_idx";
  DROP INDEX IF EXISTS "apps_features_order_idx";
  DROP INDEX IF EXISTS "apps_features_parent_id_idx";
  DROP INDEX IF EXISTS "apps_features_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "apps_icon_idx";
  DROP INDEX IF EXISTS "apps_slug_idx";
  DROP INDEX IF EXISTS "apps_updated_at_idx";
  DROP INDEX IF EXISTS "apps_created_at_idx";
  DROP INDEX IF EXISTS "apps__status_idx";
  DROP INDEX IF EXISTS "apps_hero_hero_media_idx";
  DROP INDEX IF EXISTS "apps_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "apps_rels_order_idx";
  DROP INDEX IF EXISTS "apps_rels_parent_idx";
  DROP INDEX IF EXISTS "apps_rels_path_idx";
  DROP INDEX IF EXISTS "apps_rels_locale_idx";
  DROP INDEX IF EXISTS "apps_rels_pages_id_idx";
  DROP INDEX IF EXISTS "apps_rels_posts_id_idx";
  DROP INDEX IF EXISTS "apps_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "apps_rels_apps_id_idx";
  DROP INDEX IF EXISTS "apps_rels_media_id_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_links_order_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_links_parent_id_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_links_locale_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_logos_order_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_logos_parent_id_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_logos_logo_idx";
  DROP INDEX IF EXISTS "_apps_v_version_features_order_idx";
  DROP INDEX IF EXISTS "_apps_v_version_features_parent_id_idx";
  DROP INDEX IF EXISTS "_apps_v_version_features_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "_apps_v_parent_idx";
  DROP INDEX IF EXISTS "_apps_v_version_version_icon_idx";
  DROP INDEX IF EXISTS "_apps_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "_apps_v_version_version_updated_at_idx";
  DROP INDEX IF EXISTS "_apps_v_version_version_created_at_idx";
  DROP INDEX IF EXISTS "_apps_v_version_version__status_idx";
  DROP INDEX IF EXISTS "_apps_v_created_at_idx";
  DROP INDEX IF EXISTS "_apps_v_updated_at_idx";
  DROP INDEX IF EXISTS "_apps_v_snapshot_idx";
  DROP INDEX IF EXISTS "_apps_v_published_locale_idx";
  DROP INDEX IF EXISTS "_apps_v_latest_idx";
  DROP INDEX IF EXISTS "_apps_v_autosave_idx";
  DROP INDEX IF EXISTS "_apps_v_version_hero_version_hero_media_idx";
  DROP INDEX IF EXISTS "_apps_v_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "_apps_v_rels_order_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_parent_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_path_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_locale_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_pages_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_posts_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_apps_id_idx";
  DROP INDEX IF EXISTS "_apps_v_rels_media_id_idx";
  DROP INDEX IF EXISTS "_solutions_v_autosave_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_apps_id_idx";
  ALTER TABLE "app_icons" ADD COLUMN "blurhash" varchar;
  ALTER TABLE "media" ADD COLUMN "blurhash" varchar;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_block_block_header_links" ADD CONSTRAINT "pages_blocks_apps_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_apps_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_block_body_links" ADD CONSTRAINT "pages_blocks_apps_block_body_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_apps_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_block" ADD CONSTRAINT "pages_blocks_apps_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_block" ADD CONSTRAINT "pages_blocks_apps_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_block_block_header_links" ADD CONSTRAINT "_pages_v_blocks_apps_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_apps_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_block_body_links" ADD CONSTRAINT "_pages_v_blocks_apps_block_body_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_apps_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_block" ADD CONSTRAINT "_pages_v_blocks_apps_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_block" ADD CONSTRAINT "_pages_v_blocks_apps_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_hero_links" ADD CONSTRAINT "integrations_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "integrations_features" ADD CONSTRAINT "integrations_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_features_locales" ADD CONSTRAINT "integrations_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations" ADD CONSTRAINT "integrations_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_hero_links" ADD CONSTRAINT "_integrations_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_features" ADD CONSTRAINT "_integrations_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_features_locales" ADD CONSTRAINT "_integrations_v_version_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_version_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v" ADD CONSTRAINT "_integrations_v_parent_id_integrations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v" ADD CONSTRAINT "_integrations_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_block_header_links_order_idx" ON "pages_blocks_apps_block_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_block_header_links_parent_id_idx" ON "pages_blocks_apps_block_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_block_header_links_locale_idx" ON "pages_blocks_apps_block_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_body_links_order_idx" ON "pages_blocks_apps_block_body_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_body_links_parent_id_idx" ON "pages_blocks_apps_block_body_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_body_links_locale_idx" ON "pages_blocks_apps_block_body_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_order_idx" ON "pages_blocks_apps_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_parent_id_idx" ON "pages_blocks_apps_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_path_idx" ON "pages_blocks_apps_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_locale_idx" ON "pages_blocks_apps_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_media_idx" ON "pages_blocks_apps_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_integrations_id_idx" ON "pages_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_block_header_links_order_idx" ON "_pages_v_blocks_apps_block_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_block_header_links_parent_id_idx" ON "_pages_v_blocks_apps_block_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_block_header_links_locale_idx" ON "_pages_v_blocks_apps_block_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_body_links_order_idx" ON "_pages_v_blocks_apps_block_body_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_body_links_parent_id_idx" ON "_pages_v_blocks_apps_block_body_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_body_links_locale_idx" ON "_pages_v_blocks_apps_block_body_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_order_idx" ON "_pages_v_blocks_apps_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_parent_id_idx" ON "_pages_v_blocks_apps_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_path_idx" ON "_pages_v_blocks_apps_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_locale_idx" ON "_pages_v_blocks_apps_block" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_media_idx" ON "_pages_v_blocks_apps_block" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_integrations_id_idx" ON "_pages_v_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_links_order_idx" ON "integrations_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "integrations_hero_links_parent_id_idx" ON "integrations_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_hero_links_locale_idx" ON "integrations_hero_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_order_idx" ON "integrations_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_parent_id_idx" ON "integrations_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_hero_logos_logo_idx" ON "integrations_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "integrations_features_order_idx" ON "integrations_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "integrations_features_parent_id_idx" ON "integrations_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "integrations_features_locales_locale_parent_id_unique" ON "integrations_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_icon_idx" ON "integrations" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "integrations_slug_idx" ON "integrations" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "integrations_updated_at_idx" ON "integrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "integrations_created_at_idx" ON "integrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "integrations__status_idx" ON "integrations" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "integrations_hero_hero_media_idx" ON "integrations_locales" USING btree ("hero_media_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "integrations_locales_locale_parent_id_unique" ON "integrations_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_order_idx" ON "integrations_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "integrations_rels_parent_idx" ON "integrations_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_path_idx" ON "integrations_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "integrations_rels_locale_idx" ON "integrations_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "integrations_rels_pages_id_idx" ON "integrations_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "integrations_rels_posts_id_idx" ON "integrations_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "integrations_rels_solutions_id_idx" ON "integrations_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "integrations_rels_integrations_id_idx" ON "integrations_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "integrations_rels_media_id_idx" ON "integrations_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_links_order_idx" ON "_integrations_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_links_parent_id_idx" ON "_integrations_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_links_locale_idx" ON "_integrations_v_version_hero_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_order_idx" ON "_integrations_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_parent_id_idx" ON "_integrations_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_logos_logo_idx" ON "_integrations_v_version_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_features_order_idx" ON "_integrations_v_version_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_features_parent_id_idx" ON "_integrations_v_version_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_integrations_v_version_features_locales_locale_parent_id_unique" ON "_integrations_v_version_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_parent_idx" ON "_integrations_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_version_icon_idx" ON "_integrations_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_version_slug_idx" ON "_integrations_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_version_updated_at_idx" ON "_integrations_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_version_created_at_idx" ON "_integrations_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_version__status_idx" ON "_integrations_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_integrations_v_created_at_idx" ON "_integrations_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_integrations_v_updated_at_idx" ON "_integrations_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_integrations_v_snapshot_idx" ON "_integrations_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_integrations_v_published_locale_idx" ON "_integrations_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_latest_idx" ON "_integrations_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_hero_version_hero_media_idx" ON "_integrations_v_locales" USING btree ("version_hero_media_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_integrations_v_locales_locale_parent_id_unique" ON "_integrations_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_order_idx" ON "_integrations_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_parent_idx" ON "_integrations_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_path_idx" ON "_integrations_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_locale_idx" ON "_integrations_v_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_pages_id_idx" ON "_integrations_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_posts_id_idx" ON "_integrations_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_solutions_id_idx" ON "_integrations_v_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_integrations_id_idx" ON "_integrations_v_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_media_id_idx" ON "_integrations_v_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_integrations_id_idx" ON "payload_locked_documents_rels" USING btree ("integrations_id");
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "autosave";
  ALTER TABLE "_posts_v" DROP COLUMN IF EXISTS "autosave";
  ALTER TABLE "_integrations_v" DROP COLUMN IF EXISTS "autosave";
  ALTER TABLE "_solutions_v" DROP COLUMN IF EXISTS "autosave";
  ALTER TABLE "public"."pages_blocks_apps_block" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_apps_block_type";
  CREATE TYPE "public"."enum_pages_blocks_apps_block_type" AS ENUM('appsBlockHero', 'appsBlock01', 'appsBlock02', 'appsBlock03', 'appsBlock04');
  ALTER TABLE "public"."pages_blocks_apps_block" ALTER COLUMN "type" SET DATA TYPE "public"."enum_pages_blocks_apps_block_type" USING "type"::"public"."enum_pages_blocks_apps_block_type";
  ALTER TABLE "public"."_pages_v_blocks_apps_block" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_apps_block_type";
  CREATE TYPE "public"."enum__pages_v_blocks_apps_block_type" AS ENUM('appsBlockHero', 'appsBlock01', 'appsBlock02', 'appsBlock03', 'appsBlock04');
  ALTER TABLE "public"."_pages_v_blocks_apps_block" ALTER COLUMN "type" SET DATA TYPE "public"."enum__pages_v_blocks_apps_block_type" USING "type"::"public"."enum__pages_v_blocks_apps_block_type";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_pages_blocks_apps_block_block_header_links_link_type" RENAME TO "enum_pages_blocks_apps_block_header_links_link_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_body_links_link_type" RENAME TO "enum_pages_blocks_apps_body_links_link_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_block_header_type" RENAME TO "enum_pages_blocks_apps_block_header_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_block_header_badge_type" RENAME TO "enum_pages_blocks_apps_block_header_badge_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_type" RENAME TO "enum_pages_blocks_apps_type";
  ALTER TYPE "public"."enum_pages_blocks_apps_block_body_badge_type" RENAME TO "enum_pages_blocks_apps_body_badge_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_block_header_links_link_type" RENAME TO "enum__pages_v_blocks_apps_block_header_links_link_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_body_links_link_type" RENAME TO "enum__pages_v_blocks_apps_body_links_link_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_block_header_type" RENAME TO "enum__pages_v_blocks_apps_block_header_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_block_header_badge_type" RENAME TO "enum__pages_v_blocks_apps_block_header_badge_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_type" RENAME TO "enum__pages_v_blocks_apps_type";
  ALTER TYPE "public"."enum__pages_v_blocks_apps_block_body_badge_type" RENAME TO "enum__pages_v_blocks_apps_body_badge_type";
  ALTER TYPE "public"."enum_integrations_hero_links_link_type" RENAME TO "enum_apps_hero_links_link_type";
  ALTER TYPE "public"."enum_integrations_link_type" RENAME TO "enum_apps_link_type";
  ALTER TYPE "public"."enum_integrations_hero_type" RENAME TO "enum_apps_hero_type";
  ALTER TYPE "public"."enum_integrations_hero_badge_type" RENAME TO "enum_apps_hero_badge_type";
  ALTER TYPE "public"."enum_integrations_status" RENAME TO "enum_apps_status";
  ALTER TYPE "public"."enum__integrations_v_version_hero_links_link_type" RENAME TO "enum__apps_v_version_hero_links_link_type";
  ALTER TYPE "public"."enum__integrations_v_version_link_type" RENAME TO "enum__apps_v_version_link_type";
  ALTER TYPE "public"."enum__integrations_v_version_hero_type" RENAME TO "enum__apps_v_version_hero_type";
  ALTER TYPE "public"."enum__integrations_v_version_hero_badge_type" RENAME TO "enum__apps_v_version_hero_badge_type";
  ALTER TYPE "public"."enum__integrations_v_version_status" RENAME TO "enum__apps_v_version_status";
  ALTER TYPE "public"."enum__integrations_v_published_locale" RENAME TO "enum__apps_v_published_locale";
  ALTER TABLE "pages_blocks_apps_block_block_header_links" RENAME TO "pages_blocks_apps_block_header_links";
  ALTER TABLE "pages_blocks_apps_block_body_links" RENAME TO "pages_blocks_apps_body_links";
  ALTER TABLE "pages_blocks_apps_block" RENAME TO "pages_blocks_apps";
  ALTER TABLE "_pages_v_blocks_apps_block_block_header_links" RENAME TO "_pages_v_blocks_apps_block_header_links";
  ALTER TABLE "_pages_v_blocks_apps_block_body_links" RENAME TO "_pages_v_blocks_apps_body_links";
  ALTER TABLE "_pages_v_blocks_apps_block" RENAME TO "_pages_v_blocks_apps";
  ALTER TABLE "integrations_hero_links" RENAME TO "apps_hero_links";
  ALTER TABLE "integrations_hero_logos" RENAME TO "apps_hero_logos";
  ALTER TABLE "integrations_features" RENAME TO "apps_features";
  ALTER TABLE "integrations" RENAME TO "apps_features_locales";
  ALTER TABLE "integrations_features_locales" RENAME TO "apps";
  ALTER TABLE "integrations_locales" RENAME TO "apps_locales";
  ALTER TABLE "integrations_rels" RENAME TO "apps_rels";
  ALTER TABLE "_integrations_v_version_hero_links" RENAME TO "_apps_v_version_hero_links";
  ALTER TABLE "_integrations_v_version_hero_logos" RENAME TO "_apps_v_version_hero_logos";
  ALTER TABLE "_integrations_v_version_features" RENAME TO "_apps_v_version_features";
  ALTER TABLE "_integrations_v_version_features_locales" RENAME TO "_apps_v_version_features_locales";
  ALTER TABLE "_integrations_v" RENAME TO "_apps_v";
  ALTER TABLE "_integrations_v_locales" RENAME TO "_apps_v_locales";
  ALTER TABLE "_integrations_v_rels" RENAME TO "_apps_v_rels";
  ALTER TABLE "pages_rels" RENAME COLUMN "integrations_id" TO "apps_id";
  ALTER TABLE "_pages_v_rels" RENAME COLUMN "integrations_id" TO "apps_id";
  ALTER TABLE "apps" RENAME COLUMN "description" TO "icon_id";
  ALTER TABLE "apps" RENAME COLUMN "_locale" TO "link_type";
  ALTER TABLE "apps" RENAME COLUMN "_parent_id" TO "link_new_tab";
  ALTER TABLE "apps_rels" RENAME COLUMN "integrations_id" TO "apps_id";
  ALTER TABLE "_apps_v_rels" RENAME COLUMN "integrations_id" TO "apps_id";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "integrations_id" TO "apps_id";
  ALTER TABLE "pages_blocks_apps_block_header_links" DROP CONSTRAINT "pages_blocks_apps_block_block_header_links_parent_id_fk";
  
  ALTER TABLE "pages_blocks_apps_body_links" DROP CONSTRAINT "pages_blocks_apps_block_body_links_parent_id_fk";
  
  ALTER TABLE "pages_blocks_apps" DROP CONSTRAINT "pages_blocks_apps_block_media_id_media_id_fk";
  
  ALTER TABLE "pages_blocks_apps" DROP CONSTRAINT "pages_blocks_apps_block_parent_id_fk";
  
  ALTER TABLE "pages_rels" DROP CONSTRAINT "pages_rels_integrations_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_block_header_links" DROP CONSTRAINT "_pages_v_blocks_apps_block_block_header_links_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps_body_links" DROP CONSTRAINT "_pages_v_blocks_apps_block_body_links_parent_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps" DROP CONSTRAINT "_pages_v_blocks_apps_block_media_id_media_id_fk";
  
  ALTER TABLE "_pages_v_blocks_apps" DROP CONSTRAINT "_pages_v_blocks_apps_block_parent_id_fk";
  
  ALTER TABLE "_pages_v_rels" DROP CONSTRAINT "_pages_v_rels_integrations_fk";
  
  ALTER TABLE "apps_hero_links" DROP CONSTRAINT "integrations_hero_links_parent_id_fk";
  
  ALTER TABLE "apps_hero_logos" DROP CONSTRAINT "integrations_hero_logos_logo_id_media_id_fk";
  
  ALTER TABLE "apps_hero_logos" DROP CONSTRAINT "integrations_hero_logos_parent_id_fk";
  
  ALTER TABLE "apps_features" DROP CONSTRAINT "integrations_features_parent_id_fk";
  
  ALTER TABLE "apps" DROP CONSTRAINT "integrations_features_locales_parent_id_fk";
  
  ALTER TABLE "apps_features_locales" DROP CONSTRAINT "integrations_icon_id_media_id_fk";
  
  ALTER TABLE "apps_locales" DROP CONSTRAINT "integrations_locales_hero_media_id_media_id_fk";
  
  ALTER TABLE "apps_locales" DROP CONSTRAINT "integrations_locales_parent_id_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_parent_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_pages_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_posts_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_solutions_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_integrations_fk";
  
  ALTER TABLE "apps_rels" DROP CONSTRAINT "integrations_rels_media_fk";
  
  ALTER TABLE "_apps_v_version_hero_links" DROP CONSTRAINT "_integrations_v_version_hero_links_parent_id_fk";
  
  ALTER TABLE "_apps_v_version_hero_logos" DROP CONSTRAINT "_integrations_v_version_hero_logos_logo_id_media_id_fk";
  
  ALTER TABLE "_apps_v_version_hero_logos" DROP CONSTRAINT "_integrations_v_version_hero_logos_parent_id_fk";
  
  ALTER TABLE "_apps_v_version_features" DROP CONSTRAINT "_integrations_v_version_features_parent_id_fk";
  
  ALTER TABLE "_apps_v_version_features_locales" DROP CONSTRAINT "_integrations_v_version_features_locales_parent_id_fk";
  
  ALTER TABLE "_apps_v" DROP CONSTRAINT "_integrations_v_parent_id_integrations_id_fk";
  
  ALTER TABLE "_apps_v" DROP CONSTRAINT "_integrations_v_version_icon_id_media_id_fk";
  
  ALTER TABLE "_apps_v_locales" DROP CONSTRAINT "_integrations_v_locales_version_hero_media_id_media_id_fk";
  
  ALTER TABLE "_apps_v_locales" DROP CONSTRAINT "_integrations_v_locales_parent_id_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_parent_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_pages_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_posts_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_solutions_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_integrations_fk";
  
  ALTER TABLE "_apps_v_rels" DROP CONSTRAINT "_integrations_v_rels_media_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_integrations_fk";
  
  DROP INDEX IF EXISTS "pages_blocks_apps_block_block_header_links_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_block_header_links_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_block_header_links_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_body_links_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_body_links_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_body_links_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_order_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_parent_id_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_path_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_apps_block_media_idx";
  DROP INDEX IF EXISTS "pages_rels_integrations_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_block_header_links_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_block_header_links_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_block_header_links_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_body_links_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_body_links_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_body_links_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_order_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_parent_id_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_path_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_locale_idx";
  DROP INDEX IF EXISTS "_pages_v_blocks_apps_block_media_idx";
  DROP INDEX IF EXISTS "_pages_v_rels_integrations_id_idx";
  DROP INDEX IF EXISTS "integrations_hero_links_order_idx";
  DROP INDEX IF EXISTS "integrations_hero_links_parent_id_idx";
  DROP INDEX IF EXISTS "integrations_hero_links_locale_idx";
  DROP INDEX IF EXISTS "integrations_hero_logos_order_idx";
  DROP INDEX IF EXISTS "integrations_hero_logos_parent_id_idx";
  DROP INDEX IF EXISTS "integrations_hero_logos_logo_idx";
  DROP INDEX IF EXISTS "integrations_features_order_idx";
  DROP INDEX IF EXISTS "integrations_features_parent_id_idx";
  DROP INDEX IF EXISTS "integrations_features_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "integrations_icon_idx";
  DROP INDEX IF EXISTS "integrations_slug_idx";
  DROP INDEX IF EXISTS "integrations_updated_at_idx";
  DROP INDEX IF EXISTS "integrations_created_at_idx";
  DROP INDEX IF EXISTS "integrations__status_idx";
  DROP INDEX IF EXISTS "integrations_hero_hero_media_idx";
  DROP INDEX IF EXISTS "integrations_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "integrations_rels_order_idx";
  DROP INDEX IF EXISTS "integrations_rels_parent_idx";
  DROP INDEX IF EXISTS "integrations_rels_path_idx";
  DROP INDEX IF EXISTS "integrations_rels_locale_idx";
  DROP INDEX IF EXISTS "integrations_rels_pages_id_idx";
  DROP INDEX IF EXISTS "integrations_rels_posts_id_idx";
  DROP INDEX IF EXISTS "integrations_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "integrations_rels_integrations_id_idx";
  DROP INDEX IF EXISTS "integrations_rels_media_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_links_order_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_links_parent_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_links_locale_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_logos_order_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_logos_parent_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_logos_logo_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_features_order_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_features_parent_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_features_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "_integrations_v_parent_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_version_icon_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_version_slug_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_version_updated_at_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_version_created_at_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_version__status_idx";
  DROP INDEX IF EXISTS "_integrations_v_created_at_idx";
  DROP INDEX IF EXISTS "_integrations_v_updated_at_idx";
  DROP INDEX IF EXISTS "_integrations_v_snapshot_idx";
  DROP INDEX IF EXISTS "_integrations_v_published_locale_idx";
  DROP INDEX IF EXISTS "_integrations_v_latest_idx";
  DROP INDEX IF EXISTS "_integrations_v_version_hero_version_hero_media_idx";
  DROP INDEX IF EXISTS "_integrations_v_locales_locale_parent_id_unique";
  DROP INDEX IF EXISTS "_integrations_v_rels_order_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_parent_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_path_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_locale_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_pages_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_posts_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_solutions_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_integrations_id_idx";
  DROP INDEX IF EXISTS "_integrations_v_rels_media_id_idx";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_integrations_id_idx";
  ALTER TABLE "_pages_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_posts_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "_solutions_v" ADD COLUMN "autosave" boolean;
  ALTER TABLE "apps" ADD COLUMN "link_url" varchar;
  ALTER TABLE "apps" ADD COLUMN "hero_type" "enum_apps_hero_type" DEFAULT 'hero01';
  ALTER TABLE "apps" ADD COLUMN "hero_supporting_text" varchar;
  ALTER TABLE "apps" ADD COLUMN "hero_badge_type" "enum_apps_hero_badge_type";
  ALTER TABLE "apps" ADD COLUMN "hero_badge_color" "badge_color" DEFAULT 'blue';
  ALTER TABLE "apps" ADD COLUMN "hero_badge_icon" varchar;
  ALTER TABLE "apps" ADD COLUMN "hero_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row';
  ALTER TABLE "apps" ADD COLUMN "published_at" timestamp(3) with time zone;
  ALTER TABLE "apps" ADD COLUMN "slug" varchar;
  ALTER TABLE "apps" ADD COLUMN "slug_lock" boolean DEFAULT true;
  ALTER TABLE "apps" ADD COLUMN "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL;
  ALTER TABLE "apps" ADD COLUMN "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL;
  ALTER TABLE "apps" ADD COLUMN "_status" "enum_apps_status" DEFAULT 'draft';
  ALTER TABLE "apps_features_locales" ADD COLUMN "description" varchar;
  ALTER TABLE "apps_features_locales" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "apps_features_locales" ADD COLUMN "_parent_id" varchar NOT NULL;
  ALTER TABLE "_apps_v" ADD COLUMN "autosave" boolean;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_block_header_links" ADD CONSTRAINT "pages_blocks_apps_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps_body_links" ADD CONSTRAINT "pages_blocks_apps_body_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps" ADD CONSTRAINT "pages_blocks_apps_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_apps" ADD CONSTRAINT "pages_blocks_apps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_block_header_links" ADD CONSTRAINT "_pages_v_blocks_apps_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps_body_links" ADD CONSTRAINT "_pages_v_blocks_apps_body_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps" ADD CONSTRAINT "_pages_v_blocks_apps_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_apps" ADD CONSTRAINT "_pages_v_blocks_apps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_hero_links" ADD CONSTRAINT "apps_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_hero_logos" ADD CONSTRAINT "apps_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_hero_logos" ADD CONSTRAINT "apps_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_features" ADD CONSTRAINT "apps_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps" ADD CONSTRAINT "apps_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_features_locales" ADD CONSTRAINT "apps_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."apps_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_locales" ADD CONSTRAINT "apps_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_locales" ADD CONSTRAINT "apps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "apps_rels" ADD CONSTRAINT "apps_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_version_hero_links" ADD CONSTRAINT "_apps_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_version_hero_logos" ADD CONSTRAINT "_apps_v_version_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_version_hero_logos" ADD CONSTRAINT "_apps_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_version_features" ADD CONSTRAINT "_apps_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_version_features_locales" ADD CONSTRAINT "_apps_v_version_features_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_apps_v_version_features"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v" ADD CONSTRAINT "_apps_v_parent_id_apps_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."apps"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v" ADD CONSTRAINT "_apps_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_locales" ADD CONSTRAINT "_apps_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_locales" ADD CONSTRAINT "_apps_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_apps_v_rels" ADD CONSTRAINT "_apps_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_apps_fk" FOREIGN KEY ("apps_id") REFERENCES "public"."apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_header_links_order_idx" ON "pages_blocks_apps_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_header_links_parent_id_idx" ON "pages_blocks_apps_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_block_header_links_locale_idx" ON "pages_blocks_apps_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_body_links_order_idx" ON "pages_blocks_apps_body_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_body_links_parent_id_idx" ON "pages_blocks_apps_body_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_body_links_locale_idx" ON "pages_blocks_apps_body_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_order_idx" ON "pages_blocks_apps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_parent_id_idx" ON "pages_blocks_apps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_path_idx" ON "pages_blocks_apps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_locale_idx" ON "pages_blocks_apps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_apps_media_idx" ON "pages_blocks_apps" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_apps_id_idx" ON "pages_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_header_links_order_idx" ON "_pages_v_blocks_apps_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_header_links_parent_id_idx" ON "_pages_v_blocks_apps_block_header_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_block_header_links_locale_idx" ON "_pages_v_blocks_apps_block_header_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_body_links_order_idx" ON "_pages_v_blocks_apps_body_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_body_links_parent_id_idx" ON "_pages_v_blocks_apps_body_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_body_links_locale_idx" ON "_pages_v_blocks_apps_body_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_order_idx" ON "_pages_v_blocks_apps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_parent_id_idx" ON "_pages_v_blocks_apps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_path_idx" ON "_pages_v_blocks_apps" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_locale_idx" ON "_pages_v_blocks_apps" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_apps_media_idx" ON "_pages_v_blocks_apps" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_apps_id_idx" ON "_pages_v_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_solutions_v_autosave_idx" ON "_solutions_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "apps_hero_links_order_idx" ON "apps_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "apps_hero_links_parent_id_idx" ON "apps_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "apps_hero_links_locale_idx" ON "apps_hero_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "apps_hero_logos_order_idx" ON "apps_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "apps_hero_logos_parent_id_idx" ON "apps_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "apps_hero_logos_logo_idx" ON "apps_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "apps_features_order_idx" ON "apps_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "apps_features_parent_id_idx" ON "apps_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "apps_icon_idx" ON "apps" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "apps_slug_idx" ON "apps" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "apps_updated_at_idx" ON "apps" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "apps_created_at_idx" ON "apps" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "apps__status_idx" ON "apps" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "apps_features_locales_locale_parent_id_unique" ON "apps_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "apps_hero_hero_media_idx" ON "apps_locales" USING btree ("hero_media_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "apps_locales_locale_parent_id_unique" ON "apps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "apps_rels_order_idx" ON "apps_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "apps_rels_parent_idx" ON "apps_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "apps_rels_path_idx" ON "apps_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "apps_rels_locale_idx" ON "apps_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_pages_id_idx" ON "apps_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_posts_id_idx" ON "apps_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_solutions_id_idx" ON "apps_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_apps_id_idx" ON "apps_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "apps_rels_media_id_idx" ON "apps_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_links_order_idx" ON "_apps_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_links_parent_id_idx" ON "_apps_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_links_locale_idx" ON "_apps_v_version_hero_links" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_logos_order_idx" ON "_apps_v_version_hero_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_logos_parent_id_idx" ON "_apps_v_version_hero_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_logos_logo_idx" ON "_apps_v_version_hero_logos" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_features_order_idx" ON "_apps_v_version_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_features_parent_id_idx" ON "_apps_v_version_features" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_apps_v_version_features_locales_locale_parent_id_unique" ON "_apps_v_version_features_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_parent_idx" ON "_apps_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_version_icon_idx" ON "_apps_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_version_slug_idx" ON "_apps_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_version_updated_at_idx" ON "_apps_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_version_created_at_idx" ON "_apps_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_version__status_idx" ON "_apps_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_apps_v_created_at_idx" ON "_apps_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_apps_v_updated_at_idx" ON "_apps_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_apps_v_snapshot_idx" ON "_apps_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_apps_v_published_locale_idx" ON "_apps_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_latest_idx" ON "_apps_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_apps_v_autosave_idx" ON "_apps_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_apps_v_version_hero_version_hero_media_idx" ON "_apps_v_locales" USING btree ("version_hero_media_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_apps_v_locales_locale_parent_id_unique" ON "_apps_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_order_idx" ON "_apps_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_parent_idx" ON "_apps_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_path_idx" ON "_apps_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_locale_idx" ON "_apps_v_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_pages_id_idx" ON "_apps_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_posts_id_idx" ON "_apps_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_solutions_id_idx" ON "_apps_v_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_apps_id_idx" ON "_apps_v_rels" USING btree ("apps_id","locale");
  CREATE INDEX IF NOT EXISTS "_apps_v_rels_media_id_idx" ON "_apps_v_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_apps_id_idx" ON "payload_locked_documents_rels" USING btree ("apps_id");
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "icon_id";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "link_type";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "link_new_tab";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "link_url";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_type";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_supporting_text";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_badge_type";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_badge_color";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_badge_icon";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "hero_badge_icon_position";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "published_at";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "slug";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "slug_lock";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "updated_at";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "created_at";
  ALTER TABLE "apps_features_locales" DROP COLUMN IF EXISTS "_status";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "blurhash";
  ALTER TABLE "app_icons" DROP COLUMN IF EXISTS "blurhash";
  ALTER TABLE "public"."pages_blocks_apps" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_apps_type";
  CREATE TYPE "public"."enum_pages_blocks_apps_type" AS ENUM('appsBlock01', 'appsBlock02', 'appsBlock03', 'appsBlock04', 'appsBlockHero');
  ALTER TABLE "public"."pages_blocks_apps" ALTER COLUMN "type" SET DATA TYPE "public"."enum_pages_blocks_apps_type" USING "type"::"public"."enum_pages_blocks_apps_type";
  ALTER TABLE "public"."_pages_v_blocks_apps" ALTER COLUMN "type" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_apps_type";
  CREATE TYPE "public"."enum__pages_v_blocks_apps_type" AS ENUM('appsBlock01', 'appsBlock02', 'appsBlock03', 'appsBlock04', 'appsBlockHero');
  ALTER TABLE "public"."_pages_v_blocks_apps" ALTER COLUMN "type" SET DATA TYPE "public"."enum__pages_v_blocks_apps_type" USING "type"::"public"."enum__pages_v_blocks_apps_type";`)
}
