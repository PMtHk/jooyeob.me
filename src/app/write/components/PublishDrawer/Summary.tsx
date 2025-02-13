import type { ChangeEvent } from 'react'
import { useWrite } from '@/lib/hooks/useWrite'

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
        className='mt-2 h-48 w-full resize-none rounded-md bg-white p-4 focus:outline-none dark:bg-alt-800'
        placeholder='포스트 요약'
        maxLength={140}
      />
      <p className='text-right text-default-md text-alt-700'>{summary.length}/140</p>
    </div>
  )
}
