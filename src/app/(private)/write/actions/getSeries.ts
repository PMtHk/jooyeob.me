'use server'

import { createClient } from '@/lib/supabase/server'
import type { ClientSeries } from '@/app/(private)/write/actions/createSeries'
export type GetSeriesDto = ClientSeries[]

export async function getSeries(): Promise<GetSeriesDto> {
  const supabase = await createClient()

  const { data, error } = await supabase.from('series').select('id, name')

  if (error) throw error

  return data
}
