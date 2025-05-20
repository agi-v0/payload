--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4 (Debian 17.4-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY "public"."testimonials_rels" DROP CONSTRAINT IF EXISTS "testimonials_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials_rels" DROP CONSTRAINT IF EXISTS "testimonials_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials_locales" DROP CONSTRAINT IF EXISTS "testimonials_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials_locales" DROP CONSTRAINT IF EXISTS "testimonials_locales_featured_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials" DROP CONSTRAINT IF EXISTS "testimonials_company_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials" DROP CONSTRAINT IF EXISTS "testimonials_case_study_linked_case_study_id_case_studies_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonials" DROP CONSTRAINT IF EXISTS "testimonials_author_info_avatar_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock" DROP CONSTRAINT IF EXISTS "testimonialsBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_locales" DROP CONSTRAINT IF EXISTS "testimonialsBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_block_header_links" DROP CONSTRAINT IF EXISTS "testimonialsBlock_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "testimonialsBlock_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions_rels" DROP CONSTRAINT IF EXISTS "solutions_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions_rels" DROP CONSTRAINT IF EXISTS "solutions_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions_rels" DROP CONSTRAINT IF EXISTS "solutions_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions_rels" DROP CONSTRAINT IF EXISTS "solutions_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions_locales" DROP CONSTRAINT IF EXISTS "solutions_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions" DROP CONSTRAINT IF EXISTS "solutions_icon_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."solutions" DROP CONSTRAINT IF EXISTS "solutions_ecosystem_id_categories_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_rels" DROP CONSTRAINT IF EXISTS "settings_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_rels" DROP CONSTRAINT IF EXISTS "settings_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_rels" DROP CONSTRAINT IF EXISTS "settings_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_rels" DROP CONSTRAINT IF EXISTS "settings_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_locales" DROP CONSTRAINT IF EXISTS "settings_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."settings_locales" DROP CONSTRAINT IF EXISTS "settings_locales_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."search_rels" DROP CONSTRAINT IF EXISTS "search_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."search_rels" DROP CONSTRAINT IF EXISTS "search_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."search" DROP CONSTRAINT IF EXISTS "search_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."search_locales" DROP CONSTRAINT IF EXISTS "search_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."search_categories" DROP CONSTRAINT IF EXISTS "search_categories_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."redirects_rels" DROP CONSTRAINT IF EXISTS "redirects_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."redirects_rels" DROP CONSTRAINT IF EXISTS "redirects_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."redirects_rels" DROP CONSTRAINT IF EXISTS "redirects_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_rels" DROP CONSTRAINT IF EXISTS "posts_rels_users_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_rels" DROP CONSTRAINT IF EXISTS "posts_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_rels" DROP CONSTRAINT IF EXISTS "posts_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_rels" DROP CONSTRAINT IF EXISTS "posts_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_populated_authors" DROP CONSTRAINT IF EXISTS "posts_populated_authors_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_locales" DROP CONSTRAINT IF EXISTS "posts_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_locales" DROP CONSTRAINT IF EXISTS "posts_locales_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."posts_locales" DROP CONSTRAINT IF EXISTS "posts_locales_hero_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_preferences_rels" DROP CONSTRAINT IF EXISTS "payload_preferences_rels_users_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_preferences_rels" DROP CONSTRAINT IF EXISTS "payload_preferences_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_users_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_testimonials_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_search_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_redirects_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_payload_jobs_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_media_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_forms_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_form_submissions_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_changelog_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_case_studies_fk";
ALTER TABLE IF EXISTS ONLY "public"."payload_jobs_log" DROP CONSTRAINT IF EXISTS "payload_jobs_log_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_testimonials_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_media_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_locales" DROP CONSTRAINT IF EXISTS "pages_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_locales" DROP CONSTRAINT IF EXISTS "pages_locales_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_locales" DROP CONSTRAINT IF EXISTS "pages_locales_hero_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_logos" DROP CONSTRAINT IF EXISTS "pages_hero_logos_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_logos" DROP CONSTRAINT IF EXISTS "pages_hero_logos_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_links" DROP CONSTRAINT IF EXISTS "pages_hero_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_links_locales" DROP CONSTRAINT IF EXISTS "pages_hero_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."media_rels" DROP CONSTRAINT IF EXISTS "media_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."media_rels" DROP CONSTRAINT IF EXISTS "media_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_media_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_locales" DROP CONSTRAINT IF EXISTS "integrations_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_locales" DROP CONSTRAINT IF EXISTS "integrations_locales_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_locales" DROP CONSTRAINT IF EXISTS "integrations_locales_hero_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations" DROP CONSTRAINT IF EXISTS "integrations_icon_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_logos" DROP CONSTRAINT IF EXISTS "integrations_hero_logos_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_logos" DROP CONSTRAINT IF EXISTS "integrations_hero_logos_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_links" DROP CONSTRAINT IF EXISTS "integrations_hero_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_links_locales" DROP CONSTRAINT IF EXISTS "integrations_hero_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_block_header_links_locales_parent";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs" DROP CONSTRAINT IF EXISTS "header_tabs_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_list_links_links" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_list_links_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_list_links_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_list_links_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_featured_link_links" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_featured_link_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_featured_link_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_featured_link_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_locales" DROP CONSTRAINT IF EXISTS "header_tabs_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_description_links" DROP CONSTRAINT IF EXISTS "header_tabs_description_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_description_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_description_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_rels" DROP CONSTRAINT IF EXISTS "header_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_rels" DROP CONSTRAINT IF EXISTS "header_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_rels" DROP CONSTRAINT IF EXISTS "header_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_rels" DROP CONSTRAINT IF EXISTS "header_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_cta" DROP CONSTRAINT IF EXISTS "header_cta_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."header_cta_locales" DROP CONSTRAINT IF EXISTS "header_cta_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock" DROP CONSTRAINT IF EXISTS "galleryBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_interactive_gallery" DROP CONSTRAINT IF EXISTS "galleryBlock_interactive_gallery_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_interactive_gallery_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_interactive_gallery_locales_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_block_header_links" DROP CONSTRAINT IF EXISTS "galleryBlock_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_locales" DROP CONSTRAINT IF EXISTS "forms_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_emails" DROP CONSTRAINT IF EXISTS "forms_emails_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_emails_locales" DROP CONSTRAINT IF EXISTS "forms_emails_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_textarea" DROP CONSTRAINT IF EXISTS "forms_blocks_textarea_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_textarea_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_textarea_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_text" DROP CONSTRAINT IF EXISTS "forms_blocks_text_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_text_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_text_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_state" DROP CONSTRAINT IF EXISTS "forms_blocks_state_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_state_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_state_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select" DROP CONSTRAINT IF EXISTS "forms_blocks_select_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_options" DROP CONSTRAINT IF EXISTS "forms_blocks_select_options_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_options_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_select_options_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_select_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_number" DROP CONSTRAINT IF EXISTS "forms_blocks_number_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_number_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_number_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_message" DROP CONSTRAINT IF EXISTS "forms_blocks_message_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_message_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_message_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_email" DROP CONSTRAINT IF EXISTS "forms_blocks_email_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_email_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_email_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_country" DROP CONSTRAINT IF EXISTS "forms_blocks_country_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_country_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_country_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_checkbox" DROP CONSTRAINT IF EXISTS "forms_blocks_checkbox_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_checkbox_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_checkbox_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."form_submissions_submission_data" DROP CONSTRAINT IF EXISTS "form_submissions_submission_data_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."form_submissions" DROP CONSTRAINT IF EXISTS "form_submissions_form_id_forms_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."formBlock" DROP CONSTRAINT IF EXISTS "formBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."formBlock" DROP CONSTRAINT IF EXISTS "formBlock_form_id_forms_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_rels" DROP CONSTRAINT IF EXISTS "footer_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_rels" DROP CONSTRAINT IF EXISTS "footer_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_rels" DROP CONSTRAINT IF EXISTS "footer_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_rels" DROP CONSTRAINT IF EXISTS "footer_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns" DROP CONSTRAINT IF EXISTS "footer_columns_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns_nav_items" DROP CONSTRAINT IF EXISTS "footer_columns_nav_items_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns_nav_items_locales" DROP CONSTRAINT IF EXISTS "footer_columns_nav_items_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock" DROP CONSTRAINT IF EXISTS "featuresBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_locales_block_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_columns" DROP CONSTRAINT IF EXISTS "featuresBlock_columns_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_columns_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_columns_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_columns_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_columns_locales_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_block_header_links" DROP CONSTRAINT IF EXISTS "featuresBlock_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_cards" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_cards_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_cards_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_cards_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_block_header_links" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."faq_locales" DROP CONSTRAINT IF EXISTS "faq_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."dividerBlock" DROP CONSTRAINT IF EXISTS "dividerBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock" DROP CONSTRAINT IF EXISTS "customHtmlBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_locales" DROP CONSTRAINT IF EXISTS "customHtmlBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_block_header_links" DROP CONSTRAINT IF EXISTS "customHtmlBlock_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "customHtmlBlock_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."changelog_locales" DROP CONSTRAINT IF EXISTS "changelog_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."changelog_categories" DROP CONSTRAINT IF EXISTS "changelog_categories_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."categories" DROP CONSTRAINT IF EXISTS "categories_parent_id_categories_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."categories_locales" DROP CONSTRAINT IF EXISTS "categories_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."categories_breadcrumbs" DROP CONSTRAINT IF EXISTS "categories_breadcrumbs_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."categories_breadcrumbs" DROP CONSTRAINT IF EXISTS "categories_breadcrumbs_doc_id_categories_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_stats" DROP CONSTRAINT IF EXISTS "case_studies_stats_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_stats_locales" DROP CONSTRAINT IF EXISTS "case_studies_stats_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_locales" DROP CONSTRAINT IF EXISTS "case_studies_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_locales" DROP CONSTRAINT IF EXISTS "case_studies_locales_featured_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_block_header_links_locales_parent";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock" DROP CONSTRAINT IF EXISTS "callToActionBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_locales" DROP CONSTRAINT IF EXISTS "callToActionBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_locales" DROP CONSTRAINT IF EXISTS "callToActionBlock_locales_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_list" DROP CONSTRAINT IF EXISTS "callToActionBlock_list_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_links" DROP CONSTRAINT IF EXISTS "callToActionBlock_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_links_locales" DROP CONSTRAINT IF EXISTS "callToActionBlock_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock" DROP CONSTRAINT IF EXISTS "callToActionBlock_form_id_forms_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."archiveBlock" DROP CONSTRAINT IF EXISTS "archiveBlock_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."archiveBlock_locales" DROP CONSTRAINT IF EXISTS "archiveBlock_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v" DROP CONSTRAINT IF EXISTS "_testimonials_v_version_company_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v" DROP CONSTRAINT IF EXISTS "_testimonials_v_version_case_study_linked_case_study_id_case_st";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v" DROP CONSTRAINT IF EXISTS "_testimonials_v_version_author_info_avatar_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_rels" DROP CONSTRAINT IF EXISTS "_testimonials_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_rels" DROP CONSTRAINT IF EXISTS "_testimonials_v_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v" DROP CONSTRAINT IF EXISTS "_testimonials_v_parent_id_testimonials_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_locales" DROP CONSTRAINT IF EXISTS "_testimonials_v_locales_version_featured_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_locales" DROP CONSTRAINT IF EXISTS "_testimonials_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_locales" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v" DROP CONSTRAINT IF EXISTS "_solutions_v_version_icon_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v" DROP CONSTRAINT IF EXISTS "_solutions_v_version_ecosystem_id_categories_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_rels" DROP CONSTRAINT IF EXISTS "_solutions_v_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_rels" DROP CONSTRAINT IF EXISTS "_solutions_v_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_rels" DROP CONSTRAINT IF EXISTS "_solutions_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_rels" DROP CONSTRAINT IF EXISTS "_solutions_v_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v" DROP CONSTRAINT IF EXISTS "_solutions_v_parent_id_solutions_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_locales" DROP CONSTRAINT IF EXISTS "_solutions_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_version_populated_authors" DROP CONSTRAINT IF EXISTS "_posts_v_version_populated_authors_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_rels" DROP CONSTRAINT IF EXISTS "_posts_v_rels_users_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_rels" DROP CONSTRAINT IF EXISTS "_posts_v_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_rels" DROP CONSTRAINT IF EXISTS "_posts_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_rels" DROP CONSTRAINT IF EXISTS "_posts_v_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v" DROP CONSTRAINT IF EXISTS "_posts_v_parent_id_posts_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_locales" DROP CONSTRAINT IF EXISTS "_posts_v_locales_version_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_locales" DROP CONSTRAINT IF EXISTS "_posts_v_locales_version_hero_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_locales" DROP CONSTRAINT IF EXISTS "_posts_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_logos_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_logos_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_links" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_links_locales" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_testimonials_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_media_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v" DROP CONSTRAINT IF EXISTS "_pages_v_parent_id_pages_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_locales" DROP CONSTRAINT IF EXISTS "_pages_v_locales_version_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_locales" DROP CONSTRAINT IF EXISTS "_pages_v_locales_version_hero_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_locales" DROP CONSTRAINT IF EXISTS "_pages_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_block_header_links_locales_parent_id_";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v" DROP CONSTRAINT IF EXISTS "_integrations_v_version_icon_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_logos_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_logos_logo_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_links" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_links_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_media_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_categories_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v" DROP CONSTRAINT IF EXISTS "_integrations_v_parent_id_integrations_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_locales_version_meta_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_locales_version_hero_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_block_header_links_parent_id_f";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_block_header_links_locales_par";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_interactive_gallery" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_interactive_gallery_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_interactive_gallery_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_interactive_gallery_locales_image_id_media_id_f";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_formBlock_v" DROP CONSTRAINT IF EXISTS "_formBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_formBlock_v" DROP CONSTRAINT IF EXISTS "_formBlock_v_form_id_forms_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_locales_block_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_columns" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_columns_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_columns_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_columns_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_columns_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_columns_locales_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_cards" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_cards_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_cards_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_cards_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_dividerBlock_v" DROP CONSTRAINT IF EXISTS "_dividerBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_locales" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_block_header_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_block_header_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_version_stats" DROP CONSTRAINT IF EXISTS "_case_studies_v_version_stats_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_version_stats_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_version_stats_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_solutions_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_posts_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_parent_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_pages_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_integrations_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_faq_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v" DROP CONSTRAINT IF EXISTS "_case_studies_v_parent_id_case_studies_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_locales_version_featured_image_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_block_header_links_parent_id_f";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_block_header_links_locales_par";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_locales" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_locales" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_locales_media_id_media_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_list" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_list_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_links" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_links_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_links_locales" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_links_locales_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_form_id_forms_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_archiveBlock_v" DROP CONSTRAINT IF EXISTS "_archiveBlock_v_parent_id_fk";
ALTER TABLE IF EXISTS ONLY "public"."_archiveBlock_v_locales" DROP CONSTRAINT IF EXISTS "_archiveBlock_v_locales_parent_id_fk";
DROP INDEX IF EXISTS "public"."users_updated_at_idx";
DROP INDEX IF EXISTS "public"."users_email_idx";
DROP INDEX IF EXISTS "public"."users_created_at_idx";
DROP INDEX IF EXISTS "public"."testimonials_updated_at_idx";
DROP INDEX IF EXISTS "public"."testimonials_rels_path_idx";
DROP INDEX IF EXISTS "public"."testimonials_rels_parent_idx";
DROP INDEX IF EXISTS "public"."testimonials_rels_order_idx";
DROP INDEX IF EXISTS "public"."testimonials_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."testimonials_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."testimonials_featured_image_idx";
DROP INDEX IF EXISTS "public"."testimonials_created_at_idx";
DROP INDEX IF EXISTS "public"."testimonials_company_logo_idx";
DROP INDEX IF EXISTS "public"."testimonials_case_study_case_study_linked_case_study_idx";
DROP INDEX IF EXISTS "public"."testimonials_author_info_author_info_avatar_idx";
DROP INDEX IF EXISTS "public"."testimonials__status_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_path_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_order_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."testimonialsBlock_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."testimonialsBlock_block_header_links_locales_locale_parent_id_u";
DROP INDEX IF EXISTS "public"."solutions_updated_at_idx";
DROP INDEX IF EXISTS "public"."solutions_slug_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_path_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_parent_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."solutions_rels_order_idx";
DROP INDEX IF EXISTS "public"."solutions_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."solutions_icon_idx";
DROP INDEX IF EXISTS "public"."solutions_ecosystem_idx";
DROP INDEX IF EXISTS "public"."solutions_created_at_idx";
DROP INDEX IF EXISTS "public"."solutions__status_idx";
DROP INDEX IF EXISTS "public"."settings_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."settings_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."settings_rels_path_idx";
DROP INDEX IF EXISTS "public"."settings_rels_parent_idx";
DROP INDEX IF EXISTS "public"."settings_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."settings_rels_order_idx";
DROP INDEX IF EXISTS "public"."settings_meta_meta_image_idx";
DROP INDEX IF EXISTS "public"."settings_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."search_updated_at_idx";
DROP INDEX IF EXISTS "public"."search_slug_idx";
DROP INDEX IF EXISTS "public"."search_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."search_rels_path_idx";
DROP INDEX IF EXISTS "public"."search_rels_parent_idx";
DROP INDEX IF EXISTS "public"."search_rels_order_idx";
DROP INDEX IF EXISTS "public"."search_meta_meta_image_idx";
DROP INDEX IF EXISTS "public"."search_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."search_created_at_idx";
DROP INDEX IF EXISTS "public"."search_categories_parent_id_idx";
DROP INDEX IF EXISTS "public"."search_categories_order_idx";
DROP INDEX IF EXISTS "public"."redirects_updated_at_idx";
DROP INDEX IF EXISTS "public"."redirects_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."redirects_rels_path_idx";
DROP INDEX IF EXISTS "public"."redirects_rels_parent_idx";
DROP INDEX IF EXISTS "public"."redirects_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."redirects_rels_order_idx";
DROP INDEX IF EXISTS "public"."redirects_from_idx";
DROP INDEX IF EXISTS "public"."redirects_created_at_idx";
DROP INDEX IF EXISTS "public"."posts_updated_at_idx";
DROP INDEX IF EXISTS "public"."posts_slug_idx";
DROP INDEX IF EXISTS "public"."posts_rels_users_id_idx";
DROP INDEX IF EXISTS "public"."posts_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."posts_rels_path_idx";
DROP INDEX IF EXISTS "public"."posts_rels_parent_idx";
DROP INDEX IF EXISTS "public"."posts_rels_order_idx";
DROP INDEX IF EXISTS "public"."posts_rels_locale_idx";
DROP INDEX IF EXISTS "public"."posts_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."posts_populated_authors_parent_id_idx";
DROP INDEX IF EXISTS "public"."posts_populated_authors_order_idx";
DROP INDEX IF EXISTS "public"."posts_meta_meta_image_idx";
DROP INDEX IF EXISTS "public"."posts_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."posts_hero_image_idx";
DROP INDEX IF EXISTS "public"."posts_created_at_idx";
DROP INDEX IF EXISTS "public"."posts__status_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_updated_at_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_rels_users_id_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_rels_path_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_rels_parent_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_rels_order_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_key_idx";
DROP INDEX IF EXISTS "public"."payload_preferences_created_at_idx";
DROP INDEX IF EXISTS "public"."payload_migrations_updated_at_idx";
DROP INDEX IF EXISTS "public"."payload_migrations_created_at_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_updated_at_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_users_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_testimonials_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_search_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_redirects_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_payload_jobs_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_path_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_parent_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_order_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_media_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_forms_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_form_submissions_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_changelog_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_rels_case_studies_id_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_global_slug_idx";
DROP INDEX IF EXISTS "public"."payload_locked_documents_created_at_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_wait_until_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_updated_at_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_total_tried_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_task_slug_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_queue_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_processing_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_log_parent_id_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_log_order_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_has_error_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_created_at_idx";
DROP INDEX IF EXISTS "public"."payload_jobs_completed_at_idx";
DROP INDEX IF EXISTS "public"."pages_updated_at_idx";
DROP INDEX IF EXISTS "public"."pages_slug_idx";
DROP INDEX IF EXISTS "public"."pages_rels_testimonials_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_path_idx";
DROP INDEX IF EXISTS "public"."pages_rels_parent_idx";
DROP INDEX IF EXISTS "public"."pages_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_order_idx";
DROP INDEX IF EXISTS "public"."pages_rels_media_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_locale_idx";
DROP INDEX IF EXISTS "public"."pages_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."pages_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."pages_meta_meta_image_idx";
DROP INDEX IF EXISTS "public"."pages_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."pages_hero_logos_parent_id_idx";
DROP INDEX IF EXISTS "public"."pages_hero_logos_order_idx";
DROP INDEX IF EXISTS "public"."pages_hero_logos_logo_idx";
DROP INDEX IF EXISTS "public"."pages_hero_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."pages_hero_links_order_idx";
DROP INDEX IF EXISTS "public"."pages_hero_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."pages_hero_hero_media_idx";
DROP INDEX IF EXISTS "public"."pages_created_at_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."pages_blocks_faq_block_block_header_links_locales_locale_parent";
DROP INDEX IF EXISTS "public"."pages__status_idx";
DROP INDEX IF EXISTS "public"."media_updated_at_idx";
DROP INDEX IF EXISTS "public"."media_sizes_xlarge_sizes_xlarge_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_thumbnail_sizes_thumbnail_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_square_sizes_square_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_small_sizes_small_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_og_sizes_og_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_medium_sizes_medium_filename_idx";
DROP INDEX IF EXISTS "public"."media_sizes_large_sizes_large_filename_idx";
DROP INDEX IF EXISTS "public"."media_rels_path_idx";
DROP INDEX IF EXISTS "public"."media_rels_parent_idx";
DROP INDEX IF EXISTS "public"."media_rels_order_idx";
DROP INDEX IF EXISTS "public"."media_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."media_filename_idx";
DROP INDEX IF EXISTS "public"."media_created_at_idx";
DROP INDEX IF EXISTS "public"."integrations_updated_at_idx";
DROP INDEX IF EXISTS "public"."integrations_slug_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_path_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_parent_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_order_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_media_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."integrations_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."integrations_meta_meta_image_idx";
DROP INDEX IF EXISTS "public"."integrations_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."integrations_icon_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_logos_parent_id_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_logos_order_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_logos_logo_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_links_order_idx";
DROP INDEX IF EXISTS "public"."integrations_hero_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."integrations_hero_hero_media_idx";
DROP INDEX IF EXISTS "public"."integrations_created_at_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_locales_locale";
DROP INDEX IF EXISTS "public"."integrations__status_idx";
DROP INDEX IF EXISTS "public"."header_tabs_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_tabs_order_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_order_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_list_links_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_list_links_links_order_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_list_links_links_locales_locale_parent_id";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_featured_link_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_featured_link_links_order_idx";
DROP INDEX IF EXISTS "public"."header_tabs_nav_items_featured_link_links_locales_locale_parent";
DROP INDEX IF EXISTS "public"."header_tabs_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."header_tabs_description_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_tabs_description_links_order_idx";
DROP INDEX IF EXISTS "public"."header_tabs_description_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."header_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."header_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."header_rels_path_idx";
DROP INDEX IF EXISTS "public"."header_rels_parent_idx";
DROP INDEX IF EXISTS "public"."header_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."header_rels_order_idx";
DROP INDEX IF EXISTS "public"."header_cta_parent_id_idx";
DROP INDEX IF EXISTS "public"."header_cta_order_idx";
DROP INDEX IF EXISTS "public"."header_cta_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."galleryBlock_path_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_order_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."galleryBlock_interactive_gallery_parent_id_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_interactive_gallery_order_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_interactive_gallery_locales_locale_parent_id_uniqu";
DROP INDEX IF EXISTS "public"."galleryBlock_interactive_gallery_image_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."galleryBlock_block_header_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_updated_at_idx";
DROP INDEX IF EXISTS "public"."forms_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_emails_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_emails_order_idx";
DROP INDEX IF EXISTS "public"."forms_emails_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_created_at_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_textarea_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_textarea_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_textarea_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_textarea_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_text_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_text_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_text_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_text_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_state_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_state_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_state_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_state_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_select_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_select_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_select_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_select_options_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_select_options_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_select_options_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_select_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_number_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_number_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_number_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_number_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_message_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_message_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_message_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_message_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_email_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_email_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_email_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_email_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_country_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_country_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_country_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_country_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."forms_blocks_checkbox_path_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_checkbox_parent_id_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_checkbox_order_idx";
DROP INDEX IF EXISTS "public"."forms_blocks_checkbox_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."form_submissions_updated_at_idx";
DROP INDEX IF EXISTS "public"."form_submissions_submission_data_parent_id_idx";
DROP INDEX IF EXISTS "public"."form_submissions_submission_data_order_idx";
DROP INDEX IF EXISTS "public"."form_submissions_form_idx";
DROP INDEX IF EXISTS "public"."form_submissions_created_at_idx";
DROP INDEX IF EXISTS "public"."formBlock_path_idx";
DROP INDEX IF EXISTS "public"."formBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."formBlock_order_idx";
DROP INDEX IF EXISTS "public"."formBlock_form_idx";
DROP INDEX IF EXISTS "public"."footer_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."footer_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."footer_rels_path_idx";
DROP INDEX IF EXISTS "public"."footer_rels_parent_idx";
DROP INDEX IF EXISTS "public"."footer_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."footer_rels_order_idx";
DROP INDEX IF EXISTS "public"."footer_columns_parent_id_idx";
DROP INDEX IF EXISTS "public"."footer_columns_order_idx";
DROP INDEX IF EXISTS "public"."footer_columns_nav_items_parent_id_idx";
DROP INDEX IF EXISTS "public"."footer_columns_nav_items_order_idx";
DROP INDEX IF EXISTS "public"."footer_columns_nav_items_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."featuresBlock_path_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_order_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."featuresBlock_columns_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_columns_order_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_columns_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."featuresBlock_columns_image_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_block_image_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."featuresBlock_block_header_links_locales_locale_parent_id_uniqu";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_path_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_order_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_media_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_cards_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_cards_order_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_cards_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."featuredAppsBlock_block_header_links_locales_locale_parent_id_u";
DROP INDEX IF EXISTS "public"."faq_updated_at_idx";
DROP INDEX IF EXISTS "public"."faq_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."faq_created_at_idx";
DROP INDEX IF EXISTS "public"."dividerBlock_path_idx";
DROP INDEX IF EXISTS "public"."dividerBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."dividerBlock_order_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_path_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_order_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."customHtmlBlock_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."customHtmlBlock_block_header_links_locales_locale_parent_id_uni";
DROP INDEX IF EXISTS "public"."changelog_updated_at_idx";
DROP INDEX IF EXISTS "public"."changelog_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."changelog_created_at_idx";
DROP INDEX IF EXISTS "public"."changelog_categories_parent_idx";
DROP INDEX IF EXISTS "public"."changelog_categories_order_idx";
DROP INDEX IF EXISTS "public"."categories_updated_at_idx";
DROP INDEX IF EXISTS "public"."categories_slug_idx";
DROP INDEX IF EXISTS "public"."categories_parent_idx";
DROP INDEX IF EXISTS "public"."categories_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."categories_created_at_idx";
DROP INDEX IF EXISTS "public"."categories_breadcrumbs_parent_id_idx";
DROP INDEX IF EXISTS "public"."categories_breadcrumbs_order_idx";
DROP INDEX IF EXISTS "public"."categories_breadcrumbs_locale_idx";
DROP INDEX IF EXISTS "public"."categories_breadcrumbs_doc_idx";
DROP INDEX IF EXISTS "public"."case_studies_updated_at_idx";
DROP INDEX IF EXISTS "public"."case_studies_stats_parent_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_stats_order_idx";
DROP INDEX IF EXISTS "public"."case_studies_stats_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."case_studies_slug_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_path_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_parent_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_order_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."case_studies_featured_image_idx";
DROP INDEX IF EXISTS "public"."case_studies_created_at_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_locales_locale";
DROP INDEX IF EXISTS "public"."case_studies__status_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_path_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_order_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_media_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."callToActionBlock_list_parent_id_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_list_order_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_list_locale_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_links_order_idx";
DROP INDEX IF EXISTS "public"."callToActionBlock_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."callToActionBlock_form_idx";
DROP INDEX IF EXISTS "public"."archiveBlock_path_idx";
DROP INDEX IF EXISTS "public"."archiveBlock_parent_id_idx";
DROP INDEX IF EXISTS "public"."archiveBlock_order_idx";
DROP INDEX IF EXISTS "public"."archiveBlock_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_version_featured_image_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_version_company_logo_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_case_study_version_case_study_linked_ca";
DROP INDEX IF EXISTS "public"."_testimonials_v_version_author_info_version_author_info_avatar_";
DROP INDEX IF EXISTS "public"."_testimonials_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_parent_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_testimonials_v_latest_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_testimonials_v_autosave_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_testimonialsBlock_v_block_header_links_locales_locale_parent_i";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version_slug_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version_icon_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version_ecosystem_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_parent_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_solutions_v_latest_idx";
DROP INDEX IF EXISTS "public"."_solutions_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_version_slug_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_version_hero_image_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_populated_authors_parent_id_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_populated_authors_order_idx";
DROP INDEX IF EXISTS "public"."_posts_v_version_meta_version_meta_image_idx";
DROP INDEX IF EXISTS "public"."_posts_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_posts_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_users_id_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_locale_idx";
DROP INDEX IF EXISTS "public"."_posts_v_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."_posts_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_posts_v_parent_idx";
DROP INDEX IF EXISTS "public"."_posts_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_posts_v_latest_idx";
DROP INDEX IF EXISTS "public"."_posts_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_version_slug_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_meta_version_meta_image_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_version_hero_media_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_logos_parent_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_logos_order_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_logos_logo_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_links_order_idx";
DROP INDEX IF EXISTS "public"."_pages_v_version_hero_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_pages_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_pages_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_testimonials_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_media_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_locale_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_pages_v_parent_idx";
DROP INDEX IF EXISTS "public"."_pages_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_pages_v_latest_idx";
DROP INDEX IF EXISTS "public"."_pages_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_locales_locale_par";
DROP INDEX IF EXISTS "public"."_pages_v_autosave_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_version_slug_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_version_icon_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_meta_version_meta_image_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_version_hero_media_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_logos_parent_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_logos_order_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_logos_logo_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_links_order_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_version_hero_links_locales_locale_parent_id_uni";
DROP INDEX IF EXISTS "public"."_integrations_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_media_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_rels_categories_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_parent_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_integrations_v_latest_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_locales_locale_parent_id_uniqu";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_parent_id_i";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_locales_loc";
DROP INDEX IF EXISTS "public"."_integrations_v_autosave_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_interactive_gallery_parent_id_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_interactive_gallery_order_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_interactive_gallery_locales_locale_parent_id_un";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_interactive_gallery_image_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_galleryBlock_v_block_header_links_locales_locale_parent_id_uni";
DROP INDEX IF EXISTS "public"."_formBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_formBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_formBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_formBlock_v_form_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_columns_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_columns_order_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_columns_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_columns_image_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_block_image_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_featuresBlock_v_block_header_links_locales_locale_parent_id_un";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_media_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_cards_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_cards_order_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_cards_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_locales_locale_parent_i";
DROP INDEX IF EXISTS "public"."_dividerBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_dividerBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_dividerBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_block_header_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_customHtmlBlock_v_block_header_links_locales_locale_parent_id_";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_version_updated_at_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_version_slug_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_version_featured_image_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_version_created_at_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_version__status_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_stats_parent_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_stats_order_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_version_stats_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_case_studies_v_updated_at_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_snapshot_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_solutions_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_posts_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_path_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_parent_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_pages_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_order_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_integrations_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_rels_faq_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_published_locale_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_parent_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_case_studies_v_latest_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_created_at_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_path_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_parent_id_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_order_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_locales_locale_parent_id_uniqu";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_parent_id_i";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_order_idx";
DROP INDEX IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_locales_loc";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_media_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_list_parent_id_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_list_order_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_list_locale_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_links_parent_id_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_links_order_idx";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_links_locales_locale_parent_id_unique";
DROP INDEX IF EXISTS "public"."_callToActionBlock_v_form_idx";
DROP INDEX IF EXISTS "public"."_archiveBlock_v_path_idx";
DROP INDEX IF EXISTS "public"."_archiveBlock_v_parent_id_idx";
DROP INDEX IF EXISTS "public"."_archiveBlock_v_order_idx";
DROP INDEX IF EXISTS "public"."_archiveBlock_v_locales_locale_parent_id_unique";
ALTER TABLE IF EXISTS ONLY "public"."users" DROP CONSTRAINT IF EXISTS "users_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonials_rels" DROP CONSTRAINT IF EXISTS "testimonials_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonials" DROP CONSTRAINT IF EXISTS "testimonials_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonials_locales" DROP CONSTRAINT IF EXISTS "testimonials_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock" DROP CONSTRAINT IF EXISTS "testimonialsBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_locales" DROP CONSTRAINT IF EXISTS "testimonialsBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_block_header_links" DROP CONSTRAINT IF EXISTS "testimonialsBlock_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."testimonialsBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "testimonialsBlock_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."solutions_rels" DROP CONSTRAINT IF EXISTS "solutions_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."solutions" DROP CONSTRAINT IF EXISTS "solutions_pkey";
ALTER TABLE IF EXISTS ONLY "public"."solutions_locales" DROP CONSTRAINT IF EXISTS "solutions_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."settings_rels" DROP CONSTRAINT IF EXISTS "settings_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."settings" DROP CONSTRAINT IF EXISTS "settings_pkey";
ALTER TABLE IF EXISTS ONLY "public"."settings_locales" DROP CONSTRAINT IF EXISTS "settings_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."search_rels" DROP CONSTRAINT IF EXISTS "search_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."search" DROP CONSTRAINT IF EXISTS "search_pkey";
ALTER TABLE IF EXISTS ONLY "public"."search_locales" DROP CONSTRAINT IF EXISTS "search_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."search_categories" DROP CONSTRAINT IF EXISTS "search_categories_pkey";
ALTER TABLE IF EXISTS ONLY "public"."redirects_rels" DROP CONSTRAINT IF EXISTS "redirects_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."redirects" DROP CONSTRAINT IF EXISTS "redirects_pkey";
ALTER TABLE IF EXISTS ONLY "public"."posts_rels" DROP CONSTRAINT IF EXISTS "posts_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."posts_populated_authors" DROP CONSTRAINT IF EXISTS "posts_populated_authors_pkey";
ALTER TABLE IF EXISTS ONLY "public"."posts" DROP CONSTRAINT IF EXISTS "posts_pkey";
ALTER TABLE IF EXISTS ONLY "public"."posts_locales" DROP CONSTRAINT IF EXISTS "posts_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_preferences_rels" DROP CONSTRAINT IF EXISTS "payload_preferences_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_preferences" DROP CONSTRAINT IF EXISTS "payload_preferences_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_migrations" DROP CONSTRAINT IF EXISTS "payload_migrations_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_locked_documents" DROP CONSTRAINT IF EXISTS "payload_locked_documents_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_jobs" DROP CONSTRAINT IF EXISTS "payload_jobs_pkey";
ALTER TABLE IF EXISTS ONLY "public"."payload_jobs_log" DROP CONSTRAINT IF EXISTS "payload_jobs_log_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_rels" DROP CONSTRAINT IF EXISTS "pages_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages" DROP CONSTRAINT IF EXISTS "pages_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_locales" DROP CONSTRAINT IF EXISTS "pages_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_logos" DROP CONSTRAINT IF EXISTS "pages_hero_logos_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_links" DROP CONSTRAINT IF EXISTS "pages_hero_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_hero_links_locales" DROP CONSTRAINT IF EXISTS "pages_hero_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."pages_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "pages_blocks_faq_block_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."media_rels" DROP CONSTRAINT IF EXISTS "media_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."media" DROP CONSTRAINT IF EXISTS "media_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_rels" DROP CONSTRAINT IF EXISTS "integrations_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations" DROP CONSTRAINT IF EXISTS "integrations_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_locales" DROP CONSTRAINT IF EXISTS "integrations_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_logos" DROP CONSTRAINT IF EXISTS "integrations_hero_logos_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_links" DROP CONSTRAINT IF EXISTS "integrations_hero_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_hero_links_locales" DROP CONSTRAINT IF EXISTS "integrations_hero_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."integrations_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "integrations_blocks_faq_block_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs" DROP CONSTRAINT IF EXISTS "header_tabs_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_list_links_links" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_list_links_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_list_links_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_list_links_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_featured_link_links" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_featured_link_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_nav_items_featured_link_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_nav_items_featured_link_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_locales" DROP CONSTRAINT IF EXISTS "header_tabs_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_description_links" DROP CONSTRAINT IF EXISTS "header_tabs_description_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_tabs_description_links_locales" DROP CONSTRAINT IF EXISTS "header_tabs_description_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_rels" DROP CONSTRAINT IF EXISTS "header_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header" DROP CONSTRAINT IF EXISTS "header_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_cta" DROP CONSTRAINT IF EXISTS "header_cta_pkey";
ALTER TABLE IF EXISTS ONLY "public"."header_cta_locales" DROP CONSTRAINT IF EXISTS "header_cta_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock" DROP CONSTRAINT IF EXISTS "galleryBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_interactive_gallery" DROP CONSTRAINT IF EXISTS "galleryBlock_interactive_gallery_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_interactive_gallery_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_block_header_links" DROP CONSTRAINT IF EXISTS "galleryBlock_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."galleryBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "galleryBlock_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms" DROP CONSTRAINT IF EXISTS "forms_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_locales" DROP CONSTRAINT IF EXISTS "forms_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_emails" DROP CONSTRAINT IF EXISTS "forms_emails_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_emails_locales" DROP CONSTRAINT IF EXISTS "forms_emails_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_textarea" DROP CONSTRAINT IF EXISTS "forms_blocks_textarea_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_textarea_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_textarea_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_text" DROP CONSTRAINT IF EXISTS "forms_blocks_text_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_text_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_text_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_state" DROP CONSTRAINT IF EXISTS "forms_blocks_state_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_state_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_state_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select" DROP CONSTRAINT IF EXISTS "forms_blocks_select_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_options" DROP CONSTRAINT IF EXISTS "forms_blocks_select_options_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_options_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_select_options_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_select_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_select_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_number" DROP CONSTRAINT IF EXISTS "forms_blocks_number_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_number_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_number_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_message" DROP CONSTRAINT IF EXISTS "forms_blocks_message_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_message_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_message_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_email" DROP CONSTRAINT IF EXISTS "forms_blocks_email_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_email_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_email_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_country" DROP CONSTRAINT IF EXISTS "forms_blocks_country_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_country_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_country_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_checkbox" DROP CONSTRAINT IF EXISTS "forms_blocks_checkbox_pkey";
ALTER TABLE IF EXISTS ONLY "public"."forms_blocks_checkbox_locales" DROP CONSTRAINT IF EXISTS "forms_blocks_checkbox_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."form_submissions_submission_data" DROP CONSTRAINT IF EXISTS "form_submissions_submission_data_pkey";
ALTER TABLE IF EXISTS ONLY "public"."form_submissions" DROP CONSTRAINT IF EXISTS "form_submissions_pkey";
ALTER TABLE IF EXISTS ONLY "public"."formBlock" DROP CONSTRAINT IF EXISTS "formBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."footer_rels" DROP CONSTRAINT IF EXISTS "footer_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."footer" DROP CONSTRAINT IF EXISTS "footer_pkey";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns" DROP CONSTRAINT IF EXISTS "footer_columns_pkey";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns_nav_items" DROP CONSTRAINT IF EXISTS "footer_columns_nav_items_pkey";
ALTER TABLE IF EXISTS ONLY "public"."footer_columns_nav_items_locales" DROP CONSTRAINT IF EXISTS "footer_columns_nav_items_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock" DROP CONSTRAINT IF EXISTS "featuresBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_columns" DROP CONSTRAINT IF EXISTS "featuresBlock_columns_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_columns_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_columns_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_block_header_links" DROP CONSTRAINT IF EXISTS "featuresBlock_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuresBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "featuresBlock_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_cards" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_cards_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_cards_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_cards_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_block_header_links" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."featuredAppsBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "featuredAppsBlock_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."faq" DROP CONSTRAINT IF EXISTS "faq_pkey";
ALTER TABLE IF EXISTS ONLY "public"."faq_locales" DROP CONSTRAINT IF EXISTS "faq_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."dividerBlock" DROP CONSTRAINT IF EXISTS "dividerBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock" DROP CONSTRAINT IF EXISTS "customHtmlBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_locales" DROP CONSTRAINT IF EXISTS "customHtmlBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_block_header_links" DROP CONSTRAINT IF EXISTS "customHtmlBlock_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."customHtmlBlock_block_header_links_locales" DROP CONSTRAINT IF EXISTS "customHtmlBlock_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."changelog" DROP CONSTRAINT IF EXISTS "changelog_pkey";
ALTER TABLE IF EXISTS ONLY "public"."changelog_locales" DROP CONSTRAINT IF EXISTS "changelog_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."changelog_categories" DROP CONSTRAINT IF EXISTS "changelog_categories_pkey";
ALTER TABLE IF EXISTS ONLY "public"."categories" DROP CONSTRAINT IF EXISTS "categories_pkey";
ALTER TABLE IF EXISTS ONLY "public"."categories_locales" DROP CONSTRAINT IF EXISTS "categories_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."categories_breadcrumbs" DROP CONSTRAINT IF EXISTS "categories_breadcrumbs_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_stats" DROP CONSTRAINT IF EXISTS "case_studies_stats_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_stats_locales" DROP CONSTRAINT IF EXISTS "case_studies_stats_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_rels" DROP CONSTRAINT IF EXISTS "case_studies_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies" DROP CONSTRAINT IF EXISTS "case_studies_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_locales" DROP CONSTRAINT IF EXISTS "case_studies_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."case_studies_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "case_studies_blocks_faq_block_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock" DROP CONSTRAINT IF EXISTS "callToActionBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_locales" DROP CONSTRAINT IF EXISTS "callToActionBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_list" DROP CONSTRAINT IF EXISTS "callToActionBlock_list_pkey";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_links" DROP CONSTRAINT IF EXISTS "callToActionBlock_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."callToActionBlock_links_locales" DROP CONSTRAINT IF EXISTS "callToActionBlock_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."archiveBlock" DROP CONSTRAINT IF EXISTS "archiveBlock_pkey";
ALTER TABLE IF EXISTS ONLY "public"."archiveBlock_locales" DROP CONSTRAINT IF EXISTS "archiveBlock_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_rels" DROP CONSTRAINT IF EXISTS "_testimonials_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v" DROP CONSTRAINT IF EXISTS "_testimonials_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonials_v_locales" DROP CONSTRAINT IF EXISTS "_testimonials_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_locales" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_testimonialsBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_testimonialsBlock_v_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_rels" DROP CONSTRAINT IF EXISTS "_solutions_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v" DROP CONSTRAINT IF EXISTS "_solutions_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_solutions_v_locales" DROP CONSTRAINT IF EXISTS "_solutions_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_version_populated_authors" DROP CONSTRAINT IF EXISTS "_posts_v_version_populated_authors_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_rels" DROP CONSTRAINT IF EXISTS "_posts_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v" DROP CONSTRAINT IF EXISTS "_posts_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_posts_v_locales" DROP CONSTRAINT IF EXISTS "_posts_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_logos_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_links" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_version_hero_links_locales" DROP CONSTRAINT IF EXISTS "_pages_v_version_hero_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_rels" DROP CONSTRAINT IF EXISTS "_pages_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v" DROP CONSTRAINT IF EXISTS "_pages_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_locales" DROP CONSTRAINT IF EXISTS "_pages_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_pages_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_pages_v_blocks_faq_block_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_logos" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_logos_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_links" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_version_hero_links_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_version_hero_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_rels" DROP CONSTRAINT IF EXISTS "_integrations_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v" DROP CONSTRAINT IF EXISTS "_integrations_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_integrations_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_integrations_v_blocks_faq_block_block_header_links_locale_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_interactive_gallery" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_interactive_gallery_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_interactive_gallery_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_interactive_gallery_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_galleryBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_galleryBlock_v_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_formBlock_v" DROP CONSTRAINT IF EXISTS "_formBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_columns" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_columns_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_columns_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_columns_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuresBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_featuresBlock_v_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_cards" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_cards_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_cards_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_cards_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_featuredAppsBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_featuredAppsBlock_v_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_dividerBlock_v" DROP CONSTRAINT IF EXISTS "_dividerBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_locales" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_block_header_links" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_customHtmlBlock_v_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_customHtmlBlock_v_block_header_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_version_stats" DROP CONSTRAINT IF EXISTS "_case_studies_v_version_stats_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_version_stats_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_version_stats_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_rels" DROP CONSTRAINT IF EXISTS "_case_studies_v_rels_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v" DROP CONSTRAINT IF EXISTS "_case_studies_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_block_header_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" DROP CONSTRAINT IF EXISTS "_case_studies_v_blocks_faq_block_block_header_links_locale_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_locales" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_list" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_list_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_links" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_links_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_callToActionBlock_v_links_locales" DROP CONSTRAINT IF EXISTS "_callToActionBlock_v_links_locales_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_archiveBlock_v" DROP CONSTRAINT IF EXISTS "_archiveBlock_v_pkey";
ALTER TABLE IF EXISTS ONLY "public"."_archiveBlock_v_locales" DROP CONSTRAINT IF EXISTS "_archiveBlock_v_locales_pkey";
ALTER TABLE IF EXISTS "public"."users" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."testimonials_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."testimonials_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."testimonialsBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."testimonialsBlock_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."testimonials" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."solutions_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."solutions_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."solutions" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."settings_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."settings_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."settings" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."search_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."search_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."search" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."redirects_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."redirects" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."posts_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."posts_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."posts" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_preferences_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_preferences" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_migrations" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_locked_documents_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_locked_documents" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."payload_jobs" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages_hero_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."pages" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."media_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."media" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations_hero_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."integrations" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_tabs_nav_items_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_tabs_nav_items_list_links_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_tabs_nav_items_featured_link_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_tabs_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_tabs_description_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header_cta_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."header" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."galleryBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."galleryBlock_interactive_gallery_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."galleryBlock_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_emails_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_textarea_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_text_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_state_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_select_options_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_select_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_number_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_message_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_email_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_country_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms_blocks_checkbox_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."forms" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."form_submissions" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."footer_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."footer_columns_nav_items_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."footer" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuresBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuresBlock_columns_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuresBlock_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuredAppsBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuredAppsBlock_cards_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."featuredAppsBlock_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."faq_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."faq" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."customHtmlBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."customHtmlBlock_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."changelog_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."changelog_categories" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."changelog" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."categories_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."categories" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies_stats_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."case_studies" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."callToActionBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."callToActionBlock_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."archiveBlock_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonials_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonials_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonials_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonialsBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonialsBlock_v_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonialsBlock_v_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_testimonialsBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_solutions_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_solutions_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_solutions_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_posts_v_version_populated_authors" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_posts_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_posts_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_posts_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_version_hero_logos" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_version_hero_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_version_hero_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v_blocks_faq_block" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_pages_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_version_hero_logos" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_version_hero_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_version_hero_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_integrations_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v_interactive_gallery_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v_interactive_gallery" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_galleryBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_formBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v_columns_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v_columns" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuresBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v_cards_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v_cards" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_featuredAppsBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_dividerBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_customHtmlBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_customHtmlBlock_v_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_customHtmlBlock_v_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_customHtmlBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_version_stats_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_version_stats" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_rels" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_case_studies_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_callToActionBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_callToActionBlock_v_list" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_callToActionBlock_v_links_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_callToActionBlock_v_links" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_callToActionBlock_v" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_archiveBlock_v_locales" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."_archiveBlock_v" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
DROP TABLE IF EXISTS "public"."users";
DROP SEQUENCE IF EXISTS "public"."testimonials_rels_id_seq";
DROP TABLE IF EXISTS "public"."testimonials_rels";
DROP SEQUENCE IF EXISTS "public"."testimonials_locales_id_seq";
DROP TABLE IF EXISTS "public"."testimonials_locales";
DROP SEQUENCE IF EXISTS "public"."testimonials_id_seq";
DROP SEQUENCE IF EXISTS "public"."testimonialsBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."testimonialsBlock_locales";
DROP SEQUENCE IF EXISTS "public"."testimonialsBlock_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."testimonialsBlock_block_header_links_locales";
DROP TABLE IF EXISTS "public"."testimonialsBlock_block_header_links";
DROP TABLE IF EXISTS "public"."testimonialsBlock";
DROP TABLE IF EXISTS "public"."testimonials";
DROP SEQUENCE IF EXISTS "public"."solutions_rels_id_seq";
DROP TABLE IF EXISTS "public"."solutions_rels";
DROP SEQUENCE IF EXISTS "public"."solutions_locales_id_seq";
DROP TABLE IF EXISTS "public"."solutions_locales";
DROP SEQUENCE IF EXISTS "public"."solutions_id_seq";
DROP TABLE IF EXISTS "public"."solutions";
DROP SEQUENCE IF EXISTS "public"."settings_rels_id_seq";
DROP TABLE IF EXISTS "public"."settings_rels";
DROP SEQUENCE IF EXISTS "public"."settings_locales_id_seq";
DROP TABLE IF EXISTS "public"."settings_locales";
DROP SEQUENCE IF EXISTS "public"."settings_id_seq";
DROP TABLE IF EXISTS "public"."settings";
DROP SEQUENCE IF EXISTS "public"."search_rels_id_seq";
DROP TABLE IF EXISTS "public"."search_rels";
DROP SEQUENCE IF EXISTS "public"."search_locales_id_seq";
DROP TABLE IF EXISTS "public"."search_locales";
DROP SEQUENCE IF EXISTS "public"."search_id_seq";
DROP TABLE IF EXISTS "public"."search_categories";
DROP TABLE IF EXISTS "public"."search";
DROP SEQUENCE IF EXISTS "public"."redirects_rels_id_seq";
DROP TABLE IF EXISTS "public"."redirects_rels";
DROP SEQUENCE IF EXISTS "public"."redirects_id_seq";
DROP TABLE IF EXISTS "public"."redirects";
DROP SEQUENCE IF EXISTS "public"."posts_rels_id_seq";
DROP TABLE IF EXISTS "public"."posts_rels";
DROP TABLE IF EXISTS "public"."posts_populated_authors";
DROP SEQUENCE IF EXISTS "public"."posts_locales_id_seq";
DROP TABLE IF EXISTS "public"."posts_locales";
DROP SEQUENCE IF EXISTS "public"."posts_id_seq";
DROP TABLE IF EXISTS "public"."posts";
DROP SEQUENCE IF EXISTS "public"."payload_preferences_rels_id_seq";
DROP TABLE IF EXISTS "public"."payload_preferences_rels";
DROP SEQUENCE IF EXISTS "public"."payload_preferences_id_seq";
DROP TABLE IF EXISTS "public"."payload_preferences";
DROP SEQUENCE IF EXISTS "public"."payload_migrations_id_seq";
DROP TABLE IF EXISTS "public"."payload_migrations";
DROP SEQUENCE IF EXISTS "public"."payload_locked_documents_rels_id_seq";
DROP TABLE IF EXISTS "public"."payload_locked_documents_rels";
DROP SEQUENCE IF EXISTS "public"."payload_locked_documents_id_seq";
DROP TABLE IF EXISTS "public"."payload_locked_documents";
DROP TABLE IF EXISTS "public"."payload_jobs_log";
DROP SEQUENCE IF EXISTS "public"."payload_jobs_id_seq";
DROP TABLE IF EXISTS "public"."payload_jobs";
DROP SEQUENCE IF EXISTS "public"."pages_rels_id_seq";
DROP TABLE IF EXISTS "public"."pages_rels";
DROP SEQUENCE IF EXISTS "public"."pages_locales_id_seq";
DROP TABLE IF EXISTS "public"."pages_locales";
DROP SEQUENCE IF EXISTS "public"."pages_id_seq";
DROP TABLE IF EXISTS "public"."pages_hero_logos";
DROP SEQUENCE IF EXISTS "public"."pages_hero_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."pages_hero_links_locales";
DROP TABLE IF EXISTS "public"."pages_hero_links";
DROP SEQUENCE IF EXISTS "public"."pages_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."pages_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."pages_blocks_faq_block_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."pages_blocks_faq_block_block_header_links_locales";
DROP TABLE IF EXISTS "public"."pages_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."pages_blocks_faq_block";
DROP TABLE IF EXISTS "public"."pages";
DROP SEQUENCE IF EXISTS "public"."media_rels_id_seq";
DROP TABLE IF EXISTS "public"."media_rels";
DROP SEQUENCE IF EXISTS "public"."media_id_seq";
DROP TABLE IF EXISTS "public"."media";
DROP SEQUENCE IF EXISTS "public"."integrations_rels_id_seq";
DROP TABLE IF EXISTS "public"."integrations_rels";
DROP SEQUENCE IF EXISTS "public"."integrations_locales_id_seq";
DROP TABLE IF EXISTS "public"."integrations_locales";
DROP SEQUENCE IF EXISTS "public"."integrations_id_seq";
DROP TABLE IF EXISTS "public"."integrations_hero_logos";
DROP SEQUENCE IF EXISTS "public"."integrations_hero_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."integrations_hero_links_locales";
DROP TABLE IF EXISTS "public"."integrations_hero_links";
DROP SEQUENCE IF EXISTS "public"."integrations_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."integrations_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."integrations_blocks_faq_block_block_header_links_locales";
DROP TABLE IF EXISTS "public"."integrations_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."integrations_blocks_faq_block";
DROP TABLE IF EXISTS "public"."integrations";
DROP SEQUENCE IF EXISTS "public"."header_tabs_nav_items_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items_locales";
DROP SEQUENCE IF EXISTS "public"."header_tabs_nav_items_list_links_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items_list_links_links_locales";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items_list_links_links";
DROP SEQUENCE IF EXISTS "public"."header_tabs_nav_items_featured_link_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items_featured_link_links_locales";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items_featured_link_links";
DROP TABLE IF EXISTS "public"."header_tabs_nav_items";
DROP SEQUENCE IF EXISTS "public"."header_tabs_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_tabs_locales";
DROP SEQUENCE IF EXISTS "public"."header_tabs_description_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_tabs_description_links_locales";
DROP TABLE IF EXISTS "public"."header_tabs_description_links";
DROP TABLE IF EXISTS "public"."header_tabs";
DROP SEQUENCE IF EXISTS "public"."header_rels_id_seq";
DROP TABLE IF EXISTS "public"."header_rels";
DROP SEQUENCE IF EXISTS "public"."header_id_seq";
DROP SEQUENCE IF EXISTS "public"."header_cta_locales_id_seq";
DROP TABLE IF EXISTS "public"."header_cta_locales";
DROP TABLE IF EXISTS "public"."header_cta";
DROP TABLE IF EXISTS "public"."header";
DROP SEQUENCE IF EXISTS "public"."galleryBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."galleryBlock_locales";
DROP SEQUENCE IF EXISTS "public"."galleryBlock_interactive_gallery_locales_id_seq";
DROP TABLE IF EXISTS "public"."galleryBlock_interactive_gallery_locales";
DROP TABLE IF EXISTS "public"."galleryBlock_interactive_gallery";
DROP SEQUENCE IF EXISTS "public"."galleryBlock_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."galleryBlock_block_header_links_locales";
DROP TABLE IF EXISTS "public"."galleryBlock_block_header_links";
DROP TABLE IF EXISTS "public"."galleryBlock";
DROP SEQUENCE IF EXISTS "public"."forms_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_locales";
DROP SEQUENCE IF EXISTS "public"."forms_id_seq";
DROP SEQUENCE IF EXISTS "public"."forms_emails_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_emails_locales";
DROP TABLE IF EXISTS "public"."forms_emails";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_textarea_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_textarea_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_textarea";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_text_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_text_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_text";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_state_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_state_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_state";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_select_options_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_select_options_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_select_options";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_select_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_select_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_select";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_number_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_number_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_number";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_message_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_message_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_message";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_email_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_email_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_email";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_country_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_country_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_country";
DROP SEQUENCE IF EXISTS "public"."forms_blocks_checkbox_locales_id_seq";
DROP TABLE IF EXISTS "public"."forms_blocks_checkbox_locales";
DROP TABLE IF EXISTS "public"."forms_blocks_checkbox";
DROP TABLE IF EXISTS "public"."forms";
DROP TABLE IF EXISTS "public"."form_submissions_submission_data";
DROP SEQUENCE IF EXISTS "public"."form_submissions_id_seq";
DROP TABLE IF EXISTS "public"."form_submissions";
DROP TABLE IF EXISTS "public"."formBlock";
DROP SEQUENCE IF EXISTS "public"."footer_rels_id_seq";
DROP TABLE IF EXISTS "public"."footer_rels";
DROP SEQUENCE IF EXISTS "public"."footer_id_seq";
DROP SEQUENCE IF EXISTS "public"."footer_columns_nav_items_locales_id_seq";
DROP TABLE IF EXISTS "public"."footer_columns_nav_items_locales";
DROP TABLE IF EXISTS "public"."footer_columns_nav_items";
DROP TABLE IF EXISTS "public"."footer_columns";
DROP TABLE IF EXISTS "public"."footer";
DROP SEQUENCE IF EXISTS "public"."featuresBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuresBlock_locales";
DROP SEQUENCE IF EXISTS "public"."featuresBlock_columns_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuresBlock_columns_locales";
DROP TABLE IF EXISTS "public"."featuresBlock_columns";
DROP SEQUENCE IF EXISTS "public"."featuresBlock_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuresBlock_block_header_links_locales";
DROP TABLE IF EXISTS "public"."featuresBlock_block_header_links";
DROP TABLE IF EXISTS "public"."featuresBlock";
DROP SEQUENCE IF EXISTS "public"."featuredAppsBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuredAppsBlock_locales";
DROP SEQUENCE IF EXISTS "public"."featuredAppsBlock_cards_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuredAppsBlock_cards_locales";
DROP TABLE IF EXISTS "public"."featuredAppsBlock_cards";
DROP SEQUENCE IF EXISTS "public"."featuredAppsBlock_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."featuredAppsBlock_block_header_links_locales";
DROP TABLE IF EXISTS "public"."featuredAppsBlock_block_header_links";
DROP TABLE IF EXISTS "public"."featuredAppsBlock";
DROP SEQUENCE IF EXISTS "public"."faq_locales_id_seq";
DROP TABLE IF EXISTS "public"."faq_locales";
DROP SEQUENCE IF EXISTS "public"."faq_id_seq";
DROP TABLE IF EXISTS "public"."faq";
DROP TABLE IF EXISTS "public"."dividerBlock";
DROP SEQUENCE IF EXISTS "public"."customHtmlBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."customHtmlBlock_locales";
DROP SEQUENCE IF EXISTS "public"."customHtmlBlock_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."customHtmlBlock_block_header_links_locales";
DROP TABLE IF EXISTS "public"."customHtmlBlock_block_header_links";
DROP TABLE IF EXISTS "public"."customHtmlBlock";
DROP SEQUENCE IF EXISTS "public"."changelog_locales_id_seq";
DROP TABLE IF EXISTS "public"."changelog_locales";
DROP SEQUENCE IF EXISTS "public"."changelog_id_seq";
DROP SEQUENCE IF EXISTS "public"."changelog_categories_id_seq";
DROP TABLE IF EXISTS "public"."changelog_categories";
DROP TABLE IF EXISTS "public"."changelog";
DROP SEQUENCE IF EXISTS "public"."categories_locales_id_seq";
DROP TABLE IF EXISTS "public"."categories_locales";
DROP SEQUENCE IF EXISTS "public"."categories_id_seq";
DROP TABLE IF EXISTS "public"."categories_breadcrumbs";
DROP TABLE IF EXISTS "public"."categories";
DROP SEQUENCE IF EXISTS "public"."case_studies_stats_locales_id_seq";
DROP TABLE IF EXISTS "public"."case_studies_stats_locales";
DROP TABLE IF EXISTS "public"."case_studies_stats";
DROP SEQUENCE IF EXISTS "public"."case_studies_rels_id_seq";
DROP TABLE IF EXISTS "public"."case_studies_rels";
DROP SEQUENCE IF EXISTS "public"."case_studies_locales_id_seq";
DROP TABLE IF EXISTS "public"."case_studies_locales";
DROP SEQUENCE IF EXISTS "public"."case_studies_id_seq";
DROP SEQUENCE IF EXISTS "public"."case_studies_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."case_studies_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links_locales";
DROP TABLE IF EXISTS "public"."case_studies_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."case_studies_blocks_faq_block";
DROP TABLE IF EXISTS "public"."case_studies";
DROP SEQUENCE IF EXISTS "public"."callToActionBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."callToActionBlock_locales";
DROP TABLE IF EXISTS "public"."callToActionBlock_list";
DROP SEQUENCE IF EXISTS "public"."callToActionBlock_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."callToActionBlock_links_locales";
DROP TABLE IF EXISTS "public"."callToActionBlock_links";
DROP TABLE IF EXISTS "public"."callToActionBlock";
DROP SEQUENCE IF EXISTS "public"."archiveBlock_locales_id_seq";
DROP TABLE IF EXISTS "public"."archiveBlock_locales";
DROP TABLE IF EXISTS "public"."archiveBlock";
DROP SEQUENCE IF EXISTS "public"."_testimonials_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_testimonials_v_rels";
DROP SEQUENCE IF EXISTS "public"."_testimonials_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_testimonials_v_locales";
DROP SEQUENCE IF EXISTS "public"."_testimonials_v_id_seq";
DROP TABLE IF EXISTS "public"."_testimonials_v";
DROP SEQUENCE IF EXISTS "public"."_testimonialsBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_testimonialsBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_testimonialsBlock_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_testimonialsBlock_v_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_testimonialsBlock_v_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_testimonialsBlock_v_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_testimonialsBlock_v_block_header_links";
DROP TABLE IF EXISTS "public"."_testimonialsBlock_v";
DROP SEQUENCE IF EXISTS "public"."_solutions_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_solutions_v_rels";
DROP SEQUENCE IF EXISTS "public"."_solutions_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_solutions_v_locales";
DROP SEQUENCE IF EXISTS "public"."_solutions_v_id_seq";
DROP TABLE IF EXISTS "public"."_solutions_v";
DROP SEQUENCE IF EXISTS "public"."_posts_v_version_populated_authors_id_seq";
DROP TABLE IF EXISTS "public"."_posts_v_version_populated_authors";
DROP SEQUENCE IF EXISTS "public"."_posts_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_posts_v_rels";
DROP SEQUENCE IF EXISTS "public"."_posts_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_posts_v_locales";
DROP SEQUENCE IF EXISTS "public"."_posts_v_id_seq";
DROP TABLE IF EXISTS "public"."_posts_v";
DROP SEQUENCE IF EXISTS "public"."_pages_v_version_hero_logos_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_version_hero_logos";
DROP SEQUENCE IF EXISTS "public"."_pages_v_version_hero_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_version_hero_links_locales";
DROP SEQUENCE IF EXISTS "public"."_pages_v_version_hero_links_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_version_hero_links";
DROP SEQUENCE IF EXISTS "public"."_pages_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_rels";
DROP SEQUENCE IF EXISTS "public"."_pages_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_locales";
DROP SEQUENCE IF EXISTS "public"."_pages_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_pages_v_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."_pages_v_blocks_faq_block_id_seq";
DROP SEQUENCE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_pages_v_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."_pages_v_blocks_faq_block";
DROP TABLE IF EXISTS "public"."_pages_v";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_version_hero_logos_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_version_hero_logos";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_version_hero_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_version_hero_links_locales";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_version_hero_links_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_version_hero_links";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_rels";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_locales";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_blocks_faq_block_id_seq";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_loca_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."_integrations_v_blocks_faq_block";
DROP TABLE IF EXISTS "public"."_integrations_v";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_galleryBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_interactive_gallery_locales_id_seq";
DROP TABLE IF EXISTS "public"."_galleryBlock_v_interactive_gallery_locales";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_interactive_gallery_id_seq";
DROP TABLE IF EXISTS "public"."_galleryBlock_v_interactive_gallery";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_galleryBlock_v_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_galleryBlock_v_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_galleryBlock_v_block_header_links";
DROP TABLE IF EXISTS "public"."_galleryBlock_v";
DROP SEQUENCE IF EXISTS "public"."_formBlock_v_id_seq";
DROP TABLE IF EXISTS "public"."_formBlock_v";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuresBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_columns_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuresBlock_v_columns_locales";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_columns_id_seq";
DROP TABLE IF EXISTS "public"."_featuresBlock_v_columns";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuresBlock_v_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_featuresBlock_v_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_featuresBlock_v_block_header_links";
DROP TABLE IF EXISTS "public"."_featuresBlock_v";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_cards_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v_cards_locales";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_cards_id_seq";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v_cards";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v_block_header_links";
DROP TABLE IF EXISTS "public"."_featuredAppsBlock_v";
DROP SEQUENCE IF EXISTS "public"."_dividerBlock_v_id_seq";
DROP TABLE IF EXISTS "public"."_dividerBlock_v";
DROP SEQUENCE IF EXISTS "public"."_customHtmlBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_customHtmlBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_customHtmlBlock_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_customHtmlBlock_v_block_header_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_customHtmlBlock_v_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_customHtmlBlock_v_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_customHtmlBlock_v_block_header_links";
DROP TABLE IF EXISTS "public"."_customHtmlBlock_v";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_version_stats_locales_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_version_stats_locales";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_version_stats_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_version_stats";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_rels_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_rels";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_locales";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_id_seq";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_blocks_faq_block_locales_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_locales";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_blocks_faq_block_id_seq";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_loca_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_locales";
DROP SEQUENCE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links_id_seq";
DROP TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block_block_header_links";
DROP TABLE IF EXISTS "public"."_case_studies_v_blocks_faq_block";
DROP TABLE IF EXISTS "public"."_case_studies_v";
DROP SEQUENCE IF EXISTS "public"."_callToActionBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_callToActionBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_callToActionBlock_v_list_id_seq";
DROP TABLE IF EXISTS "public"."_callToActionBlock_v_list";
DROP SEQUENCE IF EXISTS "public"."_callToActionBlock_v_links_locales_id_seq";
DROP TABLE IF EXISTS "public"."_callToActionBlock_v_links_locales";
DROP SEQUENCE IF EXISTS "public"."_callToActionBlock_v_links_id_seq";
DROP TABLE IF EXISTS "public"."_callToActionBlock_v_links";
DROP SEQUENCE IF EXISTS "public"."_callToActionBlock_v_id_seq";
DROP TABLE IF EXISTS "public"."_callToActionBlock_v";
DROP SEQUENCE IF EXISTS "public"."_archiveBlock_v_locales_id_seq";
DROP TABLE IF EXISTS "public"."_archiveBlock_v_locales";
DROP SEQUENCE IF EXISTS "public"."_archiveBlock_v_id_seq";
DROP TABLE IF EXISTS "public"."_archiveBlock_v";
DROP TYPE IF EXISTS "public"."link_variant";
DROP TYPE IF EXISTS "public"."link_type";
DROP TYPE IF EXISTS "public"."link_color";
DROP TYPE IF EXISTS "public"."enum_testimonials_status";
DROP TYPE IF EXISTS "public"."enum_testimonialsBlock_type";
DROP TYPE IF EXISTS "public"."enum_testimonialsBlock_block_header_type";
DROP TYPE IF EXISTS "public"."enum_testimonialsBlock_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_solutions_status";
DROP TYPE IF EXISTS "public"."enum_redirects_to_type";
DROP TYPE IF EXISTS "public"."enum_posts_status";
DROP TYPE IF EXISTS "public"."enum_payload_jobs_task_slug";
DROP TYPE IF EXISTS "public"."enum_payload_jobs_log_task_slug";
DROP TYPE IF EXISTS "public"."enum_payload_jobs_log_state";
DROP TYPE IF EXISTS "public"."enum_pages_status";
DROP TYPE IF EXISTS "public"."enum_pages_hero_type";
DROP TYPE IF EXISTS "public"."enum_pages_hero_badge_type";
DROP TYPE IF EXISTS "public"."enum_pages_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum_pages_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_media_locale";
DROP TYPE IF EXISTS "public"."enum_integrations_status";
DROP TYPE IF EXISTS "public"."enum_integrations_hero_type";
DROP TYPE IF EXISTS "public"."enum_integrations_hero_badge_type";
DROP TYPE IF EXISTS "public"."enum_integrations_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum_integrations_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_header_tabs_nav_items_style";
DROP TYPE IF EXISTS "public"."enum_galleryBlock_type";
DROP TYPE IF EXISTS "public"."enum_galleryBlock_block_header_type";
DROP TYPE IF EXISTS "public"."enum_galleryBlock_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_forms_confirmation_type";
DROP TYPE IF EXISTS "public"."enum_featuresBlock_type";
DROP TYPE IF EXISTS "public"."enum_featuresBlock_columns_size";
DROP TYPE IF EXISTS "public"."enum_featuresBlock_columns_badge_type";
DROP TYPE IF EXISTS "public"."enum_featuresBlock_block_header_type";
DROP TYPE IF EXISTS "public"."enum_featuresBlock_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_featuredAppsBlock_type";
DROP TYPE IF EXISTS "public"."enum_featuredAppsBlock_block_header_type";
DROP TYPE IF EXISTS "public"."enum_featuredAppsBlock_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_customHtmlBlock_block_header_type";
DROP TYPE IF EXISTS "public"."enum_customHtmlBlock_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_changelog_categories";
DROP TYPE IF EXISTS "public"."enum_case_studies_status";
DROP TYPE IF EXISTS "public"."enum_case_studies_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum_case_studies_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum_callToActionBlock_type";
DROP TYPE IF EXISTS "public"."enum_callToActionBlock_badge_type";
DROP TYPE IF EXISTS "public"."enum_archiveBlock_relation_to";
DROP TYPE IF EXISTS "public"."enum_archiveBlock_populate_by";
DROP TYPE IF EXISTS "public"."enum__testimonials_v_version_status";
DROP TYPE IF EXISTS "public"."enum__testimonials_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__testimonialsBlock_v_type";
DROP TYPE IF EXISTS "public"."enum__testimonialsBlock_v_block_header_type";
DROP TYPE IF EXISTS "public"."enum__testimonialsBlock_v_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__solutions_v_version_status";
DROP TYPE IF EXISTS "public"."enum__solutions_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__posts_v_version_status";
DROP TYPE IF EXISTS "public"."enum__posts_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__pages_v_version_status";
DROP TYPE IF EXISTS "public"."enum__pages_v_version_hero_type";
DROP TYPE IF EXISTS "public"."enum__pages_v_version_hero_badge_type";
DROP TYPE IF EXISTS "public"."enum__pages_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__integrations_v_version_status";
DROP TYPE IF EXISTS "public"."enum__integrations_v_version_hero_type";
DROP TYPE IF EXISTS "public"."enum__integrations_v_version_hero_badge_type";
DROP TYPE IF EXISTS "public"."enum__integrations_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__integrations_v_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum__integrations_v_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__galleryBlock_v_type";
DROP TYPE IF EXISTS "public"."enum__galleryBlock_v_block_header_type";
DROP TYPE IF EXISTS "public"."enum__galleryBlock_v_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__featuresBlock_v_type";
DROP TYPE IF EXISTS "public"."enum__featuresBlock_v_columns_size";
DROP TYPE IF EXISTS "public"."enum__featuresBlock_v_columns_badge_type";
DROP TYPE IF EXISTS "public"."enum__featuresBlock_v_block_header_type";
DROP TYPE IF EXISTS "public"."enum__featuresBlock_v_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__featuredAppsBlock_v_type";
DROP TYPE IF EXISTS "public"."enum__featuredAppsBlock_v_block_header_type";
DROP TYPE IF EXISTS "public"."enum__featuredAppsBlock_v_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__customHtmlBlock_v_block_header_type";
DROP TYPE IF EXISTS "public"."enum__customHtmlBlock_v_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__case_studies_v_version_status";
DROP TYPE IF EXISTS "public"."enum__case_studies_v_published_locale";
DROP TYPE IF EXISTS "public"."enum__case_studies_v_blocks_faq_block_block_header_type";
DROP TYPE IF EXISTS "public"."enum__case_studies_v_blocks_faq_block_block_header_badge_type";
DROP TYPE IF EXISTS "public"."enum__callToActionBlock_v_type";
DROP TYPE IF EXISTS "public"."enum__callToActionBlock_v_badge_type";
DROP TYPE IF EXISTS "public"."enum__archiveBlock_v_relation_to";
DROP TYPE IF EXISTS "public"."enum__archiveBlock_v_populate_by";
DROP TYPE IF EXISTS "public"."badge_icon_position";
DROP TYPE IF EXISTS "public"."badge_color";
DROP TYPE IF EXISTS "public"."_locales";
-- *not* dropping schema, since initdb creates it
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


--
-- Name: _locales; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."_locales" AS ENUM (
    'en',
    'ar'
);


--
-- Name: badge_color; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."badge_color" AS ENUM (
    'blue',
    'red',
    'green',
    'yellow'
);


--
-- Name: badge_icon_position; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."badge_icon_position" AS ENUM (
    'flex-row',
    'flex-row-reverse'
);


--
-- Name: enum__archiveBlock_v_populate_by; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__archiveBlock_v_populate_by" AS ENUM (
    'collection',
    'selection'
);


--
-- Name: enum__archiveBlock_v_relation_to; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__archiveBlock_v_relation_to" AS ENUM (
    'posts'
);


--
-- Name: enum__callToActionBlock_v_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__callToActionBlock_v_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__callToActionBlock_v_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__callToActionBlock_v_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07'
);


--
-- Name: enum__case_studies_v_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__case_studies_v_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__case_studies_v_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__case_studies_v_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__case_studies_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__case_studies_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__case_studies_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__customHtmlBlock_v_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__customHtmlBlock_v_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__customHtmlBlock_v_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__customHtmlBlock_v_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__featuredAppsBlock_v_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuredAppsBlock_v_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__featuredAppsBlock_v_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuredAppsBlock_v_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__featuredAppsBlock_v_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuredAppsBlock_v_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06'
);


--
-- Name: enum__featuresBlock_v_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuresBlock_v_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__featuresBlock_v_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuresBlock_v_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__featuresBlock_v_columns_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuresBlock_v_columns_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__featuresBlock_v_columns_size; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuresBlock_v_columns_size" AS ENUM (
    'half',
    'full',
    'oneThird',
    'twoThirds',
    'sixtyPercent',
    'fortyPercent'
);


--
-- Name: enum__featuresBlock_v_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__featuresBlock_v_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17'
);


--
-- Name: enum__galleryBlock_v_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__galleryBlock_v_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__galleryBlock_v_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__galleryBlock_v_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__galleryBlock_v_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__galleryBlock_v_type" AS ENUM (
    'gallery01',
    'gallery02',
    'gallery03',
    'gallery04'
);


--
-- Name: enum__integrations_v_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__integrations_v_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__integrations_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__integrations_v_version_hero_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_version_hero_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__integrations_v_version_hero_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_version_hero_type" AS ENUM (
    'hero01',
    'hero02',
    'hero03',
    'hero04',
    'hero05',
    'hero06',
    'hero07',
    'none'
);


--
-- Name: enum__integrations_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__integrations_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__pages_v_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__pages_v_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__pages_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__pages_v_version_hero_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_version_hero_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__pages_v_version_hero_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM (
    'hero01',
    'hero02',
    'hero03',
    'hero04',
    'hero05',
    'hero06',
    'hero07',
    'none'
);


--
-- Name: enum__pages_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__posts_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__posts_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__solutions_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__solutions_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__solutions_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__solutions_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum__testimonialsBlock_v_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__testimonialsBlock_v_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum__testimonialsBlock_v_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__testimonialsBlock_v_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum__testimonialsBlock_v_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__testimonialsBlock_v_type" AS ENUM (
    '01',
    '02',
    '03'
);


--
-- Name: enum__testimonials_v_published_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__testimonials_v_published_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum__testimonials_v_version_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_archiveBlock_populate_by; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_archiveBlock_populate_by" AS ENUM (
    'collection',
    'selection'
);


--
-- Name: enum_archiveBlock_relation_to; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_archiveBlock_relation_to" AS ENUM (
    'posts'
);


--
-- Name: enum_callToActionBlock_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_callToActionBlock_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_callToActionBlock_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_callToActionBlock_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07'
);


--
-- Name: enum_case_studies_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_case_studies_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_case_studies_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_case_studies_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_case_studies_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_case_studies_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_changelog_categories; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_changelog_categories" AS ENUM (
    'bug-fix',
    'feature',
    'improvement',
    'security',
    'other'
);


--
-- Name: enum_customHtmlBlock_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_customHtmlBlock_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_customHtmlBlock_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_customHtmlBlock_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_featuredAppsBlock_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuredAppsBlock_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_featuredAppsBlock_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuredAppsBlock_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_featuredAppsBlock_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuredAppsBlock_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06'
);


--
-- Name: enum_featuresBlock_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuresBlock_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_featuresBlock_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuresBlock_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_featuresBlock_columns_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuresBlock_columns_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_featuresBlock_columns_size; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuresBlock_columns_size" AS ENUM (
    'half',
    'full',
    'oneThird',
    'twoThirds',
    'sixtyPercent',
    'fortyPercent'
);


--
-- Name: enum_featuresBlock_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_featuresBlock_type" AS ENUM (
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17'
);


--
-- Name: enum_forms_confirmation_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM (
    'message',
    'redirect'
);


--
-- Name: enum_galleryBlock_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_galleryBlock_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_galleryBlock_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_galleryBlock_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_galleryBlock_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_galleryBlock_type" AS ENUM (
    'gallery01',
    'gallery02',
    'gallery03',
    'gallery04'
);


--
-- Name: enum_header_tabs_nav_items_style; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_header_tabs_nav_items_style" AS ENUM (
    'default',
    'featured',
    'list'
);


--
-- Name: enum_integrations_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_integrations_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_integrations_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_integrations_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_integrations_hero_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_integrations_hero_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_integrations_hero_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_integrations_hero_type" AS ENUM (
    'hero01',
    'hero02',
    'hero03',
    'hero04',
    'hero05',
    'hero06',
    'hero07',
    'none'
);


--
-- Name: enum_integrations_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_integrations_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_media_locale; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_media_locale" AS ENUM (
    'en',
    'ar'
);


--
-- Name: enum_pages_blocks_faq_block_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_pages_blocks_faq_block_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_pages_blocks_faq_block_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_pages_blocks_faq_block_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_pages_hero_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_pages_hero_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_pages_hero_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_pages_hero_type" AS ENUM (
    'hero01',
    'hero02',
    'hero03',
    'hero04',
    'hero05',
    'hero06',
    'hero07',
    'none'
);


--
-- Name: enum_pages_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_pages_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_payload_jobs_log_state; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM (
    'failed',
    'succeeded'
);


--
-- Name: enum_payload_jobs_log_task_slug; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM (
    'inline',
    'schedulePublish'
);


--
-- Name: enum_payload_jobs_task_slug; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM (
    'inline',
    'schedulePublish'
);


--
-- Name: enum_posts_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_posts_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_redirects_to_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_redirects_to_type" AS ENUM (
    'reference',
    'custom'
);


--
-- Name: enum_solutions_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_solutions_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: enum_testimonialsBlock_block_header_badge_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_testimonialsBlock_block_header_badge_type" AS ENUM (
    'label',
    'reference'
);


--
-- Name: enum_testimonialsBlock_block_header_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_testimonialsBlock_block_header_type" AS ENUM (
    'center',
    'split',
    'start'
);


--
-- Name: enum_testimonialsBlock_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_testimonialsBlock_type" AS ENUM (
    '01',
    '02',
    '03'
);


--
-- Name: enum_testimonials_status; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."enum_testimonials_status" AS ENUM (
    'draft',
    'published'
);


--
-- Name: link_color; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."link_color" AS ENUM (
    'brand',
    'neutral'
);


--
-- Name: link_type; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."link_type" AS ENUM (
    'reference',
    'custom'
);


--
-- Name: link_variant; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE "public"."link_variant" AS ENUM (
    'primary',
    'secondary',
    'tertiary',
    'ghost',
    'link'
);


SET default_tablespace = '';

SET default_table_access_method = "heap";

--
-- Name: _archiveBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_archiveBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "populate_by" "public"."enum__archiveBlock_v_populate_by" DEFAULT 'collection'::"public"."enum__archiveBlock_v_populate_by",
    "relation_to" "public"."enum__archiveBlock_v_relation_to" DEFAULT 'posts'::"public"."enum__archiveBlock_v_relation_to",
    "limit" numeric DEFAULT 10,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _archiveBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_archiveBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _archiveBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_archiveBlock_v_id_seq" OWNED BY "public"."_archiveBlock_v"."id";


--
-- Name: _archiveBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_archiveBlock_v_locales" (
    "intro_content" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _archiveBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_archiveBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _archiveBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_archiveBlock_v_locales_id_seq" OWNED BY "public"."_archiveBlock_v_locales"."id";


--
-- Name: _callToActionBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_callToActionBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "type" "public"."enum__callToActionBlock_v_type" DEFAULT '01'::"public"."enum__callToActionBlock_v_type",
    "badge_type" "public"."enum__callToActionBlock_v_badge_type",
    "badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "badge_icon" character varying,
    "badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "supporting_text" character varying,
    "form_id" integer,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _callToActionBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_callToActionBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _callToActionBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_callToActionBlock_v_id_seq" OWNED BY "public"."_callToActionBlock_v"."id";


--
-- Name: _callToActionBlock_v_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_callToActionBlock_v_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _callToActionBlock_v_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_callToActionBlock_v_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _callToActionBlock_v_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_callToActionBlock_v_links_id_seq" OWNED BY "public"."_callToActionBlock_v_links"."id";


--
-- Name: _callToActionBlock_v_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_callToActionBlock_v_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _callToActionBlock_v_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_callToActionBlock_v_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _callToActionBlock_v_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_callToActionBlock_v_links_locales_id_seq" OWNED BY "public"."_callToActionBlock_v_links_locales"."id";


--
-- Name: _callToActionBlock_v_list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_callToActionBlock_v_list" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "id" integer NOT NULL,
    "icon" character varying,
    "title" character varying,
    "subtitle" character varying,
    "_uuid" character varying
);


--
-- Name: _callToActionBlock_v_list_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_callToActionBlock_v_list_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _callToActionBlock_v_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_callToActionBlock_v_list_id_seq" OWNED BY "public"."_callToActionBlock_v_list"."id";


--
-- Name: _callToActionBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_callToActionBlock_v_locales" (
    "badge_label" character varying,
    "rich_text" "jsonb",
    "media_id" integer,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _callToActionBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_callToActionBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _callToActionBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_callToActionBlock_v_locales_id_seq" OWNED BY "public"."_callToActionBlock_v_locales"."id";


--
-- Name: _case_studies_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_title" character varying,
    "version_slug" character varying,
    "version_slug_lock" boolean DEFAULT true,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__case_studies_v_version_status" DEFAULT 'draft'::"public"."enum__case_studies_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__case_studies_v_published_locale",
    "latest" boolean
);


--
-- Name: _case_studies_v_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__case_studies_v_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum__case_studies_v_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum__case_studies_v_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_blocks_faq_block_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_blocks_faq_block_block_header_links_id_seq" OWNED BY "public"."_case_studies_v_blocks_faq_block_block_header_links"."id";


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_blocks_faq_block_block_header_links_loca_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_blocks_faq_block_block_header_links_loca_id_seq" OWNED BY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: _case_studies_v_blocks_faq_block_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_blocks_faq_block_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_blocks_faq_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_blocks_faq_block_id_seq" OWNED BY "public"."_case_studies_v_blocks_faq_block"."id";


--
-- Name: _case_studies_v_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _case_studies_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_blocks_faq_block_locales_id_seq" OWNED BY "public"."_case_studies_v_blocks_faq_block_locales"."id";


--
-- Name: _case_studies_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_id_seq" OWNED BY "public"."_case_studies_v"."id";


--
-- Name: _case_studies_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_locales" (
    "version_content" "jsonb",
    "version_industry" character varying,
    "version_use_case" character varying,
    "version_featured_image_id" integer,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _case_studies_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_locales_id_seq" OWNED BY "public"."_case_studies_v_locales"."id";


--
-- Name: _case_studies_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "solutions_id" integer,
    "integrations_id" integer,
    "pages_id" integer,
    "posts_id" integer,
    "faq_id" integer
);


--
-- Name: _case_studies_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_rels_id_seq" OWNED BY "public"."_case_studies_v_rels"."id";


--
-- Name: _case_studies_v_version_stats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_version_stats" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "value" numeric,
    "is_percentage" boolean DEFAULT false,
    "is_increase" boolean DEFAULT true,
    "_uuid" character varying
);


--
-- Name: _case_studies_v_version_stats_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_version_stats_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_version_stats_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_version_stats_id_seq" OWNED BY "public"."_case_studies_v_version_stats"."id";


--
-- Name: _case_studies_v_version_stats_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_case_studies_v_version_stats_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _case_studies_v_version_stats_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_case_studies_v_version_stats_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _case_studies_v_version_stats_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_case_studies_v_version_stats_locales_id_seq" OWNED BY "public"."_case_studies_v_version_stats_locales"."id";


--
-- Name: _customHtmlBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_customHtmlBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__customHtmlBlock_v_block_header_type" DEFAULT 'center'::"public"."enum__customHtmlBlock_v_block_header_type",
    "block_header_badge_type" "public"."enum__customHtmlBlock_v_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "html_content" character varying,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _customHtmlBlock_v_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_customHtmlBlock_v_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _customHtmlBlock_v_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_customHtmlBlock_v_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _customHtmlBlock_v_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_customHtmlBlock_v_block_header_links_id_seq" OWNED BY "public"."_customHtmlBlock_v_block_header_links"."id";


--
-- Name: _customHtmlBlock_v_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_customHtmlBlock_v_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _customHtmlBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_customHtmlBlock_v_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _customHtmlBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_customHtmlBlock_v_block_header_links_locales_id_seq" OWNED BY "public"."_customHtmlBlock_v_block_header_links_locales"."id";


--
-- Name: _customHtmlBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_customHtmlBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _customHtmlBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_customHtmlBlock_v_id_seq" OWNED BY "public"."_customHtmlBlock_v"."id";


--
-- Name: _customHtmlBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_customHtmlBlock_v_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _customHtmlBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_customHtmlBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _customHtmlBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_customHtmlBlock_v_locales_id_seq" OWNED BY "public"."_customHtmlBlock_v_locales"."id";


--
-- Name: _dividerBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_dividerBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _dividerBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_dividerBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _dividerBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_dividerBlock_v_id_seq" OWNED BY "public"."_dividerBlock_v"."id";


--
-- Name: _featuredAppsBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__featuredAppsBlock_v_block_header_type" DEFAULT 'center'::"public"."enum__featuredAppsBlock_v_block_header_type",
    "block_header_badge_type" "public"."enum__featuredAppsBlock_v_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum__featuredAppsBlock_v_type" DEFAULT '04'::"public"."enum__featuredAppsBlock_v_type",
    "media_id" integer,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _featuredAppsBlock_v_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _featuredAppsBlock_v_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_block_header_links_id_seq" OWNED BY "public"."_featuredAppsBlock_v_block_header_links"."id";


--
-- Name: _featuredAppsBlock_v_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuredAppsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_block_header_links_locales_id_seq" OWNED BY "public"."_featuredAppsBlock_v_block_header_links_locales"."id";


--
-- Name: _featuredAppsBlock_v_cards; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v_cards" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "_uuid" character varying
);


--
-- Name: _featuredAppsBlock_v_cards_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_cards_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_cards_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_cards_id_seq" OWNED BY "public"."_featuredAppsBlock_v_cards"."id";


--
-- Name: _featuredAppsBlock_v_cards_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v_cards_locales" (
    "title" character varying,
    "description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuredAppsBlock_v_cards_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_cards_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_cards_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_cards_locales_id_seq" OWNED BY "public"."_featuredAppsBlock_v_cards_locales"."id";


--
-- Name: _featuredAppsBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_id_seq" OWNED BY "public"."_featuredAppsBlock_v"."id";


--
-- Name: _featuredAppsBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuredAppsBlock_v_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuredAppsBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuredAppsBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuredAppsBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuredAppsBlock_v_locales_id_seq" OWNED BY "public"."_featuredAppsBlock_v_locales"."id";


--
-- Name: _featuresBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__featuresBlock_v_block_header_type" DEFAULT 'center'::"public"."enum__featuresBlock_v_block_header_type",
    "block_header_badge_type" "public"."enum__featuresBlock_v_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum__featuresBlock_v_type" DEFAULT '01'::"public"."enum__featuresBlock_v_type",
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _featuresBlock_v_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _featuresBlock_v_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_block_header_links_id_seq" OWNED BY "public"."_featuresBlock_v_block_header_links"."id";


--
-- Name: _featuresBlock_v_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuresBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_block_header_links_locales_id_seq" OWNED BY "public"."_featuresBlock_v_block_header_links_locales"."id";


--
-- Name: _featuresBlock_v_columns; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v_columns" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "size" "public"."enum__featuresBlock_v_columns_size" DEFAULT 'half'::"public"."enum__featuresBlock_v_columns_size",
    "icon" character varying,
    "enable_badge" boolean,
    "enable_cta" boolean,
    "reverse_order" boolean,
    "badge_type" "public"."enum__featuresBlock_v_columns_badge_type",
    "badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "badge_icon" character varying,
    "badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "_uuid" character varying
);


--
-- Name: _featuresBlock_v_columns_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_columns_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_columns_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_columns_id_seq" OWNED BY "public"."_featuresBlock_v_columns"."id";


--
-- Name: _featuresBlock_v_columns_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v_columns_locales" (
    "image_id" integer,
    "tab_label" character varying,
    "content_title" character varying,
    "content_subtitle" character varying,
    "rich_text_content" "jsonb",
    "badge_label" character varying,
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuresBlock_v_columns_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_columns_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_columns_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_columns_locales_id_seq" OWNED BY "public"."_featuresBlock_v_columns_locales"."id";


--
-- Name: _featuresBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_id_seq" OWNED BY "public"."_featuresBlock_v"."id";


--
-- Name: _featuresBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_featuresBlock_v_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "block_image_id" integer,
    "c_t_a_label" character varying,
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _featuresBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_featuresBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _featuresBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_featuresBlock_v_locales_id_seq" OWNED BY "public"."_featuresBlock_v_locales"."id";


--
-- Name: _formBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_formBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "form_id" integer,
    "enable_intro" boolean,
    "intro_content" "jsonb",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _formBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_formBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _formBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_formBlock_v_id_seq" OWNED BY "public"."_formBlock_v"."id";


--
-- Name: _galleryBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__galleryBlock_v_block_header_type" DEFAULT 'center'::"public"."enum__galleryBlock_v_block_header_type",
    "block_header_badge_type" "public"."enum__galleryBlock_v_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum__galleryBlock_v_type" DEFAULT 'gallery01'::"public"."enum__galleryBlock_v_type",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _galleryBlock_v_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _galleryBlock_v_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_block_header_links_id_seq" OWNED BY "public"."_galleryBlock_v_block_header_links"."id";


--
-- Name: _galleryBlock_v_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _galleryBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_block_header_links_locales_id_seq" OWNED BY "public"."_galleryBlock_v_block_header_links_locales"."id";


--
-- Name: _galleryBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_id_seq" OWNED BY "public"."_galleryBlock_v"."id";


--
-- Name: _galleryBlock_v_interactive_gallery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v_interactive_gallery" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "_uuid" character varying
);


--
-- Name: _galleryBlock_v_interactive_gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_interactive_gallery_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_interactive_gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_interactive_gallery_id_seq" OWNED BY "public"."_galleryBlock_v_interactive_gallery"."id";


--
-- Name: _galleryBlock_v_interactive_gallery_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v_interactive_gallery_locales" (
    "image_id" integer,
    "panel_title" character varying,
    "panel_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _galleryBlock_v_interactive_gallery_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_interactive_gallery_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_interactive_gallery_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_interactive_gallery_locales_id_seq" OWNED BY "public"."_galleryBlock_v_interactive_gallery_locales"."id";


--
-- Name: _galleryBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_galleryBlock_v_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _galleryBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_galleryBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _galleryBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_galleryBlock_v_locales_id_seq" OWNED BY "public"."_galleryBlock_v_locales"."id";


--
-- Name: _integrations_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_title" character varying,
    "version_icon_id" integer,
    "version_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "version_link_new_tab" boolean,
    "version_link_url" character varying,
    "version_company_email" character varying,
    "version_company_phone" character varying,
    "version_docs_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "version_docs_link_new_tab" boolean,
    "version_docs_link_url" character varying,
    "version_hero_type" "public"."enum__integrations_v_version_hero_type" DEFAULT 'hero01'::"public"."enum__integrations_v_version_hero_type",
    "version_hero_supporting_text" character varying,
    "version_hero_badge_type" "public"."enum__integrations_v_version_hero_badge_type",
    "version_hero_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "version_hero_badge_icon" character varying,
    "version_hero_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "version_published_at" timestamp(3) with time zone,
    "version_slug" character varying,
    "version_slug_lock" boolean DEFAULT true,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__integrations_v_version_status" DEFAULT 'draft'::"public"."enum__integrations_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__integrations_v_published_locale",
    "latest" boolean,
    "autosave" boolean
);


--
-- Name: _integrations_v_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__integrations_v_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum__integrations_v_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum__integrations_v_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _integrations_v_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_blocks_faq_block_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_blocks_faq_block_block_header_links_id_seq" OWNED BY "public"."_integrations_v_blocks_faq_block_block_header_links"."id";


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_blocks_faq_block_block_header_links_loca_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_blocks_faq_block_block_header_links_loca_id_seq" OWNED BY "public"."_integrations_v_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: _integrations_v_blocks_faq_block_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_blocks_faq_block_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_blocks_faq_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_blocks_faq_block_id_seq" OWNED BY "public"."_integrations_v_blocks_faq_block"."id";


--
-- Name: _integrations_v_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _integrations_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_blocks_faq_block_locales_id_seq" OWNED BY "public"."_integrations_v_blocks_faq_block_locales"."id";


--
-- Name: _integrations_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_id_seq" OWNED BY "public"."_integrations_v"."id";


--
-- Name: _integrations_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_locales" (
    "version_name" character varying,
    "version_tagline" character varying,
    "version_overview" "jsonb",
    "version_link_label" character varying,
    "version_company_name" character varying,
    "version_docs_link_label" character varying,
    "version_hero_rich_text" "jsonb",
    "version_hero_logos_headline" character varying,
    "version_hero_media_id" integer,
    "version_hero_badge_label" character varying,
    "version_content" "jsonb",
    "version_meta_title" character varying,
    "version_meta_image_id" integer,
    "version_meta_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _integrations_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_locales_id_seq" OWNED BY "public"."_integrations_v_locales"."id";


--
-- Name: _integrations_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer,
    "integrations_id" integer,
    "media_id" integer,
    "faq_id" integer,
    "categories_id" integer
);


--
-- Name: _integrations_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_rels_id_seq" OWNED BY "public"."_integrations_v_rels"."id";


--
-- Name: _integrations_v_version_hero_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_version_hero_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _integrations_v_version_hero_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_version_hero_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_version_hero_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_version_hero_links_id_seq" OWNED BY "public"."_integrations_v_version_hero_links"."id";


--
-- Name: _integrations_v_version_hero_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_version_hero_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _integrations_v_version_hero_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_version_hero_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_version_hero_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_version_hero_links_locales_id_seq" OWNED BY "public"."_integrations_v_version_hero_links_locales"."id";


--
-- Name: _integrations_v_version_hero_logos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_integrations_v_version_hero_logos" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "logo_id" integer,
    "_uuid" character varying
);


--
-- Name: _integrations_v_version_hero_logos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_integrations_v_version_hero_logos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _integrations_v_version_hero_logos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_integrations_v_version_hero_logos_id_seq" OWNED BY "public"."_integrations_v_version_hero_logos"."id";


--
-- Name: _pages_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_title" character varying,
    "version_hero_type" "public"."enum__pages_v_version_hero_type" DEFAULT 'hero01'::"public"."enum__pages_v_version_hero_type",
    "version_hero_supporting_text" character varying,
    "version_hero_badge_type" "public"."enum__pages_v_version_hero_badge_type",
    "version_hero_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "version_hero_badge_icon" character varying,
    "version_hero_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "version_published_at" timestamp(3) with time zone,
    "version_slug" character varying,
    "version_slug_lock" boolean DEFAULT true,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__pages_v_version_status" DEFAULT 'draft'::"public"."enum__pages_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__pages_v_published_locale",
    "latest" boolean,
    "autosave" boolean
);


--
-- Name: _pages_v_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__pages_v_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum__pages_v_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum__pages_v_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _pages_v_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _pages_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_blocks_faq_block_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_blocks_faq_block_block_header_links_id_seq" OWNED BY "public"."_pages_v_blocks_faq_block_block_header_links"."id";


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_blocks_faq_block_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_blocks_faq_block_block_header_links_locales_id_seq" OWNED BY "public"."_pages_v_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: _pages_v_blocks_faq_block_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_blocks_faq_block_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_blocks_faq_block_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_blocks_faq_block_id_seq" OWNED BY "public"."_pages_v_blocks_faq_block"."id";


--
-- Name: _pages_v_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _pages_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_blocks_faq_block_locales_id_seq" OWNED BY "public"."_pages_v_blocks_faq_block_locales"."id";


--
-- Name: _pages_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_id_seq" OWNED BY "public"."_pages_v"."id";


--
-- Name: _pages_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_locales" (
    "version_hero_rich_text" "jsonb",
    "version_hero_logos_headline" character varying,
    "version_hero_media_id" integer,
    "version_hero_badge_label" character varying,
    "version_meta_title" character varying,
    "version_meta_image_id" integer,
    "version_meta_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _pages_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_locales_id_seq" OWNED BY "public"."_pages_v_locales"."id";


--
-- Name: _pages_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "locale" "public"."_locales",
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer,
    "integrations_id" integer,
    "categories_id" integer,
    "faq_id" integer,
    "media_id" integer,
    "testimonials_id" integer
);


--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_rels_id_seq" OWNED BY "public"."_pages_v_rels"."id";


--
-- Name: _pages_v_version_hero_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_version_hero_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _pages_v_version_hero_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_version_hero_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_version_hero_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_version_hero_links_id_seq" OWNED BY "public"."_pages_v_version_hero_links"."id";


--
-- Name: _pages_v_version_hero_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_version_hero_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _pages_v_version_hero_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_version_hero_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_version_hero_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_version_hero_links_locales_id_seq" OWNED BY "public"."_pages_v_version_hero_links_locales"."id";


--
-- Name: _pages_v_version_hero_logos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_pages_v_version_hero_logos" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "logo_id" integer,
    "_uuid" character varying
);


--
-- Name: _pages_v_version_hero_logos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_pages_v_version_hero_logos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _pages_v_version_hero_logos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_pages_v_version_hero_logos_id_seq" OWNED BY "public"."_pages_v_version_hero_logos"."id";


--
-- Name: _posts_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_posts_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_slug" character varying,
    "version_slug_lock" boolean DEFAULT true,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__posts_v_version_status" DEFAULT 'draft'::"public"."enum__posts_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__posts_v_published_locale",
    "latest" boolean
);


--
-- Name: _posts_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_posts_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_posts_v_id_seq" OWNED BY "public"."_posts_v"."id";


--
-- Name: _posts_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_posts_v_locales" (
    "version_title" character varying,
    "version_hero_image_id" integer,
    "version_content" "jsonb",
    "version_meta_title" character varying,
    "version_meta_image_id" integer,
    "version_meta_description" character varying,
    "version_published_at" timestamp(3) with time zone,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _posts_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_posts_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_posts_v_locales_id_seq" OWNED BY "public"."_posts_v_locales"."id";


--
-- Name: _posts_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_posts_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "locale" "public"."_locales",
    "posts_id" integer,
    "categories_id" integer,
    "users_id" integer
);


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_posts_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_posts_v_rels_id_seq" OWNED BY "public"."_posts_v_rels"."id";


--
-- Name: _posts_v_version_populated_authors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_posts_v_version_populated_authors" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "_uuid" character varying,
    "name" character varying
);


--
-- Name: _posts_v_version_populated_authors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_posts_v_version_populated_authors_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _posts_v_version_populated_authors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_posts_v_version_populated_authors_id_seq" OWNED BY "public"."_posts_v_version_populated_authors"."id";


--
-- Name: _solutions_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_solutions_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_title" character varying,
    "version_icon_id" integer,
    "version_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "version_link_new_tab" boolean,
    "version_link_url" character varying,
    "version_published_at" timestamp(3) with time zone,
    "version_ecosystem_id" integer,
    "version_slug" character varying,
    "version_slug_lock" boolean DEFAULT true,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__solutions_v_version_status" DEFAULT 'draft'::"public"."enum__solutions_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__solutions_v_published_locale",
    "latest" boolean
);


--
-- Name: _solutions_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_solutions_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _solutions_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_solutions_v_id_seq" OWNED BY "public"."_solutions_v"."id";


--
-- Name: _solutions_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_solutions_v_locales" (
    "version_name" character varying,
    "version_tagline" character varying,
    "version_link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _solutions_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_solutions_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _solutions_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_solutions_v_locales_id_seq" OWNED BY "public"."_solutions_v_locales"."id";


--
-- Name: _solutions_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_solutions_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer
);


--
-- Name: _solutions_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_solutions_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _solutions_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_solutions_v_rels_id_seq" OWNED BY "public"."_solutions_v_rels"."id";


--
-- Name: _testimonialsBlock_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonialsBlock_v" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" integer NOT NULL,
    "block_header_type" "public"."enum__testimonialsBlock_v_block_header_type" DEFAULT 'center'::"public"."enum__testimonialsBlock_v_block_header_type",
    "block_header_badge_type" "public"."enum__testimonialsBlock_v_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum__testimonialsBlock_v_type" DEFAULT '01'::"public"."enum__testimonialsBlock_v_type",
    "_uuid" character varying,
    "block_name" character varying
);


--
-- Name: _testimonialsBlock_v_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonialsBlock_v_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" integer NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant",
    "_uuid" character varying
);


--
-- Name: _testimonialsBlock_v_block_header_links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonialsBlock_v_block_header_links_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonialsBlock_v_block_header_links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonialsBlock_v_block_header_links_id_seq" OWNED BY "public"."_testimonialsBlock_v_block_header_links"."id";


--
-- Name: _testimonialsBlock_v_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonialsBlock_v_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _testimonialsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonialsBlock_v_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonialsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonialsBlock_v_block_header_links_locales_id_seq" OWNED BY "public"."_testimonialsBlock_v_block_header_links_locales"."id";


--
-- Name: _testimonialsBlock_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonialsBlock_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonialsBlock_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonialsBlock_v_id_seq" OWNED BY "public"."_testimonialsBlock_v"."id";


--
-- Name: _testimonialsBlock_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonialsBlock_v_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _testimonialsBlock_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonialsBlock_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonialsBlock_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonialsBlock_v_locales_id_seq" OWNED BY "public"."_testimonialsBlock_v_locales"."id";


--
-- Name: _testimonials_v; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonials_v" (
    "id" integer NOT NULL,
    "parent_id" integer,
    "version_company_logo_id" integer,
    "version_author_info_avatar_id" integer,
    "version_case_study_link_case_study" boolean DEFAULT false,
    "version_case_study_linked_case_study_id" integer,
    "version_published_at" timestamp(3) with time zone,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "public"."enum__testimonials_v_version_status" DEFAULT 'draft'::"public"."enum__testimonials_v_version_status",
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "snapshot" boolean,
    "published_locale" "public"."enum__testimonials_v_published_locale",
    "latest" boolean,
    "autosave" boolean
);


--
-- Name: _testimonials_v_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonials_v_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonials_v_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonials_v_id_seq" OWNED BY "public"."_testimonials_v"."id";


--
-- Name: _testimonials_v_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonials_v_locales" (
    "version_quote" "jsonb",
    "version_company_name" character varying,
    "version_featured_image_id" integer,
    "version_author_info_name" character varying,
    "version_author_info_title" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: _testimonials_v_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonials_v_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonials_v_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonials_v_locales_id_seq" OWNED BY "public"."_testimonials_v_locales"."id";


--
-- Name: _testimonials_v_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."_testimonials_v_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "categories_id" integer
);


--
-- Name: _testimonials_v_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."_testimonials_v_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: _testimonials_v_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."_testimonials_v_rels_id_seq" OWNED BY "public"."_testimonials_v_rels"."id";


--
-- Name: archiveBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."archiveBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "populate_by" "public"."enum_archiveBlock_populate_by" DEFAULT 'collection'::"public"."enum_archiveBlock_populate_by",
    "relation_to" "public"."enum_archiveBlock_relation_to" DEFAULT 'posts'::"public"."enum_archiveBlock_relation_to",
    "limit" numeric DEFAULT 10,
    "block_name" character varying
);


--
-- Name: archiveBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."archiveBlock_locales" (
    "intro_content" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: archiveBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."archiveBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: archiveBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."archiveBlock_locales_id_seq" OWNED BY "public"."archiveBlock_locales"."id";


--
-- Name: callToActionBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."callToActionBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "type" "public"."enum_callToActionBlock_type" DEFAULT '01'::"public"."enum_callToActionBlock_type",
    "badge_type" "public"."enum_callToActionBlock_badge_type",
    "badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "badge_icon" character varying,
    "badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "supporting_text" character varying,
    "form_id" integer,
    "block_name" character varying
);


--
-- Name: callToActionBlock_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."callToActionBlock_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: callToActionBlock_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."callToActionBlock_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: callToActionBlock_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."callToActionBlock_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: callToActionBlock_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."callToActionBlock_links_locales_id_seq" OWNED BY "public"."callToActionBlock_links_locales"."id";


--
-- Name: callToActionBlock_list; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."callToActionBlock_list" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "id" character varying NOT NULL,
    "icon" character varying,
    "title" character varying,
    "subtitle" character varying
);


--
-- Name: callToActionBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."callToActionBlock_locales" (
    "badge_label" character varying,
    "rich_text" "jsonb",
    "media_id" integer,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: callToActionBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."callToActionBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: callToActionBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."callToActionBlock_locales_id_seq" OWNED BY "public"."callToActionBlock_locales"."id";


--
-- Name: case_studies; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies" (
    "id" integer NOT NULL,
    "title" character varying,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_case_studies_status" DEFAULT 'draft'::"public"."enum_case_studies_status"
);


--
-- Name: case_studies_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_case_studies_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum_case_studies_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum_case_studies_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "block_name" character varying
);


--
-- Name: case_studies_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_blocks_faq_block_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_blocks_faq_block_block_header_links_locales_id_seq" OWNED BY "public"."case_studies_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: case_studies_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: case_studies_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_blocks_faq_block_locales_id_seq" OWNED BY "public"."case_studies_blocks_faq_block_locales"."id";


--
-- Name: case_studies_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_id_seq" OWNED BY "public"."case_studies"."id";


--
-- Name: case_studies_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_locales" (
    "content" "jsonb",
    "industry" character varying,
    "use_case" character varying,
    "featured_image_id" integer,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: case_studies_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_locales_id_seq" OWNED BY "public"."case_studies_locales"."id";


--
-- Name: case_studies_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "solutions_id" integer,
    "integrations_id" integer,
    "pages_id" integer,
    "posts_id" integer,
    "faq_id" integer
);


--
-- Name: case_studies_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_rels_id_seq" OWNED BY "public"."case_studies_rels"."id";


--
-- Name: case_studies_stats; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_stats" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "value" numeric,
    "is_percentage" boolean DEFAULT false,
    "is_increase" boolean DEFAULT true
);


--
-- Name: case_studies_stats_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."case_studies_stats_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: case_studies_stats_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."case_studies_stats_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: case_studies_stats_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."case_studies_stats_locales_id_seq" OWNED BY "public"."case_studies_stats_locales"."id";


--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."categories" (
    "id" integer NOT NULL,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "parent_id" integer,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: categories_breadcrumbs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."categories_breadcrumbs" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "id" character varying NOT NULL,
    "doc_id" integer,
    "url" character varying,
    "label" character varying
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."categories_id_seq" OWNED BY "public"."categories"."id";


--
-- Name: categories_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."categories_locales" (
    "title" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: categories_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."categories_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."categories_locales_id_seq" OWNED BY "public"."categories_locales"."id";


--
-- Name: changelog; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."changelog" (
    "id" integer NOT NULL,
    "date" timestamp(3) with time zone NOT NULL,
    "version" character varying NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: changelog_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."changelog_categories" (
    "order" integer NOT NULL,
    "parent_id" integer NOT NULL,
    "value" "public"."enum_changelog_categories",
    "id" integer NOT NULL
);


--
-- Name: changelog_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."changelog_categories_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: changelog_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."changelog_categories_id_seq" OWNED BY "public"."changelog_categories"."id";


--
-- Name: changelog_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."changelog_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: changelog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."changelog_id_seq" OWNED BY "public"."changelog"."id";


--
-- Name: changelog_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."changelog_locales" (
    "title" character varying NOT NULL,
    "description" "jsonb" NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: changelog_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."changelog_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: changelog_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."changelog_locales_id_seq" OWNED BY "public"."changelog_locales"."id";


--
-- Name: customHtmlBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."customHtmlBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_customHtmlBlock_block_header_type" DEFAULT 'center'::"public"."enum_customHtmlBlock_block_header_type",
    "block_header_badge_type" "public"."enum_customHtmlBlock_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "html_content" character varying,
    "block_name" character varying
);


--
-- Name: customHtmlBlock_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."customHtmlBlock_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: customHtmlBlock_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."customHtmlBlock_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: customHtmlBlock_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."customHtmlBlock_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customHtmlBlock_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."customHtmlBlock_block_header_links_locales_id_seq" OWNED BY "public"."customHtmlBlock_block_header_links_locales"."id";


--
-- Name: customHtmlBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."customHtmlBlock_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: customHtmlBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."customHtmlBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: customHtmlBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."customHtmlBlock_locales_id_seq" OWNED BY "public"."customHtmlBlock_locales"."id";


--
-- Name: dividerBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."dividerBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_name" character varying
);


--
-- Name: faq; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."faq" (
    "id" integer NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: faq_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."faq_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: faq_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."faq_id_seq" OWNED BY "public"."faq"."id";


--
-- Name: faq_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."faq_locales" (
    "question" character varying,
    "answer" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: faq_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."faq_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: faq_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."faq_locales_id_seq" OWNED BY "public"."faq_locales"."id";


--
-- Name: featuredAppsBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_featuredAppsBlock_block_header_type" DEFAULT 'center'::"public"."enum_featuredAppsBlock_block_header_type",
    "block_header_badge_type" "public"."enum_featuredAppsBlock_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum_featuredAppsBlock_type" DEFAULT '04'::"public"."enum_featuredAppsBlock_type",
    "media_id" integer,
    "block_name" character varying
);


--
-- Name: featuredAppsBlock_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: featuredAppsBlock_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuredAppsBlock_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuredAppsBlock_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuredAppsBlock_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuredAppsBlock_block_header_links_locales_id_seq" OWNED BY "public"."featuredAppsBlock_block_header_links_locales"."id";


--
-- Name: featuredAppsBlock_cards; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock_cards" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL
);


--
-- Name: featuredAppsBlock_cards_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock_cards_locales" (
    "title" character varying,
    "description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuredAppsBlock_cards_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuredAppsBlock_cards_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuredAppsBlock_cards_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuredAppsBlock_cards_locales_id_seq" OWNED BY "public"."featuredAppsBlock_cards_locales"."id";


--
-- Name: featuredAppsBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuredAppsBlock_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuredAppsBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuredAppsBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuredAppsBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuredAppsBlock_locales_id_seq" OWNED BY "public"."featuredAppsBlock_locales"."id";


--
-- Name: featuresBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_featuresBlock_block_header_type" DEFAULT 'center'::"public"."enum_featuresBlock_block_header_type",
    "block_header_badge_type" "public"."enum_featuresBlock_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum_featuresBlock_type" DEFAULT '01'::"public"."enum_featuresBlock_type",
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "block_name" character varying
);


--
-- Name: featuresBlock_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: featuresBlock_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuresBlock_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuresBlock_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuresBlock_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuresBlock_block_header_links_locales_id_seq" OWNED BY "public"."featuresBlock_block_header_links_locales"."id";


--
-- Name: featuresBlock_columns; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock_columns" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "size" "public"."enum_featuresBlock_columns_size" DEFAULT 'half'::"public"."enum_featuresBlock_columns_size",
    "icon" character varying,
    "enable_badge" boolean,
    "enable_cta" boolean,
    "reverse_order" boolean,
    "badge_type" "public"."enum_featuresBlock_columns_badge_type",
    "badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "badge_icon" character varying,
    "badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying
);


--
-- Name: featuresBlock_columns_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock_columns_locales" (
    "image_id" integer,
    "tab_label" character varying,
    "content_title" character varying,
    "content_subtitle" character varying,
    "rich_text_content" "jsonb",
    "badge_label" character varying,
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuresBlock_columns_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuresBlock_columns_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuresBlock_columns_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuresBlock_columns_locales_id_seq" OWNED BY "public"."featuresBlock_columns_locales"."id";


--
-- Name: featuresBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."featuresBlock_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "block_image_id" integer,
    "c_t_a_label" character varying,
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: featuresBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."featuresBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: featuresBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."featuresBlock_locales_id_seq" OWNED BY "public"."featuresBlock_locales"."id";


--
-- Name: footer; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."footer" (
    "id" integer NOT NULL,
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
);


--
-- Name: footer_columns; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."footer_columns" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "label" character varying NOT NULL
);


--
-- Name: footer_columns_nav_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."footer_columns_nav_items" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying
);


--
-- Name: footer_columns_nav_items_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."footer_columns_nav_items_locales" (
    "link_label" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: footer_columns_nav_items_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."footer_columns_nav_items_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: footer_columns_nav_items_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."footer_columns_nav_items_locales_id_seq" OWNED BY "public"."footer_columns_nav_items_locales"."id";


--
-- Name: footer_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."footer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: footer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."footer_id_seq" OWNED BY "public"."footer"."id";


--
-- Name: footer_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."footer_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer
);


--
-- Name: footer_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."footer_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: footer_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."footer_rels_id_seq" OWNED BY "public"."footer_rels"."id";


--
-- Name: formBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."formBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "form_id" integer,
    "enable_intro" boolean,
    "intro_content" "jsonb",
    "block_name" character varying
);


--
-- Name: form_submissions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."form_submissions" (
    "id" integer NOT NULL,
    "form_id" integer NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: form_submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."form_submissions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: form_submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."form_submissions_id_seq" OWNED BY "public"."form_submissions"."id";


--
-- Name: form_submissions_submission_data; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."form_submissions_submission_data" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "field" character varying NOT NULL,
    "value" character varying NOT NULL
);


--
-- Name: forms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms" (
    "id" integer NOT NULL,
    "title" character varying NOT NULL,
    "confirmation_type" "public"."enum_forms_confirmation_type" DEFAULT 'message'::"public"."enum_forms_confirmation_type",
    "redirect_url" character varying,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: forms_blocks_checkbox; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_checkbox" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "default_value" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_checkbox_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_checkbox_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_checkbox_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_checkbox_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_checkbox_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_checkbox_locales_id_seq" OWNED BY "public"."forms_blocks_checkbox_locales"."id";


--
-- Name: forms_blocks_country; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_country" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_country_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_country_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_country_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_country_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_country_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_country_locales_id_seq" OWNED BY "public"."forms_blocks_country_locales"."id";


--
-- Name: forms_blocks_email; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_email" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_email_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_email_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_email_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_email_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_email_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_email_locales_id_seq" OWNED BY "public"."forms_blocks_email_locales"."id";


--
-- Name: forms_blocks_message; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_message" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_name" character varying
);


--
-- Name: forms_blocks_message_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_message_locales" (
    "message" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_message_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_message_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_message_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_message_locales_id_seq" OWNED BY "public"."forms_blocks_message_locales"."id";


--
-- Name: forms_blocks_number; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_number" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "default_value" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_number_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_number_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_number_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_number_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_number_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_number_locales_id_seq" OWNED BY "public"."forms_blocks_number_locales"."id";


--
-- Name: forms_blocks_select; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_select" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "placeholder" character varying,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_select_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_select_locales" (
    "label" character varying,
    "default_value" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_select_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_select_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_select_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_select_locales_id_seq" OWNED BY "public"."forms_blocks_select_locales"."id";


--
-- Name: forms_blocks_select_options; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_select_options" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "value" character varying NOT NULL
);


--
-- Name: forms_blocks_select_options_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_select_options_locales" (
    "label" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_select_options_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_select_options_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_select_options_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_select_options_locales_id_seq" OWNED BY "public"."forms_blocks_select_options_locales"."id";


--
-- Name: forms_blocks_state; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_state" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_state_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_state_locales" (
    "label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_state_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_state_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_state_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_state_locales_id_seq" OWNED BY "public"."forms_blocks_state_locales"."id";


--
-- Name: forms_blocks_text; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_text" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_text_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_text_locales" (
    "label" character varying,
    "default_value" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_text_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_text_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_text_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_text_locales_id_seq" OWNED BY "public"."forms_blocks_text_locales"."id";


--
-- Name: forms_blocks_textarea; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_textarea" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying NOT NULL,
    "width" numeric,
    "required" boolean,
    "block_name" character varying
);


--
-- Name: forms_blocks_textarea_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_blocks_textarea_locales" (
    "label" character varying,
    "default_value" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_blocks_textarea_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_blocks_textarea_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_blocks_textarea_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_blocks_textarea_locales_id_seq" OWNED BY "public"."forms_blocks_textarea_locales"."id";


--
-- Name: forms_emails; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_emails" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "email_to" character varying,
    "cc" character varying,
    "bcc" character varying,
    "reply_to" character varying,
    "email_from" character varying
);


--
-- Name: forms_emails_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_emails_locales" (
    "subject" character varying DEFAULT 'You''''ve received a new message.'::character varying NOT NULL,
    "message" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: forms_emails_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_emails_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_emails_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_emails_locales_id_seq" OWNED BY "public"."forms_emails_locales"."id";


--
-- Name: forms_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_id_seq" OWNED BY "public"."forms"."id";


--
-- Name: forms_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."forms_locales" (
    "submit_button_label" character varying,
    "confirmation_message" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: forms_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."forms_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: forms_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."forms_locales_id_seq" OWNED BY "public"."forms_locales"."id";


--
-- Name: galleryBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_galleryBlock_block_header_type" DEFAULT 'center'::"public"."enum_galleryBlock_block_header_type",
    "block_header_badge_type" "public"."enum_galleryBlock_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum_galleryBlock_type" DEFAULT 'gallery01'::"public"."enum_galleryBlock_type",
    "block_name" character varying
);


--
-- Name: galleryBlock_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: galleryBlock_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: galleryBlock_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."galleryBlock_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: galleryBlock_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."galleryBlock_block_header_links_locales_id_seq" OWNED BY "public"."galleryBlock_block_header_links_locales"."id";


--
-- Name: galleryBlock_interactive_gallery; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock_interactive_gallery" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL
);


--
-- Name: galleryBlock_interactive_gallery_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock_interactive_gallery_locales" (
    "image_id" integer,
    "panel_title" character varying,
    "panel_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: galleryBlock_interactive_gallery_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."galleryBlock_interactive_gallery_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: galleryBlock_interactive_gallery_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."galleryBlock_interactive_gallery_locales_id_seq" OWNED BY "public"."galleryBlock_interactive_gallery_locales"."id";


--
-- Name: galleryBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."galleryBlock_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: galleryBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."galleryBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: galleryBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."galleryBlock_locales_id_seq" OWNED BY "public"."galleryBlock_locales"."id";


--
-- Name: header; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header" (
    "id" integer NOT NULL,
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
);


--
-- Name: header_cta; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_cta" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: header_cta_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_cta_locales" (
    "link_label" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_cta_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_cta_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_cta_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_cta_locales_id_seq" OWNED BY "public"."header_cta_locales"."id";


--
-- Name: header_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_id_seq" OWNED BY "public"."header"."id";


--
-- Name: header_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer
);


--
-- Name: header_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_rels_id_seq" OWNED BY "public"."header_rels"."id";


--
-- Name: header_tabs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "enable_direct_link" boolean DEFAULT true,
    "enable_dropdown" boolean DEFAULT false,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying
);


--
-- Name: header_tabs_description_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_description_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying
);


--
-- Name: header_tabs_description_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_description_links_locales" (
    "link_label" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_tabs_description_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_tabs_description_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_tabs_description_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_tabs_description_links_locales_id_seq" OWNED BY "public"."header_tabs_description_links_locales"."id";


--
-- Name: header_tabs_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_locales" (
    "label" character varying NOT NULL,
    "description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_tabs_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_tabs_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_tabs_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_tabs_locales_id_seq" OWNED BY "public"."header_tabs_locales"."id";


--
-- Name: header_tabs_nav_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "style" "public"."enum_header_tabs_nav_items_style" DEFAULT 'default'::"public"."enum_header_tabs_nav_items_style",
    "default_link_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "default_link_link_new_tab" boolean,
    "default_link_link_url" character varying,
    "default_link_link_icon" character varying,
    "default_link_description" character varying,
    "featured_link_tag" character varying,
    "featured_link_label" "jsonb",
    "list_links_tag" character varying
);


--
-- Name: header_tabs_nav_items_featured_link_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items_featured_link_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_icon" character varying
);


--
-- Name: header_tabs_nav_items_featured_link_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items_featured_link_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_tabs_nav_items_featured_link_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_tabs_nav_items_featured_link_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_tabs_nav_items_featured_link_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_tabs_nav_items_featured_link_links_locales_id_seq" OWNED BY "public"."header_tabs_nav_items_featured_link_links_locales"."id";


--
-- Name: header_tabs_nav_items_list_links_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items_list_links_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_icon" character varying
);


--
-- Name: header_tabs_nav_items_list_links_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items_list_links_links_locales" (
    "link_label" character varying,
    "link_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_tabs_nav_items_list_links_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_tabs_nav_items_list_links_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_tabs_nav_items_list_links_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_tabs_nav_items_list_links_links_locales_id_seq" OWNED BY "public"."header_tabs_nav_items_list_links_links_locales"."id";


--
-- Name: header_tabs_nav_items_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."header_tabs_nav_items_locales" (
    "default_link_link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: header_tabs_nav_items_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."header_tabs_nav_items_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: header_tabs_nav_items_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."header_tabs_nav_items_locales_id_seq" OWNED BY "public"."header_tabs_nav_items_locales"."id";


--
-- Name: integrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations" (
    "id" integer NOT NULL,
    "title" character varying,
    "icon_id" integer,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "company_email" character varying,
    "company_phone" character varying,
    "docs_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "docs_link_new_tab" boolean,
    "docs_link_url" character varying,
    "hero_type" "public"."enum_integrations_hero_type" DEFAULT 'hero01'::"public"."enum_integrations_hero_type",
    "hero_supporting_text" character varying,
    "hero_badge_type" "public"."enum_integrations_hero_badge_type",
    "hero_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "hero_badge_icon" character varying,
    "hero_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "published_at" timestamp(3) with time zone,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_integrations_status" DEFAULT 'draft'::"public"."enum_integrations_status"
);


--
-- Name: integrations_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_integrations_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum_integrations_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum_integrations_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "block_name" character varying
);


--
-- Name: integrations_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: integrations_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: integrations_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_blocks_faq_block_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_blocks_faq_block_block_header_links_locales_id_seq" OWNED BY "public"."integrations_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: integrations_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: integrations_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_blocks_faq_block_locales_id_seq" OWNED BY "public"."integrations_blocks_faq_block_locales"."id";


--
-- Name: integrations_hero_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_hero_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: integrations_hero_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_hero_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: integrations_hero_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_hero_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_hero_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_hero_links_locales_id_seq" OWNED BY "public"."integrations_hero_links_locales"."id";


--
-- Name: integrations_hero_logos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_hero_logos" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "logo_id" integer
);


--
-- Name: integrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_id_seq" OWNED BY "public"."integrations"."id";


--
-- Name: integrations_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_locales" (
    "name" character varying,
    "tagline" character varying,
    "overview" "jsonb",
    "link_label" character varying,
    "company_name" character varying,
    "docs_link_label" character varying,
    "hero_rich_text" "jsonb",
    "hero_logos_headline" character varying,
    "hero_media_id" integer,
    "hero_badge_label" character varying,
    "content" "jsonb",
    "meta_title" character varying,
    "meta_image_id" integer,
    "meta_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: integrations_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_locales_id_seq" OWNED BY "public"."integrations_locales"."id";


--
-- Name: integrations_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."integrations_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer,
    "integrations_id" integer,
    "media_id" integer,
    "faq_id" integer,
    "categories_id" integer
);


--
-- Name: integrations_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."integrations_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: integrations_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."integrations_rels_id_seq" OWNED BY "public"."integrations_rels"."id";


--
-- Name: media; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."media" (
    "id" integer NOT NULL,
    "alt" character varying NOT NULL,
    "caption" "jsonb",
    "locale" "public"."enum_media_locale",
    "blurhash" character varying,
    "prefix" character varying DEFAULT 'media'::character varying,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "url" character varying,
    "thumbnail_u_r_l" character varying,
    "filename" character varying,
    "mime_type" character varying,
    "filesize" numeric,
    "width" numeric,
    "height" numeric,
    "focal_x" numeric,
    "focal_y" numeric,
    "sizes_thumbnail_url" character varying,
    "sizes_thumbnail_width" numeric,
    "sizes_thumbnail_height" numeric,
    "sizes_thumbnail_mime_type" character varying,
    "sizes_thumbnail_filesize" numeric,
    "sizes_thumbnail_filename" character varying,
    "sizes_square_url" character varying,
    "sizes_square_width" numeric,
    "sizes_square_height" numeric,
    "sizes_square_mime_type" character varying,
    "sizes_square_filesize" numeric,
    "sizes_square_filename" character varying,
    "sizes_small_url" character varying,
    "sizes_small_width" numeric,
    "sizes_small_height" numeric,
    "sizes_small_mime_type" character varying,
    "sizes_small_filesize" numeric,
    "sizes_small_filename" character varying,
    "sizes_medium_url" character varying,
    "sizes_medium_width" numeric,
    "sizes_medium_height" numeric,
    "sizes_medium_mime_type" character varying,
    "sizes_medium_filesize" numeric,
    "sizes_medium_filename" character varying,
    "sizes_large_url" character varying,
    "sizes_large_width" numeric,
    "sizes_large_height" numeric,
    "sizes_large_mime_type" character varying,
    "sizes_large_filesize" numeric,
    "sizes_large_filename" character varying,
    "sizes_xlarge_url" character varying,
    "sizes_xlarge_width" numeric,
    "sizes_xlarge_height" numeric,
    "sizes_xlarge_mime_type" character varying,
    "sizes_xlarge_filesize" numeric,
    "sizes_xlarge_filename" character varying,
    "sizes_og_url" character varying,
    "sizes_og_width" numeric,
    "sizes_og_height" numeric,
    "sizes_og_mime_type" character varying,
    "sizes_og_filesize" numeric,
    "sizes_og_filename" character varying
);


--
-- Name: media_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."media_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."media_id_seq" OWNED BY "public"."media"."id";


--
-- Name: media_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."media_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "categories_id" integer
);


--
-- Name: media_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."media_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: media_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."media_rels_id_seq" OWNED BY "public"."media_rels"."id";


--
-- Name: pages; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages" (
    "id" integer NOT NULL,
    "title" character varying,
    "hero_type" "public"."enum_pages_hero_type" DEFAULT 'hero01'::"public"."enum_pages_hero_type",
    "hero_supporting_text" character varying,
    "hero_badge_type" "public"."enum_pages_hero_badge_type",
    "hero_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "hero_badge_icon" character varying,
    "hero_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "published_at" timestamp(3) with time zone,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_pages_status" DEFAULT 'draft'::"public"."enum_pages_status"
);


--
-- Name: pages_blocks_faq_block; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_blocks_faq_block" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_pages_blocks_faq_block_block_header_type" DEFAULT 'center'::"public"."enum_pages_blocks_faq_block_block_header_type",
    "block_header_badge_type" "public"."enum_pages_blocks_faq_block_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "block_name" character varying
);


--
-- Name: pages_blocks_faq_block_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_blocks_faq_block_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: pages_blocks_faq_block_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_blocks_faq_block_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: pages_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_blocks_faq_block_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_blocks_faq_block_block_header_links_locales_id_seq" OWNED BY "public"."pages_blocks_faq_block_block_header_links_locales"."id";


--
-- Name: pages_blocks_faq_block_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_blocks_faq_block_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: pages_blocks_faq_block_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_blocks_faq_block_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_blocks_faq_block_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_blocks_faq_block_locales_id_seq" OWNED BY "public"."pages_blocks_faq_block_locales"."id";


--
-- Name: pages_hero_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_hero_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: pages_hero_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_hero_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: pages_hero_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_hero_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_hero_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_hero_links_locales_id_seq" OWNED BY "public"."pages_hero_links_locales"."id";


--
-- Name: pages_hero_logos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_hero_logos" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "logo_id" integer
);


--
-- Name: pages_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_id_seq" OWNED BY "public"."pages"."id";


--
-- Name: pages_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_locales" (
    "hero_rich_text" "jsonb",
    "hero_logos_headline" character varying,
    "hero_media_id" integer,
    "hero_badge_label" character varying,
    "meta_title" character varying,
    "meta_image_id" integer,
    "meta_description" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: pages_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_locales_id_seq" OWNED BY "public"."pages_locales"."id";


--
-- Name: pages_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."pages_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "locale" "public"."_locales",
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer,
    "integrations_id" integer,
    "categories_id" integer,
    "faq_id" integer,
    "media_id" integer,
    "testimonials_id" integer
);


--
-- Name: pages_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."pages_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pages_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."pages_rels_id_seq" OWNED BY "public"."pages_rels"."id";


--
-- Name: payload_jobs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_jobs" (
    "id" integer NOT NULL,
    "input" "jsonb",
    "completed_at" timestamp(3) with time zone,
    "total_tried" numeric DEFAULT 0,
    "has_error" boolean DEFAULT false,
    "error" "jsonb",
    "task_slug" "public"."enum_payload_jobs_task_slug",
    "queue" character varying DEFAULT 'default'::character varying,
    "wait_until" timestamp(3) with time zone,
    "processing" boolean DEFAULT false,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: payload_jobs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_jobs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_jobs_id_seq" OWNED BY "public"."payload_jobs"."id";


--
-- Name: payload_jobs_log; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_jobs_log" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "executed_at" timestamp(3) with time zone NOT NULL,
    "completed_at" timestamp(3) with time zone NOT NULL,
    "task_slug" "public"."enum_payload_jobs_log_task_slug" NOT NULL,
    "task_i_d" character varying NOT NULL,
    "input" "jsonb",
    "output" "jsonb",
    "state" "public"."enum_payload_jobs_log_state" NOT NULL,
    "error" "jsonb"
);


--
-- Name: payload_locked_documents; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_locked_documents" (
    "id" integer NOT NULL,
    "global_slug" character varying,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_locked_documents_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_locked_documents_id_seq" OWNED BY "public"."payload_locked_documents"."id";


--
-- Name: payload_locked_documents_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_locked_documents_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer,
    "integrations_id" integer,
    "media_id" integer,
    "testimonials_id" integer,
    "case_studies_id" integer,
    "categories_id" integer,
    "faq_id" integer,
    "changelog_id" integer,
    "users_id" integer,
    "redirects_id" integer,
    "forms_id" integer,
    "form_submissions_id" integer,
    "search_id" integer,
    "payload_jobs_id" integer
);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_locked_documents_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_locked_documents_rels_id_seq" OWNED BY "public"."payload_locked_documents_rels"."id";


--
-- Name: payload_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_migrations" (
    "id" integer NOT NULL,
    "name" character varying,
    "batch" numeric,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_migrations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_migrations_id_seq" OWNED BY "public"."payload_migrations"."id";


--
-- Name: payload_preferences; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_preferences" (
    "id" integer NOT NULL,
    "key" character varying,
    "value" "jsonb",
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_preferences_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_preferences_id_seq" OWNED BY "public"."payload_preferences"."id";


--
-- Name: payload_preferences_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."payload_preferences_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "users_id" integer
);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."payload_preferences_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."payload_preferences_rels_id_seq" OWNED BY "public"."payload_preferences_rels"."id";


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."posts" (
    "id" integer NOT NULL,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_posts_status" DEFAULT 'draft'::"public"."enum_posts_status"
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."posts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."posts_id_seq" OWNED BY "public"."posts"."id";


--
-- Name: posts_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."posts_locales" (
    "title" character varying,
    "hero_image_id" integer,
    "content" "jsonb",
    "meta_title" character varying,
    "meta_image_id" integer,
    "meta_description" character varying,
    "published_at" timestamp(3) with time zone,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: posts_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."posts_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."posts_locales_id_seq" OWNED BY "public"."posts_locales"."id";


--
-- Name: posts_populated_authors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."posts_populated_authors" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "name" character varying
);


--
-- Name: posts_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."posts_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "locale" "public"."_locales",
    "posts_id" integer,
    "categories_id" integer,
    "users_id" integer
);


--
-- Name: posts_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."posts_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."posts_rels_id_seq" OWNED BY "public"."posts_rels"."id";


--
-- Name: redirects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."redirects" (
    "id" integer NOT NULL,
    "from" character varying NOT NULL,
    "to_type" "public"."enum_redirects_to_type" DEFAULT 'reference'::"public"."enum_redirects_to_type",
    "to_url" character varying,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: redirects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."redirects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: redirects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."redirects_id_seq" OWNED BY "public"."redirects"."id";


--
-- Name: redirects_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."redirects_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer
);


--
-- Name: redirects_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."redirects_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: redirects_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."redirects_rels_id_seq" OWNED BY "public"."redirects_rels"."id";


--
-- Name: search; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."search" (
    "id" integer NOT NULL,
    "priority" numeric,
    "slug" character varying,
    "meta_title" character varying,
    "meta_description" character varying,
    "meta_image_id" integer,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL
);


--
-- Name: search_categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."search_categories" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" character varying NOT NULL,
    "relation_to" character varying,
    "title" character varying
);


--
-- Name: search_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."search_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: search_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."search_id_seq" OWNED BY "public"."search"."id";


--
-- Name: search_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."search_locales" (
    "title" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: search_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."search_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: search_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."search_locales_id_seq" OWNED BY "public"."search_locales"."id";


--
-- Name: search_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."search_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "posts_id" integer
);


--
-- Name: search_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."search_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: search_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."search_rels_id_seq" OWNED BY "public"."search_rels"."id";


--
-- Name: settings; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."settings" (
    "id" integer NOT NULL,
    "announcement_bar_link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "announcement_bar_link_new_tab" boolean,
    "announcement_bar_link_url" character varying,
    "custom_head_html" character varying,
    "custom_body_html" character varying,
    "tag_manager_id" character varying,
    "analytics_scripts" character varying,
    "updated_at" timestamp(3) with time zone,
    "created_at" timestamp(3) with time zone
);


--
-- Name: settings_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."settings_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: settings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."settings_id_seq" OWNED BY "public"."settings"."id";


--
-- Name: settings_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."settings_locales" (
    "meta_title" character varying,
    "meta_image_id" integer,
    "meta_description" character varying,
    "announcement_bar_text" character varying,
    "announcement_bar_link_label" character varying NOT NULL,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: settings_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."settings_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: settings_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."settings_locales_id_seq" OWNED BY "public"."settings_locales"."id";


--
-- Name: settings_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."settings_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer
);


--
-- Name: settings_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."settings_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: settings_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."settings_rels_id_seq" OWNED BY "public"."settings_rels"."id";


--
-- Name: solutions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."solutions" (
    "id" integer NOT NULL,
    "title" character varying,
    "icon_id" integer,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "published_at" timestamp(3) with time zone,
    "ecosystem_id" integer,
    "slug" character varying,
    "slug_lock" boolean DEFAULT true,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_solutions_status" DEFAULT 'draft'::"public"."enum_solutions_status"
);


--
-- Name: solutions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."solutions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: solutions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."solutions_id_seq" OWNED BY "public"."solutions"."id";


--
-- Name: solutions_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."solutions_locales" (
    "name" character varying,
    "tagline" character varying,
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: solutions_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."solutions_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: solutions_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."solutions_locales_id_seq" OWNED BY "public"."solutions_locales"."id";


--
-- Name: solutions_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."solutions_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "pages_id" integer,
    "posts_id" integer,
    "solutions_id" integer
);


--
-- Name: solutions_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."solutions_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: solutions_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."solutions_rels_id_seq" OWNED BY "public"."solutions_rels"."id";


--
-- Name: testimonials; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonials" (
    "id" integer NOT NULL,
    "company_logo_id" integer,
    "author_info_avatar_id" integer,
    "case_study_link_case_study" boolean DEFAULT false,
    "case_study_linked_case_study_id" integer,
    "published_at" timestamp(3) with time zone,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "_status" "public"."enum_testimonials_status" DEFAULT 'draft'::"public"."enum_testimonials_status"
);


--
-- Name: testimonialsBlock; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonialsBlock" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" "text" NOT NULL,
    "id" character varying NOT NULL,
    "block_header_type" "public"."enum_testimonialsBlock_block_header_type" DEFAULT 'center'::"public"."enum_testimonialsBlock_block_header_type",
    "block_header_badge_type" "public"."enum_testimonialsBlock_block_header_badge_type",
    "block_header_badge_color" "public"."badge_color" DEFAULT 'blue'::"public"."badge_color",
    "block_header_badge_icon" character varying,
    "block_header_badge_icon_position" "public"."badge_icon_position" DEFAULT 'flex-row'::"public"."badge_icon_position",
    "type" "public"."enum_testimonialsBlock_type" DEFAULT '01'::"public"."enum_testimonialsBlock_type",
    "block_name" character varying
);


--
-- Name: testimonialsBlock_block_header_links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonialsBlock_block_header_links" (
    "_order" integer NOT NULL,
    "_parent_id" character varying NOT NULL,
    "id" character varying NOT NULL,
    "link_type" "public"."link_type" DEFAULT 'reference'::"public"."link_type",
    "link_new_tab" boolean,
    "link_url" character varying,
    "link_color" "public"."link_color" DEFAULT 'neutral'::"public"."link_color",
    "link_variant" "public"."link_variant" DEFAULT 'primary'::"public"."link_variant"
);


--
-- Name: testimonialsBlock_block_header_links_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonialsBlock_block_header_links_locales" (
    "link_label" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: testimonialsBlock_block_header_links_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."testimonialsBlock_block_header_links_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: testimonialsBlock_block_header_links_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."testimonialsBlock_block_header_links_locales_id_seq" OWNED BY "public"."testimonialsBlock_block_header_links_locales"."id";


--
-- Name: testimonialsBlock_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonialsBlock_locales" (
    "block_header_badge_label" character varying,
    "block_header_header_text" "jsonb",
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" character varying NOT NULL
);


--
-- Name: testimonialsBlock_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."testimonialsBlock_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: testimonialsBlock_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."testimonialsBlock_locales_id_seq" OWNED BY "public"."testimonialsBlock_locales"."id";


--
-- Name: testimonials_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."testimonials_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: testimonials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."testimonials_id_seq" OWNED BY "public"."testimonials"."id";


--
-- Name: testimonials_locales; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonials_locales" (
    "quote" "jsonb",
    "company_name" character varying,
    "featured_image_id" integer,
    "author_info_name" character varying,
    "author_info_title" character varying,
    "id" integer NOT NULL,
    "_locale" "public"."_locales" NOT NULL,
    "_parent_id" integer NOT NULL
);


--
-- Name: testimonials_locales_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."testimonials_locales_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: testimonials_locales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."testimonials_locales_id_seq" OWNED BY "public"."testimonials_locales"."id";


--
-- Name: testimonials_rels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."testimonials_rels" (
    "id" integer NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" character varying NOT NULL,
    "categories_id" integer
);


--
-- Name: testimonials_rels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."testimonials_rels_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: testimonials_rels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."testimonials_rels_id_seq" OWNED BY "public"."testimonials_rels"."id";


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."users" (
    "id" integer NOT NULL,
    "name" character varying,
    "updated_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT "now"() NOT NULL,
    "email" character varying NOT NULL,
    "reset_password_token" character varying,
    "reset_password_expiration" timestamp(3) with time zone,
    "salt" character varying,
    "hash" character varying,
    "login_attempts" numeric DEFAULT 0,
    "lock_until" timestamp(3) with time zone
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."users_id_seq" OWNED BY "public"."users"."id";


--
-- Name: _archiveBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_archiveBlock_v_id_seq"'::"regclass");


--
-- Name: _archiveBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_archiveBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _callToActionBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_callToActionBlock_v_id_seq"'::"regclass");


--
-- Name: _callToActionBlock_v_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_callToActionBlock_v_links_id_seq"'::"regclass");


--
-- Name: _callToActionBlock_v_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_callToActionBlock_v_links_locales_id_seq"'::"regclass");


--
-- Name: _callToActionBlock_v_list id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_list" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_callToActionBlock_v_list_id_seq"'::"regclass");


--
-- Name: _callToActionBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_callToActionBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _case_studies_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_id_seq"'::"regclass");


--
-- Name: _case_studies_v_blocks_faq_block id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_blocks_faq_block_id_seq"'::"regclass");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_blocks_faq_block_block_header_links_id_seq"'::"regclass");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_blocks_faq_block_block_header_links_loca_id_seq"'::"regclass");


--
-- Name: _case_studies_v_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: _case_studies_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_locales_id_seq"'::"regclass");


--
-- Name: _case_studies_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_rels_id_seq"'::"regclass");


--
-- Name: _case_studies_v_version_stats id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_version_stats_id_seq"'::"regclass");


--
-- Name: _case_studies_v_version_stats_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_case_studies_v_version_stats_locales_id_seq"'::"regclass");


--
-- Name: _customHtmlBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_customHtmlBlock_v_id_seq"'::"regclass");


--
-- Name: _customHtmlBlock_v_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_customHtmlBlock_v_block_header_links_id_seq"'::"regclass");


--
-- Name: _customHtmlBlock_v_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_customHtmlBlock_v_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _customHtmlBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_customHtmlBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _dividerBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_dividerBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_dividerBlock_v_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_block_header_links_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v_cards id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_cards_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v_cards_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_cards_locales_id_seq"'::"regclass");


--
-- Name: _featuredAppsBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuredAppsBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_block_header_links_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v_columns id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_columns_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v_columns_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_columns_locales_id_seq"'::"regclass");


--
-- Name: _featuresBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_featuresBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _formBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_formBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_formBlock_v_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_block_header_links_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v_interactive_gallery id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_interactive_gallery_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v_interactive_gallery_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_interactive_gallery_locales_id_seq"'::"regclass");


--
-- Name: _galleryBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_galleryBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _integrations_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_id_seq"'::"regclass");


--
-- Name: _integrations_v_blocks_faq_block id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_blocks_faq_block_id_seq"'::"regclass");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_blocks_faq_block_block_header_links_id_seq"'::"regclass");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_blocks_faq_block_block_header_links_loca_id_seq"'::"regclass");


--
-- Name: _integrations_v_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: _integrations_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_locales_id_seq"'::"regclass");


--
-- Name: _integrations_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_rels_id_seq"'::"regclass");


--
-- Name: _integrations_v_version_hero_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_version_hero_links_id_seq"'::"regclass");


--
-- Name: _integrations_v_version_hero_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_version_hero_links_locales_id_seq"'::"regclass");


--
-- Name: _integrations_v_version_hero_logos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_logos" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_integrations_v_version_hero_logos_id_seq"'::"regclass");


--
-- Name: _pages_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_id_seq"'::"regclass");


--
-- Name: _pages_v_blocks_faq_block id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_blocks_faq_block_id_seq"'::"regclass");


--
-- Name: _pages_v_blocks_faq_block_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_blocks_faq_block_block_header_links_id_seq"'::"regclass");


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_blocks_faq_block_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _pages_v_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: _pages_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_locales_id_seq"'::"regclass");


--
-- Name: _pages_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_rels_id_seq"'::"regclass");


--
-- Name: _pages_v_version_hero_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_version_hero_links_id_seq"'::"regclass");


--
-- Name: _pages_v_version_hero_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_version_hero_links_locales_id_seq"'::"regclass");


--
-- Name: _pages_v_version_hero_logos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_logos" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_pages_v_version_hero_logos_id_seq"'::"regclass");


--
-- Name: _posts_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_posts_v_id_seq"'::"regclass");


--
-- Name: _posts_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_posts_v_locales_id_seq"'::"regclass");


--
-- Name: _posts_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_posts_v_rels_id_seq"'::"regclass");


--
-- Name: _posts_v_version_populated_authors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_version_populated_authors" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_posts_v_version_populated_authors_id_seq"'::"regclass");


--
-- Name: _solutions_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_solutions_v_id_seq"'::"regclass");


--
-- Name: _solutions_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_solutions_v_locales_id_seq"'::"regclass");


--
-- Name: _solutions_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_solutions_v_rels_id_seq"'::"regclass");


--
-- Name: _testimonialsBlock_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonialsBlock_v_id_seq"'::"regclass");


--
-- Name: _testimonialsBlock_v_block_header_links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonialsBlock_v_block_header_links_id_seq"'::"regclass");


--
-- Name: _testimonialsBlock_v_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonialsBlock_v_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: _testimonialsBlock_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonialsBlock_v_locales_id_seq"'::"regclass");


--
-- Name: _testimonials_v id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonials_v_id_seq"'::"regclass");


--
-- Name: _testimonials_v_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonials_v_locales_id_seq"'::"regclass");


--
-- Name: _testimonials_v_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."_testimonials_v_rels_id_seq"'::"regclass");


--
-- Name: archiveBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."archiveBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."archiveBlock_locales_id_seq"'::"regclass");


--
-- Name: callToActionBlock_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."callToActionBlock_links_locales_id_seq"'::"regclass");


--
-- Name: callToActionBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."callToActionBlock_locales_id_seq"'::"regclass");


--
-- Name: case_studies id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_id_seq"'::"regclass");


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_blocks_faq_block_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: case_studies_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: case_studies_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_locales_id_seq"'::"regclass");


--
-- Name: case_studies_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_rels_id_seq"'::"regclass");


--
-- Name: case_studies_stats_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_stats_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."case_studies_stats_locales_id_seq"'::"regclass");


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."categories_id_seq"'::"regclass");


--
-- Name: categories_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."categories_locales_id_seq"'::"regclass");


--
-- Name: changelog id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."changelog_id_seq"'::"regclass");


--
-- Name: changelog_categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_categories" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."changelog_categories_id_seq"'::"regclass");


--
-- Name: changelog_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."changelog_locales_id_seq"'::"regclass");


--
-- Name: customHtmlBlock_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."customHtmlBlock_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: customHtmlBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."customHtmlBlock_locales_id_seq"'::"regclass");


--
-- Name: faq id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."faq" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."faq_id_seq"'::"regclass");


--
-- Name: faq_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."faq_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."faq_locales_id_seq"'::"regclass");


--
-- Name: featuredAppsBlock_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuredAppsBlock_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: featuredAppsBlock_cards_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_cards_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuredAppsBlock_cards_locales_id_seq"'::"regclass");


--
-- Name: featuredAppsBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuredAppsBlock_locales_id_seq"'::"regclass");


--
-- Name: featuresBlock_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuresBlock_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: featuresBlock_columns_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuresBlock_columns_locales_id_seq"'::"regclass");


--
-- Name: featuresBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."featuresBlock_locales_id_seq"'::"regclass");


--
-- Name: footer id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."footer_id_seq"'::"regclass");


--
-- Name: footer_columns_nav_items_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns_nav_items_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."footer_columns_nav_items_locales_id_seq"'::"regclass");


--
-- Name: footer_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."footer_rels_id_seq"'::"regclass");


--
-- Name: form_submissions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."form_submissions" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."form_submissions_id_seq"'::"regclass");


--
-- Name: forms id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_id_seq"'::"regclass");


--
-- Name: forms_blocks_checkbox_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_checkbox_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_checkbox_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_country_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_country_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_country_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_email_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_email_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_email_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_message_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_message_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_message_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_number_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_number_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_number_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_select_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_select_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_select_options_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_options_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_select_options_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_state_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_state_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_state_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_text_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_text_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_text_locales_id_seq"'::"regclass");


--
-- Name: forms_blocks_textarea_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_textarea_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_blocks_textarea_locales_id_seq"'::"regclass");


--
-- Name: forms_emails_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_emails_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_emails_locales_id_seq"'::"regclass");


--
-- Name: forms_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."forms_locales_id_seq"'::"regclass");


--
-- Name: galleryBlock_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."galleryBlock_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: galleryBlock_interactive_gallery_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."galleryBlock_interactive_gallery_locales_id_seq"'::"regclass");


--
-- Name: galleryBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."galleryBlock_locales_id_seq"'::"regclass");


--
-- Name: header id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_id_seq"'::"regclass");


--
-- Name: header_cta_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_cta_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_cta_locales_id_seq"'::"regclass");


--
-- Name: header_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_rels_id_seq"'::"regclass");


--
-- Name: header_tabs_description_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_description_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_tabs_description_links_locales_id_seq"'::"regclass");


--
-- Name: header_tabs_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_tabs_locales_id_seq"'::"regclass");


--
-- Name: header_tabs_nav_items_featured_link_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_featured_link_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_tabs_nav_items_featured_link_links_locales_id_seq"'::"regclass");


--
-- Name: header_tabs_nav_items_list_links_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_list_links_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_tabs_nav_items_list_links_links_locales_id_seq"'::"regclass");


--
-- Name: header_tabs_nav_items_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."header_tabs_nav_items_locales_id_seq"'::"regclass");


--
-- Name: integrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_id_seq"'::"regclass");


--
-- Name: integrations_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_blocks_faq_block_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: integrations_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: integrations_hero_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_hero_links_locales_id_seq"'::"regclass");


--
-- Name: integrations_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_locales_id_seq"'::"regclass");


--
-- Name: integrations_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."integrations_rels_id_seq"'::"regclass");


--
-- Name: media id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."media_id_seq"'::"regclass");


--
-- Name: media_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."media_rels_id_seq"'::"regclass");


--
-- Name: pages id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_id_seq"'::"regclass");


--
-- Name: pages_blocks_faq_block_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_blocks_faq_block_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: pages_blocks_faq_block_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_blocks_faq_block_locales_id_seq"'::"regclass");


--
-- Name: pages_hero_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_hero_links_locales_id_seq"'::"regclass");


--
-- Name: pages_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_locales_id_seq"'::"regclass");


--
-- Name: pages_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."pages_rels_id_seq"'::"regclass");


--
-- Name: payload_jobs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_jobs" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_jobs_id_seq"'::"regclass");


--
-- Name: payload_locked_documents id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_locked_documents_id_seq"'::"regclass");


--
-- Name: payload_locked_documents_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_locked_documents_rels_id_seq"'::"regclass");


--
-- Name: payload_migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_migrations" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_migrations_id_seq"'::"regclass");


--
-- Name: payload_preferences id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_preferences_id_seq"'::"regclass");


--
-- Name: payload_preferences_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."payload_preferences_rels_id_seq"'::"regclass");


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_id_seq"'::"regclass");


--
-- Name: posts_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_locales_id_seq"'::"regclass");


--
-- Name: posts_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."posts_rels_id_seq"'::"regclass");


--
-- Name: redirects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."redirects_id_seq"'::"regclass");


--
-- Name: redirects_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."redirects_rels_id_seq"'::"regclass");


--
-- Name: search id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."search_id_seq"'::"regclass");


--
-- Name: search_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."search_locales_id_seq"'::"regclass");


--
-- Name: search_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."search_rels_id_seq"'::"regclass");


--
-- Name: settings id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."settings_id_seq"'::"regclass");


--
-- Name: settings_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."settings_locales_id_seq"'::"regclass");


--
-- Name: settings_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."settings_rels_id_seq"'::"regclass");


--
-- Name: solutions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."solutions_id_seq"'::"regclass");


--
-- Name: solutions_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."solutions_locales_id_seq"'::"regclass");


--
-- Name: solutions_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."solutions_rels_id_seq"'::"regclass");


--
-- Name: testimonials id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."testimonials_id_seq"'::"regclass");


--
-- Name: testimonialsBlock_block_header_links_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_block_header_links_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."testimonialsBlock_block_header_links_locales_id_seq"'::"regclass");


--
-- Name: testimonialsBlock_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."testimonialsBlock_locales_id_seq"'::"regclass");


--
-- Name: testimonials_locales id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_locales" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."testimonials_locales_id_seq"'::"regclass");


--
-- Name: testimonials_rels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_rels" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."testimonials_rels_id_seq"'::"regclass");


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."users_id_seq"'::"regclass");


--
-- Data for Name: _archiveBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_archiveBlock_v" ("_order", "_parent_id", "_path", "id", "populate_by", "relation_to", "limit", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _archiveBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_archiveBlock_v_locales" ("intro_content", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _callToActionBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_callToActionBlock_v" ("_order", "_parent_id", "_path", "id", "type", "badge_type", "badge_color", "badge_icon", "badge_icon_position", "supporting_text", "form_id", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _callToActionBlock_v_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_callToActionBlock_v_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _callToActionBlock_v_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_callToActionBlock_v_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _callToActionBlock_v_list; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_callToActionBlock_v_list" ("_order", "_parent_id", "_locale", "id", "icon", "title", "subtitle", "_uuid") FROM stdin;
\.


--
-- Data for Name: _callToActionBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_callToActionBlock_v_locales" ("badge_label", "rich_text", "media_id", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _case_studies_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v" ("id", "parent_id", "version_title", "version_slug", "version_slug_lock", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest") FROM stdin;
38	14	دراسة حالة 3: كيف حققنا النمو مع العميل	case-study-3	t	2025-05-18 18:24:01.006+00	2025-05-18 18:23:31.167+00	draft	2025-05-18 18:24:02.146+00	2025-05-18 18:24:02.146+00	\N	\N	t
39	15	دراسة حالة 1: كيف حققنا النمو مع العميل	case-study-1	t	2025-05-18 18:24:01.009+00	2025-05-18 18:23:31.177+00	draft	2025-05-18 18:24:02.165+00	2025-05-18 18:24:02.165+00	\N	\N	t
40	13	دراسة حالة 2: كيف حققنا النمو مع العميل	case-study-2	t	2025-05-18 18:24:00.999+00	2025-05-18 18:23:31.163+00	draft	2025-05-18 18:24:02.35+00	2025-05-18 18:24:02.35+00	\N	\N	t
41	16	دراسة حالة 4: كيف حققنا النمو مع العميل	case-study-4	t	2025-05-18 18:24:01.007+00	2025-05-18 18:23:31.17+00	draft	2025-05-18 18:24:02.351+00	2025-05-18 18:24:02.351+00	\N	\N	t
42	17	دراسة حالة 5: كيف حققنا النمو مع العميل	case-study-5	t	2025-05-18 18:24:01.013+00	2025-05-18 18:23:31.177+00	draft	2025-05-18 18:24:02.385+00	2025-05-18 18:24:02.385+00	\N	\N	t
43	18	دراسة حالة 6: كيف حققنا النمو مع العميل	case-study-6	t	2025-05-18 18:24:02.145+00	2025-05-18 18:23:32.304+00	draft	2025-05-18 18:24:03.635+00	2025-05-18 18:24:03.636+00	\N	\N	t
\.


--
-- Data for Name: _case_studies_v_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _case_studies_v_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _case_studies_v_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _case_studies_v_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _case_studies_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_locales" ("version_content", "version_industry", "version_use_case", "version_featured_image_id", "id", "_locale", "_parent_id") FROM stdin;
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 3", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 3	حالة استخدام متقدمة 3	26	38	ar	38
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 1", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 1	حالة استخدام متقدمة 1	26	39	ar	39
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 2", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 2	حالة استخدام متقدمة 2	26	40	ar	40
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 4", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 4	حالة استخدام متقدمة 4	26	41	ar	41
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 5", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 5	حالة استخدام متقدمة 5	26	42	ar	42
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 6", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 6	حالة استخدام متقدمة 6	26	43	ar	43
\.


--
-- Data for Name: _case_studies_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_rels" ("id", "order", "parent_id", "path", "solutions_id", "integrations_id", "pages_id", "posts_id", "faq_id") FROM stdin;
149	1	38	version.featuredSolutions	41	\N	\N	\N	\N
150	2	38	version.featuredSolutions	42	\N	\N	\N	\N
151	1	38	version.featuredIntegrations	\N	48	\N	\N	\N
152	2	38	version.featuredIntegrations	\N	47	\N	\N	\N
153	1	39	version.featuredSolutions	41	\N	\N	\N	\N
154	2	39	version.featuredSolutions	42	\N	\N	\N	\N
155	1	39	version.featuredIntegrations	\N	48	\N	\N	\N
156	2	39	version.featuredIntegrations	\N	47	\N	\N	\N
157	1	40	version.featuredSolutions	41	\N	\N	\N	\N
158	2	40	version.featuredSolutions	42	\N	\N	\N	\N
159	1	40	version.featuredIntegrations	\N	48	\N	\N	\N
160	2	40	version.featuredIntegrations	\N	47	\N	\N	\N
161	1	41	version.featuredSolutions	41	\N	\N	\N	\N
162	2	41	version.featuredSolutions	42	\N	\N	\N	\N
163	1	41	version.featuredIntegrations	\N	48	\N	\N	\N
164	2	41	version.featuredIntegrations	\N	47	\N	\N	\N
165	1	42	version.featuredSolutions	41	\N	\N	\N	\N
166	2	42	version.featuredSolutions	42	\N	\N	\N	\N
167	1	42	version.featuredIntegrations	\N	48	\N	\N	\N
168	2	42	version.featuredIntegrations	\N	47	\N	\N	\N
169	1	43	version.featuredSolutions	41	\N	\N	\N	\N
170	2	43	version.featuredSolutions	42	\N	\N	\N	\N
171	1	43	version.featuredIntegrations	\N	48	\N	\N	\N
172	2	43	version.featuredIntegrations	\N	47	\N	\N	\N
\.


--
-- Data for Name: _case_studies_v_version_stats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_version_stats" ("_order", "_parent_id", "id", "value", "is_percentage", "is_increase", "_uuid") FROM stdin;
1	38	75	12	t	t	682a25c19511346d0304f524
2	38	76	7	f	t	682a25c19511346d0304f525
1	39	77	10	t	t	682a25c19511346d0304f528
2	39	78	5	f	t	682a25c19511346d0304f529
1	40	79	11	t	t	682a25c09511346d0304f522
2	40	80	6	f	t	682a25c09511346d0304f523
1	41	81	13	t	t	682a25c19511346d0304f526
2	41	82	8	f	t	682a25c19511346d0304f527
1	42	83	14	t	t	682a25c19511346d0304f52a
2	42	84	9	f	t	682a25c19511346d0304f52b
1	43	85	15	t	t	682a25c29511346d0304f52c
2	43	86	10	f	t	682a25c29511346d0304f52d
\.


--
-- Data for Name: _case_studies_v_version_stats_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_case_studies_v_version_stats_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
النمو السنوي 3	75	ar	75
النمو الشهري 3	76	ar	76
النمو السنوي 1	77	ar	77
النمو الشهري 1	78	ar	78
النمو السنوي 2	79	ar	79
النمو الشهري 2	80	ar	80
النمو السنوي 4	81	ar	81
النمو الشهري 4	82	ar	82
النمو السنوي 5	83	ar	83
النمو الشهري 5	84	ar	84
النمو السنوي 6	85	ar	85
النمو الشهري 6	86	ar	86
\.


--
-- Data for Name: _customHtmlBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_customHtmlBlock_v" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "html_content", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _customHtmlBlock_v_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_customHtmlBlock_v_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _customHtmlBlock_v_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_customHtmlBlock_v_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _customHtmlBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_customHtmlBlock_v_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _dividerBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_dividerBlock_v" ("_order", "_parent_id", "_path", "id", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "media_id", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v_cards; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v_cards" ("_order", "_parent_id", "id", "_uuid") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v_cards_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v_cards_locales" ("title", "description", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _featuredAppsBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuredAppsBlock_v_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _featuresBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "link_type", "link_new_tab", "link_url", "_uuid", "block_name") FROM stdin;
1	25	version.layout	570	center	\N	blue	\N	flex-row	02	custom	\N	/	682a25bb9511346d0304f50f	\N
1	26	version.layout	571	center	label	blue	\N	flex-row	01	reference	\N	\N	682a25bc9511346d0304f510	\N
2	26	version.layout	572	center	label	blue	\N	flex-row	02	reference	\N	\N	682a25bc9511346d0304f511	\N
3	26	version.layout	573	center	label	blue	\N	flex-row	03	reference	\N	\N	682a25bc9511346d0304f512	\N
4	26	version.layout	574	center	label	blue	\N	flex-row	04	reference	\N	\N	682a25bc9511346d0304f513	\N
5	26	version.layout	575	center	label	blue	\N	flex-row	05	reference	\N	\N	682a25bc9511346d0304f514	\N
6	26	version.layout	576	center	label	blue	\N	flex-row	06	reference	\N	\N	682a25bc9511346d0304f515	\N
7	26	version.layout	577	center	label	blue	\N	flex-row	07	reference	\N	\N	682a25bc9511346d0304f516	\N
8	26	version.layout	578	center	label	blue	\N	flex-row	08	reference	\N	\N	682a25bc9511346d0304f517	\N
9	26	version.layout	579	center	label	blue	\N	flex-row	09	reference	\N	\N	682a25bc9511346d0304f518	\N
10	26	version.layout	580	center	label	blue	\N	flex-row	10	reference	\N	\N	682a25bc9511346d0304f519	\N
11	26	version.layout	581	center	label	blue	\N	flex-row	11	reference	\N	\N	682a25bc9511346d0304f51a	\N
12	26	version.layout	582	center	label	blue	\N	flex-row	12	reference	\N	\N	682a25bc9511346d0304f51b	\N
13	26	version.layout	583	center	label	blue	\N	flex-row	13	reference	\N	\N	682a25bc9511346d0304f51c	\N
14	26	version.layout	584	center	label	blue	\N	flex-row	14	custom	f	/learn-more/14	682a25bc9511346d0304f51d	\N
15	26	version.layout	585	center	label	blue	\N	flex-row	15	custom	f	/learn-more/15	682a25bc9511346d0304f51e	\N
16	26	version.layout	586	center	label	blue	\N	flex-row	16	custom	f	/learn-more/16	682a25bc9511346d0304f51f	\N
17	26	version.layout	587	center	label	blue	\N	flex-row	17	custom	f	/learn-more/17	682a25bc9511346d0304f520	\N
1	30	version.layout	794	center	label	blue	\N	flex-row	01	reference	\N	\N	682a25bc9511346d0304f510	\N
2	30	version.layout	795	center	label	blue	\N	flex-row	02	reference	\N	\N	682a25bc9511346d0304f511	\N
3	30	version.layout	796	center	label	blue	\N	flex-row	03	reference	\N	\N	682a25bc9511346d0304f512	\N
4	30	version.layout	797	center	label	blue	\N	flex-row	04	reference	\N	\N	682a25bc9511346d0304f513	\N
5	30	version.layout	798	center	label	blue	\N	flex-row	05	reference	\N	\N	682a25bc9511346d0304f514	\N
6	30	version.layout	799	center	label	blue	\N	flex-row	06	reference	\N	\N	682a25bc9511346d0304f515	\N
7	30	version.layout	800	center	label	blue	\N	flex-row	07	reference	\N	\N	682a25bc9511346d0304f516	\N
8	30	version.layout	801	center	label	blue	\N	flex-row	08	reference	\N	\N	682a25bc9511346d0304f517	\N
9	30	version.layout	802	center	label	blue	\N	flex-row	09	reference	\N	\N	682a25bc9511346d0304f518	\N
10	30	version.layout	803	center	label	blue	\N	flex-row	10	reference	\N	\N	682a25bc9511346d0304f519	\N
11	30	version.layout	804	center	label	blue	\N	flex-row	11	reference	\N	\N	682a25bc9511346d0304f51a	\N
12	30	version.layout	805	center	label	blue	\N	flex-row	12	reference	\N	\N	682a25bc9511346d0304f51b	\N
13	30	version.layout	806	center	label	blue	\N	flex-row	13	reference	\N	\N	682a25bc9511346d0304f51c	\N
14	30	version.layout	807	center	label	blue	\N	flex-row	14	custom	f	/learn-more/14	682a25bc9511346d0304f51d	\N
15	30	version.layout	808	center	label	blue	\N	flex-row	15	custom	f	/learn-more/15	682a25bc9511346d0304f51e	\N
16	30	version.layout	809	center	label	blue	\N	flex-row	16	custom	f	/learn-more/16	682a25bc9511346d0304f51f	\N
17	30	version.layout	810	center	label	blue	\N	flex-row	17	custom	f	/learn-more/17	682a25bc9511346d0304f520	\N
1	27	version.layout	811	split	label	blue	\N	flex-row	01	custom	\N	/	682a25bb9511346d0304f50f	\N
2	27	version.layout	812	center	\N	blue	\N	flex-row	01	reference	\N	\N	682b2d946b46a042e998eb16	\N
1	32	version.layout	861	center	\N	blue	\N	flex-row	01	reference	\N	\N	682b9b9b6b46a042e998eb19	\N
\.


--
-- Data for Name: _featuresBlock_v_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
1	570	47	custom	\N	/	neutral	primary	682a25bb9511346d0304f4fe
2	570	48	custom	\N	/	neutral	ghost	682a25bb9511346d0304f504
\.


--
-- Data for Name: _featuresBlock_v_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
تواصل معنا	47	ar	47
تعرف المزيد	48	ar	48
\.


--
-- Data for Name: _featuresBlock_v_columns; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v_columns" ("_order", "_parent_id", "id", "size", "icon", "enable_badge", "enable_cta", "reverse_order", "badge_type", "badge_color", "badge_icon", "badge_icon_position", "link_type", "link_new_tab", "link_url", "_uuid") FROM stdin;
1	570	1496	full	\N	f	f	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50a
2	570	1497	half	\N	f	f	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50b
3	570	1498	half	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50c
4	570	1499	twoThirds	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50d
5	570	1500	oneThird	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50e
1	571	1501	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-0
2	571	1502	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-1
3	571	1503	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-2
1	572	1504	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-0	col-02-0
2	572	1505	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-1	col-02-1
3	572	1506	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-2	col-02-2
4	572	1507	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-3	col-02-3
5	572	1508	twoThirds	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-4	col-02-4
6	572	1509	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-5	col-02-5
7	572	1510	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-6	col-02-6
8	572	1511	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-7	col-02-7
1	573	1512	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-0	col-03-0
2	573	1513	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-1	col-03-1
3	573	1514	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-2	col-03-2
1	574	1515	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-0	col-04-0
2	574	1516	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-1	col-04-1
3	574	1517	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-2	col-04-2
4	574	1518	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-3	col-04-3
1	575	1519	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-0	col-05-0
2	575	1520	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-1	col-05-1
1	576	1521	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-0
2	576	1522	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-1
3	576	1523	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-2
4	576	1524	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-3
1	577	1525	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-0
2	577	1526	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-1
3	577	1527	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-2
4	577	1528	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-3
1	578	1529	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-0	col-08-0
2	578	1530	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-1	col-08-1
3	578	1531	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-2	col-08-2
1	579	1532	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-0
2	579	1533	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-1
3	579	1534	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-2
1	580	1535	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-0
2	580	1536	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-1
3	580	1537	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-2
1	581	1538	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-0
2	581	1539	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-1
3	581	1540	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-2
1	582	1541	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-0
2	582	1542	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-1
3	582	1543	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-2
1	583	1544	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-0
2	583	1545	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-1
3	583	1546	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-2
1	584	1547	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-0
2	584	1548	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-1
3	584	1549	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-2
1	585	1550	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-0
2	585	1551	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-1
3	585	1552	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-2
1	586	1553	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-0
2	586	1554	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-1
3	586	1555	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-2
4	586	1556	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-3
1	587	1557	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-0
2	587	1558	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-1
3	587	1559	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-2
4	587	1560	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-3
1	811	2631	full	\N	f	f	\N	reference	blue	marn-icon	flex-row	custom	\N	/	682a25bb9511346d0304f50a
2	811	2632	half	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50c
3	811	2633	half	\N	f	f	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50b
4	811	2634	twoThirds	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50d
5	811	2635	oneThird	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/	682a25bb9511346d0304f50e
1	794	2571	full	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-0
2	794	2572	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-1
3	794	2573	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-01-2
1	795	2574	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-0	col-02-0
2	795	2575	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-1	col-02-1
3	795	2576	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-2	col-02-2
4	795	2577	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-3	col-02-3
5	795	2578	twoThirds	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-4	col-02-4
6	795	2579	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-5	col-02-5
7	795	2580	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-6	col-02-6
8	795	2581	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-7	col-02-7
1	796	2582	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-0	col-03-0
2	796	2583	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-1	col-03-1
3	796	2584	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-2	col-03-2
1	797	2585	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-0	col-04-0
2	797	2586	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-1	col-04-1
3	797	2587	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-2	col-04-2
4	797	2588	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-3	col-04-3
1	798	2589	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-0	col-05-0
2	798	2590	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-1	col-05-1
1	799	2591	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-0
2	799	2592	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-1
3	799	2593	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-2
4	799	2594	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-06-3
1	800	2595	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-0
2	800	2596	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-1
3	800	2597	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-2
4	800	2598	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-07-3
1	801	2599	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-0	col-08-0
2	801	2600	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-1	col-08-1
3	801	2601	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-2	col-08-2
1	802	2602	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-0
2	802	2603	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-1
3	802	2604	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-09-2
1	803	2605	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-0
2	803	2606	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-1
3	803	2607	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-10-2
1	804	2608	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-0
2	804	2609	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-1
3	804	2610	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-11-2
1	805	2611	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-0
2	805	2612	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-1
3	805	2613	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-12-2
1	806	2614	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-0
2	806	2615	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-1
3	806	2616	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-13-2
1	807	2617	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-0
2	807	2618	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-1
3	807	2619	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-14-2
1	808	2620	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-0
2	808	2621	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-1
3	808	2622	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-15-2
1	809	2623	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-0
2	809	2624	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-1
3	809	2625	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-2
4	809	2626	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-16-3
1	810	2627	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-0
2	810	2628	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-1
3	810	2629	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-2
4	810	2630	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N	col-17-3
\.


--
-- Data for Name: _featuresBlock_v_columns_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v_columns_locales" ("image_id", "tab_label", "content_title", "content_subtitle", "rich_text_content", "badge_label", "link_label", "id", "_locale", "_parent_id") FROM stdin;
24	\N	استخدمه عند الكاونتر، أو كمحطة متنقلة في المحل—الكاشير يتكيف مع مشروعك	\N	\N	\N	معرفة المزيد	1496	ar	1496
24	\N	الربط مع 20+ تطبيق يعزز عملياتك	\N	\N	\N	معرفة المزيد	1497	ar	1497
24	\N	استقبال المدفوعات بطرق متعددة بسلاسة	\N	\N	\N	معرفة المزيد	1498	ar	1498
24	\N	تابع مبيعاتك بدقة مع تقارير مفصلة وتحليلات	\N	\N	\N	معرفة المزيد	1499	ar	1499
24	\N	تواصل ذكي مع العملاء	\N	\N	\N	معرفة المزيد	1500	ar	1500
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1501	ar	1501
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1502	ar	1502
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1503	ar	1503
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 1	1504	ar	1504
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 2	1505	ar	1505
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 3	1506	ar	1506
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 4	1507	ar	1507
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 5	1508	ar	1508
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 6	1509	ar	1509
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	ميزات02	إجراء 7	1510	ar	1510
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	ميزات02	إجراء 8	1511	ar	1511
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	1512	ar	1512
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	1513	ar	1513
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	1514	ar	1514
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	1528	ar	1528
24	تبويب 1	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزة 1	إجراء 1	1529	ar	1529
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض. يوفر نظامنا تحديثات آنية لمستويات المخزون عبر جميع الفروع، مع تنبيهات ذكية للمنتجات منخفضة المخزون وإمكانية إجراء جرد شامل بسهولة فائقة، مما يمكنك من اتخاذ قرارات شراء مستنيرة وتحسين دورة رأس المال بشكل فعال.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	1515	ar	1515
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل. يقدم النظام لوحات معلومات تفاعلية وتقارير قابلة للتخصيص بالكامل، تغطي كل جانب من جوانب عمليات البيع، بما في ذلك أداء المنتجات، سلوك العملاء، وكفاءة الموظفين، مما يساعدك على تحديد الاتجاهات واستغلال الفرص الجديدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	1516	ar	1516
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا. تم تصميم واجهة المستخدم بعناية لتكون بديهية وسريعة الاستجابة، مما يقلل من وقت تدريب الموظفين الجدد ويزيد من كفاءتهم التشغيلية. يدعم النظام تخصيص الواجهة لتناسب احتياجات عملك الفريدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	1517	ar	1517
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا الفني المتخصص جاهز لمساعدتك في أي وقت، على مدار الساعة. سواء كنت بحاجة إلى مساعدة في الإعداد الأولي، أو لديك استفسارات تشغيلية، أو واجهت تحديًا تقنيًا، يمكنك الاعتماد على خبرائنا لتقديم حلول سريعة وفعالة لضمان استمرارية أعمالك دون انقطاع.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 4	إجراء 4	1518	ar	1518
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	1519	ar	1519
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	1520	ar	1520
\N	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1521	ar	1521
\N	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1522	ar	1522
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1523	ar	1523
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1524	ar	1524
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1525	ar	1525
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	1526	ar	1526
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	1527	ar	1527
24	تبويب 2	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزة 2	إجراء 2	1530	ar	1530
24	تبويب 3	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزة 3	إجراء 3	1531	ar	1531
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1532	ar	1532
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	1533	ar	1533
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	1534	ar	1534
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	1535	ar	1535
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	1536	ar	1536
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	1537	ar	1537
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1538	ar	1538
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1539	ar	1539
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	1540	ar	1540
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1541	ar	1541
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1542	ar	1542
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1543	ar	1543
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	1544	ar	1544
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	1545	ar	1545
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	1546	ar	1546
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	1547	ar	1547
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	1548	ar	1548
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1549	ar	1549
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1550	ar	1550
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1551	ar	1551
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1552	ar	1552
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	1553	ar	1553
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	1554	ar	1554
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	1555	ar	1555
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1556	ar	1556
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1557	ar	1557
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	1558	ar	1558
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	1559	ar	1559
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	1560	ar	1560
28	\N			{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوسيلة المثلى للتخلص من المعاناة تنسيك عناء اللخبطة ", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}		معرفة المزيد	2626	ar	2631
24	\N	استقبال المدفوعات بطرق متعددة بسلاسة	\N	\N	\N	معرفة المزيد	2627	ar	2632
\N	\N		\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "زهقت من فوضى الطلبات؟", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام كاشير حديث يرتب عملك بسهولة وبسعر يناسبك—مصمم للمطاعم ومحلات التجزئة في السعودية", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	\N	معرفة المزيد	2628	ar	2633
24	\N	تابع مبيعاتك بدقة مع تقارير مفصلة وتحليلات	\N	\N	\N	معرفة المزيد	2629	ar	2634
24	\N	تواصل ذكي مع العملاء	\N	\N	\N	معرفة المزيد	2630	ar	2635
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2566	ar	2571
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	2599	ar	2604
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	2600	ar	2605
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	2601	ar	2606
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2567	ar	2572
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2568	ar	2573
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 1	2569	ar	2574
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 2	2570	ar	2575
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 3	2571	ar	2576
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 4	2572	ar	2577
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 5	2573	ar	2578
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 6	2574	ar	2579
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	ميزات02	إجراء 7	2575	ar	2580
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	ميزات02	إجراء 8	2576	ar	2581
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	2577	ar	2582
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	2578	ar	2583
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	2579	ar	2584
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض. يوفر نظامنا تحديثات آنية لمستويات المخزون عبر جميع الفروع، مع تنبيهات ذكية للمنتجات منخفضة المخزون وإمكانية إجراء جرد شامل بسهولة فائقة، مما يمكنك من اتخاذ قرارات شراء مستنيرة وتحسين دورة رأس المال بشكل فعال.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	2580	ar	2585
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	2602	ar	2607
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل. يقدم النظام لوحات معلومات تفاعلية وتقارير قابلة للتخصيص بالكامل، تغطي كل جانب من جوانب عمليات البيع، بما في ذلك أداء المنتجات، سلوك العملاء، وكفاءة الموظفين، مما يساعدك على تحديد الاتجاهات واستغلال الفرص الجديدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	2581	ar	2586
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا. تم تصميم واجهة المستخدم بعناية لتكون بديهية وسريعة الاستجابة، مما يقلل من وقت تدريب الموظفين الجدد ويزيد من كفاءتهم التشغيلية. يدعم النظام تخصيص الواجهة لتناسب احتياجات عملك الفريدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	2582	ar	2587
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا الفني المتخصص جاهز لمساعدتك في أي وقت، على مدار الساعة. سواء كنت بحاجة إلى مساعدة في الإعداد الأولي، أو لديك استفسارات تشغيلية، أو واجهت تحديًا تقنيًا، يمكنك الاعتماد على خبرائنا لتقديم حلول سريعة وفعالة لضمان استمرارية أعمالك دون انقطاع.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 4	إجراء 4	2583	ar	2588
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	2584	ar	2589
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	2585	ar	2590
\N	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2586	ar	2591
\N	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2587	ar	2592
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2588	ar	2593
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2589	ar	2594
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2590	ar	2595
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	2591	ar	2596
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	2592	ar	2597
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	2593	ar	2598
24	تبويب 1	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزة 1	إجراء 1	2594	ar	2599
24	تبويب 2	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزة 2	إجراء 2	2595	ar	2600
24	تبويب 3	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزة 3	إجراء 3	2596	ar	2601
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2597	ar	2602
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	2598	ar	2603
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2603	ar	2608
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2604	ar	2609
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	2605	ar	2610
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2606	ar	2611
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2607	ar	2612
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2608	ar	2613
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	2609	ar	2614
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	2610	ar	2615
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	2611	ar	2616
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	2612	ar	2617
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	2613	ar	2618
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2614	ar	2619
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2615	ar	2620
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2616	ar	2621
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2617	ar	2622
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	2618	ar	2623
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	2619	ar	2624
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	2620	ar	2625
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2621	ar	2626
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2622	ar	2627
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	2623	ar	2628
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	2624	ar	2629
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	2625	ar	2630
\.


--
-- Data for Name: _featuresBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_featuresBlock_v_locales" ("block_header_badge_label", "block_header_header_text", "block_image_id", "c_t_a_label", "link_label", "id", "_locale", "_parent_id") FROM stdin;
\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "منظومة مصممة لتلبية احتياجاتك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع وإدارة عمليات تشغيلية مصمم ليناسب احتياجات النوعية للمطاعم والأنشطة التجارية المختلفة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	26	\N		415	ar	570
Features 01	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (01) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	416	ar	571
Features 02	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (02) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	417	ar	572
Features 03	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (03) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	418	ar	573
Features 04	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (04) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	419	ar	574
Features 05	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (05) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	420	ar	575
Features 06	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (06) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	421	ar	576
Features 07	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (07) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	422	ar	577
Features 08	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (08) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	423	ar	578
Features 09	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (09) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	424	ar	579
Features 10	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (10) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	425	ar	580
Features 11	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (11) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	426	ar	581
Features 12	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (12) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	427	ar	582
Features 13	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (13) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	428	ar	583
Features 14	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (14) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 14	تفاصيل الميزة 14	429	ar	584
Features 15	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (15) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 15	تفاصيل الميزة 15	430	ar	585
Features 16	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (16) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 16	تفاصيل الميزة 16	431	ar	586
Features 17	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (17) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 17	تفاصيل الميزة 17	432	ar	587
Features 01	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (01) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	639	ar	794
Features 02	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (02) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	640	ar	795
Features 03	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (03) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	641	ar	796
Features 04	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (04) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	642	ar	797
Features 05	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (05) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	643	ar	798
Features 06	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (06) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	644	ar	799
Features 07	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (07) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	645	ar	800
Features 08	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (08) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	646	ar	801
Features 09	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (09) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	647	ar	802
Features 10	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (10) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	648	ar	803
Features 11	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (11) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	649	ar	804
Features 12	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (12) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	650	ar	805
Features 13	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (13) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	651	ar	806
Features 14	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (14) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 14	تفاصيل الميزة 14	652	ar	807
Features 15	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (15) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 15	تفاصيل الميزة 15	653	ar	808
Features 16	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (16) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 16	تفاصيل الميزة 16	654	ar	809
Features 17	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (17) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 17	تفاصيل الميزة 17	655	ar	810
\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "منظومة مصممة لتلبية احتياجاتك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع وإدارة عمليات تشغيلية مصمم ليناسب احتياجات النوعية للمطاعم والأنشطة التجارية المختلفة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	26	\N		656	ar	811
\.


--
-- Data for Name: _formBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_formBlock_v" ("_order", "_parent_id", "_path", "id", "form_id", "enable_intro", "intro_content", "_uuid", "block_name") FROM stdin;
1	24	version.layout	4	3	t	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Example contact form:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr"}], "direction": "ltr"}}	682a25bc9511346d0304f521	\N
\.


--
-- Data for Name: _galleryBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _galleryBlock_v_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _galleryBlock_v_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _galleryBlock_v_interactive_gallery; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v_interactive_gallery" ("_order", "_parent_id", "id", "_uuid") FROM stdin;
\.


--
-- Data for Name: _galleryBlock_v_interactive_gallery_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v_interactive_gallery_locales" ("image_id", "panel_title", "panel_description", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _galleryBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_galleryBlock_v_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _integrations_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v" ("id", "parent_id", "version_title", "version_icon_id", "version_link_type", "version_link_new_tab", "version_link_url", "version_company_email", "version_company_phone", "version_docs_link_type", "version_docs_link_new_tab", "version_docs_link_url", "version_hero_type", "version_hero_supporting_text", "version_hero_badge_type", "version_hero_badge_color", "version_hero_badge_icon", "version_hero_badge_icon_position", "version_published_at", "version_slug", "version_slug_lock", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest", "autosave") FROM stdin;
68	46	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:07.189+00	2025-05-18 18:22:36.573+00	draft	2025-05-18 18:23:08.009+00	2025-05-18 18:23:08.01+00	\N	\N	t	f
69	47	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:10.333+00	2025-05-18 18:22:39.743+00	draft	2025-05-18 18:23:11.149+00	2025-05-18 18:23:11.149+00	\N	\N	t	f
70	48	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:13.581+00	2025-05-18 18:22:42.998+00	draft	2025-05-18 18:23:14.307+00	2025-05-18 18:23:14.307+00	\N	\N	t	f
71	49	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:16.631+00	2025-05-18 18:22:46.036+00	draft	2025-05-18 18:23:17.402+00	2025-05-18 18:23:17.402+00	\N	\N	t	f
72	50	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:19.746+00	2025-05-18 18:22:49.191+00	draft	2025-05-18 18:23:20.489+00	2025-05-18 18:23:20.489+00	\N	\N	t	f
73	51	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:22.718+00	2025-05-18 18:22:52.145+00	draft	2025-05-18 18:23:23.491+00	2025-05-18 18:23:23.491+00	\N	\N	t	f
74	52	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:25.769+00	2025-05-18 18:22:55.18+00	draft	2025-05-18 18:23:26.543+00	2025-05-18 18:23:26.543+00	\N	\N	t	f
75	53	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:28.806+00	2025-05-18 18:22:58.23+00	draft	2025-05-18 18:23:29.523+00	2025-05-18 18:23:29.523+00	\N	\N	t	f
76	54	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:31.668+00	2025-05-18 18:23:01.146+00	draft	2025-05-18 18:23:32.404+00	2025-05-18 18:23:32.404+00	\N	\N	t	f
77	55	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:34.565+00	2025-05-18 18:23:04.026+00	draft	2025-05-18 18:23:35.306+00	2025-05-18 18:23:35.307+00	\N	\N	t	f
78	56	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:37.476+00	2025-05-18 18:23:06.95+00	draft	2025-05-18 18:23:38.204+00	2025-05-18 18:23:38.205+00	\N	\N	t	f
79	57	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:40.362+00	2025-05-18 18:23:09.851+00	draft	2025-05-18 18:23:41.101+00	2025-05-18 18:23:41.102+00	\N	\N	t	f
80	58	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:43.333+00	2025-05-18 18:23:12.775+00	draft	2025-05-18 18:23:44.1+00	2025-05-18 18:23:44.101+00	\N	\N	t	f
81	59	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:46.34+00	2025-05-18 18:23:15.778+00	draft	2025-05-18 18:23:47.259+00	2025-05-18 18:23:47.259+00	\N	\N	t	f
82	60	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:49.505+00	2025-05-18 18:23:18.939+00	draft	2025-05-18 18:23:50.263+00	2025-05-18 18:23:50.263+00	\N	\N	t	f
\.


--
-- Data for Name: _integrations_v_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _integrations_v_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _integrations_v_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _integrations_v_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _integrations_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_locales" ("version_name", "version_tagline", "version_overview", "version_link_label", "version_company_name", "version_docs_link_label", "version_hero_rich_text", "version_hero_logos_headline", "version_hero_media_id", "version_hero_badge_label", "version_content", "version_meta_title", "version_meta_image_id", "version_meta_description", "id", "_locale", "_parent_id") FROM stdin;
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	70	ar	68
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	71	ar	69
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	72	ar	70
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	73	ar	71
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	74	ar	72
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	75	ar	73
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	76	ar	74
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	77	ar	75
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	78	ar	76
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	79	ar	77
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	80	ar	78
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	81	ar	79
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	82	ar	80
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	83	ar	81
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	84	ar	82
\.


--
-- Data for Name: _integrations_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id", "integrations_id", "media_id", "faq_id", "categories_id") FROM stdin;
121	1	68	version.ecosystem	\N	\N	\N	\N	\N	\N	131
122	2	68	version.ecosystem	\N	\N	\N	\N	\N	\N	132
123	1	69	version.ecosystem	\N	\N	\N	\N	\N	\N	131
124	2	69	version.ecosystem	\N	\N	\N	\N	\N	\N	132
125	1	70	version.ecosystem	\N	\N	\N	\N	\N	\N	131
126	2	70	version.ecosystem	\N	\N	\N	\N	\N	\N	132
127	1	71	version.ecosystem	\N	\N	\N	\N	\N	\N	131
128	2	71	version.ecosystem	\N	\N	\N	\N	\N	\N	132
129	1	72	version.ecosystem	\N	\N	\N	\N	\N	\N	131
130	2	72	version.ecosystem	\N	\N	\N	\N	\N	\N	132
131	1	73	version.ecosystem	\N	\N	\N	\N	\N	\N	131
132	2	73	version.ecosystem	\N	\N	\N	\N	\N	\N	132
133	1	74	version.ecosystem	\N	\N	\N	\N	\N	\N	131
134	2	74	version.ecosystem	\N	\N	\N	\N	\N	\N	132
135	1	75	version.ecosystem	\N	\N	\N	\N	\N	\N	131
136	2	75	version.ecosystem	\N	\N	\N	\N	\N	\N	132
137	1	76	version.ecosystem	\N	\N	\N	\N	\N	\N	131
138	2	76	version.ecosystem	\N	\N	\N	\N	\N	\N	132
139	1	77	version.ecosystem	\N	\N	\N	\N	\N	\N	131
140	2	77	version.ecosystem	\N	\N	\N	\N	\N	\N	132
141	1	78	version.ecosystem	\N	\N	\N	\N	\N	\N	131
142	2	78	version.ecosystem	\N	\N	\N	\N	\N	\N	132
143	1	79	version.ecosystem	\N	\N	\N	\N	\N	\N	131
144	2	79	version.ecosystem	\N	\N	\N	\N	\N	\N	132
145	1	80	version.ecosystem	\N	\N	\N	\N	\N	\N	131
146	2	80	version.ecosystem	\N	\N	\N	\N	\N	\N	132
147	1	81	version.ecosystem	\N	\N	\N	\N	\N	\N	131
148	2	81	version.ecosystem	\N	\N	\N	\N	\N	\N	132
149	1	82	version.ecosystem	\N	\N	\N	\N	\N	\N	131
150	2	82	version.ecosystem	\N	\N	\N	\N	\N	\N	132
\.


--
-- Data for Name: _integrations_v_version_hero_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_version_hero_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _integrations_v_version_hero_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_version_hero_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _integrations_v_version_hero_logos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_integrations_v_version_hero_logos" ("_order", "_parent_id", "id", "logo_id", "_uuid") FROM stdin;
\.


--
-- Data for Name: _pages_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v" ("id", "parent_id", "version_title", "version_hero_type", "version_hero_supporting_text", "version_hero_badge_type", "version_hero_badge_color", "version_hero_badge_icon", "version_hero_badge_icon_position", "version_published_at", "version_slug", "version_slug_lock", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest", "autosave") FROM stdin;
29	10	\N	hero01	\N	\N	blue	\N	flex-row	2025-05-19 07:27:08.309+00		t	2025-05-19 07:27:08.31+00	2025-05-19 07:27:04.408+00	draft	2025-05-19 07:27:08.31+00	2025-05-19 07:27:08.387+00	\N	\N	t	t
28	10	\N	hero01	\N	\N	blue	\N	flex-row	\N	\N	t	2025-05-19 07:27:04.421+00	2025-05-19 07:27:04.408+00	draft	2025-05-19 07:27:05.251+00	2025-05-19 07:27:05.252+00	\N	\N	f	f
26	8	features	hero01	\N	\N	blue	\N	flex-row	\N	features	t	2025-05-18 18:23:56.343+00	2025-05-18 18:23:26.468+00	published	2025-05-18 18:23:58.461+00	2025-05-18 18:23:58.463+00	\N	\N	f	f
30	8	features	hero01	\N	\N	blue	\N	flex-row	2025-05-19 10:16:01.502+00	features	t	2025-05-19 10:16:23.849+00	2025-05-18 18:23:26.468+00	draft	2025-05-19 10:16:01.713+00	2025-05-19 10:16:24.129+00	\N	\N	t	t
27	7	Home	hero01	\N	\N	blue	marn-icon	flex-row-reverse	2025-05-18 12:00:00+00	home	t	2025-05-19 13:09:11.603+00	2025-05-18 18:23:25.385+00	draft	2025-05-18 18:59:08.352+00	2025-05-19 13:09:11.736+00	\N	\N	t	t
24	9	Contact	none	\N	\N	blue	\N	flex-row	\N	contact	t	2025-05-18 18:23:56.344+00	2025-05-18 18:23:26.475+00	published	2025-05-18 18:23:57.273+00	2025-05-18 18:23:57.273+00	\N	\N	t	f
25	7	Home	hero01	\N	\N	blue	\N	\N	\N	home	t	2025-05-18 18:23:55.229+00	2025-05-18 18:23:25.385+00	published	2025-05-18 18:23:58.099+00	2025-05-18 18:23:58.1+00	\N	\N	f	f
31	11	\N	hero01	\N	\N	blue	\N	flex-row	\N	\N	t	2025-05-19 20:58:25.285+00	2025-05-19 20:58:25.271+00	draft	2025-05-19 20:58:25.386+00	2025-05-19 20:58:25.387+00	\N	\N	f	f
32	11	test	hero01	\N	\N	blue	\N	flex-row	2025-05-19 20:58:38.041+00	test	t	2025-05-19 20:58:38.042+00	2025-05-19 20:58:25.271+00	draft	2025-05-19 20:58:27.113+00	2025-05-19 20:58:38.092+00	\N	\N	t	t
\.


--
-- Data for Name: _pages_v_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _pages_v_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _pages_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_locales" ("version_hero_rich_text", "version_hero_logos_headline", "version_hero_media_id", "version_hero_badge_label", "version_meta_title", "version_meta_image_id", "version_meta_description", "id", "_locale", "_parent_id") FROM stdin;
\N	\N	\N	\N	\N	\N	\N	124	ar	24
\N	\N	\N	\N	\N	\N	\N	316	ar	28
\N	\N	\N	\N	\N	\N	\N	317	ar	29
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "زهقت من فوضى الطلبات؟", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام كاشير حديث يرتب عملك بسهولة وبسعر يناسبك—مصمم للمطاعم ومحلات التجزئة في السعودية", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	\N	27		\N	26	\N	320	ar	27
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "زهقت من فوضى الطلبات؟", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام كاشير حديث يرتب عملك بسهولة وبسعر يناسبك—مصمم للمطاعم ومحلات التجزئة في السعودية", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	\N	26	\N	\N	26	\N	125	ar	25
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع حديث ومرن لمشروعك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اكتشف كيف يمكن لنظام نقاط البيع المتطور لدينا أن يساعدك في إدارة أعمالك بكفاءة وزيادة أرباحك. نقدم لك حلولاً متكاملة تناسب جميع احتياجاتك.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	26	\N	ميتا: features	\N	استكشف مجموعة متنوعة من تصميمات بلوكات الميزات وكيف يمكنها عرض خصائص نظام نقاط البيع بفعالية باللغة العربية.	319	ar	30
\N	\N	\N	\N	\N	\N	\N	345	ar	31
\N	\N	\N	\N	\N	\N	\N	349	ar	32
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع حديث ومرن لمشروعك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اكتشف كيف يمكن لنظام نقاط البيع المتطور لدينا أن يساعدك في إدارة أعمالك بكفاءة وزيادة أرباحك. نقدم لك حلولاً متكاملة تناسب جميع احتياجاتك.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	26	\N	ميتا: features	\N	استكشف مجموعة متنوعة من تصميمات بلوكات الميزات وكيف يمكنها عرض خصائص نظام نقاط البيع بفعالية باللغة العربية.	126	ar	26
\.


--
-- Data for Name: _pages_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_rels" ("id", "order", "parent_id", "path", "locale", "pages_id", "posts_id", "solutions_id", "integrations_id", "categories_id", "faq_id", "media_id", "testimonials_id") FROM stdin;
1052	\N	30	version.layout.0.columns.0.appReference	\N	\N	\N	41	\N	\N	\N	\N	\N
1053	\N	27	version.hero.badge.reference	\N	\N	\N	41	\N	\N	\N	\N	\N
1054	\N	27	version.layout.0.columns.0.appReference	\N	\N	\N	43	\N	\N	\N	\N	\N
1055	\N	27	version.layout.0.columns.0.badge.reference	\N	\N	\N	41	\N	\N	\N	\N	\N
815	1	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	22
816	2	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	21
817	3	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	23
818	4	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	25
819	5	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	24
820	6	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	26
821	7	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	27
822	8	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	28
823	9	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	29
824	10	27	version.layout.1.selectedTestimonials	\N	\N	\N	\N	\N	\N	\N	\N	30
992	1	27	version.layout.1.categories	\N	\N	\N	\N	\N	118	\N	\N	\N
702	\N	27	version.layout.0.columns.5.appReference	\N	\N	\N	42	\N	\N	\N	\N	\N
849	1	27	version.layout.1.apps	\N	\N	\N	\N	46	\N	\N	\N	\N
850	2	27	version.layout.1.apps	\N	\N	\N	\N	47	\N	\N	\N	\N
851	3	27	version.layout.1.apps	\N	\N	\N	\N	48	\N	\N	\N	\N
852	4	27	version.layout.1.apps	\N	\N	\N	\N	49	\N	\N	\N	\N
853	5	27	version.layout.1.apps	\N	\N	\N	\N	50	\N	\N	\N	\N
854	6	27	version.layout.1.apps	\N	\N	\N	\N	51	\N	\N	\N	\N
855	7	27	version.layout.1.apps	\N	\N	\N	\N	52	\N	\N	\N	\N
856	8	27	version.layout.1.apps	\N	\N	\N	\N	53	\N	\N	\N	\N
857	9	27	version.layout.1.apps	\N	\N	\N	\N	54	\N	\N	\N	\N
858	10	27	version.layout.1.apps	\N	\N	\N	\N	55	\N	\N	\N	\N
\.


--
-- Data for Name: _pages_v_version_hero_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_version_hero_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
1	30	237	custom	f	/	neutral	primary	hero-link-1-ar
1	27	238	custom	\N	google.com	neutral	primary	6800e854462e705cdaf2a9ce
1	25	45	custom	\N	google.com	brand	primary	6800e854462e705cdaf2a9ce
1	26	46	custom	f	/	neutral	primary	hero-link-1-ar
\.


--
-- Data for Name: _pages_v_version_hero_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_version_hero_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
العودة إلى الرئيسية	237	ar	237
تواصل معنا	238	ar	238
تواصل معنا	45	ar	45
العودة إلى الرئيسية	46	ar	46
\.


--
-- Data for Name: _pages_v_version_hero_logos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_pages_v_version_hero_logos" ("_order", "_parent_id", "id", "logo_id", "_uuid") FROM stdin;
1	27	187	\N	682a2e1ad54c1b257a355e1a
\.


--
-- Data for Name: _posts_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_posts_v" ("id", "parent_id", "version_slug", "version_slug_lock", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest") FROM stdin;
\.


--
-- Data for Name: _posts_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_posts_v_locales" ("version_title", "version_hero_image_id", "version_content", "version_meta_title", "version_meta_image_id", "version_meta_description", "version_published_at", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _posts_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_posts_v_rels" ("id", "order", "parent_id", "path", "locale", "posts_id", "categories_id", "users_id") FROM stdin;
\.


--
-- Data for Name: _posts_v_version_populated_authors; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_posts_v_version_populated_authors" ("_order", "_parent_id", "id", "_uuid", "name") FROM stdin;
\.


--
-- Data for Name: _solutions_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_solutions_v" ("id", "parent_id", "version_title", "version_icon_id", "version_link_type", "version_link_new_tab", "version_link_url", "version_published_at", "version_ecosystem_id", "version_slug", "version_slug_lock", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest") FROM stdin;
37	42	PaySync	23	custom	\N	/solutions/paysync	\N	131	paysync	t	2025-05-18 18:22:38.91+00	2025-05-18 18:22:08.384+00	draft	2025-05-18 18:22:39.427+00	2025-05-18 18:22:39.427+00	\N	\N	t
38	43	Kiosk	23	custom	\N	/solutions/kiosk	\N	131	kiosk	t	2025-05-18 18:22:41.315+00	2025-05-18 18:22:10.788+00	draft	2025-05-18 18:22:41.89+00	2025-05-18 18:22:41.89+00	\N	\N	t
39	44	OrderStation	23	custom	\N	/solutions/orderstation	\N	132	orderstation	t	2025-05-18 18:22:44.429+00	2025-05-18 18:22:13.628+00	draft	2025-05-18 18:22:45.083+00	2025-05-18 18:22:45.083+00	\N	\N	t
40	45	Products	23	custom	\N	/solutions/products	\N	132	products	t	2025-05-18 18:22:47.747+00	2025-05-18 18:22:16.825+00	draft	2025-05-18 18:22:48.854+00	2025-05-18 18:22:48.855+00	\N	\N	t
41	46	Inventory	23	custom	\N	/solutions/inventory	\N	132	inventory	t	2025-05-18 18:22:52.037+00	2025-05-18 18:22:21.225+00	draft	2025-05-18 18:22:52.7+00	2025-05-18 18:22:52.701+00	\N	\N	t
42	47	Analytics	23	custom	\N	/solutions/analytics	\N	133	analytics	t	2025-05-18 18:22:55.226+00	2025-05-18 18:22:24.44+00	draft	2025-05-18 18:22:55.923+00	2025-05-18 18:22:55.924+00	\N	\N	t
43	48	Branches	23	custom	\N	/solutions/branches	\N	133	branches	t	2025-05-18 18:22:58.153+00	2025-05-18 18:22:27.564+00	draft	2025-05-18 18:22:58.729+00	2025-05-18 18:22:58.73+00	\N	\N	t
44	49	Customers	23	custom	\N	/solutions/customers	\N	133	customers	t	2025-05-18 18:23:00.867+00	2025-05-18 18:22:30.228+00	draft	2025-05-18 18:23:01.427+00	2025-05-18 18:23:01.427+00	\N	\N	t
45	50	Accounting	23	custom	\N	/solutions/accouting	\N	133	accouting	t	2025-05-18 18:23:03.573+00	2025-05-18 18:22:32.92+00	draft	2025-05-18 18:23:04.133+00	2025-05-18 18:23:04.134+00	\N	\N	t
46	41	Cashier	23	custom	\N	/solutions/cashier	\N	131	cashier	t	2025-05-19 13:14:46.629+00	2025-05-18 18:22:05.887+00	published	2025-05-19 13:14:46.701+00	2025-05-19 13:14:46.702+00	\N	\N	t
36	41	Cashier	23	custom	\N	/solutions/cashier	\N	131	cashier	t	2025-05-18 18:22:36.424+00	2025-05-18 18:22:05.887+00	draft	2025-05-18 18:22:36.968+00	2025-05-18 18:22:36.969+00	\N	\N	f
\.


--
-- Data for Name: _solutions_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_solutions_v_locales" ("version_name", "version_tagline", "version_link_label", "id", "_locale", "_parent_id") FROM stdin;
الكاشير	تسجيل المبيعات بمرونة وسرعة على أي جهاز	الكاشير	36	ar	36
شاشة السداد	عرض الطلبات والدفع بشكل مباشر للعميل	شاشة السداد	37	ar	37
الطلب الذاتي	خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين	الطلب الذاتي	38	ar	38
محطة الطلبات	إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل	محطة الطلبات	39	ar	39
المنتجات	نظّم منتجاتك، الأسعار، والعروض بسهولة	المنتجات	40	ar	40
المخزون	تابع الكميات وتفادى النقص أو الهدر تلقائيًا	المخزون	41	ar	41
التحليلات	تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات	التحليلات	42	ar	42
الفروع	راقب كل فروعك وتقاريرها من نفس اللوحة	الفروع	43	ar	43
العملاء	احفظ بيانات عملاءك وفعّل برامج الولاء	العملاء	44	ar	44
المالية	تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة	المالية	45	ar	45
الكاشير	تسجيل المبيعات بمرونة وسرعة على أي جهاز	الكاشير	46	ar	46
\.


--
-- Data for Name: _solutions_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_solutions_v_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id") FROM stdin;
\.


--
-- Data for Name: _testimonialsBlock_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonialsBlock_v" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "_uuid", "block_name") FROM stdin;
\.


--
-- Data for Name: _testimonialsBlock_v_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonialsBlock_v_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant", "_uuid") FROM stdin;
\.


--
-- Data for Name: _testimonialsBlock_v_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonialsBlock_v_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _testimonialsBlock_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonialsBlock_v_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: _testimonials_v; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonials_v" ("id", "parent_id", "version_company_logo_id", "version_author_info_avatar_id", "version_case_study_link_case_study", "version_case_study_linked_case_study_id", "version_published_at", "version_updated_at", "version_created_at", "version__status", "created_at", "updated_at", "snapshot", "published_locale", "latest", "autosave") FROM stdin;
21	21	22	23	t	13	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.061+00	2025-05-18 18:23:36.225+00	draft	2025-05-18 18:24:06.589+00	2025-05-18 18:24:06.59+00	\N	\N	t	f
22	23	22	23	t	17	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.067+00	2025-05-18 18:23:36.227+00	draft	2025-05-18 18:24:06.607+00	2025-05-18 18:24:06.607+00	\N	\N	t	f
23	22	22	23	t	15	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.059+00	2025-05-18 18:23:36.223+00	draft	2025-05-18 18:24:06.605+00	2025-05-18 18:24:06.606+00	\N	\N	t	f
24	25	22	23	t	16	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.069+00	2025-05-18 18:23:36.227+00	draft	2025-05-18 18:24:06.633+00	2025-05-18 18:24:06.633+00	\N	\N	t	f
25	24	22	23	t	18	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.07+00	2025-05-18 18:23:36.227+00	draft	2025-05-18 18:24:06.631+00	2025-05-18 18:24:06.632+00	\N	\N	t	f
26	26	22	23	t	14	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.071+00	2025-05-18 18:23:36.227+00	draft	2025-05-18 18:24:06.634+00	2025-05-18 18:24:06.634+00	\N	\N	t	f
27	28	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.163+00	2025-05-18 18:23:37.329+00	draft	2025-05-18 18:24:07.713+00	2025-05-18 18:24:07.714+00	\N	\N	t	f
28	27	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.156+00	2025-05-18 18:23:37.309+00	draft	2025-05-18 18:24:07.715+00	2025-05-18 18:24:07.716+00	\N	\N	t	f
29	29	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.255+00	2025-05-18 18:23:37.419+00	draft	2025-05-18 18:24:07.806+00	2025-05-18 18:24:07.806+00	\N	\N	t	f
30	30	22	23	f	\N	2025-05-18 18:24:05.881+00	2025-05-18 18:24:07.823+00	2025-05-18 18:23:37.99+00	draft	2025-05-18 18:24:08.362+00	2025-05-18 18:24:08.363+00	\N	\N	t	f
\.


--
-- Data for Name: _testimonials_v_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonials_v_locales" ("version_quote", "version_company_name", "version_featured_image_id", "version_author_info_name", "version_author_info_title", "id", "_locale", "_parent_id") FROM stdin;
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 2.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 2	24	المؤلف 2	اللقب 2	21	ar	21
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 1.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 1	24	المؤلف 1	اللقب 1	22	ar	23
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 5.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 5	24	المؤلف 5	اللقب 5	23	ar	22
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 6.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 6	24	المؤلف 6	اللقب 6	25	ar	25
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 4.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 4	24	المؤلف 4	اللقب 4	24	ar	24
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 7.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 7	24	المؤلف 7	اللقب 7	27	ar	27
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 8.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 8	24	المؤلف 8	اللقب 8	28	ar	28
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 9.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 9	24	المؤلف 9	اللقب 9	29	ar	29
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 3.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 3	24	المؤلف 3	اللقب 3	26	ar	26
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 10.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 10	24	المؤلف 10	اللقب 10	30	ar	30
\.


--
-- Data for Name: _testimonials_v_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."_testimonials_v_rels" ("id", "order", "parent_id", "path", "categories_id") FROM stdin;
\.


--
-- Data for Name: archiveBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."archiveBlock" ("_order", "_parent_id", "_path", "id", "populate_by", "relation_to", "limit", "block_name") FROM stdin;
\.


--
-- Data for Name: archiveBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."archiveBlock_locales" ("intro_content", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: callToActionBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."callToActionBlock" ("_order", "_parent_id", "_path", "id", "type", "badge_type", "badge_color", "badge_icon", "badge_icon_position", "supporting_text", "form_id", "block_name") FROM stdin;
\.


--
-- Data for Name: callToActionBlock_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."callToActionBlock_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: callToActionBlock_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."callToActionBlock_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: callToActionBlock_list; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."callToActionBlock_list" ("_order", "_parent_id", "_locale", "id", "icon", "title", "subtitle") FROM stdin;
\.


--
-- Data for Name: callToActionBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."callToActionBlock_locales" ("badge_label", "rich_text", "media_id", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: case_studies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies" ("id", "title", "slug", "slug_lock", "updated_at", "created_at", "_status") FROM stdin;
13	دراسة حالة 2: كيف حققنا النمو مع العميل	case-study-2	t	2025-05-18 18:24:00.999+00	2025-05-18 18:23:31.163+00	draft
14	دراسة حالة 3: كيف حققنا النمو مع العميل	case-study-3	t	2025-05-18 18:24:01.006+00	2025-05-18 18:23:31.167+00	draft
15	دراسة حالة 1: كيف حققنا النمو مع العميل	case-study-1	t	2025-05-18 18:24:01.009+00	2025-05-18 18:23:31.177+00	draft
16	دراسة حالة 4: كيف حققنا النمو مع العميل	case-study-4	t	2025-05-18 18:24:01.007+00	2025-05-18 18:23:31.17+00	draft
17	دراسة حالة 5: كيف حققنا النمو مع العميل	case-study-5	t	2025-05-18 18:24:01.013+00	2025-05-18 18:23:31.177+00	draft
18	دراسة حالة 6: كيف حققنا النمو مع العميل	case-study-6	t	2025-05-18 18:24:02.145+00	2025-05-18 18:23:32.304+00	draft
\.


--
-- Data for Name: case_studies_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "block_name") FROM stdin;
\.


--
-- Data for Name: case_studies_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: case_studies_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: case_studies_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: case_studies_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_locales" ("content", "industry", "use_case", "featured_image_id", "id", "_locale", "_parent_id") FROM stdin;
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 3", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 3	حالة استخدام متقدمة 3	26	32	ar	14
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 2", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 2	حالة استخدام متقدمة 2	26	33	ar	13
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 5", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 5	حالة استخدام متقدمة 5	26	35	ar	17
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 1", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 1	حالة استخدام متقدمة 1	26	34	ar	15
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 4", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 4	حالة استخدام متقدمة 4	26	36	ar	16
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "محتوى دراسة الحالة 6", "type": "text"}]}], "direction": "rtl"}}	صناعة التكنولوجيا والحلول الرقمية 6	حالة استخدام متقدمة 6	26	37	ar	18
\.


--
-- Data for Name: case_studies_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_rels" ("id", "order", "parent_id", "path", "solutions_id", "integrations_id", "pages_id", "posts_id", "faq_id") FROM stdin;
125	1	14	featuredSolutions	41	\N	\N	\N	\N
126	2	14	featuredSolutions	42	\N	\N	\N	\N
127	1	14	featuredIntegrations	\N	48	\N	\N	\N
128	2	14	featuredIntegrations	\N	47	\N	\N	\N
129	1	13	featuredSolutions	41	\N	\N	\N	\N
130	2	13	featuredSolutions	42	\N	\N	\N	\N
131	1	13	featuredIntegrations	\N	48	\N	\N	\N
132	2	13	featuredIntegrations	\N	47	\N	\N	\N
133	1	16	featuredSolutions	41	\N	\N	\N	\N
134	2	16	featuredSolutions	42	\N	\N	\N	\N
135	1	16	featuredIntegrations	\N	48	\N	\N	\N
136	2	16	featuredIntegrations	\N	47	\N	\N	\N
137	1	15	featuredSolutions	41	\N	\N	\N	\N
138	2	15	featuredSolutions	42	\N	\N	\N	\N
139	1	15	featuredIntegrations	\N	48	\N	\N	\N
140	2	15	featuredIntegrations	\N	47	\N	\N	\N
141	1	17	featuredSolutions	41	\N	\N	\N	\N
142	2	17	featuredSolutions	42	\N	\N	\N	\N
143	1	17	featuredIntegrations	\N	48	\N	\N	\N
144	2	17	featuredIntegrations	\N	47	\N	\N	\N
145	1	18	featuredSolutions	41	\N	\N	\N	\N
146	2	18	featuredSolutions	42	\N	\N	\N	\N
147	1	18	featuredIntegrations	\N	48	\N	\N	\N
148	2	18	featuredIntegrations	\N	47	\N	\N	\N
\.


--
-- Data for Name: case_studies_stats; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_stats" ("_order", "_parent_id", "id", "value", "is_percentage", "is_increase") FROM stdin;
1	14	682a25c19511346d0304f524	12	t	t
2	14	682a25c19511346d0304f525	7	f	t
1	16	682a25c19511346d0304f526	13	t	t
2	16	682a25c19511346d0304f527	8	f	t
1	13	682a25c09511346d0304f522	11	t	t
2	13	682a25c09511346d0304f523	6	f	t
1	15	682a25c19511346d0304f528	10	t	t
2	15	682a25c19511346d0304f529	5	f	t
1	17	682a25c19511346d0304f52a	14	t	t
2	17	682a25c19511346d0304f52b	9	f	t
1	18	682a25c29511346d0304f52c	15	t	t
2	18	682a25c29511346d0304f52d	10	f	t
\.


--
-- Data for Name: case_studies_stats_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."case_studies_stats_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
النمو السنوي 3	63	ar	682a25c19511346d0304f524
النمو الشهري 3	64	ar	682a25c19511346d0304f525
النمو السنوي 4	65	ar	682a25c19511346d0304f526
النمو الشهري 4	66	ar	682a25c19511346d0304f527
النمو السنوي 2	67	ar	682a25c09511346d0304f522
النمو الشهري 2	68	ar	682a25c09511346d0304f523
النمو السنوي 1	69	ar	682a25c19511346d0304f528
النمو الشهري 1	70	ar	682a25c19511346d0304f529
النمو السنوي 5	71	ar	682a25c19511346d0304f52a
النمو الشهري 5	72	ar	682a25c19511346d0304f52b
النمو السنوي 6	73	ar	682a25c29511346d0304f52c
النمو الشهري 6	74	ar	682a25c29511346d0304f52d
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."categories" ("id", "slug", "slug_lock", "parent_id", "updated_at", "created_at") FROM stdin;
123	blog-images	t	117	2025-05-18 18:21:46.136+00	2025-05-18 18:21:10.862+00
124	og-images	t	117	2025-05-18 18:21:49.721+00	2025-05-18 18:21:17.747+00
125	customer-logos	t	117	2025-05-18 18:21:53.362+00	2025-05-18 18:21:21.535+00
126	team-photos	t	117	2025-05-18 18:21:56.824+00	2025-05-18 18:21:24.965+00
127	backgrounds	t	117	2025-05-18 18:22:00.408+00	2025-05-18 18:21:28.423+00
128	lottie	t	117	2025-05-18 18:22:04.098+00	2025-05-18 18:21:32.099+00
129	videos	t	117	2025-05-18 18:22:08.126+00	2025-05-18 18:21:35.703+00
130	illustrations	t	117	2025-05-18 18:22:11.627+00	2025-05-18 18:21:39.754+00
131	sell	t	118	2025-05-18 18:22:15.114+00	2025-05-18 18:21:43.271+00
132	operate	t	118	2025-05-18 18:22:18.498+00	2025-05-18 18:21:46.718+00
133	manage	t	118	2025-05-18 18:22:21.936+00	2025-05-18 18:21:50.062+00
116	blog	t	\N	2025-05-18 18:21:20.952+00	2025-05-18 18:20:50.024+00
117	media	t	\N	2025-05-18 18:21:20.987+00	2025-05-18 18:20:50.029+00
118	ecosystems	t	\N	2025-05-18 18:21:20.977+00	2025-05-18 18:20:50.029+00
119	integrations	t	\N	2025-05-18 18:21:20.988+00	2025-05-18 18:20:50.03+00
115	other	t	\N	2025-05-18 18:21:21.03+00	2025-05-18 18:20:50.024+00
120	app-icons	t	117	2025-05-18 18:21:24.878+00	2025-05-18 18:20:53.015+00
121	hero-images	t	117	2025-05-18 18:21:28.455+00	2025-05-18 18:20:56.499+00
122	feature-images	t	117	2025-05-18 18:21:38.981+00	2025-05-18 18:21:05.109+00
\.


--
-- Data for Name: categories_breadcrumbs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."categories_breadcrumbs" ("_order", "_parent_id", "_locale", "id", "doc_id", "url", "label") FROM stdin;
1	122	ar	682a25329511346d0304f4b5	117	/media	Media
2	122	ar	682a25329511346d0304f4b6	122	/media/feature-images	Feature Images
1	123	ar	682a25399511346d0304f4bb	117	/media	Media
2	123	ar	682a25399511346d0304f4bc	123	/media/blog-images	Blog Images
1	124	ar	682a253d9511346d0304f4c1	117	/media	Media
2	124	ar	682a253d9511346d0304f4c2	124	/media/og-images	OG Images
1	125	ar	682a25409511346d0304f4c7	117	/media	Media
2	125	ar	682a25419511346d0304f4c8	125	/media/customer-logos	Customer Logos
1	126	ar	682a25449511346d0304f4cd	117	/media	Media
2	126	ar	682a25449511346d0304f4ce	126	/media/team-photos	Team Photos
1	127	ar	682a25489511346d0304f4d3	117	/media	Media
2	127	ar	682a25489511346d0304f4d4	127	/media/backgrounds	Backgrounds
1	128	ar	682a254b9511346d0304f4d9	117	/media	Media
2	128	ar	682a254b9511346d0304f4da	128	/media/lottie	Lottie
1	129	ar	682a254f9511346d0304f4df	117	/media	Media
2	129	ar	682a254f9511346d0304f4e0	129	/media/videos	Videos
1	130	ar	682a25539511346d0304f4e5	117	/media	Media
2	130	ar	682a25539511346d0304f4e6	130	/media/illustrations	Illustrations
1	131	ar	682a25569511346d0304f4eb	118	/ecosystems	Ecosystems
2	131	ar	682a25569511346d0304f4ec	131	/ecosystems/sell	البيع
1	132	ar	682a255a9511346d0304f4f1	118	/ecosystems	Ecosystems
2	132	ar	682a255a9511346d0304f4f2	132	/ecosystems/operate	التشغيل
1	133	ar	682a255d9511346d0304f4f7	118	/ecosystems	Ecosystems
2	133	ar	682a255d9511346d0304f4f8	133	/ecosystems/manage	الإدارة
1	116	ar	682a25209511346d0304f4a0	116	/blog	Blog
1	117	ar	682a25209511346d0304f4a2	117	/media	Media
1	118	ar	682a25209511346d0304f4a1	118	/ecosystems	Ecosystems
1	119	ar	682a25209511346d0304f4a3	119	/integrations	Integrations
1	115	ar	682a25219511346d0304f4a4	115	/other	Other
1	120	ar	682a25249511346d0304f4a9	117	/media	Media
2	120	ar	682a25249511346d0304f4aa	120	/media/app-icons	App Icons
1	121	ar	682a25289511346d0304f4af	117	/media	Media
2	121	ar	682a25289511346d0304f4b0	121	/media/hero-images	Hero Images
\.


--
-- Data for Name: categories_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."categories_locales" ("title", "id", "_locale", "_parent_id") FROM stdin;
Blog Images	218	ar	123
OG Images	220	ar	124
Customer Logos	222	ar	125
Team Photos	224	ar	126
Backgrounds	226	ar	127
Lottie	228	ar	128
Videos	230	ar	129
Illustrations	232	ar	130
البيع	234	ar	131
التشغيل	236	ar	132
الإدارة	238	ar	133
Blog	206	ar	116
Media	207	ar	117
Ecosystems	208	ar	118
Integrations	209	ar	119
Other	210	ar	115
App Icons	212	ar	120
Hero Images	214	ar	121
Feature Images	216	ar	122
\.


--
-- Data for Name: changelog; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."changelog" ("id", "date", "version", "updated_at", "created_at") FROM stdin;
21	2025-05-18 18:24:09.404+00	1.0.1	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
22	2025-05-18 18:24:09.404+00	1.0.2	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
23	2025-05-18 18:24:09.404+00	1.0.3	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
24	2025-05-18 18:24:09.404+00	1.0.4	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
25	2025-05-18 18:24:09.404+00	1.0.5	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
26	2025-05-18 18:24:09.404+00	1.0.6	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
27	2025-05-18 18:24:09.404+00	1.0.7	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
28	2025-05-18 18:24:09.404+00	1.0.8	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
29	2025-05-18 18:24:09.404+00	1.0.9	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
30	2025-05-18 18:24:09.404+00	1.0.10	2025-05-18 18:24:09.581+00	2025-05-18 18:23:39.74+00
\.


--
-- Data for Name: changelog_categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."changelog_categories" ("order", "parent_id", "value", "id") FROM stdin;
1	21	feature	41
2	21	improvement	42
1	22	feature	43
2	22	improvement	44
1	23	feature	45
2	23	improvement	46
1	24	feature	47
2	24	improvement	48
1	25	feature	49
2	25	improvement	50
1	26	feature	51
2	26	improvement	52
1	27	feature	53
2	27	improvement	54
1	28	feature	55
2	28	improvement	56
1	29	feature	57
2	29	improvement	58
1	30	feature	59
2	30	improvement	60
\.


--
-- Data for Name: changelog_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."changelog_locales" ("title", "description", "id", "_locale", "_parent_id") FROM stdin;
Changelog Entry 1	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 1"}]}], "direction": "rtl"}}	21	ar	21
Changelog Entry 2	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 2"}]}], "direction": "rtl"}}	22	ar	22
Changelog Entry 3	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 3"}]}], "direction": "rtl"}}	23	ar	23
Changelog Entry 4	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 4"}]}], "direction": "rtl"}}	24	ar	24
Changelog Entry 5	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 5"}]}], "direction": "rtl"}}	25	ar	25
Changelog Entry 6	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 6"}]}], "direction": "rtl"}}	26	ar	26
Changelog Entry 7	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 7"}]}], "direction": "rtl"}}	27	ar	27
Changelog Entry 8	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 8"}]}], "direction": "rtl"}}	28	ar	28
Changelog Entry 9	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 9"}]}], "direction": "rtl"}}	29	ar	29
Changelog Entry 10	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "version": 1, "children": [{"text": "Desc for changelog 10"}]}], "direction": "rtl"}}	30	ar	30
\.


--
-- Data for Name: customHtmlBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."customHtmlBlock" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "html_content", "block_name") FROM stdin;
\.


--
-- Data for Name: customHtmlBlock_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."customHtmlBlock_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: customHtmlBlock_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."customHtmlBlock_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: customHtmlBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."customHtmlBlock_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: dividerBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."dividerBlock" ("_order", "_parent_id", "_path", "id", "block_name") FROM stdin;
\.


--
-- Data for Name: faq; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."faq" ("id", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: faq_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."faq_locales" ("question", "answer", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "media_id", "block_name") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock_cards; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock_cards" ("_order", "_parent_id", "id") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock_cards_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock_cards_locales" ("title", "description", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: featuredAppsBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuredAppsBlock_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: featuresBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "link_type", "link_new_tab", "link_url", "block_name") FROM stdin;
1	7	layout	682a25bb9511346d0304f50f	center	\N	blue	\N	flex-row	02	custom	\N	/	\N
1	8	layout	682a25bc9511346d0304f510	center	label	blue	\N	flex-row	01	reference	\N	\N	\N
2	8	layout	682a25bc9511346d0304f511	center	label	blue	\N	flex-row	02	reference	\N	\N	\N
3	8	layout	682a25bc9511346d0304f512	center	label	blue	\N	flex-row	03	reference	\N	\N	\N
4	8	layout	682a25bc9511346d0304f513	center	label	blue	\N	flex-row	04	reference	\N	\N	\N
5	8	layout	682a25bc9511346d0304f514	center	label	blue	\N	flex-row	05	reference	\N	\N	\N
6	8	layout	682a25bc9511346d0304f515	center	label	blue	\N	flex-row	06	reference	\N	\N	\N
7	8	layout	682a25bc9511346d0304f516	center	label	blue	\N	flex-row	07	reference	\N	\N	\N
8	8	layout	682a25bc9511346d0304f517	center	label	blue	\N	flex-row	08	reference	\N	\N	\N
9	8	layout	682a25bc9511346d0304f518	center	label	blue	\N	flex-row	09	reference	\N	\N	\N
10	8	layout	682a25bc9511346d0304f519	center	label	blue	\N	flex-row	10	reference	\N	\N	\N
11	8	layout	682a25bc9511346d0304f51a	center	label	blue	\N	flex-row	11	reference	\N	\N	\N
12	8	layout	682a25bc9511346d0304f51b	center	label	blue	\N	flex-row	12	reference	\N	\N	\N
13	8	layout	682a25bc9511346d0304f51c	center	label	blue	\N	flex-row	13	reference	\N	\N	\N
14	8	layout	682a25bc9511346d0304f51d	center	label	blue	\N	flex-row	14	custom	f	/learn-more/14	\N
15	8	layout	682a25bc9511346d0304f51e	center	label	blue	\N	flex-row	15	custom	f	/learn-more/15	\N
16	8	layout	682a25bc9511346d0304f51f	center	label	blue	\N	flex-row	16	custom	f	/learn-more/16	\N
17	8	layout	682a25bc9511346d0304f520	center	label	blue	\N	flex-row	17	custom	f	/learn-more/17	\N
\.


--
-- Data for Name: featuresBlock_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
1	682a25bb9511346d0304f50f	682a25bb9511346d0304f4fe	custom	\N	/	neutral	primary
2	682a25bb9511346d0304f50f	682a25bb9511346d0304f504	custom	\N	/	neutral	ghost
\.


--
-- Data for Name: featuresBlock_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
تواصل معنا	15	ar	682a25bb9511346d0304f4fe
تعرف المزيد	16	ar	682a25bb9511346d0304f504
\.


--
-- Data for Name: featuresBlock_columns; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock_columns" ("_order", "_parent_id", "id", "size", "icon", "enable_badge", "enable_cta", "reverse_order", "badge_type", "badge_color", "badge_icon", "badge_icon_position", "link_type", "link_new_tab", "link_url") FROM stdin;
1	682a25bb9511346d0304f50f	682a25bb9511346d0304f50a	full	\N	f	f	\N	\N	blue	\N	flex-row	custom	\N	/
2	682a25bb9511346d0304f50f	682a25bb9511346d0304f50b	half	\N	f	f	\N	\N	blue	\N	flex-row	custom	\N	/
3	682a25bb9511346d0304f50f	682a25bb9511346d0304f50c	half	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/
4	682a25bb9511346d0304f50f	682a25bb9511346d0304f50d	twoThirds	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/
5	682a25bb9511346d0304f50f	682a25bb9511346d0304f50e	oneThird	\N	\N	\N	\N	\N	blue	\N	flex-row	custom	\N	/
1	682a25bc9511346d0304f510	col-01-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f510	col-01-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f510	col-01-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f511	col-02-0	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-0
2	682a25bc9511346d0304f511	col-02-1	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-1
3	682a25bc9511346d0304f511	col-02-2	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-2
4	682a25bc9511346d0304f511	col-02-3	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-3
5	682a25bc9511346d0304f511	col-02-4	twoThirds	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-4
6	682a25bc9511346d0304f511	col-02-5	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-5
7	682a25bc9511346d0304f511	col-02-6	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-6
8	682a25bc9511346d0304f511	col-02-7	oneThird	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/02-7
1	682a25bc9511346d0304f512	col-03-0	full	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-0
2	682a25bc9511346d0304f512	col-03-1	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-1
3	682a25bc9511346d0304f512	col-03-2	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/03-2
1	682a25bc9511346d0304f513	col-04-0	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-0
2	682a25bc9511346d0304f513	col-04-1	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-1
3	682a25bc9511346d0304f513	col-04-2	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/04-2
4	682a25bc9511346d0304f513	col-04-3	half	\N	t	t	t	label	blue	\N	flex-row	custom	f	/column-cta/04-3
1	682a25bc9511346d0304f514	col-05-0	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-0
2	682a25bc9511346d0304f514	col-05-1	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/05-1
1	682a25bc9511346d0304f515	col-06-0	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f515	col-06-1	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f515	col-06-2	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
4	682a25bc9511346d0304f515	col-06-3	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f516	col-07-0	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f516	col-07-1	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f516	col-07-2	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
4	682a25bc9511346d0304f516	col-07-3	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f517	col-08-0	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-0
2	682a25bc9511346d0304f517	col-08-1	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-1
3	682a25bc9511346d0304f517	col-08-2	half	\N	t	t	\N	label	blue	\N	flex-row	custom	f	/column-cta/08-2
1	682a25bc9511346d0304f518	col-09-0	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f518	col-09-1	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f518	col-09-2	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f519	col-10-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f519	col-10-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f519	col-10-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51a	col-11-0	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51a	col-11-1	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51a	col-11-2	half	book-check	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51b	col-12-0	half	activity	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51b	col-12-1	half	atom	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51b	col-12-2	half	audio-lines	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51c	col-13-0	half	archive	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51c	col-13-1	half	airplay	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51c	col-13-2	half	banknote	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51d	col-14-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51d	col-14-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51d	col-14-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51e	col-15-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51e	col-15-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51e	col-15-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f51f	col-16-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f51f	col-16-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f51f	col-16-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
4	682a25bc9511346d0304f51f	col-16-3	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
1	682a25bc9511346d0304f520	col-17-0	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
2	682a25bc9511346d0304f520	col-17-1	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
3	682a25bc9511346d0304f520	col-17-2	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
4	682a25bc9511346d0304f520	col-17-3	half	\N	\N	\N	\N	\N	blue	\N	flex-row	reference	\N	\N
\.


--
-- Data for Name: featuresBlock_columns_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock_columns_locales" ("image_id", "tab_label", "content_title", "content_subtitle", "rich_text_content", "badge_label", "link_label", "id", "_locale", "_parent_id") FROM stdin;
24	\N	استخدمه عند الكاونتر، أو كمحطة متنقلة في المحل—الكاشير يتكيف مع مشروعك	\N	\N	\N	معرفة المزيد	336	ar	682a25bb9511346d0304f50a
24	\N	الربط مع 20+ تطبيق يعزز عملياتك	\N	\N	\N	معرفة المزيد	337	ar	682a25bb9511346d0304f50b
24	\N	استقبال المدفوعات بطرق متعددة بسلاسة	\N	\N	\N	معرفة المزيد	338	ar	682a25bb9511346d0304f50c
24	\N	تابع مبيعاتك بدقة مع تقارير مفصلة وتحليلات	\N	\N	\N	معرفة المزيد	339	ar	682a25bb9511346d0304f50d
24	\N	تواصل ذكي مع العملاء	\N	\N	\N	معرفة المزيد	340	ar	682a25bb9511346d0304f50e
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	341	ar	col-01-0
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	342	ar	col-01-1
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	343	ar	col-01-2
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 1	344	ar	col-02-0
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 2	345	ar	col-02-1
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 3	346	ar	col-02-2
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزات02	إجراء 4	347	ar	col-02-3
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزات02	إجراء 5	348	ar	col-02-4
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزات02	إجراء 6	349	ar	col-02-5
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	ميزات02	إجراء 7	350	ar	col-02-6
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	ميزات02	إجراء 8	351	ar	col-02-7
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	352	ar	col-03-0
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	353	ar	col-03-1
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	354	ar	col-03-2
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	368	ar	col-07-3
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض. يوفر نظامنا تحديثات آنية لمستويات المخزون عبر جميع الفروع، مع تنبيهات ذكية للمنتجات منخفضة المخزون وإمكانية إجراء جرد شامل بسهولة فائقة، مما يمكنك من اتخاذ قرارات شراء مستنيرة وتحسين دورة رأس المال بشكل فعال.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	355	ar	col-04-0
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل. يقدم النظام لوحات معلومات تفاعلية وتقارير قابلة للتخصيص بالكامل، تغطي كل جانب من جوانب عمليات البيع، بما في ذلك أداء المنتجات، سلوك العملاء، وكفاءة الموظفين، مما يساعدك على تحديد الاتجاهات واستغلال الفرص الجديدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	356	ar	col-04-1
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا. تم تصميم واجهة المستخدم بعناية لتكون بديهية وسريعة الاستجابة، مما يقلل من وقت تدريب الموظفين الجدد ويزيد من كفاءتهم التشغيلية. يدعم النظام تخصيص الواجهة لتناسب احتياجات عملك الفريدة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 3	إجراء 3	357	ar	col-04-2
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا الفني المتخصص جاهز لمساعدتك في أي وقت، على مدار الساعة. سواء كنت بحاجة إلى مساعدة في الإعداد الأولي، أو لديك استفسارات تشغيلية، أو واجهت تحديًا تقنيًا، يمكنك الاعتماد على خبرائنا لتقديم حلول سريعة وفعالة لضمان استمرارية أعمالك دون انقطاع.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 4	إجراء 4	358	ar	col-04-3
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 1	إجراء 1	359	ar	col-05-0
24	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	ميزة 2	إجراء 2	360	ar	col-05-1
\N	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	361	ar	col-06-0
\N	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	362	ar	col-06-1
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	363	ar	col-06-2
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	364	ar	col-06-3
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	365	ar	col-07-0
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	366	ar	col-07-1
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	367	ar	col-07-2
24	تبويب 1	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	ميزة 1	إجراء 1	369	ar	col-08-0
24	تبويب 2	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	ميزة 2	إجراء 2	370	ar	col-08-1
24	تبويب 3	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	ميزة 3	إجراء 3	371	ar	col-08-2
24	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	372	ar	col-09-0
24	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	373	ar	col-09-1
24	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	374	ar	col-09-2
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	375	ar	col-10-0
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	376	ar	col-10-1
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	377	ar	col-10-2
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	378	ar	col-11-0
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	379	ar	col-11-1
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	380	ar	col-11-2
\N	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	381	ar	col-12-0
\N	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	382	ar	col-12-1
\N	\N	واجهة سهلة الاستخدام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	383	ar	col-12-2
\N	\N	دعم فني سريع ومتجاوب	فريق دعمنا جاهز لمساعدتك في أي وقت.	\N	\N	\N	384	ar	col-13-0
\N	\N	التكامل مع الأنظمة الأخرى	اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.	\N	\N	\N	385	ar	col-13-1
\N	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	386	ar	col-13-2
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	387	ar	col-14-0
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	388	ar	col-14-1
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	389	ar	col-14-2
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	390	ar	col-15-0
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	391	ar	col-15-1
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	392	ar	col-15-2
24	\N	أمان عالي للبيانات	نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.	\N	\N	\N	393	ar	col-16-0
24	\N	برامج ولاء العملاء	عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.	\N	\N	\N	394	ar	col-16-1
24	\N	الوصول السحابي للنظام	أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.	\N	\N	\N	395	ar	col-16-2
24	\N	أمان عالي للبيانات	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	396	ar	col-16-3
24	\N	برامج ولاء العملاء	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	397	ar	col-17-0
24	\N	الوصول السحابي للنظام	تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.	\N	\N	\N	398	ar	col-17-1
24	\N	إدارة المخزون بكفاءة	تابع مخزونك بدقة وتجنب النقص أو الفائض.	\N	\N	\N	399	ar	col-17-2
24	\N	تقارير مبيعات مفصلة	احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.	\N	\N	\N	400	ar	col-17-3
\.


--
-- Data for Name: featuresBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."featuresBlock_locales" ("block_header_badge_label", "block_header_header_text", "block_image_id", "c_t_a_label", "link_label", "id", "_locale", "_parent_id") FROM stdin;
\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "منظومة مصممة لتلبية احتياجاتك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع وإدارة عمليات تشغيلية مصمم ليناسب احتياجات النوعية للمطاعم والأنشطة التجارية المختلفة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	26	\N		93	ar	682a25bb9511346d0304f50f
Features 01	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (01) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	94	ar	682a25bc9511346d0304f510
Features 02	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (02) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	95	ar	682a25bc9511346d0304f511
Features 03	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (03) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	96	ar	682a25bc9511346d0304f512
Features 04	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (04) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	97	ar	682a25bc9511346d0304f513
Features 05	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (05) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	98	ar	682a25bc9511346d0304f514
Features 06	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (06) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	99	ar	682a25bc9511346d0304f515
Features 07	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (07) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "عزز ولاء عملائك وقدم لهم مكافآت وعروض خاصة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	26	\N	\N	100	ar	682a25bc9511346d0304f516
Features 08	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (08) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "أدر أعمالك من أي مكان وفي أي وقت عبر نظامنا السحابي.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	101	ar	682a25bc9511346d0304f517
Features 09	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (09) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	102	ar	682a25bc9511346d0304f518
Features 10	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (10) - برامج ولاء العملاء", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	103	ar	682a25bc9511346d0304f519
Features 11	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (11) - الوصول السحابي للنظام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	104	ar	682a25bc9511346d0304f51a
Features 12	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (12) - إدارة المخزون بكفاءة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تابع مخزونك بدقة وتجنب النقص أو الفائض.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	105	ar	682a25bc9511346d0304f51b
Features 13	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (13) - تقارير مبيعات مفصلة", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "احصل على رؤى قيمة حول أداء مبيعاتك لاتخاذ قرارات أفضل.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	\N	\N	106	ar	682a25bc9511346d0304f51c
Features 14	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (14) - واجهة سهلة الاستخدام", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "تمتع بتجربة استخدام سلسة لا تتطلب تدريبًا معقدًا.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 14	تفاصيل الميزة 14	107	ar	682a25bc9511346d0304f51d
Features 15	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (15) - دعم فني سريع ومتجاوب", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "فريق دعمنا جاهز لمساعدتك في أي وقت.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 15	تفاصيل الميزة 15	108	ar	682a25bc9511346d0304f51e
Features 16	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (16) - التكامل مع الأنظمة الأخرى", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اربط نظام نقاط البيع مع برامج المحاسبة والتوصيل بسهولة.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 16	تفاصيل الميزة 16	109	ar	682a25bc9511346d0304f51f
Features 17	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "ميزات النظام (17) - أمان عالي للبيانات", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نضمن حماية بيانات عملك وعملائك بأحدث تقنيات الأمان.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	اكتشف المزيد عن الميزة 17	تفاصيل الميزة 17	110	ar	682a25bc9511346d0304f520
\.


--
-- Data for Name: footer; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."footer" ("id", "updated_at", "created_at") FROM stdin;
1	2025-05-19 13:03:02.281+00	2025-05-17 15:18:40.801+00
\.


--
-- Data for Name: footer_columns; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."footer_columns" ("_order", "_parent_id", "id", "label") FROM stdin;
1	1	682a25d39511346d0304f55b	الحلول
\.


--
-- Data for Name: footer_columns_nav_items; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."footer_columns_nav_items" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url") FROM stdin;
1	682a25d39511346d0304f55b	682a25d39511346d0304f551	custom	f	/solutions/cashier
2	682a25d39511346d0304f55b	682a25d39511346d0304f552	custom	f	/solutions/paysync
3	682a25d39511346d0304f55b	682a25d39511346d0304f553	custom	f	/solutions/kiosk
4	682a25d39511346d0304f55b	682a25d39511346d0304f554	custom	f	/solutions/orderstation
5	682a25d39511346d0304f55b	682a25d39511346d0304f555	custom	f	/solutions/products
6	682a25d39511346d0304f55b	682a25d39511346d0304f556	custom	f	/solutions/inventory
7	682a25d39511346d0304f55b	682a25d39511346d0304f557	custom	f	/solutions/analytics
8	682a25d39511346d0304f55b	682a25d39511346d0304f558	custom	f	/solutions/branches
9	682a25d39511346d0304f55b	682a25d39511346d0304f559	custom	f	/solutions/customers
10	682a25d39511346d0304f55b	682a25d39511346d0304f55a	custom	f	/solutions/accounting
\.


--
-- Data for Name: footer_columns_nav_items_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."footer_columns_nav_items_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
الكاشير	31	ar	682a25d39511346d0304f551
شاشة السداد	32	ar	682a25d39511346d0304f552
الطلب الذاتي	33	ar	682a25d39511346d0304f553
محطة الطلبات	34	ar	682a25d39511346d0304f554
المنتجات	35	ar	682a25d39511346d0304f555
المخزون	36	ar	682a25d39511346d0304f556
التحليلات	37	ar	682a25d39511346d0304f557
الفروع	38	ar	682a25d39511346d0304f558
العملاء	39	ar	682a25d39511346d0304f559
المالية	40	ar	682a25d39511346d0304f55a
\.


--
-- Data for Name: footer_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."footer_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id") FROM stdin;
\.


--
-- Data for Name: formBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."formBlock" ("_order", "_parent_id", "_path", "id", "form_id", "enable_intro", "intro_content", "block_name") FROM stdin;
1	9	layout	682a25bc9511346d0304f521	3	t	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h3", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Example contact form:", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr"}], "direction": "ltr"}}	\N
\.


--
-- Data for Name: form_submissions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."form_submissions" ("id", "form_id", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: form_submissions_submission_data; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."form_submissions_submission_data" ("_order", "_parent_id", "id", "field", "value") FROM stdin;
\.


--
-- Data for Name: forms; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms" ("id", "title", "confirmation_type", "redirect_url", "updated_at", "created_at") FROM stdin;
1	Contact Form	message	\N	2025-05-17 15:32:42.305+00	2023-01-12 21:47:41.374+00
2	Contact Form	message	\N	2025-05-18 18:15:55.094+00	2023-01-12 21:47:41.374+00
3	Contact Form	message	\N	2025-05-18 18:23:52.537+00	2023-01-12 21:47:41.374+00
\.


--
-- Data for Name: forms_blocks_checkbox; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_checkbox" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "default_value", "block_name") FROM stdin;
\.


--
-- Data for Name: forms_blocks_checkbox_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_checkbox_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_country; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_country" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "block_name") FROM stdin;
\.


--
-- Data for Name: forms_blocks_country_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_country_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_email; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_email" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "block_name") FROM stdin;
2	1	fields	6828ac1a051b0f1905118be1	email	100	t	email
2	2	fields	682a23db9511346d0304f439	email	100	t	email
2	3	fields	682a25b89511346d0304f4fa	email	100	t	email
\.


--
-- Data for Name: forms_blocks_email_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_email_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
Email	1	ar	6828ac1a051b0f1905118be1
Email	2	ar	682a23db9511346d0304f439
Email	3	ar	682a25b89511346d0304f4fa
\.


--
-- Data for Name: forms_blocks_message; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_message" ("_order", "_parent_id", "_path", "id", "block_name") FROM stdin;
\.


--
-- Data for Name: forms_blocks_message_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_message_locales" ("message", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_number; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_number" ("_order", "_parent_id", "_path", "id", "name", "width", "default_value", "required", "block_name") FROM stdin;
3	1	fields	6828ac1a051b0f1905118be2	phone	100	\N	f	phone
3	2	fields	682a23db9511346d0304f43a	phone	100	\N	f	phone
3	3	fields	682a25b89511346d0304f4fb	phone	100	\N	f	phone
\.


--
-- Data for Name: forms_blocks_number_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_number_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
Phone	1	ar	6828ac1a051b0f1905118be2
Phone	2	ar	682a23db9511346d0304f43a
Phone	3	ar	682a25b89511346d0304f4fb
\.


--
-- Data for Name: forms_blocks_select; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_select" ("_order", "_parent_id", "_path", "id", "name", "width", "placeholder", "required", "block_name") FROM stdin;
\.


--
-- Data for Name: forms_blocks_select_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_select_locales" ("label", "default_value", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_select_options; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_select_options" ("_order", "_parent_id", "id", "value") FROM stdin;
\.


--
-- Data for Name: forms_blocks_select_options_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_select_options_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_state; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_state" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "block_name") FROM stdin;
\.


--
-- Data for Name: forms_blocks_state_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_state_locales" ("label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: forms_blocks_text; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_text" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "block_name") FROM stdin;
1	1	fields	6828ac1a051b0f1905118be0	full-name	100	t	full-name
1	2	fields	682a23db9511346d0304f438	full-name	100	t	full-name
1	3	fields	682a25b89511346d0304f4f9	full-name	100	t	full-name
\.


--
-- Data for Name: forms_blocks_text_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_text_locales" ("label", "default_value", "id", "_locale", "_parent_id") FROM stdin;
Full Name	\N	1	ar	6828ac1a051b0f1905118be0
Full Name	\N	2	ar	682a23db9511346d0304f438
Full Name	\N	3	ar	682a25b89511346d0304f4f9
\.


--
-- Data for Name: forms_blocks_textarea; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_textarea" ("_order", "_parent_id", "_path", "id", "name", "width", "required", "block_name") FROM stdin;
4	1	fields	6828ac1a051b0f1905118be3	message	100	t	message
4	2	fields	682a23db9511346d0304f43b	message	100	t	message
4	3	fields	682a25b89511346d0304f4fc	message	100	t	message
\.


--
-- Data for Name: forms_blocks_textarea_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_blocks_textarea_locales" ("label", "default_value", "id", "_locale", "_parent_id") FROM stdin;
Message	\N	1	ar	6828ac1a051b0f1905118be3
Message	\N	2	ar	682a23db9511346d0304f43b
Message	\N	3	ar	682a25b89511346d0304f4fc
\.


--
-- Data for Name: forms_emails; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_emails" ("_order", "_parent_id", "id", "email_to", "cc", "bcc", "reply_to", "email_from") FROM stdin;
1	1	6828ac1a051b0f1905118be4	{{email}}	\N	\N	\N	"Payload" <demo@payloadcms.com>
1	2	682a23db9511346d0304f43c	{{email}}	\N	\N	\N	"Payload" <demo@payloadcms.com>
1	3	682a25b89511346d0304f4fd	{{email}}	\N	\N	\N	"Payload" <demo@payloadcms.com>
\.


--
-- Data for Name: forms_emails_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_emails_locales" ("subject", "message", "id", "_locale", "_parent_id") FROM stdin;
You've received a new message.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Your contact form submission was successfully received.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textFormat": 0}], "direction": "ltr"}}	1	ar	6828ac1a051b0f1905118be4
You've received a new message.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Your contact form submission was successfully received.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textFormat": 0}], "direction": "ltr"}}	2	ar	682a23db9511346d0304f43c
You've received a new message.	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Your contact form submission was successfully received.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr", "textFormat": 0}], "direction": "ltr"}}	3	ar	682a25b89511346d0304f4fd
\.


--
-- Data for Name: forms_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."forms_locales" ("submit_button_label", "confirmation_message", "id", "_locale", "_parent_id") FROM stdin;
Submit	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The contact form has been submitted successfully.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr"}], "direction": "ltr"}}	1	ar	1
Submit	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The contact form has been submitted successfully.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr"}], "direction": "ltr"}}	2	ar	2
Submit	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "The contact form has been submitted successfully.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "ltr"}], "direction": "ltr"}}	3	ar	3
\.


--
-- Data for Name: galleryBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "block_name") FROM stdin;
\.


--
-- Data for Name: galleryBlock_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: galleryBlock_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: galleryBlock_interactive_gallery; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock_interactive_gallery" ("_order", "_parent_id", "id") FROM stdin;
\.


--
-- Data for Name: galleryBlock_interactive_gallery_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock_interactive_gallery_locales" ("image_id", "panel_title", "panel_description", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: galleryBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."galleryBlock_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: header; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header" ("id", "updated_at", "created_at") FROM stdin;
1	2025-05-19 13:02:43.823+00	2025-05-17 15:18:40.8+00
\.


--
-- Data for Name: header_cta; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_cta" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
1	1	682a25d39511346d0304f54f	custom	\N	/	neutral	secondary
2	1	682a25d39511346d0304f550	custom	f	/contact-us	neutral	primary
\.


--
-- Data for Name: header_cta_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_cta_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
دخول التاجر	7	ar	682a25d39511346d0304f54f
تواصل معنا	8	ar	682a25d39511346d0304f550
\.


--
-- Data for Name: header_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id") FROM stdin;
31	\N	1	tabs.0.navItems.0.listLinks.links.0.link.reference	\N	\N	41
32	\N	1	tabs.0.navItems.0.listLinks.links.1.link.reference	\N	\N	42
33	\N	1	tabs.0.navItems.0.listLinks.links.2.link.reference	\N	\N	43
34	\N	1	tabs.0.navItems.1.listLinks.links.0.link.reference	\N	\N	44
35	\N	1	tabs.0.navItems.1.listLinks.links.1.link.reference	\N	\N	45
36	\N	1	tabs.0.navItems.1.listLinks.links.2.link.reference	\N	\N	46
37	\N	1	tabs.0.navItems.2.listLinks.links.0.link.reference	\N	\N	47
38	\N	1	tabs.0.navItems.2.listLinks.links.1.link.reference	\N	\N	48
39	\N	1	tabs.0.navItems.2.listLinks.links.2.link.reference	\N	\N	49
40	\N	1	tabs.0.navItems.2.listLinks.links.3.link.reference	\N	\N	50
\.


--
-- Data for Name: header_tabs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs" ("_order", "_parent_id", "id", "enable_direct_link", "enable_dropdown", "link_type", "link_new_tab", "link_url") FROM stdin;
1	1	682a25d39511346d0304f53b	f	t	reference	\N	\N
2	1	682a25d39511346d0304f545	f	t	reference	\N	\N
3	1	682a25d39511346d0304f546	t	f	custom	f	/integrations
4	1	682a25d39511346d0304f54e	t	t	custom	f	/resources
\.


--
-- Data for Name: header_tabs_description_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_description_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url") FROM stdin;
\.


--
-- Data for Name: header_tabs_description_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_description_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: header_tabs_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_locales" ("label", "description", "id", "_locale", "_parent_id") FROM stdin;
الحلول	كل أدواتك في منظومة مرنة. استكشف حلول البيع، التشغيل، والإدارة المصممة لتلبية احتياجاتك.	13	ar	682a25d39511346d0304f53b
لماذا مرن	ليش أصحاب المشاريع يختارون مرن؟ اكتشف قيمنا وكيف نسهّل عليك الشغل وتكبير مشروعك.	14	ar	682a25d39511346d0304f545
التطبيقات	اربط مرن مع تطبيقات الدفع، التوصيل، والمحاسبة. سهّل شغلك وربط كل شيء ببعضه.	15	ar	682a25d39511346d0304f546
الموارد	كل ما تحتاج تعرفه عن مرن وأصحاب المشاريع اللي يستخدمونه—من مقالات ونصائح، إلى قصص وتجارب حقيقية، وحتى التواصل معنا	16	ar	682a25d39511346d0304f54e
\.


--
-- Data for Name: header_tabs_nav_items; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items" ("_order", "_parent_id", "id", "style", "default_link_link_type", "default_link_link_new_tab", "default_link_link_url", "default_link_link_icon", "default_link_description", "featured_link_tag", "featured_link_label", "list_links_tag") FROM stdin;
1	682a25d39511346d0304f53b	682a25d39511346d0304f531	list	reference	f	\N	\N	\N	\N	\N	بيع
2	682a25d39511346d0304f53b	682a25d39511346d0304f535	list	reference	f	\N	\N	\N	\N	\N	تشغيل
3	682a25d39511346d0304f53b	682a25d39511346d0304f53a	list	reference	f	\N	\N	\N	\N	\N	إدارة
1	682a25d39511346d0304f545	682a25d39511346d0304f53f	list	reference	f	\N	\N	\N	\N	\N	الأنشطة
2	682a25d39511346d0304f545	682a25d39511346d0304f544	list	reference	f	\N	\N	\N	\N	\N	الميزات
1	682a25d39511346d0304f54e	682a25d39511346d0304f549	list	reference	f	\N	\N	\N	\N	\N	منشوراتنا
2	682a25d39511346d0304f54e	682a25d39511346d0304f54d	list	reference	f	\N	\N	\N	\N	\N	عن مرن
\.


--
-- Data for Name: header_tabs_nav_items_featured_link_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items_featured_link_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_icon") FROM stdin;
\.


--
-- Data for Name: header_tabs_nav_items_featured_link_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items_featured_link_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: header_tabs_nav_items_list_links_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items_list_links_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_icon") FROM stdin;
1	682a25d39511346d0304f531	682a25d39511346d0304f52e	reference	f	\N	\N
2	682a25d39511346d0304f531	682a25d39511346d0304f52f	reference	f	\N	\N
3	682a25d39511346d0304f531	682a25d39511346d0304f530	reference	f	\N	\N
1	682a25d39511346d0304f535	682a25d39511346d0304f532	reference	f	\N	\N
2	682a25d39511346d0304f535	682a25d39511346d0304f533	reference	f	\N	\N
3	682a25d39511346d0304f535	682a25d39511346d0304f534	reference	f	\N	\N
1	682a25d39511346d0304f53a	682a25d39511346d0304f536	reference	f	\N	\N
2	682a25d39511346d0304f53a	682a25d39511346d0304f537	reference	f	\N	\N
3	682a25d39511346d0304f53a	682a25d39511346d0304f538	reference	f	\N	\N
4	682a25d39511346d0304f53a	682a25d39511346d0304f539	reference	f	\N	\N
1	682a25d39511346d0304f53f	682a25d39511346d0304f53c	custom	f	/restaurants	utensils
2	682a25d39511346d0304f53f	682a25d39511346d0304f53d	custom	f	/retail	scan-barcode
3	682a25d39511346d0304f53f	682a25d39511346d0304f53e	custom	f	/express-services	fuel
1	682a25d39511346d0304f544	682a25d39511346d0304f540	custom	f	/features/control	package-open
2	682a25d39511346d0304f544	682a25d39511346d0304f541	custom	f	/solutions/branches	map-pin
3	682a25d39511346d0304f544	682a25d39511346d0304f542	custom	f	/integrations	puzzle
4	682a25d39511346d0304f544	682a25d39511346d0304f543	custom	f	/blog/increasing-profits-with-marnpos	bar-chart-big
1	682a25d39511346d0304f549	682a25d39511346d0304f547	custom	f	/blog	newspaper
2	682a25d39511346d0304f549	682a25d39511346d0304f548	custom	f	/customers	trophy
1	682a25d39511346d0304f54d	682a25d39511346d0304f54a	custom	f	/about	marn-icon
2	682a25d39511346d0304f54d	682a25d39511346d0304f54b	custom	f	/contact-us	phone
3	682a25d39511346d0304f54d	682a25d39511346d0304f54c	custom	f	https://marn.gitbook.io/marn-developers/	code
\.


--
-- Data for Name: header_tabs_nav_items_list_links_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items_list_links_links_locales" ("link_label", "link_description", "id", "_locale", "_parent_id") FROM stdin;
الكاشير	تسجيل المبيعات بمرونة وسرعة على أي جهاز	67	ar	682a25d39511346d0304f52e
شاشة السداد	عرض الطلبات والدفع بشكل مباشر للعميل	68	ar	682a25d39511346d0304f52f
الطلب الذاتي	خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين	69	ar	682a25d39511346d0304f530
محطة الطلبات	 إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل	70	ar	682a25d39511346d0304f532
المنتجات	نظّم منتجاتك، الأسعار، والعروض بسهولة	71	ar	682a25d39511346d0304f533
المخزون	تابع الكميات وتفادى النقص أو الهدر تلقائيًا	72	ar	682a25d39511346d0304f534
التحليلات	تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات	73	ar	682a25d39511346d0304f536
الفروع	راقب كل فروعك وتقاريرها من نفس اللوحة	74	ar	682a25d39511346d0304f537
العملاء	احفظ بيانات عملاءك وفعّل برامج الولاء	75	ar	682a25d39511346d0304f538
المالية	تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة	76	ar	682a25d39511346d0304f539
للمطاعم	\N	77	ar	682a25d39511346d0304f53c
للبيع بالتجزئة	\N	78	ar	682a25d39511346d0304f53d
للخدمات السريعة	\N	79	ar	682a25d39511346d0304f53e
للبساطة والتحكم	\N	80	ar	682a25d39511346d0304f540
لتعدد الفروع	\N	81	ar	682a25d39511346d0304f541
للربط مع أدواتك	\N	82	ar	682a25d39511346d0304f542
للزيادة أرباحك	\N	83	ar	682a25d39511346d0304f543
المدونة	\N	84	ar	682a25d39511346d0304f547
قصص النجاح	\N	85	ar	682a25d39511346d0304f548
عن مرن	\N	86	ar	682a25d39511346d0304f54a
تواصل معنا	\N	87	ar	682a25d39511346d0304f54b
المطورين	\N	88	ar	682a25d39511346d0304f54c
\.


--
-- Data for Name: header_tabs_nav_items_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."header_tabs_nav_items_locales" ("default_link_link_label", "id", "_locale", "_parent_id") FROM stdin;
	22	ar	682a25d39511346d0304f531
	23	ar	682a25d39511346d0304f535
	24	ar	682a25d39511346d0304f53a
	25	ar	682a25d39511346d0304f53f
	26	ar	682a25d39511346d0304f544
	27	ar	682a25d39511346d0304f549
	28	ar	682a25d39511346d0304f54d
\.


--
-- Data for Name: integrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations" ("id", "title", "icon_id", "link_type", "link_new_tab", "link_url", "company_email", "company_phone", "docs_link_type", "docs_link_new_tab", "docs_link_url", "hero_type", "hero_supporting_text", "hero_badge_type", "hero_badge_color", "hero_badge_icon", "hero_badge_icon_position", "published_at", "slug", "slug_lock", "updated_at", "created_at", "_status") FROM stdin;
46	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:07.189+00	2025-05-18 18:22:36.573+00	draft
47	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:10.333+00	2025-05-18 18:22:39.743+00	draft
48	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:13.581+00	2025-05-18 18:22:42.998+00	draft
49	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:16.631+00	2025-05-18 18:22:46.036+00	draft
50	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:19.746+00	2025-05-18 18:22:49.191+00	draft
51	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:22.718+00	2025-05-18 18:22:52.145+00	draft
52	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:25.769+00	2025-05-18 18:22:55.18+00	draft
53	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:28.806+00	2025-05-18 18:22:58.23+00	draft
54	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:31.668+00	2025-05-18 18:23:01.146+00	draft
55	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:34.565+00	2025-05-18 18:23:04.026+00	draft
56	Jahez	23	custom	\N	/integrations/jahez	contact@jahez.com	\N	custom	\N	/docs/jahez	hero01	\N	\N	blue	\N	flex-row	\N	jahez	t	2025-05-18 18:23:37.476+00	2025-05-18 18:23:06.95+00	draft
57	Bonat	23	custom	\N	/integrations/bonat	contact@bonat.com	\N	custom	\N	/docs/bonat	hero01	\N	\N	blue	\N	flex-row	\N	bonat	t	2025-05-18 18:23:40.362+00	2025-05-18 18:23:09.851+00	draft
58	Odoo	23	custom	\N	/integrations/odoo	contact@odoo.com	\N	custom	\N	/docs/odoo	hero01	\N	\N	blue	\N	flex-row	\N	odoo	t	2025-05-18 18:23:43.333+00	2025-05-18 18:23:12.775+00	draft
59	Zapier	23	custom	\N	/integrations/zapier	contact@zapier.com	\N	custom	\N	/docs/zapier	hero01	\N	\N	blue	\N	flex-row	\N	zapier	t	2025-05-18 18:23:46.34+00	2025-05-18 18:23:15.778+00	draft
60	Slack	23	custom	\N	/integrations/slack	contact@slack.com	\N	custom	\N	/docs/slack	hero01	\N	\N	blue	\N	flex-row	\N	slack	t	2025-05-18 18:23:49.505+00	2025-05-18 18:23:18.939+00	draft
\.


--
-- Data for Name: integrations_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "block_name") FROM stdin;
\.


--
-- Data for Name: integrations_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: integrations_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: integrations_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: integrations_hero_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_hero_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: integrations_hero_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_hero_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: integrations_hero_logos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_hero_logos" ("_order", "_parent_id", "id", "logo_id") FROM stdin;
\.


--
-- Data for Name: integrations_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_locales" ("name", "tagline", "overview", "link_label", "company_name", "docs_link_label", "hero_rich_text", "hero_logos_headline", "hero_media_id", "hero_badge_label", "content", "meta_title", "meta_image_id", "meta_description", "id", "_locale", "_parent_id") FROM stdin;
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	93	ar	46
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	94	ar	47
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	95	ar	48
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	96	ar	49
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	97	ar	50
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	98	ar	51
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	99	ar	52
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	100	ar	53
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	101	ar	54
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	102	ar	55
جاهز	إدارة رقمية للقسائم والخصومات	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	جاهز	Jahez	Documentation for Jahez	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Jahez.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	103	ar	56
بونات	نظام نقاط بيع متكامل للمطاعم والمقاهي	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	بونات	Bonat	Documentation for Bonat	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Bonat.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	104	ar	57
أودو	مجموعة تطبيقات أعمال شاملة لتلبية جميع احتياجاتك	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	أودو	Odoo	Documentation for Odoo	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Odoo.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	105	ar	58
زابير	أتمتة سير العمل بين تطبيقاتك المختلفة	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	زابير	Zapier	Documentation for Zapier	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Zapier.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	106	ar	59
سلاك	منصة تواصل وتعاون للفرق	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Overview text for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	سلاك	Slack	Documentation for Slack	\N	\N	\N	\N	{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "Content for Slack.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": null, "textStyle": "", "textFormat": 0}], "direction": null}}	\N	\N	\N	107	ar	60
\.


--
-- Data for Name: integrations_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."integrations_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id", "integrations_id", "media_id", "faq_id", "categories_id") FROM stdin;
143	1	46	ecosystem	\N	\N	\N	\N	\N	\N	131
144	2	46	ecosystem	\N	\N	\N	\N	\N	\N	132
145	1	47	ecosystem	\N	\N	\N	\N	\N	\N	131
146	2	47	ecosystem	\N	\N	\N	\N	\N	\N	132
147	1	48	ecosystem	\N	\N	\N	\N	\N	\N	131
148	2	48	ecosystem	\N	\N	\N	\N	\N	\N	132
149	1	49	ecosystem	\N	\N	\N	\N	\N	\N	131
150	2	49	ecosystem	\N	\N	\N	\N	\N	\N	132
151	1	50	ecosystem	\N	\N	\N	\N	\N	\N	131
152	2	50	ecosystem	\N	\N	\N	\N	\N	\N	132
153	1	51	ecosystem	\N	\N	\N	\N	\N	\N	131
154	2	51	ecosystem	\N	\N	\N	\N	\N	\N	132
155	1	52	ecosystem	\N	\N	\N	\N	\N	\N	131
156	2	52	ecosystem	\N	\N	\N	\N	\N	\N	132
157	1	53	ecosystem	\N	\N	\N	\N	\N	\N	131
158	2	53	ecosystem	\N	\N	\N	\N	\N	\N	132
159	1	54	ecosystem	\N	\N	\N	\N	\N	\N	131
160	2	54	ecosystem	\N	\N	\N	\N	\N	\N	132
161	1	55	ecosystem	\N	\N	\N	\N	\N	\N	131
162	2	55	ecosystem	\N	\N	\N	\N	\N	\N	132
163	1	56	ecosystem	\N	\N	\N	\N	\N	\N	131
164	2	56	ecosystem	\N	\N	\N	\N	\N	\N	132
165	1	57	ecosystem	\N	\N	\N	\N	\N	\N	131
166	2	57	ecosystem	\N	\N	\N	\N	\N	\N	132
167	1	58	ecosystem	\N	\N	\N	\N	\N	\N	131
168	2	58	ecosystem	\N	\N	\N	\N	\N	\N	132
169	1	59	ecosystem	\N	\N	\N	\N	\N	\N	131
170	2	59	ecosystem	\N	\N	\N	\N	\N	\N	132
171	1	60	ecosystem	\N	\N	\N	\N	\N	\N	131
172	2	60	ecosystem	\N	\N	\N	\N	\N	\N	132
\.


--
-- Data for Name: media; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."media" ("id", "alt", "caption", "locale", "blurhash", "prefix", "updated_at", "created_at", "url", "thumbnail_u_r_l", "filename", "mime_type", "filesize", "width", "height", "focal_x", "focal_y", "sizes_thumbnail_url", "sizes_thumbnail_width", "sizes_thumbnail_height", "sizes_thumbnail_mime_type", "sizes_thumbnail_filesize", "sizes_thumbnail_filename", "sizes_square_url", "sizes_square_width", "sizes_square_height", "sizes_square_mime_type", "sizes_square_filesize", "sizes_square_filename", "sizes_small_url", "sizes_small_width", "sizes_small_height", "sizes_small_mime_type", "sizes_small_filesize", "sizes_small_filename", "sizes_medium_url", "sizes_medium_width", "sizes_medium_height", "sizes_medium_mime_type", "sizes_medium_filesize", "sizes_medium_filename", "sizes_large_url", "sizes_large_width", "sizes_large_height", "sizes_large_mime_type", "sizes_large_filesize", "sizes_large_filename", "sizes_xlarge_url", "sizes_xlarge_width", "sizes_xlarge_height", "sizes_xlarge_mime_type", "sizes_xlarge_filesize", "sizes_xlarge_filename", "sizes_og_url", "sizes_og_width", "sizes_og_height", "sizes_og_mime_type", "sizes_og_filesize", "sizes_og_filename") FROM stdin;
22	Marn Logo	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1klEQVR4nI1TTaiNURTdT/7yXj0hZWJgogzQLXRRHLNlQIuJlZT2AK+OmLgGJl6ZqTfQI1dvpCQDBgYGitSbSAboDuSnZCQpFPf5vbTZV3f0cup853x777XX+tY5n9nfMSceJB+Q/JXzYeaGbPYx9B81s2HtD3m32x0m+WJAwP2IS1pO8kCtdZO7j9Vad5FcIelYxM1sQdatBTAGYAOA3c1mcxXJ9e6+t5SyWdJ2d9/j7lsl7ZN01N2X/VNB8kQSf5cU67WIu/u2fJ+JVdIMgLcke+4e8UPuvqafJ9mNuKQqaTwxMS9Jei2pR/JrYq8E8U2STyX9TAHfAgCghoBSSiiO+ATJRuZulVJWhggAUyQnE7tT0v6sOULyVGLPAdhI8gvJ6Xa7PQrgCYA3NmD5jyDP/cuwPgVsySZh9/zIAzibrn2IryB5neRHM1tkZouzpgI4HftWq7XEzEay92Rib5N8F5sgDlt6SfRe0o7+LRkQcNDMFkaTUspENvkE4HIcX1p6keTVdCDuw5mor7UuNbPRFHAhsXeCqy/gM8nnkqYajcbq5J6bhetIPgt7zWwegEcAjmfuXroRwm6kg9MkX4VjAA7H39TpdEbMbBjAY5InE3sewN3fuCsSwmzBjMkAAAAASUVORK5CYII=	media	2025-05-18 18:22:29.337+00	2025-05-18 18:21:55.726+00	\N	\N	marn-logo-12.png	image/png	3465	280	64	50	50	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
25	Straight metallic shapes with a blue gradient	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nGO4dfsuTRHDqAW3Ry24O2rBrUFlwYWLl4+fOI2MqGnBk6fP581frKCkoq6po66po6CkYufgdOHiZWpa0N07gZGVU1BYTFBYjJGVU1NLl2oWXLh4+d27D3mFxYLCYpJSspJSsoLCYiZmllQIoidPn0PQli3b1TV1hITF4Ra4eXg9efqcUguWrVjZ2taRlJyupKwGd76klCwzO29JaQWlFly4eFlH3xgS7nCj4Wj33v1UsMDQ1AzTdEZWzozMHIKmk2kBIyunm4cXwfRDtAVGptz8wpCkCbEpKTn94sWrRCY/wha4uXsqKKmYmFm4uXuWlFZs2bqTmJAhIRVdABcPFy5ehqfXoVzY3Rq14PaoBbdGLbhNsgUAf0Sx5YDnbO4AAAAASUVORK5CYII=	media	2025-05-18 18:22:32.88+00	2025-05-18 18:21:57.015+00	\N	\N	marn-placeholder-12.png	image/png	95784	2400	2400	50	50	\N	300	300	image/png	2589	marn-placeholder-12-300x300.png	\N	500	500	image/png	4628	marn-placeholder-12-500x500.png	\N	600	600	image/png	5731	marn-placeholder-12-600x600.png	\N	900	900	image/png	9959	marn-placeholder-12-900x900.png	\N	1400	1400	image/png	18782	marn-placeholder-12-1400x1400.png	\N	1920	1920	image/png	29470	marn-placeholder-12-1920x1920.png	\N	1200	630	image/png	10725	marn-placeholder-12-1200x630.png
26	Marn placeholder 16:9	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAACXBIWXMAAAsTAAALEwEAmpwYAAABKElEQVR4nGO4eev274HEDE+ePv9PCb51+y4GJkU/AzYD6IkZKDXgwsXLGJguDnjy9Pn/GTPn/peWlvuvpKwGxiC2pZUN/RzQ3Tvhv6Cw2H9JKVkwBrF19I1JCgUGch3w7t2H/3mFxf+Z2XlRHGBiZkm7EHgCTbkgy7ds2f5fXVMHbjnMAX7+gf8fP3lKGwcsXLTsf2tbx//snAJwnCMHPwhz8wv/Lymt+P/23XvqO+DCxcv/tfUM/jOycoItEpeUQbEchrds3YmzfKDYATr6xhi+hmGQw5KS00mynGoOAFnu4OhCVmJmIMcByFhBSQXsc1ILILISoYmZJdhCEzOL/56ePv/zCktJjnOKHHABqbh98Pjp/+fPX/6/c+ce2ZaT7ABaYIYR7wAAiZxzPvCcc9gAAAAASUVORK5CYII=	media	2025-05-18 18:22:32.956+00	2025-05-18 18:21:56.952+00	\N	\N	marn-placeholder-16x9-12.png	image/png	104366	2752	1549	50	50	\N	300	169	image/png	2363	marn-placeholder-16x9-12-300x169.png	\N	500	500	image/png	7208	marn-placeholder-16x9-12-500x500.png	\N	600	338	image/png	5097	marn-placeholder-16x9-12-600x338.png	\N	900	507	image/png	8429	marn-placeholder-16x9-12-900x507.png	\N	1400	788	image/png	15834	marn-placeholder-16x9-12-1400x788.png	\N	1920	1081	image/png	25650	marn-placeholder-16x9-12-1920x1081.png	\N	1200	630	image/png	12134	marn-placeholder-16x9-12-1200x630.png
23	Marn placeholder square	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHElEQVR4nGO4dfsuTRHDqAW3Ry24O2rBrUFlwYWLl4+fOI2MqGnBk6fP581frKCkoq6po66po6CkYufgdOHiZWpa0N07gZGVU1BYTFBYjJGVU1NLl2oWXLh4+d27D3mFxYLCYpJSspJSsoLCYiZmllQIoidPn0PQli3b1TV1hITF4Ra4eXg9efqcUguWrVjZ2taRlJyupKwGd76klCwzO29JaQWlFly4eFlH3xgS7nCj4Wj33v1UsMDQ1AzTdEZWzozMHIKmk2kBIyunm4cXwfRDtAVGptz8wpCkCbEpKTn94sWrRCY/wha4uXsqKKmYmFm4uXuWlFZs2bqTmJAhIRVdABcPFy5ehqfXoVzY3Rq14PaoBbdGLbhNsgUAf0Sx5YDnbO4AAAAASUVORK5CYII=	media	2025-05-18 18:22:34.424+00	2025-05-18 18:21:57.004+00	/api/media/file/marn-placeholder-1x1-12.png	/api/media/file/marn-placeholder-1x1-12-300x300.png	marn-placeholder-1x1-12.png	image/png	95784	2400	2400	50	50	/api/media/file/marn-placeholder-1x1-12-300x300.png	300	300	image/png	2589	marn-placeholder-1x1-12-300x300.png	/api/media/file/marn-placeholder-1x1-12-500x500.png	500	500	image/png	4628	marn-placeholder-1x1-12-500x500.png	/api/media/file/marn-placeholder-1x1-12-600x600.png	600	600	image/png	5731	marn-placeholder-1x1-12-600x600.png	/api/media/file/marn-placeholder-1x1-12-900x900.png	900	900	image/png	9959	marn-placeholder-1x1-12-900x900.png	/api/media/file/marn-placeholder-1x1-12-1400x1400.png	1400	1400	image/png	18782	marn-placeholder-1x1-12-1400x1400.png	/api/media/file/marn-placeholder-1x1-12-1920x1920.png	1920	1920	image/png	29470	marn-placeholder-1x1-12-1920x1920.png	/api/media/file/marn-placeholder-1x1-12-1200x630.png	1200	630	image/png	10725	marn-placeholder-1x1-12-1200x630.png
27	dual ipads	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAIAAAAUMWhjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGNElEQVR4nN3VfVDTdRwH8B877fS87Do9eRxzY0OFQNFAMTIhTmKAgKkIAUNUkooVisb2e9jGwOxJEjRAMeSYUhyKIWdnnkY/gsZDZmQCCxlsw42n34CxwfZ7+HZJD5DV1R/90937j+8/v3vd+/P7PkBoE/yfBvo/AgguRXApisP/KsjsV/8EkLdjeR0yVC3F1DD6SLBWGFVLH42iQyZXY48a8wAEl8pbsQQkMSgiODotNuKlSKEoRpgSEyXaPhthSkxEsjA6LS5KtD06LS4mLT42fUdMWnzcvhdDE8MzL2Tmdcjh+cajAJp0NNX5SU7NJ5cG+k13bnfd7dT0dGv7enWabp2mu//HHn2vRqe9b+zV6DQ9hq572t5ew9df3zldVBm0JURcJ1a0zuvxxxHBTZJj7crolB3Bm0JHxkYBAAzDUAzDAEAzwE5S+sEBimFMpiGSpomxUTvJmIxGwjwxNEpcqqkPCAtEmxC0Gf3N+COA4DDSIsFuous2bYqOindQJMVQDookaYqiaTtJ9vRqJqesOr3eYrWZTKZJy1S/tp8wm3U6nd1uLyo8tXlXcMEd5V8CWAuMNiPyDkx6GfFbF3j0TSkAwEGRNGBmY5smx4jJKRtptswQk7YJG01M2r/qor7sYerbZq7dY7btgqNzIo99XwA35s4DEFyKqZGsytdezEhcFxbIC/LeHBrqJfA5W34OAGAnHbMARdMkAyaGdFZimCJJ07ef26etet1QK66eIkG9qvpe591k0b6kwqSCO0q4MXdOAxxGW+G9aIanC9/JaQkEsSAI8vVfL1jt1/glPqcHzQBgmyT0P7TbSWDo/kqnaXWQwNDbRTNg1NBn1HQMDg6HRUZk1b6S1y6b2wDG1PA+6UFPD8GTy52XLF320GAFPL15Q+BmrbYfAEDS1GwPEoAJq50gxh0kSRCWibERBgBt38CI0Thlm5manv6m7buQmK0ILp0/olYkWZzO9uAvW+G69IkVkNMiCIJWrd0YGi6MFG63TU8zAJAMTTE/D4oGwDE5PH2/DQDQ1/DxcGfnkF57U1UEABgwdGkffFNX2xCyZ+v8n9yM7DmYyl3p7ezisWy5mxNrMQRBXJ/ATWHRa3wCMl8TP9y1JAA0AA/3LUNbTIPWadI2bjX+OEAyYMY6RRDjJAV6tfcYwBQXl84HcHhnerInR+Dqxlnh7M5asAiCWBu2RPIDQp4Nj+ELfE58cMrsAPoRO2EDY2ZyzAKM5hnDA+Oo2WIkJgaNwyPEhGGIGCEIwmw1jRCEZepXAIeRZom8EUtMT3Nx53l4eq1wYbMWLnZauOT5uOQNW4XeASGh22J5/NXxOdderaKyK+05VQ5xJZVZNv6G/KxEefJAjiIbeyfzqFKMvv2G7P19h7As+PgrkoLfAbhZomzMEx3IcHblcLh8ZzcOa+HiRY8v233g0BbhrjVBWwVrg3cnpDi78dz5QWxBkMA3ZOWqYLb3M2wvfzbX25Pjw+f6eXH9uBxfL54fd+VTPK4fn+s/t4FUdh3bvjPBnc3jrOS7uHOdFixa7uKRcUQpTNjvHxwuyhDf/UFTUlp+/Pg7h3Jyo3Yk7T+YJRZnZ71+OPuwZD+WmSxLSZGJUuVpIsXeVHna7OIXAMGlslZUfFG8O0G0LmCjmwfPle0FsR7j8NccURbtShdH7Eitrb9ueDA8NGI2mohvO7uzFcVnqi5X1165WFNXf/VGYdsJ2W1YcVuuuI3NzVwAOXTxcHzsHh/fAHc2z5XNhaCFq/2DFCcrRGI0cs/+6zeb+voM9/v0fVq9uv27vKKKkorqkrKK0nLVeVVN/q18Cf7m7LMzN7+PCFVLkRrkhYg4nmCNYLUfx2sVBC3YEBxWXHklt+BU4stHLjfcMJutFqvDNEzU32g6rbp6TnXpw7KPys6pzlVV5+P5kqafL5+/eHBwGG7JVdYdi49PWb8xJCj4Od+1T0MQ67ltsReuNhZX1onRdxXvlZjHbQ/P0XB57fXqz/DyqpqSs+dLys6fVVXlNyvhvweQllxMJY+LTdry/Auh4cL1gc9AEBS1M/nTWx0Vl26cVl05rPjgreKPPmtsq264Vd3QePWL9jMV1YXFpScKS09VlitbFH8K/ARXRi8e+A1TowAAAABJRU5ErkJggg==	media	2025-05-18 19:02:36.772+00	2025-05-18 19:02:33.833+00	\N	\N	Frame 6.jpg	image/jpeg	905877	2164	1623	50	50	\N	300	225	image/jpeg	9517	Frame 6-300x225.jpg	\N	500	500	image/jpeg	26356	Frame 6-500x500.jpg	\N	600	450	image/jpeg	26084	Frame 6-600x450.jpg	\N	900	675	image/jpeg	46759	Frame 6-900x675.jpg	\N	1400	1050	image/jpeg	86593	Frame 6-1400x1050.jpg	\N	1920	1440	image/jpeg	133360	Frame 6-1920x1440.jpg	\N	1200	630	image/jpeg	60612	Frame 6-1200x630.jpg
28	disapointed 	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAgCAIAAABywqTfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHXUlEQVR4nDVVaVBb1xW+2p6envS0PUloQ0JoA7FIBiQhEEhAxC7A2ECMEbjGLHaMMdSBEMAxgbq0MQYvTUyETTAQIRZrDEIMVQ2qCphgmwHXjdvQX+lMJp32V//0Rztt5wl35r6ZM++c77vfOTP3fIBABgTKu0OEAIkKSBAevIupAEQKSNR3fwiRAI+hSBZHkgHxGAwBMgzICAFmU2gcCMEgGgeKVQlYApjKJkNMIgnBMWQYEOH/sxMokQsjN8AsMh2DEIxCZQAIAVQGXieT0wtsGi6fwuBDLCED4SMkBiBHWEhUEPkgADEjSGYkQQVUBEA0QEFwFkAGYjHVlh4N0XBGOkZmS9g0DMHFIgCXjXAgFKNQERwZKyVo5IDFAXQUoCyAsgGTA2AUYHwiCyPAKM5LpgKmAEbFHBICAIMP01hEMgQoMIiVEWvyWBolgccHTDagM4FYhhiMMmOG0mCMSUyNjk8WS2NRThQEMwAqgDgyPqAy8f5hBLAwkKylGHSQUETkColMAUEgJBvMCmtOgqPUmF9qKig1O0+m2/KS9GaFQhuFiSCeBMEnR6XhqjgYrhkfLwPEq5ChCoW7TvlVd0VbU5nVoTeYYvTG6CSjQm9SpFq1yWaNKlEkkkcmBCF4hxwBiYERyAzA4ZPHa2L/cqv07zPX/jbd/dfgeFN9foxaYLEnWx1pJzLjUqy6BFOcQMYUyhCgM4jj9WJdqjQ5Ta5JEqUYRDmJHF+D8vsx14/BmaOv+n703VwY65CrsNRMtcOZZc03ZjiMZkeaWh/Dl9BBlk2VnqVOt6mzbJq0bG1ljqbZzBp2ikODDd/PDv7gbtu57nx2v01vjC0oz7YXW1KzdAarzmjXq5LlUq0QaOO4YhkqVyIxUhKDDaKFlJ68qAcuU0+lYf6D3FtnUjaGqmdvvC9Xca2OtJIah7OupLWrpba5RmeOE8ZiQKlisbmARMHbzs01J6VpatN5b4erjkYa/vCL+tb8mFuXC0P3Lmo1HEyM8CSwPEFa/ZNTVedPGx2mpMxEoNFyooSQy1XpmR7/9nB3YLAry8C/nB87XJ0x315ckaNKTeC8cre11FhhPlWq5CWaNZacVKMthSfjiJUCIIxmtLU1vfomdPBq6+2blyvLHotFU6SPek/N7Ops9PsXM9OiH/VVz3xSo02OjZIx9ZY4pS46waQVqqKYAhiYM7VPlh7vbAUPXmy/Odz97tv9z+/fLChK7+2/8vpg9+hPh9fa62Yeja5+2Xf18vua1Nh4ozouTaNJVXHFKI1FBEWlWf5lb3hz7cXzjf298O/3d/Z2Qy93N47eHhy82DrY3xoauDr1cGzdPz899StlYrRUKxIrhXQMQgU0lE8B5ScdgZX58ObqemBxO7T2cncjtOHfe76xtxt6tRcaHRu6f3do4sEvAyuetcBCeWWOWC2SSlGURaLymUwJBgqKrcu+r7fDa+urC/5lz3Z4bTPoW1yYCj3zb26u6U1ap9N2Z3TgN2tLgaeesqpifUaiySBm82lkFh1VyEBxqW1i4s6z9ScL3ocz018E/HOBFc/SwmR4c809cTdKwmZjpP7etnX//JJ3Uqbk6cw6pU5OQSEqxsLiNaDEab9772dPlh739LYP/7zX7R5Z9s18sx0Mb/q7r3eqEyTv5SdWVWVdbT9bVmbl8/E3xlWIuHIxiYUaCnNBravC63EveR/W1FfY89M/+viD3uvtXo/70aN71S7nycqMlpbyzo7a0ZG+wU87O3/ayJMgEApEaqnCdMJSaAHp1qTx8ZHFuYfLvukLl+paOy509Fxqajt3sjpfb4ppbD69vxcKrMyFN1df7297PW5jVjyNQyZBQKkTauK4+OOvPVs+cutGwL8Y9M/e7nHd7K4fOJfpu35quq/Kc6/n8GBvPbCwGfR5ve6icpvVYf6wq7mi0h6XyMPxdAagM4lFJdbB4f6BjtoP7bS2TPjpZeN3Y/U7n1aG+kuCE4MTk/evdDbbS21VdRXzcxN7z3/rnZvMsKqSk3iAKyBSaQAQgSUjvq7BGS8H6QrCbGvqDxMXxy45StOlpy3RJ1JirNkJrsaq5aXHezubk+6RjzpdDpvSYIgCqABmC0gsNrBkqFovVp5xFQglSJ4OXrlmO7hzPnij8vbZEz2l2o2lB89/t77s+/rZ+vL1j1vyssXZ2QqBHMOXMcym6I0xdbXZjY2F/b1NbVfOyJTcwjTuuVxJtyvTN3p199fzW+FgYNm7trrkfvBZTU2W3ZHMlrCJMMBthEIDFCZJnSCprrH39jR8+fkns1O3F+fcj6fG/KvzR3/+45vD3eCq1++bXn3qHbk9ZLaZSCiJFDEofP+SqYDCwI2RxoH0prjzF067xz/bDq+9ff3iv//597/++Y/X+1sz0190dF3KK8ljCVEA4fXkiBdGnDNifhQGLgRAgMggsIWoNlntPFXSePF8RXWZ3pLEj+aRGHiWwgBQZM2/899jMz4+x0IgFN/oRAQAGAdEGAEFBVQmAUIJuPkem3cE/z97fCeSnQQIDwAAAABJRU5ErkJggg==	media	2025-05-18 19:07:14.346+00	2025-05-18 19:07:10.253+00	\N	\N	FLORA-Frustrated Owner Image-bdaa5b66.png	image/png	3656160	1024	1536	50	50	\N	300	450	image/png	299823	FLORA-Frustrated Owner Image-bdaa5b66-300x450.png	\N	500	500	image/png	650297	FLORA-Frustrated Owner Image-bdaa5b66-500x500.png	\N	600	900	image/png	1279150	FLORA-Frustrated Owner Image-bdaa5b66-600x900.png	\N	900	1350	image/png	2989621	FLORA-Frustrated Owner Image-bdaa5b66-900x1350.png	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	1200	630	image/png	2077441	FLORA-Frustrated Owner Image-bdaa5b66-1200x630.png
24	1080x1080	\N	\N	data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAHOklEQVR4nO2Ve0xU+RXH7wzMvXcEHLrBV9SYRd7LG4SJq7EVQ8IO0TRAfVQCRUs0KW3qJtaNusgyA5USBXmFVVhRFBhAnvJ0hpm5I49leemqW1vXuG2aNtlsmmq3rTPcb3PuzmWnYFet+0eb9Jecmcyd+Z3z+X1/33OGYf6//keWkmEYj8WRwWR4ZGQsDea/YCm+lSwZrtPodLqMHTt2dCQnJ1cmJSVVpqamns3Ozi5JTU0t2rVrV8HOnTtPpKSkHE1PTz+ak5OzJy4uTvVtSs9s2bIlKCYm5lFUVBTeCAubDwkJQVBQEAIDAuDv74/AgEBER0cjMTFxPiUlBVu3bv2h+wFedSm0Wq06MTHxraioqM/fr/sA/Tcsjub2DmdjU4uj4cpVx/F3TznCwsMdQYFB/wh9IxSbN2+eysvL4+T9/3FhxrW8vLwsarX6S41G8zgmNhYpOh327M/E4byf4pS+CEePH0dMTByCAgMRERHhjI+Px/bt27NfVQUFveTn5yt5np9iWRYqlWpeoVCAYZglwfM8vLy8EBwc7KCr0mq1M1lZWfyrqKCQT8Dz/DTHcuA4zqlWq0GxbNkyqaC3t7f0zqt56XlwcDCpML9p0yZS4cCrqKCgl23btnnyPH+LFOA4bp7jJBAp6NRycBwnEkxoaOinERERd8PDw59qtdoP8/PzPZ+nguKbnlNL8Tx/51kA7hAsyzp8fX0RGRm5m/aFhYUFJCQkRL1QSxqNRg8AFIp/A3CPAFiWXQLgghBZlhU1Gg11QPJLyS4IwnfcP5PpSHbXuGXWrFmzjOf5+zKAS4klABzLQqPROJKTk+NonyuH8kUAfmez2S5aLJbvDwwMvOZ2ekmBgIAAjmXZ37oAnj5LAbp/+t7Pz+8vOp3O35Xj+cVpTUxMYHZ2FlNTUxgfH/9Tm9F4OTY2Nvf1ja9f3bBhQ9f69esPeXt7P5KMxnMitSEVU6vVIrneZcB5VsVi1apVf8zNzdW8VOsJgjBvt9sdN2/anYcOHUZ4RCT8N25EdFQUtZS4cuVKLF++/K8Mw2T5+flVBAQGwkOpFKn3ZRie55+qVCqsXr3614t89Pxlt9shCALGxsfE+E3x8wzDOH1fW+nQaJY7OJZzMAzjoCIVFecu/fnJk2PTd+7hclMzcg7mPo6Mjp738fahmeCkq1i7du3oSxWXAaxWK2ZmZqDT6aSpRgWVSiXkU3p4eODYsWMYGBzG3QcPxdv3f4OJj6a7Pvn00RfN7R1fcBz3I5VK1bNu3bpiNwO+2BLsAiwWCyYnJ3Hw4EGpKJ1G6aGUCssg+/btc15tbnZOf3wPrW1t6Onpdd5/9HtMzMw9rqqqOtDf378GwILx6CqovSm+0Q82wYaRkRHpGgoLC2neL5yc3glCq9XiXHk5+gYGMX3nLsZn5/Dh3MciAfSbzKJer4fBYPhSr9dbioqKjhgMhhBqZ7cyEow74MKyWq0SwNDQEK5fv47y8nIkJSXBx8cHsbGxOHnyJFqMLWhpaUZXTy/GZ27ho1t3QF64ff8BTFa7WF5R5SzU68WSkhKcOXMGJSUlfysuLrbX1dUd/eyzBxE05NyVoc8uZZgFAJPJhMHBQQmkr68PFy5cQHt7O3p6etDW1obm5ma0d3TCNjGJ0alZjE3NYubuJ+i83oezlVUor6wSDQaDs7j4l069Xi/W1FSjrq4eZWXVf29qap64eVM48fDhwxi3/4avFbBYLDCbzRIEAQwMDCwo0tXVhY6ODgng0qVLqG+4jGs9fRAmJjF1+y4aW4yoOn8B5yqrUFtbi+7uLly5ckU8+W6BMzPzx87de3PEn+T9Au+8cwo1NbVPx8bGZkwmU4HVak0YGRnxZGw2mwRAKsgQN27ckNTo7+9fgDAajWhoaEBlRQV+VVqKmtpatHZ1o/aDiyg0FKG0tBQ9vb1ov9aJI3k/w+60vcjOOowDB/LEzP25zjff/J6jrKxMlIfe6Oio02q1zjGCTYDN+mwIUoEgent70dnZKUGQCudra1F29qxUtOC993D69GkYm5pQWHUeBfc+x6HuOWQcKUZ6ejb2783Bd5NSUFJyGjabTTSbzU6bzeYQBEGkzpO6QFZBhjCZvwIYHh5eUIIguru7JV80NTWhsbFRUoSitbUV9fX1WLFiBQK3bEXmxU6cePAEJ2b+gHjdXuTmvQ2zySTls4xYpHoEY7fbnTSKpQeyF+gHsillCNkXZE4JpKsbnZ0daL92TTIoGZW6x1PlCRWjgNpDCf+wEIS/pUNEXAI62o1SHspJdVwAoCG4BICKL74K2iyrQSHDUJBHSBm6oh/s2QONry9U9M/pmidvH/k5zCMj0j7KKwNQXQoJYIkKrq6QIWQQdxhSZWhwSEpMEKQCRXV1NdLS0iSQtPR0CZaukHJQ3n8BsC8CIDNaLV9DLFZjMYwcslmpWwiCgMgbpEz/QD+Gh4alPJRTqiN8BWAX7PgnQeqF/Nl3NZ4AAAAASUVORK5CYII=	media	2025-05-18 19:56:30.405+00	2025-05-18 18:21:57.016+00	/api/media/file/marn-placeholder-4x3-12.png	/api/media/file/marn-placeholder-4x3-12-300x225.png	Untitlede1-1080x1080.png	image/png	665626	1080	1080	50	50	/api/media/file/marn-placeholder-4x3-12-300x225.png	300	300	image/png	56141	Untitlede1-1080x1080-300x300.png	/api/media/file/marn-placeholder-4x3-12-500x500.png	500	500	image/png	141390	Untitlede1-1080x1080-500x500.png	/api/media/file/marn-placeholder-4x3-12-600x450.png	600	600	image/png	207198	Untitlede1-1080x1080-600x600.png	/api/media/file/marn-placeholder-4x3-12-900x675.png	900	900	image/png	457386	Untitlede1-1080x1080-900x900.png	/api/media/file/marn-placeholder-4x3-12-1400x1050.png	\N	\N	\N	\N	\N	/api/media/file/marn-placeholder-4x3-12-1920x1440.png	\N	\N	\N	\N	\N	/api/media/file/marn-placeholder-4x3-12-1200x630.png	1200	630	image/png	335806	Untitlede1-1080x1080-1200x630.png
\.


--
-- Data for Name: media_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."media_rels" ("id", "order", "parent_id", "path", "categories_id") FROM stdin;
11	1	23	category	120
12	1	27	category	122
13	1	28	category	122
\.


--
-- Data for Name: pages; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages" ("id", "title", "hero_type", "hero_supporting_text", "hero_badge_type", "hero_badge_color", "hero_badge_icon", "hero_badge_icon_position", "published_at", "slug", "slug_lock", "updated_at", "created_at", "_status") FROM stdin;
7	Home	hero01	\N	\N	blue	\N	\N	\N	home	t	2025-05-18 18:23:55.229+00	2025-05-18 18:23:25.385+00	published
8	features	hero01	\N	\N	blue	\N	flex-row	\N	features	t	2025-05-18 18:23:56.343+00	2025-05-18 18:23:26.468+00	published
9	Contact	none	\N	\N	blue	\N	flex-row	\N	contact	t	2025-05-18 18:23:56.344+00	2025-05-18 18:23:26.475+00	published
10	\N	hero01	\N	\N	blue	\N	flex-row	\N	\N	t	2025-05-19 07:27:04.421+00	2025-05-19 07:27:04.408+00	draft
11	\N	hero01	\N	\N	blue	\N	flex-row	\N	\N	t	2025-05-19 20:58:25.285+00	2025-05-19 20:58:25.271+00	draft
\.


--
-- Data for Name: pages_blocks_faq_block; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_blocks_faq_block" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "block_name") FROM stdin;
\.


--
-- Data for Name: pages_blocks_faq_block_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_blocks_faq_block_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: pages_blocks_faq_block_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_blocks_faq_block_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: pages_blocks_faq_block_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_blocks_faq_block_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: pages_hero_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_hero_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
1	7	6800e854462e705cdaf2a9ce	custom	\N	google.com	brand	primary
1	8	hero-link-1-ar	custom	f	/	neutral	primary
\.


--
-- Data for Name: pages_hero_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_hero_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
تواصل معنا	13	ar	6800e854462e705cdaf2a9ce
العودة إلى الرئيسية	14	ar	hero-link-1-ar
\.


--
-- Data for Name: pages_hero_logos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_hero_logos" ("_order", "_parent_id", "id", "logo_id") FROM stdin;
\.


--
-- Data for Name: pages_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_locales" ("hero_rich_text", "hero_logos_headline", "hero_media_id", "hero_badge_label", "meta_title", "meta_image_id", "meta_description", "id", "_locale", "_parent_id") FROM stdin;
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h1", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "زهقت من فوضى الطلبات؟", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام كاشير حديث يرتب عملك بسهولة وبسعر يناسبك—مصمم للمطاعم ومحلات التجزئة في السعودية", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl", "textStyle": "", "textFormat": 0}], "direction": "rtl"}}	\N	26	\N	\N	26	\N	22	ar	7
\N	\N	\N	\N	\N	\N	\N	24	ar	9
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"tag": "h2", "type": "heading", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "نظام نقاط بيع حديث ومرن لمشروعك", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}, {"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"mode": "normal", "text": "اكتشف كيف يمكن لنظام نقاط البيع المتطور لدينا أن يساعدك في إدارة أعمالك بكفاءة وزيادة أرباحك. نقدم لك حلولاً متكاملة تناسب جميع احتياجاتك.", "type": "text", "style": "", "detail": 0, "format": 0, "version": 1}], "direction": "rtl"}], "direction": "rtl"}}	\N	26	\N	ميتا: features	\N	استكشف مجموعة متنوعة من تصميمات بلوكات الميزات وكيف يمكنها عرض خصائص نظام نقاط البيع بفعالية باللغة العربية.	23	ar	8
\N	\N	\N	\N	\N	\N	\N	25	ar	10
\N	\N	\N	\N	\N	\N	\N	28	ar	11
\.


--
-- Data for Name: pages_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."pages_rels" ("id", "order", "parent_id", "path", "locale", "pages_id", "posts_id", "solutions_id", "integrations_id", "categories_id", "faq_id", "media_id", "testimonials_id") FROM stdin;
\.


--
-- Data for Name: payload_jobs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_jobs" ("id", "input", "completed_at", "total_tried", "has_error", "error", "task_slug", "queue", "wait_until", "processing", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: payload_jobs_log; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_jobs_log" ("_order", "_parent_id", "id", "executed_at", "completed_at", "task_slug", "task_i_d", "input", "output", "state", "error") FROM stdin;
\.


--
-- Data for Name: payload_locked_documents; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_locked_documents" ("id", "global_slug", "updated_at", "created_at") FROM stdin;
59	\N	2025-05-18 19:07:16.337+00	2025-05-18 19:07:16.353+00
4	\N	2025-05-17 15:52:25.999+00	2025-05-17 15:52:26.014+00
65	\N	2025-05-18 19:08:59.169+00	2025-05-18 19:08:59.18+00
69	\N	2025-05-18 19:10:00.921+00	2025-05-18 19:10:00.929+00
74	\N	2025-05-18 19:10:11.065+00	2025-05-18 19:10:11.079+00
76	\N	2025-05-18 19:10:21.944+00	2025-05-18 19:10:21.954+00
12	\N	2025-05-18 07:22:58.981+00	2025-05-18 07:22:59.008+00
141	\N	2025-05-19 23:38:33.582+00	2025-05-19 23:38:33.589+00
16	\N	2025-05-18 07:45:40.341+00	2025-05-18 07:45:40.35+00
17	\N	2025-05-18 07:45:59.713+00	2025-05-18 07:45:59.724+00
89	\N	2025-05-18 19:11:09.936+00	2025-05-18 19:11:09.945+00
90	\N	2025-05-18 19:15:19.089+00	2025-05-18 19:15:19.1+00
92	\N	2025-05-18 19:52:46.505+00	2025-05-18 19:52:46.513+00
93	\N	2025-05-18 19:53:12.387+00	2025-05-18 19:53:12.396+00
22	\N	2025-05-18 09:18:49.074+00	2025-05-18 09:18:49.082+00
96	\N	2025-05-18 19:54:31.634+00	2025-05-18 19:54:31.644+00
98	\N	2025-05-18 19:55:35.003+00	2025-05-18 19:55:35.011+00
101	\N	2025-05-18 19:56:55.6+00	2025-05-18 19:56:55.609+00
99	\N	2025-05-18 19:57:04.117+00	2025-05-18 19:57:04.126+00
102	\N	2025-05-18 19:57:44.475+00	2025-05-18 19:57:44.49+00
37	\N	2025-05-18 18:59:39.01+00	2025-05-18 18:59:39.019+00
38	\N	2025-05-18 18:59:53.778+00	2025-05-18 18:59:53.786+00
106	\N	2025-05-18 20:14:04.074+00	2025-05-18 20:14:04.082+00
39	\N	2025-05-18 19:00:10.915+00	2025-05-18 19:00:10.928+00
107	\N	2025-05-18 20:14:55.02+00	2025-05-18 20:14:55.032+00
43	\N	2025-05-18 19:00:52.324+00	2025-05-18 19:00:52.338+00
109	\N	2025-05-18 20:15:47.431+00	2025-05-18 20:15:47.439+00
44	\N	2025-05-18 19:01:33.137+00	2025-05-18 19:01:33.154+00
46	\N	2025-05-18 19:03:10.049+00	2025-05-18 19:03:10.058+00
47	\N	2025-05-18 19:03:34.248+00	2025-05-18 19:03:34.257+00
114	\N	2025-05-18 20:18:01.878+00	2025-05-18 20:18:01.888+00
122	\N	2025-05-18 20:20:10.104+00	2025-05-18 20:20:10.112+00
127	\N	2025-05-18 20:21:46.835+00	2025-05-18 20:21:46.85+00
128	\N	2025-05-18 20:22:05.067+00	2025-05-18 20:22:05.075+00
\.


--
-- Data for Name: payload_locked_documents_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_locked_documents_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id", "integrations_id", "media_id", "testimonials_id", "case_studies_id", "categories_id", "faq_id", "changelog_id", "users_id", "redirects_id", "forms_id", "form_submissions_id", "search_id", "payload_jobs_id") FROM stdin;
201	\N	101	document	\N	\N	\N	\N	24	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
202	\N	101	user	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	11	\N	\N	\N	\N	\N
279	\N	141	document	11	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
280	\N	141	user	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	10	\N	\N	\N	\N	\N
\.


--
-- Data for Name: payload_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_migrations" ("id", "name", "batch", "updated_at", "created_at") FROM stdin;
1	20250517_121943_init	1	2025-05-17 15:18:04.917+00	2025-05-17 15:17:32.805+00
\.


--
-- Data for Name: payload_preferences; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_preferences" ("id", "key", "value", "updated_at", "created_at") FROM stdin;
1	pages-list	{"preset": null}	2025-05-17 15:36:09.093+00	2025-05-17 15:36:09.107+00
2	users-list	{"preset": null}	2025-05-17 15:36:20.546+00	2025-05-17 15:36:20.56+00
3	users-list	{"preset": null}	2025-05-17 15:38:33.937+00	2025-05-17 15:38:33.947+00
4	pages-list	{"preset": null}	2025-05-17 15:42:07.434+00	2025-05-17 15:42:07.447+00
6	collection-pages-3	{"fields": {"layout": {"collapsed": ["6828ac1d051b0f1905118bf8", "6828ac1d051b0f1905118bfa", "6828ac1d051b0f1905118bfb", "6828ac1d051b0f1905118bfc", "6828ac1d051b0f1905118bfd", "6828ac1d051b0f1905118bfe", "6828ac1d051b0f1905118bff", "6828ac1d051b0f1905118c00", "6828ac1d051b0f1905118c01", "6828ac1d051b0f1905118c02", "6828ac1d051b0f1905118c03", "6828ac1d051b0f1905118c04", "6828ac1d051b0f1905118c05", "6828ac1d051b0f1905118c06", "6828ac1d051b0f1905118c07", "6828ac1d051b0f1905118c08"]}, "_index-1": {"tabIndex": 0}, "layout.1.columns": {"collapsed": ["col-02-3", "col-02-4"]}}}	2025-05-17 15:49:48.064+00	2025-05-17 15:48:17.953+00
8	collection-integrations-30	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-17 15:49:55.002+00	2025-05-17 15:49:55.015+00
10	testimonials-list	{"preset": null}	2025-05-17 15:50:23.477+00	2025-05-17 15:50:23.485+00
12	forms-list	{"preset": null}	2025-05-17 15:52:58.614+00	2025-05-17 15:52:58.623+00
13	form-submissions-list	{"preset": null}	2025-05-17 15:53:15.724+00	2025-05-17 15:53:15.735+00
15	media-list	{"preset": null}	2025-05-17 15:54:02.126+00	2025-05-17 15:54:02.141+00
16	integrations-list	{"preset": null}	2025-05-17 15:54:08.988+00	2025-05-17 15:54:09.001+00
17	collection-integrations-29	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-17 15:54:37.316+00	2025-05-17 15:54:37.329+00
18	users-list	{"preset": null}	2025-05-17 15:55:21.48+00	2025-05-17 15:55:21.494+00
19	changelog-list	{"preset": null}	2025-05-17 15:55:27.405+00	2025-05-17 15:55:27.427+00
20	faq-list	{"preset": null}	2025-05-17 15:55:41.09+00	2025-05-17 15:55:41.101+00
21	categories-list	{"preset": null}	2025-05-17 15:56:31.268+00	2025-05-17 15:56:31.276+00
22	case-studies-list	{"preset": null}	2025-05-17 15:56:42.566+00	2025-05-17 15:56:42.575+00
23	collection-case-studies-5	{"fields": {"layout": {"collapsed": ["6828ac1d051b0f1905118bf8", "6828ac1d051b0f1905118bf9", "6828ac1d051b0f1905118bfa", "6828ac1d051b0f1905118bfb", "6828ac1d051b0f1905118bfc", "6828ac1d051b0f1905118bfd", "6828ac1d051b0f1905118bfe", "6828ac1d051b0f1905118bff", "6828ac1d051b0f1905118c00", "6828ac1d051b0f1905118c01", "6828ac1d051b0f1905118c02", "6828ac1d051b0f1905118c03", "6828ac1d051b0f1905118c04", "6828ac1d051b0f1905118c05", "6828ac1d051b0f1905118c06", "6828ac1d051b0f1905118c07", "6828ac1d051b0f1905118c08"]}}}	2025-05-17 15:57:20.775+00	2025-05-17 15:57:19.691+00
24	testimonials-list	{"preset": null}	2025-05-17 15:57:25.771+00	2025-05-17 15:57:25.779+00
25	posts-list	{"preset": null}	2025-05-17 15:57:37.889+00	2025-05-17 15:57:37.909+00
26	collection-pages-2	{"fields": {"layout": {"collapsed": ["6828b246b19eea7a95d00faa"]}, "_index-1": {"tabIndex": 0}, "hero._index-2": {"collapsed": false}, "hero._index-3": {"collapsed": true}, "layout.0.columns": {"collapsed": ["6828ac1d051b0f1905118bf2", "6828ac1d051b0f1905118bf3", "6828ac1d051b0f1905118bf4", "6828ac1d051b0f1905118bf5"]}, "layout.0.blockHeader._index-1": {"collapsed": false}}}	2025-05-17 16:02:16.587+00	2025-05-17 15:58:53.45+00
27	solutions-list	{"limit": 10, "preset": null}	2025-05-18 06:57:07.171+00	2025-05-18 06:56:38.878+00
14	locale	"ar"	2025-05-18 06:58:26.406+00	2025-05-17 15:53:53.432+00
11	nav	{"open": true}	2025-05-18 07:20:08.206+00	2025-05-17 15:52:38.043+00
28	collection-pages-3	{"fields": {"layout": {"collapsed": ["6828ac1d051b0f1905118bf9", "6828ac1d051b0f1905118bfa", "6828ac1d051b0f1905118bfb", "6828ac1d051b0f1905118bfc", "6828ac1d051b0f1905118bfd", "6828ac1d051b0f1905118bfe", "6828ac1d051b0f1905118bff", "6828ac1d051b0f1905118c00", "6828ac1d051b0f1905118c01", "6828ac1d051b0f1905118c02", "6828ac1d051b0f1905118c03", "6828ac1d051b0f1905118c04", "6828ac1d051b0f1905118c05", "6828ac1d051b0f1905118c06", "6828ac1d051b0f1905118c07", "6828ac1d051b0f1905118c08"]}, "_index-1": {"tabIndex": 0}}}	2025-05-18 07:45:23.248+00	2025-05-18 06:58:49.636+00
29	nav	{"groups": {"Globals": {"open": false}, "Collections": {"open": true}}}	2025-05-18 07:47:10.449+00	2025-05-18 07:47:06.881+00
30	posts-list	{"preset": null}	2025-05-18 08:41:12.959+00	2025-05-18 08:41:12.967+00
31	changelog-list	{"preset": null}	2025-05-18 08:41:43.372+00	2025-05-18 08:41:43.38+00
32	faq-list	{"preset": null}	2025-05-18 08:41:54.762+00	2025-05-18 08:41:54.771+00
34	categories-list	{"limit": 10, "preset": null}	2025-05-18 08:44:35.709+00	2025-05-18 08:44:29.786+00
35	media-list	{"preset": null}	2025-05-18 08:44:55.309+00	2025-05-18 08:44:55.318+00
36	collection-integrations-29	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-18 11:00:55.772+00	2025-05-18 11:00:55.785+00
37	collection-integrations-25	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-18 11:01:04.446+00	2025-05-18 11:01:04.456+00
38	collection-integrations-20	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-18 11:01:29.328+00	2025-05-18 11:01:29.337+00
39	locale	"ar"	2025-05-18 12:41:13.694+00	2025-05-18 11:01:52.936+00
7	integrations-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "icon"}, {"active": true, "accessor": "name"}, {"active": true, "accessor": "tagline"}, {"active": true, "accessor": "updatedAt"}, {"active": true, "accessor": "id"}, {"active": false, "accessor": "title"}, {"active": false, "accessor": "overview"}, {"active": false, "accessor": "link"}, {"active": false, "accessor": "company"}, {"active": false, "accessor": "docsLink"}, {"active": false, "accessor": "hero"}, {"active": false, "accessor": "gallery"}, {"active": false, "accessor": "content"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "meta"}, {"active": false, "accessor": "appPreview"}, {"active": false, "accessor": "publishedAt"}, {"active": false, "accessor": "ecosystem"}, {"active": false, "accessor": "categories"}, {"active": false, "accessor": "slug"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 18:10:15.616+00	2025-05-17 15:49:51.556+00
9	case-studies-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "title"}, {"active": true, "accessor": "content"}, {"active": true, "accessor": "industry"}, {"active": true, "accessor": "useCase"}, {"active": false, "accessor": "id"}, {"active": false, "accessor": "featuredImage"}, {"active": false, "accessor": "stats"}, {"active": false, "accessor": "featuredSolutions"}, {"active": false, "accessor": "featuredIntegrations"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "slug"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "updatedAt"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 11:20:36.186+00	2025-05-17 15:49:59.274+00
33	collection-pages-2	{"fields": {"layout": {"collapsed": ["6828ac1d051b0f1905118bf7"]}, "_index-1": {"tabIndex": 1}, "layout.2.blockHeader.links": {"collapsed": ["68299e68e9f5a993445e8b52"]}, "layout.1.blockHeader._index-3": {"collapsed": false}, "layout.2.blockHeader._index-3": {"collapsed": false}}}	2025-05-18 12:41:31.836+00	2025-05-18 08:42:37.835+00
5	pages-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "title"}, {"active": true, "accessor": "slug"}, {"active": true, "accessor": "updatedAt"}, {"active": false, "accessor": "id"}, {"active": false, "accessor": "hero"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "meta"}, {"active": false, "accessor": "publishedAt"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 15:51:15.049+00	2025-05-17 15:46:58.253+00
40	solutions-list	{"limit": 10, "preset": null}	2025-05-18 18:13:16.458+00	2025-05-18 18:12:46.81+00
41	users-list	{"preset": null}	2025-05-18 18:24:27.425+00	2025-05-18 18:24:27.435+00
42	pages-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "title"}, {"active": true, "accessor": "slug"}, {"active": true, "accessor": "updatedAt"}, {"active": true, "accessor": "id"}, {"active": false, "accessor": "hero"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "meta"}, {"active": false, "accessor": "publishedAt"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 18:25:03.448+00	2025-05-18 18:24:58.614+00
43	integrations-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "icon"}, {"active": true, "accessor": "name"}, {"active": true, "accessor": "tagline"}, {"active": true, "accessor": "updatedAt"}, {"active": true, "accessor": "id"}, {"active": false, "accessor": "title"}, {"active": false, "accessor": "overview"}, {"active": false, "accessor": "link"}, {"active": false, "accessor": "company"}, {"active": false, "accessor": "docsLink"}, {"active": false, "accessor": "hero"}, {"active": false, "accessor": "gallery"}, {"active": false, "accessor": "content"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "meta"}, {"active": false, "accessor": "appPreview"}, {"active": false, "accessor": "publishedAt"}, {"active": false, "accessor": "ecosystem"}, {"active": false, "accessor": "categories"}, {"active": false, "accessor": "slug"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 18:25:12.274+00	2025-05-18 18:25:06.631+00
44	case-studies-list	{"limit": 10, "preset": null, "columns": [{"active": true, "accessor": "title"}, {"active": true, "accessor": "content"}, {"active": true, "accessor": "industry"}, {"active": true, "accessor": "useCase"}, {"active": true, "accessor": "id"}, {"active": false, "accessor": "featuredImage"}, {"active": false, "accessor": "stats"}, {"active": false, "accessor": "featuredSolutions"}, {"active": false, "accessor": "featuredIntegrations"}, {"active": true, "accessor": "layout"}, {"active": false, "accessor": "slug"}, {"active": false, "accessor": "slugLock"}, {"active": false, "accessor": "updatedAt"}, {"active": false, "accessor": "createdAt"}, {"active": false, "accessor": "_status"}]}	2025-05-18 18:25:28.629+00	2025-05-18 18:25:22.29+00
45	pages-list	{"preset": null}	2025-05-18 18:42:06.686+00	2025-05-18 18:42:06.697+00
46	collection-pages-9	{"fields": {"_index-1": {"tabIndex": 1}}}	2025-05-18 18:42:14.875+00	2025-05-18 18:42:14.884+00
48	media-list	{"limit": 10, "preset": null}	2025-05-18 19:01:51.133+00	2025-05-18 19:01:15.041+00
47	collection-pages-7	{"fields": {"layout": {"collapsed": []}, "_index-1": {"tabIndex": 1}, "hero.logos": {"collapsed": ["682a2e1ad54c1b257a355e1a"]}, "hero._index-2": {"collapsed": false}, "hero._index-3": {"collapsed": false}, "hero._index-5": {"collapsed": false}, "layout.0.columns": {"collapsed": ["682a25bb9511346d0304f50b", "682a25bb9511346d0304f50c"]}, "layout.0.columns.0._index-8": {"collapsed": false}, "layout.0.blockHeader._index-1": {"collapsed": true}, "layout.0.blockHeader._index-3": {"collapsed": false}}}	2025-05-18 20:23:06.503+00	2025-05-18 18:42:47.103+00
49	nav	{"open": true}	2025-05-19 07:27:29.393+00	2025-05-19 07:27:28.355+00
50	collection-pages-8	{"fields": {"layout": {"collapsed": ["682a25bc9511346d0304f511", "682a25bc9511346d0304f512", "682a25bc9511346d0304f513", "682a25bc9511346d0304f514", "682a25bc9511346d0304f515", "682a25bc9511346d0304f516", "682a25bc9511346d0304f517", "682a25bc9511346d0304f518", "682a25bc9511346d0304f519", "682a25bc9511346d0304f51a", "682a25bc9511346d0304f51b", "682a25bc9511346d0304f51c", "682a25bc9511346d0304f51d", "682a25bc9511346d0304f51e", "682a25bc9511346d0304f51f", "682a25bc9511346d0304f520"]}, "_index-1": {"tabIndex": 1}}}	2025-05-19 10:15:46.47+00	2025-05-19 10:15:43.194+00
51	global-header	{"fields": {"tabs": {"collapsed": ["682a25d39511346d0304f53b", "682a25d39511346d0304f545", "682a25d39511346d0304f546", "682a25d39511346d0304f54e"]}}}	2025-05-19 12:59:38.434+00	2025-05-19 12:57:00.699+00
52	locale	"ar"	2025-05-19 13:00:19.214+00	2025-05-19 12:59:33.24+00
53	solutions-list	{"preset": null}	2025-05-19 13:06:17.195+00	2025-05-19 13:06:17.205+00
55	media-list	{"preset": null}	2025-05-19 13:11:48.023+00	2025-05-19 13:11:48.033+00
54	collection-pages-7	{"fields": {"layout": {"collapsed": ["682a25bb9511346d0304f50f"]}, "_index-1": {"tabIndex": 1}, "layout.1.blockHeader._index-1": {"collapsed": true}}}	2025-05-19 13:13:41.576+00	2025-05-19 13:08:55.58+00
56	posts-list	{"preset": null}	2025-05-19 13:21:16.113+00	2025-05-19 13:21:16.121+00
57	collection-pages-11	{"fields": {"_index-1": {"tabIndex": 0}}}	2025-05-19 20:58:48.146+00	2025-05-19 20:58:34.294+00
\.


--
-- Data for Name: payload_preferences_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."payload_preferences_rels" ("id", "order", "parent_id", "path", "users_id") FROM stdin;
116	\N	45	user	11
117	\N	46	user	11
125	\N	48	user	11
150	\N	47	user	11
152	\N	49	user	11
154	\N	50	user	11
163	\N	51	user	10
164	\N	52	user	10
165	\N	53	user	10
170	\N	55	user	10
172	\N	54	user	10
173	\N	56	user	10
175	\N	57	user	10
106	\N	41	user	10
109	\N	42	user	10
112	\N	43	user	10
115	\N	44	user	10
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."posts" ("id", "slug", "slug_lock", "updated_at", "created_at", "_status") FROM stdin;
\.


--
-- Data for Name: posts_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."posts_locales" ("title", "hero_image_id", "content", "meta_title", "meta_image_id", "meta_description", "published_at", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: posts_populated_authors; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."posts_populated_authors" ("_order", "_parent_id", "id", "name") FROM stdin;
\.


--
-- Data for Name: posts_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."posts_rels" ("id", "order", "parent_id", "path", "locale", "posts_id", "categories_id", "users_id") FROM stdin;
\.


--
-- Data for Name: redirects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."redirects" ("id", "from", "to_type", "to_url", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: redirects_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."redirects_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id") FROM stdin;
\.


--
-- Data for Name: search; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."search" ("id", "priority", "slug", "meta_title", "meta_description", "meta_image_id", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: search_categories; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."search_categories" ("_order", "_parent_id", "id", "relation_to", "title") FROM stdin;
\.


--
-- Data for Name: search_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."search_locales" ("title", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: search_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."search_rels" ("id", "order", "parent_id", "path", "posts_id") FROM stdin;
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."settings" ("id", "announcement_bar_link_type", "announcement_bar_link_new_tab", "announcement_bar_link_url", "custom_head_html", "custom_body_html", "tag_manager_id", "analytics_scripts", "updated_at", "created_at") FROM stdin;
\.


--
-- Data for Name: settings_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."settings_locales" ("meta_title", "meta_image_id", "meta_description", "announcement_bar_text", "announcement_bar_link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: settings_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."settings_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id") FROM stdin;
\.


--
-- Data for Name: solutions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."solutions" ("id", "title", "icon_id", "link_type", "link_new_tab", "link_url", "published_at", "ecosystem_id", "slug", "slug_lock", "updated_at", "created_at", "_status") FROM stdin;
42	PaySync	23	custom	\N	/solutions/paysync	\N	131	paysync	t	2025-05-18 18:22:38.91+00	2025-05-18 18:22:08.384+00	draft
43	Kiosk	23	custom	\N	/solutions/kiosk	\N	131	kiosk	t	2025-05-18 18:22:41.315+00	2025-05-18 18:22:10.788+00	draft
44	OrderStation	23	custom	\N	/solutions/orderstation	\N	132	orderstation	t	2025-05-18 18:22:44.429+00	2025-05-18 18:22:13.628+00	draft
45	Products	23	custom	\N	/solutions/products	\N	132	products	t	2025-05-18 18:22:47.747+00	2025-05-18 18:22:16.825+00	draft
46	Inventory	23	custom	\N	/solutions/inventory	\N	132	inventory	t	2025-05-18 18:22:52.037+00	2025-05-18 18:22:21.225+00	draft
47	Analytics	23	custom	\N	/solutions/analytics	\N	133	analytics	t	2025-05-18 18:22:55.226+00	2025-05-18 18:22:24.44+00	draft
48	Branches	23	custom	\N	/solutions/branches	\N	133	branches	t	2025-05-18 18:22:58.153+00	2025-05-18 18:22:27.564+00	draft
49	Customers	23	custom	\N	/solutions/customers	\N	133	customers	t	2025-05-18 18:23:00.867+00	2025-05-18 18:22:30.228+00	draft
50	Accounting	23	custom	\N	/solutions/accouting	\N	133	accouting	t	2025-05-18 18:23:03.573+00	2025-05-18 18:22:32.92+00	draft
41	Cashier	23	custom	\N	/solutions/cashier	\N	131	cashier	t	2025-05-19 13:14:46.629+00	2025-05-18 18:22:05.887+00	published
\.


--
-- Data for Name: solutions_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."solutions_locales" ("name", "tagline", "link_label", "id", "_locale", "_parent_id") FROM stdin;
شاشة السداد	عرض الطلبات والدفع بشكل مباشر للعميل	شاشة السداد	42	ar	42
الطلب الذاتي	خلي العملاء يطلبون بأنفسهم ويقل الضغط على الموظفين	الطلب الذاتي	43	ar	43
محطة الطلبات	إدارة جميع الطلبات من مكان واحد – حضوري وتوصيل	محطة الطلبات	44	ar	44
المنتجات	نظّم منتجاتك، الأسعار، والعروض بسهولة	المنتجات	45	ar	45
المخزون	تابع الكميات وتفادى النقص أو الهدر تلقائيًا	المخزون	46	ar	46
التحليلات	تقارير فورية عن المبيعات والأرباح تساعدك تتخذ قرارات	التحليلات	47	ar	47
الفروع	راقب كل فروعك وتقاريرها من نفس اللوحة	الفروع	48	ar	48
العملاء	احفظ بيانات عملاءك وفعّل برامج الولاء	العملاء	49	ar	49
المالية	تتبّع المصاريف، الضرائب، والتدفق المالي بسهولة	المالية	50	ar	50
الكاشير	تسجيل المبيعات بمرونة وسرعة على أي جهاز	الكاشير	51	ar	41
\.


--
-- Data for Name: solutions_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."solutions_rels" ("id", "order", "parent_id", "path", "pages_id", "posts_id", "solutions_id") FROM stdin;
\.


--
-- Data for Name: testimonials; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonials" ("id", "company_logo_id", "author_info_avatar_id", "case_study_link_case_study", "case_study_linked_case_study_id", "published_at", "updated_at", "created_at", "_status") FROM stdin;
21	22	23	t	13	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.061+00	2025-05-18 18:23:36.225+00	draft
22	22	23	t	15	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.059+00	2025-05-18 18:23:36.223+00	draft
23	22	23	t	17	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.067+00	2025-05-18 18:23:36.227+00	draft
24	22	23	t	18	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.07+00	2025-05-18 18:23:36.227+00	draft
25	22	23	t	16	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.069+00	2025-05-18 18:23:36.227+00	draft
26	22	23	t	14	2025-05-18 18:24:05.88+00	2025-05-18 18:24:06.071+00	2025-05-18 18:23:36.227+00	draft
27	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.156+00	2025-05-18 18:23:37.309+00	draft
28	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.163+00	2025-05-18 18:23:37.329+00	draft
29	22	23	f	\N	2025-05-18 18:24:05.88+00	2025-05-18 18:24:07.255+00	2025-05-18 18:23:37.419+00	draft
30	22	23	f	\N	2025-05-18 18:24:05.881+00	2025-05-18 18:24:07.823+00	2025-05-18 18:23:37.99+00	draft
\.


--
-- Data for Name: testimonialsBlock; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonialsBlock" ("_order", "_parent_id", "_path", "id", "block_header_type", "block_header_badge_type", "block_header_badge_color", "block_header_badge_icon", "block_header_badge_icon_position", "type", "block_name") FROM stdin;
\.


--
-- Data for Name: testimonialsBlock_block_header_links; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonialsBlock_block_header_links" ("_order", "_parent_id", "id", "link_type", "link_new_tab", "link_url", "link_color", "link_variant") FROM stdin;
\.


--
-- Data for Name: testimonialsBlock_block_header_links_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonialsBlock_block_header_links_locales" ("link_label", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: testimonialsBlock_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonialsBlock_locales" ("block_header_badge_label", "block_header_header_text", "id", "_locale", "_parent_id") FROM stdin;
\.


--
-- Data for Name: testimonials_locales; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonials_locales" ("quote", "company_name", "featured_image_id", "author_info_name", "author_info_title", "id", "_locale", "_parent_id") FROM stdin;
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 2.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 2	24	المؤلف 2	اللقب 2	21	ar	21
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 1.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 1	24	المؤلف 1	اللقب 1	22	ar	22
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 5.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 5	24	المؤلف 5	اللقب 5	23	ar	23
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 4.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 4	24	المؤلف 4	اللقب 4	24	ar	25
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 6.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 6	24	المؤلف 6	اللقب 6	25	ar	24
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 3.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 3	24	المؤلف 3	اللقب 3	26	ar	26
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 8.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 8	24	المؤلف 8	اللقب 8	27	ar	27
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 7.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 7	24	المؤلف 7	اللقب 7	28	ar	28
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 9.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 9	24	المؤلف 9	اللقب 9	29	ar	29
{"root": {"type": "root", "format": "", "indent": 0, "version": 1, "children": [{"type": "paragraph", "format": "", "indent": 0, "version": 1, "children": [{"text": "هذا هو اقتباس الشهادة للشركة 10.", "type": "text", "style": "", "format": ""}], "direction": "rtl"}], "direction": "rtl"}}	شركة 10	24	المؤلف 10	اللقب 10	30	ar	30
\.


--
-- Data for Name: testimonials_rels; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."testimonials_rels" ("id", "order", "parent_id", "path", "categories_id") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."users" ("id", "name", "updated_at", "created_at", "email", "reset_password_token", "reset_password_expiration", "salt", "hash", "login_attempts", "lock_until") FROM stdin;
10	Omar	2025-05-18 18:24:13.004+00	2025-05-18 18:24:12.505+00	omar@byvalence.com	\N	\N	d324753476e208ab6b66f5f299e9edef8bc0f77e8fd0d6265a5e8913b8e0e65d	93fb8e1b90a6746d719bbc94f6a57dcda4e5790d67ecace999ec591ebc8f08a85c721634c0a627675e9f3c5c898487616c2f586fe3c8e310da5323172592b65f6e1dfb0862a58b9fd9e3d6e060bf1ed3e80b10297fee8aeadc618a2bd1cda99b2b6f904c219b02274781b97c3a529aa06ab374d14ffdef0f2174d5e6304861630c99cd8827ca30d798d462dde765875264ad785a7b2654225c1166b3ac8c40e58c67f03bd3f685ef5e519740bd2784c207b5a6aaa3c05f01c52afd015c3c94656aa0ee3e5e32d04cc5b25e8c4fb9a3f309ca475db614fc219d17e149d1793611a4b143436fb3cd6badf2d2ee6a089ed783b9fd07de335bf9d1dfa2e081366044aa51dc031b26a1f1be096c75956787cee19bf1d5e6c149cee7c9dc7275e71e667db19004cb314100f4f43a466e97a557815356c139a49698324c111aef4e3c7bd2450d0935fa798caee8040b16b5350965a8f2cab3896092427c1a3918b3825c901d16c00174bd924fc1cea0fb1bec9b4853e3ac3648fcf58ab65b506adde32fb7506ecb41077ab214712f486a9d2638cc5767bee360bb7a50195a38dee7dac89773f9480c9aa41c91b079b30699eee96e18d45ed6f8d92c2a13501cc0c088c16fe0ed495f780c8653ff3a51008a5efe0512303875b0f1c03df5f30cea119e96425e615f0e728c83faf7a3c9b08c6a6aab106781cbd874fc6aaf8d0bce9b8e8f	0	\N
11	Mohammed Alhefzy	2025-05-18 18:24:51.003+00	2025-05-18 18:24:50.51+00	alhefzy@marn.com	\N	\N	0b3db1a79ca85ece6bdf580e84e0138328fade4be3caa3c4255f6c1111099fea	c40b8d058c1fe173bd3588a4f2591f56986bee50789b0f4a7fc5549bba958a8d64d3a066fbb9b2aa533cc210c6d1d8fbb3a0cf7ce2100e01cb9558d949cc6d97322e513bfb2b7028c88d5e6bafca8452b35ebc178975a0ca2dfd4e0bf878595eda6c8258277bcc0ef64dec1bf3f5b1c8279e64a00c02d7b65bab351a28d8e3bf36325a4143dba3236ab53a7fd25a2b895b3e0abed90bef4d72ae1efa83211a345977fbac6ecda072d5a66c60326c2c69c616c71bf310a14a3f6af2834ce1caac7c758697a57b6f2f2ce65ee2134544c4bda86eea6f4847647ae511d67dd2b28777059084c95cbf6a937ff4dc9b1e5996fee4fa56e5f7f021adce0a39ab720bcd15f587c25ce615a6c73b8d48a53bb47a2c1712d6ef960e0b27be47d8c976d9e0aa23f98fe57643b26c95a64d21e61a77536210920362d53914ba0de3a3c601abbb77e200352a75834d06a7061a3d61d0643a3b3c3bc53cc21c1750ff3eb9d99914549e1cc1bb9b1c403e1ab9e3175882347b9409e4da2dc1b13a2047357e28b2398dcb6950acf891d12455303cf972dc76b54097793d7c5e6db3328f3db4209a61a85883cbf80cd891621f7a962d704bf7961559910430aa7739806727d02c184bdfdfae1059ac044ebfa90c3879c539ce714fe6a0a8c7b76803fbf118ba9ce2ec01e3c759add7d968f1131aa4beaab3196dcff5cd16ea432c2c4cd6f9dc1a6e	0	\N
12	Rula	2025-05-19 13:04:12.16+00	2025-05-19 13:04:11.644+00	rula@byvalence.com	\N	\N	5a8fa174bc7884bac2fe47c4bea640ec7901af7fd5a078a0798317396f190c4e	69dcd25ea31153137a22b6ed3fd6535a0e2fa03fd4c274f58a0df4d109c770179c0e27fc4c0fa33caac2c162e01decffbc0d20b7654f020682ecd68e06cd8ebc4c896f1b76e0c4b71ab8a3e4f929020026828fdd1c8a7dc548140c8ca61418eca3af74ccee29e9f53afbc299fee2457c78021e5d3006e12b425379f6ecdfecdf33b76dc4ab4ff4b102939627396e526bb12e54151cd6700abc5e09fe26279516fc41d09d85a7045ed9c02bb71686cb9d6af72ba5931c4676ef0239426c593d8630e1c7e1e25ecbddf4710af5cf60e09db5c08188a58d9aa4107c9ab09175f0b3ed15539c21ed5c7f9adf65a75adab2744f88ae08981df1f4cd6abce69aa6960cea34587327ff73b987135fbe0810b697ea2de65c0ac7ef11435f0d7cf13b4f43d373b4bf9582eb4a2a4d02cb89eda97f8d99a1099558e011062a6cfcd322625a3e64a086ef1e380dd6135d3628e3a0f9a7325154ba8bad9807997afbb3c5cb6de340d72d1f52d376f9ce83692e9592735fea4e1f333a4e8fde10c81fcb67d51b6cb88dc6966117607aad81d2582d3ee0dcd4f30b327af2c6e4e22bc512a33bf47415ca3663880ad034034200ce03ff72b5aa4da72bd50d66a35a4dfc91b3d4410902a45d58bb11971fb736c1d37aa7e8970261388f0f2dded6f8972695a2655f30136e450f2589fc48533f8c1a9da067c71de6fa5e8769bf0fea7a706f7cbd0e	0	\N
\.


--
-- Name: _archiveBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_archiveBlock_v_id_seq"', 12, true);


--
-- Name: _archiveBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_archiveBlock_v_locales_id_seq"', 1, true);


--
-- Name: _callToActionBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_callToActionBlock_v_id_seq"', 2, true);


--
-- Name: _callToActionBlock_v_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_callToActionBlock_v_links_id_seq"', 1, false);


--
-- Name: _callToActionBlock_v_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_callToActionBlock_v_links_locales_id_seq"', 1, false);


--
-- Name: _callToActionBlock_v_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_callToActionBlock_v_list_id_seq"', 1, false);


--
-- Name: _callToActionBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_callToActionBlock_v_locales_id_seq"', 1, false);


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_blocks_faq_block_block_header_links_id_seq"', 1, false);


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_blocks_faq_block_block_header_links_loca_id_seq"', 1, false);


--
-- Name: _case_studies_v_blocks_faq_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_blocks_faq_block_id_seq"', 1, false);


--
-- Name: _case_studies_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: _case_studies_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_id_seq"', 43, true);


--
-- Name: _case_studies_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_locales_id_seq"', 43, true);


--
-- Name: _case_studies_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_rels_id_seq"', 172, true);


--
-- Name: _case_studies_v_version_stats_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_version_stats_id_seq"', 86, true);


--
-- Name: _case_studies_v_version_stats_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_case_studies_v_version_stats_locales_id_seq"', 86, true);


--
-- Name: _customHtmlBlock_v_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_customHtmlBlock_v_block_header_links_id_seq"', 1, false);


--
-- Name: _customHtmlBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_customHtmlBlock_v_block_header_links_locales_id_seq"', 1, false);


--
-- Name: _customHtmlBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_customHtmlBlock_v_id_seq"', 6, true);


--
-- Name: _customHtmlBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_customHtmlBlock_v_locales_id_seq"', 1, false);


--
-- Name: _dividerBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_dividerBlock_v_id_seq"', 1, false);


--
-- Name: _featuredAppsBlock_v_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_block_header_links_id_seq"', 7, true);


--
-- Name: _featuredAppsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_block_header_links_locales_id_seq"', 5, true);


--
-- Name: _featuredAppsBlock_v_cards_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_cards_id_seq"', 1, false);


--
-- Name: _featuredAppsBlock_v_cards_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_cards_locales_id_seq"', 1, false);


--
-- Name: _featuredAppsBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_id_seq"', 18, true);


--
-- Name: _featuredAppsBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuredAppsBlock_v_locales_id_seq"', 8, true);


--
-- Name: _featuresBlock_v_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_block_header_links_id_seq"', 404, true);


--
-- Name: _featuresBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_block_header_links_locales_id_seq"', 404, true);


--
-- Name: _featuresBlock_v_columns_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_columns_id_seq"', 2635, true);


--
-- Name: _featuresBlock_v_columns_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_columns_locales_id_seq"', 2630, true);


--
-- Name: _featuresBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_id_seq"', 863, true);


--
-- Name: _featuresBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_featuresBlock_v_locales_id_seq"', 656, true);


--
-- Name: _formBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_formBlock_v_id_seq"', 13, true);


--
-- Name: _galleryBlock_v_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_block_header_links_id_seq"', 1, false);


--
-- Name: _galleryBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_block_header_links_locales_id_seq"', 1, false);


--
-- Name: _galleryBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_id_seq"', 1, true);


--
-- Name: _galleryBlock_v_interactive_gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_interactive_gallery_id_seq"', 1, false);


--
-- Name: _galleryBlock_v_interactive_gallery_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_interactive_gallery_locales_id_seq"', 1, false);


--
-- Name: _galleryBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_galleryBlock_v_locales_id_seq"', 1, false);


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_blocks_faq_block_block_header_links_id_seq"', 1, false);


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_loca_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_blocks_faq_block_block_header_links_loca_id_seq"', 1, false);


--
-- Name: _integrations_v_blocks_faq_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_blocks_faq_block_id_seq"', 1, false);


--
-- Name: _integrations_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: _integrations_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_id_seq"', 82, true);


--
-- Name: _integrations_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_locales_id_seq"', 84, true);


--
-- Name: _integrations_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_rels_id_seq"', 150, true);


--
-- Name: _integrations_v_version_hero_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_version_hero_links_id_seq"', 1, false);


--
-- Name: _integrations_v_version_hero_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_version_hero_links_locales_id_seq"', 1, false);


--
-- Name: _integrations_v_version_hero_logos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_integrations_v_version_hero_logos_id_seq"', 1, false);


--
-- Name: _pages_v_blocks_faq_block_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_blocks_faq_block_block_header_links_id_seq"', 1, false);


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_blocks_faq_block_block_header_links_locales_id_seq"', 1, false);


--
-- Name: _pages_v_blocks_faq_block_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_blocks_faq_block_id_seq"', 1, false);


--
-- Name: _pages_v_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: _pages_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_id_seq"', 32, true);


--
-- Name: _pages_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_locales_id_seq"', 351, true);


--
-- Name: _pages_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_rels_id_seq"', 1139, true);


--
-- Name: _pages_v_version_hero_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_version_hero_links_id_seq"', 238, true);


--
-- Name: _pages_v_version_hero_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_version_hero_links_locales_id_seq"', 238, true);


--
-- Name: _pages_v_version_hero_logos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_pages_v_version_hero_logos_id_seq"', 187, true);


--
-- Name: _posts_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_posts_v_id_seq"', 1, false);


--
-- Name: _posts_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_posts_v_locales_id_seq"', 1, false);


--
-- Name: _posts_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_posts_v_rels_id_seq"', 1, false);


--
-- Name: _posts_v_version_populated_authors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_posts_v_version_populated_authors_id_seq"', 1, false);


--
-- Name: _solutions_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_solutions_v_id_seq"', 46, true);


--
-- Name: _solutions_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_solutions_v_locales_id_seq"', 46, true);


--
-- Name: _solutions_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_solutions_v_rels_id_seq"', 1, false);


--
-- Name: _testimonialsBlock_v_block_header_links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonialsBlock_v_block_header_links_id_seq"', 1, false);


--
-- Name: _testimonialsBlock_v_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonialsBlock_v_block_header_links_locales_id_seq"', 1, false);


--
-- Name: _testimonialsBlock_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonialsBlock_v_id_seq"', 3, true);


--
-- Name: _testimonialsBlock_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonialsBlock_v_locales_id_seq"', 1, false);


--
-- Name: _testimonials_v_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonials_v_id_seq"', 30, true);


--
-- Name: _testimonials_v_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonials_v_locales_id_seq"', 30, true);


--
-- Name: _testimonials_v_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."_testimonials_v_rels_id_seq"', 1, false);


--
-- Name: archiveBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."archiveBlock_locales_id_seq"', 1, false);


--
-- Name: callToActionBlock_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."callToActionBlock_links_locales_id_seq"', 1, false);


--
-- Name: callToActionBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."callToActionBlock_locales_id_seq"', 1, false);


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_blocks_faq_block_block_header_links_locales_id_seq"', 1, false);


--
-- Name: case_studies_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: case_studies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_id_seq"', 18, true);


--
-- Name: case_studies_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_locales_id_seq"', 37, true);


--
-- Name: case_studies_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_rels_id_seq"', 148, true);


--
-- Name: case_studies_stats_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."case_studies_stats_locales_id_seq"', 74, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."categories_id_seq"', 133, true);


--
-- Name: categories_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."categories_locales_id_seq"', 238, true);


--
-- Name: changelog_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."changelog_categories_id_seq"', 60, true);


--
-- Name: changelog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."changelog_id_seq"', 30, true);


--
-- Name: changelog_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."changelog_locales_id_seq"', 30, true);


--
-- Name: customHtmlBlock_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."customHtmlBlock_block_header_links_locales_id_seq"', 1, false);


--
-- Name: customHtmlBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."customHtmlBlock_locales_id_seq"', 1, false);


--
-- Name: faq_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."faq_id_seq"', 1, true);


--
-- Name: faq_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."faq_locales_id_seq"', 1, true);


--
-- Name: featuredAppsBlock_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuredAppsBlock_block_header_links_locales_id_seq"', 1, true);


--
-- Name: featuredAppsBlock_cards_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuredAppsBlock_cards_locales_id_seq"', 1, false);


--
-- Name: featuredAppsBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuredAppsBlock_locales_id_seq"', 1, true);


--
-- Name: featuresBlock_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuresBlock_block_header_links_locales_id_seq"', 16, true);


--
-- Name: featuresBlock_columns_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuresBlock_columns_locales_id_seq"', 400, true);


--
-- Name: featuresBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."featuresBlock_locales_id_seq"', 110, true);


--
-- Name: footer_columns_nav_items_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."footer_columns_nav_items_locales_id_seq"', 40, true);


--
-- Name: footer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."footer_id_seq"', 1, true);


--
-- Name: footer_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."footer_rels_id_seq"', 1, false);


--
-- Name: form_submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."form_submissions_id_seq"', 1, false);


--
-- Name: forms_blocks_checkbox_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_checkbox_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_country_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_country_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_email_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_email_locales_id_seq"', 3, true);


--
-- Name: forms_blocks_message_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_message_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_number_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_number_locales_id_seq"', 3, true);


--
-- Name: forms_blocks_select_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_select_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_select_options_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_select_options_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_state_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_state_locales_id_seq"', 1, false);


--
-- Name: forms_blocks_text_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_text_locales_id_seq"', 3, true);


--
-- Name: forms_blocks_textarea_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_blocks_textarea_locales_id_seq"', 3, true);


--
-- Name: forms_emails_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_emails_locales_id_seq"', 3, true);


--
-- Name: forms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_id_seq"', 3, true);


--
-- Name: forms_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."forms_locales_id_seq"', 3, true);


--
-- Name: galleryBlock_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."galleryBlock_block_header_links_locales_id_seq"', 1, false);


--
-- Name: galleryBlock_interactive_gallery_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."galleryBlock_interactive_gallery_locales_id_seq"', 1, false);


--
-- Name: galleryBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."galleryBlock_locales_id_seq"', 1, false);


--
-- Name: header_cta_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_cta_locales_id_seq"', 8, true);


--
-- Name: header_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_id_seq"', 1, true);


--
-- Name: header_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_rels_id_seq"', 40, true);


--
-- Name: header_tabs_description_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_tabs_description_links_locales_id_seq"', 1, false);


--
-- Name: header_tabs_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_tabs_locales_id_seq"', 16, true);


--
-- Name: header_tabs_nav_items_featured_link_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_tabs_nav_items_featured_link_links_locales_id_seq"', 1, false);


--
-- Name: header_tabs_nav_items_list_links_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_tabs_nav_items_list_links_links_locales_id_seq"', 88, true);


--
-- Name: header_tabs_nav_items_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."header_tabs_nav_items_locales_id_seq"', 28, true);


--
-- Name: integrations_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_blocks_faq_block_block_header_links_locales_id_seq"', 1, false);


--
-- Name: integrations_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: integrations_hero_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_hero_links_locales_id_seq"', 1, false);


--
-- Name: integrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_id_seq"', 60, true);


--
-- Name: integrations_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_locales_id_seq"', 107, true);


--
-- Name: integrations_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."integrations_rels_id_seq"', 172, true);


--
-- Name: media_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."media_id_seq"', 28, true);


--
-- Name: media_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."media_rels_id_seq"', 13, true);


--
-- Name: pages_blocks_faq_block_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_blocks_faq_block_block_header_links_locales_id_seq"', 1, false);


--
-- Name: pages_blocks_faq_block_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_blocks_faq_block_locales_id_seq"', 1, false);


--
-- Name: pages_hero_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_hero_links_locales_id_seq"', 14, true);


--
-- Name: pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_id_seq"', 11, true);


--
-- Name: pages_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_locales_id_seq"', 31, true);


--
-- Name: pages_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."pages_rels_id_seq"', 102, true);


--
-- Name: payload_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_jobs_id_seq"', 1, false);


--
-- Name: payload_locked_documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_locked_documents_id_seq"', 141, true);


--
-- Name: payload_locked_documents_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_locked_documents_rels_id_seq"', 280, true);


--
-- Name: payload_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_migrations_id_seq"', 1, true);


--
-- Name: payload_preferences_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_preferences_id_seq"', 57, true);


--
-- Name: payload_preferences_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."payload_preferences_rels_id_seq"', 175, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 1, false);


--
-- Name: posts_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."posts_locales_id_seq"', 1, false);


--
-- Name: posts_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."posts_rels_id_seq"', 1, false);


--
-- Name: redirects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."redirects_id_seq"', 1, false);


--
-- Name: redirects_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."redirects_rels_id_seq"', 1, false);


--
-- Name: search_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."search_id_seq"', 1, false);


--
-- Name: search_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."search_locales_id_seq"', 1, false);


--
-- Name: search_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."search_rels_id_seq"', 1, false);


--
-- Name: settings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."settings_id_seq"', 1, false);


--
-- Name: settings_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."settings_locales_id_seq"', 1, false);


--
-- Name: settings_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."settings_rels_id_seq"', 1, false);


--
-- Name: solutions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."solutions_id_seq"', 50, true);


--
-- Name: solutions_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."solutions_locales_id_seq"', 51, true);


--
-- Name: solutions_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."solutions_rels_id_seq"', 1, false);


--
-- Name: testimonialsBlock_block_header_links_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."testimonialsBlock_block_header_links_locales_id_seq"', 1, false);


--
-- Name: testimonialsBlock_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."testimonialsBlock_locales_id_seq"', 1, false);


--
-- Name: testimonials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."testimonials_id_seq"', 30, true);


--
-- Name: testimonials_locales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."testimonials_locales_id_seq"', 30, true);


--
-- Name: testimonials_rels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."testimonials_rels_id_seq"', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 12, true);


--
-- Name: _archiveBlock_v_locales _archiveBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v_locales"
    ADD CONSTRAINT "_archiveBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _archiveBlock_v _archiveBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v"
    ADD CONSTRAINT "_archiveBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _callToActionBlock_v_links_locales _callToActionBlock_v_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links_locales"
    ADD CONSTRAINT "_callToActionBlock_v_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _callToActionBlock_v_links _callToActionBlock_v_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links"
    ADD CONSTRAINT "_callToActionBlock_v_links_pkey" PRIMARY KEY ("id");


--
-- Name: _callToActionBlock_v_list _callToActionBlock_v_list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_list"
    ADD CONSTRAINT "_callToActionBlock_v_list_pkey" PRIMARY KEY ("id");


--
-- Name: _callToActionBlock_v_locales _callToActionBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_locales"
    ADD CONSTRAINT "_callToActionBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _callToActionBlock_v _callToActionBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v"
    ADD CONSTRAINT "_callToActionBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_locales _case_studies_v_blocks_faq_block_block_header_links_locale_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_block_header_links_locale_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links _case_studies_v_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_blocks_faq_block_locales _case_studies_v_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_blocks_faq_block _case_studies_v_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_locales _case_studies_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_locales"
    ADD CONSTRAINT "_case_studies_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v _case_studies_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v"
    ADD CONSTRAINT "_case_studies_v_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_rels _case_studies_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_version_stats_locales _case_studies_v_version_stats_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats_locales"
    ADD CONSTRAINT "_case_studies_v_version_stats_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _case_studies_v_version_stats _case_studies_v_version_stats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats"
    ADD CONSTRAINT "_case_studies_v_version_stats_pkey" PRIMARY KEY ("id");


--
-- Name: _customHtmlBlock_v_block_header_links_locales _customHtmlBlock_v_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _customHtmlBlock_v_block_header_links _customHtmlBlock_v_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links"
    ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _customHtmlBlock_v_locales _customHtmlBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_locales"
    ADD CONSTRAINT "_customHtmlBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _customHtmlBlock_v _customHtmlBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v"
    ADD CONSTRAINT "_customHtmlBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _dividerBlock_v _dividerBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_dividerBlock_v"
    ADD CONSTRAINT "_dividerBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v_block_header_links_locales _featuredAppsBlock_v_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v_block_header_links _featuredAppsBlock_v_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links"
    ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v_cards_locales _featuredAppsBlock_v_cards_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_cards_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v_cards _featuredAppsBlock_v_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards"
    ADD CONSTRAINT "_featuredAppsBlock_v_cards_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v_locales _featuredAppsBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuredAppsBlock_v _featuredAppsBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v"
    ADD CONSTRAINT "_featuredAppsBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v_block_header_links_locales _featuresBlock_v_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_featuresBlock_v_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v_block_header_links _featuresBlock_v_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links"
    ADD CONSTRAINT "_featuresBlock_v_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v_columns_locales _featuresBlock_v_columns_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns_locales"
    ADD CONSTRAINT "_featuresBlock_v_columns_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v_columns _featuresBlock_v_columns_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns"
    ADD CONSTRAINT "_featuresBlock_v_columns_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v_locales _featuresBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_locales"
    ADD CONSTRAINT "_featuresBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _featuresBlock_v _featuresBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v"
    ADD CONSTRAINT "_featuresBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _formBlock_v _formBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_formBlock_v"
    ADD CONSTRAINT "_formBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v_block_header_links_locales _galleryBlock_v_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_galleryBlock_v_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v_block_header_links _galleryBlock_v_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links"
    ADD CONSTRAINT "_galleryBlock_v_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v_interactive_gallery_locales _galleryBlock_v_interactive_gallery_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery_locales"
    ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v_interactive_gallery _galleryBlock_v_interactive_gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery"
    ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v_locales _galleryBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_locales"
    ADD CONSTRAINT "_galleryBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _galleryBlock_v _galleryBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v"
    ADD CONSTRAINT "_galleryBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_locales _integrations_v_blocks_faq_block_block_header_links_locale_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_block_header_links_locale_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links _integrations_v_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_blocks_faq_block_locales _integrations_v_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_blocks_faq_block _integrations_v_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_locales _integrations_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_locales"
    ADD CONSTRAINT "_integrations_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v _integrations_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v"
    ADD CONSTRAINT "_integrations_v_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_rels _integrations_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_version_hero_links_locales _integrations_v_version_hero_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links_locales"
    ADD CONSTRAINT "_integrations_v_version_hero_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_version_hero_links _integrations_v_version_hero_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links"
    ADD CONSTRAINT "_integrations_v_version_hero_links_pkey" PRIMARY KEY ("id");


--
-- Name: _integrations_v_version_hero_logos _integrations_v_version_hero_logos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_logos"
    ADD CONSTRAINT "_integrations_v_version_hero_logos_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales _pages_v_blocks_faq_block_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_blocks_faq_block_block_header_links _pages_v_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_blocks_faq_block_locales _pages_v_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_blocks_faq_block _pages_v_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_locales _pages_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_locales"
    ADD CONSTRAINT "_pages_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v _pages_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v"
    ADD CONSTRAINT "_pages_v_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_rels _pages_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_version_hero_links_locales _pages_v_version_hero_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links_locales"
    ADD CONSTRAINT "_pages_v_version_hero_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_version_hero_links _pages_v_version_hero_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links"
    ADD CONSTRAINT "_pages_v_version_hero_links_pkey" PRIMARY KEY ("id");


--
-- Name: _pages_v_version_hero_logos _pages_v_version_hero_logos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_logos"
    ADD CONSTRAINT "_pages_v_version_hero_logos_pkey" PRIMARY KEY ("id");


--
-- Name: _posts_v_locales _posts_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_locales"
    ADD CONSTRAINT "_posts_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _posts_v _posts_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v"
    ADD CONSTRAINT "_posts_v_pkey" PRIMARY KEY ("id");


--
-- Name: _posts_v_rels _posts_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels"
    ADD CONSTRAINT "_posts_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: _posts_v_version_populated_authors _posts_v_version_populated_authors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_version_populated_authors"
    ADD CONSTRAINT "_posts_v_version_populated_authors_pkey" PRIMARY KEY ("id");


--
-- Name: _solutions_v_locales _solutions_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_locales"
    ADD CONSTRAINT "_solutions_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _solutions_v _solutions_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v"
    ADD CONSTRAINT "_solutions_v_pkey" PRIMARY KEY ("id");


--
-- Name: _solutions_v_rels _solutions_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels"
    ADD CONSTRAINT "_solutions_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonialsBlock_v_block_header_links_locales _testimonialsBlock_v_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonialsBlock_v_block_header_links _testimonialsBlock_v_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links"
    ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonialsBlock_v_locales _testimonialsBlock_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_locales"
    ADD CONSTRAINT "_testimonialsBlock_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonialsBlock_v _testimonialsBlock_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v"
    ADD CONSTRAINT "_testimonialsBlock_v_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonials_v_locales _testimonials_v_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_locales"
    ADD CONSTRAINT "_testimonials_v_locales_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonials_v _testimonials_v_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v"
    ADD CONSTRAINT "_testimonials_v_pkey" PRIMARY KEY ("id");


--
-- Name: _testimonials_v_rels _testimonials_v_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_rels"
    ADD CONSTRAINT "_testimonials_v_rels_pkey" PRIMARY KEY ("id");


--
-- Name: archiveBlock_locales archiveBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."archiveBlock_locales"
    ADD CONSTRAINT "archiveBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: archiveBlock archiveBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."archiveBlock"
    ADD CONSTRAINT "archiveBlock_pkey" PRIMARY KEY ("id");


--
-- Name: callToActionBlock_links_locales callToActionBlock_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_links_locales"
    ADD CONSTRAINT "callToActionBlock_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: callToActionBlock_links callToActionBlock_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_links"
    ADD CONSTRAINT "callToActionBlock_links_pkey" PRIMARY KEY ("id");


--
-- Name: callToActionBlock_list callToActionBlock_list_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_list"
    ADD CONSTRAINT "callToActionBlock_list_pkey" PRIMARY KEY ("id");


--
-- Name: callToActionBlock_locales callToActionBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_locales"
    ADD CONSTRAINT "callToActionBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: callToActionBlock callToActionBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock"
    ADD CONSTRAINT "callToActionBlock_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales case_studies_blocks_faq_block_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "case_studies_blocks_faq_block_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_blocks_faq_block_block_header_links case_studies_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "case_studies_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_blocks_faq_block_locales case_studies_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_locales"
    ADD CONSTRAINT "case_studies_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_blocks_faq_block case_studies_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block"
    ADD CONSTRAINT "case_studies_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_locales case_studies_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_locales"
    ADD CONSTRAINT "case_studies_locales_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies case_studies_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies"
    ADD CONSTRAINT "case_studies_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_rels case_studies_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_stats_locales case_studies_stats_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_stats_locales"
    ADD CONSTRAINT "case_studies_stats_locales_pkey" PRIMARY KEY ("id");


--
-- Name: case_studies_stats case_studies_stats_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_stats"
    ADD CONSTRAINT "case_studies_stats_pkey" PRIMARY KEY ("id");


--
-- Name: categories_breadcrumbs categories_breadcrumbs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_breadcrumbs"
    ADD CONSTRAINT "categories_breadcrumbs_pkey" PRIMARY KEY ("id");


--
-- Name: categories_locales categories_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_locales"
    ADD CONSTRAINT "categories_locales_pkey" PRIMARY KEY ("id");


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_pkey" PRIMARY KEY ("id");


--
-- Name: changelog_categories changelog_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_categories"
    ADD CONSTRAINT "changelog_categories_pkey" PRIMARY KEY ("id");


--
-- Name: changelog_locales changelog_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_locales"
    ADD CONSTRAINT "changelog_locales_pkey" PRIMARY KEY ("id");


--
-- Name: changelog changelog_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog"
    ADD CONSTRAINT "changelog_pkey" PRIMARY KEY ("id");


--
-- Name: customHtmlBlock_block_header_links_locales customHtmlBlock_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_block_header_links_locales"
    ADD CONSTRAINT "customHtmlBlock_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: customHtmlBlock_block_header_links customHtmlBlock_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_block_header_links"
    ADD CONSTRAINT "customHtmlBlock_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: customHtmlBlock_locales customHtmlBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_locales"
    ADD CONSTRAINT "customHtmlBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: customHtmlBlock customHtmlBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock"
    ADD CONSTRAINT "customHtmlBlock_pkey" PRIMARY KEY ("id");


--
-- Name: dividerBlock dividerBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."dividerBlock"
    ADD CONSTRAINT "dividerBlock_pkey" PRIMARY KEY ("id");


--
-- Name: faq_locales faq_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."faq_locales"
    ADD CONSTRAINT "faq_locales_pkey" PRIMARY KEY ("id");


--
-- Name: faq faq_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."faq"
    ADD CONSTRAINT "faq_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock_block_header_links_locales featuredAppsBlock_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_block_header_links_locales"
    ADD CONSTRAINT "featuredAppsBlock_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock_block_header_links featuredAppsBlock_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_block_header_links"
    ADD CONSTRAINT "featuredAppsBlock_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock_cards_locales featuredAppsBlock_cards_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_cards_locales"
    ADD CONSTRAINT "featuredAppsBlock_cards_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock_cards featuredAppsBlock_cards_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_cards"
    ADD CONSTRAINT "featuredAppsBlock_cards_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock_locales featuredAppsBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_locales"
    ADD CONSTRAINT "featuredAppsBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuredAppsBlock featuredAppsBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock"
    ADD CONSTRAINT "featuredAppsBlock_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock_block_header_links_locales featuresBlock_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_block_header_links_locales"
    ADD CONSTRAINT "featuresBlock_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock_block_header_links featuresBlock_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_block_header_links"
    ADD CONSTRAINT "featuresBlock_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock_columns_locales featuresBlock_columns_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns_locales"
    ADD CONSTRAINT "featuresBlock_columns_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock_columns featuresBlock_columns_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns"
    ADD CONSTRAINT "featuresBlock_columns_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock_locales featuresBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_locales"
    ADD CONSTRAINT "featuresBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: featuresBlock featuresBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock"
    ADD CONSTRAINT "featuresBlock_pkey" PRIMARY KEY ("id");


--
-- Name: footer_columns_nav_items_locales footer_columns_nav_items_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns_nav_items_locales"
    ADD CONSTRAINT "footer_columns_nav_items_locales_pkey" PRIMARY KEY ("id");


--
-- Name: footer_columns_nav_items footer_columns_nav_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns_nav_items"
    ADD CONSTRAINT "footer_columns_nav_items_pkey" PRIMARY KEY ("id");


--
-- Name: footer_columns footer_columns_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns"
    ADD CONSTRAINT "footer_columns_pkey" PRIMARY KEY ("id");


--
-- Name: footer footer_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer"
    ADD CONSTRAINT "footer_pkey" PRIMARY KEY ("id");


--
-- Name: footer_rels footer_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels"
    ADD CONSTRAINT "footer_rels_pkey" PRIMARY KEY ("id");


--
-- Name: formBlock formBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."formBlock"
    ADD CONSTRAINT "formBlock_pkey" PRIMARY KEY ("id");


--
-- Name: form_submissions form_submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."form_submissions"
    ADD CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id");


--
-- Name: form_submissions_submission_data form_submissions_submission_data_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."form_submissions_submission_data"
    ADD CONSTRAINT "form_submissions_submission_data_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_checkbox_locales forms_blocks_checkbox_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_checkbox_locales"
    ADD CONSTRAINT "forms_blocks_checkbox_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_checkbox forms_blocks_checkbox_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_checkbox"
    ADD CONSTRAINT "forms_blocks_checkbox_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_country_locales forms_blocks_country_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_country_locales"
    ADD CONSTRAINT "forms_blocks_country_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_country forms_blocks_country_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_country"
    ADD CONSTRAINT "forms_blocks_country_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_email_locales forms_blocks_email_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_email_locales"
    ADD CONSTRAINT "forms_blocks_email_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_email forms_blocks_email_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_email"
    ADD CONSTRAINT "forms_blocks_email_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_message_locales forms_blocks_message_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_message_locales"
    ADD CONSTRAINT "forms_blocks_message_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_message forms_blocks_message_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_message"
    ADD CONSTRAINT "forms_blocks_message_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_number_locales forms_blocks_number_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_number_locales"
    ADD CONSTRAINT "forms_blocks_number_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_number forms_blocks_number_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_number"
    ADD CONSTRAINT "forms_blocks_number_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_select_locales forms_blocks_select_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_locales"
    ADD CONSTRAINT "forms_blocks_select_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_select_options_locales forms_blocks_select_options_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_options_locales"
    ADD CONSTRAINT "forms_blocks_select_options_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_select_options forms_blocks_select_options_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_options"
    ADD CONSTRAINT "forms_blocks_select_options_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_select forms_blocks_select_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select"
    ADD CONSTRAINT "forms_blocks_select_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_state_locales forms_blocks_state_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_state_locales"
    ADD CONSTRAINT "forms_blocks_state_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_state forms_blocks_state_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_state"
    ADD CONSTRAINT "forms_blocks_state_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_text_locales forms_blocks_text_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_text_locales"
    ADD CONSTRAINT "forms_blocks_text_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_text forms_blocks_text_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_text"
    ADD CONSTRAINT "forms_blocks_text_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_textarea_locales forms_blocks_textarea_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_textarea_locales"
    ADD CONSTRAINT "forms_blocks_textarea_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_blocks_textarea forms_blocks_textarea_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_textarea"
    ADD CONSTRAINT "forms_blocks_textarea_pkey" PRIMARY KEY ("id");


--
-- Name: forms_emails_locales forms_emails_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_emails_locales"
    ADD CONSTRAINT "forms_emails_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms_emails forms_emails_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_emails"
    ADD CONSTRAINT "forms_emails_pkey" PRIMARY KEY ("id");


--
-- Name: forms_locales forms_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_locales"
    ADD CONSTRAINT "forms_locales_pkey" PRIMARY KEY ("id");


--
-- Name: forms forms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms"
    ADD CONSTRAINT "forms_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock_block_header_links_locales galleryBlock_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_block_header_links_locales"
    ADD CONSTRAINT "galleryBlock_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock_block_header_links galleryBlock_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_block_header_links"
    ADD CONSTRAINT "galleryBlock_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock_interactive_gallery_locales galleryBlock_interactive_gallery_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery_locales"
    ADD CONSTRAINT "galleryBlock_interactive_gallery_locales_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock_interactive_gallery galleryBlock_interactive_gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery"
    ADD CONSTRAINT "galleryBlock_interactive_gallery_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock_locales galleryBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_locales"
    ADD CONSTRAINT "galleryBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: galleryBlock galleryBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock"
    ADD CONSTRAINT "galleryBlock_pkey" PRIMARY KEY ("id");


--
-- Name: header_cta_locales header_cta_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_cta_locales"
    ADD CONSTRAINT "header_cta_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_cta header_cta_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_cta"
    ADD CONSTRAINT "header_cta_pkey" PRIMARY KEY ("id");


--
-- Name: header header_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header"
    ADD CONSTRAINT "header_pkey" PRIMARY KEY ("id");


--
-- Name: header_rels header_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels"
    ADD CONSTRAINT "header_rels_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_description_links_locales header_tabs_description_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_description_links_locales"
    ADD CONSTRAINT "header_tabs_description_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_description_links header_tabs_description_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_description_links"
    ADD CONSTRAINT "header_tabs_description_links_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_locales header_tabs_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_locales"
    ADD CONSTRAINT "header_tabs_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items_featured_link_links_locales header_tabs_nav_items_featured_link_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_featured_link_links_locales"
    ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items_featured_link_links header_tabs_nav_items_featured_link_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_featured_link_links"
    ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items_list_links_links_locales header_tabs_nav_items_list_links_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_list_links_links_locales"
    ADD CONSTRAINT "header_tabs_nav_items_list_links_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items_list_links_links header_tabs_nav_items_list_links_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_list_links_links"
    ADD CONSTRAINT "header_tabs_nav_items_list_links_links_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items_locales header_tabs_nav_items_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_locales"
    ADD CONSTRAINT "header_tabs_nav_items_locales_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs_nav_items header_tabs_nav_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items"
    ADD CONSTRAINT "header_tabs_nav_items_pkey" PRIMARY KEY ("id");


--
-- Name: header_tabs header_tabs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs"
    ADD CONSTRAINT "header_tabs_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_blocks_faq_block_block_header_links_locales integrations_blocks_faq_block_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "integrations_blocks_faq_block_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_blocks_faq_block_block_header_links integrations_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "integrations_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_blocks_faq_block_locales integrations_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_locales"
    ADD CONSTRAINT "integrations_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_blocks_faq_block integrations_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block"
    ADD CONSTRAINT "integrations_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_hero_links_locales integrations_hero_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_links_locales"
    ADD CONSTRAINT "integrations_hero_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_hero_links integrations_hero_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_links"
    ADD CONSTRAINT "integrations_hero_links_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_hero_logos integrations_hero_logos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_logos"
    ADD CONSTRAINT "integrations_hero_logos_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_locales integrations_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_locales"
    ADD CONSTRAINT "integrations_locales_pkey" PRIMARY KEY ("id");


--
-- Name: integrations integrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations"
    ADD CONSTRAINT "integrations_pkey" PRIMARY KEY ("id");


--
-- Name: integrations_rels integrations_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_pkey" PRIMARY KEY ("id");


--
-- Name: media media_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media"
    ADD CONSTRAINT "media_pkey" PRIMARY KEY ("id");


--
-- Name: media_rels media_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media_rels"
    ADD CONSTRAINT "media_rels_pkey" PRIMARY KEY ("id");


--
-- Name: pages_blocks_faq_block_block_header_links_locales pages_blocks_faq_block_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "pages_blocks_faq_block_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: pages_blocks_faq_block_block_header_links pages_blocks_faq_block_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "pages_blocks_faq_block_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: pages_blocks_faq_block_locales pages_blocks_faq_block_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_locales"
    ADD CONSTRAINT "pages_blocks_faq_block_locales_pkey" PRIMARY KEY ("id");


--
-- Name: pages_blocks_faq_block pages_blocks_faq_block_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block"
    ADD CONSTRAINT "pages_blocks_faq_block_pkey" PRIMARY KEY ("id");


--
-- Name: pages_hero_links_locales pages_hero_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_links_locales"
    ADD CONSTRAINT "pages_hero_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: pages_hero_links pages_hero_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_links"
    ADD CONSTRAINT "pages_hero_links_pkey" PRIMARY KEY ("id");


--
-- Name: pages_hero_logos pages_hero_logos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_logos"
    ADD CONSTRAINT "pages_hero_logos_pkey" PRIMARY KEY ("id");


--
-- Name: pages_locales pages_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_locales"
    ADD CONSTRAINT "pages_locales_pkey" PRIMARY KEY ("id");


--
-- Name: pages pages_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages"
    ADD CONSTRAINT "pages_pkey" PRIMARY KEY ("id");


--
-- Name: pages_rels pages_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_pkey" PRIMARY KEY ("id");


--
-- Name: payload_jobs_log payload_jobs_log_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_jobs_log"
    ADD CONSTRAINT "payload_jobs_log_pkey" PRIMARY KEY ("id");


--
-- Name: payload_jobs payload_jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_jobs"
    ADD CONSTRAINT "payload_jobs_pkey" PRIMARY KEY ("id");


--
-- Name: payload_locked_documents payload_locked_documents_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents"
    ADD CONSTRAINT "payload_locked_documents_pkey" PRIMARY KEY ("id");


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_pkey" PRIMARY KEY ("id");


--
-- Name: payload_migrations payload_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_migrations"
    ADD CONSTRAINT "payload_migrations_pkey" PRIMARY KEY ("id");


--
-- Name: payload_preferences payload_preferences_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences"
    ADD CONSTRAINT "payload_preferences_pkey" PRIMARY KEY ("id");


--
-- Name: payload_preferences_rels payload_preferences_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences_rels"
    ADD CONSTRAINT "payload_preferences_rels_pkey" PRIMARY KEY ("id");


--
-- Name: posts_locales posts_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_locales"
    ADD CONSTRAINT "posts_locales_pkey" PRIMARY KEY ("id");


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts"
    ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");


--
-- Name: posts_populated_authors posts_populated_authors_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_populated_authors"
    ADD CONSTRAINT "posts_populated_authors_pkey" PRIMARY KEY ("id");


--
-- Name: posts_rels posts_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels"
    ADD CONSTRAINT "posts_rels_pkey" PRIMARY KEY ("id");


--
-- Name: redirects redirects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects"
    ADD CONSTRAINT "redirects_pkey" PRIMARY KEY ("id");


--
-- Name: redirects_rels redirects_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects_rels"
    ADD CONSTRAINT "redirects_rels_pkey" PRIMARY KEY ("id");


--
-- Name: search_categories search_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_categories"
    ADD CONSTRAINT "search_categories_pkey" PRIMARY KEY ("id");


--
-- Name: search_locales search_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_locales"
    ADD CONSTRAINT "search_locales_pkey" PRIMARY KEY ("id");


--
-- Name: search search_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search"
    ADD CONSTRAINT "search_pkey" PRIMARY KEY ("id");


--
-- Name: search_rels search_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_rels"
    ADD CONSTRAINT "search_rels_pkey" PRIMARY KEY ("id");


--
-- Name: settings_locales settings_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_locales"
    ADD CONSTRAINT "settings_locales_pkey" PRIMARY KEY ("id");


--
-- Name: settings settings_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings"
    ADD CONSTRAINT "settings_pkey" PRIMARY KEY ("id");


--
-- Name: settings_rels settings_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels"
    ADD CONSTRAINT "settings_rels_pkey" PRIMARY KEY ("id");


--
-- Name: solutions_locales solutions_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_locales"
    ADD CONSTRAINT "solutions_locales_pkey" PRIMARY KEY ("id");


--
-- Name: solutions solutions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions"
    ADD CONSTRAINT "solutions_pkey" PRIMARY KEY ("id");


--
-- Name: solutions_rels solutions_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels"
    ADD CONSTRAINT "solutions_rels_pkey" PRIMARY KEY ("id");


--
-- Name: testimonialsBlock_block_header_links_locales testimonialsBlock_block_header_links_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_block_header_links_locales"
    ADD CONSTRAINT "testimonialsBlock_block_header_links_locales_pkey" PRIMARY KEY ("id");


--
-- Name: testimonialsBlock_block_header_links testimonialsBlock_block_header_links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_block_header_links"
    ADD CONSTRAINT "testimonialsBlock_block_header_links_pkey" PRIMARY KEY ("id");


--
-- Name: testimonialsBlock_locales testimonialsBlock_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_locales"
    ADD CONSTRAINT "testimonialsBlock_locales_pkey" PRIMARY KEY ("id");


--
-- Name: testimonialsBlock testimonialsBlock_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock"
    ADD CONSTRAINT "testimonialsBlock_pkey" PRIMARY KEY ("id");


--
-- Name: testimonials_locales testimonials_locales_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_locales"
    ADD CONSTRAINT "testimonials_locales_pkey" PRIMARY KEY ("id");


--
-- Name: testimonials testimonials_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials"
    ADD CONSTRAINT "testimonials_pkey" PRIMARY KEY ("id");


--
-- Name: testimonials_rels testimonials_rels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_rels"
    ADD CONSTRAINT "testimonials_rels_pkey" PRIMARY KEY ("id");


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."users"
    ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");


--
-- Name: _archiveBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_archiveBlock_v_locales_locale_parent_id_unique" ON "public"."_archiveBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _archiveBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_archiveBlock_v_order_idx" ON "public"."_archiveBlock_v" USING "btree" ("_order");


--
-- Name: _archiveBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_archiveBlock_v_parent_id_idx" ON "public"."_archiveBlock_v" USING "btree" ("_parent_id");


--
-- Name: _archiveBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_archiveBlock_v_path_idx" ON "public"."_archiveBlock_v" USING "btree" ("_path");


--
-- Name: _callToActionBlock_v_form_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_form_idx" ON "public"."_callToActionBlock_v" USING "btree" ("form_id");


--
-- Name: _callToActionBlock_v_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_callToActionBlock_v_links_locales_locale_parent_id_unique" ON "public"."_callToActionBlock_v_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _callToActionBlock_v_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_links_order_idx" ON "public"."_callToActionBlock_v_links" USING "btree" ("_order");


--
-- Name: _callToActionBlock_v_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_links_parent_id_idx" ON "public"."_callToActionBlock_v_links" USING "btree" ("_parent_id");


--
-- Name: _callToActionBlock_v_list_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_list_locale_idx" ON "public"."_callToActionBlock_v_list" USING "btree" ("_locale");


--
-- Name: _callToActionBlock_v_list_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_list_order_idx" ON "public"."_callToActionBlock_v_list" USING "btree" ("_order");


--
-- Name: _callToActionBlock_v_list_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_list_parent_id_idx" ON "public"."_callToActionBlock_v_list" USING "btree" ("_parent_id");


--
-- Name: _callToActionBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_callToActionBlock_v_locales_locale_parent_id_unique" ON "public"."_callToActionBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _callToActionBlock_v_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_media_idx" ON "public"."_callToActionBlock_v_locales" USING "btree" ("media_id", "_locale");


--
-- Name: _callToActionBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_order_idx" ON "public"."_callToActionBlock_v" USING "btree" ("_order");


--
-- Name: _callToActionBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_parent_id_idx" ON "public"."_callToActionBlock_v" USING "btree" ("_parent_id");


--
-- Name: _callToActionBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_callToActionBlock_v_path_idx" ON "public"."_callToActionBlock_v" USING "btree" ("_path");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_locales_loc; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_case_studies_v_blocks_faq_block_block_header_links_locales_loc" ON "public"."_case_studies_v_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_blocks_faq_block_block_header_links_order_idx" ON "public"."_case_studies_v_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_parent_id_i; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_blocks_faq_block_block_header_links_parent_id_i" ON "public"."_case_studies_v_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _case_studies_v_blocks_faq_block_locales_locale_parent_id_uniqu; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_case_studies_v_blocks_faq_block_locales_locale_parent_id_uniqu" ON "public"."_case_studies_v_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _case_studies_v_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_blocks_faq_block_order_idx" ON "public"."_case_studies_v_blocks_faq_block" USING "btree" ("_order");


--
-- Name: _case_studies_v_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_blocks_faq_block_parent_id_idx" ON "public"."_case_studies_v_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: _case_studies_v_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_blocks_faq_block_path_idx" ON "public"."_case_studies_v_blocks_faq_block" USING "btree" ("_path");


--
-- Name: _case_studies_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_created_at_idx" ON "public"."_case_studies_v" USING "btree" ("created_at");


--
-- Name: _case_studies_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_latest_idx" ON "public"."_case_studies_v" USING "btree" ("latest");


--
-- Name: _case_studies_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_case_studies_v_locales_locale_parent_id_unique" ON "public"."_case_studies_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _case_studies_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_parent_idx" ON "public"."_case_studies_v" USING "btree" ("parent_id");


--
-- Name: _case_studies_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_published_locale_idx" ON "public"."_case_studies_v" USING "btree" ("published_locale");


--
-- Name: _case_studies_v_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_faq_id_idx" ON "public"."_case_studies_v_rels" USING "btree" ("faq_id");


--
-- Name: _case_studies_v_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_integrations_id_idx" ON "public"."_case_studies_v_rels" USING "btree" ("integrations_id");


--
-- Name: _case_studies_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_order_idx" ON "public"."_case_studies_v_rels" USING "btree" ("order");


--
-- Name: _case_studies_v_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_pages_id_idx" ON "public"."_case_studies_v_rels" USING "btree" ("pages_id");


--
-- Name: _case_studies_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_parent_idx" ON "public"."_case_studies_v_rels" USING "btree" ("parent_id");


--
-- Name: _case_studies_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_path_idx" ON "public"."_case_studies_v_rels" USING "btree" ("path");


--
-- Name: _case_studies_v_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_posts_id_idx" ON "public"."_case_studies_v_rels" USING "btree" ("posts_id");


--
-- Name: _case_studies_v_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_rels_solutions_id_idx" ON "public"."_case_studies_v_rels" USING "btree" ("solutions_id");


--
-- Name: _case_studies_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_snapshot_idx" ON "public"."_case_studies_v" USING "btree" ("snapshot");


--
-- Name: _case_studies_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_updated_at_idx" ON "public"."_case_studies_v" USING "btree" ("updated_at");


--
-- Name: _case_studies_v_version_stats_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_case_studies_v_version_stats_locales_locale_parent_id_unique" ON "public"."_case_studies_v_version_stats_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _case_studies_v_version_stats_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_stats_order_idx" ON "public"."_case_studies_v_version_stats" USING "btree" ("_order");


--
-- Name: _case_studies_v_version_stats_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_stats_parent_id_idx" ON "public"."_case_studies_v_version_stats" USING "btree" ("_parent_id");


--
-- Name: _case_studies_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_version__status_idx" ON "public"."_case_studies_v" USING "btree" ("version__status");


--
-- Name: _case_studies_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_version_created_at_idx" ON "public"."_case_studies_v" USING "btree" ("version_created_at");


--
-- Name: _case_studies_v_version_version_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_version_featured_image_idx" ON "public"."_case_studies_v_locales" USING "btree" ("version_featured_image_id", "_locale");


--
-- Name: _case_studies_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_version_slug_idx" ON "public"."_case_studies_v" USING "btree" ("version_slug");


--
-- Name: _case_studies_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_case_studies_v_version_version_updated_at_idx" ON "public"."_case_studies_v" USING "btree" ("version_updated_at");


--
-- Name: _customHtmlBlock_v_block_header_links_locales_locale_parent_id_; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_customHtmlBlock_v_block_header_links_locales_locale_parent_id_" ON "public"."_customHtmlBlock_v_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _customHtmlBlock_v_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_customHtmlBlock_v_block_header_links_order_idx" ON "public"."_customHtmlBlock_v_block_header_links" USING "btree" ("_order");


--
-- Name: _customHtmlBlock_v_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_customHtmlBlock_v_block_header_links_parent_id_idx" ON "public"."_customHtmlBlock_v_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _customHtmlBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_customHtmlBlock_v_locales_locale_parent_id_unique" ON "public"."_customHtmlBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _customHtmlBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_customHtmlBlock_v_order_idx" ON "public"."_customHtmlBlock_v" USING "btree" ("_order");


--
-- Name: _customHtmlBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_customHtmlBlock_v_parent_id_idx" ON "public"."_customHtmlBlock_v" USING "btree" ("_parent_id");


--
-- Name: _customHtmlBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_customHtmlBlock_v_path_idx" ON "public"."_customHtmlBlock_v" USING "btree" ("_path");


--
-- Name: _dividerBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_dividerBlock_v_order_idx" ON "public"."_dividerBlock_v" USING "btree" ("_order");


--
-- Name: _dividerBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_dividerBlock_v_parent_id_idx" ON "public"."_dividerBlock_v" USING "btree" ("_parent_id");


--
-- Name: _dividerBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_dividerBlock_v_path_idx" ON "public"."_dividerBlock_v" USING "btree" ("_path");


--
-- Name: _featuredAppsBlock_v_block_header_links_locales_locale_parent_i; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuredAppsBlock_v_block_header_links_locales_locale_parent_i" ON "public"."_featuredAppsBlock_v_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuredAppsBlock_v_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_block_header_links_order_idx" ON "public"."_featuredAppsBlock_v_block_header_links" USING "btree" ("_order");


--
-- Name: _featuredAppsBlock_v_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_block_header_links_parent_id_idx" ON "public"."_featuredAppsBlock_v_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _featuredAppsBlock_v_cards_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuredAppsBlock_v_cards_locales_locale_parent_id_unique" ON "public"."_featuredAppsBlock_v_cards_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuredAppsBlock_v_cards_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_cards_order_idx" ON "public"."_featuredAppsBlock_v_cards" USING "btree" ("_order");


--
-- Name: _featuredAppsBlock_v_cards_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_cards_parent_id_idx" ON "public"."_featuredAppsBlock_v_cards" USING "btree" ("_parent_id");


--
-- Name: _featuredAppsBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuredAppsBlock_v_locales_locale_parent_id_unique" ON "public"."_featuredAppsBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuredAppsBlock_v_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_media_idx" ON "public"."_featuredAppsBlock_v" USING "btree" ("media_id");


--
-- Name: _featuredAppsBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_order_idx" ON "public"."_featuredAppsBlock_v" USING "btree" ("_order");


--
-- Name: _featuredAppsBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_parent_id_idx" ON "public"."_featuredAppsBlock_v" USING "btree" ("_parent_id");


--
-- Name: _featuredAppsBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuredAppsBlock_v_path_idx" ON "public"."_featuredAppsBlock_v" USING "btree" ("_path");


--
-- Name: _featuresBlock_v_block_header_links_locales_locale_parent_id_un; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuresBlock_v_block_header_links_locales_locale_parent_id_un" ON "public"."_featuresBlock_v_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuresBlock_v_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_block_header_links_order_idx" ON "public"."_featuresBlock_v_block_header_links" USING "btree" ("_order");


--
-- Name: _featuresBlock_v_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_block_header_links_parent_id_idx" ON "public"."_featuresBlock_v_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _featuresBlock_v_block_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_block_image_idx" ON "public"."_featuresBlock_v_locales" USING "btree" ("block_image_id", "_locale");


--
-- Name: _featuresBlock_v_columns_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_columns_image_idx" ON "public"."_featuresBlock_v_columns_locales" USING "btree" ("image_id", "_locale");


--
-- Name: _featuresBlock_v_columns_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuresBlock_v_columns_locales_locale_parent_id_unique" ON "public"."_featuresBlock_v_columns_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuresBlock_v_columns_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_columns_order_idx" ON "public"."_featuresBlock_v_columns" USING "btree" ("_order");


--
-- Name: _featuresBlock_v_columns_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_columns_parent_id_idx" ON "public"."_featuresBlock_v_columns" USING "btree" ("_parent_id");


--
-- Name: _featuresBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_featuresBlock_v_locales_locale_parent_id_unique" ON "public"."_featuresBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _featuresBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_order_idx" ON "public"."_featuresBlock_v" USING "btree" ("_order");


--
-- Name: _featuresBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_parent_id_idx" ON "public"."_featuresBlock_v" USING "btree" ("_parent_id");


--
-- Name: _featuresBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_featuresBlock_v_path_idx" ON "public"."_featuresBlock_v" USING "btree" ("_path");


--
-- Name: _formBlock_v_form_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_formBlock_v_form_idx" ON "public"."_formBlock_v" USING "btree" ("form_id");


--
-- Name: _formBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_formBlock_v_order_idx" ON "public"."_formBlock_v" USING "btree" ("_order");


--
-- Name: _formBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_formBlock_v_parent_id_idx" ON "public"."_formBlock_v" USING "btree" ("_parent_id");


--
-- Name: _formBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_formBlock_v_path_idx" ON "public"."_formBlock_v" USING "btree" ("_path");


--
-- Name: _galleryBlock_v_block_header_links_locales_locale_parent_id_uni; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_galleryBlock_v_block_header_links_locales_locale_parent_id_uni" ON "public"."_galleryBlock_v_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _galleryBlock_v_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_block_header_links_order_idx" ON "public"."_galleryBlock_v_block_header_links" USING "btree" ("_order");


--
-- Name: _galleryBlock_v_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_block_header_links_parent_id_idx" ON "public"."_galleryBlock_v_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _galleryBlock_v_interactive_gallery_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_interactive_gallery_image_idx" ON "public"."_galleryBlock_v_interactive_gallery_locales" USING "btree" ("image_id", "_locale");


--
-- Name: _galleryBlock_v_interactive_gallery_locales_locale_parent_id_un; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_galleryBlock_v_interactive_gallery_locales_locale_parent_id_un" ON "public"."_galleryBlock_v_interactive_gallery_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _galleryBlock_v_interactive_gallery_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_interactive_gallery_order_idx" ON "public"."_galleryBlock_v_interactive_gallery" USING "btree" ("_order");


--
-- Name: _galleryBlock_v_interactive_gallery_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_interactive_gallery_parent_id_idx" ON "public"."_galleryBlock_v_interactive_gallery" USING "btree" ("_parent_id");


--
-- Name: _galleryBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_galleryBlock_v_locales_locale_parent_id_unique" ON "public"."_galleryBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _galleryBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_order_idx" ON "public"."_galleryBlock_v" USING "btree" ("_order");


--
-- Name: _galleryBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_parent_id_idx" ON "public"."_galleryBlock_v" USING "btree" ("_parent_id");


--
-- Name: _galleryBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_galleryBlock_v_path_idx" ON "public"."_galleryBlock_v" USING "btree" ("_path");


--
-- Name: _integrations_v_autosave_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_autosave_idx" ON "public"."_integrations_v" USING "btree" ("autosave");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_locales_loc; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_integrations_v_blocks_faq_block_block_header_links_locales_loc" ON "public"."_integrations_v_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_blocks_faq_block_block_header_links_order_idx" ON "public"."_integrations_v_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_parent_id_i; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_blocks_faq_block_block_header_links_parent_id_i" ON "public"."_integrations_v_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _integrations_v_blocks_faq_block_locales_locale_parent_id_uniqu; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_integrations_v_blocks_faq_block_locales_locale_parent_id_uniqu" ON "public"."_integrations_v_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _integrations_v_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_blocks_faq_block_order_idx" ON "public"."_integrations_v_blocks_faq_block" USING "btree" ("_order");


--
-- Name: _integrations_v_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_blocks_faq_block_parent_id_idx" ON "public"."_integrations_v_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: _integrations_v_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_blocks_faq_block_path_idx" ON "public"."_integrations_v_blocks_faq_block" USING "btree" ("_path");


--
-- Name: _integrations_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_created_at_idx" ON "public"."_integrations_v" USING "btree" ("created_at");


--
-- Name: _integrations_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_latest_idx" ON "public"."_integrations_v" USING "btree" ("latest");


--
-- Name: _integrations_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_integrations_v_locales_locale_parent_id_unique" ON "public"."_integrations_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _integrations_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_parent_idx" ON "public"."_integrations_v" USING "btree" ("parent_id");


--
-- Name: _integrations_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_published_locale_idx" ON "public"."_integrations_v" USING "btree" ("published_locale");


--
-- Name: _integrations_v_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_categories_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("categories_id");


--
-- Name: _integrations_v_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_faq_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("faq_id");


--
-- Name: _integrations_v_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_integrations_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("integrations_id");


--
-- Name: _integrations_v_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_media_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("media_id");


--
-- Name: _integrations_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_order_idx" ON "public"."_integrations_v_rels" USING "btree" ("order");


--
-- Name: _integrations_v_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_pages_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("pages_id");


--
-- Name: _integrations_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_parent_idx" ON "public"."_integrations_v_rels" USING "btree" ("parent_id");


--
-- Name: _integrations_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_path_idx" ON "public"."_integrations_v_rels" USING "btree" ("path");


--
-- Name: _integrations_v_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_posts_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("posts_id");


--
-- Name: _integrations_v_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_rels_solutions_id_idx" ON "public"."_integrations_v_rels" USING "btree" ("solutions_id");


--
-- Name: _integrations_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_snapshot_idx" ON "public"."_integrations_v" USING "btree" ("snapshot");


--
-- Name: _integrations_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_updated_at_idx" ON "public"."_integrations_v" USING "btree" ("updated_at");


--
-- Name: _integrations_v_version_hero_links_locales_locale_parent_id_uni; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_integrations_v_version_hero_links_locales_locale_parent_id_uni" ON "public"."_integrations_v_version_hero_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _integrations_v_version_hero_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_links_order_idx" ON "public"."_integrations_v_version_hero_links" USING "btree" ("_order");


--
-- Name: _integrations_v_version_hero_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_links_parent_id_idx" ON "public"."_integrations_v_version_hero_links" USING "btree" ("_parent_id");


--
-- Name: _integrations_v_version_hero_logos_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_logos_logo_idx" ON "public"."_integrations_v_version_hero_logos" USING "btree" ("logo_id");


--
-- Name: _integrations_v_version_hero_logos_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_logos_order_idx" ON "public"."_integrations_v_version_hero_logos" USING "btree" ("_order");


--
-- Name: _integrations_v_version_hero_logos_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_logos_parent_id_idx" ON "public"."_integrations_v_version_hero_logos" USING "btree" ("_parent_id");


--
-- Name: _integrations_v_version_hero_version_hero_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_hero_version_hero_media_idx" ON "public"."_integrations_v_locales" USING "btree" ("version_hero_media_id", "_locale");


--
-- Name: _integrations_v_version_meta_version_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_meta_version_meta_image_idx" ON "public"."_integrations_v_locales" USING "btree" ("version_meta_image_id");


--
-- Name: _integrations_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_version__status_idx" ON "public"."_integrations_v" USING "btree" ("version__status");


--
-- Name: _integrations_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_version_created_at_idx" ON "public"."_integrations_v" USING "btree" ("version_created_at");


--
-- Name: _integrations_v_version_version_icon_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_version_icon_idx" ON "public"."_integrations_v" USING "btree" ("version_icon_id");


--
-- Name: _integrations_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_version_slug_idx" ON "public"."_integrations_v" USING "btree" ("version_slug");


--
-- Name: _integrations_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_integrations_v_version_version_updated_at_idx" ON "public"."_integrations_v" USING "btree" ("version_updated_at");


--
-- Name: _pages_v_autosave_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_autosave_idx" ON "public"."_pages_v" USING "btree" ("autosave");


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales_locale_par; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_pages_v_blocks_faq_block_block_header_links_locales_locale_par" ON "public"."_pages_v_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _pages_v_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_blocks_faq_block_block_header_links_order_idx" ON "public"."_pages_v_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: _pages_v_blocks_faq_block_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_blocks_faq_block_block_header_links_parent_id_idx" ON "public"."_pages_v_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _pages_v_blocks_faq_block_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_pages_v_blocks_faq_block_locales_locale_parent_id_unique" ON "public"."_pages_v_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _pages_v_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_blocks_faq_block_order_idx" ON "public"."_pages_v_blocks_faq_block" USING "btree" ("_order");


--
-- Name: _pages_v_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_blocks_faq_block_parent_id_idx" ON "public"."_pages_v_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: _pages_v_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_blocks_faq_block_path_idx" ON "public"."_pages_v_blocks_faq_block" USING "btree" ("_path");


--
-- Name: _pages_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_created_at_idx" ON "public"."_pages_v" USING "btree" ("created_at");


--
-- Name: _pages_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_latest_idx" ON "public"."_pages_v" USING "btree" ("latest");


--
-- Name: _pages_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "public"."_pages_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _pages_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_parent_idx" ON "public"."_pages_v" USING "btree" ("parent_id");


--
-- Name: _pages_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_published_locale_idx" ON "public"."_pages_v" USING "btree" ("published_locale");


--
-- Name: _pages_v_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_categories_id_idx" ON "public"."_pages_v_rels" USING "btree" ("categories_id", "locale");


--
-- Name: _pages_v_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_faq_id_idx" ON "public"."_pages_v_rels" USING "btree" ("faq_id", "locale");


--
-- Name: _pages_v_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_integrations_id_idx" ON "public"."_pages_v_rels" USING "btree" ("integrations_id", "locale");


--
-- Name: _pages_v_rels_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_locale_idx" ON "public"."_pages_v_rels" USING "btree" ("locale");


--
-- Name: _pages_v_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_media_id_idx" ON "public"."_pages_v_rels" USING "btree" ("media_id", "locale");


--
-- Name: _pages_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_order_idx" ON "public"."_pages_v_rels" USING "btree" ("order");


--
-- Name: _pages_v_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_pages_id_idx" ON "public"."_pages_v_rels" USING "btree" ("pages_id", "locale");


--
-- Name: _pages_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_parent_idx" ON "public"."_pages_v_rels" USING "btree" ("parent_id");


--
-- Name: _pages_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_path_idx" ON "public"."_pages_v_rels" USING "btree" ("path");


--
-- Name: _pages_v_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_posts_id_idx" ON "public"."_pages_v_rels" USING "btree" ("posts_id", "locale");


--
-- Name: _pages_v_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_solutions_id_idx" ON "public"."_pages_v_rels" USING "btree" ("solutions_id", "locale");


--
-- Name: _pages_v_rels_testimonials_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_rels_testimonials_id_idx" ON "public"."_pages_v_rels" USING "btree" ("testimonials_id", "locale");


--
-- Name: _pages_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_snapshot_idx" ON "public"."_pages_v" USING "btree" ("snapshot");


--
-- Name: _pages_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_updated_at_idx" ON "public"."_pages_v" USING "btree" ("updated_at");


--
-- Name: _pages_v_version_hero_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_pages_v_version_hero_links_locales_locale_parent_id_unique" ON "public"."_pages_v_version_hero_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _pages_v_version_hero_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_links_order_idx" ON "public"."_pages_v_version_hero_links" USING "btree" ("_order");


--
-- Name: _pages_v_version_hero_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_links_parent_id_idx" ON "public"."_pages_v_version_hero_links" USING "btree" ("_parent_id");


--
-- Name: _pages_v_version_hero_logos_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_logos_logo_idx" ON "public"."_pages_v_version_hero_logos" USING "btree" ("logo_id");


--
-- Name: _pages_v_version_hero_logos_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_logos_order_idx" ON "public"."_pages_v_version_hero_logos" USING "btree" ("_order");


--
-- Name: _pages_v_version_hero_logos_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_logos_parent_id_idx" ON "public"."_pages_v_version_hero_logos" USING "btree" ("_parent_id");


--
-- Name: _pages_v_version_hero_version_hero_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_hero_version_hero_media_idx" ON "public"."_pages_v_locales" USING "btree" ("version_hero_media_id", "_locale");


--
-- Name: _pages_v_version_meta_version_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "public"."_pages_v_locales" USING "btree" ("version_meta_image_id");


--
-- Name: _pages_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_version__status_idx" ON "public"."_pages_v" USING "btree" ("version__status");


--
-- Name: _pages_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_version_created_at_idx" ON "public"."_pages_v" USING "btree" ("version_created_at");


--
-- Name: _pages_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_version_slug_idx" ON "public"."_pages_v" USING "btree" ("version_slug");


--
-- Name: _pages_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "public"."_pages_v" USING "btree" ("version_updated_at");


--
-- Name: _posts_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_created_at_idx" ON "public"."_posts_v" USING "btree" ("created_at");


--
-- Name: _posts_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_latest_idx" ON "public"."_posts_v" USING "btree" ("latest");


--
-- Name: _posts_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "public"."_posts_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _posts_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_parent_idx" ON "public"."_posts_v" USING "btree" ("parent_id");


--
-- Name: _posts_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_published_locale_idx" ON "public"."_posts_v" USING "btree" ("published_locale");


--
-- Name: _posts_v_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_categories_id_idx" ON "public"."_posts_v_rels" USING "btree" ("categories_id", "locale");


--
-- Name: _posts_v_rels_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_locale_idx" ON "public"."_posts_v_rels" USING "btree" ("locale");


--
-- Name: _posts_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_order_idx" ON "public"."_posts_v_rels" USING "btree" ("order");


--
-- Name: _posts_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_parent_idx" ON "public"."_posts_v_rels" USING "btree" ("parent_id");


--
-- Name: _posts_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_path_idx" ON "public"."_posts_v_rels" USING "btree" ("path");


--
-- Name: _posts_v_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_posts_id_idx" ON "public"."_posts_v_rels" USING "btree" ("posts_id", "locale");


--
-- Name: _posts_v_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_rels_users_id_idx" ON "public"."_posts_v_rels" USING "btree" ("users_id", "locale");


--
-- Name: _posts_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_snapshot_idx" ON "public"."_posts_v" USING "btree" ("snapshot");


--
-- Name: _posts_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_updated_at_idx" ON "public"."_posts_v" USING "btree" ("updated_at");


--
-- Name: _posts_v_version_meta_version_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "public"."_posts_v_locales" USING "btree" ("version_meta_image_id");


--
-- Name: _posts_v_version_populated_authors_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "public"."_posts_v_version_populated_authors" USING "btree" ("_order");


--
-- Name: _posts_v_version_populated_authors_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "public"."_posts_v_version_populated_authors" USING "btree" ("_parent_id");


--
-- Name: _posts_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_version__status_idx" ON "public"."_posts_v" USING "btree" ("version__status");


--
-- Name: _posts_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_version_created_at_idx" ON "public"."_posts_v" USING "btree" ("version_created_at");


--
-- Name: _posts_v_version_version_hero_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "public"."_posts_v_locales" USING "btree" ("version_hero_image_id", "_locale");


--
-- Name: _posts_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_version_slug_idx" ON "public"."_posts_v" USING "btree" ("version_slug");


--
-- Name: _posts_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "public"."_posts_v" USING "btree" ("version_updated_at");


--
-- Name: _solutions_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_created_at_idx" ON "public"."_solutions_v" USING "btree" ("created_at");


--
-- Name: _solutions_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_latest_idx" ON "public"."_solutions_v" USING "btree" ("latest");


--
-- Name: _solutions_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_solutions_v_locales_locale_parent_id_unique" ON "public"."_solutions_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _solutions_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_parent_idx" ON "public"."_solutions_v" USING "btree" ("parent_id");


--
-- Name: _solutions_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_published_locale_idx" ON "public"."_solutions_v" USING "btree" ("published_locale");


--
-- Name: _solutions_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_order_idx" ON "public"."_solutions_v_rels" USING "btree" ("order");


--
-- Name: _solutions_v_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_pages_id_idx" ON "public"."_solutions_v_rels" USING "btree" ("pages_id");


--
-- Name: _solutions_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_parent_idx" ON "public"."_solutions_v_rels" USING "btree" ("parent_id");


--
-- Name: _solutions_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_path_idx" ON "public"."_solutions_v_rels" USING "btree" ("path");


--
-- Name: _solutions_v_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_posts_id_idx" ON "public"."_solutions_v_rels" USING "btree" ("posts_id");


--
-- Name: _solutions_v_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_rels_solutions_id_idx" ON "public"."_solutions_v_rels" USING "btree" ("solutions_id");


--
-- Name: _solutions_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_snapshot_idx" ON "public"."_solutions_v" USING "btree" ("snapshot");


--
-- Name: _solutions_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_updated_at_idx" ON "public"."_solutions_v" USING "btree" ("updated_at");


--
-- Name: _solutions_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version__status_idx" ON "public"."_solutions_v" USING "btree" ("version__status");


--
-- Name: _solutions_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version_created_at_idx" ON "public"."_solutions_v" USING "btree" ("version_created_at");


--
-- Name: _solutions_v_version_version_ecosystem_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version_ecosystem_idx" ON "public"."_solutions_v" USING "btree" ("version_ecosystem_id");


--
-- Name: _solutions_v_version_version_icon_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version_icon_idx" ON "public"."_solutions_v" USING "btree" ("version_icon_id");


--
-- Name: _solutions_v_version_version_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version_slug_idx" ON "public"."_solutions_v" USING "btree" ("version_slug");


--
-- Name: _solutions_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_solutions_v_version_version_updated_at_idx" ON "public"."_solutions_v" USING "btree" ("version_updated_at");


--
-- Name: _testimonialsBlock_v_block_header_links_locales_locale_parent_i; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_testimonialsBlock_v_block_header_links_locales_locale_parent_i" ON "public"."_testimonialsBlock_v_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _testimonialsBlock_v_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonialsBlock_v_block_header_links_order_idx" ON "public"."_testimonialsBlock_v_block_header_links" USING "btree" ("_order");


--
-- Name: _testimonialsBlock_v_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonialsBlock_v_block_header_links_parent_id_idx" ON "public"."_testimonialsBlock_v_block_header_links" USING "btree" ("_parent_id");


--
-- Name: _testimonialsBlock_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_testimonialsBlock_v_locales_locale_parent_id_unique" ON "public"."_testimonialsBlock_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _testimonialsBlock_v_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonialsBlock_v_order_idx" ON "public"."_testimonialsBlock_v" USING "btree" ("_order");


--
-- Name: _testimonialsBlock_v_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonialsBlock_v_parent_id_idx" ON "public"."_testimonialsBlock_v" USING "btree" ("_parent_id");


--
-- Name: _testimonialsBlock_v_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonialsBlock_v_path_idx" ON "public"."_testimonialsBlock_v" USING "btree" ("_path");


--
-- Name: _testimonials_v_autosave_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_autosave_idx" ON "public"."_testimonials_v" USING "btree" ("autosave");


--
-- Name: _testimonials_v_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_created_at_idx" ON "public"."_testimonials_v" USING "btree" ("created_at");


--
-- Name: _testimonials_v_latest_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_latest_idx" ON "public"."_testimonials_v" USING "btree" ("latest");


--
-- Name: _testimonials_v_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "_testimonials_v_locales_locale_parent_id_unique" ON "public"."_testimonials_v_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: _testimonials_v_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_parent_idx" ON "public"."_testimonials_v" USING "btree" ("parent_id");


--
-- Name: _testimonials_v_published_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_published_locale_idx" ON "public"."_testimonials_v" USING "btree" ("published_locale");


--
-- Name: _testimonials_v_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_rels_categories_id_idx" ON "public"."_testimonials_v_rels" USING "btree" ("categories_id");


--
-- Name: _testimonials_v_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_rels_order_idx" ON "public"."_testimonials_v_rels" USING "btree" ("order");


--
-- Name: _testimonials_v_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_rels_parent_idx" ON "public"."_testimonials_v_rels" USING "btree" ("parent_id");


--
-- Name: _testimonials_v_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_rels_path_idx" ON "public"."_testimonials_v_rels" USING "btree" ("path");


--
-- Name: _testimonials_v_snapshot_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_snapshot_idx" ON "public"."_testimonials_v" USING "btree" ("snapshot");


--
-- Name: _testimonials_v_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_updated_at_idx" ON "public"."_testimonials_v" USING "btree" ("updated_at");


--
-- Name: _testimonials_v_version_author_info_version_author_info_avatar_; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_author_info_version_author_info_avatar_" ON "public"."_testimonials_v" USING "btree" ("version_author_info_avatar_id");


--
-- Name: _testimonials_v_version_case_study_version_case_study_linked_ca; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_case_study_version_case_study_linked_ca" ON "public"."_testimonials_v" USING "btree" ("version_case_study_linked_case_study_id");


--
-- Name: _testimonials_v_version_version__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_version__status_idx" ON "public"."_testimonials_v" USING "btree" ("version__status");


--
-- Name: _testimonials_v_version_version_company_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_version_company_logo_idx" ON "public"."_testimonials_v" USING "btree" ("version_company_logo_id");


--
-- Name: _testimonials_v_version_version_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_version_created_at_idx" ON "public"."_testimonials_v" USING "btree" ("version_created_at");


--
-- Name: _testimonials_v_version_version_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_version_featured_image_idx" ON "public"."_testimonials_v_locales" USING "btree" ("version_featured_image_id", "_locale");


--
-- Name: _testimonials_v_version_version_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "_testimonials_v_version_version_updated_at_idx" ON "public"."_testimonials_v" USING "btree" ("version_updated_at");


--
-- Name: archiveBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "archiveBlock_locales_locale_parent_id_unique" ON "public"."archiveBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: archiveBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "archiveBlock_order_idx" ON "public"."archiveBlock" USING "btree" ("_order");


--
-- Name: archiveBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "archiveBlock_parent_id_idx" ON "public"."archiveBlock" USING "btree" ("_parent_id");


--
-- Name: archiveBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "archiveBlock_path_idx" ON "public"."archiveBlock" USING "btree" ("_path");


--
-- Name: callToActionBlock_form_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_form_idx" ON "public"."callToActionBlock" USING "btree" ("form_id");


--
-- Name: callToActionBlock_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "callToActionBlock_links_locales_locale_parent_id_unique" ON "public"."callToActionBlock_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: callToActionBlock_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_links_order_idx" ON "public"."callToActionBlock_links" USING "btree" ("_order");


--
-- Name: callToActionBlock_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_links_parent_id_idx" ON "public"."callToActionBlock_links" USING "btree" ("_parent_id");


--
-- Name: callToActionBlock_list_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_list_locale_idx" ON "public"."callToActionBlock_list" USING "btree" ("_locale");


--
-- Name: callToActionBlock_list_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_list_order_idx" ON "public"."callToActionBlock_list" USING "btree" ("_order");


--
-- Name: callToActionBlock_list_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_list_parent_id_idx" ON "public"."callToActionBlock_list" USING "btree" ("_parent_id");


--
-- Name: callToActionBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "callToActionBlock_locales_locale_parent_id_unique" ON "public"."callToActionBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: callToActionBlock_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_media_idx" ON "public"."callToActionBlock_locales" USING "btree" ("media_id", "_locale");


--
-- Name: callToActionBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_order_idx" ON "public"."callToActionBlock" USING "btree" ("_order");


--
-- Name: callToActionBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_parent_id_idx" ON "public"."callToActionBlock" USING "btree" ("_parent_id");


--
-- Name: callToActionBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "callToActionBlock_path_idx" ON "public"."callToActionBlock" USING "btree" ("_path");


--
-- Name: case_studies__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies__status_idx" ON "public"."case_studies" USING "btree" ("_status");


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales_locale; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "case_studies_blocks_faq_block_block_header_links_locales_locale" ON "public"."case_studies_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: case_studies_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_blocks_faq_block_block_header_links_order_idx" ON "public"."case_studies_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: case_studies_blocks_faq_block_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_blocks_faq_block_block_header_links_parent_id_idx" ON "public"."case_studies_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: case_studies_blocks_faq_block_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "case_studies_blocks_faq_block_locales_locale_parent_id_unique" ON "public"."case_studies_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: case_studies_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_blocks_faq_block_order_idx" ON "public"."case_studies_blocks_faq_block" USING "btree" ("_order");


--
-- Name: case_studies_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_blocks_faq_block_parent_id_idx" ON "public"."case_studies_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: case_studies_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_blocks_faq_block_path_idx" ON "public"."case_studies_blocks_faq_block" USING "btree" ("_path");


--
-- Name: case_studies_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_created_at_idx" ON "public"."case_studies" USING "btree" ("created_at");


--
-- Name: case_studies_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_featured_image_idx" ON "public"."case_studies_locales" USING "btree" ("featured_image_id", "_locale");


--
-- Name: case_studies_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "case_studies_locales_locale_parent_id_unique" ON "public"."case_studies_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: case_studies_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_faq_id_idx" ON "public"."case_studies_rels" USING "btree" ("faq_id");


--
-- Name: case_studies_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_integrations_id_idx" ON "public"."case_studies_rels" USING "btree" ("integrations_id");


--
-- Name: case_studies_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_order_idx" ON "public"."case_studies_rels" USING "btree" ("order");


--
-- Name: case_studies_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_pages_id_idx" ON "public"."case_studies_rels" USING "btree" ("pages_id");


--
-- Name: case_studies_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_parent_idx" ON "public"."case_studies_rels" USING "btree" ("parent_id");


--
-- Name: case_studies_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_path_idx" ON "public"."case_studies_rels" USING "btree" ("path");


--
-- Name: case_studies_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_posts_id_idx" ON "public"."case_studies_rels" USING "btree" ("posts_id");


--
-- Name: case_studies_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_rels_solutions_id_idx" ON "public"."case_studies_rels" USING "btree" ("solutions_id");


--
-- Name: case_studies_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_slug_idx" ON "public"."case_studies" USING "btree" ("slug");


--
-- Name: case_studies_stats_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "case_studies_stats_locales_locale_parent_id_unique" ON "public"."case_studies_stats_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: case_studies_stats_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_stats_order_idx" ON "public"."case_studies_stats" USING "btree" ("_order");


--
-- Name: case_studies_stats_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_stats_parent_id_idx" ON "public"."case_studies_stats" USING "btree" ("_parent_id");


--
-- Name: case_studies_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "case_studies_updated_at_idx" ON "public"."case_studies" USING "btree" ("updated_at");


--
-- Name: categories_breadcrumbs_doc_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_breadcrumbs_doc_idx" ON "public"."categories_breadcrumbs" USING "btree" ("doc_id");


--
-- Name: categories_breadcrumbs_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_breadcrumbs_locale_idx" ON "public"."categories_breadcrumbs" USING "btree" ("_locale");


--
-- Name: categories_breadcrumbs_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_breadcrumbs_order_idx" ON "public"."categories_breadcrumbs" USING "btree" ("_order");


--
-- Name: categories_breadcrumbs_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "public"."categories_breadcrumbs" USING "btree" ("_parent_id");


--
-- Name: categories_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_created_at_idx" ON "public"."categories" USING "btree" ("created_at");


--
-- Name: categories_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "categories_locales_locale_parent_id_unique" ON "public"."categories_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: categories_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_parent_idx" ON "public"."categories" USING "btree" ("parent_id");


--
-- Name: categories_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_slug_idx" ON "public"."categories" USING "btree" ("slug");


--
-- Name: categories_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "categories_updated_at_idx" ON "public"."categories" USING "btree" ("updated_at");


--
-- Name: changelog_categories_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "changelog_categories_order_idx" ON "public"."changelog_categories" USING "btree" ("order");


--
-- Name: changelog_categories_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "changelog_categories_parent_idx" ON "public"."changelog_categories" USING "btree" ("parent_id");


--
-- Name: changelog_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "changelog_created_at_idx" ON "public"."changelog" USING "btree" ("created_at");


--
-- Name: changelog_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "changelog_locales_locale_parent_id_unique" ON "public"."changelog_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: changelog_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "changelog_updated_at_idx" ON "public"."changelog" USING "btree" ("updated_at");


--
-- Name: customHtmlBlock_block_header_links_locales_locale_parent_id_uni; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "customHtmlBlock_block_header_links_locales_locale_parent_id_uni" ON "public"."customHtmlBlock_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: customHtmlBlock_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "customHtmlBlock_block_header_links_order_idx" ON "public"."customHtmlBlock_block_header_links" USING "btree" ("_order");


--
-- Name: customHtmlBlock_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "customHtmlBlock_block_header_links_parent_id_idx" ON "public"."customHtmlBlock_block_header_links" USING "btree" ("_parent_id");


--
-- Name: customHtmlBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "customHtmlBlock_locales_locale_parent_id_unique" ON "public"."customHtmlBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: customHtmlBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "customHtmlBlock_order_idx" ON "public"."customHtmlBlock" USING "btree" ("_order");


--
-- Name: customHtmlBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "customHtmlBlock_parent_id_idx" ON "public"."customHtmlBlock" USING "btree" ("_parent_id");


--
-- Name: customHtmlBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "customHtmlBlock_path_idx" ON "public"."customHtmlBlock" USING "btree" ("_path");


--
-- Name: dividerBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "dividerBlock_order_idx" ON "public"."dividerBlock" USING "btree" ("_order");


--
-- Name: dividerBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "dividerBlock_parent_id_idx" ON "public"."dividerBlock" USING "btree" ("_parent_id");


--
-- Name: dividerBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "dividerBlock_path_idx" ON "public"."dividerBlock" USING "btree" ("_path");


--
-- Name: faq_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "faq_created_at_idx" ON "public"."faq" USING "btree" ("created_at");


--
-- Name: faq_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "faq_locales_locale_parent_id_unique" ON "public"."faq_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: faq_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "faq_updated_at_idx" ON "public"."faq" USING "btree" ("updated_at");


--
-- Name: featuredAppsBlock_block_header_links_locales_locale_parent_id_u; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuredAppsBlock_block_header_links_locales_locale_parent_id_u" ON "public"."featuredAppsBlock_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuredAppsBlock_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_block_header_links_order_idx" ON "public"."featuredAppsBlock_block_header_links" USING "btree" ("_order");


--
-- Name: featuredAppsBlock_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_block_header_links_parent_id_idx" ON "public"."featuredAppsBlock_block_header_links" USING "btree" ("_parent_id");


--
-- Name: featuredAppsBlock_cards_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuredAppsBlock_cards_locales_locale_parent_id_unique" ON "public"."featuredAppsBlock_cards_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuredAppsBlock_cards_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_cards_order_idx" ON "public"."featuredAppsBlock_cards" USING "btree" ("_order");


--
-- Name: featuredAppsBlock_cards_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_cards_parent_id_idx" ON "public"."featuredAppsBlock_cards" USING "btree" ("_parent_id");


--
-- Name: featuredAppsBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuredAppsBlock_locales_locale_parent_id_unique" ON "public"."featuredAppsBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuredAppsBlock_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_media_idx" ON "public"."featuredAppsBlock" USING "btree" ("media_id");


--
-- Name: featuredAppsBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_order_idx" ON "public"."featuredAppsBlock" USING "btree" ("_order");


--
-- Name: featuredAppsBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_parent_id_idx" ON "public"."featuredAppsBlock" USING "btree" ("_parent_id");


--
-- Name: featuredAppsBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuredAppsBlock_path_idx" ON "public"."featuredAppsBlock" USING "btree" ("_path");


--
-- Name: featuresBlock_block_header_links_locales_locale_parent_id_uniqu; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuresBlock_block_header_links_locales_locale_parent_id_uniqu" ON "public"."featuresBlock_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuresBlock_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_block_header_links_order_idx" ON "public"."featuresBlock_block_header_links" USING "btree" ("_order");


--
-- Name: featuresBlock_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_block_header_links_parent_id_idx" ON "public"."featuresBlock_block_header_links" USING "btree" ("_parent_id");


--
-- Name: featuresBlock_block_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_block_image_idx" ON "public"."featuresBlock_locales" USING "btree" ("block_image_id", "_locale");


--
-- Name: featuresBlock_columns_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_columns_image_idx" ON "public"."featuresBlock_columns_locales" USING "btree" ("image_id", "_locale");


--
-- Name: featuresBlock_columns_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuresBlock_columns_locales_locale_parent_id_unique" ON "public"."featuresBlock_columns_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuresBlock_columns_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_columns_order_idx" ON "public"."featuresBlock_columns" USING "btree" ("_order");


--
-- Name: featuresBlock_columns_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_columns_parent_id_idx" ON "public"."featuresBlock_columns" USING "btree" ("_parent_id");


--
-- Name: featuresBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "featuresBlock_locales_locale_parent_id_unique" ON "public"."featuresBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: featuresBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_order_idx" ON "public"."featuresBlock" USING "btree" ("_order");


--
-- Name: featuresBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_parent_id_idx" ON "public"."featuresBlock" USING "btree" ("_parent_id");


--
-- Name: featuresBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "featuresBlock_path_idx" ON "public"."featuresBlock" USING "btree" ("_path");


--
-- Name: footer_columns_nav_items_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "footer_columns_nav_items_locales_locale_parent_id_unique" ON "public"."footer_columns_nav_items_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: footer_columns_nav_items_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_columns_nav_items_order_idx" ON "public"."footer_columns_nav_items" USING "btree" ("_order");


--
-- Name: footer_columns_nav_items_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_columns_nav_items_parent_id_idx" ON "public"."footer_columns_nav_items" USING "btree" ("_parent_id");


--
-- Name: footer_columns_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_columns_order_idx" ON "public"."footer_columns" USING "btree" ("_order");


--
-- Name: footer_columns_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_columns_parent_id_idx" ON "public"."footer_columns" USING "btree" ("_parent_id");


--
-- Name: footer_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_order_idx" ON "public"."footer_rels" USING "btree" ("order");


--
-- Name: footer_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_pages_id_idx" ON "public"."footer_rels" USING "btree" ("pages_id");


--
-- Name: footer_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_parent_idx" ON "public"."footer_rels" USING "btree" ("parent_id");


--
-- Name: footer_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_path_idx" ON "public"."footer_rels" USING "btree" ("path");


--
-- Name: footer_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_posts_id_idx" ON "public"."footer_rels" USING "btree" ("posts_id");


--
-- Name: footer_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "footer_rels_solutions_id_idx" ON "public"."footer_rels" USING "btree" ("solutions_id");


--
-- Name: formBlock_form_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "formBlock_form_idx" ON "public"."formBlock" USING "btree" ("form_id");


--
-- Name: formBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "formBlock_order_idx" ON "public"."formBlock" USING "btree" ("_order");


--
-- Name: formBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "formBlock_parent_id_idx" ON "public"."formBlock" USING "btree" ("_parent_id");


--
-- Name: formBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "formBlock_path_idx" ON "public"."formBlock" USING "btree" ("_path");


--
-- Name: form_submissions_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "form_submissions_created_at_idx" ON "public"."form_submissions" USING "btree" ("created_at");


--
-- Name: form_submissions_form_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "form_submissions_form_idx" ON "public"."form_submissions" USING "btree" ("form_id");


--
-- Name: form_submissions_submission_data_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "form_submissions_submission_data_order_idx" ON "public"."form_submissions_submission_data" USING "btree" ("_order");


--
-- Name: form_submissions_submission_data_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "public"."form_submissions_submission_data" USING "btree" ("_parent_id");


--
-- Name: form_submissions_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "form_submissions_updated_at_idx" ON "public"."form_submissions" USING "btree" ("updated_at");


--
-- Name: forms_blocks_checkbox_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "public"."forms_blocks_checkbox_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_checkbox_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_checkbox_order_idx" ON "public"."forms_blocks_checkbox" USING "btree" ("_order");


--
-- Name: forms_blocks_checkbox_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "public"."forms_blocks_checkbox" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_checkbox_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_checkbox_path_idx" ON "public"."forms_blocks_checkbox" USING "btree" ("_path");


--
-- Name: forms_blocks_country_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_country_locales_locale_parent_id_unique" ON "public"."forms_blocks_country_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_country_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_country_order_idx" ON "public"."forms_blocks_country" USING "btree" ("_order");


--
-- Name: forms_blocks_country_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_country_parent_id_idx" ON "public"."forms_blocks_country" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_country_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_country_path_idx" ON "public"."forms_blocks_country" USING "btree" ("_path");


--
-- Name: forms_blocks_email_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_email_locales_locale_parent_id_unique" ON "public"."forms_blocks_email_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_email_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_email_order_idx" ON "public"."forms_blocks_email" USING "btree" ("_order");


--
-- Name: forms_blocks_email_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_email_parent_id_idx" ON "public"."forms_blocks_email" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_email_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_email_path_idx" ON "public"."forms_blocks_email" USING "btree" ("_path");


--
-- Name: forms_blocks_message_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_message_locales_locale_parent_id_unique" ON "public"."forms_blocks_message_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_message_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_message_order_idx" ON "public"."forms_blocks_message" USING "btree" ("_order");


--
-- Name: forms_blocks_message_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_message_parent_id_idx" ON "public"."forms_blocks_message" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_message_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_message_path_idx" ON "public"."forms_blocks_message" USING "btree" ("_path");


--
-- Name: forms_blocks_number_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_number_locales_locale_parent_id_unique" ON "public"."forms_blocks_number_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_number_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_number_order_idx" ON "public"."forms_blocks_number" USING "btree" ("_order");


--
-- Name: forms_blocks_number_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_number_parent_id_idx" ON "public"."forms_blocks_number" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_number_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_number_path_idx" ON "public"."forms_blocks_number" USING "btree" ("_path");


--
-- Name: forms_blocks_select_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_select_locales_locale_parent_id_unique" ON "public"."forms_blocks_select_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_select_options_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_select_options_locales_locale_parent_id_unique" ON "public"."forms_blocks_select_options_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_select_options_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_select_options_order_idx" ON "public"."forms_blocks_select_options" USING "btree" ("_order");


--
-- Name: forms_blocks_select_options_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "public"."forms_blocks_select_options" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_select_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_select_order_idx" ON "public"."forms_blocks_select" USING "btree" ("_order");


--
-- Name: forms_blocks_select_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_select_parent_id_idx" ON "public"."forms_blocks_select" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_select_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_select_path_idx" ON "public"."forms_blocks_select" USING "btree" ("_path");


--
-- Name: forms_blocks_state_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_state_locales_locale_parent_id_unique" ON "public"."forms_blocks_state_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_state_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_state_order_idx" ON "public"."forms_blocks_state" USING "btree" ("_order");


--
-- Name: forms_blocks_state_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_state_parent_id_idx" ON "public"."forms_blocks_state" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_state_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_state_path_idx" ON "public"."forms_blocks_state" USING "btree" ("_path");


--
-- Name: forms_blocks_text_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_text_locales_locale_parent_id_unique" ON "public"."forms_blocks_text_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_text_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_text_order_idx" ON "public"."forms_blocks_text" USING "btree" ("_order");


--
-- Name: forms_blocks_text_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_text_parent_id_idx" ON "public"."forms_blocks_text" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_text_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_text_path_idx" ON "public"."forms_blocks_text" USING "btree" ("_path");


--
-- Name: forms_blocks_textarea_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_blocks_textarea_locales_locale_parent_id_unique" ON "public"."forms_blocks_textarea_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_blocks_textarea_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_textarea_order_idx" ON "public"."forms_blocks_textarea" USING "btree" ("_order");


--
-- Name: forms_blocks_textarea_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "public"."forms_blocks_textarea" USING "btree" ("_parent_id");


--
-- Name: forms_blocks_textarea_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_blocks_textarea_path_idx" ON "public"."forms_blocks_textarea" USING "btree" ("_path");


--
-- Name: forms_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_created_at_idx" ON "public"."forms" USING "btree" ("created_at");


--
-- Name: forms_emails_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_emails_locales_locale_parent_id_unique" ON "public"."forms_emails_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_emails_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_emails_order_idx" ON "public"."forms_emails" USING "btree" ("_order");


--
-- Name: forms_emails_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_emails_parent_id_idx" ON "public"."forms_emails" USING "btree" ("_parent_id");


--
-- Name: forms_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "forms_locales_locale_parent_id_unique" ON "public"."forms_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: forms_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "forms_updated_at_idx" ON "public"."forms" USING "btree" ("updated_at");


--
-- Name: galleryBlock_block_header_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "galleryBlock_block_header_links_locales_locale_parent_id_unique" ON "public"."galleryBlock_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: galleryBlock_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_block_header_links_order_idx" ON "public"."galleryBlock_block_header_links" USING "btree" ("_order");


--
-- Name: galleryBlock_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_block_header_links_parent_id_idx" ON "public"."galleryBlock_block_header_links" USING "btree" ("_parent_id");


--
-- Name: galleryBlock_interactive_gallery_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_interactive_gallery_image_idx" ON "public"."galleryBlock_interactive_gallery_locales" USING "btree" ("image_id", "_locale");


--
-- Name: galleryBlock_interactive_gallery_locales_locale_parent_id_uniqu; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "galleryBlock_interactive_gallery_locales_locale_parent_id_uniqu" ON "public"."galleryBlock_interactive_gallery_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: galleryBlock_interactive_gallery_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_interactive_gallery_order_idx" ON "public"."galleryBlock_interactive_gallery" USING "btree" ("_order");


--
-- Name: galleryBlock_interactive_gallery_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_interactive_gallery_parent_id_idx" ON "public"."galleryBlock_interactive_gallery" USING "btree" ("_parent_id");


--
-- Name: galleryBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "galleryBlock_locales_locale_parent_id_unique" ON "public"."galleryBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: galleryBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_order_idx" ON "public"."galleryBlock" USING "btree" ("_order");


--
-- Name: galleryBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_parent_id_idx" ON "public"."galleryBlock" USING "btree" ("_parent_id");


--
-- Name: galleryBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "galleryBlock_path_idx" ON "public"."galleryBlock" USING "btree" ("_path");


--
-- Name: header_cta_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_cta_locales_locale_parent_id_unique" ON "public"."header_cta_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_cta_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_cta_order_idx" ON "public"."header_cta" USING "btree" ("_order");


--
-- Name: header_cta_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_cta_parent_id_idx" ON "public"."header_cta" USING "btree" ("_parent_id");


--
-- Name: header_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_order_idx" ON "public"."header_rels" USING "btree" ("order");


--
-- Name: header_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_pages_id_idx" ON "public"."header_rels" USING "btree" ("pages_id");


--
-- Name: header_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_parent_idx" ON "public"."header_rels" USING "btree" ("parent_id");


--
-- Name: header_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_path_idx" ON "public"."header_rels" USING "btree" ("path");


--
-- Name: header_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_posts_id_idx" ON "public"."header_rels" USING "btree" ("posts_id");


--
-- Name: header_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_rels_solutions_id_idx" ON "public"."header_rels" USING "btree" ("solutions_id");


--
-- Name: header_tabs_description_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_tabs_description_links_locales_locale_parent_id_unique" ON "public"."header_tabs_description_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_tabs_description_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_description_links_order_idx" ON "public"."header_tabs_description_links" USING "btree" ("_order");


--
-- Name: header_tabs_description_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_description_links_parent_id_idx" ON "public"."header_tabs_description_links" USING "btree" ("_parent_id");


--
-- Name: header_tabs_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_tabs_locales_locale_parent_id_unique" ON "public"."header_tabs_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_tabs_nav_items_featured_link_links_locales_locale_parent; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_tabs_nav_items_featured_link_links_locales_locale_parent" ON "public"."header_tabs_nav_items_featured_link_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_tabs_nav_items_featured_link_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_featured_link_links_order_idx" ON "public"."header_tabs_nav_items_featured_link_links" USING "btree" ("_order");


--
-- Name: header_tabs_nav_items_featured_link_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_featured_link_links_parent_id_idx" ON "public"."header_tabs_nav_items_featured_link_links" USING "btree" ("_parent_id");


--
-- Name: header_tabs_nav_items_list_links_links_locales_locale_parent_id; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_tabs_nav_items_list_links_links_locales_locale_parent_id" ON "public"."header_tabs_nav_items_list_links_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_tabs_nav_items_list_links_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_list_links_links_order_idx" ON "public"."header_tabs_nav_items_list_links_links" USING "btree" ("_order");


--
-- Name: header_tabs_nav_items_list_links_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_list_links_links_parent_id_idx" ON "public"."header_tabs_nav_items_list_links_links" USING "btree" ("_parent_id");


--
-- Name: header_tabs_nav_items_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "header_tabs_nav_items_locales_locale_parent_id_unique" ON "public"."header_tabs_nav_items_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: header_tabs_nav_items_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_order_idx" ON "public"."header_tabs_nav_items" USING "btree" ("_order");


--
-- Name: header_tabs_nav_items_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_nav_items_parent_id_idx" ON "public"."header_tabs_nav_items" USING "btree" ("_parent_id");


--
-- Name: header_tabs_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_order_idx" ON "public"."header_tabs" USING "btree" ("_order");


--
-- Name: header_tabs_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "header_tabs_parent_id_idx" ON "public"."header_tabs" USING "btree" ("_parent_id");


--
-- Name: integrations__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations__status_idx" ON "public"."integrations" USING "btree" ("_status");


--
-- Name: integrations_blocks_faq_block_block_header_links_locales_locale; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "integrations_blocks_faq_block_block_header_links_locales_locale" ON "public"."integrations_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: integrations_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_blocks_faq_block_block_header_links_order_idx" ON "public"."integrations_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: integrations_blocks_faq_block_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_blocks_faq_block_block_header_links_parent_id_idx" ON "public"."integrations_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: integrations_blocks_faq_block_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "integrations_blocks_faq_block_locales_locale_parent_id_unique" ON "public"."integrations_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: integrations_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_blocks_faq_block_order_idx" ON "public"."integrations_blocks_faq_block" USING "btree" ("_order");


--
-- Name: integrations_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_blocks_faq_block_parent_id_idx" ON "public"."integrations_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: integrations_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_blocks_faq_block_path_idx" ON "public"."integrations_blocks_faq_block" USING "btree" ("_path");


--
-- Name: integrations_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_created_at_idx" ON "public"."integrations" USING "btree" ("created_at");


--
-- Name: integrations_hero_hero_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_hero_media_idx" ON "public"."integrations_locales" USING "btree" ("hero_media_id", "_locale");


--
-- Name: integrations_hero_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "integrations_hero_links_locales_locale_parent_id_unique" ON "public"."integrations_hero_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: integrations_hero_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_links_order_idx" ON "public"."integrations_hero_links" USING "btree" ("_order");


--
-- Name: integrations_hero_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_links_parent_id_idx" ON "public"."integrations_hero_links" USING "btree" ("_parent_id");


--
-- Name: integrations_hero_logos_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_logos_logo_idx" ON "public"."integrations_hero_logos" USING "btree" ("logo_id");


--
-- Name: integrations_hero_logos_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_logos_order_idx" ON "public"."integrations_hero_logos" USING "btree" ("_order");


--
-- Name: integrations_hero_logos_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_hero_logos_parent_id_idx" ON "public"."integrations_hero_logos" USING "btree" ("_parent_id");


--
-- Name: integrations_icon_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_icon_idx" ON "public"."integrations" USING "btree" ("icon_id");


--
-- Name: integrations_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "integrations_locales_locale_parent_id_unique" ON "public"."integrations_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: integrations_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_meta_meta_image_idx" ON "public"."integrations_locales" USING "btree" ("meta_image_id");


--
-- Name: integrations_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_categories_id_idx" ON "public"."integrations_rels" USING "btree" ("categories_id");


--
-- Name: integrations_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_faq_id_idx" ON "public"."integrations_rels" USING "btree" ("faq_id");


--
-- Name: integrations_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_integrations_id_idx" ON "public"."integrations_rels" USING "btree" ("integrations_id");


--
-- Name: integrations_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_media_id_idx" ON "public"."integrations_rels" USING "btree" ("media_id");


--
-- Name: integrations_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_order_idx" ON "public"."integrations_rels" USING "btree" ("order");


--
-- Name: integrations_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_pages_id_idx" ON "public"."integrations_rels" USING "btree" ("pages_id");


--
-- Name: integrations_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_parent_idx" ON "public"."integrations_rels" USING "btree" ("parent_id");


--
-- Name: integrations_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_path_idx" ON "public"."integrations_rels" USING "btree" ("path");


--
-- Name: integrations_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_posts_id_idx" ON "public"."integrations_rels" USING "btree" ("posts_id");


--
-- Name: integrations_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_rels_solutions_id_idx" ON "public"."integrations_rels" USING "btree" ("solutions_id");


--
-- Name: integrations_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_slug_idx" ON "public"."integrations" USING "btree" ("slug");


--
-- Name: integrations_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "integrations_updated_at_idx" ON "public"."integrations" USING "btree" ("updated_at");


--
-- Name: media_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_created_at_idx" ON "public"."media" USING "btree" ("created_at");


--
-- Name: media_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "media_filename_idx" ON "public"."media" USING "btree" ("filename");


--
-- Name: media_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_rels_categories_id_idx" ON "public"."media_rels" USING "btree" ("categories_id");


--
-- Name: media_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_rels_order_idx" ON "public"."media_rels" USING "btree" ("order");


--
-- Name: media_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_rels_parent_idx" ON "public"."media_rels" USING "btree" ("parent_id");


--
-- Name: media_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_rels_path_idx" ON "public"."media_rels" USING "btree" ("path");


--
-- Name: media_sizes_large_sizes_large_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_large_sizes_large_filename_idx" ON "public"."media" USING "btree" ("sizes_large_filename");


--
-- Name: media_sizes_medium_sizes_medium_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_medium_sizes_medium_filename_idx" ON "public"."media" USING "btree" ("sizes_medium_filename");


--
-- Name: media_sizes_og_sizes_og_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "public"."media" USING "btree" ("sizes_og_filename");


--
-- Name: media_sizes_small_sizes_small_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_small_sizes_small_filename_idx" ON "public"."media" USING "btree" ("sizes_small_filename");


--
-- Name: media_sizes_square_sizes_square_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_square_sizes_square_filename_idx" ON "public"."media" USING "btree" ("sizes_square_filename");


--
-- Name: media_sizes_thumbnail_sizes_thumbnail_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "public"."media" USING "btree" ("sizes_thumbnail_filename");


--
-- Name: media_sizes_xlarge_sizes_xlarge_filename_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "public"."media" USING "btree" ("sizes_xlarge_filename");


--
-- Name: media_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "media_updated_at_idx" ON "public"."media" USING "btree" ("updated_at");


--
-- Name: pages__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages__status_idx" ON "public"."pages" USING "btree" ("_status");


--
-- Name: pages_blocks_faq_block_block_header_links_locales_locale_parent; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "pages_blocks_faq_block_block_header_links_locales_locale_parent" ON "public"."pages_blocks_faq_block_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: pages_blocks_faq_block_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_blocks_faq_block_block_header_links_order_idx" ON "public"."pages_blocks_faq_block_block_header_links" USING "btree" ("_order");


--
-- Name: pages_blocks_faq_block_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_blocks_faq_block_block_header_links_parent_id_idx" ON "public"."pages_blocks_faq_block_block_header_links" USING "btree" ("_parent_id");


--
-- Name: pages_blocks_faq_block_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "pages_blocks_faq_block_locales_locale_parent_id_unique" ON "public"."pages_blocks_faq_block_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: pages_blocks_faq_block_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_blocks_faq_block_order_idx" ON "public"."pages_blocks_faq_block" USING "btree" ("_order");


--
-- Name: pages_blocks_faq_block_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_blocks_faq_block_parent_id_idx" ON "public"."pages_blocks_faq_block" USING "btree" ("_parent_id");


--
-- Name: pages_blocks_faq_block_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_blocks_faq_block_path_idx" ON "public"."pages_blocks_faq_block" USING "btree" ("_path");


--
-- Name: pages_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_created_at_idx" ON "public"."pages" USING "btree" ("created_at");


--
-- Name: pages_hero_hero_media_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_hero_media_idx" ON "public"."pages_locales" USING "btree" ("hero_media_id", "_locale");


--
-- Name: pages_hero_links_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "pages_hero_links_locales_locale_parent_id_unique" ON "public"."pages_hero_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: pages_hero_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_links_order_idx" ON "public"."pages_hero_links" USING "btree" ("_order");


--
-- Name: pages_hero_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_links_parent_id_idx" ON "public"."pages_hero_links" USING "btree" ("_parent_id");


--
-- Name: pages_hero_logos_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_logos_logo_idx" ON "public"."pages_hero_logos" USING "btree" ("logo_id");


--
-- Name: pages_hero_logos_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_logos_order_idx" ON "public"."pages_hero_logos" USING "btree" ("_order");


--
-- Name: pages_hero_logos_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_hero_logos_parent_id_idx" ON "public"."pages_hero_logos" USING "btree" ("_parent_id");


--
-- Name: pages_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "public"."pages_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: pages_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_meta_meta_image_idx" ON "public"."pages_locales" USING "btree" ("meta_image_id");


--
-- Name: pages_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_categories_id_idx" ON "public"."pages_rels" USING "btree" ("categories_id", "locale");


--
-- Name: pages_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_faq_id_idx" ON "public"."pages_rels" USING "btree" ("faq_id", "locale");


--
-- Name: pages_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_integrations_id_idx" ON "public"."pages_rels" USING "btree" ("integrations_id", "locale");


--
-- Name: pages_rels_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_locale_idx" ON "public"."pages_rels" USING "btree" ("locale");


--
-- Name: pages_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_media_id_idx" ON "public"."pages_rels" USING "btree" ("media_id", "locale");


--
-- Name: pages_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_order_idx" ON "public"."pages_rels" USING "btree" ("order");


--
-- Name: pages_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_pages_id_idx" ON "public"."pages_rels" USING "btree" ("pages_id", "locale");


--
-- Name: pages_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_parent_idx" ON "public"."pages_rels" USING "btree" ("parent_id");


--
-- Name: pages_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_path_idx" ON "public"."pages_rels" USING "btree" ("path");


--
-- Name: pages_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_posts_id_idx" ON "public"."pages_rels" USING "btree" ("posts_id", "locale");


--
-- Name: pages_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_solutions_id_idx" ON "public"."pages_rels" USING "btree" ("solutions_id", "locale");


--
-- Name: pages_rels_testimonials_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_rels_testimonials_id_idx" ON "public"."pages_rels" USING "btree" ("testimonials_id", "locale");


--
-- Name: pages_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_slug_idx" ON "public"."pages" USING "btree" ("slug");


--
-- Name: pages_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "pages_updated_at_idx" ON "public"."pages" USING "btree" ("updated_at");


--
-- Name: payload_jobs_completed_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_completed_at_idx" ON "public"."payload_jobs" USING "btree" ("completed_at");


--
-- Name: payload_jobs_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_created_at_idx" ON "public"."payload_jobs" USING "btree" ("created_at");


--
-- Name: payload_jobs_has_error_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_has_error_idx" ON "public"."payload_jobs" USING "btree" ("has_error");


--
-- Name: payload_jobs_log_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_log_order_idx" ON "public"."payload_jobs_log" USING "btree" ("_order");


--
-- Name: payload_jobs_log_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_log_parent_id_idx" ON "public"."payload_jobs_log" USING "btree" ("_parent_id");


--
-- Name: payload_jobs_processing_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_processing_idx" ON "public"."payload_jobs" USING "btree" ("processing");


--
-- Name: payload_jobs_queue_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_queue_idx" ON "public"."payload_jobs" USING "btree" ("queue");


--
-- Name: payload_jobs_task_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_task_slug_idx" ON "public"."payload_jobs" USING "btree" ("task_slug");


--
-- Name: payload_jobs_total_tried_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_total_tried_idx" ON "public"."payload_jobs" USING "btree" ("total_tried");


--
-- Name: payload_jobs_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_updated_at_idx" ON "public"."payload_jobs" USING "btree" ("updated_at");


--
-- Name: payload_jobs_wait_until_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_jobs_wait_until_idx" ON "public"."payload_jobs" USING "btree" ("wait_until");


--
-- Name: payload_locked_documents_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_created_at_idx" ON "public"."payload_locked_documents" USING "btree" ("created_at");


--
-- Name: payload_locked_documents_global_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_global_slug_idx" ON "public"."payload_locked_documents" USING "btree" ("global_slug");


--
-- Name: payload_locked_documents_rels_case_studies_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("case_studies_id");


--
-- Name: payload_locked_documents_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("categories_id");


--
-- Name: payload_locked_documents_rels_changelog_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_changelog_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("changelog_id");


--
-- Name: payload_locked_documents_rels_faq_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_faq_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("faq_id");


--
-- Name: payload_locked_documents_rels_form_submissions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("form_submissions_id");


--
-- Name: payload_locked_documents_rels_forms_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("forms_id");


--
-- Name: payload_locked_documents_rels_integrations_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_integrations_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("integrations_id");


--
-- Name: payload_locked_documents_rels_media_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("media_id");


--
-- Name: payload_locked_documents_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_order_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("order");


--
-- Name: payload_locked_documents_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("pages_id");


--
-- Name: payload_locked_documents_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("parent_id");


--
-- Name: payload_locked_documents_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_path_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("path");


--
-- Name: payload_locked_documents_rels_payload_jobs_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("payload_jobs_id");


--
-- Name: payload_locked_documents_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("posts_id");


--
-- Name: payload_locked_documents_rels_redirects_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("redirects_id");


--
-- Name: payload_locked_documents_rels_search_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("search_id");


--
-- Name: payload_locked_documents_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_solutions_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("solutions_id");


--
-- Name: payload_locked_documents_rels_testimonials_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("testimonials_id");


--
-- Name: payload_locked_documents_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "public"."payload_locked_documents_rels" USING "btree" ("users_id");


--
-- Name: payload_locked_documents_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_locked_documents_updated_at_idx" ON "public"."payload_locked_documents" USING "btree" ("updated_at");


--
-- Name: payload_migrations_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_migrations_created_at_idx" ON "public"."payload_migrations" USING "btree" ("created_at");


--
-- Name: payload_migrations_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_migrations_updated_at_idx" ON "public"."payload_migrations" USING "btree" ("updated_at");


--
-- Name: payload_preferences_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_created_at_idx" ON "public"."payload_preferences" USING "btree" ("created_at");


--
-- Name: payload_preferences_key_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_key_idx" ON "public"."payload_preferences" USING "btree" ("key");


--
-- Name: payload_preferences_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_rels_order_idx" ON "public"."payload_preferences_rels" USING "btree" ("order");


--
-- Name: payload_preferences_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_rels_parent_idx" ON "public"."payload_preferences_rels" USING "btree" ("parent_id");


--
-- Name: payload_preferences_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_rels_path_idx" ON "public"."payload_preferences_rels" USING "btree" ("path");


--
-- Name: payload_preferences_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_rels_users_id_idx" ON "public"."payload_preferences_rels" USING "btree" ("users_id");


--
-- Name: payload_preferences_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "payload_preferences_updated_at_idx" ON "public"."payload_preferences" USING "btree" ("updated_at");


--
-- Name: posts__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts__status_idx" ON "public"."posts" USING "btree" ("_status");


--
-- Name: posts_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_created_at_idx" ON "public"."posts" USING "btree" ("created_at");


--
-- Name: posts_hero_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_hero_image_idx" ON "public"."posts_locales" USING "btree" ("hero_image_id", "_locale");


--
-- Name: posts_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "public"."posts_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: posts_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_meta_meta_image_idx" ON "public"."posts_locales" USING "btree" ("meta_image_id");


--
-- Name: posts_populated_authors_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_populated_authors_order_idx" ON "public"."posts_populated_authors" USING "btree" ("_order");


--
-- Name: posts_populated_authors_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_populated_authors_parent_id_idx" ON "public"."posts_populated_authors" USING "btree" ("_parent_id");


--
-- Name: posts_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_categories_id_idx" ON "public"."posts_rels" USING "btree" ("categories_id", "locale");


--
-- Name: posts_rels_locale_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_locale_idx" ON "public"."posts_rels" USING "btree" ("locale");


--
-- Name: posts_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_order_idx" ON "public"."posts_rels" USING "btree" ("order");


--
-- Name: posts_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_parent_idx" ON "public"."posts_rels" USING "btree" ("parent_id");


--
-- Name: posts_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_path_idx" ON "public"."posts_rels" USING "btree" ("path");


--
-- Name: posts_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_posts_id_idx" ON "public"."posts_rels" USING "btree" ("posts_id", "locale");


--
-- Name: posts_rels_users_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_rels_users_id_idx" ON "public"."posts_rels" USING "btree" ("users_id", "locale");


--
-- Name: posts_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_slug_idx" ON "public"."posts" USING "btree" ("slug");


--
-- Name: posts_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "posts_updated_at_idx" ON "public"."posts" USING "btree" ("updated_at");


--
-- Name: redirects_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_created_at_idx" ON "public"."redirects" USING "btree" ("created_at");


--
-- Name: redirects_from_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_from_idx" ON "public"."redirects" USING "btree" ("from");


--
-- Name: redirects_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_rels_order_idx" ON "public"."redirects_rels" USING "btree" ("order");


--
-- Name: redirects_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_rels_pages_id_idx" ON "public"."redirects_rels" USING "btree" ("pages_id");


--
-- Name: redirects_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_rels_parent_idx" ON "public"."redirects_rels" USING "btree" ("parent_id");


--
-- Name: redirects_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_rels_path_idx" ON "public"."redirects_rels" USING "btree" ("path");


--
-- Name: redirects_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_rels_posts_id_idx" ON "public"."redirects_rels" USING "btree" ("posts_id");


--
-- Name: redirects_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "redirects_updated_at_idx" ON "public"."redirects" USING "btree" ("updated_at");


--
-- Name: search_categories_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_categories_order_idx" ON "public"."search_categories" USING "btree" ("_order");


--
-- Name: search_categories_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_categories_parent_id_idx" ON "public"."search_categories" USING "btree" ("_parent_id");


--
-- Name: search_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_created_at_idx" ON "public"."search" USING "btree" ("created_at");


--
-- Name: search_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "public"."search_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: search_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_meta_meta_image_idx" ON "public"."search" USING "btree" ("meta_image_id");


--
-- Name: search_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_rels_order_idx" ON "public"."search_rels" USING "btree" ("order");


--
-- Name: search_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_rels_parent_idx" ON "public"."search_rels" USING "btree" ("parent_id");


--
-- Name: search_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_rels_path_idx" ON "public"."search_rels" USING "btree" ("path");


--
-- Name: search_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_rels_posts_id_idx" ON "public"."search_rels" USING "btree" ("posts_id");


--
-- Name: search_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_slug_idx" ON "public"."search" USING "btree" ("slug");


--
-- Name: search_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "search_updated_at_idx" ON "public"."search" USING "btree" ("updated_at");


--
-- Name: settings_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "settings_locales_locale_parent_id_unique" ON "public"."settings_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: settings_meta_meta_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_meta_meta_image_idx" ON "public"."settings_locales" USING "btree" ("meta_image_id", "_locale");


--
-- Name: settings_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_order_idx" ON "public"."settings_rels" USING "btree" ("order");


--
-- Name: settings_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_pages_id_idx" ON "public"."settings_rels" USING "btree" ("pages_id");


--
-- Name: settings_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_parent_idx" ON "public"."settings_rels" USING "btree" ("parent_id");


--
-- Name: settings_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_path_idx" ON "public"."settings_rels" USING "btree" ("path");


--
-- Name: settings_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_posts_id_idx" ON "public"."settings_rels" USING "btree" ("posts_id");


--
-- Name: settings_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "settings_rels_solutions_id_idx" ON "public"."settings_rels" USING "btree" ("solutions_id");


--
-- Name: solutions__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions__status_idx" ON "public"."solutions" USING "btree" ("_status");


--
-- Name: solutions_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_created_at_idx" ON "public"."solutions" USING "btree" ("created_at");


--
-- Name: solutions_ecosystem_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_ecosystem_idx" ON "public"."solutions" USING "btree" ("ecosystem_id");


--
-- Name: solutions_icon_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_icon_idx" ON "public"."solutions" USING "btree" ("icon_id");


--
-- Name: solutions_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "solutions_locales_locale_parent_id_unique" ON "public"."solutions_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: solutions_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_order_idx" ON "public"."solutions_rels" USING "btree" ("order");


--
-- Name: solutions_rels_pages_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_pages_id_idx" ON "public"."solutions_rels" USING "btree" ("pages_id");


--
-- Name: solutions_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_parent_idx" ON "public"."solutions_rels" USING "btree" ("parent_id");


--
-- Name: solutions_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_path_idx" ON "public"."solutions_rels" USING "btree" ("path");


--
-- Name: solutions_rels_posts_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_posts_id_idx" ON "public"."solutions_rels" USING "btree" ("posts_id");


--
-- Name: solutions_rels_solutions_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_rels_solutions_id_idx" ON "public"."solutions_rels" USING "btree" ("solutions_id");


--
-- Name: solutions_slug_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_slug_idx" ON "public"."solutions" USING "btree" ("slug");


--
-- Name: solutions_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "solutions_updated_at_idx" ON "public"."solutions" USING "btree" ("updated_at");


--
-- Name: testimonialsBlock_block_header_links_locales_locale_parent_id_u; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "testimonialsBlock_block_header_links_locales_locale_parent_id_u" ON "public"."testimonialsBlock_block_header_links_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: testimonialsBlock_block_header_links_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonialsBlock_block_header_links_order_idx" ON "public"."testimonialsBlock_block_header_links" USING "btree" ("_order");


--
-- Name: testimonialsBlock_block_header_links_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonialsBlock_block_header_links_parent_id_idx" ON "public"."testimonialsBlock_block_header_links" USING "btree" ("_parent_id");


--
-- Name: testimonialsBlock_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "testimonialsBlock_locales_locale_parent_id_unique" ON "public"."testimonialsBlock_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: testimonialsBlock_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonialsBlock_order_idx" ON "public"."testimonialsBlock" USING "btree" ("_order");


--
-- Name: testimonialsBlock_parent_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonialsBlock_parent_id_idx" ON "public"."testimonialsBlock" USING "btree" ("_parent_id");


--
-- Name: testimonialsBlock_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonialsBlock_path_idx" ON "public"."testimonialsBlock" USING "btree" ("_path");


--
-- Name: testimonials__status_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials__status_idx" ON "public"."testimonials" USING "btree" ("_status");


--
-- Name: testimonials_author_info_author_info_avatar_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_author_info_author_info_avatar_idx" ON "public"."testimonials" USING "btree" ("author_info_avatar_id");


--
-- Name: testimonials_case_study_case_study_linked_case_study_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_case_study_case_study_linked_case_study_idx" ON "public"."testimonials" USING "btree" ("case_study_linked_case_study_id");


--
-- Name: testimonials_company_logo_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_company_logo_idx" ON "public"."testimonials" USING "btree" ("company_logo_id");


--
-- Name: testimonials_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_created_at_idx" ON "public"."testimonials" USING "btree" ("created_at");


--
-- Name: testimonials_featured_image_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_featured_image_idx" ON "public"."testimonials_locales" USING "btree" ("featured_image_id", "_locale");


--
-- Name: testimonials_locales_locale_parent_id_unique; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "testimonials_locales_locale_parent_id_unique" ON "public"."testimonials_locales" USING "btree" ("_locale", "_parent_id");


--
-- Name: testimonials_rels_categories_id_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_rels_categories_id_idx" ON "public"."testimonials_rels" USING "btree" ("categories_id");


--
-- Name: testimonials_rels_order_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_rels_order_idx" ON "public"."testimonials_rels" USING "btree" ("order");


--
-- Name: testimonials_rels_parent_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_rels_parent_idx" ON "public"."testimonials_rels" USING "btree" ("parent_id");


--
-- Name: testimonials_rels_path_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_rels_path_idx" ON "public"."testimonials_rels" USING "btree" ("path");


--
-- Name: testimonials_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "testimonials_updated_at_idx" ON "public"."testimonials" USING "btree" ("updated_at");


--
-- Name: users_created_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "users_created_at_idx" ON "public"."users" USING "btree" ("created_at");


--
-- Name: users_email_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "users_email_idx" ON "public"."users" USING "btree" ("email");


--
-- Name: users_updated_at_idx; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "users_updated_at_idx" ON "public"."users" USING "btree" ("updated_at");


--
-- Name: _archiveBlock_v_locales _archiveBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v_locales"
    ADD CONSTRAINT "_archiveBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_archiveBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _archiveBlock_v _archiveBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_archiveBlock_v"
    ADD CONSTRAINT "_archiveBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _callToActionBlock_v _callToActionBlock_v_form_id_forms_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v"
    ADD CONSTRAINT "_callToActionBlock_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE SET NULL;


--
-- Name: _callToActionBlock_v_links_locales _callToActionBlock_v_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links_locales"
    ADD CONSTRAINT "_callToActionBlock_v_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v_links"("id") ON DELETE CASCADE;


--
-- Name: _callToActionBlock_v_links _callToActionBlock_v_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_links"
    ADD CONSTRAINT "_callToActionBlock_v_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _callToActionBlock_v_list _callToActionBlock_v_list_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_list"
    ADD CONSTRAINT "_callToActionBlock_v_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _callToActionBlock_v_locales _callToActionBlock_v_locales_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_locales"
    ADD CONSTRAINT "_callToActionBlock_v_locales_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _callToActionBlock_v_locales _callToActionBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v_locales"
    ADD CONSTRAINT "_callToActionBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_callToActionBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _callToActionBlock_v _callToActionBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_callToActionBlock_v"
    ADD CONSTRAINT "_callToActionBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links_locales _case_studies_v_blocks_faq_block_block_header_links_locales_par; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_block_header_links_locales_par" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_blocks_faq_block_block_header_links _case_studies_v_blocks_faq_block_block_header_links_parent_id_f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_block_header_links_parent_id_f" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_blocks_faq_block_locales _case_studies_v_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_blocks_faq_block _case_studies_v_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_blocks_faq_block"
    ADD CONSTRAINT "_case_studies_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_locales _case_studies_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_locales"
    ADD CONSTRAINT "_case_studies_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_locales _case_studies_v_locales_version_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_locales"
    ADD CONSTRAINT "_case_studies_v_locales_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _case_studies_v _case_studies_v_parent_id_case_studies_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v"
    ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE SET NULL;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_rels _case_studies_v_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_rels"
    ADD CONSTRAINT "_case_studies_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_version_stats_locales _case_studies_v_version_stats_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats_locales"
    ADD CONSTRAINT "_case_studies_v_version_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v_version_stats"("id") ON DELETE CASCADE;


--
-- Name: _case_studies_v_version_stats _case_studies_v_version_stats_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_case_studies_v_version_stats"
    ADD CONSTRAINT "_case_studies_v_version_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE CASCADE;


--
-- Name: _customHtmlBlock_v_block_header_links_locales _customHtmlBlock_v_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _customHtmlBlock_v_block_header_links _customHtmlBlock_v_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_block_header_links"
    ADD CONSTRAINT "_customHtmlBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _customHtmlBlock_v_locales _customHtmlBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v_locales"
    ADD CONSTRAINT "_customHtmlBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_customHtmlBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _customHtmlBlock_v _customHtmlBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_customHtmlBlock_v"
    ADD CONSTRAINT "_customHtmlBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _dividerBlock_v _dividerBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_dividerBlock_v"
    ADD CONSTRAINT "_dividerBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v_block_header_links_locales _featuredAppsBlock_v_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v_block_header_links _featuredAppsBlock_v_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_block_header_links"
    ADD CONSTRAINT "_featuredAppsBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v_cards_locales _featuredAppsBlock_v_cards_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v_cards"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v_cards _featuredAppsBlock_v_cards_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_cards"
    ADD CONSTRAINT "_featuredAppsBlock_v_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v_locales _featuredAppsBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v_locales"
    ADD CONSTRAINT "_featuredAppsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuredAppsBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuredAppsBlock_v _featuredAppsBlock_v_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v"
    ADD CONSTRAINT "_featuredAppsBlock_v_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _featuredAppsBlock_v _featuredAppsBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuredAppsBlock_v"
    ADD CONSTRAINT "_featuredAppsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v_block_header_links_locales _featuresBlock_v_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_featuresBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v_block_header_links _featuresBlock_v_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_block_header_links"
    ADD CONSTRAINT "_featuresBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v_columns_locales _featuresBlock_v_columns_locales_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns_locales"
    ADD CONSTRAINT "_featuresBlock_v_columns_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _featuresBlock_v_columns_locales _featuresBlock_v_columns_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns_locales"
    ADD CONSTRAINT "_featuresBlock_v_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v_columns"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v_columns _featuresBlock_v_columns_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_columns"
    ADD CONSTRAINT "_featuresBlock_v_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v_locales _featuresBlock_v_locales_block_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_locales"
    ADD CONSTRAINT "_featuresBlock_v_locales_block_image_id_media_id_fk" FOREIGN KEY ("block_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _featuresBlock_v_locales _featuresBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v_locales"
    ADD CONSTRAINT "_featuresBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_featuresBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _featuresBlock_v _featuresBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_featuresBlock_v"
    ADD CONSTRAINT "_featuresBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _formBlock_v _formBlock_v_form_id_forms_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_formBlock_v"
    ADD CONSTRAINT "_formBlock_v_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE SET NULL;


--
-- Name: _formBlock_v _formBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_formBlock_v"
    ADD CONSTRAINT "_formBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v_block_header_links_locales _galleryBlock_v_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_galleryBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v_block_header_links _galleryBlock_v_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_block_header_links"
    ADD CONSTRAINT "_galleryBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v_interactive_gallery_locales _galleryBlock_v_interactive_gallery_locales_image_id_media_id_f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery_locales"
    ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_locales_image_id_media_id_f" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _galleryBlock_v_interactive_gallery_locales _galleryBlock_v_interactive_gallery_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery_locales"
    ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v_interactive_gallery"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v_interactive_gallery _galleryBlock_v_interactive_gallery_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_interactive_gallery"
    ADD CONSTRAINT "_galleryBlock_v_interactive_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v_locales _galleryBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v_locales"
    ADD CONSTRAINT "_galleryBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_galleryBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _galleryBlock_v _galleryBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_galleryBlock_v"
    ADD CONSTRAINT "_galleryBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_blocks_faq_block_block_header_links_locales _integrations_v_blocks_faq_block_block_header_links_locales_par; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_block_header_links_locales_par" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_blocks_faq_block_block_header_links _integrations_v_blocks_faq_block_block_header_links_parent_id_f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_block_header_links_parent_id_f" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_blocks_faq_block_locales _integrations_v_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_blocks_faq_block _integrations_v_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_blocks_faq_block"
    ADD CONSTRAINT "_integrations_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_locales _integrations_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_locales"
    ADD CONSTRAINT "_integrations_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_locales _integrations_v_locales_version_hero_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_locales"
    ADD CONSTRAINT "_integrations_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _integrations_v_locales _integrations_v_locales_version_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_locales"
    ADD CONSTRAINT "_integrations_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _integrations_v _integrations_v_parent_id_integrations_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v"
    ADD CONSTRAINT "_integrations_v_parent_id_integrations_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."integrations"("id") ON DELETE SET NULL;


--
-- Name: _integrations_v_rels _integrations_v_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_rels _integrations_v_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_rels"
    ADD CONSTRAINT "_integrations_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_version_hero_links_locales _integrations_v_version_hero_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links_locales"
    ADD CONSTRAINT "_integrations_v_version_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v_version_hero_links"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_version_hero_links _integrations_v_version_hero_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_links"
    ADD CONSTRAINT "_integrations_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v_version_hero_logos _integrations_v_version_hero_logos_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_logos"
    ADD CONSTRAINT "_integrations_v_version_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _integrations_v_version_hero_logos _integrations_v_version_hero_logos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v_version_hero_logos"
    ADD CONSTRAINT "_integrations_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_integrations_v"("id") ON DELETE CASCADE;


--
-- Name: _integrations_v _integrations_v_version_icon_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_integrations_v"
    ADD CONSTRAINT "_integrations_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _pages_v_blocks_faq_block_block_header_links_locales _pages_v_blocks_faq_block_block_header_links_locales_parent_id_; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_block_header_links_locales_parent_id_" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_faq_block_block_header_links _pages_v_blocks_faq_block_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_faq_block_locales _pages_v_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block_locales"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_blocks_faq_block _pages_v_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_blocks_faq_block"
    ADD CONSTRAINT "_pages_v_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_locales _pages_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_locales"
    ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_locales _pages_v_locales_version_hero_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_locales"
    ADD CONSTRAINT "_pages_v_locales_version_hero_media_id_media_id_fk" FOREIGN KEY ("version_hero_media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _pages_v_locales _pages_v_locales_version_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_locales"
    ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _pages_v _pages_v_parent_id_pages_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v"
    ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE SET NULL;


--
-- Name: _pages_v_rels _pages_v_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_rels _pages_v_rels_testimonials_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_rels"
    ADD CONSTRAINT "_pages_v_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_version_hero_links_locales _pages_v_version_hero_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links_locales"
    ADD CONSTRAINT "_pages_v_version_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_version_hero_links _pages_v_version_hero_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_links"
    ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _pages_v_version_hero_logos _pages_v_version_hero_logos_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_logos"
    ADD CONSTRAINT "_pages_v_version_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _pages_v_version_hero_logos _pages_v_version_hero_logos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_pages_v_version_hero_logos"
    ADD CONSTRAINT "_pages_v_version_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_locales _posts_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_locales"
    ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_locales _posts_v_locales_version_hero_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_locales"
    ADD CONSTRAINT "_posts_v_locales_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _posts_v_locales _posts_v_locales_version_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_locales"
    ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _posts_v _posts_v_parent_id_posts_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v"
    ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE SET NULL;


--
-- Name: _posts_v_rels _posts_v_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels"
    ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_rels _posts_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels"
    ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_rels _posts_v_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels"
    ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_rels _posts_v_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_rels"
    ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


--
-- Name: _posts_v_version_populated_authors _posts_v_version_populated_authors_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_posts_v_version_populated_authors"
    ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v_locales _solutions_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_locales"
    ADD CONSTRAINT "_solutions_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v _solutions_v_parent_id_solutions_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v"
    ADD CONSTRAINT "_solutions_v_parent_id_solutions_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE SET NULL;


--
-- Name: _solutions_v_rels _solutions_v_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels"
    ADD CONSTRAINT "_solutions_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v_rels _solutions_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels"
    ADD CONSTRAINT "_solutions_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_solutions_v"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v_rels _solutions_v_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels"
    ADD CONSTRAINT "_solutions_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v_rels _solutions_v_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v_rels"
    ADD CONSTRAINT "_solutions_v_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: _solutions_v _solutions_v_version_ecosystem_id_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v"
    ADD CONSTRAINT "_solutions_v_version_ecosystem_id_categories_id_fk" FOREIGN KEY ("version_ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL;


--
-- Name: _solutions_v _solutions_v_version_icon_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_solutions_v"
    ADD CONSTRAINT "_solutions_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _testimonialsBlock_v_block_header_links_locales _testimonialsBlock_v_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links_locales"
    ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: _testimonialsBlock_v_block_header_links _testimonialsBlock_v_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_block_header_links"
    ADD CONSTRAINT "_testimonialsBlock_v_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _testimonialsBlock_v_locales _testimonialsBlock_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v_locales"
    ADD CONSTRAINT "_testimonialsBlock_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonialsBlock_v"("id") ON DELETE CASCADE;


--
-- Name: _testimonialsBlock_v _testimonialsBlock_v_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonialsBlock_v"
    ADD CONSTRAINT "_testimonialsBlock_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE CASCADE;


--
-- Name: _testimonials_v_locales _testimonials_v_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_locales"
    ADD CONSTRAINT "_testimonials_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonials_v"("id") ON DELETE CASCADE;


--
-- Name: _testimonials_v_locales _testimonials_v_locales_version_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_locales"
    ADD CONSTRAINT "_testimonials_v_locales_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _testimonials_v _testimonials_v_parent_id_testimonials_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v"
    ADD CONSTRAINT "_testimonials_v_parent_id_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE SET NULL;


--
-- Name: _testimonials_v_rels _testimonials_v_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_rels"
    ADD CONSTRAINT "_testimonials_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: _testimonials_v_rels _testimonials_v_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v_rels"
    ADD CONSTRAINT "_testimonials_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_testimonials_v"("id") ON DELETE CASCADE;


--
-- Name: _testimonials_v _testimonials_v_version_author_info_avatar_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v"
    ADD CONSTRAINT "_testimonials_v_version_author_info_avatar_id_media_id_fk" FOREIGN KEY ("version_author_info_avatar_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: _testimonials_v _testimonials_v_version_case_study_linked_case_study_id_case_st; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v"
    ADD CONSTRAINT "_testimonials_v_version_case_study_linked_case_study_id_case_st" FOREIGN KEY ("version_case_study_linked_case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE SET NULL;


--
-- Name: _testimonials_v _testimonials_v_version_company_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."_testimonials_v"
    ADD CONSTRAINT "_testimonials_v_version_company_logo_id_media_id_fk" FOREIGN KEY ("version_company_logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: archiveBlock_locales archiveBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."archiveBlock_locales"
    ADD CONSTRAINT "archiveBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."archiveBlock"("id") ON DELETE CASCADE;


--
-- Name: archiveBlock archiveBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."archiveBlock"
    ADD CONSTRAINT "archiveBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: callToActionBlock callToActionBlock_form_id_forms_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock"
    ADD CONSTRAINT "callToActionBlock_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE SET NULL;


--
-- Name: callToActionBlock_links_locales callToActionBlock_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_links_locales"
    ADD CONSTRAINT "callToActionBlock_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock_links"("id") ON DELETE CASCADE;


--
-- Name: callToActionBlock_links callToActionBlock_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_links"
    ADD CONSTRAINT "callToActionBlock_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE CASCADE;


--
-- Name: callToActionBlock_list callToActionBlock_list_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_list"
    ADD CONSTRAINT "callToActionBlock_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE CASCADE;


--
-- Name: callToActionBlock_locales callToActionBlock_locales_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_locales"
    ADD CONSTRAINT "callToActionBlock_locales_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: callToActionBlock_locales callToActionBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock_locales"
    ADD CONSTRAINT "callToActionBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."callToActionBlock"("id") ON DELETE CASCADE;


--
-- Name: callToActionBlock callToActionBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."callToActionBlock"
    ADD CONSTRAINT "callToActionBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: case_studies_blocks_faq_block_block_header_links_locales case_studies_blocks_faq_block_block_header_links_locales_parent; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "case_studies_blocks_faq_block_block_header_links_locales_parent" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: case_studies_blocks_faq_block_block_header_links case_studies_blocks_faq_block_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "case_studies_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: case_studies_blocks_faq_block_locales case_studies_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block_locales"
    ADD CONSTRAINT "case_studies_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: case_studies_blocks_faq_block case_studies_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_blocks_faq_block"
    ADD CONSTRAINT "case_studies_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE CASCADE;


--
-- Name: case_studies_locales case_studies_locales_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_locales"
    ADD CONSTRAINT "case_studies_locales_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: case_studies_locales case_studies_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_locales"
    ADD CONSTRAINT "case_studies_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: case_studies_rels case_studies_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_rels"
    ADD CONSTRAINT "case_studies_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: case_studies_stats_locales case_studies_stats_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_stats_locales"
    ADD CONSTRAINT "case_studies_stats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies_stats"("id") ON DELETE CASCADE;


--
-- Name: case_studies_stats case_studies_stats_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."case_studies_stats"
    ADD CONSTRAINT "case_studies_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."case_studies"("id") ON DELETE CASCADE;


--
-- Name: categories_breadcrumbs categories_breadcrumbs_doc_id_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_breadcrumbs"
    ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL;


--
-- Name: categories_breadcrumbs categories_breadcrumbs_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_breadcrumbs"
    ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: categories_locales categories_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories_locales"
    ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: categories categories_parent_id_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."categories"
    ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL;


--
-- Name: changelog_categories changelog_categories_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_categories"
    ADD CONSTRAINT "changelog_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."changelog"("id") ON DELETE CASCADE;


--
-- Name: changelog_locales changelog_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."changelog_locales"
    ADD CONSTRAINT "changelog_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."changelog"("id") ON DELETE CASCADE;


--
-- Name: customHtmlBlock_block_header_links_locales customHtmlBlock_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_block_header_links_locales"
    ADD CONSTRAINT "customHtmlBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: customHtmlBlock_block_header_links customHtmlBlock_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_block_header_links"
    ADD CONSTRAINT "customHtmlBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock"("id") ON DELETE CASCADE;


--
-- Name: customHtmlBlock_locales customHtmlBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock_locales"
    ADD CONSTRAINT "customHtmlBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customHtmlBlock"("id") ON DELETE CASCADE;


--
-- Name: customHtmlBlock customHtmlBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."customHtmlBlock"
    ADD CONSTRAINT "customHtmlBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: dividerBlock dividerBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."dividerBlock"
    ADD CONSTRAINT "dividerBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: faq_locales faq_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."faq_locales"
    ADD CONSTRAINT "faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock_block_header_links_locales featuredAppsBlock_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_block_header_links_locales"
    ADD CONSTRAINT "featuredAppsBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock_block_header_links featuredAppsBlock_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_block_header_links"
    ADD CONSTRAINT "featuredAppsBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock_cards_locales featuredAppsBlock_cards_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_cards_locales"
    ADD CONSTRAINT "featuredAppsBlock_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock_cards"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock_cards featuredAppsBlock_cards_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_cards"
    ADD CONSTRAINT "featuredAppsBlock_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock_locales featuredAppsBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock_locales"
    ADD CONSTRAINT "featuredAppsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuredAppsBlock"("id") ON DELETE CASCADE;


--
-- Name: featuredAppsBlock featuredAppsBlock_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock"
    ADD CONSTRAINT "featuredAppsBlock_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: featuredAppsBlock featuredAppsBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuredAppsBlock"
    ADD CONSTRAINT "featuredAppsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock_block_header_links_locales featuresBlock_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_block_header_links_locales"
    ADD CONSTRAINT "featuresBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock_block_header_links featuresBlock_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_block_header_links"
    ADD CONSTRAINT "featuresBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock_columns_locales featuresBlock_columns_locales_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns_locales"
    ADD CONSTRAINT "featuresBlock_columns_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: featuresBlock_columns_locales featuresBlock_columns_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns_locales"
    ADD CONSTRAINT "featuresBlock_columns_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock_columns"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock_columns featuresBlock_columns_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_columns"
    ADD CONSTRAINT "featuresBlock_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock_locales featuresBlock_locales_block_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_locales"
    ADD CONSTRAINT "featuresBlock_locales_block_image_id_media_id_fk" FOREIGN KEY ("block_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: featuresBlock_locales featuresBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock_locales"
    ADD CONSTRAINT "featuresBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."featuresBlock"("id") ON DELETE CASCADE;


--
-- Name: featuresBlock featuresBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."featuresBlock"
    ADD CONSTRAINT "featuresBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: footer_columns_nav_items_locales footer_columns_nav_items_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns_nav_items_locales"
    ADD CONSTRAINT "footer_columns_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns_nav_items"("id") ON DELETE CASCADE;


--
-- Name: footer_columns_nav_items footer_columns_nav_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns_nav_items"
    ADD CONSTRAINT "footer_columns_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE CASCADE;


--
-- Name: footer_columns footer_columns_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_columns"
    ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE CASCADE;


--
-- Name: footer_rels footer_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels"
    ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: footer_rels footer_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels"
    ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE CASCADE;


--
-- Name: footer_rels footer_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels"
    ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: footer_rels footer_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."footer_rels"
    ADD CONSTRAINT "footer_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: formBlock formBlock_form_id_forms_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."formBlock"
    ADD CONSTRAINT "formBlock_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE SET NULL;


--
-- Name: formBlock formBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."formBlock"
    ADD CONSTRAINT "formBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: form_submissions form_submissions_form_id_forms_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."form_submissions"
    ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE SET NULL;


--
-- Name: form_submissions_submission_data form_submissions_submission_data_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."form_submissions_submission_data"
    ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_checkbox_locales forms_blocks_checkbox_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_checkbox_locales"
    ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_checkbox forms_blocks_checkbox_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_checkbox"
    ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_country_locales forms_blocks_country_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_country_locales"
    ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_country forms_blocks_country_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_country"
    ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_email_locales forms_blocks_email_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_email_locales"
    ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_email forms_blocks_email_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_email"
    ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_message_locales forms_blocks_message_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_message_locales"
    ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_message forms_blocks_message_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_message"
    ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_number_locales forms_blocks_number_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_number_locales"
    ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_number forms_blocks_number_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_number"
    ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_select_locales forms_blocks_select_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_locales"
    ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_select_options_locales forms_blocks_select_options_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_options_locales"
    ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_select_options forms_blocks_select_options_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select_options"
    ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_select forms_blocks_select_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_select"
    ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_state_locales forms_blocks_state_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_state_locales"
    ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_state forms_blocks_state_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_state"
    ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_text_locales forms_blocks_text_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_text_locales"
    ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_text forms_blocks_text_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_text"
    ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_textarea_locales forms_blocks_textarea_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_textarea_locales"
    ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE CASCADE;


--
-- Name: forms_blocks_textarea forms_blocks_textarea_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_blocks_textarea"
    ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_emails_locales forms_emails_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_emails_locales"
    ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE CASCADE;


--
-- Name: forms_emails forms_emails_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_emails"
    ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: forms_locales forms_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."forms_locales"
    ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock_block_header_links_locales galleryBlock_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_block_header_links_locales"
    ADD CONSTRAINT "galleryBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock_block_header_links galleryBlock_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_block_header_links"
    ADD CONSTRAINT "galleryBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock_interactive_gallery_locales galleryBlock_interactive_gallery_locales_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery_locales"
    ADD CONSTRAINT "galleryBlock_interactive_gallery_locales_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: galleryBlock_interactive_gallery_locales galleryBlock_interactive_gallery_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery_locales"
    ADD CONSTRAINT "galleryBlock_interactive_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock_interactive_gallery"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock_interactive_gallery galleryBlock_interactive_gallery_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_interactive_gallery"
    ADD CONSTRAINT "galleryBlock_interactive_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock_locales galleryBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock_locales"
    ADD CONSTRAINT "galleryBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."galleryBlock"("id") ON DELETE CASCADE;


--
-- Name: galleryBlock galleryBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."galleryBlock"
    ADD CONSTRAINT "galleryBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: header_cta_locales header_cta_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_cta_locales"
    ADD CONSTRAINT "header_cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_cta"("id") ON DELETE CASCADE;


--
-- Name: header_cta header_cta_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_cta"
    ADD CONSTRAINT "header_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE CASCADE;


--
-- Name: header_rels header_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels"
    ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: header_rels header_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels"
    ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE CASCADE;


--
-- Name: header_rels header_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels"
    ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: header_rels header_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_rels"
    ADD CONSTRAINT "header_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_description_links_locales header_tabs_description_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_description_links_locales"
    ADD CONSTRAINT "header_tabs_description_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_description_links"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_description_links header_tabs_description_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_description_links"
    ADD CONSTRAINT "header_tabs_description_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_locales header_tabs_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_locales"
    ADD CONSTRAINT "header_tabs_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items_featured_link_links_locales header_tabs_nav_items_featured_link_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_featured_link_links_locales"
    ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items_featured_link_links"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items_featured_link_links header_tabs_nav_items_featured_link_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_featured_link_links"
    ADD CONSTRAINT "header_tabs_nav_items_featured_link_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items_list_links_links_locales header_tabs_nav_items_list_links_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_list_links_links_locales"
    ADD CONSTRAINT "header_tabs_nav_items_list_links_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items_list_links_links"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items_list_links_links header_tabs_nav_items_list_links_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_list_links_links"
    ADD CONSTRAINT "header_tabs_nav_items_list_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items_locales header_tabs_nav_items_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items_locales"
    ADD CONSTRAINT "header_tabs_nav_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs_nav_items"("id") ON DELETE CASCADE;


--
-- Name: header_tabs_nav_items header_tabs_nav_items_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs_nav_items"
    ADD CONSTRAINT "header_tabs_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_tabs"("id") ON DELETE CASCADE;


--
-- Name: header_tabs header_tabs_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."header_tabs"
    ADD CONSTRAINT "header_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE CASCADE;


--
-- Name: integrations_blocks_faq_block_block_header_links_locales integrations_blocks_faq_block_block_header_links_locales_parent; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "integrations_blocks_faq_block_block_header_links_locales_parent" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: integrations_blocks_faq_block_block_header_links integrations_blocks_faq_block_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "integrations_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: integrations_blocks_faq_block_locales integrations_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block_locales"
    ADD CONSTRAINT "integrations_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: integrations_blocks_faq_block integrations_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_blocks_faq_block"
    ADD CONSTRAINT "integrations_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations_hero_links_locales integrations_hero_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_links_locales"
    ADD CONSTRAINT "integrations_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations_hero_links"("id") ON DELETE CASCADE;


--
-- Name: integrations_hero_links integrations_hero_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_links"
    ADD CONSTRAINT "integrations_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations_hero_logos integrations_hero_logos_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_logos"
    ADD CONSTRAINT "integrations_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: integrations_hero_logos integrations_hero_logos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_hero_logos"
    ADD CONSTRAINT "integrations_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations integrations_icon_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations"
    ADD CONSTRAINT "integrations_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: integrations_locales integrations_locales_hero_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_locales"
    ADD CONSTRAINT "integrations_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: integrations_locales integrations_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_locales"
    ADD CONSTRAINT "integrations_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: integrations_locales integrations_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_locales"
    ADD CONSTRAINT "integrations_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: integrations_rels integrations_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."integrations_rels"
    ADD CONSTRAINT "integrations_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: media_rels media_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media_rels"
    ADD CONSTRAINT "media_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: media_rels media_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."media_rels"
    ADD CONSTRAINT "media_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: pages_blocks_faq_block_block_header_links_locales pages_blocks_faq_block_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_block_header_links_locales"
    ADD CONSTRAINT "pages_blocks_faq_block_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: pages_blocks_faq_block_block_header_links pages_blocks_faq_block_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_block_header_links"
    ADD CONSTRAINT "pages_blocks_faq_block_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: pages_blocks_faq_block_locales pages_blocks_faq_block_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block_locales"
    ADD CONSTRAINT "pages_blocks_faq_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_block"("id") ON DELETE CASCADE;


--
-- Name: pages_blocks_faq_block pages_blocks_faq_block_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_blocks_faq_block"
    ADD CONSTRAINT "pages_blocks_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_hero_links_locales pages_hero_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_links_locales"
    ADD CONSTRAINT "pages_hero_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE CASCADE;


--
-- Name: pages_hero_links pages_hero_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_links"
    ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_hero_logos pages_hero_logos_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_logos"
    ADD CONSTRAINT "pages_hero_logos_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: pages_hero_logos pages_hero_logos_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_hero_logos"
    ADD CONSTRAINT "pages_hero_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_locales pages_locales_hero_media_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_locales"
    ADD CONSTRAINT "pages_locales_hero_media_id_media_id_fk" FOREIGN KEY ("hero_media_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: pages_locales pages_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_locales"
    ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: pages_locales pages_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_locales"
    ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: pages_rels pages_rels_testimonials_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."pages_rels"
    ADD CONSTRAINT "pages_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE CASCADE;


--
-- Name: payload_jobs_log payload_jobs_log_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_jobs_log"
    ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_case_studies_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_changelog_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_changelog_fk" FOREIGN KEY ("changelog_id") REFERENCES "public"."changelog"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_faq_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_faq_fk" FOREIGN KEY ("faq_id") REFERENCES "public"."faq"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_form_submissions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_forms_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_integrations_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_integrations_fk" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_media_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_payload_jobs_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_redirects_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_search_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_testimonials_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE CASCADE;


--
-- Name: payload_locked_documents_rels payload_locked_documents_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_locked_documents_rels"
    ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences_rels"
    ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE CASCADE;


--
-- Name: payload_preferences_rels payload_preferences_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."payload_preferences_rels"
    ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


--
-- Name: posts_locales posts_locales_hero_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_locales"
    ADD CONSTRAINT "posts_locales_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: posts_locales posts_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_locales"
    ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: posts_locales posts_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_locales"
    ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: posts_populated_authors posts_populated_authors_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_populated_authors"
    ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels"
    ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels"
    ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels"
    ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: posts_rels posts_rels_users_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."posts_rels"
    ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects_rels"
    ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects_rels"
    ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE CASCADE;


--
-- Name: redirects_rels redirects_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."redirects_rels"
    ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: search_categories search_categories_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_categories"
    ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE CASCADE;


--
-- Name: search_locales search_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_locales"
    ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE CASCADE;


--
-- Name: search search_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search"
    ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: search_rels search_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_rels"
    ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE CASCADE;


--
-- Name: search_rels search_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."search_rels"
    ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: settings_locales settings_locales_meta_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_locales"
    ADD CONSTRAINT "settings_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: settings_locales settings_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_locales"
    ADD CONSTRAINT "settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."settings"("id") ON DELETE CASCADE;


--
-- Name: settings_rels settings_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels"
    ADD CONSTRAINT "settings_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: settings_rels settings_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels"
    ADD CONSTRAINT "settings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."settings"("id") ON DELETE CASCADE;


--
-- Name: settings_rels settings_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels"
    ADD CONSTRAINT "settings_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: settings_rels settings_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."settings_rels"
    ADD CONSTRAINT "settings_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: solutions solutions_ecosystem_id_categories_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions"
    ADD CONSTRAINT "solutions_ecosystem_id_categories_id_fk" FOREIGN KEY ("ecosystem_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL;


--
-- Name: solutions solutions_icon_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions"
    ADD CONSTRAINT "solutions_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: solutions_locales solutions_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_locales"
    ADD CONSTRAINT "solutions_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: solutions_rels solutions_rels_pages_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels"
    ADD CONSTRAINT "solutions_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: solutions_rels solutions_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels"
    ADD CONSTRAINT "solutions_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: solutions_rels solutions_rels_posts_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels"
    ADD CONSTRAINT "solutions_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;


--
-- Name: solutions_rels solutions_rels_solutions_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."solutions_rels"
    ADD CONSTRAINT "solutions_rels_solutions_fk" FOREIGN KEY ("solutions_id") REFERENCES "public"."solutions"("id") ON DELETE CASCADE;


--
-- Name: testimonialsBlock_block_header_links_locales testimonialsBlock_block_header_links_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_block_header_links_locales"
    ADD CONSTRAINT "testimonialsBlock_block_header_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock_block_header_links"("id") ON DELETE CASCADE;


--
-- Name: testimonialsBlock_block_header_links testimonialsBlock_block_header_links_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_block_header_links"
    ADD CONSTRAINT "testimonialsBlock_block_header_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock"("id") ON DELETE CASCADE;


--
-- Name: testimonialsBlock_locales testimonialsBlock_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock_locales"
    ADD CONSTRAINT "testimonialsBlock_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonialsBlock"("id") ON DELETE CASCADE;


--
-- Name: testimonialsBlock testimonialsBlock_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonialsBlock"
    ADD CONSTRAINT "testimonialsBlock_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE CASCADE;


--
-- Name: testimonials testimonials_author_info_avatar_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials"
    ADD CONSTRAINT "testimonials_author_info_avatar_id_media_id_fk" FOREIGN KEY ("author_info_avatar_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: testimonials testimonials_case_study_linked_case_study_id_case_studies_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials"
    ADD CONSTRAINT "testimonials_case_study_linked_case_study_id_case_studies_id_fk" FOREIGN KEY ("case_study_linked_case_study_id") REFERENCES "public"."case_studies"("id") ON DELETE SET NULL;


--
-- Name: testimonials testimonials_company_logo_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials"
    ADD CONSTRAINT "testimonials_company_logo_id_media_id_fk" FOREIGN KEY ("company_logo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: testimonials_locales testimonials_locales_featured_image_id_media_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_locales"
    ADD CONSTRAINT "testimonials_locales_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE SET NULL;


--
-- Name: testimonials_locales testimonials_locales_parent_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_locales"
    ADD CONSTRAINT "testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE CASCADE;


--
-- Name: testimonials_rels testimonials_rels_categories_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_rels"
    ADD CONSTRAINT "testimonials_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE CASCADE;


--
-- Name: testimonials_rels testimonials_rels_parent_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."testimonials_rels"
    ADD CONSTRAINT "testimonials_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

