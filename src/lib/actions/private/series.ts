import { createClient } from '@/lib/supabase/server'
import { CreateSeriesDto } from '@/lib/types/series'

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
