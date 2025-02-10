import { createClient } from '@/lib/supabase/server'
import type { Tables, TablesInsert } from '@/lib/supabase/types'

export type ClientSeries = Pick<Tables<'series'>, 'id' | 'name'>
export type CreateSeriesDto = Pick<TablesInsert<'series'>, 'name'>

export async function createSeries(createSeriesDto: CreateSeriesDto) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('series')
    .insert([createSeriesDto])
    .select('id, name')
    .single()

  if (error) throw error

  return data
}
