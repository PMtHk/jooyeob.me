'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { publicEnv, getServerEnv } from '@/libs/env'

export async function createClient() {
  const serverEnv = await getServerEnv()
  const cookieStore = await cookies()

  return createServerClient(publicEnv.SUPABASE_URL, serverEnv.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })
}
