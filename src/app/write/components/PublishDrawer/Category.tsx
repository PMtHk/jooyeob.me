import { useWrite } from '@/lib/hooks/useWrite'
import { Button } from '../../../../components/ui'

export function Category() {
  const { category, setCategory } = useWrite()

  const handleClick = (category: 'dev' | 'study' | 'review') => {
    setCategory(category)
  }

  return (
    <>
      <h3 className='text-display-sm'>카테고리 설정</h3>
      <div className='mt-2 flex w-full gap-2'>
        <Button
          variant={category === 'dev' ? 'default' : 'outline'}
          onClick={() => handleClick('dev')}
          className='flex-1'
        >
          개발
        </Button>

        <Button
          variant={category === 'study' ? 'default' : 'outline'}
          onClick={() => handleClick('study')}
          className='flex-1'
        >
          학습
        </Button>

        <Button
          variant={category === 'review' ? 'default' : 'outline'}
          onClick={() => handleClick('review')}
          className='flex-1'
        >
          회고
        </Button>
      </div>
    </>
  )
}
