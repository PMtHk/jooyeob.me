import { useEffect, useRef } from 'react'
import type { ChangeEvent } from 'react'
import { useWrite } from '@/lib/hooks/useWrite'

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

    document.title = e.target.value || '내 블로그'
  }

  const handleResize = () => {
    const textarea = textareaRef.current
    if (!textarea) {
      return
    }

    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  // TODO: 디바운스
  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <textarea
      ref={textareaRef}
      value={title}
      rows={1}
      onResize={handleResize}
      onChange={handleInput}
      placeholder='제목을 입력하세요'
      className='w-full resize-none scroll-auto bg-transparent p-2 text-display-lg focus:outline-none md:text-display-xl'
    />
  )
}
