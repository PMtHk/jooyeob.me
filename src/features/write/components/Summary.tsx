import type { ChangeEvent } from 'react'
import { useWrite } from '@/features/write/hooks/useWrite'

export function Summary() {
  const { title, summary, setSummary } = useWrite()

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value)
  }

  return (
    <div className='mt-2'>
      <span className='text-display-xs'>{title}</span>
      <textarea
        value={summary}
        onChange={handleInput}
        className='mt-2 w-full h-48 bg-white dark:bg-alt-800 resize-none rounded-md p-4 focus:outline-none'
        placeholder='포스트 요약'
        maxLength={140}
      />
      <p className='text-alt-700 text-right text-default-md'>{summary.length}/140</p>
    </div>
  )
}
