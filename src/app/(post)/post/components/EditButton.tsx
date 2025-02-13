'use client'

import { Button } from '@/components/ui'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth/authContext'

export function EditButton({
  id,
}: Readonly<{
  id: number
}>) {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Link href={`/write?id=${id}`}>
      <Button variant='ghost' className='text-black dark:text-white'>
        수정
      </Button>
    </Link>
  )
}
