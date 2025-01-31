import { useState } from 'react'
import type { DragEvent, ClipboardEvent } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { divider } from '@uiw/react-md-editor/commands'
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Strikethrough,
  Quote,
  Link,
  Image,
  CodeBlock,
} from '@/features/editor/commands'
import { useWrite } from '@/features/write/hooks/useWrite'
import './editor.css'
import { uploadImage } from '@/features/image/actions'

const commandsList = [
  Heading1,
  Heading2,
  Heading3,
  divider,
  Bold,
  Italic,
  Strikethrough,
  divider,
  Quote,
  Link,
  Image,
  CodeBlock,
]

export default function Editor() {
  const { content, setContent } = useWrite()
  const [isDragging, setIsDragging] = useState(false)

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
    } catch (error) {
      setContent(before + after)
      console.error(error)
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

  return (
    <div className='relative flex-1'>
      {isDragging && (
        <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-xl font-bold border-2 border-dashed border-white pointer-events-none z-10'>
          이곳에 이미지를 놓으세요
        </div>
      )}
      <MDEditor
        commands={commandsList}
        extraCommands={[]}
        value={content}
        onChange={(value = '') => setContent(value)}
        onDrop={handleDrop}
        onPaste={handlePaste}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        preview='edit'
      />
    </div>
  )
}
