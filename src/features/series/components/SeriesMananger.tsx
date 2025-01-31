'use client'

import { useEffect, useState } from 'react'
import { useWrite } from '@/features/write/hooks/useWrite'
import { Button } from '@/shared/ui'
import type { ClientSeries } from '@/features/series/types'
import { createSeries, getSeries } from '@/features/series/actions'
import { CreateSeries } from '@/features/series/components/CreateSeries'
import { SeriesList } from '@/features/series/components/SeriesList'

export function SeriesManager() {
  const { series: selectedSeries, setSeries } = useWrite()
  const [seriesList, setSeriesList] = useState<ClientSeries[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const openSeriesModal = () => setIsOpen(true)

  const closeSeriesModal = () => setIsOpen(false)

  const handleAddSeries = async (name: string) => {
    const { id } = await createSeries({ name })

    const updatedSeries = await getSeries()

    setSeriesList(updatedSeries)
    setSeries(id)
  }

  const handleRemoveSeries = async () => {
    setSeries(-1)
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

      {!isOpen && selectedSeries === -1 && (
        <Button
          onClick={openSeriesModal}
          variant='ghost'
          className='w-full mt-2 bg-white dark:bg-alt-800 px-4 py-2 rounded-md hover:bg-alt-200 dark:hover:bg-alt-700'
        >
          시리즈에 추가하기
        </Button>
      )}

      {selectedSeries !== -1 && !isOpen && (
        <div className='w-full mt-2 flex bg-white dark:bg-alt-800 px-4 py-2 rounded-md'>
          <span className='text-alt-600'>series/</span>
          <p className='flex-1 text-ellipsis line-clamp-1'>
            {seriesList.find(({ id }) => id === selectedSeries)?.name}
          </p>
          <Button
            onClick={handleRemoveSeries}
            variant='ghost'
            className='ml-2 py-0 shrink-0 text-danger'
          >
            제거
          </Button>
        </div>
      )}

      {isOpen && (
        <>
          <CreateSeries onCreate={handleAddSeries} onCancel={closeSeriesModal} />
          <SeriesList seriesList={seriesList} selectedId={selectedSeries} onSelect={setSeries} />

          <div className='flex justify-end gap-2'>
            <Button onClick={closeSeriesModal} variant='ghost'>
              닫기
            </Button>
          </div>
        </>
      )}
    </>
  )
}
