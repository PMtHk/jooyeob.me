// import { useWrite } from '@/features/write/hooks/useWrite'
import { Button } from '@/shared/ui'

export function Series() {
  // const { series, setSeries } = useWrite()

  return (
    <>
      <h3 className='mt-6 text-display-sm'>시리즈 설정</h3>
      <Button
        variant='ghost'
        className='w-full mt-2 bg-white dark:bg-alt-800 mr-1 px-4 py-2 rounded-md'
        disabled
      >
        시리즈에 추가하기
      </Button>
    </>
  )
}
