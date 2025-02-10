'use server'

import type { ClientPosts } from '@/app/(public)/post/actions/getPosts'
import { createClient } from '@/lib/supabase/client'

export async function getTrendingPosts(): Promise<ClientPosts> {
  const supabase = createClient()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('title, summary, created_at, slug, thumbnail_url')
    .order('created_at', { ascending: false })
    .range(0, 2)

  if (error) throw error

  return posts
}
