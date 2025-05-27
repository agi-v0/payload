import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'ar');
  CREATE TYPE "public"."link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."link_color" AS ENUM('brand', 'neutral');
  CREATE TYPE "public"."link_variant" AS ENUM('primary', 'secondary', 'tertiary', 'ghost', 'link');
  CREATE TYPE "public"."enum_archiveBlock_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_archiveBlock_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_callToActionBlock_type" AS ENUM('01', '02', '03', '04', '05', '06', '07');
  CREATE TYPE "public"."enum_callToActionBlock_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."badge_color" AS ENUM('blue', 'red', 'green', 'yellow', 'gray', 'inverted');
  CREATE TYPE "public"."badge_icon_position" AS ENUM('flex-row', 'flex-row-reverse');
  CREATE TYPE "public"."enum_customHtmlBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_customHtmlBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_dividerBlock_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum_faqBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_faqBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_faqBlock_type" AS ENUM('01', '02');
  CREATE TYPE "public"."enum_featuredAppsBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_featuredAppsBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_featuredAppsBlock_type" AS ENUM('01', '02', '03', '04', '05', '06');
  CREATE TYPE "public"."enum_featuresBlock_columns_size" AS ENUM('half', 'full', 'oneThird', 'twoThirds', 'sixtyPercent', 'fortyPercent');
  CREATE TYPE "public"."enum_featuresBlock_columns_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_featuresBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_featuresBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_featuresBlock_type" AS ENUM('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17');
  CREATE TYPE "public"."enum_galleryBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_galleryBlock_block_header_badge_type" AS ENUM('label', 'reference');
    CREATE TYPE "public"."enum_galleryBlock_type" AS ENUM('01', '02', '03', '04');
  CREATE TYPE "public"."enum_logosBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_logosBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_logosBlock_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum_metricsBlock_stats_indicator" AS ENUM('increase', 'decrease', 'noChange');
  CREATE TYPE "public"."enum_metricsBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_metricsBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_metricsBlock_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum_richTextBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_richTextBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_richTextBlock_type" AS ENUM('01', '02');
  CREATE TYPE "public"."enum_richTextBlock_max_width" AS ENUM('default', 'small', 'large', 'full');
  CREATE TYPE "public"."enum_testimonialsBlock_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum_testimonialsBlock_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_testimonialsBlock_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  CREATE TYPE "public"."enum_pages_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__archiveBlock_v_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__archiveBlock_v_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__callToActionBlock_v_type" AS ENUM('01', '02', '03', '04', '05', '06', '07');
  CREATE TYPE "public"."enum__callToActionBlock_v_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__customHtmlBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__customHtmlBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__dividerBlock_v_size" AS ENUM('small', 'medium', 'large');
  CREATE TYPE "public"."enum__faqBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__faqBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__faqBlock_v_type" AS ENUM('01', '02');
  CREATE TYPE "public"."enum__featuredAppsBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__featuredAppsBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__featuredAppsBlock_v_type" AS ENUM('01', '02', '03', '04', '05', '06');
  CREATE TYPE "public"."enum__featuresBlock_v_columns_size" AS ENUM('half', 'full', 'oneThird', 'twoThirds', 'sixtyPercent', 'fortyPercent');
  CREATE TYPE "public"."enum__featuresBlock_v_columns_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__featuresBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__featuresBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__featuresBlock_v_type" AS ENUM('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17');
  CREATE TYPE "public"."enum__galleryBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__galleryBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__galleryBlock_v_type" AS ENUM('01', '02', '03', '04');
  CREATE TYPE "public"."enum__logosBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__logosBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__logosBlock_v_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum__metricsBlock_v_stats_indicator" AS ENUM('increase', 'decrease', 'noChange');
  CREATE TYPE "public"."enum__metricsBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__metricsBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__metricsBlock_v_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum__richTextBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__richTextBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__richTextBlock_v_type" AS ENUM('01', '02');
  CREATE TYPE "public"."enum__richTextBlock_v_max_width" AS ENUM('default', 'small', 'large', 'full');
  CREATE TYPE "public"."enum__testimonialsBlock_v_block_header_type" AS ENUM('center', 'split', 'start');
  CREATE TYPE "public"."enum__testimonialsBlock_v_block_header_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__testimonialsBlock_v_type" AS ENUM('01', '02', '03');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('hero01', 'hero02', 'hero03', 'hero04', 'hero05', 'none');
  CREATE TYPE "public"."enum__pages_v_version_hero_badge_type" AS ENUM('label', 'reference');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_solutions_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__solutions_v_published_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_integrations_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__integrations_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__integrations_v_published_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_media_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_customers_testimonial_stats_indicator" AS ENUM('increase', 'decrease', 'noChange');
  CREATE TYPE "public"."enum_customers_testimonial_company_industry" AS ENUM('restaurants', 'retail', 'services');
  CREATE TYPE "public"."enum_customers_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__customers_v_version_testimonial_stats_indicator" AS ENUM('increase', 'decrease', 'noChange');
  CREATE TYPE "public"."enum__customers_v_version_testimonial_company_industry" AS ENUM('restaurants', 'retail', 'services');
  CREATE TYPE "public"."enum__customers_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__customers_v_published_locale" AS ENUM('en', 'ar');
  CREATE TYPE "public"."enum_changelog_categories" AS ENUM('bug-fix', 'feature', 'improvement', 'security', 'other');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_tabs_nav_items_style" AS ENUM('default', 'featured', 'list');
  CREATE TABLE IF NOT EXISTS "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "archiveBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"populate_by" "enum_archiveBlock_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_archiveBlock_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "archiveBlock_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "callToActionBlock_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "callToActionBlock_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "callToActionBlock_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"subtitle" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "callToActionBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_callToActionBlock_type" DEFAULT '01',
  	"badge_type" "enum_callToActionBlock_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"supporting_text" varchar,
  	"form_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "callToActionBlock_locales" (
  	"badge_label" varchar,
  	"rich_text" jsonb,
  	"media_desktop_light_id" uuid,
  	"media_desktop_dark_id" uuid,
  	"media_mobile_light_id" uuid,
  	"media_mobile_dark_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "customHtmlBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "customHtmlBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "customHtmlBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_customHtmlBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_customHtmlBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"html_content" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "customHtmlBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "dividerBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_dividerBlock_size" DEFAULT 'small',
  	"enable_divider" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "faqBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "faqBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faqBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_faqBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_faqBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_faqBlock_type" DEFAULT '01',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "faqBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_featuredAppsBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_featuredAppsBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_featuredAppsBlock_type" DEFAULT '04',
  	"media_id" uuid,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "featuredAppsBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_featuresBlock_columns_size" DEFAULT 'half',
  	"icon" varchar,
  	"enable_badge" boolean,
  	"enable_cta" boolean,
  	"reverse_order" boolean,
  	"badge_type" "enum_featuresBlock_columns_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock_columns_locales" (
  	"image_id" uuid,
  	"tab_label" varchar,
  	"content_title" varchar,
  	"content_subtitle" varchar,
  	"rich_text_content" jsonb,
  	"badge_label" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_featuresBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_featuresBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_featuresBlock_type" DEFAULT '01',
  	"block_image_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "featuresBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"c_t_a_label" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "formBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" uuid,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock_interactive_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock_interactive_gallery_locales" (
  	"image_id" uuid,
  	"panel_title" varchar,
  	"panel_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_galleryBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_galleryBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_galleryBlock_type" DEFAULT '01',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "galleryBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "logosBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "logosBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "logosBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_logosBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_logosBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_logosBlock_type",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "logosBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"indicator" "enum_metricsBlock_stats_indicator" DEFAULT 'noChange'
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock_stats_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_metricsBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_metricsBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_metricsBlock_type" DEFAULT '01',
  	"enable_logos" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "metricsBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"block_image_media_id" uuid,
  	"table" jsonb,
  	"logos_headline" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "richTextBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "richTextBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "richTextBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_richTextBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_richTextBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_richTextBlock_type" DEFAULT '01',
  	"max_width" "enum_richTextBlock_max_width" DEFAULT 'default',
  	"columns" numeric DEFAULT 1,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "richTextBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "testimonialsBlock_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "testimonialsBlock_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "testimonialsBlock" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_header_type" "enum_testimonialsBlock_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum_testimonialsBlock_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum_testimonialsBlock_type" DEFAULT '01',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "testimonialsBlock_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'hero01',
  	"hero_badge_type" "enum_pages_hero_badge_type",
  	"hero_badge_color" "badge_color" DEFAULT 'blue',
  	"hero_badge_icon" varchar,
  	"hero_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"hero_supporting_text" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_locales" (
  	"hero_badge_label" varchar,
  	"hero_rich_text" jsonb,
  	"hero_media_desktop_light_id" uuid,
  	"hero_media_desktop_dark_id" uuid,
  	"hero_media_mobile_light_id" uuid,
  	"hero_media_mobile_dark_id" uuid,
  	"hero_logos_headline" varchar,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"solutions_id" uuid,
  	"integrations_id" uuid,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"media_id" uuid,
  	"categories_id" uuid,
  	"faq_id" uuid,
  	"customers_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_archiveBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"populate_by" "enum__archiveBlock_v_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__archiveBlock_v_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_archiveBlock_v_locales" (
  	"intro_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_callToActionBlock_v_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_callToActionBlock_v_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_callToActionBlock_v_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"icon" varchar,
  	"title" varchar,
  	"subtitle" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_callToActionBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"type" "enum__callToActionBlock_v_type" DEFAULT '01',
  	"badge_type" "enum__callToActionBlock_v_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"supporting_text" varchar,
  	"form_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_callToActionBlock_v_locales" (
  	"badge_label" varchar,
  	"rich_text" jsonb,
  	"media_desktop_light_id" uuid,
  	"media_desktop_dark_id" uuid,
  	"media_mobile_light_id" uuid,
  	"media_mobile_dark_id" uuid,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_customHtmlBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_customHtmlBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_customHtmlBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__customHtmlBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__customHtmlBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"html_content" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_customHtmlBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_dividerBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"size" "enum__dividerBlock_v_size" DEFAULT 'small',
  	"enable_divider" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_faqBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_faqBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_faqBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__faqBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__faqBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__faqBlock_v_type" DEFAULT '01',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_faqBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v_cards_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__featuredAppsBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__featuredAppsBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__featuredAppsBlock_v_type" DEFAULT '04',
  	"media_id" uuid,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuredAppsBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"size" "enum__featuresBlock_v_columns_size" DEFAULT 'half',
  	"icon" varchar,
  	"enable_badge" boolean,
  	"enable_cta" boolean,
  	"reverse_order" boolean,
  	"badge_type" "enum__featuresBlock_v_columns_badge_type",
  	"badge_color" "badge_color" DEFAULT 'blue',
  	"badge_icon" varchar,
  	"badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v_columns_locales" (
  	"image_id" uuid,
  	"tab_label" varchar,
  	"content_title" varchar,
  	"content_subtitle" varchar,
  	"rich_text_content" jsonb,
  	"badge_label" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__featuresBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__featuresBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__featuresBlock_v_type" DEFAULT '01',
  	"block_image_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_featuresBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"c_t_a_label" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_formBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"form_id" uuid,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v_interactive_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v_interactive_gallery_locales" (
  	"image_id" uuid,
  	"panel_title" varchar,
  	"panel_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__galleryBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__galleryBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__galleryBlock_v_type" DEFAULT '01',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_galleryBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_logosBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_logosBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_logosBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__logosBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__logosBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__logosBlock_v_type",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_logosBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"value" varchar,
  	"indicator" "enum__metricsBlock_v_stats_indicator" DEFAULT 'noChange',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v_stats_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__metricsBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__metricsBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__metricsBlock_v_type" DEFAULT '01',
  	"enable_logos" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_metricsBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"block_image_media_id" uuid,
  	"table" jsonb,
  	"logos_headline" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_richTextBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_richTextBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_richTextBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__richTextBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__richTextBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__richTextBlock_v_type" DEFAULT '01',
  	"max_width" "enum__richTextBlock_v_max_width" DEFAULT 'default',
  	"columns" numeric DEFAULT 1,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_richTextBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_testimonialsBlock_v_block_header_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_testimonialsBlock_v_block_header_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_testimonialsBlock_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"block_header_type" "enum__testimonialsBlock_v_block_header_type" DEFAULT 'center',
  	"block_header_badge_type" "enum__testimonialsBlock_v_block_header_badge_type",
  	"block_header_badge_color" "badge_color" DEFAULT 'blue',
  	"block_header_badge_icon" varchar,
  	"block_header_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"type" "enum__testimonialsBlock_v_type" DEFAULT '01',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_testimonialsBlock_v_locales" (
  	"block_header_badge_label" varchar,
  	"block_header_header_text" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'hero01',
  	"version_hero_badge_type" "enum__pages_v_version_hero_badge_type",
  	"version_hero_badge_color" "badge_color" DEFAULT 'blue',
  	"version_hero_badge_icon" varchar,
  	"version_hero_badge_icon_position" "badge_icon_position" DEFAULT 'flex-row',
  	"version_hero_supporting_text" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_locales" (
  	"version_hero_badge_label" varchar,
  	"version_hero_rich_text" jsonb,
  	"version_hero_media_desktop_light_id" uuid,
  	"version_hero_media_desktop_dark_id" uuid,
  	"version_hero_media_mobile_light_id" uuid,
  	"version_hero_media_mobile_dark_id" uuid,
  	"version_hero_logos_headline" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"solutions_id" uuid,
  	"integrations_id" uuid,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"media_id" uuid,
  	"categories_id" uuid,
  	"faq_id" uuid,
  	"customers_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_locales" (
  	"title" varchar,
  	"hero_image_id" uuid,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"posts_id" uuid,
  	"categories_id" uuid,
  	"users_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
  	"version_title" varchar,
  	"version_hero_image_id" uuid,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"posts_id" uuid,
  	"categories_id" uuid,
  	"users_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "solutions" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"icon_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"published_at" timestamp(3) with time zone,
  	"ecosystem_id" uuid,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_solutions_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_locales" (
  	"name" varchar,
  	"tagline" varchar,
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "solutions_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_icon_id" uuid,
  	"version_link_type" "link_type" DEFAULT 'reference',
  	"version_link_new_tab" boolean,
  	"version_link_url" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_ecosystem_id" uuid,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__solutions_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__solutions_v_published_locale",
  	"latest" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v_locales" (
  	"version_name" varchar,
  	"version_tagline" varchar,
  	"version_link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_solutions_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "integrations_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "integrations_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "integrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"icon_id" uuid,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"company_email" varchar,
  	"company_phone" varchar,
  	"docs_link_type" "link_type" DEFAULT 'reference',
  	"docs_link_new_tab" boolean,
  	"docs_link_url" varchar,
  	"supporting_text" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_integrations_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "integrations_locales" (
  	"name" varchar,
  	"tagline" varchar,
  	"summary" jsonb,
  	"link_label" varchar,
  	"company_name" varchar,
  	"docs_link_label" varchar,
  	"hero" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "integrations_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v_version_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_icon_id" uuid,
  	"version_link_type" "link_type" DEFAULT 'reference',
  	"version_link_new_tab" boolean,
  	"version_link_url" varchar,
  	"version_company_email" varchar,
  	"version_company_phone" varchar,
  	"version_docs_link_type" "link_type" DEFAULT 'reference',
  	"version_docs_link_new_tab" boolean,
  	"version_docs_link_url" varchar,
  	"version_supporting_text" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__integrations_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__integrations_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v_locales" (
  	"version_name" varchar,
  	"version_tagline" varchar,
  	"version_summary" jsonb,
  	"version_link_label" varchar,
  	"version_company_name" varchar,
  	"version_docs_link_label" varchar,
  	"version_hero" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" uuid,
  	"version_meta_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_integrations_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" jsonb,
  	"locale" "enum_media_locale",
  	"blurhash" varchar,
  	"prefix" varchar DEFAULT 'media',
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
  
  CREATE TABLE IF NOT EXISTS "media_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "customers_testimonial_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"indicator" "enum_customers_testimonial_stats_indicator" DEFAULT 'noChange'
  );
  
  CREATE TABLE IF NOT EXISTS "customers_testimonial_stats_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "customers" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar,
  	"testimonial_featured_image_id" uuid,
  	"testimonial_company_company_logo_id" uuid,
  	"testimonial_company_link_type" "link_type" DEFAULT 'reference',
  	"testimonial_company_link_new_tab" boolean,
  	"testimonial_company_link_url" varchar,
  	"testimonial_company_industry" "enum_customers_testimonial_company_industry",
  	"testimonial_company_founding_year" numeric,
  	"testimonial_company_branches" varchar,
  	"testimonial_author_info_avatar_id" uuid,
  	"enable_case_study" boolean DEFAULT false,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_customers_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "customers_locales" (
  	"testimonial_quote" jsonb,
  	"testimonial_company_company_name" varchar,
  	"testimonial_company_link_label" varchar,
  	"testimonial_company_location" varchar,
  	"testimonial_author_info_name" varchar,
  	"testimonial_author_info_title" varchar,
  	"case_study_case_studytitle" varchar,
  	"case_study_summary" varchar,
  	"case_study_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "customers_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"solutions_id" uuid,
  	"integrations_id" uuid,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "_customers_v_version_testimonial_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"value" varchar,
  	"indicator" "enum__customers_v_version_testimonial_stats_indicator" DEFAULT 'noChange',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_customers_v_version_testimonial_stats_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_customers_v" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"parent_id" uuid,
  	"version_title" varchar,
  	"version_testimonial_featured_image_id" uuid,
  	"version_testimonial_company_company_logo_id" uuid,
  	"version_testimonial_company_link_type" "link_type" DEFAULT 'reference',
  	"version_testimonial_company_link_new_tab" boolean,
  	"version_testimonial_company_link_url" varchar,
  	"version_testimonial_company_industry" "enum__customers_v_version_testimonial_company_industry",
  	"version_testimonial_company_founding_year" numeric,
  	"version_testimonial_company_branches" varchar,
  	"version_testimonial_author_info_avatar_id" uuid,
  	"version_enable_case_study" boolean DEFAULT false,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__customers_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__customers_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_customers_v_locales" (
  	"version_testimonial_quote" jsonb,
  	"version_testimonial_company_company_name" varchar,
  	"version_testimonial_company_link_label" varchar,
  	"version_testimonial_company_location" varchar,
  	"version_testimonial_author_info_name" varchar,
  	"version_testimonial_author_info_title" varchar,
  	"version_case_study_case_studytitle" varchar,
  	"version_case_study_summary" varchar,
  	"version_case_study_content" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_customers_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"solutions_id" uuid,
  	"integrations_id" uuid,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"categories_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" uuid,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "categories_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faq" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"category_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "faq_locales" (
  	"question" varchar,
  	"answer" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "changelog_categories" (
  	"order" integer NOT NULL,
  	"parent_id" uuid NOT NULL,
  	"value" "enum_changelog_categories",
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "changelog" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"version" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "changelog_locales" (
  	"title" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"form_id" uuid NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" uuid,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_locales" (
  	"title" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid,
  	"integrations_id" uuid,
  	"media_id" uuid,
  	"customers_id" uuid,
  	"categories_id" uuid,
  	"faq_id" uuid,
  	"changelog_id" uuid,
  	"users_id" uuid,
  	"redirects_id" uuid,
  	"forms_id" uuid,
  	"form_submissions_id" uuid,
  	"search_id" uuid,
  	"payload_jobs_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"announcement_bar_link_type" "link_type" DEFAULT 'reference',
  	"announcement_bar_link_new_tab" boolean,
  	"announcement_bar_link_url" varchar,
  	"custom_head_html" varchar,
  	"custom_body_html" varchar,
  	"tag_manager_id" varchar,
  	"analytics_scripts" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "settings_locales" (
  	"meta_title" varchar,
  	"meta_image_id" uuid,
  	"meta_description" varchar,
  	"announcement_bar_text" varchar,
  	"announcement_bar_link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" uuid NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "settings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_description_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_description_links_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items_featured_link_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_icon" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items_featured_link_links_locales" (
  	"link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items_list_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_icon" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items_list_links_links_locales" (
  	"link_label" varchar,
  	"link_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_header_tabs_nav_items_style" DEFAULT 'default',
  	"default_link_link_type" "link_type" DEFAULT 'reference',
  	"default_link_link_new_tab" boolean,
  	"default_link_link_url" varchar,
  	"default_link_link_icon" varchar,
  	"default_link_description" varchar,
  	"featured_link_tag" varchar,
  	"featured_link_label" jsonb,
  	"list_links_tag" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_nav_items_locales" (
  	"default_link_link_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enable_direct_link" boolean DEFAULT true,
  	"enable_dropdown" boolean DEFAULT false,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_tabs_locales" (
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_color" "link_color" DEFAULT 'neutral',
  	"link_variant" "link_variant" DEFAULT 'primary'
  );
  
  CREATE TABLE IF NOT EXISTS "header_cta_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns_nav_items_locales" (
  	"link_label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" uuid,
  	"posts_id" uuid,
  	"solutions_id" uuid
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links_locales" ADD CONSTRAINT "pages_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "archiveBlock" ADD CONSTRAINT "archiveBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "archiveBlock_locales" ADD CONSTRAINT "archiveBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."archiveBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_links" ADD CONSTRAINT "callToActionBlock_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_links_locales" ADD CONSTRAINT "callToActionBlock_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock_list" ADD CONSTRAINT "callToActionBlock_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock" ADD CONSTRAINT "callToActionBlock_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "callToActionBlock" ADD CONSTRAINT "callToActionBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "callToActionBlock_locales" ADD CONSTRAINT "callToActionBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customHtmlBlock_block_header_links" ADD CONSTRAINT "customHtmlBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customHtmlBlock_block_header_links_locales" ADD CONSTRAINT "customHtmlBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customHtmlBlock" ADD CONSTRAINT "customHtmlBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customHtmlBlock_locales" ADD CONSTRAINT "customHtmlBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "dividerBlock" ADD CONSTRAINT "dividerBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faqBlock_block_header_links" ADD CONSTRAINT "faqBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faqBlock_block_header_links_locales" ADD CONSTRAINT "faqBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faqBlock" ADD CONSTRAINT "faqBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faqBlock_locales" ADD CONSTRAINT "faqBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faqBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock_block_header_links" ADD CONSTRAINT "featuredAppsBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock_block_header_links_locales" ADD CONSTRAINT "featuredAppsBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock_cards" ADD CONSTRAINT "featuredAppsBlock_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock_cards_locales" ADD CONSTRAINT "featuredAppsBlock_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock" ADD CONSTRAINT "featuredAppsBlock_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock" ADD CONSTRAINT "featuredAppsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuredAppsBlock_locales" ADD CONSTRAINT "featuredAppsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_block_header_links" ADD CONSTRAINT "featuresBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_block_header_links_locales" ADD CONSTRAINT "featuresBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_columns" ADD CONSTRAINT "featuresBlock_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_columns_locales" ADD CONSTRAINT "featuresBlock_columns_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_columns_locales" ADD CONSTRAINT "featuresBlock_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock" ADD CONSTRAINT "featuresBlock_block_image_id_media_id_fk" FOREIGN KEY ("block_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock" ADD CONSTRAINT "featuresBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "featuresBlock_locales" ADD CONSTRAINT "featuresBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "formBlock" ADD CONSTRAINT "formBlock_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "formBlock" ADD CONSTRAINT "formBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_block_header_links" ADD CONSTRAINT "galleryBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_block_header_links_locales" ADD CONSTRAINT "galleryBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_interactive_gallery" ADD CONSTRAINT "galleryBlock_interactive_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_interactive_gallery_locales" ADD CONSTRAINT "galleryBlock_interactive_gallery_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_interactive_gallery_locales" ADD CONSTRAINT "galleryBlock_interactive_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock_interactive_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock" ADD CONSTRAINT "galleryBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "galleryBlock_locales" ADD CONSTRAINT "galleryBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "logosBlock_block_header_links" ADD CONSTRAINT "logosBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."logosBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "logosBlock_block_header_links_locales" ADD CONSTRAINT "logosBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."logosBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "logosBlock" ADD CONSTRAINT "logosBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "logosBlock_locales" ADD CONSTRAINT "logosBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."logosBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_block_header_links" ADD CONSTRAINT "metricsBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metricsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_block_header_links_locales" ADD CONSTRAINT "metricsBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metricsBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_stats" ADD CONSTRAINT "metricsBlock_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metricsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_stats_locales" ADD CONSTRAINT "metricsBlock_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metricsBlock_stats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock" ADD CONSTRAINT "metricsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_locales" ADD CONSTRAINT "metricsBlock_locales_block_image_media_id_media_id_fk" FOREIGN KEY ("block_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "metricsBlock_locales" ADD CONSTRAINT "metricsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."metricsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "richTextBlock_block_header_links" ADD CONSTRAINT "richTextBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."richTextBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "richTextBlock_block_header_links_locales" ADD CONSTRAINT "richTextBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."richTextBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "richTextBlock" ADD CONSTRAINT "richTextBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "richTextBlock_locales" ADD CONSTRAINT "richTextBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."richTextBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonialsBlock_block_header_links" ADD CONSTRAINT "testimonialsBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonialsBlock_block_header_links_locales" ADD CONSTRAINT "testimonialsBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonialsBlock" ADD CONSTRAINT "testimonialsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "testimonialsBlock_locales" ADD CONSTRAINT "testimonialsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links_locales" ADD CONSTRAINT "_pages_v_version_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_archiveBlock_v" ADD CONSTRAINT "_archiveBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_archiveBlock_v_locales" ADD CONSTRAINT "_archiveBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_archiveBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_links" ADD CONSTRAINT "_callToActionBlock_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_links_locales" ADD CONSTRAINT "_callToActionBlock_v_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_list" ADD CONSTRAINT "_callToActionBlock_v_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v" ADD CONSTRAINT "_callToActionBlock_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v" ADD CONSTRAINT "_callToActionBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
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
  
  DO $$ BEGIN
   ALTER TABLE "_callToActionBlock_v_locales" ADD CONSTRAINT "_callToActionBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customHtmlBlock_v_block_header_links" ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customHtmlBlock_v_block_header_links_locales" ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customHtmlBlock_v" ADD CONSTRAINT "_customHtmlBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customHtmlBlock_v_locales" ADD CONSTRAINT "_customHtmlBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_dividerBlock_v" ADD CONSTRAINT "_dividerBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faqBlock_v_block_header_links" ADD CONSTRAINT "_faqBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faqBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faqBlock_v_block_header_links_locales" ADD CONSTRAINT "_faqBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faqBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faqBlock_v" ADD CONSTRAINT "_faqBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_faqBlock_v_locales" ADD CONSTRAINT "_faqBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_faqBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v_block_header_links" ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v_block_header_links_locales" ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v_cards" ADD CONSTRAINT "_featuredAppsBlock_v_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v_cards_locales" ADD CONSTRAINT "_featuredAppsBlock_v_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v" ADD CONSTRAINT "_featuredAppsBlock_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v" ADD CONSTRAINT "_featuredAppsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuredAppsBlock_v_locales" ADD CONSTRAINT "_featuredAppsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_block_header_links" ADD CONSTRAINT "_featuresBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_block_header_links_locales" ADD CONSTRAINT "_featuresBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_columns" ADD CONSTRAINT "_featuresBlock_v_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_columns_locales" ADD CONSTRAINT "_featuresBlock_v_columns_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_columns_locales" ADD CONSTRAINT "_featuresBlock_v_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v" ADD CONSTRAINT "_featuresBlock_v_block_image_id_media_id_fk" FOREIGN KEY ("block_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v" ADD CONSTRAINT "_featuresBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_featuresBlock_v_locales" ADD CONSTRAINT "_featuresBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_formBlock_v" ADD CONSTRAINT "_formBlock_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_formBlock_v" ADD CONSTRAINT "_formBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_block_header_links" ADD CONSTRAINT "_galleryBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_block_header_links_locales" ADD CONSTRAINT "_galleryBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_interactive_gallery" ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_interactive_gallery_locales" ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_interactive_gallery_locales" ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v_interactive_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v" ADD CONSTRAINT "_galleryBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_galleryBlock_v_locales" ADD CONSTRAINT "_galleryBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_logosBlock_v_block_header_links" ADD CONSTRAINT "_logosBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_logosBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_logosBlock_v_block_header_links_locales" ADD CONSTRAINT "_logosBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_logosBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_logosBlock_v" ADD CONSTRAINT "_logosBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_logosBlock_v_locales" ADD CONSTRAINT "_logosBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_logosBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_block_header_links" ADD CONSTRAINT "_metricsBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metricsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_block_header_links_locales" ADD CONSTRAINT "_metricsBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metricsBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_stats" ADD CONSTRAINT "_metricsBlock_v_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metricsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_stats_locales" ADD CONSTRAINT "_metricsBlock_v_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metricsBlock_v_stats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v" ADD CONSTRAINT "_metricsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_locales" ADD CONSTRAINT "_metricsBlock_v_locales_block_image_media_id_media_id_fk" FOREIGN KEY ("block_image_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_metricsBlock_v_locales" ADD CONSTRAINT "_metricsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_metricsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_richTextBlock_v_block_header_links" ADD CONSTRAINT "_richTextBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_richTextBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_richTextBlock_v_block_header_links_locales" ADD CONSTRAINT "_richTextBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_richTextBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_richTextBlock_v" ADD CONSTRAINT "_richTextBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_richTextBlock_v_locales" ADD CONSTRAINT "_richTextBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_richTextBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_testimonialsBlock_v_block_header_links" ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_testimonialsBlock_v_block_header_links_locales" ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v_block_header_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_testimonialsBlock_v" ADD CONSTRAINT "_testimonialsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_testimonialsBlock_v_locales" ADD CONSTRAINT "_testimonialsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
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
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions" ADD CONSTRAINT "solutions_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions" ADD CONSTRAINT "solutions_ecosystem_id_categories_id_fk" FOREIGN KEY ("ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_locales" ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "solutions_rels" ADD CONSTRAINT "solutions_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v" ADD CONSTRAINT "_solutions_v_version_ecosystem_id_categories_id_fk" FOREIGN KEY ("version_ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_locales" ADD CONSTRAINT "_solutions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_solutions_v_rels" ADD CONSTRAINT "_solutions_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_links" ADD CONSTRAINT "integrations_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_links_locales" ADD CONSTRAINT "integrations_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations" ADD CONSTRAINT "integrations_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "integrations_locales" ADD CONSTRAINT "integrations_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
   ALTER TABLE "integrations_rels" ADD CONSTRAINT "integrations_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_links" ADD CONSTRAINT "_integrations_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_integrations_v_version_links_locales" ADD CONSTRAINT "_integrations_v_version_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_version_links"("id") ON DELETE cascade ON UPDATE no action;
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
   ALTER TABLE "_integrations_v_locales" ADD CONSTRAINT "_integrations_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
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
   ALTER TABLE "_integrations_v_rels" ADD CONSTRAINT "_integrations_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_rels" ADD CONSTRAINT "media_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_rels" ADD CONSTRAINT "media_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_testimonial_stats" ADD CONSTRAINT "customers_testimonial_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_testimonial_stats_locales" ADD CONSTRAINT "customers_testimonial_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customers_testimonial_stats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers" ADD CONSTRAINT "customers_testimonial_featured_image_id_media_id_fk" FOREIGN KEY ("testimonial_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers" ADD CONSTRAINT "customers_testimonial_company_company_logo_id_media_id_fk" FOREIGN KEY ("testimonial_company_company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers" ADD CONSTRAINT "customers_testimonial_author_info_avatar_id_media_id_fk" FOREIGN KEY ("testimonial_author_info_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_locales" ADD CONSTRAINT "customers_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "customers_rels" ADD CONSTRAINT "customers_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_version_testimonial_stats" ADD CONSTRAINT "_customers_v_version_testimonial_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customers_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_version_testimonial_stats_locales" ADD CONSTRAINT "_customers_v_version_testimonial_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customers_v_version_testimonial_stats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v" ADD CONSTRAINT "_customers_v_parent_id_customers_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."customers"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v" ADD CONSTRAINT "_customers_v_version_testimonial_featured_image_id_media_id_fk" FOREIGN KEY ("version_testimonial_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v" ADD CONSTRAINT "_customers_v_version_testimonial_company_company_logo_id_media_id_fk" FOREIGN KEY ("version_testimonial_company_company_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v" ADD CONSTRAINT "_customers_v_version_testimonial_author_info_avatar_id_media_id_fk" FOREIGN KEY ("version_testimonial_author_info_avatar_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_locales" ADD CONSTRAINT "_customers_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customers_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_customers_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_customers_v_rels" ADD CONSTRAINT "_customers_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faq" ADD CONSTRAINT "faq_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "faq_locales" ADD CONSTRAINT "faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "changelog_categories" ADD CONSTRAINT "changelog_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."changelog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "changelog_locales" ADD CONSTRAINT "changelog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."changelog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_changelog_fk" FOREIGN KEY ("changelog_id") REFERENCES "public"."changelog"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_locales" ADD CONSTRAINT "settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "settings_rels" ADD CONSTRAINT "settings_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_description_links" ADD CONSTRAINT "header_tabs_description_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_description_links_locales" ADD CONSTRAINT "header_tabs_description_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_description_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items_featured_link_links" ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items_featured_link_links_locales" ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items_featured_link_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items_list_links_links" ADD CONSTRAINT "header_tabs_nav_items_list_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items_list_links_links_locales" ADD CONSTRAINT "header_tabs_nav_items_list_links_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items_list_links_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items" ADD CONSTRAINT "header_tabs_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_nav_items_locales" ADD CONSTRAINT "header_tabs_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs" ADD CONSTRAINT "header_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_tabs_locales" ADD CONSTRAINT "header_tabs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_cta" ADD CONSTRAINT "header_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_cta_locales" ADD CONSTRAINT "header_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_cta"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_nav_items" ADD CONSTRAINT "footer_columns_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns_nav_items_locales" ADD CONSTRAINT "footer_columns_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_hero_links_locales_locale_parent_id_unique" ON "pages_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "archiveBlock_order_idx" ON "archiveBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "archiveBlock_parent_id_idx" ON "archiveBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "archiveBlock_path_idx" ON "archiveBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "archiveBlock_locales_locale_parent_id_unique" ON "archiveBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_links_order_idx" ON "callToActionBlock_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_links_parent_id_idx" ON "callToActionBlock_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "callToActionBlock_links_locales_locale_parent_id_unique" ON "callToActionBlock_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_list_order_idx" ON "callToActionBlock_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_list_parent_id_idx" ON "callToActionBlock_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_list_locale_idx" ON "callToActionBlock_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_order_idx" ON "callToActionBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_parent_id_idx" ON "callToActionBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_path_idx" ON "callToActionBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_form_idx" ON "callToActionBlock" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_desktop_media_desktop_light_idx" ON "callToActionBlock_locales" USING btree ("media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_desktop_media_desktop_dark_idx" ON "callToActionBlock_locales" USING btree ("media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_mobile_media_mobile_light_idx" ON "callToActionBlock_locales" USING btree ("media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "callToActionBlock_media_mobile_media_mobile_dark_idx" ON "callToActionBlock_locales" USING btree ("media_mobile_dark_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "callToActionBlock_locales_locale_parent_id_unique" ON "callToActionBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "customHtmlBlock_block_header_links_order_idx" ON "customHtmlBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "customHtmlBlock_block_header_links_parent_id_idx" ON "customHtmlBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "customHtmlBlock_block_header_links_locales_locale_parent_id_unique" ON "customHtmlBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "customHtmlBlock_order_idx" ON "customHtmlBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "customHtmlBlock_parent_id_idx" ON "customHtmlBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "customHtmlBlock_path_idx" ON "customHtmlBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "customHtmlBlock_locales_locale_parent_id_unique" ON "customHtmlBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "dividerBlock_order_idx" ON "dividerBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "dividerBlock_parent_id_idx" ON "dividerBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "dividerBlock_path_idx" ON "dividerBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "faqBlock_block_header_links_order_idx" ON "faqBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "faqBlock_block_header_links_parent_id_idx" ON "faqBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "faqBlock_block_header_links_locales_locale_parent_id_unique" ON "faqBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "faqBlock_order_idx" ON "faqBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "faqBlock_parent_id_idx" ON "faqBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "faqBlock_path_idx" ON "faqBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "faqBlock_locales_locale_parent_id_unique" ON "faqBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_block_header_links_order_idx" ON "featuredAppsBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_block_header_links_parent_id_idx" ON "featuredAppsBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuredAppsBlock_block_header_links_locales_locale_parent_id_unique" ON "featuredAppsBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_cards_order_idx" ON "featuredAppsBlock_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_cards_parent_id_idx" ON "featuredAppsBlock_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuredAppsBlock_cards_locales_locale_parent_id_unique" ON "featuredAppsBlock_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_order_idx" ON "featuredAppsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_parent_id_idx" ON "featuredAppsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_path_idx" ON "featuredAppsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "featuredAppsBlock_media_idx" ON "featuredAppsBlock" USING btree ("media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuredAppsBlock_locales_locale_parent_id_unique" ON "featuredAppsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuresBlock_block_header_links_order_idx" ON "featuresBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuresBlock_block_header_links_parent_id_idx" ON "featuresBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuresBlock_block_header_links_locales_locale_parent_id_unique" ON "featuresBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuresBlock_columns_order_idx" ON "featuresBlock_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuresBlock_columns_parent_id_idx" ON "featuresBlock_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "featuresBlock_columns_image_idx" ON "featuresBlock_columns_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuresBlock_columns_locales_locale_parent_id_unique" ON "featuresBlock_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "featuresBlock_order_idx" ON "featuresBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "featuresBlock_parent_id_idx" ON "featuresBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "featuresBlock_path_idx" ON "featuresBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "featuresBlock_block_image_idx" ON "featuresBlock" USING btree ("block_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "featuresBlock_locales_locale_parent_id_unique" ON "featuresBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "formBlock_order_idx" ON "formBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "formBlock_parent_id_idx" ON "formBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "formBlock_path_idx" ON "formBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "formBlock_form_idx" ON "formBlock" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "galleryBlock_block_header_links_order_idx" ON "galleryBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "galleryBlock_block_header_links_parent_id_idx" ON "galleryBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "galleryBlock_block_header_links_locales_locale_parent_id_unique" ON "galleryBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "galleryBlock_interactive_gallery_order_idx" ON "galleryBlock_interactive_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "galleryBlock_interactive_gallery_parent_id_idx" ON "galleryBlock_interactive_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "galleryBlock_interactive_gallery_image_idx" ON "galleryBlock_interactive_gallery_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "galleryBlock_interactive_gallery_locales_locale_parent_id_unique" ON "galleryBlock_interactive_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "galleryBlock_order_idx" ON "galleryBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "galleryBlock_parent_id_idx" ON "galleryBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "galleryBlock_path_idx" ON "galleryBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "galleryBlock_locales_locale_parent_id_unique" ON "galleryBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "logosBlock_block_header_links_order_idx" ON "logosBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "logosBlock_block_header_links_parent_id_idx" ON "logosBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "logosBlock_block_header_links_locales_locale_parent_id_unique" ON "logosBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "logosBlock_order_idx" ON "logosBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "logosBlock_parent_id_idx" ON "logosBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "logosBlock_path_idx" ON "logosBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "logosBlock_locales_locale_parent_id_unique" ON "logosBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "metricsBlock_block_header_links_order_idx" ON "metricsBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "metricsBlock_block_header_links_parent_id_idx" ON "metricsBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "metricsBlock_block_header_links_locales_locale_parent_id_unique" ON "metricsBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "metricsBlock_stats_order_idx" ON "metricsBlock_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "metricsBlock_stats_parent_id_idx" ON "metricsBlock_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "metricsBlock_stats_locales_locale_parent_id_unique" ON "metricsBlock_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "metricsBlock_order_idx" ON "metricsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "metricsBlock_parent_id_idx" ON "metricsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "metricsBlock_path_idx" ON "metricsBlock" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "metricsBlock_block_image_block_image_media_idx" ON "metricsBlock_locales" USING btree ("block_image_media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "metricsBlock_locales_locale_parent_id_unique" ON "metricsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "richTextBlock_block_header_links_order_idx" ON "richTextBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "richTextBlock_block_header_links_parent_id_idx" ON "richTextBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "richTextBlock_block_header_links_locales_locale_parent_id_unique" ON "richTextBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "richTextBlock_order_idx" ON "richTextBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "richTextBlock_parent_id_idx" ON "richTextBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "richTextBlock_path_idx" ON "richTextBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "richTextBlock_locales_locale_parent_id_unique" ON "richTextBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "testimonialsBlock_block_header_links_order_idx" ON "testimonialsBlock_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "testimonialsBlock_block_header_links_parent_id_idx" ON "testimonialsBlock_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "testimonialsBlock_block_header_links_locales_locale_parent_id_unique" ON "testimonialsBlock_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "testimonialsBlock_order_idx" ON "testimonialsBlock" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "testimonialsBlock_parent_id_idx" ON "testimonialsBlock" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "testimonialsBlock_path_idx" ON "testimonialsBlock" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "testimonialsBlock_locales_locale_parent_id_unique" ON "testimonialsBlock_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_desktop_hero_media_desktop_light_idx" ON "pages_locales" USING btree ("hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_desktop_hero_media_desktop_dark_idx" ON "pages_locales" USING btree ("hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_mobile_hero_media_mobile_light_idx" ON "pages_locales" USING btree ("hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_hero_media_mobile_hero_media_mobile_dark_idx" ON "pages_locales" USING btree ("hero_media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_solutions_id_idx" ON "pages_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_integrations_id_idx" ON "pages_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_faq_id_idx" ON "pages_rels" USING btree ("faq_id","locale");
  CREATE INDEX IF NOT EXISTS "pages_rels_customers_id_idx" ON "pages_rels" USING btree ("customers_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_version_hero_links_locales_locale_parent_id_unique" ON "_pages_v_version_hero_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_archiveBlock_v_order_idx" ON "_archiveBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_archiveBlock_v_parent_id_idx" ON "_archiveBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_archiveBlock_v_path_idx" ON "_archiveBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_archiveBlock_v_locales_locale_parent_id_unique" ON "_archiveBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_links_order_idx" ON "_callToActionBlock_v_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_links_parent_id_idx" ON "_callToActionBlock_v_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_callToActionBlock_v_links_locales_locale_parent_id_unique" ON "_callToActionBlock_v_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_list_order_idx" ON "_callToActionBlock_v_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_list_parent_id_idx" ON "_callToActionBlock_v_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_list_locale_idx" ON "_callToActionBlock_v_list" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_order_idx" ON "_callToActionBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_parent_id_idx" ON "_callToActionBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_path_idx" ON "_callToActionBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_form_idx" ON "_callToActionBlock_v" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_desktop_media_desktop_light_idx" ON "_callToActionBlock_v_locales" USING btree ("media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_desktop_media_desktop_dark_idx" ON "_callToActionBlock_v_locales" USING btree ("media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_mobile_media_mobile_light_idx" ON "_callToActionBlock_v_locales" USING btree ("media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_callToActionBlock_v_media_mobile_media_mobile_dark_idx" ON "_callToActionBlock_v_locales" USING btree ("media_mobile_dark_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_callToActionBlock_v_locales_locale_parent_id_unique" ON "_callToActionBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_customHtmlBlock_v_block_header_links_order_idx" ON "_customHtmlBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_customHtmlBlock_v_block_header_links_parent_id_idx" ON "_customHtmlBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_customHtmlBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_customHtmlBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_customHtmlBlock_v_order_idx" ON "_customHtmlBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_customHtmlBlock_v_parent_id_idx" ON "_customHtmlBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_customHtmlBlock_v_path_idx" ON "_customHtmlBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_customHtmlBlock_v_locales_locale_parent_id_unique" ON "_customHtmlBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_dividerBlock_v_order_idx" ON "_dividerBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_dividerBlock_v_parent_id_idx" ON "_dividerBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_dividerBlock_v_path_idx" ON "_dividerBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_faqBlock_v_block_header_links_order_idx" ON "_faqBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_faqBlock_v_block_header_links_parent_id_idx" ON "_faqBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_faqBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_faqBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_faqBlock_v_order_idx" ON "_faqBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_faqBlock_v_parent_id_idx" ON "_faqBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_faqBlock_v_path_idx" ON "_faqBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_faqBlock_v_locales_locale_parent_id_unique" ON "_faqBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_block_header_links_order_idx" ON "_featuredAppsBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_block_header_links_parent_id_idx" ON "_featuredAppsBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuredAppsBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_featuredAppsBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_cards_order_idx" ON "_featuredAppsBlock_v_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_cards_parent_id_idx" ON "_featuredAppsBlock_v_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuredAppsBlock_v_cards_locales_locale_parent_id_unique" ON "_featuredAppsBlock_v_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_order_idx" ON "_featuredAppsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_parent_id_idx" ON "_featuredAppsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_path_idx" ON "_featuredAppsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_featuredAppsBlock_v_media_idx" ON "_featuredAppsBlock_v" USING btree ("media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuredAppsBlock_v_locales_locale_parent_id_unique" ON "_featuredAppsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_block_header_links_order_idx" ON "_featuresBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_block_header_links_parent_id_idx" ON "_featuresBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuresBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_featuresBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_columns_order_idx" ON "_featuresBlock_v_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_columns_parent_id_idx" ON "_featuresBlock_v_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_columns_image_idx" ON "_featuresBlock_v_columns_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuresBlock_v_columns_locales_locale_parent_id_unique" ON "_featuresBlock_v_columns_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_order_idx" ON "_featuresBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_parent_id_idx" ON "_featuresBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_path_idx" ON "_featuresBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_featuresBlock_v_block_image_idx" ON "_featuresBlock_v" USING btree ("block_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_featuresBlock_v_locales_locale_parent_id_unique" ON "_featuresBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_formBlock_v_order_idx" ON "_formBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_formBlock_v_parent_id_idx" ON "_formBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_formBlock_v_path_idx" ON "_formBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_formBlock_v_form_idx" ON "_formBlock_v" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_block_header_links_order_idx" ON "_galleryBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_block_header_links_parent_id_idx" ON "_galleryBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_galleryBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_galleryBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_interactive_gallery_order_idx" ON "_galleryBlock_v_interactive_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_interactive_gallery_parent_id_idx" ON "_galleryBlock_v_interactive_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_interactive_gallery_image_idx" ON "_galleryBlock_v_interactive_gallery_locales" USING btree ("image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "_galleryBlock_v_interactive_gallery_locales_locale_parent_id_unique" ON "_galleryBlock_v_interactive_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_order_idx" ON "_galleryBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_parent_id_idx" ON "_galleryBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_galleryBlock_v_path_idx" ON "_galleryBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_galleryBlock_v_locales_locale_parent_id_unique" ON "_galleryBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_logosBlock_v_block_header_links_order_idx" ON "_logosBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_logosBlock_v_block_header_links_parent_id_idx" ON "_logosBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_logosBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_logosBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_logosBlock_v_order_idx" ON "_logosBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_logosBlock_v_parent_id_idx" ON "_logosBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_logosBlock_v_path_idx" ON "_logosBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_logosBlock_v_locales_locale_parent_id_unique" ON "_logosBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_block_header_links_order_idx" ON "_metricsBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_block_header_links_parent_id_idx" ON "_metricsBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_metricsBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_metricsBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_stats_order_idx" ON "_metricsBlock_v_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_stats_parent_id_idx" ON "_metricsBlock_v_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_metricsBlock_v_stats_locales_locale_parent_id_unique" ON "_metricsBlock_v_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_order_idx" ON "_metricsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_parent_id_idx" ON "_metricsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_path_idx" ON "_metricsBlock_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_metricsBlock_v_block_image_block_image_media_idx" ON "_metricsBlock_v_locales" USING btree ("block_image_media_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_metricsBlock_v_locales_locale_parent_id_unique" ON "_metricsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_richTextBlock_v_block_header_links_order_idx" ON "_richTextBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_richTextBlock_v_block_header_links_parent_id_idx" ON "_richTextBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_richTextBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_richTextBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_richTextBlock_v_order_idx" ON "_richTextBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_richTextBlock_v_parent_id_idx" ON "_richTextBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_richTextBlock_v_path_idx" ON "_richTextBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_richTextBlock_v_locales_locale_parent_id_unique" ON "_richTextBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_testimonialsBlock_v_block_header_links_order_idx" ON "_testimonialsBlock_v_block_header_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_testimonialsBlock_v_block_header_links_parent_id_idx" ON "_testimonialsBlock_v_block_header_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_testimonialsBlock_v_block_header_links_locales_locale_parent_id_unique" ON "_testimonialsBlock_v_block_header_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_testimonialsBlock_v_order_idx" ON "_testimonialsBlock_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_testimonialsBlock_v_parent_id_idx" ON "_testimonialsBlock_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_testimonialsBlock_v_path_idx" ON "_testimonialsBlock_v" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "_testimonialsBlock_v_locales_locale_parent_id_unique" ON "_testimonialsBlock_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_light_idx" ON "_pages_v_locales" USING btree ("version_hero_media_desktop_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_desktop_version_hero_media_desktop_dark_idx" ON "_pages_v_locales" USING btree ("version_hero_media_desktop_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_light_idx" ON "_pages_v_locales" USING btree ("version_hero_media_mobile_light_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_media_mobile_version_hero_media_mobile_dark_idx" ON "_pages_v_locales" USING btree ("version_hero_media_mobile_dark_id","_locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_locale_idx" ON "_pages_v_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_solutions_id_idx" ON "_pages_v_rels" USING btree ("solutions_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_integrations_id_idx" ON "_pages_v_rels" USING btree ("integrations_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_faq_id_idx" ON "_pages_v_rels" USING btree ("faq_id","locale");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_customers_id_idx" ON "_pages_v_rels" USING btree ("customers_id","locale");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "posts_locales" USING btree ("hero_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_locale_idx" ON "posts_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id","locale");
  CREATE INDEX IF NOT EXISTS "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id","locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_hero_image_idx" ON "_posts_v_locales" USING btree ("version_hero_image_id","_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_locale_idx" ON "_posts_v_rels" USING btree ("locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id","locale");
  CREATE INDEX IF NOT EXISTS "solutions_icon_idx" ON "solutions" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "solutions_ecosystem_idx" ON "solutions" USING btree ("ecosystem_id");
  CREATE INDEX IF NOT EXISTS "solutions_slug_idx" ON "solutions" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "solutions_updated_at_idx" ON "solutions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "solutions_created_at_idx" ON "solutions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "solutions__status_idx" ON "solutions" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "solutions_locales_locale_parent_id_unique" ON "solutions_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_order_idx" ON "solutions_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "solutions_rels_parent_idx" ON "solutions_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_path_idx" ON "solutions_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "solutions_rels_pages_id_idx" ON "solutions_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_posts_id_idx" ON "solutions_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "solutions_rels_solutions_id_idx" ON "solutions_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_parent_idx" ON "_solutions_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_icon_idx" ON "_solutions_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_ecosystem_idx" ON "_solutions_v" USING btree ("version_ecosystem_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_slug_idx" ON "_solutions_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_updated_at_idx" ON "_solutions_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version_created_at_idx" ON "_solutions_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_version_version__status_idx" ON "_solutions_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_solutions_v_created_at_idx" ON "_solutions_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_updated_at_idx" ON "_solutions_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_solutions_v_snapshot_idx" ON "_solutions_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_solutions_v_published_locale_idx" ON "_solutions_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_solutions_v_latest_idx" ON "_solutions_v" USING btree ("latest");
  CREATE UNIQUE INDEX IF NOT EXISTS "_solutions_v_locales_locale_parent_id_unique" ON "_solutions_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_order_idx" ON "_solutions_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_parent_idx" ON "_solutions_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_path_idx" ON "_solutions_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_pages_id_idx" ON "_solutions_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_posts_id_idx" ON "_solutions_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_solutions_v_rels_solutions_id_idx" ON "_solutions_v_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "integrations_links_order_idx" ON "integrations_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "integrations_links_parent_id_idx" ON "integrations_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "integrations_links_locales_locale_parent_id_unique" ON "integrations_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_icon_idx" ON "integrations" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "integrations_slug_idx" ON "integrations" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "integrations_updated_at_idx" ON "integrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "integrations_created_at_idx" ON "integrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "integrations__status_idx" ON "integrations" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "integrations_meta_meta_image_idx" ON "integrations_locales" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "integrations_locales_locale_parent_id_unique" ON "integrations_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_order_idx" ON "integrations_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "integrations_rels_parent_idx" ON "integrations_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_path_idx" ON "integrations_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "integrations_rels_pages_id_idx" ON "integrations_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_posts_id_idx" ON "integrations_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_solutions_id_idx" ON "integrations_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "integrations_rels_categories_id_idx" ON "integrations_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_links_order_idx" ON "_integrations_v_version_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_links_parent_id_idx" ON "_integrations_v_version_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_integrations_v_version_links_locales_locale_parent_id_unique" ON "_integrations_v_version_links_locales" USING btree ("_locale","_parent_id");
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
  CREATE INDEX IF NOT EXISTS "_integrations_v_autosave_idx" ON "_integrations_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_integrations_v_version_meta_version_meta_image_idx" ON "_integrations_v_locales" USING btree ("version_meta_image_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_integrations_v_locales_locale_parent_id_unique" ON "_integrations_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_order_idx" ON "_integrations_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_parent_idx" ON "_integrations_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_path_idx" ON "_integrations_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_pages_id_idx" ON "_integrations_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_posts_id_idx" ON "_integrations_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_solutions_id_idx" ON "_integrations_v_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "_integrations_v_rels_categories_id_idx" ON "_integrations_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "media_rels_order_idx" ON "media_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "media_rels_parent_idx" ON "media_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "media_rels_path_idx" ON "media_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "media_rels_categories_id_idx" ON "media_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "customers_testimonial_stats_order_idx" ON "customers_testimonial_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "customers_testimonial_stats_parent_id_idx" ON "customers_testimonial_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "customers_testimonial_stats_locales_locale_parent_id_unique" ON "customers_testimonial_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "customers_testimonial_testimonial_featured_image_idx" ON "customers" USING btree ("testimonial_featured_image_id");
  CREATE INDEX IF NOT EXISTS "customers_testimonial_company_testimonial_company_company_logo_idx" ON "customers" USING btree ("testimonial_company_company_logo_id");
  CREATE INDEX IF NOT EXISTS "customers_testimonial_author_info_testimonial_author_info_avatar_idx" ON "customers" USING btree ("testimonial_author_info_avatar_id");
  CREATE INDEX IF NOT EXISTS "customers_slug_idx" ON "customers" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "customers_updated_at_idx" ON "customers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "customers_created_at_idx" ON "customers" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "customers__status_idx" ON "customers" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "customers_locales_locale_parent_id_unique" ON "customers_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_order_idx" ON "customers_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "customers_rels_parent_idx" ON "customers_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_path_idx" ON "customers_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "customers_rels_solutions_id_idx" ON "customers_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_integrations_id_idx" ON "customers_rels" USING btree ("integrations_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_pages_id_idx" ON "customers_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_posts_id_idx" ON "customers_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "customers_rels_categories_id_idx" ON "customers_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_testimonial_stats_order_idx" ON "_customers_v_version_testimonial_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_testimonial_stats_parent_id_idx" ON "_customers_v_version_testimonial_stats" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "_customers_v_version_testimonial_stats_locales_locale_parent_id_unique" ON "_customers_v_version_testimonial_stats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_parent_idx" ON "_customers_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_testimonial_version_testimonial_featured_image_idx" ON "_customers_v" USING btree ("version_testimonial_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_testimonial_company_version_testimonial_company_company_logo_idx" ON "_customers_v" USING btree ("version_testimonial_company_company_logo_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_testimonial_author_info_version_testimonial_author_info_avatar_idx" ON "_customers_v" USING btree ("version_testimonial_author_info_avatar_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_version_slug_idx" ON "_customers_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_version_updated_at_idx" ON "_customers_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_version_created_at_idx" ON "_customers_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_customers_v_version_version__status_idx" ON "_customers_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_customers_v_created_at_idx" ON "_customers_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_customers_v_updated_at_idx" ON "_customers_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_customers_v_snapshot_idx" ON "_customers_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_customers_v_published_locale_idx" ON "_customers_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_customers_v_latest_idx" ON "_customers_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_customers_v_autosave_idx" ON "_customers_v" USING btree ("autosave");
  CREATE UNIQUE INDEX IF NOT EXISTS "_customers_v_locales_locale_parent_id_unique" ON "_customers_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_order_idx" ON "_customers_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_parent_idx" ON "_customers_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_path_idx" ON "_customers_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_solutions_id_idx" ON "_customers_v_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_integrations_id_idx" ON "_customers_v_rels" USING btree ("integrations_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_pages_id_idx" ON "_customers_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_posts_id_idx" ON "_customers_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_customers_v_rels_categories_id_idx" ON "_customers_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_locale_idx" ON "categories_breadcrumbs" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "faq_category_idx" ON "faq" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "faq_updated_at_idx" ON "faq" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "faq_created_at_idx" ON "faq" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "faq_locales_locale_parent_id_unique" ON "faq_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "changelog_categories_order_idx" ON "changelog_categories" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "changelog_categories_parent_idx" ON "changelog_categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "changelog_updated_at_idx" ON "changelog" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "changelog_created_at_idx" ON "changelog" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "changelog_locales_locale_parent_id_unique" ON "changelog_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_country_locales_locale_parent_id_unique" ON "forms_blocks_country_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_message_locales_locale_parent_id_unique" ON "forms_blocks_message_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_state_locales_locale_parent_id_unique" ON "forms_blocks_state_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_solutions_id_idx" ON "payload_locked_documents_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_integrations_id_idx" ON "payload_locked_documents_rels" USING btree ("integrations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_customers_id_idx" ON "payload_locked_documents_rels" USING btree ("customers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_faq_id_idx" ON "payload_locked_documents_rels" USING btree ("faq_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_changelog_id_idx" ON "payload_locked_documents_rels" USING btree ("changelog_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "settings_meta_meta_image_idx" ON "settings_locales" USING btree ("meta_image_id","_locale");
  CREATE UNIQUE INDEX IF NOT EXISTS "settings_locales_locale_parent_id_unique" ON "settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_order_idx" ON "settings_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "settings_rels_parent_idx" ON "settings_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_path_idx" ON "settings_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "settings_rels_pages_id_idx" ON "settings_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_posts_id_idx" ON "settings_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "settings_rels_solutions_id_idx" ON "settings_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "header_tabs_description_links_order_idx" ON "header_tabs_description_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_tabs_description_links_parent_id_idx" ON "header_tabs_description_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_tabs_description_links_locales_locale_parent_id_unique" ON "header_tabs_description_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_featured_link_links_order_idx" ON "header_tabs_nav_items_featured_link_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_featured_link_links_parent_id_idx" ON "header_tabs_nav_items_featured_link_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_tabs_nav_items_featured_link_links_locales_locale_parent_id_unique" ON "header_tabs_nav_items_featured_link_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_list_links_links_order_idx" ON "header_tabs_nav_items_list_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_list_links_links_parent_id_idx" ON "header_tabs_nav_items_list_links_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_tabs_nav_items_list_links_links_locales_locale_parent_id_unique" ON "header_tabs_nav_items_list_links_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_order_idx" ON "header_tabs_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_tabs_nav_items_parent_id_idx" ON "header_tabs_nav_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_tabs_nav_items_locales_locale_parent_id_unique" ON "header_tabs_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_tabs_order_idx" ON "header_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_tabs_parent_id_idx" ON "header_tabs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_tabs_locales_locale_parent_id_unique" ON "header_tabs_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_cta_order_idx" ON "header_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_cta_parent_id_idx" ON "header_cta" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "header_cta_locales_locale_parent_id_unique" ON "header_cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "header_rels_solutions_id_idx" ON "header_rels" USING btree ("solutions_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_order_idx" ON "footer_columns_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_nav_items_parent_id_idx" ON "footer_columns_nav_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "footer_columns_nav_items_locales_locale_parent_id_unique" ON "footer_columns_nav_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "footer_rels_solutions_id_idx" ON "footer_rels" USING btree ("solutions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_hero_links_locales" CASCADE;
  DROP TABLE "archiveBlock" CASCADE;
  DROP TABLE "archiveBlock_locales" CASCADE;
  DROP TABLE "callToActionBlock_links" CASCADE;
  DROP TABLE "callToActionBlock_links_locales" CASCADE;
  DROP TABLE "callToActionBlock_list" CASCADE;
  DROP TABLE "callToActionBlock" CASCADE;
  DROP TABLE "callToActionBlock_locales" CASCADE;
  DROP TABLE "customHtmlBlock_block_header_links" CASCADE;
  DROP TABLE "customHtmlBlock_block_header_links_locales" CASCADE;
  DROP TABLE "customHtmlBlock" CASCADE;
  DROP TABLE "customHtmlBlock_locales" CASCADE;
  DROP TABLE "dividerBlock" CASCADE;
  DROP TABLE "faqBlock_block_header_links" CASCADE;
  DROP TABLE "faqBlock_block_header_links_locales" CASCADE;
  DROP TABLE "faqBlock" CASCADE;
  DROP TABLE "faqBlock_locales" CASCADE;
  DROP TABLE "featuredAppsBlock_block_header_links" CASCADE;
  DROP TABLE "featuredAppsBlock_block_header_links_locales" CASCADE;
  DROP TABLE "featuredAppsBlock_cards" CASCADE;
  DROP TABLE "featuredAppsBlock_cards_locales" CASCADE;
  DROP TABLE "featuredAppsBlock" CASCADE;
  DROP TABLE "featuredAppsBlock_locales" CASCADE;
  DROP TABLE "featuresBlock_block_header_links" CASCADE;
  DROP TABLE "featuresBlock_block_header_links_locales" CASCADE;
  DROP TABLE "featuresBlock_columns" CASCADE;
  DROP TABLE "featuresBlock_columns_locales" CASCADE;
  DROP TABLE "featuresBlock" CASCADE;
  DROP TABLE "featuresBlock_locales" CASCADE;
  DROP TABLE "formBlock" CASCADE;
  DROP TABLE "galleryBlock_block_header_links" CASCADE;
  DROP TABLE "galleryBlock_block_header_links_locales" CASCADE;
  DROP TABLE "galleryBlock_interactive_gallery" CASCADE;
  DROP TABLE "galleryBlock_interactive_gallery_locales" CASCADE;
  DROP TABLE "galleryBlock" CASCADE;
  DROP TABLE "galleryBlock_locales" CASCADE;
  DROP TABLE "logosBlock_block_header_links" CASCADE;
  DROP TABLE "logosBlock_block_header_links_locales" CASCADE;
  DROP TABLE "logosBlock" CASCADE;
  DROP TABLE "logosBlock_locales" CASCADE;
  DROP TABLE "metricsBlock_block_header_links" CASCADE;
  DROP TABLE "metricsBlock_block_header_links_locales" CASCADE;
  DROP TABLE "metricsBlock_stats" CASCADE;
  DROP TABLE "metricsBlock_stats_locales" CASCADE;
  DROP TABLE "metricsBlock" CASCADE;
  DROP TABLE "metricsBlock_locales" CASCADE;
  DROP TABLE "richTextBlock_block_header_links" CASCADE;
  DROP TABLE "richTextBlock_block_header_links_locales" CASCADE;
  DROP TABLE "richTextBlock" CASCADE;
  DROP TABLE "richTextBlock_locales" CASCADE;
  DROP TABLE "testimonialsBlock_block_header_links" CASCADE;
  DROP TABLE "testimonialsBlock_block_header_links_locales" CASCADE;
  DROP TABLE "testimonialsBlock" CASCADE;
  DROP TABLE "testimonialsBlock_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_locales" CASCADE;
  DROP TABLE "_archiveBlock_v" CASCADE;
  DROP TABLE "_archiveBlock_v_locales" CASCADE;
  DROP TABLE "_callToActionBlock_v_links" CASCADE;
  DROP TABLE "_callToActionBlock_v_links_locales" CASCADE;
  DROP TABLE "_callToActionBlock_v_list" CASCADE;
  DROP TABLE "_callToActionBlock_v" CASCADE;
  DROP TABLE "_callToActionBlock_v_locales" CASCADE;
  DROP TABLE "_customHtmlBlock_v_block_header_links" CASCADE;
  DROP TABLE "_customHtmlBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_customHtmlBlock_v" CASCADE;
  DROP TABLE "_customHtmlBlock_v_locales" CASCADE;
  DROP TABLE "_dividerBlock_v" CASCADE;
  DROP TABLE "_faqBlock_v_block_header_links" CASCADE;
  DROP TABLE "_faqBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_faqBlock_v" CASCADE;
  DROP TABLE "_faqBlock_v_locales" CASCADE;
  DROP TABLE "_featuredAppsBlock_v_block_header_links" CASCADE;
  DROP TABLE "_featuredAppsBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_featuredAppsBlock_v_cards" CASCADE;
  DROP TABLE "_featuredAppsBlock_v_cards_locales" CASCADE;
  DROP TABLE "_featuredAppsBlock_v" CASCADE;
  DROP TABLE "_featuredAppsBlock_v_locales" CASCADE;
  DROP TABLE "_featuresBlock_v_block_header_links" CASCADE;
  DROP TABLE "_featuresBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_featuresBlock_v_columns" CASCADE;
  DROP TABLE "_featuresBlock_v_columns_locales" CASCADE;
  DROP TABLE "_featuresBlock_v" CASCADE;
  DROP TABLE "_featuresBlock_v_locales" CASCADE;
  DROP TABLE "_formBlock_v" CASCADE;
  DROP TABLE "_galleryBlock_v_block_header_links" CASCADE;
  DROP TABLE "_galleryBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_galleryBlock_v_interactive_gallery" CASCADE;
  DROP TABLE "_galleryBlock_v_interactive_gallery_locales" CASCADE;
  DROP TABLE "_galleryBlock_v" CASCADE;
  DROP TABLE "_galleryBlock_v_locales" CASCADE;
  DROP TABLE "_logosBlock_v_block_header_links" CASCADE;
  DROP TABLE "_logosBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_logosBlock_v" CASCADE;
  DROP TABLE "_logosBlock_v_locales" CASCADE;
  DROP TABLE "_metricsBlock_v_block_header_links" CASCADE;
  DROP TABLE "_metricsBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_metricsBlock_v_stats" CASCADE;
  DROP TABLE "_metricsBlock_v_stats_locales" CASCADE;
  DROP TABLE "_metricsBlock_v" CASCADE;
  DROP TABLE "_metricsBlock_v_locales" CASCADE;
  DROP TABLE "_richTextBlock_v_block_header_links" CASCADE;
  DROP TABLE "_richTextBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_richTextBlock_v" CASCADE;
  DROP TABLE "_richTextBlock_v_locales" CASCADE;
  DROP TABLE "_testimonialsBlock_v_block_header_links" CASCADE;
  DROP TABLE "_testimonialsBlock_v_block_header_links_locales" CASCADE;
  DROP TABLE "_testimonialsBlock_v" CASCADE;
  DROP TABLE "_testimonialsBlock_v_locales" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "solutions" CASCADE;
  DROP TABLE "solutions_locales" CASCADE;
  DROP TABLE "solutions_rels" CASCADE;
  DROP TABLE "_solutions_v" CASCADE;
  DROP TABLE "_solutions_v_locales" CASCADE;
  DROP TABLE "_solutions_v_rels" CASCADE;
  DROP TABLE "integrations_links" CASCADE;
  DROP TABLE "integrations_links_locales" CASCADE;
  DROP TABLE "integrations" CASCADE;
  DROP TABLE "integrations_locales" CASCADE;
  DROP TABLE "integrations_rels" CASCADE;
  DROP TABLE "_integrations_v_version_links" CASCADE;
  DROP TABLE "_integrations_v_version_links_locales" CASCADE;
  DROP TABLE "_integrations_v" CASCADE;
  DROP TABLE "_integrations_v_locales" CASCADE;
  DROP TABLE "_integrations_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_rels" CASCADE;
  DROP TABLE "customers_testimonial_stats" CASCADE;
  DROP TABLE "customers_testimonial_stats_locales" CASCADE;
  DROP TABLE "customers" CASCADE;
  DROP TABLE "customers_locales" CASCADE;
  DROP TABLE "customers_rels" CASCADE;
  DROP TABLE "_customers_v_version_testimonial_stats" CASCADE;
  DROP TABLE "_customers_v_version_testimonial_stats_locales" CASCADE;
  DROP TABLE "_customers_v" CASCADE;
  DROP TABLE "_customers_v_locales" CASCADE;
  DROP TABLE "_customers_v_rels" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "faq" CASCADE;
  DROP TABLE "faq_locales" CASCADE;
  DROP TABLE "changelog_categories" CASCADE;
  DROP TABLE "changelog" CASCADE;
  DROP TABLE "changelog_locales" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "settings_locales" CASCADE;
  DROP TABLE "settings_rels" CASCADE;
  DROP TABLE "header_tabs_description_links" CASCADE;
  DROP TABLE "header_tabs_description_links_locales" CASCADE;
  DROP TABLE "header_tabs_nav_items_featured_link_links" CASCADE;
  DROP TABLE "header_tabs_nav_items_featured_link_links_locales" CASCADE;
  DROP TABLE "header_tabs_nav_items_list_links_links" CASCADE;
  DROP TABLE "header_tabs_nav_items_list_links_links_locales" CASCADE;
  DROP TABLE "header_tabs_nav_items" CASCADE;
  DROP TABLE "header_tabs_nav_items_locales" CASCADE;
  DROP TABLE "header_tabs" CASCADE;
  DROP TABLE "header_tabs_locales" CASCADE;
  DROP TABLE "header_cta" CASCADE;
  DROP TABLE "header_cta_locales" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_columns_nav_items" CASCADE;
  DROP TABLE "footer_columns_nav_items_locales" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."link_type";
  DROP TYPE "public"."link_color";
  DROP TYPE "public"."link_variant";
  DROP TYPE "public"."enum_archiveBlock_populate_by";
  DROP TYPE "public"."enum_archiveBlock_relation_to";
  DROP TYPE "public"."enum_callToActionBlock_type";
  DROP TYPE "public"."enum_callToActionBlock_badge_type";
  DROP TYPE "public"."badge_color";
  DROP TYPE "public"."badge_icon_position";
  DROP TYPE "public"."enum_customHtmlBlock_block_header_type";
  DROP TYPE "public"."enum_customHtmlBlock_block_header_badge_type";
  DROP TYPE "public"."enum_dividerBlock_size";
  DROP TYPE "public"."enum_faqBlock_block_header_type";
  DROP TYPE "public"."enum_faqBlock_block_header_badge_type";
  DROP TYPE "public"."enum_faqBlock_type";
  DROP TYPE "public"."enum_featuredAppsBlock_block_header_type";
  DROP TYPE "public"."enum_featuredAppsBlock_block_header_badge_type";
  DROP TYPE "public"."enum_featuredAppsBlock_type";
  DROP TYPE "public"."enum_featuresBlock_columns_size";
  DROP TYPE "public"."enum_featuresBlock_columns_badge_type";
  DROP TYPE "public"."enum_featuresBlock_block_header_type";
  DROP TYPE "public"."enum_featuresBlock_block_header_badge_type";
  DROP TYPE "public"."enum_featuresBlock_type";
  DROP TYPE "public"."enum_galleryBlock_block_header_type";
  DROP TYPE "public"."enum_galleryBlock_block_header_badge_type";
  DROP TYPE "public"."enum_galleryBlock_type";
  DROP TYPE "public"."enum_logosBlock_block_header_type";
  DROP TYPE "public"."enum_logosBlock_block_header_badge_type";
  DROP TYPE "public"."enum_logosBlock_type";
  DROP TYPE "public"."enum_metricsBlock_stats_indicator";
  DROP TYPE "public"."enum_metricsBlock_block_header_type";
  DROP TYPE "public"."enum_metricsBlock_block_header_badge_type";
  DROP TYPE "public"."enum_metricsBlock_type";
  DROP TYPE "public"."enum_richTextBlock_block_header_type";
  DROP TYPE "public"."enum_richTextBlock_block_header_badge_type";
  DROP TYPE "public"."enum_richTextBlock_type";
  DROP TYPE "public"."enum_richTextBlock_max_width";
  DROP TYPE "public"."enum_testimonialsBlock_block_header_type";
  DROP TYPE "public"."enum_testimonialsBlock_block_header_badge_type";
  DROP TYPE "public"."enum_testimonialsBlock_type";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_badge_type";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__archiveBlock_v_populate_by";
  DROP TYPE "public"."enum__archiveBlock_v_relation_to";
  DROP TYPE "public"."enum__callToActionBlock_v_type";
  DROP TYPE "public"."enum__callToActionBlock_v_badge_type";
  DROP TYPE "public"."enum__customHtmlBlock_v_block_header_type";
  DROP TYPE "public"."enum__customHtmlBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__dividerBlock_v_size";
  DROP TYPE "public"."enum__faqBlock_v_block_header_type";
  DROP TYPE "public"."enum__faqBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__faqBlock_v_type";
  DROP TYPE "public"."enum__featuredAppsBlock_v_block_header_type";
  DROP TYPE "public"."enum__featuredAppsBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__featuredAppsBlock_v_type";
  DROP TYPE "public"."enum__featuresBlock_v_columns_size";
  DROP TYPE "public"."enum__featuresBlock_v_columns_badge_type";
  DROP TYPE "public"."enum__featuresBlock_v_block_header_type";
  DROP TYPE "public"."enum__featuresBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__featuresBlock_v_type";
  DROP TYPE "public"."enum__galleryBlock_v_block_header_type";
  DROP TYPE "public"."enum__galleryBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__galleryBlock_v_type";
  DROP TYPE "public"."enum__logosBlock_v_block_header_type";
  DROP TYPE "public"."enum__logosBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__logosBlock_v_type";
  DROP TYPE "public"."enum__metricsBlock_v_stats_indicator";
  DROP TYPE "public"."enum__metricsBlock_v_block_header_type";
  DROP TYPE "public"."enum__metricsBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__metricsBlock_v_type";
  DROP TYPE "public"."enum__richTextBlock_v_block_header_type";
  DROP TYPE "public"."enum__richTextBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__richTextBlock_v_type";
  DROP TYPE "public"."enum__richTextBlock_v_max_width";
  DROP TYPE "public"."enum__testimonialsBlock_v_block_header_type";
  DROP TYPE "public"."enum__testimonialsBlock_v_block_header_badge_type";
  DROP TYPE "public"."enum__testimonialsBlock_v_type";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_badge_type";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_solutions_status";
  DROP TYPE "public"."enum__solutions_v_version_status";
  DROP TYPE "public"."enum__solutions_v_published_locale";
  DROP TYPE "public"."enum_integrations_status";
  DROP TYPE "public"."enum__integrations_v_version_status";
  DROP TYPE "public"."enum__integrations_v_published_locale";
  DROP TYPE "public"."enum_media_locale";
  DROP TYPE "public"."enum_customers_testimonial_stats_indicator";
  DROP TYPE "public"."enum_customers_testimonial_company_industry";
  DROP TYPE "public"."enum_customers_status";
  DROP TYPE "public"."enum__customers_v_version_testimonial_stats_indicator";
  DROP TYPE "public"."enum__customers_v_version_testimonial_company_industry";
  DROP TYPE "public"."enum__customers_v_version_status";
  DROP TYPE "public"."enum__customers_v_published_locale";
  DROP TYPE "public"."enum_changelog_categories";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_tabs_nav_items_style";`)
}
