import type { Tables } from '@/lib/supabase/types'

export type ClientTag = Tables<'tags_with_post_count'>
export type ClientTags = Array<ClientTag>
