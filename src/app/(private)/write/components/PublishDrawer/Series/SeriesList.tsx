import { ClientSeries } from '@/app/(private)/write/actions/createSeries'

interface SeriesListProps {
  seriesList: ClientSeries[]
  selectedId: number
  onSelect: (id: number) => void
}

export function SeriesList({ seriesList, selectedId, onSelect }: Readonly<SeriesListProps>) {
  return (
    <ul className='w-full mt-2 flex flex-col max-h-56 overflow-auto m-0 bg-white dark:bg-alt-800 rounded-md'>
      {seriesList.map(({ id, name }) => (
        <li
          key={id}
          className={`w-full border-b border-alt-300 dark:border-alt-700 p-3 cursor-pointer ${
            selectedId === id ? 'bg-primary-300' : ''
          }`}
          onClick={() => onSelect(id)}
        >
          <p className='text-ellipsis line-clamp-1'>{name}</p>
        </li>
      ))}
    </ul>
  )
}
