'use server'

import { z } from 'zod'
import { serverEnvSchema } from '@/shared/libs/env/schemas'
import type { ServerEnv } from '@/shared/libs/env/schemas'

async function validateServerEnv(): Promise<ServerEnv> {
  if (typeof window !== 'undefined') {
    throw new Error('이 코드는 클라이언트 환경에서 실행할 수 없습니다.')
  }

  try {
    const env = {
      SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
      SUPABASE_STORAGE_BUCKET: process.env.SUPABASE_STORAGE_BUCKET,
    }

    return serverEnvSchema.parse(env)
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`환경 변수가 올바르게 설정되지 않았습니다. ${error.message}`)
    }

    throw error
  }
}

export async function getServerEnv(): Promise<ServerEnv> {
  return await validateServerEnv()
}
