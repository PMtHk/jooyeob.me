import type { ChangeEvent } from 'react'
import { useWrite } from '@/features/write/hooks/useWrite'

export function URL() {
  const { url, setURL } = useWrite()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value)
  }

  return (
    <>
      <h3 className='mt-6 text-display-sm'>URL 설정</h3>
      <div className='w-full flex mt-2 bg-white dark:bg-alt-800 mr-1 px-4 py-2 rounded-md'>
        <span className='text-alt-600'>blog/</span>
        <input
          value={url}
          onChange={handleInput}
          className='w-full bg-white dark:bg-alt-800 focus:outline-none'
        />
      </div>
    </>
  )
}
