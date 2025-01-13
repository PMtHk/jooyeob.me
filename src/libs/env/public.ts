import { z } from 'zod'
import { publicEnvSchema } from '@/libs/env/schemas'
import type { PublicEnv } from '@/libs/env/schemas'

function validatePublicEnv(): PublicEnv {
  try {
    const env = {
      SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    }
    return publicEnvSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`환경 변수가 올바르게 설정되지 않았습니다. ${error.message}`)
    }
    throw error
  }
}

export const publicEnv = validatePublicEnv()
