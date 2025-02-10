'use server'

import { v4 as uuid } from 'uuid'
import { getServerEnv } from '@/lib/env'
import { createClient } from '@/lib/supabase/server'

export async function uploadImage(file: File): Promise<{
  url: string
}> {
  const supabase = await createClient()
  const { SUPABASE_STORAGE_BUCKET } = await getServerEnv()

  if (!file) {
    throw new Error('파일을 선택해주세요.')
  }

  const { type } = file
  if (!type.includes('image')) {
    throw new Error('이미지 파일만 업로드할 수 있습니다.')
  }

  const key = uuid()
  const fileExt = type.split('/')[1]
  const filePath = `${key}/image.${fileExt}`

  const { error } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload(filePath, file, {
    contentType: type,
  })

  if (error) {
    throw error
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(SUPABASE_STORAGE_BUCKET).getPublicUrl(filePath)

  return {
    url: publicUrl,
  }
}
