import Link from 'next/link'
import type { ClientPost } from '@/shared/libs/posts/actions'
import { getKST } from '@/shared/utils/getKST'
import { getTrendingPosts } from '@/shared/libs/posts/actions'

export async function Trendings() {
  const trendingPosts = await getTrendingPosts()

  return (
    <section>
      <span className='text-default-lg text-alt-600'>인기 게시물</span>
      <ul className='list-none'>
        {trendingPosts.map((post) => (
          <TrendingPost key={post.slug} {...post} />
        ))}
      </ul>
    </section>
  )
}

function TrendingPost({ title, created_at, slug }: ClientPost) {
  return (
    <li>
      <Link href={`/post/${slug}`} className='flex py-3 group'>
        <div className='flex flex-grow flex-col pr-5'>
          <span className='text-default-lg mb-1.5 group-hover:text-primary'>{title}</span>
          <span className='text-body-sm text-alt-700 dark:text-alt-500'>{getKST(created_at!)}</span>
        </div>
      </Link>
    </li>
  )
}
