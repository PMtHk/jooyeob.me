'use client'

import { Button } from '@/components/ui'
import { useAuth } from '@/contexts/authContext'
import { deletePost } from '@/lib/actions/private/post'

export function DeleteButton({
  id,
}: Readonly<{
  id: number
}>) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Button onClick={() => deletePost(id)} variant='ghost' className='text-black dark:text-white'>
      삭제
    </Button>
  )
}
