'use server'

import { createClient } from '@/lib/supabase/client'
import type { Tables } from '@/lib/supabase/types'

export type ClientPostDetail = Tables<'posts'> & {
  tags: Array<Pick<Tables<'tags'>, 'id' | 'name'>>
  series: Pick<Tables<'series'>, 'id' | 'name'> | null
}

export async function getPost(slug: string): Promise<ClientPostDetail> {
  const supabase = createClient()
  console.log(slug)

  const { data: post, error } = await supabase
    .from('posts')
    .select(`*, series ( id, name ), tags ( id, name )`)
    .eq('slug', slug)
    .single()

  if (!post) throw new Error('해당 포스트를 찾을 수 없어요.')
  if (error) throw error

  return post
}
