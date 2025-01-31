'use server'

import { createClient } from '@/shared/utils/supabase/server'
import type { TablesInsert } from '@/shared/utils/supabase/types'

export type CreatePostDto = TablesInsert<'posts'> & {
  tags: string[]
}

export async function createPost(createPostDto: CreatePostDto) {
  const supabase = await createClient()

  const { tags, ...postInsert } = createPostDto

  const { data: postData, error: postError } = await supabase
    .from('posts')
    .insert([postInsert])
    .select()
    .single()

  if (postError) throw postError

  const { data: tagData, error: tagError } = await supabase
    .from('tags')
    .select('id, name')
    .in('name', tags)

  if (tagError) throw tagError

  const tagIds = tagData.map((t) => t.id)

  const existingTags = new Set(tagData.map((t) => t.name))
  const newTags = tags.filter((t) => !existingTags.has(t))

  if (newTags.length) {
    const { data: tagInsertData, error: tagInsertError } = await supabase
      .from('tags')
      .insert(newTags.map((name) => ({ name })))
      .select('id')

    if (tagInsertError) throw tagInsertError

    tagInsertData?.map((t) => {
      tagIds.push(t.id)
    })
  }

  const postId = postData.id

  const postTagInserts = tagIds.map((id) => ({
    post_id: postId,
    tag_id: id,
  }))

  const { error: postsTagsError } = await supabase.from('posts_tags').insert(postTagInserts)

  if (postsTagsError) throw postsTagsError

  return {
    postId,
  }
}

export type CreateSeriesDto = Pick<TablesInsert<'series'>, 'name'>

export async function createSeries(createSeriesDto: CreateSeriesDto) {
  const supabase = await createClient()

  const { data, error } = await supabase.from('series').insert([createSeriesDto]).select('id, name').single()

  if (error) throw error

  return data
}

export async function getSeries() {
  const supabase = await createClient()

  const { data, error } = await supabase.from('series').select('id, name')

  if (error) throw error

  return data
}
