import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Header } from '@/app/components/Header'

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
  children: ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
