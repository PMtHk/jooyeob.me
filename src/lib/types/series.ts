import type { Tables, TablesInsert } from '@/lib/supabase/types'

export type ClientSeries = Pick<Tables<'series'>, 'id' | 'name'>

export type CreateSeriesDto = Pick<TablesInsert<'series'>, 'name'>

export type GetSeriesDto = ClientSeries[]
