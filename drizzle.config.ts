import { defineConfig } from 'drizzle-kit'
import './envConfig.ts'

export default defineConfig({
  schema: './src/payload-generated-schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URI,
  },
})
