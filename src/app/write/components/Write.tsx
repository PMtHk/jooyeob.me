'use client'

import { useState } from 'react'
import type { DragEvent, ClipboardEvent } from 'react'
import { uploadImage } from '@/lib/actions/private/image'
import { useWrite } from '@/lib/hooks/useWrite'
import Edit from '@/app/write/components/Edit'
import Preview from '@/app/write/components/Preview'
import PublishDrawer from '@/app/write/components/PublishDrawer'

export default function Write() {
  const { content, setContent } = useWrite()

  const [isDragging, setIsDragging] = useState(false)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleImageUpload = async (file: File, e: DragEvent | ClipboardEvent) => {
    if (!file.type.includes('image')) {
      return
    }

    const textarea = e.target as HTMLTextAreaElement
    const position = textarea.selectionStart
    const before = content.slice(0, position)
    const after = content.slice(position)

    setContent(`${before}![업로드중...](${file.name})${after}`)

    try {
      const { url } = await uploadImage(file)
      setContent(`${before}![이미지 설명](${url})${after}`)
    } catch {
      setContent(before + after)
    }
  }

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (!file) {
      return
    }

    return handleImageUpload(file, e)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.dataTransfer.dropEffect = 'copy'
    setIsDragging(true)
  }

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handlePaste = async (e: ClipboardEvent) => {
    const file = e.clipboardData.files[0]
    if (!file) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    return handleImageUpload(file, e)
  }

  const openDrawer = () => setIsDrawerOpen(true)

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <>
      <div
        className='flex h-screen w-screen'
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onPaste={handlePaste}
      >
        <Edit openPublishPanel={openDrawer} />
        <Preview />
      </div>

      <PublishDrawer isOpen={isDrawerOpen} close={closeDrawer} />

      {isDragging && (
        <div className='pointer-events-none absolute inset-0 z-10 flex items-center justify-center border-2 border-dashed border-white bg-black bg-opacity-60 text-xl font-bold text-white'>
          이곳에 이미지를 놓으세요
        </div>
      )}
    </>
  )
}
