import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { Button } from '@/components/ui'

interface CreateSeriesProps {
  onCreate: (name: string) => Promise<void>
  onCancel: () => void
}

export function CreateSeries({ onCreate, onCancel }: CreateSeriesProps) {
  const [newSeriesName, setNewSeriesName] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSeriesName(e.target.value)
  }

  const handleAddSeries = async () => {
    await onCreate(newSeriesName.trim().replaceAll(' ', '-'))

    setNewSeriesName('')
  }

  return (
    <div className='mt-2 flex w-full flex-col'>
      <div className='flex w-full rounded-md bg-white px-4 py-2 dark:bg-alt-800'>
        <input
          value={newSeriesName}
          onChange={handleInput}
          placeholder='새로운 시리즈 이름을 입력하세요'
          className='w-full bg-white focus:outline-none dark:bg-alt-800'
        />
      </div>

      <div
        className={`mr-1 mt-2 w-full rounded-md bg-white px-4 py-2 transition-all duration-300 dark:bg-alt-800 ${
          newSeriesName.length ? 'flex' : 'hidden'
        }`}
      >
        <span className='text-alt-600'>series/</span>
        <span>{newSeriesName.trim().replaceAll(' ', '-')}</span>
      </div>

      <div className={`mt-2 justify-end gap-2 ${newSeriesName.length ? 'flex' : 'hidden'}`}>
        <Button onClick={onCancel} variant='ghost'>
          취소
        </Button>
        <Button onClick={handleAddSeries}>시리즈 추가</Button>
      </div>
    </div>
  )
}
