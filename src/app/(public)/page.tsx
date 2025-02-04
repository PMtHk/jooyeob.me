import { getPosts } from '@/shared/libs/posts/actions'
import { Post } from '@/app/(public)/components/Post'
import { HeroBanner } from '@/app/(public)/components/HeroBanner'
import { Trendings } from '@/app/(public)/components/Trendings'
import { RecentComments } from '@/app/(public)/components/RecentComments'
import { Tags } from '@/app/(public)/components/Tags'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className='min-h-screen w-full pb-12'>
      <HeroBanner />

      <div className='mx-auto flex justify-evenly max-w-[1200px] break-keep'>
        <div className='flex w-full flex-col px-6 lg:max-w-[700px]'>
          <div className='sticky flex w-full border-b pt-3 text-default-xl top-[60px] bg-background'>
            <button className='border-b-2 border-black px-4 pb-2 font-semibold dark:border-alt-700'>
              전체
            </button>
            <button className='px-4 pb-2 text-gray-400 text-text-lg'>개발</button>
            <button className='px-4 pb-2 text-gray-400 text-text-lg'>학습</button>
          </div>

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
