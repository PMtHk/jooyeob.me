import type { Metadata } from 'next'
import React from 'react'
import { Header, Footer } from '@/components'

export const metadata: Metadata = {
  title: 'yeob 블로그',
  description: '개발자 나주엽입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
