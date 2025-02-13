'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { cookieName } from '@/lib/auth/auth.constants'

interface IAuthContext {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
})

export function AuthProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const cookies = document.cookie ? document.cookie.split('; ') : []
    if (cookies.length === 0) {
      setIsAuthenticated(false)
      return
    }

    const accessToken = cookies
      .find((cookie) => cookie.startsWith(`${cookieName}=`))
      ?.replace(`${cookieName}=`, '')

    if (!accessToken) {
      setIsAuthenticated(false)
      return
    }

    setIsAuthenticated(!!accessToken)
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth 는 AuthProvider 안에서만 사용할 수 있습니다.')
  }

  return context
}
