'use client'

import { useState } from 'react'
import { WriteProvider } from '@/features/write/contexts/WriteContext'
import { EditPanel, PublishPanel } from '@/features/write'

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
