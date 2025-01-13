import { createBrowserClient } from '@supabase/ssr'
import { publicEnv } from '@/libs/env'

import type { Database } from '@/utils/supabase/types'

export function createClient() {
  return createBrowserClient<Database>(publicEnv.SUPABASE_URL, publicEnv.SUPABASE_ANON_KEY)
}
