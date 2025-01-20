import type { Metadata } from 'next'
import React from 'react'
import { pretendard } from '@/fonts'
import '../globals.css'

export const metadata: Metadata = {
  title: '내 블로그',
  description: '블로그 관리 페이지',
}

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} font-pretendard`}>{children}</body>
    </html>
  )
}
