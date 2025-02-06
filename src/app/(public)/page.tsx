import Link from 'next/link'
import { getPosts } from '@/shared/libs/posts/actions'
import { Post } from '@/app/(public)/components/Post'
import { HeroBanner } from '@/app/(public)/components/HeroBanner'
import { Trendings } from '@/app/(public)/components/Trendings'
import { RecentComments } from '@/app/(public)/components/RecentComments'
import { Tags } from '@/app/(public)/components/Tags'
import { categories } from '@/shared/libs/categories/constants'
import { cn } from '@/shared/utils/cn'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>
}) {
  const currentCategory = (await searchParams).category ?? ''
  const posts = await getPosts(currentCategory)

  return (
    <div className='min-h-screen w-full pb-12'>
      <HeroBanner />

      <div className='mx-auto flex justify-evenly max-w-[1200px] break-keep'>
        <div className='flex w-full flex-col px-6 lg:max-w-[700px]'>
          <nav className='sticky flex w-full border-b pt-3 text-default-xl top-[60px] bg-background'>
            <Link
              href='/'
              className={cn('px-4 pb-2 text-gray-500', {
                'border-b-2 border-black font-semibold dark:border-alt-700': currentCategory === '',
              })}
            >
              전체
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/?category=${category.slug}`}
                className={cn('px-4 pb-2 text-gray-500', {
                  'border-b-2 border-black font-semibold dark:border-alt-700':
                    category.slug === currentCategory,
                })}
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <ul className='flex list-none flex-col pt-[10px]'>
            {posts.map((post) => (
              <Post key={post.slug} {...post} />
            ))}
          </ul>
        </div>

        <div className='hidden flex-col gap-4 border-l px-6 w-[300px] lg:flex'>
          <Trendings />
          <RecentComments />
          <Tags />
        </div>
      </div>
    </div>
  )
}
