import type { ReactNode } from 'react'
import { pretendard } from '@/lib/util/fonts'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.variable} font-pretendard`}>{children}</body>
    </html>
  )
}
