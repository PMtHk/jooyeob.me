import { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '내 블로그',
  description: '블로그 관리 페이지',
}

export default function PrivateLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <>{children}</>
}
