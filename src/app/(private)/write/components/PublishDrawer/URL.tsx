import type { ChangeEvent } from 'react'
import { useWrite } from '@/app/(private)/write/hooks/useWrite'

export function URL() {
  const { url, setURL } = useWrite()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value)
  }

  return (
    <>
      <h3 className='mt-6 text-display-sm'>URL 설정</h3>
      <div className='mr-1 mt-2 flex w-full rounded-md bg-white px-4 py-2 dark:bg-alt-800'>
        <span className='text-alt-600'>blog/</span>
        <input
          value={url}
          onChange={handleInput}
          className='w-full bg-white focus:outline-none dark:bg-alt-800'
        />
      </div>
    </>
  )
}
