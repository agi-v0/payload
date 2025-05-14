import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_featuresBlock_columns_size" ADD VALUE 'sixtyPercent';
  ALTER TYPE "public"."enum_featuresBlock_columns_size" ADD VALUE 'fortyPercent';
  ALTER TYPE "public"."enum__featuresBlock_v_columns_size" ADD VALUE 'sixtyPercent';
  ALTER TYPE "public"."enum__featuresBlock_v_columns_size" ADD VALUE 'fortyPercent';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "public"."featuresBlock_columns" ALTER COLUMN "size" SET DATA TYPE text;
  DROP TYPE "public"."enum_featuresBlock_columns_size";
  CREATE TYPE "public"."enum_featuresBlock_columns_size" AS ENUM('half', 'full', 'oneThird', 'twoThirds');
  ALTER TABLE "public"."featuresBlock_columns" ALTER COLUMN "size" SET DATA TYPE "public"."enum_featuresBlock_columns_size" USING "size"::"public"."enum_featuresBlock_columns_size";
  ALTER TABLE "public"."_featuresBlock_v_columns" ALTER COLUMN "size" SET DATA TYPE text;
  DROP TYPE "public"."enum__featuresBlock_v_columns_size";
  CREATE TYPE "public"."enum__featuresBlock_v_columns_size" AS ENUM('half', 'full', 'oneThird', 'twoThirds');
  ALTER TABLE "public"."_featuresBlock_v_columns" ALTER COLUMN "size" SET DATA TYPE "public"."enum__featuresBlock_v_columns_size" USING "size"::"public"."enum__featuresBlock_v_columns_size";`)
}
