import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPost } from '@/shared/libs/posts/actions'
import { getKST } from '@/shared/utils/getKST'
import { markdownToHTML } from '@/shared/libs/markdownToHTML'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const rawSlug = (await params).slug
  const slug = decodeURIComponent(rawSlug)
  const { title, summary, thumbnail_url } = await getPost(slug)

  return {
    title: title + ' | yeob 블로그',
    description: summary,
    openGraph: {
      images: [thumbnail_url ?? ''],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const rawSlug = (await params).slug
  const slug = decodeURIComponent(rawSlug)
  const { title, tags, created_at, content, thumbnail_url } = await getPost(slug)

  const contentHTML = await markdownToHTML(content ?? '')

  return (
    <div className='min-h-screen w-full'>
      <div className='mx-auto flex flex-col p-10 max-w-[700px] break-keep'>
        <article>
          <header>
            <h1 className='mt-9 text-display-lg md:text-display-xl'>{title}</h1>
            <div className='mt-5 flex flex-wrap'>
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className='mb-2 cursor-pointer rounded-full px-2 py-1 text-default-sm text-alt-700 bg-alt-100 mr-1.5 hover:bg-alt-200 dark:text-alt-300 dark:bg-alt-800 dark:hover:bg-alt-900'
                >
                  #{tag.name}
                </span>
              ))}
            </div>
            <section className='mt-5'>
              <div className='pt-2'>
                <span className='text-default-xl'>나주엽</span>
              </div>
              <div className='pt-1 text-default-md'>{getKST(created_at!)}</div>
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
          <div
            className='mt-12 prose-code:rounded-md prose-code:px-1 prose-blockquote:not-italic prose prose-blockquote:border-primary-200 prose-blockquote:pr-1 prose-blockquote:rounded-sm prose-blockquote:bg-alt-100  prose-a:text-primary prose-code:before:content-none prose-code:after:content-none prose-code:bg-alt-300 prose-code:py-0.5 dark:prose-code:bg-alt-700 dark:prose-invert dark:prose-blockquote:bg-alt-800'
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
          <button className='my-12 px-4 py-3'>공유</button>
        </article>

        <div>{/* 댓글 관련 */}</div>

        <div className='mb-12'>
          <div className='mt-12'>
            <h2 className='text-display-sm'>다른 글</h2>
            <div className='mt-6 flex flex-col gap-4'>
              <Link href='#' className='flex gap-4 group'>
                <div className='flex-shrink-0 rounded-lg w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm group-hover:text-primary lg:text-display-md'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='mt-2 text-default-lg'>2024년 12월 19일</div>
                </div>
              </Link>
              <Link href='#' className='flex gap-4 group'>
                <div className='flex-shrink-0 rounded-lg w-[100px] h-[100px] bg-alt-100 dark:bg-alt-800'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm group-hover:text-primary lg:text-display-md'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='mt-2 text-default-lg'>2024년 12월 19일</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
