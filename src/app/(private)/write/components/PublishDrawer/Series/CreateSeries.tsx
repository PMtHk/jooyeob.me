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
    <div className='w-full flex flex-col mt-2'>
      <div className='w-full flex bg-white dark:bg-alt-800 px-4 py-2 rounded-md'>
        <input
          value={newSeriesName}
          onChange={handleInput}
          placeholder='새로운 시리즈 이름을 입력하세요'
          className='w-full bg-white dark:bg-alt-800 focus:outline-none'
        />
      </div>

      <div
        className={`w-full mt-2 bg-white dark:bg-alt-800 mr-1 px-4 py-2 rounded-md transition-all duration-300 ${
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
