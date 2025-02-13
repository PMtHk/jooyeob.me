import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getPost } from '@/lib/actions/public/post'
import { markdownToHTML } from '@/lib/util/markdownToHTML'
import { getKST } from '@/lib/util/getKST'
import { AuthProvider } from '@/contexts/auth/authContext'
import { EditButton } from '@/app/(post)/post/components/EditButton'
import { DeleteButton } from '@/app/(post)/post/components/DeleteButton'
import { MarkdownViewer } from '@/components/MarkdownViewer'

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
  const { title, tags, created_at, content, thumbnail_url, id } = await getPost(slug)

  const contentHTML = await markdownToHTML(content ?? '')

  return (
    <div className='min-h-screen w-full'>
      <div className='mx-auto flex max-w-[700px] flex-col break-keep p-10'>
        <article>
          <header>
            <h1 className='mt-9 text-display-lg md:text-display-xl'>{title}</h1>
            <div className='mt-5 flex flex-wrap'>
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className='mb-2 mr-1.5 cursor-pointer rounded-full bg-alt-100 px-2 py-1 text-default-sm text-alt-700 hover:bg-alt-200 dark:bg-alt-800 dark:text-alt-300 dark:hover:bg-alt-900'
                >
                  #{tag.name}
                </span>
              ))}
            </div>
            <div className='mt-5 flex items-center justify-between'>
              <div className='pt-2 text-default-xl'>
                <span>나주엽</span>
                <span className='px-1'>·</span>
                <span>{getKST(created_at!)}</span>
              </div>

              <div className='pt-2 text-default-md'>
                <AuthProvider>
                  <EditButton id={id} />
                  <DeleteButton id={id} />
                </AuthProvider>
              </div>
            </div>

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
          <div className='mt-12'>
            <MarkdownViewer html={contentHTML} />
          </div>
          <div
            className='prose mt-12 dark:prose-invert prose-a:text-primary prose-blockquote:rounded-sm prose-blockquote:border-primary-200 prose-blockquote:bg-alt-100 prose-blockquote:pr-1 prose-blockquote:not-italic prose-code:rounded-md prose-code:bg-alt-300 prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none dark:prose-blockquote:bg-alt-800 dark:prose-code:bg-alt-700'
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
          <button className='my-12 px-4 py-3'>공유</button>
        </article>

        <div>{/* 댓글 관련 */}</div>

        <div className='mb-12'>
          <div className='mt-12'>
            <h2 className='text-display-sm'>다른 글</h2>
            <div className='mt-6 flex flex-col gap-4'>
              <Link href='#' className='group flex gap-4'>
                <div className='h-[100px] w-[100px] flex-shrink-0 rounded-lg bg-alt-100 dark:bg-alt-800'></div>
                <div className='flex flex-col pt-2'>
                  <h3 className='text-display-sm group-hover:text-primary lg:text-display-md'>
                    외부 API 규칙을 준수하며 병렬로 많은 요청을 처리하기
                  </h3>
                  <div className='mt-2 text-default-lg'>2024년 12월 19일</div>
                </div>
              </Link>
              <Link href='#' className='group flex gap-4'>
                <div className='h-[100px] w-[100px] flex-shrink-0 rounded-lg bg-alt-100 dark:bg-alt-800'></div>
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
