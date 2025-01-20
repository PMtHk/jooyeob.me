import { Button } from '@/shared/ui'

export function Thumbnail() {
  return (
    <div className='mt-2 flex items-center justify-center w-full h-48 bg-white dark:bg-alt-900 resize-none rounded-md'>
      <Button variant='ghost' disabled>
        썸네일 업로드
      </Button>
    </div>
  )
}
