import Link from 'next/link'
import { getTrendingPosts } from '@/app/(public)/post/actions/getTrendingPosts'
import type { ClientPost } from '@/app/(public)/post/actions/getPosts'
import { getKST } from '@/lib/util/getKST'

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
      <Link href={`/post/${slug}`} className='group flex py-3'>
        <div className='flex flex-grow flex-col pr-5'>
          <span className='mb-1.5 text-default-lg group-hover:text-primary'>{title}</span>
          <span className='text-body-sm text-alt-700 dark:text-alt-500'>{getKST(created_at!)}</span>
        </div>
      </Link>
    </li>
  )
}
