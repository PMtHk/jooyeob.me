import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

import { pretendard } from '@/fonts'
import Image from 'next/image'

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
    <html lang='ko'>
      <body className={`${pretendard.variable} font-pretendard`}>
        <nav className='sticky top-0 w-full h-[60px] bg-background border-b z-50 px-4'>
          <div className='h-full sm:px-6 md:w-[92%] lg:w-[92%] md:mx-auto lg:mx-auto'>
            <div className='flex items-center justify-between h-full'>
              <a className='flex items-center'>
                <Image
                  src='/yeob.svg'
                  alt='yeob_blog-logo'
                  width={60}
                  height={30}
                  className='dark:invert'
                />
                <span className='ml-1.5 text-default-lg'>블로그</span>
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer>
          <div className='mx-auto flex w-fit break-keep p-6 h-[60px] gap-3 text-alt-600 text-default-md'>
            <a>
              <span>Github</span>
            </a>
            <a>
              <span>Velog</span>
            </a>
            <a>
              <span>Résumé</span>
            </a>
            <a>
              <span>Contact</span>
            </a>
            <span className='ml-4'>최근 업데이트 : 2024년 1월 12일</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
