import { useState } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useWrite } from '@/lib/hooks/useWrite'

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
    <div className='mt-4 flex h-fit flex-1 flex-wrap items-center gap-2'>
      {tags.map((tag) => (
        <p
          key={tag}
          onClick={() => handleRemove(tag)}
          className='w-fit cursor-pointer whitespace-nowrap rounded-2xl bg-alt-700 px-3 py-0.5 text-center text-primary-300 text-white'
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
        className='flex h-full w-fit rounded-lg bg-transparent px-3 py-0.5 focus:outline-none'
      />
    </div>
  )
}
