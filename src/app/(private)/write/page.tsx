'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { WriteProvider } from '@/features/write/contexts/WriteContext'
import { EditPanelFallback } from '@/features/write/EditPanel'
import PublishPanel from '@/features/write/PublishPanel'
import { Preview } from '@/app/(private)/write/components/Preview'

const EditPanel = dynamic(() => import('@/features/write/EditPanel'), {
  ssr: false,
  loading: EditPanelFallback,
})

export default function Page() {
  const [isPublishPanelOpen, setIsPublishPanelOpen] = useState(false)

  const openPublishPanel = () => setIsPublishPanelOpen(true)

  const closePublishPanel = () => setIsPublishPanelOpen(false)

  return (
    <WriteProvider>
      <div className="relative h-screen w-screen">
        <div className='flex h-screen w-screen'>
          <EditPanel openPublishPanel={openPublishPanel} />
          <Preview />
        </div>
        <PublishPanel isOpen={isPublishPanelOpen} close={closePublishPanel} />
      </div>

    </WriteProvider>
  )
}
