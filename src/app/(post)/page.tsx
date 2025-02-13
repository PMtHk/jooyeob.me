import Link from 'next/link'
import { getPosts } from '@/lib/actions/public/post'
import { getTags } from '@/lib/actions/public/tag'
import { HeroBanner } from '@/app/components/HeroBanner'
import { cn } from '@/lib/util/cn'
import { categories } from '@/lib/constants/category'
import { Post } from '@/app/components/Post'
import { Trendings } from '@/app/components/Trendings'
import { Tags } from '@/app/components/Tags'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category: string; tag: string | string[] }>
}) {
  const params = await searchParams
  const selectedCategory = params.category ?? ''
  const selectedTags = params.tag ? (Array.isArray(params.tag) ? params.tag : [params.tag]) : []

  const posts = await getPosts({
    category: selectedCategory,
    tags: selectedTags,
  })
  const tags = await getTags()

  return (
    <>
      <HeroBanner />

      <div className='mx-auto flex max-w-[1200px] justify-evenly break-keep'>
        <div className='flex w-full flex-col px-6 lg:max-w-[700px]'>
          <nav className='sticky top-[60px] flex w-full border-b bg-background pt-3 text-default-xl'>
            <Link
              href='/'
              className={cn('px-4 pb-2 text-gray-500', {
                'border-b-2 border-black font-semibold dark:border-alt-700':
                  selectedCategory === '',
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
                    category.slug === selectedCategory,
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

        <div className='hidden w-[300px] flex-col gap-4 border-l px-6 lg:flex'>
          <Trendings />
          {/*<RecentComments />*/}
          <Tags tags={tags} selectedTags={selectedTags} />
        </div>
      </div>
    </>
  )
}
