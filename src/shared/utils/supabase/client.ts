import { createBrowserClient } from '@supabase/ssr'
import { publicEnv } from '@/shared/libs/env'

import type { Database } from '@/shared/utils/supabase/types'

export function createClient() {
  return createBrowserClient<Database>(publicEnv.SUPABASE_URL, publicEnv.SUPABASE_ANON_KEY)
}
