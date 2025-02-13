'use client'

import { useEffect, useState } from 'react'
import { useWrite } from '@/lib/hooks/useWrite'
import { Button } from '@/components/ui'
import { CreateSeries } from '@/app/write/components/PublishDrawer/Series/CreateSeries'
import { SeriesList } from '@/app/write/components/PublishDrawer/Series/SeriesList'
import { createSeries } from '@/lib/actions/private/series'
import { getSeries } from '@/lib/actions/public/series'
import type { ClientSeries } from '@/lib/types/series'

export default function Series() {
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
          className='mt-2 w-full rounded-md bg-white px-4 py-2 hover:bg-alt-200 dark:bg-alt-800 dark:hover:bg-alt-700'
        >
          시리즈에 추가하기
        </Button>
      )}

      {selectedSeries !== -1 && !isOpen && (
        <div className='mt-2 flex w-full rounded-md bg-white px-4 py-2 dark:bg-alt-800'>
          <span className='text-alt-600'>series/</span>
          <p className='line-clamp-1 flex-1 text-ellipsis'>
            {seriesList.find(({ id }) => id === selectedSeries)?.name}
          </p>
          <Button
            onClick={handleRemoveSeries}
            variant='ghost'
            className='ml-2 shrink-0 py-0 text-danger'
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
