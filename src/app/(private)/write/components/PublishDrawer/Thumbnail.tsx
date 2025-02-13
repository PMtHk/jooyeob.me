'use client'

import { useRef } from 'react'
import type { ChangeEvent } from 'react'
import Image from 'next/image'
import { Button } from '../../../../../components/ui'
import { useWrite } from '@/app/(private)/write/hooks/useWrite'
import { uploadImage } from '@/app/(private)/write/actions/uploadImage'

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
    <div className='relative mt-2 flex h-48 w-full items-center justify-center rounded-md bg-white dark:bg-alt-900'>
      {thumbnailURL ? (
        <div className='relative h-full w-full'>
          <Image
            src={thumbnailURL}
            alt='Thumbnail'
            className='h-full w-full rounded-md object-cover'
            layout='fill'
          />
          <Button
            variant='ghost'
            className='absolute right-2 top-2 text-danger'
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
