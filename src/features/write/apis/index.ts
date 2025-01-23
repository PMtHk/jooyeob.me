import { createClient } from '@/shared/utils/supabase/server'
import type { TablesInsert } from '@/shared/utils/supabase/types'

export type PostInsert = TablesInsert<'posts'>

export async function createPost(post: PostInsert) {
  const supabase = await createClient()
  const { data, error } = await supabase.from('posts').insert([post]).single()

  if (error) {
    throw error
  }

  return data
}
