'use client'

import Link from 'next/link'
import { Button } from '@/components/ui'
import { useAuth } from '@/contexts/authContext'

export function WritePostButton() {
  const { isAuthenticated } = useAuth()

  console.log(isAuthenticated)

  if (!isAuthenticated) {
    return null
  }

  return (
    <Link href='/write'>
      <Button className="">새 글 작성</Button>
    </Link>
  )
}
