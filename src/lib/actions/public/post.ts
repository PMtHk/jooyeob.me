'use server'

import { createClient } from '@/lib/supabase/client'
import { categories } from '@/lib/constants/category'
import type { ClientPostDetail, ClientPosts } from '@/lib/types/post'

export async function getPosts({ category, tags }: { category?: string; tags?: string[] }) {
  const supabase = createClient()

  let query = supabase
    .from('posts')
    .select('title, summary, created_at, slug, thumbnail_url, category_id')

  const categoryId = categories.find((c) => c.slug === category)?.id
  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  if (tags?.length) {
    const { data: tagData, error: tagError } = await supabase
      .from('tags')
      .select('id')
      .in('name', tags)

    if (tagError) {
      throw tagError
    }

    const tagIds = tagData?.map((tag) => tag.id)
    if (!tagIds?.length) {
      return []
    }

    const { data: postsTagsData, error: postsTagsError } = await supabase
      .from('posts_tags')
      .select('post_id')
      .in('tag_id', tagIds)

    if (postsTagsError) {
      throw postsTagsError
    }

    const counts = postsTagsData?.reduce(
      (acc, { post_id }) => {
        acc[post_id] = (acc[post_id] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const matchingPostIds = Object.keys(counts)
      .filter((postId) => counts[postId] === tagIds.length)
      .map(Number)

    if (!matchingPostIds.length) {
      return []
    }

    query = query.in('id', matchingPostIds)
  }

  const { data: posts, error } = await query.order('created_at', { ascending: false })

  if (error) throw error

  return posts || []
}

export async function getPost(slug: string): Promise<ClientPostDetail> {
  const supabase = createClient()

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
