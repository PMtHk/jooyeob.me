import Image from 'next/image'
import { getPost } from '@/shared/libs/posts/actions'
import { getKST } from '@/shared/utils/getKST'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const rawSlug = (await params).slug
  const slug = decodeURIComponent(rawSlug)
  const { title, tags, created_at, content, thumbnail_url } = await getPost(slug)

  return (
    <div className='w-full min-h-screen'>
      <div className='mx-auto flex flex-col max-w-[800px] break-keep p-6'>
        <article>
          <header className='pt-9'>
            <h1 className='mt-9 text-display-lg md:text-display-xl'>{title}</h1>
            <div className='flex flex-wrap mt-5'>
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className='text-default-sm text-alt-700 dark:text-alt-300 bg-alt-100 dark:bg-alt-800 dark:hover:bg-alt-900 rounded-full px-2 py-1 mr-1.5 mb-2 hover:bg-alt-200 cursor-pointer'
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <section className='mt-5'>
              <div className='css-zn4dem esnk6d53'>
                <div className='pt-2'>
                  <span className='text-default-xl'>나주엽</span>
                </div>
                <div className='text-default-md pt-1'>{getKST(created_at!)}</div>
              </div>
            </section>

            <div className='mt-12'>
              <Image
                src={thumbnail_url!}
                alt='thumbnail'
                width={0}
                height={0}
                sizes='100vw'
                className='h-full w-full rounded-lg object-cover object-center'
              />
            </div>
          </header>
          <div className='mt-12 text-default-xl'>{content}</div>
          <button className='my-12 px-4 py-3'>공유</button>
        </article>

        <div>{/* 댓글 관련 */}</div>

        <div className='mb-12'>
          <div className='mt-12'>
            <h2 className='text-display-sm'>다른 글</h2>
            <div className='flex flex-col gap-4 mt-6'>
              <a className='group flex gap-4'>
                <div className='flex-shrink-0 w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800 rounded-lg'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm lg:text-display-md group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='text-default-lg mt-2'>2024년 12월 19일</div>
                </div>
              </a>
              <a className='group flex gap-4'>
                <div className='flex-shrink-0 w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800 rounded-lg'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm lg:text-display-md group-hover:text-primary'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='text-default-lg mt-2'>2024년 12월 19일</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
