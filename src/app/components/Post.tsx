import Link from 'next/link'
import Image from 'next/image'
import { getKST } from '@/lib/util/getKST'
import type { ClientPost } from '@/lib/types/post'


export function Post({ title, summary, created_at, slug, thumbnail_url }: ClientPost) {
  return (
    <li>
      <Link href={`/post/${slug}`} className='group flex py-6'>
        <div className='flex flex-grow flex-col pr-4'>
          <span className='mb-1.5 text-display-xs group-hover:text-primary md:text-display-sm'>
            {title}
          </span>
          <span className='mb-4 text-body-sm text-alt-700 md:text-body-md dark:text-alt-500'>
            {summary}
          </span>
          <span className='text-body-sm text-alt-700 dark:text-alt-600'>{getKST(created_at!)}</span>
        </div>
        {thumbnail_url && (
          <div
            className='relative flex min-w-[130px] overflow-hidden rounded-lg'
            style={{ width: '130px', height: '90px' }}
          >
            <Image
              src={thumbnail_url!}
              alt={title}
              fill
              sizes='20vw'
              style={{ objectFit: 'fill' }}
              className='rounded-lg transition-transform group-hover:scale-110'
            />
          </div>
        )}
      </Link>
    </li>
  )
}
