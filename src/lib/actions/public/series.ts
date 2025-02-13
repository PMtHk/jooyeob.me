'use server'

import { createClient } from '@/lib/supabase/client'
import { GetSeriesDto } from '@/lib/types/series'

export async function getSeries(): Promise<GetSeriesDto> {
  const supabase = createClient()

  const { data, error } = await supabase.from('series').select('id, name')

  if (error) throw error

  return data
}
