import { createBrowserClient } from '@supabase/ssr'
import { publicEnv } from '../env'

import type { Database } from '@/lib/supabase/types'

export function createClient() {
  return createBrowserClient<Database>(publicEnv.SUPABASE_URL, publicEnv.SUPABASE_ANON_KEY)
}
