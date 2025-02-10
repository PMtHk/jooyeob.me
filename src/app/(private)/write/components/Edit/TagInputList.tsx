import { useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useWrite } from '@/app/(private)/write/hooks/useWrite'

export function TagInputList() {
  const { tags, addTag, removeTag } = useWrite()
  const [inputValue, setInputValue] = useState('')
  const [isComposing, setIsComposing] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || isComposing) {
      return
    }

    e.preventDefault()

    const newTag = inputValue.trim()
    if (newTag.length < 2 || tags.includes(newTag)) {
      return
    }

    addTag(newTag)
    setInputValue('')
  }

  const handleRemove = (tag: string) => removeTag(tag)

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace' || isComposing) {
      return
    }

    if (inputValue !== '' || tags.length === 0) {
      return
    }

    removeTag(tags[tags.length - 1])
  }

  return (
    <div className='mt-4 flex flex-1 gap-2 items-center h-fit flex-wrap'>
      {tags.map((tag) => (
        <p
          key={tag}
          onClick={() => handleRemove(tag)}
          className='text-center whitespace-nowrap w-fit cursor-pointer px-3 py-0.5 bg-alt-700 text-white rounded-2xl text-primary-300'
        >
          {tag}
        </p>
      ))}

      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleBackspace}
        onKeyUp={handleAdd}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        placeholder='태그를 입력하세요.'
        className='flex w-fit h-full px-3 py-0.5 rounded-lg bg-transparent focus:outline-none'
      />
    </div>
  )
}
