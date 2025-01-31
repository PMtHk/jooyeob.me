import { z } from 'zod'

export const publicEnvSchema = z
  .object({
    SUPABASE_URL: z.string().url(),
    SUPABASE_ANON_KEY: z.string().min(1),
  })
  .strict()

export const serverEnvSchema = z
  .object({
    SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
    SUPABASE_STORAGE_BUCKET: z.string().min(1),
  })
  .strict()

export type PublicEnv = z.infer<typeof publicEnvSchema>
export type ServerEnv = z.infer<typeof serverEnvSchema>
