'use server'

import { createPost } from '@/features/write/apis'
import type { PostInsert } from '@/features/write/apis'

export async function createPostAction(post: PostInsert) {
  return createPost(post)
}
