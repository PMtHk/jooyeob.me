'use client'

import { useRef } from 'react'
import type { ChangeEvent } from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { useWrite } from '@/features/write/hooks/useWrite'
import { uploadImage } from '@/features/image/actions'

export function Thumbnail() {
  const { thumbnailURL, setThumbnailURL } = useWrite()
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleUpload = async (file: File) => {
    if (!file) {
      return
    }

    if (!file.type.includes('image')) {
      return
    }

    const { url } = await uploadImage(file)
    setThumbnailURL(url)
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) {
      return
    }

    return handleUpload(file)
  }

  const handleRemove = () => {
    setThumbnailURL('')
    if (!fileInputRef.current) {
      return
    }

    fileInputRef.current.value = ''
  }

  return (
    <div className='mt-2 flex items-center justify-center w-full h-48 bg-white dark:bg-alt-900 rounded-md relative'>
      {thumbnailURL ? (
        <div className='relative w-full h-full'>
          <Image
            src={thumbnailURL}
            alt='Thumbnail'
            className='w-full h-full object-cover rounded-md'
            layout='fill'
          />
          <Button
            variant='ghost'
            className='absolute top-2 right-2 text-danger'
            onClick={handleRemove}
          >
            제거
          </Button>
        </div>
      ) : (
        <>
          <Button variant='ghost' onClick={() => fileInputRef.current?.click()}>
            썸네일 업로드
          </Button>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            className='hidden'
            onChange={handleFileChange}
          />
        </>
      )}
    </div>
  )
}
