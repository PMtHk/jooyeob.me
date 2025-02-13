'use server'

import { createClient } from '@/lib/supabase/client'
import type { ClientTags } from '@/lib/types/tag'

export async function getTags(): Promise<ClientTags> {
  const supabase = createClient()

  const { data: tags, error } = await supabase
    .from('tags_with_post_count')
    .select('*')
    .order('post_count', { ascending: false })

  if (error) throw error

  return tags
}
