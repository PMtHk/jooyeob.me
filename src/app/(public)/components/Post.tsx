import Link from 'next/link'
import Image from 'next/image'
import type { ClientPost } from '@/shared/libs/posts/actions'
import { getKST } from '@/lib/util/getKST'

export function Post({ title, summary, created_at, slug, thumbnail_url }: ClientPost) {
  return (
    <li>
      <Link href={`/post/${slug}`} className='flex py-6 group'>
        <div className='flex flex-grow flex-col pr-4'>
          <span className='text-display-xs mb-1.5 group-hover:text-primary md:text-display-sm'>
            {title}
          </span>
          <span className='mb-4 text-body-sm text-alt-700 dark:text-alt-500 md:text-body-md'>
            {summary}
          </span>
          <span className='text-body-sm text-alt-700 dark:text-alt-600'>{getKST(created_at!)}</span>
        </div>
        {thumbnail_url && (
          <div
            className='min-w-[130px] relative flex overflow-hidden rounded-lg'
            style={{ width: '130px', height: '90px' }}
          >
            <Image
              src={thumbnail_url!}
              alt={title}
              fill
              sizes='20vw'
              style={{ objectFit: 'fill' }}
              className='rounded-lg group-hover:scale-110 transition-transform'
            />
          </div>
        )}
      </Link>
    </li>
  )
}
