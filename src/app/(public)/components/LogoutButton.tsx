'use client'

import { Button } from '@/components/ui'
import { logout } from '@/lib/actions/private/auth'
import { useAuth } from '@/contexts/authContext'

export function LogoutButton() {
  const { isAuthenticated, setIsAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  const handleLogout = async () => {
    await logout()

    setIsAuthenticated(false)
  }

  return (
    <Button onClick={handleLogout} variant='ghost' className='text-black dark:text-white'>
      로그아웃
    </Button>
  )
}
