import Link from 'next/link'
import type { ClientPost } from '@/shared/libs/posts/actions'
import { getKST } from '@/shared/utils/getKST'

export function Post({ title, summary, created_at, slug }: ClientPost) {
  return (
    <li>
      <Link href={`/post/${slug}`} className='flex py-6 group'>
        <div className='flex flex-grow flex-col pr-5'>
          <span className='text-display-xs mb-1.5 group-hover:text-primary md:text-display-sm'>
            {title}
          </span>
          <span className='mb-4 text-body-sm text-alt-700 dark:text-alt-500 md:text-body-md'>
            {summary}
          </span>
          <span className='text-body-sm text-alt-700 dark:text-alt-600'>{getKST(created_at!)}</span>
        </div>
        <div className='w-full rounded-lg border max-w-[130px]'></div>
      </Link>
    </li>
  )
}
