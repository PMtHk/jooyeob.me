'use client'

import { WriteProvider } from '@/app/(private)/write/contexts/WriteContext'
import dynamic from 'next/dynamic'

const Write = dynamic(() => import('@/app/(private)/write/components/Write'), {
  ssr: false,
  loading: Loading,
})

export default function Page() {
  return (
    <WriteProvider>
      <Write />
    </WriteProvider>
  )
}

function Loading() {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      편집기를 불러오는 중입니다.
    </div>
  )
}
