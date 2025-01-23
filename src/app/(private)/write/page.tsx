'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { WriteProvider } from '@/features/write/contexts/WriteContext'
import { EditPanelFallback } from '@/features/write/EditPanel'
import PublishPanel from '@/features/write/PublishPanel'

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
      <EditPanel openPublishPanel={openPublishPanel} />
      <PublishPanel isOpen={isPublishPanelOpen} close={closePublishPanel} />
    </WriteProvider>
  )
}
