import { useRef } from 'react'
import type { ChangeEvent } from 'react'
import { useWrite } from '@/features/write/hooks/useWrite'

export function Title() {
  const { title, setTitle } = useWrite()

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (!textarea) {
      return
    }

    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`

    setTitle(e.target.value)
  }

  return (
    <textarea
      ref={textareaRef}
      value={title}
      rows={1}
      onChange={handleInput}
      placeholder='제목을 입력하세요'
      className='max-h-[100px] md:max-h-[142px] scroll-auto bg-transparent text-display-lg md:text-display-xl w-full resize-none p-2 focus:outline-none'
    />
  )
}
