import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { Header, Footer } from '@/components'
import { pretendard } from '@/fonts'

export const metadata: Metadata = {
  title: 'yeob 블로그',
  description: '개발자 나주엽입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} font-pretendard`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
