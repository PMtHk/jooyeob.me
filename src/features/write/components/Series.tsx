import { useWrite } from '@/features/write/hooks/useWrite'
import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { Button } from '@/shared/ui'
import { createSeries, getSeries } from '@/features/write/actions'

export function Series() {
  const { series, setSeries } = useWrite()

  const [seriesList, setSeriesList] = useState<
    {
      id: number
      name: string
    }[]
  >([])

  const [isOpen, setIsOpen] = useState(false)

  const [newSeries, setNewSeries] = useState('')

  const openSeriesModal = () => setIsOpen(true)

  const closeSeriesModal = () => setIsOpen(false)

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSeries(e.target.value)
  }

  const resetNewSeries = () => {
    setNewSeries('')
  }

  const handleAddSeries = async () => {
    const { id } = await createSeries({ name: newSeries.trim().replaceAll(' ', '-') })
    const updatedSeries = await getSeries()
    setSeriesList(updatedSeries)
    setSeries(id)

    resetNewSeries()
  }

  useEffect(() => {
    const fetchSeries = async () => {
      setSeriesList(await getSeries())
    }

    fetchSeries()
  }, [])

  return (
    <>
      <h3 className='mt-6 text-display-sm'>시리즈 설정</h3>
      {!isOpen && (
        <Button
          onClick={openSeriesModal}
          variant='ghost'
          className='w-full mt-2 bg-white dark:bg-alt-800 px-4 py-2 rounded-md hover:bg-alt-200 dark:hover:bg-alt-700'
        >
          시리즈에 추가하기
        </Button>
      )}

      {isOpen && (
        <div className='w-full mt-2 rounded-md flex flex-col p-2'>
          <div className='w-full flex bg-white dark:bg-alt-800 px-4 py-2 rounded-md'>
            <input
              value={newSeries}
              onChange={handleInput}
              placeholder='새로운 시리즈 이름을 입력하세요'
              className='w-full bg-white dark:bg-alt-800 focus:outline-none'
            />
          </div>

          <div
            className={`w-full mt-2 bg-white dark:bg-alt-800 mr-1 px-4 py-2 rounded-md transition-all duration-300 ${newSeries.length ? 'flex' : 'hidden'}`}
          >
            <span className='text-alt-600'>series/</span>
            <span>{newSeries.trim().replaceAll(' ', '-')}</span>
          </div>

          <div className={`mt-2 justify-end gap-2 ${newSeries.length ? 'flex' : 'hidden'}`}>
            <Button onClick={resetNewSeries} variant='ghost'>
              취소
            </Button>
            <Button onClick={handleAddSeries}>시리즈 추가</Button>
          </div>

          <ul className='w-full mt-2 flex flex-col max-h-56 overflow-auto m-0 bg-white dark:bg-alt-800 rounded-md'>
            {seriesList.map(({ id, name }) => (
              <li
                key={id}
                className={`w-full border-b border-alt-300 dark:border-alt-700 p-3 ${series === id ? 'bg-primary-300' : ''}`}
                onClick={() => setSeries(id)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`justify-end gap-2 ${isOpen ? 'flex' : 'hidden'}`}>
        <Button onClick={closeSeriesModal} variant='ghost'>
          닫기
        </Button>
      </div>
    </>
  )
}
