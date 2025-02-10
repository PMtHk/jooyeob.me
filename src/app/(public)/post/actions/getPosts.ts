'use server'

import { createClient } from '@/lib/supabase/client'
import { Tables } from '@/lib/supabase/types'
import { categories } from '@/lib/constants/category'

export type ClientPost = Pick<
  Tables<'posts'>,
  'title' | 'summary' | 'created_at' | 'slug' | 'thumbnail_url'
>
export type ClientPosts = Array<ClientPost>

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
