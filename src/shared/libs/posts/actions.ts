'use server'

import { createClient } from '@/shared/utils/supabase/client'
import type { Tables } from '@/shared/utils/supabase/types'
import { categories } from '@/shared/libs/categories/constants'

export type ClientPost = Pick<
  Tables<'posts'>,
  'title' | 'summary' | 'created_at' | 'slug' | 'thumbnail_url'
>
export type ClientPosts = Array<ClientPost>

export async function getPosts(category?: string) {
  const supabase = createClient()

  const categoryId = categories.find((c) => c.slug === category)?.id

  let query = supabase
    .from('posts')
    .select('title, summary, created_at, slug, thumbnail_url, category_id')

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data: posts, error } = await query.order('created_at', { ascending: false })

  if (error) throw error

  return posts || []
}

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

export type ClientTag = Tables<'tags_with_post_count'>
export type ClientTags = Array<ClientTag>

export async function getTags(): Promise<ClientTags> {
  const supabase = createClient()

  const { data: tags, error } = await supabase
    .from('tags_with_post_count')
    .select('*')
    .order('post_count', { ascending: false })

  if (error) throw error

  return tags
}
