import { Tables, type TablesInsert } from '@/lib/supabase/types'

export type ClientPost = Pick<
  Tables<'posts'>,
  'title' | 'summary' | 'created_at' | 'slug' | 'thumbnail_url'
>

export type ClientPosts = Array<ClientPost>

export type ClientPostDetail = Tables<'posts'> & {
  tags: Array<Pick<Tables<'tags'>, 'id' | 'name'>>
  series: Pick<Tables<'series'>, 'id' | 'name'> | null
}

export type CreatePostDto = TablesInsert<'posts'> & {
  tags: string[]
}
