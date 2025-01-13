'use server'

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { publicEnv, getServerEnv } from '@/libs/env'

const serverEnv = await getServerEnv()

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(publicEnv.SUPABASE_URL, serverEnv.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
    },
  })
}
