import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { pretendard } from '@/fonts'

export const metadata: Metadata = {
  title: 'Yeob_log',
  description: '개발자 나주엽입니다.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable} font-pretendard`}>{children}</body>
    </html>
  )
}
