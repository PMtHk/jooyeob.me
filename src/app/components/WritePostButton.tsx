'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'
import { useAuth } from '@/contexts/auth/authContext'

export function WritePostButton() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <Link href='/write'>
      <Button>새 글 작성</Button>
    </Link>
  )
}
