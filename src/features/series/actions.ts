'use server'

import { createClient } from '@/shared/utils/supabase/server'
import { CreateSeriesDto, GetSeriesDto } from '@/features/series/types'

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

export async function getSeries(): Promise<GetSeriesDto> {
  const supabase = await createClient()

  const { data, error } = await supabase.from('series').select('id, name')

  if (error) throw error

  return data
}
