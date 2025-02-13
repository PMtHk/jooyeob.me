'use server'

import { redirect } from 'next/navigation'
import { authenticate } from '@/lib/actions/private/auth'
import { createClient } from '@/lib/supabase/server'

export async function deletePost(postId: number) {
  if (!(await authenticate())) {
    redirect('/login')
  }

  const supabase = await createClient()

  const { error } = await supabase.from('posts').delete().eq('id', postId)

  if (error) {
    throw error
  }

  redirect('/')
}
