import { ClientSeries } from '@/lib/types/series'

interface SeriesListProps {
  seriesList: ClientSeries[]
  selectedId: number
  onSelect: (id: number) => void
}

export function SeriesList({ seriesList, selectedId, onSelect }: Readonly<SeriesListProps>) {
  return (
    <ul className='m-0 mt-2 flex max-h-56 w-full flex-col overflow-auto rounded-md bg-white dark:bg-alt-800'>
      {seriesList.map(({ id, name }) => (
        <li
          key={id}
          className={`w-full cursor-pointer border-b border-alt-300 p-3 dark:border-alt-700 ${
            selectedId === id ? 'bg-primary-300' : ''
          }`}
          onClick={() => onSelect(id)}
        >
          <p className='line-clamp-1 text-ellipsis'>{name}</p>
        </li>
      ))}
    </ul>
  )
}
